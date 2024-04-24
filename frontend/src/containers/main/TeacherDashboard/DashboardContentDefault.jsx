import React from "react";

const DashboardContentDefault = ({ courses }) => {
  const calculateCourseCount = () => {
    return courses.length;
  };

  // Function to calculate the percentage of engagement for all courses
  const calculateEngagementPercentage = () => {
    const totalEngagement = courses.reduce(
      (acc, course) => acc + course.engagement,
      0
    );
    const averageEngagement = totalEngagement / courses.length;
    return isNaN(averageEngagement) ? 0 : averageEngagement.toFixed(2);
  };

  return (
    <div className="under-nav-container">
      <div>
        <h1>
          {" "}
          <b> Dashboard</b>{" "}
        </h1>
      </div>
      <div className="d-flex">
        <div className="small-left border-primary pe-3">
          <div className="card overflow-scroll scrollable-content">
            <div className="vertical2"></div>

            <div className="underline3">
              <div className="vertical"></div>
            </div>
            <div className="card-body pt-5">
              <h4 className="mb-4">Courses</h4>
              <table class="table">
                <thead>
                  <tr>
                    <th className="col-2-3"></th>
                    <th className="col-1-3">Total viewers</th>
                    <th className="col-1-3">Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.title}</td>
                      <td>{course.viewers.length}</td>
                      <td>{course.engagements.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="small-right ps-3">
          <div className="top-right-container mb-3 border-primary">
            <div className="card2-G">
              <div className="card-title"><h5>Student Performance</h5></div>
              <div className="card-body"></div>
            </div>
            <div className="card2-G">
              <div className="card-title"><h5>Summary</h5></div>
              <div className="card-body">
                <h5>Number of Courses: {calculateCourseCount()}</h5>
                <h5> Engagement: {calculateEngagementPercentage()}%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentDefault;
