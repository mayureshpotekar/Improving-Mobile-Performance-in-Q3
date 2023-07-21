from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserStory
from .serializers import UserStorySerializer

@api_view(['GET'])
def get_user_stories(request):
    user_stories = UserStory.objects.all()
    serializer = UserStorySerializer(user_stories, many=True)
    return Response(serializer.data)
