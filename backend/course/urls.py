from django.urls import path
from .views import *


urlpatterns = [
    # Program urls
    path("", ProgramFilterView.as_view(), name="programs"),
    path("<int:pk>/detail/", program_detail, name="program_detail"),
    path("add/", program_add, name="add_program"),
    path("<int:pk>/edit/", program_edit, name="edit_program"),
    path("<int:pk>/delete/", program_delete, name="program_delete"),
    # Course urls
    path("course/<slug>/detail/", course_single, name="course_detail"),
    path("<int:pk>/course/add/", course_add, name="course_add"),
    path("course/<slug>/edit/", course_edit, name="edit_course"),
    path("course/delete/<slug>/", course_delete, name="delete_course"),
    # CourseAllocation urls
    path(
        "course/assign/", CourseAllocationFormView.as_view(), name="course_allocation"
    ),
    path(
        "course/allocated/",
        CourseAllocationFilterView.as_view(),
        name="course_allocation_view",
    ),
    path(
        "allocated_course/<int:pk>/edit/",
        edit_allocated_course,
        name="edit_allocated_course",
    ),
    path("course/<int:pk>/deallocate/", deallocate_course, name="course_deallocate"),
  
    # course registration
    path("course/registration/", course_registration, name="course_registration"),
    path("course/drop/", course_drop, name="course_drop"),
    path("my_courses/", user_course_list, name="user_course_list"),
]