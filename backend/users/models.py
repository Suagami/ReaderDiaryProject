from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True, blank=False)
    avatar = models.ImageField(upload_to="uploads/avatars", blank=True, null=True)

    def __str__(self):
        return self.email
