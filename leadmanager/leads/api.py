from leads.models import Lead
from rest_framework import viewsets, permissions
# view set allows us to create full CRUD api without needing to specify methods for functionality.
# simlia to ruby on rails works with resourcecs
from .serializers import LeadSerializer

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    # a query that grabs all the leads
    # note this grab all objects threw errors requuiring to need to go in settings.json
    # 0)pero primero chequea que es athenticado, y llama LeadSeralizer de serializer.py para agarrar todo!
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    # self q significa el user, debe ser parametro de fncn input arriba.
    # to create a request; relative to self (current loged in user)

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# if serializer gets all leads from browser, then where is the fncn used?
# in models.py, we passed in user model from django, so
