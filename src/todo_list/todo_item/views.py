# coding: utf-8

from models import TodoItem
from serializer import TodoItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets

class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer