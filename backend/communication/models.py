from django.db import models
from accounts.models import User

from course.models import Course
class Conversation(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    messages = models.ManyToManyField('Message', through='MessageConversation')

    def __str__(self):
        return f"Conversation for course: {self.course.name}"


class Message(models.Model):
    content = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    conversations = models.ManyToManyField('Conversation', through='MessageConversation')

    def __str__(self):
        return f"Message by {self.sender} at {self.sent_at}"
class MessageConversation(models.Model):
    message = models.ForeignKey('Message', on_delete=models.CASCADE)
    conversation = models.ForeignKey('Conversation', on_delete=models.CASCADE)
