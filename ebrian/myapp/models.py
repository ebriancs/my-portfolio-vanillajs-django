from django.db import models

# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=50)
    project_description = models.TextField()
    project_link = models.URLField()