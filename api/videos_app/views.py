import json
import logging
import urllib.request

import django_filters.rest_framework
from rest_framework import filters, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from videos_app.helpers.convert_camelcase_to_underscore import \
    convert_data_camelcase_to_underscore

from .filters import VideoFilter
from .models import Video
from .serializers import VideoSerializer

DATA_URL = "https://gist.githubusercontent.com/nextsux/f6e0327857c88caedd2dab13affb72c1/raw/04441487d90a0a05831835413f5942d58026d321/videos.json"
DATA_PATH = "videos_app/data/data.json"
logger = logging.getLogger(__name__)


class VideoView(generics.ListCreateAPIView):
    queryset = Video.objects.all().order_by('id')
    serializer_class = VideoSerializer
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
        django_filters.rest_framework.DjangoFilterBackend,
    ]
    filterset_class = VideoFilter
    ordering_fields = ["id", "name"]
    search_fields = ["name"]

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = VideoSerializer(data=data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            response_data = serializer.data
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateVideosView(APIView):
    def post(self, _):
        """Get videos json data from URL, rename camelcase data keys to underscore, update downloaded data to DB"""
        try:
            # Download json data from URL and save it to file
            with urllib.request.urlopen(DATA_URL) as url:
                data = json.load(url)
            with open(DATA_PATH, "w") as outfile:
                json.dump(data, outfile)
            # Load updated data from downloaded file
            with open(DATA_PATH, encoding="utf-8") as data_file:
                data = json.loads(data_file.read())
                converted_data = convert_data_camelcase_to_underscore(data)
                for video_data in converted_data:
                    name = video_data.pop("name")
                    Video.objects.update_or_create(name=name, defaults=video_data)

            # Get videos which are in DB but, they are not in current downloaded json data
            videos_to_delete = Video.objects.all().exclude(
                name__in=[x["name"] for x in data]
            )
            logger.info(f"Deleted videos: {videos_to_delete}")
            videos_to_delete.delete()

        except Exception as e:
            return Response(
                {"error_message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        return Response(status=status.HTTP_204_NO_CONTENT)
