import React, { useState } from "react";
import "./Settings.scss";
import Profile from "./Profile";
import PhotoUpload from "./PhotoUpload";
import AccountSecurity from "./AccountSecurity";

const Settings = () => {
  const views = {
    PROFILE: "Profile",
    PHOTO: "Photo",
    ACCOUNT_SECURITY: "Account Security",
    OPTION: "Option"
  };

  const [activeView, setActiveView] = useState(views.PROFILE);

  const handleButtonClick = (view) => {
    setActiveView(view);
  };

  return (
    <div className="settings dashboard">
      <div className="dashboardContainer">
        <div className="left-D overflow-scroll scrollable-content">
          <div className="round">FL</div>
          <div className="px-3">
            <h4 className="FL">FirstName LastName</h4>
          </div>
          <div className="underline"></div>
          {Object.values(views).map((view) => (
            <button key={view} className="my-button" onClick={() => handleButtonClick(view)}>
              {view}
            </button>
          ))}
          <div className="underline2"></div>
        </div>
        <div className="right-D overflow-scroll scrollable-content px-5 pt-5">
          {activeView === views.PROFILE && (
            <div>
              <Profile/>
            </div>
          )}
          {activeView === views.PHOTO && (
            <PhotoUpload />
          )}
          {activeView === views.ACCOUNT_SECURITY && (
            <AccountSecurity/>
          )}
          {activeView === views.OPTION && (
            <div>
              {/* Content for Option view */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
