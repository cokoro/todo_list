# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo_item', '0002_auto_20170502_1658'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='priority',
            field=models.IntegerField(null=True),
        ),
    ]
