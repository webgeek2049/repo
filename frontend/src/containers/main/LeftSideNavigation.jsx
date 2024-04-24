import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import api from './api/useAxios';


const LeftSideNavigation = ({ isOf, activeTemplate, setClickedButton }) => {
  const navigate = useNavigate();
  const [userFullName, setUserFullName] = useState("");
  const [userInitials, setUserInitials] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("user/");
        setUserFullName(response.data.email);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigate("/login");
      }
    };
    
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout/");
      Cookies.remove('accessToken');
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };


  return (
    <>
       <div className="round">{userInitials}</div>
      <div>
        <h4 className="FL">{userFullName}</h4>
        <h5 className="FL2">Edit Profile</h5>
      </div>
      <div className="underline"></div>
      {isOf === "student" && (
        <>
          <button
            type="button"
            className={`btn-dark my-button${
              activeTemplate === "default" ? " clicked" : ""
            }`}
            onClick={() => setClickedButton("default")}
          >
            My Progress
          </button>
          <button
            type="button"
            className={`btn-dark my-button${
              activeTemplate === "courses" ? " clicked" : ""
            }`}
            onClick={() => setClickedButton("courses")}
          >
            My Courses
          </button>
        </>
      )}
      {isOf === "teacher" && (
        <>
          <button
            type="button"
            className={`btn-dark my-button${
              activeTemplate === "default" ? " clicked" : ""
            }`}
            onClick={() => setClickedButton("default")}
          >
            Courses
          </button>
          <button
            type="button"
            className={`btn-dark my-button${
              activeTemplate === "stat" ? " clicked" : ""
            }`}
            onClick={() => setClickedButton("stat")}
          >
            General Stats
          </button>
        </>
      )}
      <div className="underline2"></div>
      <button type="button" className={"btn-dark my-button"}>
        Settings
      </button>
      <button type="button" className="btn-dark my-button" onClick={handleLogout}>
        Log out
      </button>
      <div className="underline2"></div>
    </>
  );
};

export default LeftSideNavigation;
