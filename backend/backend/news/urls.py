from django.urls import path, include
from .views import *

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'newsList', NewsViewSet, basename='newsInfo')


urlpatterns = [
    path('', include(router.urls)),

    # path('newsList/', NewsViewSet.as_view({'get': 'list'})),
    # # path('newsList/<int:pk>/', NewsAPIList.as_view()),
    # path('newsList/<int:pk>/', NewsViewSet.as_view({'put': 'update'}))
]