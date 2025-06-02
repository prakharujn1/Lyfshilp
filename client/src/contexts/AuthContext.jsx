import React, { createContext, useContext, useState,useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const server = "https://lyfshilp-api-58229779928.asia-south1.run.app";

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  );
  const [phonenumber, setPhonenumber] = useState("");

  useEffect(() => {
    if (token && !user) {
      fetchMe(); // Only fetch if token exists and user is not yet set
    }
  }, []);

  // Step 1 - Shared OTP send for both register & login
  const sendOtp = async (phone) => {
    try {
      const res = await axios.post(`${server}/send-otp`, { phonenumber: phone });
      setPhonenumber(phone);
      return { success: true, message: "OTP sent" };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Failed to send OTP",
      };
    }
  };

  // Step 2A - Verify OTP and Register
  const verifyOtpAndRegister = async (formData, otp, navigate) => {
    try {
      const res = await axios.post(`${server}/verify-otp-register`, {
        ...formData,
        otp,
        phonenumber,
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(token);
      setUser(user);
      toast.success("Registered successfully ");
      navigate("/dashboard");
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed",
      };
    }
  };

  // Step 2B - Verify OTP and Login
  const verifyOtpAndLogin = async (otp, navigate) => {
    try {
      const res = await axios.post(`${server}/verify-otp-login`, {
        phonenumber,
        otp,
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(token);
      setUser(user);
      toast.success("Logged in successfully ");
      navigate("/dashboard");
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  // Fetch currently logged-in user using token
  const fetchMe = async () => {
    try {
      const res = await axios.get(`${server}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return { success: true };
    } catch (err) {
      console.error("Fetch /me failed:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Failed to fetch user",
      };
    }
  };

  // Logout
  const logout = (navigate) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
    setPhonenumber("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        phonenumber,
        sendOtp,
        verifyOtpAndRegister,
        verifyOtpAndLogin,
        fetchMe,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
