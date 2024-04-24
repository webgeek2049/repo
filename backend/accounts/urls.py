# accounts/urls.py
from django.urls import path
from . import views
from .serializers import MyTokenObtainPairSerializer
urlpatterns = [
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('verify/', views.VerifyView.as_view(), name='verify'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('users/', views.UserListCreateView.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserRetrieveUpdateDestroyView.as_view(), name='user-detail'),
    path('user/', views.user_view, name='user_view'),
    path('refresh-token/', views.RefreshTokenView.as_view, name='refresh-token'),
    path('password/reset/', views.PasswordResetView.as_view(), name='password_reset'),
    path('password/reset/confirm/<uidb64>/<token>/', views.PasswordResetConfirmAPIView.as_view(), name='password_reset_confirm'),
    path('password/change/', views.PasswordChangeAPIView.as_view(), name='password_change'),
    
]
