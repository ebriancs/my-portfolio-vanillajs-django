# Generated by Django 4.2.2 on 2023-06-23 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_alter_profile_myheight_alter_profile_myweight'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='myEmail',
            field=models.EmailField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='myNumber',
            field=models.CharField(max_length=20, null=True),
        ),
    ]