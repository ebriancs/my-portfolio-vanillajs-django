from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from myapp.models import Project

# Create your views here.
def main(request):
    projects_data = Project.objects.all()
    template = loader.get_template('main.html')
    context = {
        'projects_data': projects_data,
    }
    return HttpResponse(template.render(context, request))