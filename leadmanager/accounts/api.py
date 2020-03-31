from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
# we just created this seralizers.py file within this same directory
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

# *args & &kwargs is a way python says it can take more arguments
    def post(self, request, *args, **kwargs):
        # request.data -> any data that comes in is going to get passed through this seraializer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # we save user in database
        user = serializer.save()
        # finally we want send response back ; we pass in user object, and a method
        # the user is 1-1 with the token it gives, so when u make a request from front end
        # wheter its (postman, react, vue, angular) w/e and it can be used to login immediately;
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # needed to add teh [1] (different from brads..why?) --> The Token.objects.create returns a tuple (instance, token). just use the second position [1]
            "token": AuthToken.objects.create(user)[1]
        })

# Login API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        # line below, get the data, pass the data in
        serializer = self.get_serializer(data=request.data)
        # check that data in is valid with the prebuilt module of rules that check if its valid
        serializer.is_valid(raise_exception=True)
        # the validated_data module validates the registered user in the registser-api above
        user = serializer.validated_data
        # the return for the method/function post above, will be same as registered user
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
# Get User API
# So permissions.isathen says: we want this route to be protected; needs a valid toek to access it


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
# it will return whatever user is associated with that token

    def get_object(self):
        return self.request.user
