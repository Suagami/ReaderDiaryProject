# Generated by Django 5.1.2 on 2024-10-13 13:55

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название книги')),
                ('author', models.CharField(max_length=255, verbose_name='Автор книги')),
                ('cover_image', models.ImageField(blank=True, null=True, upload_to='covers/', verbose_name='Обложка книги')),
                ('rating', models.PositiveSmallIntegerField(null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('main_characters', models.TextField(blank=True, null=True, verbose_name='Главные герои')),
                ('main_idea', models.TextField(blank=True, null=True, verbose_name='Главная мысль')),
                ('user_opinion', models.TextField(blank=True, null=True, verbose_name='Мое отношение')),
                ('genre', models.CharField(choices=[('fiction', 'Фантастика'), ('non_fiction', 'Науч-поп'), ('fantasy', 'Фэнтези'), ('mystery', 'Детектив'), ('drama', 'Драма'), ('science_fiction', 'Научная фантастика'), ('history', 'Историческая литература'), ('poetry', 'Проза')], max_length=20, null=True, verbose_name='Жанр')),
                ('status', models.CharField(choices=[('planning', 'Планирую прочесть'), ('reading', 'Читаю'), ('finished', 'Прочитана')], default='planning', max_length=10, verbose_name='Статус книги')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='books', to=settings.AUTH_USER_MODEL, verbose_name='Читатель книги')),
            ],
            options={
                'verbose_name': 'Книга',
                'verbose_name_plural': 'Книги',
            },
        ),
    ]
