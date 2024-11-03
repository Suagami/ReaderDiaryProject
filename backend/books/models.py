from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from users.models import User


class Book(models.Model):
    STATUS_CHOICES = [
        ('planning', 'Планирую прочесть'),
        ('reading', 'Читаю'),
        ('finished', 'Прочитана'),
    ]

    GENRE_CHOICES = [
        ('fiction', 'Фантастика'),
        ('non_fiction', 'Науч-поп'),
        ('fantasy', 'Фэнтези'),
        ('mystery', 'Детектив'),
        ('drama', 'Драма'),
        ('science_fiction', 'Научная фантастика'),
        ('history', 'Историческая литература'),
        ('poetry', 'Проза'),
    ]

    user = models.ForeignKey(
        User,
        verbose_name='Читатель книги',
        on_delete=models.CASCADE,
        related_name='books'
    )
    title = models.CharField('Название книги', max_length=255)
    author = models.CharField('Автор книги', max_length=255)
    cover_image = models.ImageField('Обложка книги', upload_to='covers/', blank=True, null=True)
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        null=True,
    )
    main_characters = models.TextField('Главные герои', null=True, blank=True)
    main_idea = models.TextField('Главная мысль', null=True, blank=True)
    user_opinion = models.TextField('Мое отношение', null=True, blank=True)
    genre = models.CharField(
        verbose_name='Жанр',
        max_length=20,
        choices=GENRE_CHOICES,
        null=True,
    )
    status = models.CharField(
        'Статус книги',
        max_length=10,
        choices=STATUS_CHOICES,
        default='planning'
    )

    def __str__(self):
        return f'{self.author} "{self.title}"'

    class Meta:
        verbose_name = 'Книга'
        verbose_name_plural = 'Книги'
