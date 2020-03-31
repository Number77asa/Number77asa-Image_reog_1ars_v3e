from rest_framework import routers
from .api import LeadViewSet
# from . import views
#from django.urls import path, include


router = routers.DefaultRouter()

#this creates the url path api/leads and /leads#
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
# path('admin/', admin.site.urls)
