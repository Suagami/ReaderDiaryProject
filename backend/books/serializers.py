from rest_framework import serializers

from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = [
            'id',
            'title',
            'author',
            'cover_image',
            'rating',
            'status',
            'genre',
            'main_characters',
            'main_idea',
            'user_opinion',
        ]
