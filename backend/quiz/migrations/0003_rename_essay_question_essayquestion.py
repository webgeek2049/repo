

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_alter_choice_id_alter_progress_id_alter_question_id_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Essay_Question',
            new_name='EssayQuestion',
        ),
    ]