# Generated by Django 4.2.2 on 2023-06-24 08:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0006_message'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='myBirth',
            new_name='birth',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='myEmail',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='myGender',
            new_name='gender',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='myHeight',
            new_name='height',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='myName',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='myNumber',
            new_name='phone',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='myWeight',
            new_name='weight',
        ),
    ]