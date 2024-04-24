
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import User
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate, login, logout
import re
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import ValidationError
from .serializers import UserSerializer
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.contrib.auth.views import PasswordResetConfirmView
from django.utils.http import urlsafe_base64_decode
from .serializers import PasswordResetSerializer, PasswordChangeSerializer
from rest_framework import status
from rest_framework.authentication import SessionAuthentication

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
 

class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    

from django.http import QueryDict

# views.py
import re
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from .utils import generate_verification_code, send_verification_email, verify_verification_code
from rest_framework_jwt.settings import api_settings
from .serializers import UserSerializer, PasswordResetSerializer, MyTokenObtainPairSerializer
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

User = get_user_model()
from django.contrib.auth.hashers import make_password  # Import make_password for password hashing

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        # Hash the password before saving the user
        password = self.request.data.get('password')  # Assuming 'password' is provided in the request data
        hashed_password = make_password(password)
        serializer.validated_data['password'] = hashed_password

        # Include username before saving the user
        username = self.request.data.get('username')  # Assuming 'username' is provided in the request data
        serializer.validated_data['username'] = username
        
        user = serializer.save()

        # Extract university from email address and save it
        email = serializer.validated_data.get('email')
        university_match = re.search(r'@(.+?)\.', email)
        if university_match:
            university = university_match.group(1)
            user.university = university
            user.save()

        # Generate verification code
        verification_code = generate_verification_code(email)

        # Send verification email
        send_verification_email(email, verification_code)

        return user

class VerifyView(APIView):
    permission_classes = [AllowAny] 

    def post(self, request):
        email = request.data.get('email')
        verification_code = request.data.get('verification_code')

        if not email or not verification_code:
            return Response({"error": "Both email and verification code are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Verify the verification code
        verification_result = verify_verification_code(email, verification_code)

        if verification_result == "verified":
            # Perform actions for successful verification, like setting is_verified to True
            return Response({"message": "Account verified successfully."}, status=status.HTTP_200_OK)
        elif verification_result == "invalid_code":
            return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Error verifying account."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

from rest_framework_simplejwt.views import TokenObtainPairView
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from rest_framework_simplejwt.tokens import RefreshToken
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)
        if not user:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        user_data = {
            'id': user.id,
            'email': user.email,
            'is_student': user.is_student,
            'is_teacher': user.is_teacher,
            'access_token': access_token,
            'refresh_token': str(refresh.access_token),
        }

        return Response(user_data, status=status.HTTP_200_OK)

class LogoutView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)
    
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

class RefreshTokenView(APIView):
    permission_classes = [AllowAny]  # Allow unauthenticated requests

    def post(self, request):
        refresh_token = request.data.get('refresh_token')

        # Verify refresh token using SimpleJWT's validate function
        try:
            # Attempt to validate the refresh token
            token = RefreshToken(refresh_token)
            token.verify()
            # If the token is valid, return a new access token
            new_access_token = token.access_token
            return Response({'access_token': str(new_access_token)}, status=status.HTTP_200_OK)
        except TokenError as e:
            # Handle token validation failure
            return Response({'error': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_view(request):
  """
  Retrieves user information for the authenticated user.
  """
  user = request.user  # Access the authenticated user from the request
  username = user.username  # Extract username

  return Response({'username': username})

class PasswordResetView(generics.GenericAPIView):
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Password reset email has been sent'}, status=status.HTTP_200_OK)

class PasswordResetConfirmAPIView(PasswordResetConfirmView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Password has been reset successfully'}, status=status.HTTP_200_OK)

class PasswordChangeAPIView(generics.GenericAPIView):
    serializer_class = PasswordChangeSerializer
    permission_classes = [permissions.AllowAny]


    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'Password has been changed successfully'}, status=status.HTTP_200_OK)