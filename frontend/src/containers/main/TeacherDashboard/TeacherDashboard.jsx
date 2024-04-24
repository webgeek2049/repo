import React, { useEffect, useState } from "react";
import "./TeacherDashboard.scss";
import DashboardContentDefault from "./DashboardContentDefault";
import GeneralStatsDashboard from "./GeneralStatsDashboard";
import LeftSideNavigation from "../LeftSideNavigation";

const TeacherDashboard = () => {
  // Define a list of students
  const students = [
    { id: 1, name: "malak" },
    { id: 2, name: "douaa" },
    { id: 3, name: "houssem" },
    { id: 4, name: "mouad" },
    { id: 5, name: "maki" },
  ];

  // Define a list of courses with their viewing and engagement data
  const courses = [
    {
      id: 101,
      title: "Introduction to React",
      viewers: [1, 2, 3, 5], // Student IDs who viewed this course
      engagements: [1, 3], // Student IDs who engaged with this course
      color: "#727be3",
    },
    {
      id: 102,
      title: "JavaScript Fundamentals",
      viewers: [1, 3],
      engagements: [1, 2],
      color: "#5fbbb4",
    },
    {
      id: 103,
      title: "HTML & CSS Basics",
      viewers: [2, 3],
      engagements: [1, 3, 5],
      color: "#bb80de",
    },
  ];

  const scores = [
    {
      studentId : 1,
      courseId : 101,
      value : 50,
    },
    {
      studentId : 2,
      courseId : 102,
      value : 60,
    },
    {
      studentId : 2,
      courseId : 103,
      value : 40,
    },
  ]

  const [totalViewers, setTotalViewers] = useState(0);
  const [totalEngagements, setTotalEngagements] = useState(0);

  useEffect(() => {
    let viewersCount = 0;
    let engagementsCount = 0;

    // Calculate total viewers and engagements based on the courses data
    courses.forEach((course) => {
      viewersCount += course.viewers.length;
      engagementsCount += course.engagements.length;
    });

    // Update state with the calculated counts
    setTotalViewers(viewersCount);
    setTotalEngagements(engagementsCount);
  }, []);
  
  const data = [
    { name: "Course 1", value: 10, viewers: 5},
    { name: "Course 2", value: 20, viewers: 8},
    { name: "Course 3", value: 30, viewers: 14},
  ];

  const [activeTemplate, setActiveTemplate] = useState("default");
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveTemplate(buttonId);
    setClickedButton(buttonId);
  };

  return (
    <div className="teacher-dashboard dashboard">
      <div className="dashboardContainer">
        <div className="left-D overflow-scroll scrollable-content">
          <LeftSideNavigation isOf="teacher" activeTemplate={activeTemplate} setClickedButton={handleButtonClick} />
        </div>
        <div className="right-D overflow-scroll scrollable-content px-5">
          <div className="d-flex justify-content-center">
            {activeTemplate === "default" && (
              <DashboardContentDefault
                courses={courses}
                totalViewers={totalViewers}
                totalEngagements={totalEngagements}
                data={data}
              />
            )}
            {activeTemplate === "stat" && (
              <GeneralStatsDashboard
                students={students}
                courses={courses}
                scores={scores}
                totalViewers={totalViewers}
                totalEngagements={totalEngagements}
                data={data}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
