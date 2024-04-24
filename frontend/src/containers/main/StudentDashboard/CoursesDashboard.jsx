import React, {useState} from "react";
import "./CoursesDashboard.scss";
import addIcon from "../../../ressources/svg/ic-add.svg";
import CourseAdd from "./CoursesListAdd";

const CoursesDashboard = () => {
  const courses = [
    {
      id: 1,
      title: "Algorithmic",
      levels: [
        { id: 1, title: "Intro to algorithmica", status: "start" },
        { id: 2, title: "Recursive algorithms", status: "yet" },
        { id: 3, title: "Data structures", status: "yet" },
      ],
    },
    {
      id: 2,
      title: "Computer Network",
      levels: [
        { id: 1, title: "Introduction", status: "completed" },
        { id: 2, title: "OSI model", status: "resume" },
        { id: 3, title: "Network Management", status: "yet" },
      ],
    },
    {
      id: 3,
      title: "Web Development",
      levels: [
        { id: 1, title: "Introduction", status: "completed" },
        { id: 2, title: "HTML", status: "start" },
        { id: 3, title: "CSS", status: "yet" },
      ],
    },
    {
      id: 4,
      title: "Web Development",
      levels: [
        { id: 1, title: "Introduction", status: "completed" },
        { id: 2, title: "HTML", status: "start" },
        { id: 3, title: "CSS", status: "yet" },
      ],
    },
    {
      id: 5,
      title: "Web Development",
      levels: [
        { id: 1, title: "Introduction", status: "completed" },
        { id: 2, title: "HTML", status: "start" },
        { id: 3, title: "CSS", status: "yet" },
      ],
    },
  ];

  const renderCourseCards = () => {
    return courses.map((course, index) => (
      <div key={course.id} className="card mb-3" style={{ maxWidth: "400px" }}>
        <div className="card-body overflow-scroll scrollable-content">
          <h5 className="card-title">{course.title}</h5>
          {course.levels.map((level, levelIndex) => (
            <div
              key={level.id}
              className="level-item d-flex align-items-center justify-content-between"
            >
              <a href="#">
                Level {level.id}: {level.title}
              </a>
              {level.status === "start" && (
                <button className="btn btn-primary btn-sm me-2">Start</button>
              )}
              {level.status === "resume" && (
                <button className="btn btn-primary btn-sm me-2">Resume</button>
              )}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const [showCourseAdd, setShowCourseAdd] = useState(false);

  const toggleCourseAdd = () => {
    setShowCourseAdd(!showCourseAdd);
  };

  return (
    <div className="courses-dashboard">
      <div className="row">
        {renderCourseCards().map((card, index) => (
          <div key={index} className="col-md-6 mb-4">
            {card}
          </div>
        ))}
        <div className="col-md-6">
          <div className="card add">
            <div className="card-body">
              <h5 className="card-title">Add Course</h5>
              <img src={addIcon} alt="ic-add" onClick={toggleCourseAdd} />  
            </div>
          </div>
        </div>
      </div>
      {showCourseAdd && <CourseAdd onClose={toggleCourseAdd} />}
    </div>
  );
};

export default CoursesDashboard;
