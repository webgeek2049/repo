# Generated by Django 4.0.8 on 2024-04-14 20:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0006_remove_course_semester_remove_course_year_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='code',
        ),
        migrations.RemoveField(
            model_name='course',
            name='credit',
        ),
        migrations.RemoveField(
            model_name='course',
            name='is_elective',
        ),
    ]