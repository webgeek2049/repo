import React from 'react';
import './card-course.scss';

const CourseCard = ({ header, content, footer }) => {
    return (
      <div className="card-course">
        <div className="card-course-header courier-prime-regular">{header}</div>
        <div className="card-course-content electrolize-regular">{content}</div>
        <div className="card-course-footer electrolize-regular ">{footer}</div>
      </div>
    );
  };
  
export default CourseCard;