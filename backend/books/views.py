from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated  # Require authentication

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
