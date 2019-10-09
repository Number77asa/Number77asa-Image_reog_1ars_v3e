from rest_framework import serializers
#note what other undeclared vars does rest_framework have? 
from leads.models import Lead
#Lead is the fnctn that gets the field names from browser

#Lead Serializer ; this create seralizer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__" 