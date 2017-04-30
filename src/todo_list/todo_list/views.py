# coding: utf-8

from django.http import JsonResponse
from rest_framework.views import APIView
from todo_list.serializer import TodoItemSerializer
from rest_framework.response import Response
from rest_framework import status


class TodoItemDetail(APIView):
    def post(self, request, format=None):
        serializer = TodoItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
            #return Response(serializer.data, status=status.HTTP_201_CREATED)
