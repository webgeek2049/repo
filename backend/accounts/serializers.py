from rest_framework import serializers
from django.contrib.auth import get_user_model


from rest_framework import serializers
from .models import User
import re

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    is_student = serializers.BooleanField(default=False)
    is_teacher = serializers.BooleanField(default=False)
    first_name = serializers.CharField(required=True)  # Include first_name field
    last_name = serializers.CharField(required=True)   # Include last_name field

    class Meta:
        model = User
        fields = ['email', 'password', 'is_student', 'is_teacher', 'first_name', 'last_name']

    def create(self, validated_data):
        email = validated_data.get('email')
        name_match = re.match(r'^([^@]+)@', email)
        if not name_match:
            raise serializers.ValidationError("Invalid email format")

        first_name, last_name = name_match.group(1).split('.', 1)
        validated_data['first_name'] = first_name
        validated_data['last_name'] = last_name

        # If username is not provided, construct it from first name and last name
        username = validated_data.get('username')
        if not username:
            username = f"{first_name.capitalize()} {last_name.capitalize()}"
        validated_data['username'] = username

        return super().create(validated_data)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super().get_token(user)
    # Add custom claims to the token (e.g., username, user_id)
    token['username'] = user.username
    token['user_id'] = user.id
    return token

    
from django.contrib.auth.forms import PasswordResetForm, SetPasswordForm
from rest_framework import serializers

class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        # Validate the email address
        try:
            PasswordResetForm({'email': value})
        except Exception as e:
            raise serializers.ValidationError(str(e))
        return value

    def save(self):
        # Trigger the password reset process
        request = self.context.get('request')
        PasswordResetForm(request.data).save(
            use_https=request.is_secure(),
            from_email=None,
            request=request
        )

class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField()
    new_password1 = serializers.CharField()
    new_password2 = serializers.CharField()

    def validate(self, data):
        # Validate password change data
        if data['new_password1'] != data['new_password2']:
            raise serializers.ValidationError("The new passwords do not match.")
        return data

    def save(self, **kwargs):
        # Trigger the password change process
        user = self.context['request'].user
        password_form = SetPasswordForm(user, self.validated_data)
        if password_form.is_valid():
            password_form.save()
        else:
            raise serializers.ValidationError(password_form.errors)
