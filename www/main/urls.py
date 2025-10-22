from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from . import settings

urlpatterns = [
    path('', mainpage, name='mainpage'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)