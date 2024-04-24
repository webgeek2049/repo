
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="NewsAndEvents",
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
                ("title", models.CharField(max_length=200, null=True)),
                ("summary", models.TextField(blank=True, max_length=200, null=True)),
                (
                    "posted_as",
                    models.CharField(
                        choices=[("News", "News"), ("Event", "Event")], max_length=10
                    ),
                ),
              
            ],
        ),
        migrations.CreateModel(
            name="Session",
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
                ("session", models.CharField(max_length=200, unique=True)),
                (
                    "is_current_session",
                    models.BooleanField(blank=True, default=False, null=True),
                ),
                ("next_session_begins", models.DateField(blank=True, null=True)),
            ],
        ),
    ]