from django.db import models
from django.urls import reverse
from accounts.models import Student
from course.models import Course, Lesson


YEARS = (
    (1, "1st Bachelor"),
    (2, "2nd Bachelor"),
    (3, "3rd Bachelor"),
    (4, "1st Master"),
    (5, "2nd Master"),
)

# LEVEL_COURSE = "Level course"
Beginner = "Beginner"
Intermediate = "Intermediate"
Advanced = "Advanced"

LEVEL = (
    # (LEVEL_COURSE, "Level course"),
    (Beginner, "Beginner"),
    (Intermediate, "Intermediate"),
    (Advanced, "Advanced"),
)



class TakenCourseManager(models.Manager):
    def new(self, user=None):
        user_obj = None
        if user is not None:
            if user.is_authenticated():
                user_obj = user
        return self.model.objects.create(user=user_obj)


class TakenCourse(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(
        Course, on_delete=models.CASCADE, related_name="taken_courses"
    )
    quiz = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    total = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)
    point = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)

    def get_absolute_url(self):
        return reverse("course_detail", kwargs={"slug": self.course.slug})

    def __str__(self):
        return "{0} ({1})".format(self.course.title, self.course.code)

    # @staticmethod
    def get_total(self, quiz):
        return (
            + float(quiz)
        )


class CourseProgress(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    taken_course = models.ForeignKey(TakenCourse, on_delete=models.CASCADE)
    completed_lesson = models.ForeignKey(Lesson, on_delete=models.SET_NULL, null=True, blank=True)
    total_time_spent = models.DurationField(null=True, blank=True)  # Track total time spent on the course
    completed_lesson = models.ForeignKey(Lesson, on_delete=models.SET_NULL, null=True)
    completion_date = models.DateField(auto_now_add=True)
    def __str__(self):
        return f"Course Progress for {self.student.name} - {self.taken_course.course.title}"

class Result(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    session = models.CharField(max_length=100, blank=True, null=True)
    level = models.CharField(max_length=25, choices=LEVEL, null=True)
