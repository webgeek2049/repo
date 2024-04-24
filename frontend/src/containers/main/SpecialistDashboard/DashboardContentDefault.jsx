import React from "react";
import CourseList from "./AdvencedCourseList";

const DashboardContentDefault = () => {
  const courses = [
    {
      name: "Course 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi officiis aliquid modi nam sapiente cumque provident magni, eaque quia minima! Voluptas error doloremque nobis debitis sequi aliquid adipisci quaerat.",
      levels: [
        {
          rate: 1,
          lessons: [ // Change lessons to lessons
            {
              title: "Intro",
            },
            {
              title: "if Statement",
            },
          ],
        },
        {
          rate: 2,
          lessons: [ // Change lessons to lessons
            {
              title: "Then",
            },
            {
              title: "if Statement",
            },
          ],
        },
      ],
    },
    {
      name: "Course 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi officiis aliquid modi nam sapiente cumque provident magni, eaque quia minima! Voluptas error doloremque nobis debitis sequi aliquid adipisci quaerat.",
      levels: [
        {
          rate: 1,
          lessons: [ // Change lessons to lessons
            {
              title: "Intro",
            },
            {
              title: "if Statement",
            },
          ],
        },
        {
          rate: 2,
          lessons: [ // Change lessons to lessons
            {
              title: "then",
            },
            {
              title: "if Statement",
            },
          ],
        },
        {
          rate: 3,
          lessons: [ // Change lessons to lessons
            {
              title: "Last",
            },
            {
              title: "if Statement",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="d-flex justify-content-center">
      <div className="under-nav-container">
        <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default DashboardContentDefault;
