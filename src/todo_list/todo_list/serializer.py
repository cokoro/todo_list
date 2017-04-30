# coding: utf-8

from rest_framework import serializers
from models import TodoItem

class TodoItemSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True, allow_blank=False, max_length=256)
    content = serializers.CharField(required=True, allow_blank=True, max_length=1024)
    check = serializers.BooleanField(required=False, default=False)
    deadline = serializers.DateTimeField(required=False)

    def create(self, validated_data):
        return TodoItem.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.check = validated_data.get('check', instance.check)
        instance.deadline = validated_data.get('deadline', instance.deadline)
        instance.save()
        return instance