from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Bar
from .serializers import BarSerializer
# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
        'Endpoint': '/bars/',
        'method': 'GET',
        'body': None, 
        'description': 'return array of bars/restaurants'
        },
        {
        'Endpoint': '/bars/id',
        'method': 'GET',
        'body': None, 
        'description': 'return a single bar'
        },
        {
        'Endpoint': '/bars/create',
        'method': 'POST',
        'body': {'body': ""}, 
        'description': 'creates a new bar from a post request'
        },
        {
        'Endpoint': '/bars/id/update/',
        'method': 'PUT',
        'body': {'body': ""},
        'description': 'Creates an existing bar with data sent in post request'
        },
        {
        'Endpoint': '/bars/id/delete/',
        'method': 'DELETE',
        'body': None,
        'description': 'Deletes and exiting bar'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getBars(request):
    bars = Bar.objects.all()
    serializer =BarSerializer(bars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBar(request, pk):
    bar = Bar.objects.get(id=pk)
    serializer =BarSerializer(bar, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateBar(request, pk):
    data = request.data
    bar = Bar.objects.get(id=pk)
    serializer = BarSerializer(instance=bar, data=data)

    if serializer.is_valid():
       serializer.save()

    return Response(serializer.data) 

@api_view(['DELETE'])
def deleteBar(request, pk):
    bar = Bar.objects.get(id=pk)
    bar.delete()
    return Response("Bar Deleted")