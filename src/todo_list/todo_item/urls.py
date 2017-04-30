from api.urls import api_router
from views import TodoItemViewSet

api_router.register(r'TodoItem', TodoItemViewSet, base_name='todo_item')
