# coding: utf-8

from django.db import models

class TodoItem(models.Model):
    title = models.CharField(max_length =256)
    content = models.CharField(max_length=1024)
    check = models.BooleanField(default=False)
    deadline = models.DateTimeField(null=True)

    def __unicode__(self):
        return "<todo_item %d>" % self.id