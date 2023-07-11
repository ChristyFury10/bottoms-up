from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    path('bars/', views.getBars, name="bars"),
    path('bars/create', views.createBar, name="create-bar"),
    path('bars/<str:pk>/update', views.updateBar, name="update-bar"),
    path('bars/<str:pk>/', views.getBar, name="bar"),
    path('bars/<str:pk>/delete', views.deleteBar, name="delete-bar"),



]