
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0003_auto_20200730_0756"),
    ]

    operations = [
        migrations.AlterField(
            model_name="newsandevents",
            name="id",
            field=models.BigAutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        ),
      
        migrations.AlterField(
            model_name="session",
            name="id",
            field=models.BigAutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        ),
    ]
