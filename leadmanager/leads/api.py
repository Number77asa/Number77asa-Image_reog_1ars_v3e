from leads.models import Lead
from rest_framework import viewsets, permissions
#view set allows us to create full CRUD api without needing to specify methods for functionality. 
#simlia to ruby on rails works with resourcecs  
from .serializers import LeadSerializer 

#Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    #a query that grabs all the leads 
    #note this grab all objects threw errors requuiring to need to go in settings.json
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
