from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import BookViewSet


# Create a router and register the BookViewSet
router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    # Include the router-generated URLs for the BookViewSet
    path('', include(router.urls)),
]
