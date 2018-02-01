from api.urls import api_router
from views import TodoItemViewSet

api_router.register(r'TodoItem', TodoItemViewSet, base_name='todo_item')
# cz error:does not appear to have any patterns in it.
urlpatterns = api_router.urls
