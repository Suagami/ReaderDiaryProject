from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    GENDER_CHOICES = [
        ('f', 'женский'),
        ('m', 'мужской'),
    ]

    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True, blank=False)
    avatar = models.ImageField(upload_to="uploads/avatars", blank=True, null=True)

    first_name = models.CharField('Имя пользователя', max_length=50, blank=True, null=True)
    last_name = models.CharField('Фамилия пользователя', max_length=50, blank=True, null=True)
    gender = models.CharField('Пол пользователя', max_length=1, choices=GENDER_CHOICES, null=True)
    date_of_birth = models.DateField("Дата рождения", blank=True, null=True)

    def __str__(self):
        if self.first_name and self.second_name:
            return f"{self.first_name} {self.last_name}"
        return self.email
