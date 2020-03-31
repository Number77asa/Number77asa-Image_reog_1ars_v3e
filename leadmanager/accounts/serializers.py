# want to be able to register a user atleast with postman
# django already has a user model, weree just using knox for tokens
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
# very similar to the lead searlizer we used


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
# at the same level as the class, we create a method here with define (def)
# this methdo creates the use r and returns it


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user

# Login Serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        # the below comes from the prebuilt modueles in the authentication moduel; imported above.
        # e.g. is_active is a property of user, which are modules that are made for:
        # (django auth documentation, rest framework document, and knox documentat)
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
