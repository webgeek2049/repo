import React from "react";
import "./CoursesListAdd.scss";
import CloseIcon from "../../../ressources/svg/close-ic.svg";
import CourseCard from "../../../components/card-course";

const CourseAdd = ({ onClose }) => {
    const courseCards = [];
  for (let index = 0; index <= 5; index++) {
    courseCards.push(
      <CourseCard
        key={index}
        header="Operating Systems"
        content="Explore the principles and functionality of operating systems, including process management and memory management"
        footer="12 Lessons"
      />
    );
  }
  return (
    <div className="popup">
      <div className="popup-inner overflow-scroll scrollable-content">
        <img src={CloseIcon} className="close-btn" onClick={onClose} alt="close-ic"/>
        <h2 className="text-center">Add Course</h2>
        <span className="text-center d-block">Total : {courseCards.length}</span>
        <div className="grid-container grid">
          {courseCards}
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;
