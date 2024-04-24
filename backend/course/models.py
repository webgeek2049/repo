from django.db import models
from django.urls import reverse
from django.conf import settings
from django.core.validators import FileExtensionValidator
from django.db.models.signals import pre_save, post_save, post_delete
from django.db.models import Q
from django.dispatch import receiver

# project import
from .utils import *
from core.models import ActivityLog

class ProgramManager(models.Manager):
    def search(self, query=None):
        queryset = self.get_queryset()
        if query is not None:
            or_lookup = Q(title__icontains=query) | Q(summary__icontains=query)
            queryset = queryset.filter(
                or_lookup
            ).distinct()  # distinct() is often necessary with Q lookups
        return queryset


class Program(models.Model):
    title = models.CharField(max_length=150, unique=True)
    summary = models.TextField(null=True, blank=True)
    objects = ProgramManager()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("program_detail", kwargs={"pk": self.pk})


@receiver(post_save, sender=Program)
def log_save(sender, instance, created, **kwargs):
    verb = "created" if created else "updated"
    ActivityLog.objects.create(message=f"The program '{instance}' has been {verb}.")


@receiver(post_delete, sender=Program)
def log_delete(sender, instance, **kwargs):
    ActivityLog.objects.create(message=f"The program '{instance}' has been deleted.")


class CourseManager(models.Manager):
    def search(self, query=None):
        queryset = self.get_queryset()
        if query is not None:
            or_lookup = (
                Q(title__icontains=query)
                | Q(summary__icontains=query)
                | Q(code__icontains=query)
                | Q(slug__icontains=query)
            )
            queryset = queryset.filter(
                or_lookup
            ).distinct()  # distinct() is often necessary with Q lookups
        return queryset

from django.db.models.signals import post_save
from django.dispatch import receiver

class Course(models.Model):
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"

    LEVEL_CHOICES = [
        (BEGINNER, "Beginner"),
        (INTERMEDIATE, "Intermediate"),
        (ADVANCED, "Advanced"),
    ]

    slug = models.SlugField(blank=True, unique=True)
    title = models.CharField(max_length=200, null=True)
    summary = models.TextField(max_length=200, blank=True, null=True)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    level = models.CharField(max_length=25, choices=LEVEL_CHOICES, null=True)
    objects = CourseManager()


    def __str__(self):
        return "{0} ({1})".format(self.title, self.code)

    def get_absolute_url(self):
        return reverse("course_detail", kwargs={"slug": self.slug})



    def get_beginner_lessons(self):
        return self.lessons.filter(level='beginner')

    def get_intermediate_lessons(self):
        return self.lessons.filter(level='intermediate')

    def get_advanced_lessons(self):
        return self.lessons.filter(level='advanced')
    @classmethod
    def create_course(cls, title, code, credit, summary, program, level, is_elective):
      """Creates a new course object with the specified details."""
      if level not in [choice[0] for choice in cls.LEVEL_CHOICES]:
          raise ValueError("Invalid level provided.")

      course = cls.objects.create(
          title=title,
          code=code,
          credit=credit,
          summary=summary,
          program=program,
          level=level,
          is_elective=is_elective,
      )
      return course
    objects = CourseManager()

    def __str__(self):
        return "{0} ({1})".format(self.title, self.code)

# Define the signal handler function outside of the Course class
@receiver(post_save, sender=Course)
def create_course_levels(sender, instance, created, **kwargs):
    if created:
        for level, _ in Course.LEVEL_CHOICES:
            Lesson.objects.create(course=instance, level=level, text_content="")

# Connect the signal handler to the post_save signal
post_save.connect(create_course_levels, sender=Course)
    

    
from django.db.models.signals import post_save, post_delete, pre_save
from django.dispatch import receiver

@receiver(post_save, sender=Course)
def log_course_save(sender, instance, created, **kwargs):
    verb = "created" if created else "updated"
    ActivityLog.objects.create(message=f"The course '{instance}' has been {verb}.")

@receiver(post_delete, sender=Course)
def log_course_delete(sender, instance, **kwargs):
    ActivityLog.objects.create(message=f"The course '{instance}' has been deleted.")

@receiver(pre_save, sender=Course)
def course_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


class CourseAllocation(models.Model):
    teacher = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="allocated_teacher",
    )
    courses = models.ManyToManyField(Course, related_name="allocated_course")
    session = models.ForeignKey(
        "core.Session", on_delete=models.CASCADE, blank=True, null=True
    )

    def __str__(self):
        return self.teacher.get_full_name

    def get_absolute_url(self):
        return reverse("edit_allocated_course", kwargs={"pk": self.pk})


class Lesson(models.Model):
    LEVEL_CHOICES = (
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    )
    
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    text_content = models.TextField()

    def __str__(self):
        return f"{self.course.title} - {self.get_level_display()}"
    
    def create_lesson(course, level, text_content):
     """Creates a new lesson with the specified level and content."""
     if level not in [choice[0] for choice in Course.LEVEL_CHOICES]:
      raise ValueError("Invalid level provided.")
  
     new_lesson = Lesson.objects.create(
      course=course,
      level=level,
      text_content=text_content,
    )
     return new_lesson
