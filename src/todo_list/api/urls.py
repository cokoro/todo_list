from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter

api_router = DefaultRouter()

urlpatterns = [
    url(r'^todo_item/', include('todo_item.urls', namespace='todo_item')),
]
