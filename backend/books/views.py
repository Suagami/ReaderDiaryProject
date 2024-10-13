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
        return Book.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Автоматически устанавливает user как текущего пользователя при создании новой книги
        serializer.save(user=self.request.user)
