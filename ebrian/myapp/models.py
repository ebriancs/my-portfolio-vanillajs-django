from django.db import models

# Create your models here.

# PROJECT
class Project(models.Model):
    project_name = models.CharField(max_length=50)
    project_description = models.TextField()
    project_link = models.URLField()

    def __str__(self):
        return f'[{self.id}] {self.project_name}'

# PROFILE
class Profile(models.Model):
    GENDER_OPTIONS = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, null=True)
    phone = models.CharField(max_length=20, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_OPTIONS)
    birth = models.DateField()
    height = models.IntegerField()
    weight = models.IntegerField()

    def __str__(self):
        return f'[{self.id}] {self.name}'

# MESSAGE
class Message(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return f'[{self.id}] {self.name} / {self.email} / ({self.subject}) {self.message}'
    