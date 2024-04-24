# Generated by Django 4.0.8 on 2024-04-17 06:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_options_alter_user_managers_user_groups_and_more'),
        ('course', '0007_remove_course_code_remove_course_credit_and_more'),
        ('result', '0006_remove_result_cgpa_remove_result_gpa_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseProgress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_time_spent', models.DurationField(blank=True, null=True)),
                ('completion_date', models.DateField(auto_now_add=True)),
                ('completed_lesson', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='course.lesson')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.student')),
                ('taken_course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='result.takencourse')),
            ],
        ),
    ]