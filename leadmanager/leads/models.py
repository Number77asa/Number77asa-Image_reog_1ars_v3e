from django.db import models
# line directly below, is for the authentication api
from django.contrib.auth.models import User


# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    # the model owner is for the authentication api; we want each owner/user to see only their leads; we passs in User model
    # if a user is deleted, we delete all their leads aswell
    owner = models.ForeignKey(
        User, related_name="leads",
        on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now=True)
    objects = models.Manager()
    # With Lead.objects.all() --> we can view all leads from all users.

    # Este es official models.py de dnjago para image upload
    # Required. The absolute filesystem path to a directory from which this FilePathField should get its choices. Example: "/home/images".
    # The one potential gotcha is that match applies to the base filename, not the full path. So, this example:
   # FilePathField(path="/home/images", match="foo.*", recursive=True)
    # ImageField class ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, **options)

    #import os
    #from django.conf import settings
    #from django.db import models
    # def images_path():
    #	return os.path.join(settings.LOCAL_FILE_DIR, 'images')
    # class MyModel(models.Model):
    #file = models.FilePathField(path=images_path)
    # FileField¶ (A file-upload field.)
    # class FileField(upload_to=None, max_length=100, **options)


# if statments for superuser:
# class BlogManager(models.Manager):
   # def get_queryset(self, request):
    #  query = Blog.objects.filter(author=request.user)
    # if request.user.is_superuser:
    #  query = UserProfile.objects.all()
    # return query
