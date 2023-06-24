from django.db import models

# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=50)
    project_description = models.TextField()
    project_link = models.URLField()

    def __str__(self):
        return f'{self.project_name}'
    
class Profile(models.Model):
    GENDER_OPTIONS = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    myName = models.CharField(max_length=50)
    myEmail = models.EmailField(max_length=50, null=True)
    myGender = models.CharField(max_length=1, choices=GENDER_OPTIONS)
    myBirth = models.DateField()
    myHeight = models.IntegerField()
    myWeight = models.IntegerField()
    myNumber = models.CharField(max_length=20, null=True)

    def __str__(self):
        return f'{self.id} {self.myName}'
    