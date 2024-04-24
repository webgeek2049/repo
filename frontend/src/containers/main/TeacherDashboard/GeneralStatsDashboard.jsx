import React, { useEffect, useState } from "react";
import "../TeacherDashboard/GeneralStatsDashboard.scss";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const GeneralStatsDashboard = ({
  students,
  courses,
  scores,
  totalViewers,
  totalEngagements,
  data,
}) => {
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Function to retrieve score for a student and course
  const getScore = (studentId, courseId) => {
    const score = scores.find(score => score.studentId === studentId && score.courseId === courseId);
    return score ? score.value : 0;
  };

  return (
    <div className="under-nav-container">
      <div className="card-title"></div>
      <div>
        <h1>
          {" "}
          <b> Dashboard</b>{" "}
        </h1>
      </div>
      <div className="d-flex">
        <div className="small-left border-primary pe-3">
          <div className="card card-G overflow-scroll scrollable-content">
            <div className="card-body pt-5">
              <h4 className="mb-4">Students</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Student</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{getScore(student.id, courses[0].id)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="small-right ps-3">
          <div className="top-right-container mb-3 border-primary">
            <div className="card1-G">
              <div className="card-body">
                <h5>
                  Total viewers : <b>{totalViewers}</b>
                </h5>
                <h5>
                  Engagement : <b>{totalEngagements}</b>
                </h5>
              </div>
            </div>
            <div className="card3-G">
              <div className="card-title">
                <h5>Performance</h5>
              </div>
              <div className="card-body">
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    data={data}
                    cx={120}
                    cy={130}
                    outerRadius={70}
                    fill="#8884d8"
                    label
                  />

                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}

                  <Tooltip formatter={(value, name) => [name]} />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStatsDashboard;
