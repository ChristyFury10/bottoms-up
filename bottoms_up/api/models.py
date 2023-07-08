from django.db import models

# Create your models here.

class Bar(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    hours = models.CharField(max_length=400)

    def __str__(self):
        return self.name