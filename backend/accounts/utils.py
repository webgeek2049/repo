import random
import string
from django.core.mail import send_mail

def generate_verification_code(email):
    code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return code

def send_verification_email(email, verification_code):
    subject = 'Verify Your Email'
    message = f'Your verification code is: {verification_code}'
    sender = 'your_email@example.com'
    send_mail(subject, message, sender, [email])

def verify_verification_code(email, verification_code):
    stored_verification_code = 'retrieve the stored verification code here'
    return verification_code == stored_verification_code
