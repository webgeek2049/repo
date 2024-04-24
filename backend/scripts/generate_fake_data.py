from typing import Type
from factory.django import DjangoModelFactory
from factory import SubFactory, LazyAttribute, Iterator
from faker import Faker

from course.models import Program, Course, CourseAllocation
from accounts.models import User
from core.models import Session

from .generate_fake_accounts_data import UserFactory, ProgramFactory
from .generate_fake_core_data import SessionFactory



class ProgramFactory(DjangoModelFactory):
    """
    Factory for creating Program instances.

    Attributes:
        title (str): The generated title for the program.
        summary (str): The generated summary for the program.
    """

    class Meta:
        model = Program

    title: str = LazyAttribute(lambda x: fake.sentence(nb_words=3))
    summary: str = LazyAttribute(lambda x: fake.paragraph())

class CourseFactory(DjangoModelFactory):
    """
    Factory for creating Course instances.

    Attributes:
        slug (str): The generated slug for the course.
        title (str): The generated title for the course.
        code (str): The generated code for the course.
        credit (int): The generated credit for the course.
        summary (str): The generated summary for the course.
        program (Program): The associated program for the course.
        level (str): The generated level for the course.
        year (int): The generated year for the course.
        semester (str): The generated semester for the course.
        is_elective (bool): The flag indicating if the course is elective.
    """

    class Meta:
        model = Course

    slug: str = LazyAttribute(lambda x: fake.slug())
    title: str = LazyAttribute(lambda x: fake.sentence(nb_words=4))
    code: str = LazyAttribute(lambda x: fake.unique.word())
    credit: int = LazyAttribute(lambda x: fake.random_int(min=1, max=6))
    summary: str = LazyAttribute(lambda x: fake.paragraph())
    program: Type[Program] = SubFactory(ProgramFactory)
    level: str = Iterator(["Beginner", "Intermediate", "Advanced"])
    year: int = LazyAttribute(lambda x: fake.random_int(min=1, max=4))
    semester: str = Iterator([choice[0] for choice in SEMESTER])
    is_elective: bool = LazyAttribute(lambda x: fake.boolean())

class CourseAllocationFactory(DjangoModelFactory):
    """
    Factory for creating CourseAllocation instances.

    Attributes:
        teacher (User): The associated teacher for the course allocation.
        session (Session): The associated session for the course allocation.
    """

    class Meta:
        model = CourseAllocation

    teacher: Type[User] = SubFactory(UserFactory, is_teacher=True)
    session: Type[Session] = SubFactory(SessionFactory)
