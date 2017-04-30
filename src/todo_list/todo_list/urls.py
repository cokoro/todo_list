from django.conf.urls import include, url
from django.contrib import admin
from views import TodoItemDetail

urlpatterns = [
    # Examples:
    # url(r'^$', 'todo_list.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^todo_items/(?P<pk>[0-9]+)/$', TodoItemDetail.as_view()),
]
