import React, { useState } from "react";
import LeftSideNavigation from "../LeftSideNavigation";
import DashboardContentDefault from "./DashboardContentDefault.jsx";
import "../communDashboard.scss";
import "./SpecialistDashboard.scss";

const SpecialistDashboard = () => {
    const [clickedButton, setClickedButton] = useState(null);
    const [activeTemplate, setActiveTemplate] = useState("default");
  
    const handleButtonClick = (buttonId) => {
      setActiveTemplate(buttonId);
      setClickedButton(buttonId);
    };
  return (
    <div className="specialist-container dashboard">
      <div className="dashboardContainer">
        <div className="left-D overflow-scroll scrollable-content">
          <LeftSideNavigation
            isOf="specialist"
            activeTemplate={activeTemplate}
            setClickedButton={handleButtonClick}
          />
        </div>
        <div className="right-D overflow-scroll scrollable-content px-5">
          <DashboardContentDefault />
        </div>
      </div>
    </div>
  );
};

export default SpecialistDashboard;
