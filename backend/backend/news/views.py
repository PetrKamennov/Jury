
from rest_framework import mixins
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet

from .models import NewsInfo
from .permissions import IsAdminOrReadOnly
from .serializers import NewsInfoSerializer

class NewsViewSet(APIView)

class EventsCreateViewSet(CreateAPIView)
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

class NewsViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.ListModelMixin,
                  GenericViewSet):

    queryset = NewsInfo.objects.all()
    serializer_class = NewsInfoSerializer
    permission_classes = (IsAdminOrReadOnly, )


    # def get_queryset(self):
    #     pk = self.kwargs.get("pk")
    #
    #     if not pk:
    #         return NewsInfo.objects.all()[:1]
    #
    #     return NewsInfo.objects.filter(pk=pk)
    #
    # @action(methods=['get'], detail=True)
    # def category(self, request, pk=None):
    #     news = NewsInfo.objects.get(pk=pk)
    #     return Response({'news': news.title})

# class NewsAPIList(generics.ListCreateAPIView):
#     queryset = NewsInfo.objects.all()
#     serializer_class = NewsInfoSerializer
#
#
# class NewsAPIUpdate(generics.UpdateAPIView):
#     queryset = NewsInfo.objects.all()
#     serializer_class = NewsInfoSerializer
#
#
# class NewsAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = NewsInfo.objects.all()
#     serializer_class = NewsInfoSerializer


