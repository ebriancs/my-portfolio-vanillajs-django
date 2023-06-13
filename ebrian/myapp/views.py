from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from myapp.models import Project

# Create your views here.
def main(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())

def projects(request):
    data = Project.objects.all()
    return render(request, 'main.html', {'data': data})