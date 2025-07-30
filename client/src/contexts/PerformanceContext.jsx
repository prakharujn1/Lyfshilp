import { createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const PerformanceContext = createContext();

export const PerformanceProvider = ({ children }) => {
  const { token, user } = useAuth();
  const server = "https://edumaniax-api-343555083503.asia-south1.run.app";

  const updatePerformance = async ({
    moduleName,
    topicName,
    score,
    accuracy,
    avgResponseTimeSec,
    studyTimeMinutes,
    completed,
  }) => {
    if (!user || !token) return;
    try {
      await axios.post(`${server}/performance/update`, {
        userId: user.id,
        moduleName,
        topicName,
        score,
        accuracy,
        avgResponseTimeSec,
        studyTimeMinutes,
        completed,
      });
      console.log("Performance update");

    } catch (err) {
      console.error("Failed to update performance:", err);
    }
  };

  return (
    <PerformanceContext.Provider value={{ updatePerformance }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => useContext(PerformanceContext);
