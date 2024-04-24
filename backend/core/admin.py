from django.contrib import admin
from django.contrib.auth.models import Group

from .models import Session, NewsAndEvents



admin.site.register(Session)
admin.site.register(NewsAndEvents)
