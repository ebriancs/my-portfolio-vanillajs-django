from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from myapp.models import Project, Profile
from myapp.forms import MessageForm
from django.contrib import messages

# Create your views here.

# MESSAGES
def message(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            form.save()
            form = MessageForm()
    else:
        form = MessageForm()
    
    context = {
        'form': form,
    }
    return context

# PROJECTS
def project(request):
    data = Project.objects.all()
    context = {
        'data': data,
    }
    return context

# PROFILES
def profile(request):
    data = Profile.objects.get(id=1)
    context = {
        'name': data.name,
        'email': data.email,
        'phone': data.phone,
        'gender': data.gender,
        'birth': data.birth,
        'height': data.height,
        'weight': data.weight,
    }
    return context

# MAIN
def main(request):
    template = loader.get_template('main.html')

    profiles_context = profile(request)
    projects_context = project(request)
    messages_context = message(request)

    context = {}
    context.update(profiles_context)
    context.update(projects_context)
    context.update(messages_context)

    return HttpResponse(template.render(context, request))
