from rest_framework.serializers import ModelSerializer
from .models import Bar

class BarSerializer(ModelSerializer):
    class Meta:
        model = Bar
        fields = [
            'id',
            'name',
            'address', 
            'hours'
        ]