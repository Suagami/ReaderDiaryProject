from django.urls import path

from ..views import UserProfileViewSet


urlpatterns = [
    path(
        '',
        UserProfileViewSet.as_view({'get': 'profile', 'patch': 'profile'}),
        name='user-detail-profile'
    ),
]
