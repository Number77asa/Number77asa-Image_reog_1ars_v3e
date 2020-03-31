from django.contrib import admin
from .models import Lead
admin.site.register(Lead)


def get_queryset(self):
        return self.request.Lead.objects.all()


# Register your models here.
