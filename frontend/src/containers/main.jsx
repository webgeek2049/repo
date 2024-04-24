import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./main.scss";
import Lesson from "./main/course/lesson";
import SignUp from "./main/SignUp/SignUp";
import Verification from "./main/SignUp/Verification";
import Login from "./main/Login/Login";
import Welcome from "./main/welcome/welcome";
import TermOfService from "./main/TermOfService/TermOfService";
import StudentDashboard from "./main/StudentDashboard/StudentDashboard";
import TeacherDashboard from "./main/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./main/AdminDashboard/AdminDashboard";
import SpecialistDashboard from "./main/SpecialistDashboard/SpecialistDashboard";
import Feedback from "./main/FeedBack/Feedback";

function Main() {
  const location = useLocation();
  // Conditionally add .main-2 class based on current location
  const getMainClass = () => {
    switch (location.pathname.replace(/\/$/, '')) { // Remove trailing slash if it's the last character
      case "/studentdashboard":
      case "/teacherdashboard":
      case "/admindashboard":
      case "/specialistdashboard":
      case "/login":
      case "/signup":
      case "/signup/v":
        return "main main-2 p-page";
      default:
        return "main p-page";
    }
  };
  return (
    <div className={getMainClass()}>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/courses" element={<Lesson />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/v" element={<Verification />} />
        <Route path="/term" element={<TermOfService />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/specialistdashboard" element={<SpecialistDashboard />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default Main;
