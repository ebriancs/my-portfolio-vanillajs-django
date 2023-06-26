from django import forms
from myapp.models import Message

class MessageForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your Name'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Your Email'}))
    subject = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Your Subject'}))
    message = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Your Message'}))

    class Meta:
        model = Message
        fields = ['name', 'email', 'subject', 'message']