

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_rename_essay_question_essayquestion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='figure',
            field=models.ImageField(blank=True, help_text="Add an image for the question if it's necessary.", null=True, upload_to='uploads/%Y/%m/%d', verbose_name='Figure'),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='description',
            field=models.TextField(blank=True, help_text='A detailed description of the quiz', verbose_name='Description'),
        ),
    ]