import React, { useContext, useState, useEffect } from "react";

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {string} phone
 * @property {{ gender: string, name: string, style: string, traits: string[] }} character
 */

/**
 * @typedef {Object} AuthContextType
 * @property {User|null} currentUser
 * @property {boolean} isAuthenticated
 * @property {(phone: string) => void} login
 * @property {(otp: string) => boolean} verifyOTP
 * @property {(user: User) => void} register
 * @property {() => void} logout
 * @property {string|null} pendingPhone
 */

const AuthContext = React.createContext(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pendingPhone, setPendingPhone] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const register = (user) => {
    // In a real app, this would make an API call to register the user
    // For this demo, we'll store in localStorage
    localStorage.setItem(`user_${user.phone}`, JSON.stringify(user));

    // Auto login after registration
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const login = (phone) => {
    // In a real app, this would make an API call to send an OTP
    // For this demo, we'll just store the phone number and simulate OTP sending
    setPendingPhone(phone);

    // Check if user exists (for demo purposes)
    const savedUser = localStorage.getItem(`user_${phone}`);
    if (!savedUser) {
      console.log("User not found, but we will still simulate OTP sending");
    }

    console.log(`OTP sent to ${phone}`);
  };

  const verifyOTP = (otp) => {
    // In a real app, this would validate the OTP with the server
    // For this demo, we'll accept "123456" as the valid OTP
    if (otp === "123456" && pendingPhone) {
      const savedUser = localStorage.getItem(`user_${pendingPhone}`);
      if (savedUser) {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setIsAuthenticated(true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        setPendingPhone(null);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    verifyOTP,
    register,
    logout,
    pendingPhone,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
