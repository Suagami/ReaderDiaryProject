from typing import Any

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response, exception_handler

from .models import Book
from .serializers import BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]  # Только для аутентифицированных пользователей

    def get_queryset(self):
        # Возвращает книги только текущего пользователя
        queryset = super().get_queryset().filter(user=self.request.user)
        if status := self.request.query_params.get('status'):
            queryset = queryset.filter(status=status)
        if (order := self.request.query_params.get('order')) and order == 'alphabet':
            queryset = queryset.order_by('title')
        return queryset

    def perform_create(self, serializer):
        # Автоматически устанавливает user как текущего пользователя при создании новой книги
        serializer.save(user=self.request.user)


def api_exception_handler(exc: Exception, context: dict[str, Any]) -> Response:
    """Custom API exception handler."""

    response = exception_handler(exc, context)

    if response is not None:

        for field, error in response.data.items():
            if field == 'detail':
                error_payload = {"error": error}
            else:
                error_payload = {"error": f'Некорректное значение {field}: {error[0]}'}
            response.data = error_payload
            return response
