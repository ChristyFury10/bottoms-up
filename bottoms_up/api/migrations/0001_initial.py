# Generated by Django 4.2.2 on 2023-07-11 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='BarName', max_length=100)),
                ('address', models.CharField(default='BarAddress', max_length=200)),
                ('hours', models.CharField(default='BarHours', max_length=400)),
            ],
        ),
    ]
