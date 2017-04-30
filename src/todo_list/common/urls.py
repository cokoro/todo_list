from django.conf.urls import include, url
from django.contrib import admin
from api.urls import api_router

urlpatterns = [
    # Examples:
    # url(r'^$', 'todo_list.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(api_router.urls)),
    url(r'^api/', include('api.urls', namespace='api')),
]
