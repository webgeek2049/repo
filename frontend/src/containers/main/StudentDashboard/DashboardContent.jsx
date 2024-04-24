import React from "react";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import ProgressBar from "react-bootstrap/ProgressBar";
import date from "../../../ressources/svg/Group 4.svg";

const DashboardContentDefault = ({ data, progressData, isCourseCompleted }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="under-nav-container">
          <div>
            <h1>
              {" "}
              <b> Dashboard</b>{" "}
            </h1>
          </div>
          <div className="d-flex">
            <div className="small-left border-primary pe-3">
              <div className="card">
                <div className="card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h4 className="card-title">Activity</h4>
                    </div>
                    <div className="rectangle">
                      {data.length > 0 && data[0].date.split(" ")[1]}
                      <img src={date} alt="" />
                    </div>
                  </div>

                  <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 50,
                      right: 30,
                      left: 50,
                    }}
                    barSize={25}
                  >
                    <XAxis
                      dataKey="date"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                      type="number"
                      allowDecimals={false}
                      label={{ angle: -90, position: "insideLeft" }}
                      tickCount={10}
                      tickFormatter={(tick) => `${tick} hrs`}
                    />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="hour"
                      fill="#2300F7"
                      background={{ fill: "#eee" }}
                    />
                  </BarChart>
                </div>
              </div>
            </div>
            <div className="small-right ps-3">
              <div className="top-right-container mb-3 border-primary">
                <div className="card2">
                  <div className="card-body">
                    <h4 className="card-title">Courses</h4>
                    <div className="mt-3">
                      <h5>
                        {isCourseCompleted ? "Completed" : "On Progress"}
                      </h5>
                      <ProgressBar
                        now={isCourseCompleted ? 100 : progressData}
                        label={`${isCourseCompleted ? 100 : progressData}%`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-right-container border-primary">
                <div className="card2">
                  <div className="card-body">
                    <h5 className="card-title">Summary</h5>
                    <div className="rectangle2">
                      <p>Courses</p>
                    </div>
                    <div className="rectangle2">
                      <p>Total time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentDefault;