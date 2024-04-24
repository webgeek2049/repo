from django import forms
from accounts.models import User
from .models import Program, Course, CourseAllocation



class CourseAddForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["title"].widget.attrs.update({"class": "form-control"})
        self.fields["code"].widget.attrs.update({"class": "form-control"})
        # self.fields['courseUnit'].widget.attrs.update({'class': 'form-control'})
        self.fields["credit"].widget.attrs.update({"class": "form-control"})
        self.fields["summary"].widget.attrs.update({"class": "form-control"})
        self.fields["program"].widget.attrs.update({"class": "form-control"})
        self.fields["level"].widget.attrs.update({"class": "form-control"})
        self.fields["year"].widget.attrs.update({"class": "form-control"})
       


class CourseAllocationForm(forms.ModelForm):
    courses = forms.ModelMultipleChoiceField(
        queryset=Course.objects.all().order_by("level"),
        widget=forms.CheckboxSelectMultiple(
            attrs={"class": "browser-default checkbox"}
        ),
        required=True,
    )
    teacher = forms.ModelChoiceField(
        queryset=User.objects.filter(is_teacher=True),
        widget=forms.Select(attrs={"class": "browser-default custom-select"}),
        label="teacher",
    )

    class Meta:
        model = CourseAllocation
        fields = ["teacher", "courses"]

    def __init__(self, *args, **kwargs):
        user = kwargs.pop("user")
        super(CourseAllocationForm, self).__init__(*args, **kwargs)
        self.fields["teacher"].queryset = User.objects.filter(is_teacher=True)


class EditCourseAllocationForm(forms.ModelForm):
    courses = forms.ModelMultipleChoiceField(
        queryset=Course.objects.all().order_by("level"),
        widget=forms.CheckboxSelectMultiple,
        required=True,
    )
    teacher = forms.ModelChoiceField(
        queryset=User.objects.filter(is_teacher=True),
        widget=forms.Select(attrs={"class": "browser-default custom-select"}),
        label="teacher",
    )

    class Meta:
        model = CourseAllocation
        fields = ["teacher", "courses"]

    def __init__(self, *args, **kwargs):
        #    user = kwargs.pop('user')
        super(EditCourseAllocationForm, self).__init__(*args, **kwargs)
        self.fields["teacher"].queryset = User.objects.filter(is_teacher=True)

