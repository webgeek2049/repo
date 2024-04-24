import React, { useState } from "react";
import LeftSideNavigation from "../LeftSideNavigation";
import DashboardContentDefault from "./DashboardContentDefault";
import "../communDashboard.scss";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState("default");

  const handleButtonClick = (buttonId) => {
    setActiveTemplate(buttonId);
    setClickedButton(buttonId);
  };

  const users = [
    {
      username: "user1",
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      Roles: ["teacher"],
    },
    {
      username: "user2",
      firstname: "Jane",
      lastname: "Smith",
      email: "jane.smith@example.com",
      Roles: ["student"],
    },
    {
      username: "user3",
      firstname: "Alice",
      lastname: "Johnson",
      email: "alice.johnson@example.com",
      Roles: ["student", "teacher"],
    },
  ];

  return (
    <div className="dashboard admin-dashboard">
      <div className="dashboardContainer">
        <div className="left-D overflow-scroll scrollable-content">
          <LeftSideNavigation
            isOf="admin"
            activeTemplate={activeTemplate}
            setClickedButton={handleButtonClick}
          />
        </div>
        <div className="right-D overflow-scroll scrollable-content px-5">
          <DashboardContentDefault users={users} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
