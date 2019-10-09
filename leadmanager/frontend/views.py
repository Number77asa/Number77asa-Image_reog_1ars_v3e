from django.shortcuts import render

# Create your views here.

#so well have one method here called index which makes variable request, and return render; which takes in that request, and put tempalte you want to load.

#Note just creating a views.py doestn do anything, need to link url to it
def index(request):
    return render(request, 'frontend/index.html')
