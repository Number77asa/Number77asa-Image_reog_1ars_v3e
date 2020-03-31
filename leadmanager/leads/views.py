from django.shortcuts import render

# the line below was not included by brad..may need to take it out.


def index(request):
    return render(request, 'frontend/index.html')
# Create your views here.
