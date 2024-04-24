import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import computer from "../../../ressources/svg/small computer monitor (1) 1.png";
import "./SignUp1.css";

const SignUp = ({ toggleLoginSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          is_student: isStudent,
          is_teacher: isTeacher,
        }),
      });

      if (response.ok) {
        localStorage.setItem("signupEmail", email);
        console.log("Step one completed.");
        navigate("/signup/v");
      } else {
        const data = await response.json();
        if (response.status === 400 && data.email) {
          setError("Email already exists. Please choose a different email.");
        } else {
          setError("Email already exists.");
        }
        console.error("Error creating user:", data);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="signUp">
      <div className="signup-container">
        <div className="signup-content">
          <div className="left">
            <img src={computer} alt="Computer Icon" className="computer-icon" />
            <div className="text-left">
              <h2>Join thousands of CS Professionals at CSGeeks Academy</h2>
            </div>
            <div className="terms-link">
              <Link to="/term" style={{ color: "white" }}>
                I agree to the CSGeeks Academy Terms of Use and Privacy Policy.
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="signup-header">
              <h2 className="header-text">Sign Up</h2>
              <div className="underline"></div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <nav className="nav-signup " aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item ">
                  <button
                    className={`page-link ${isStudent ? "active" : ""}`}
                    onClick={() => {
                      setIsStudent(true);
                      setIsTeacher(false);
                    }}
                  >
                    Student
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className={`page-link ${isTeacher ? "active" : ""}`}
                    onClick={() => {
                      setIsStudent(false);
                      setIsTeacher(true);
                    }}
                  >
                    Teacher
                  </button>
                </li>
              </ul>
            </nav>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <div className="input-container">
                  <div className="label-container">
                    <label htmlFor="email">Professional Email</label>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="label-container">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="label-container">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="submit-container">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="forgot-password">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "blue", cursor: "pointer" }}>
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
