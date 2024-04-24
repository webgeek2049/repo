
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Course",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("slug", models.SlugField(blank=True, unique=True)),
                ("title", models.CharField(max_length=200, null=True)),
                ("code", models.CharField(max_length=200, null=True, unique=True)),
                ("credit", models.IntegerField(default=0, null=True)),
                ("summary", models.TextField(blank=True, max_length=200, null=True)),
                (
                    "level",
                    models.CharField(
                        choices=[
                            ("Level course", "Level course"),
                            ("Bachloar", "Bachloar"),
                            ("Master", "Master"),
                        ],
                        max_length=25,
                        null=True,
                    ),
                ),
                (
                    "year",
                    models.IntegerField(
                        choices=[
                            (1, "1"),
                            (2, "2"),
                            (3, "3"),
                            (4, "4"),
                            (4, "5"),
                            (4, "6"),
                        ],
                        default=0,
                    ),
                ),
                (
                    "semester",
                    models.CharField(
                        choices=[
                            ("First", "First"),
                            ("Second", "Second"),
                            ("Third", "Third"),
                        ],
                        max_length=200,
                    ),
                ),
                (
                    "is_elective",
                    models.BooleanField(blank=True, default=False, null=True),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Program",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=150, unique=True)),
                ("summary", models.TextField(blank=True, null=True)),
            ],
        ),
      
        migrations.CreateModel(
            name="CourseAllocation",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "courses",
                    models.ManyToManyField(
                        related_name="allocated_course", to="course.Course"
                    ),
                ),
                (
                    "teacher",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="allocated_teacher",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "session",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.Session",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="course",
            name="program",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="course.Program"
            ),
        ),
    ]
