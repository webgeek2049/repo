import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetContext from "../../context/useGetContext";
import { jwtDecode } from "jwt-decode";
import { baseURL } from "../../api/AxiosSettings";
const useAuthenticate = (setLoading) => {
  const [responseData, setResponseData] = useState("");
  const navigate = useNavigate();
  const currentPathname = window.location.pathname;
  const {
    setErrorAPI,
    setSuccessMsgAPI,
    setUserToken,
    userToken,
    userDecodedToken,
    setUserDecodedToken,
  } = useGetContext();

  const determineUrl = () => {
    if (currentPathname === "/sign-up") {
      return `${baseURL}auth/`;
    } else if (currentPathname === "/login") {
      return `${baseURL}api/token/`;
    } else {
      throw new Error("Invalid authentication route");
    }
  };

  const authenticateUser = async (
    emailAddress,
    userPassword,
    userAccountType
  ) => {
    try {
      setLoading(true); // Call the passed setLoading function here
      const url = determineUrl();
      const response = await axios.post(url, {
        email: emailAddress,
        password: userPassword,
        is_student: userAccountType === "student",
        is_teacher: userAccountType === "teacher",
        is_specialist: userAccountType === "specialist",
        is_superuser: userAccountType === "admin",
      });
      setResponseData(response?.data);

      // Remaining code remains unchanged
    } catch (err) {
      console.log(err?.response?.data);
      let errorMessage;
      if (err?.response?.status === 401) {
        errorMessage =
          "Authentication failed, Please check your Email or Password";
      } else if (err?.response?.status === 500) {
        errorMessage = "Server Error, Please try again later!";
      } else if (err?.response?.status === 400) {
        errorMessage = handleFieldError(err?.response?.data);
      } else {
        errorMessage = "An error occurred. Please try again.";
      }
      setErrorAPI(errorMessage);
    } finally {
      setLoading(false); // Call the passed setLoading function here
    }
  };

  const handleFieldError = (errorData) => {
    if (errorData?.email) {
      return errorData.email[0];
    } else if (errorData?.password) {
      return errorData.password[0];
    } else {
      return "Invalid request. Please check your input.";
    }
  };

  return { authenticateUser, responseData };
};

export default useAuthenticate;
