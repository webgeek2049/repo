import React, { useState } from "react";
import "./AdvencedCourseList.scss";
import LessonEditor from "./LessonEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import addIcon from "../../../ressources/svg/ic-add.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

const CourseList = ({ courses }) => {
  const [activeCourseIndex, setActiveCourseIndex] = useState(null);
  const [activeLevelIndex, setActiveLevelIndex] = useState(null);
  const [addCourse, setAddCourse] = useState(false);
  const [addLevel, setAddLevel] = useState(false);
  const [manageCourse, setManageCourse] = useState(false);
  const [manageLevel, setManageLevel] = useState(false);
  const [lessonEditorEnable, setLessonEditor] = useState(false);

  const [activeManageCourse, setActiveManageCourse] = useState(null);
  const [activeManageLevel, setActiveManageLevel] = useState(null);

  const toggleCourseAccordion = (index, event) => {
    if (!event.target.classList.contains("gear-ic")) {
      setActiveCourseIndex(activeCourseIndex === index ? null : index);
      setActiveLevelIndex(null); // Reset level index when course changes
    }
  };

  const toggleLevelAccordion = (index, event) => {
    if (!event.target.classList.contains("gear-ic")) {
      setActiveLevelIndex(activeLevelIndex === index ? null : index);
    }
  };

  const handleCloseModal = (modalStateSetter) => {
    // Close the modal by setting its state variable to false
    modalStateSetter(false);
  };

  return (
    <div className="course-container">
      <div className="head row justify-content-between flex-nowrap">
        <h1>Courses</h1>
        <img
          className="add-course-ic"
          src={addIcon}
          alt="ic-add"
          onClick={() => setAddCourse(true)}
        />
      </div>

      {courses.map((course, index) => (
        <div key={index} className="course-dropdown">
          <div
            className={`dropdownlist ${
              activeCourseIndex === index ? "course-active" : ""
            }`}
            onClick={(event) => toggleCourseAccordion(index, event)}
          >
            <div className="question">
              <div className="title electrolize-regular fw-bold">
                {course.name}
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faGear}
                  className="gear-ic"
                  onClick={() => {
                    setManageCourse(true);
                    setActiveManageCourse(course);
                  }}
                />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chevron-down-ic ${
                    activeCourseIndex === index ? "rotate" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            className={`course-levels ${
              activeCourseIndex === index ? "active" : ""
            }`}
          >
            {course.levels.map((level, levelIndex) => (
              <div key={levelIndex} className="level-dropdown">
                <div
                  className={`dropdownlist ${
                    activeLevelIndex === levelIndex ? "level-active" : ""
                  }`}
                  onClick={(event) => toggleLevelAccordion(levelIndex, event)}
                >
                  <div className="question">
                    <div className="title electrolize-regular fw-bold">
                      {getLevelName(level.rate)}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faGear}
                        className="gear-ic"
                        onClick={() => {
                          setManageLevel(true);
                          setActiveManageLevel(level);
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`chevron-down-ic ${
                          activeLevelIndex === levelIndex ? "rotate" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`level-lessons ${
                    activeLevelIndex === levelIndex ? "active" : ""
                  }`}
                >
                  <ul>
                    {level.lessons.map((lesson, lessonIndex) => (
                      <li className="dropdownlist question" key={lessonIndex}>
                        {lesson.title}
                        <FontAwesomeIcon icon={faGear} className="gear-ic" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {addCourse && (
        <div className="popup" onClick={() => handleCloseModal(setAddCourse)}>
          <div
            className="popup-inner overflow-scroll scrollable-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Add Course</h3>
            <form>
              <div className="form-group">
                <label htmlFor="courseName">Course Name:</label>
                <input type="text" className="form-control" id="courseName" />
              </div>
              <div className="form-group">
                <label htmlFor="courseDescription">Course Description:</label>
                <input
                  type="text"
                  className="form-control"
                  id="courseDescription"
                />
              </div>
              <div className="row justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {manageCourse && (
        <div
          className="popup"
          onClick={() => handleCloseModal(setManageCourse)}
        >
          <div
            className="popup-inner overflow-scroll scrollable-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="row justify-content-between flex-nowrap p-0 mb-4">
              <h3 className="h3nd">Edit Course</h3>
              <FontAwesomeIcon icon={faTrash} />
            </div>
            <div className="form">
              <form>
                <div className="form-group">
                  <label htmlFor="courseName2">Course Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseName2"
                    value={activeManageCourse.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="courseDescription2">
                    Course Description:
                  </label>
                  <textarea
                    className="form-control overflow-scroll scrollable-content"
                    id="courseDescription2"
                    value={activeManageCourse.description}
                    onChange={(e) =>
                      setActiveManageCourse({
                        ...activeManageCourse,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="row justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {manageLevel && (
        <div className="popup" onClick={() => handleCloseModal(setManageLevel)}>
          <div
            className="popup-inner overflow-scroll scrollable-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="row justify-content-between flex-nowrap p-0 mb-4">
              <h3 className="h3nd">Edit Level</h3>
              <FontAwesomeIcon icon={faTrash} />
            </div>
            {/* <form>
              <div className="form-group">
                <label htmlFor="LevelName2">Level Name:</label>
                <select
                  className="form-control"
                  id="LevelName2"
                  value={getLevelName(activeManageLevel.rate)}
                  onChange={(e) =>
                    setActiveManageLevel({
                      ...activeManageLevel,
                      rate: parseInt(e.target.value),
                    }, console.log(activeManageLevel))
                  }
                >
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Advanced</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary rd">
                update
              </button>
            </form> */}
            <div className="row justify-content-between flex-nowrap p-0 my-4">
              <h3 className="h3nd nd">Add new Lesson</h3>
              <button type="submit" className="btn btn-primary m-0"  onClick={()=>{setLessonEditor(true)}}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {lessonEditorEnable && (
        <div
          className="popup txtEditor"
        >
          <div
            className="popup-inner overflow-scroll scrollable-content"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon
              icon={faClose}
              className="svg closeIc"
              onClick={() => {handleCloseModal(setLessonEditor)}}
            />
            <LessonEditor />
          </div>
        </div>
      )}
    </div>
  );
};

function getLevelName(rate) {
  switch (rate) {
    case 1:
      return "Beginner";
    case 2:
      return "Intermediate";
    case 3:
      return "Advanced";
    default:
      return "Undefined";
  }
}

export default CourseList;
