# Generated by Django 4.2.2 on 2023-06-22 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='myGender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1),
        ),
    ]