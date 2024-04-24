from django.db import models
from django.dispatch import receiver
from django.urls import reverse
from django.contrib.auth.models import AbstractUser,  BaseUserManager
from django.conf import settings
from django.db.models import Q
from PIL import Image
import re
from .validators import ASCIIUsernameValidator


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)

        # Extract first name and last name from email address
        name_match = re.match(r'^([^@]+)@', email)
        if not name_match:
            raise ValueError("Invalid email format")
        first_name, last_name = name_match.group(1).split('.', 1)

        # Set username from extracted first name and last name
        username = f"{first_name.capitalize()} {last_name.capitalize()}"

        user = self.model(email=email, username=username, **extra_fields)

        # Extract university from email address
        university_match = re.search(r'@(.+)', email)
        if university_match:
            university = university_match.group(1)
            user.university = university

        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    email = models.EmailField(unique=True) 
    username = models.CharField(max_length=150, unique=False)  
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser
    is_student = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    is_specialist = models.BooleanField(default=False)
    picture = models.ImageField(
        upload_to="profile_pictures/%y/%m/%d/", default="default.png", null=True
    )
    
    university = models.CharField(max_length=100, blank=True, null=True)
    username_validator = ASCIIUsernameValidator()

    objects = CustomUserManager()

    class Meta:
        ordering = ("-date_joined",)

    @property
    def get_full_name(self):
        full_name = self.username
        if self.first_name and self.last_name:
            full_name = self.first_name + " " + self.last_name
        return full_name

    @classmethod
    def get_student_count(cls):
        return cls.objects.filter(is_student=True).count()
    @classmethod
    def get_teacher_count(cls):
        return cls.objects.filter(is_teacher=True).count()
    @classmethod
    def get_specialist_count(cls):
        return cls.objects.filter(is_specialist=True).count()
    @classmethod
    def get_superuser_count(cls):
        return cls.objects.filter(is_superuser=True).count()

    def __str__(self):
        return "{} ({})".format(self.username, self.get_full_name)

    @property
    def get_user_role(self):
        if self.is_superuser:
            role = "Admin"
        elif self.is_student:
            role = "Student"
        elif self.is_teacher:
            role = "Teacher"
        elif self.is_specialist:
            role = "Specialist"
        return role

    def get_picture(self):
        try:
            return self.picture.url
        except:
            no_picture = settings.MEDIA_URL + "default.png"
            return no_picture

    def get_absolute_url(self):
        return reverse("profile_single", kwargs={"id": self.id})

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        try:
            img = Image.open(self.picture.path)
            if img.height > 300 or img.width > 300:
                output_size = (300, 300)
                img.thumbnail(output_size)
                img.save(self.picture.path)
        except:
            pass

    def delete(self, *args, **kwargs):
        if self.picture.url != settings.MEDIA_URL + "default.png":
            self.picture.delete()
        super().delete(*args, **kwargs)


class StudentManager(models.Manager):
    def search(self, query=None):
        qs = self.get_queryset()
        if query is not None:
            or_lookup = Q(student_year__icontains=query) | Q(program__icontains=query)
            qs = qs.filter(or_lookup).distinct()  # distinct() often needed with Q lookups
        return qs


YEARS = (
    (1, "1st Bachelor"),
    (2, "2nd Bachelor"),
    (3, "3rd Bachelor"),
    (4, "1st Master"),
    (5, "2nd Master"),
)


class Student(models.Model):
    student = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    #id_number = models.CharField(max_length=20, unique=True, blank=True)
    student_year = models.CharField(max_length=20)
  
    objects = StudentManager()

    class Meta:
        ordering = ("-student__date_joined",)

    def __str__(self):
        return self.student.get_full_name



    def get_absolute_url(self):
        return reverse("profile_single", kwargs={"id": self.id})

    def delete(self, *args, **kwargs):
        self.student.delete()
        super().delete(*args, **kwargs)

 