from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from myapp.models import Project
from myapp.models import Profile

# Create your views here.
def main(request):
    template = loader.get_template('main.html')

    projects_data = Project.objects.all()
    profiles_data = Profile.objects.get(id=1)

    projects_context = {
        'projects_data': projects_data,
    }
    profiles_context = {
        'myname': profiles_data.myName,
        'myemail': profiles_data.myEmail,
        'mygender': profiles_data.myGender,
        'mybirth': profiles_data.myBirth,
        'myheight': profiles_data.myHeight,
        'myweight': profiles_data.myWeight,
        'mynumber': profiles_data.myNumber,
    }
    context = {}
    context.update(projects_context)
    context.update(profiles_context)

    return HttpResponse(template.render(context, request))