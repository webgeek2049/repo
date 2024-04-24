import React, { useEffect, useState } from "react";
import "./StudentDashboard.scss";
import "../communDashboard.scss";
import DashboardContentDefault from "./DashboardContent";
import CoursesDashboard from "./CoursesDashboard";
import LeftSideNavigation from "../LeftSideNavigation";

const StudentDashboard = () => {
  const data = [
    { date: "23 june", hour: 2 },
    { date: "24 june", hour: 15 },
    { date: "25 june", hour: 3 },
    { date: "26 june", hour: 11 },
    { date: "27 june", hour: 7 },
  ];

  const [progressData, setProgressData] = useState(0);
  const [isCourseCompleted, setIsCourseCompleted] = useState(false); // Assuming the course is not completed initially

  // Function to update progress data
  const updateProgressData = () => {
    // Simulate updating progress data
    const newProgressData = Math.floor(Math.random() * 100) + 1; // Random value between 1 and 100
    setProgressData(newProgressData);

    // Check if the course is completed (e.g., progress reaches 100%)
    if (newProgressData === 100) {
      setIsCourseCompleted(true);
    } else {
      setIsCourseCompleted(false);
    }
  };

  // Automatically update progress data every few seconds (e.g., 5 seconds)
  // This simulates real-time updates
  useEffect(() => {
    const intervalId = setInterval(updateProgressData, 5000); // Update every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const [clickedButton, setClickedButton] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState("default");

  const handleButtonClick = (buttonId) => {
    setActiveTemplate(buttonId);
    setClickedButton(buttonId);
  };

  return (
    <div className="student-dashboard main-2 dashboard">
      <div className="dashboardContainer">
      <div className="left-D overflow-scroll scrollable-content">
          <LeftSideNavigation isOf="student" activeTemplate={activeTemplate} setClickedButton={handleButtonClick} />
        </div>
        <div className="right-D overflow-scroll scrollable-content px-5">
          {activeTemplate === "default" && (
            <DashboardContentDefault
              data={data}
              progressData={progressData}
              isCourseCompleted={isCourseCompleted}
            />
          )}
          {activeTemplate === "courses" && <CoursesDashboard />}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
