import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import porte from "../../../ressources/svg/Group 39porte.svg";
import useAuthenticate from "./auth/useAuthenticate"; 
import useGetContext from "../context/useGetContext"; 

const Login = () => {
  const { setLoading } = useGetContext(); 
  const { authenticateUser, responseData } = useAuthenticate(setLoading);
  const { setErrorAPI } = useGetContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      await authenticateUser(null, null, email, password, null);
      // Check the user role from the responseData
      if (responseData.is_student) {
        navigate("/studentdashboard");
      } else if (responseData.is_teacher) {
        navigate("/teacherdashboard");
              }else if (responseData.is_specialist) {
          navigate("/specialistdashoboard");
         }else if (responseData.is_superuser) {
        navigate("/admindashoboard");
          } else {
        console.log("Unknown user role");
      }
    } catch (err) {
      setError(err.message || "Failed to log in");
    }
  };

  return (
    <div className="login">
      <div className="container-login">
        <div className="left-l">
          <h1 className="welcome">Welcome Back</h1>
          <img src={porte} alt="" />
          <h3>Log in to CSGeeks to get started!</h3>
        </div>
        <div className="right-l">
          <div className="header">
            <div className="text">Log In</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input-container">
                <div className="label-container">
                  <label htmlFor="email">Professional Email</label>
                </div>
                <div className="input-wrapper">
                  <input
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="label-container">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-wrapper">
                  <input type="password" onChange={handlePasswordChange} />
                </div>
              </div>
            </div>
            <div className="submit-container">
              <button type="submit" className="btn btn-outline-primary">
                Log In
              </button>
            </div>
          </form>
          <div
            className="Forgot-password"
            style={{ color: "blue", cursor: "pointer" }}
          >
            I Forgot my password
          </div>
          <div className="SignUp">
            Don't have an account yet?{" "}
            <Link to="/signup" style={{ color: "blue", cursor: "pointer" }}>
              Sign Up
            </Link>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
