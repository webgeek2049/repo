import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import computer from "../../../ressources/svg/small computer monitor (1) 1.png";
import "./Verification.css";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedEmail = localStorage.getItem("signupEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate("/signup");
    }
  }, []);

  const handleVerify = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/verify/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, verificationCode }),
      });

      if (response.ok) {
        console.log("Account verified successfully!");
        navigate("/login"); 
      } else {
        const data = await response.json();
        setError(data.error || "Error verifying account.");
        console.error("Error verifying account:", data);
        navigate("/login"); 
      }
    } catch (error) {
      setError("An error occurred while verifying the account.");
      console.error("Error verifying account:", error);
    }
  };

  return (
    <div className="verification">
      <div className="container-verification ">
        <div className="left-verification">
          <img src={computer} alt="" />
          <div className="text-left-verification">
            <h2>Join thousands of CS </h2>
            <div className="h2-verification">
              <h2> Student in </h2>
            </div>
            <h2> CSGeeks Academy</h2>
          </div>
          <br />
          <br />
          <div className="p-verification">
            <p>
              By signing up for CSGeeks Academy, you agree to our Terms of
              use and Privacy Policy.
            </p>
          </div>
        </div>
        <div className="right-verification">
          <h1 className="text1">
            <b>Verification</b>
          </h1>
          <h3>Enter Verification code sent to your email</h3>
          <div className="input-wrapper">
            <input 
              type="text" 
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>
          <button 
            className="btn-verification"
            onClick={handleVerify}
          >
            Verify
          </button>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
