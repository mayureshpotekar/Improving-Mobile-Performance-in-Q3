from django.urls import path
from .views import get_user_stories

urlpatterns = [
    path('api/user-stories/', get_user_stories, name='get_user_stories'),
]
