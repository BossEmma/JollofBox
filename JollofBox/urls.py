"""JollofBox URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from jollof_box import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('search/<str:search>', views.search, name="search"),

    path('series/', views.series_list, name="series_list"),
    path('movies/', views.movie_list, name="movies_list"),  

    path('box-office/', views.box_office, name="box-office"),  
    
    path('series/<str:title>/', views.series_download, name="series"),
    path('movies/<str:title>/', views.movie_download, name="movies"),

    path('advertise/', views.advertise, name="advertise"),
    path('support/', views.support, name="support"),
    path('contact/', views.contact, name="contact"),
    path('disclaimer/', views.disclaimer, name="disclaimer"),
    path('privacy/', views.privacy, name="privacy"),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = 'jollof_box.views.handle404'