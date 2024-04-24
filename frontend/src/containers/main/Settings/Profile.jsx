import React, { useState } from "react";

const Profile = () => {
  const [bio, setBio] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [youtube, setYoutube] = useState("");

  const maxLengthBio = 250; // Maximum allowed characters

  const [website, setWebsite] = useState("");

  const [showWarning, setShowWarning] = useState(false);
  const [facebookWarning, setFacebookWarning] = useState(false);
  const [linkedInWarning, setLinkedInWarning] = useState(false);
  const [youTubeWarning, setYouTubeWarning] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "bio") {
      if (value.length <= maxLengthBio) {
        setBio(value);
      }
    }

    if (name === "website") {
      setWebsite(value);
      if (value.trim() !== "") {
        setShowWarning(false);
      }
    }

    if (name === "facebook") {
      setFacebook(value);
      setFacebookWarning(false);
    }

    if (name === "linkedin") {
      setLinkedIn(value);
      setLinkedInWarning(false);
    }

    if (name === "youtube") {
      setYoutube(value);
      setYouTubeWarning(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simple URL validation
    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)*$/;

    const trimmedWebsite = website.trim(); // Trimmed version of website input

    if (trimmedWebsite !== "" && !urlPattern.test(trimmedWebsite)) {
      setShowWarning(true);
    }else{
      setShowWarning(false);
    }

    if (facebook.trim() !== "" && !facebook.includes("facebook.com/")) {
      setFacebookWarning(true);
    } else {
      setFacebookWarning(false);
    }
  
    if (linkedIn.trim() !== "" && !linkedIn.includes("linkedin.com/in/")) {
      setLinkedInWarning(true);
    } else {
      setLinkedInWarning(false);
    }
  
    if (youtube.trim() !== "" && !youtube.includes("youtube.com/channel")) {
      setYouTubeWarning(true);
    } else {
      setYouTubeWarning(false);
    }
    

    // Here, you could perform further validation or actions
    // For now, let's just console log the website
    console.log("Website:", trimmedWebsite);
    console.log("Facebook:", facebook.trim());
    console.log("LinkedIn:", linkedIn.trim());
    console.log("YouTube:", youtube.trim());
  };

  return (
    <div>
      <h2 className="mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ position: "relative" }}>
          <label htmlFor="bio" className="form-label">
            Bio:
          </label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            rows="3"
            maxLength={maxLengthBio}
            value={bio}
            onChange={handleChange}
          />
          <div
            className="text-muted"
            style={{ position: "absolute", bottom: "0.5rem", right: "1rem" }}
          >
            {maxLengthBio - bio.length}/{maxLengthBio}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="website" className="form-label">
            Website:
          </label>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            value={website}
            onChange={handleChange}
          />
          {showWarning && (
            <div className="text-danger">Please enter a valid website</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="facebook" className="form-label">
            Facebook:
          </label>
          <input
            type="text"
            className="form-control"
            id="facebook"
            name="facebook"
            onChange={handleChange}
          />
          {facebookWarning && (
            <div className="text-danger">Please enter a valid Facebook URL</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="linkedin" className="form-label">
            LinkedIn:
          </label>
          <input
            type="text"
            className="form-control"
            id="linkedin"
            name="linkedin"
            onChange={handleChange}
          />
          {linkedInWarning && (
            <div className="text-danger">Please enter a valid LinkedIn URL</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="youtube" className="form-label">
            YouTube:
          </label>
          <input
            type="text"
            className="form-control"
            id="youtube"
            name="youtube"
            onChange={handleChange}
          />
          {youTubeWarning && (
            <div className="text-danger">Please enter a valid YouTube URL</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
