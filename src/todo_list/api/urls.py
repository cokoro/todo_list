from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^todo_list/', include('todo_list.urls', namespace='todo_list')),
]
