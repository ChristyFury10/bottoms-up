from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    path('bars/', views.getBars, name="bars"),
    path('bars/<str:pk>/', views.getBar, name="bar"),


]