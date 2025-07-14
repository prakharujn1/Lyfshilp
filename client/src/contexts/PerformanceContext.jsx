import { createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const PerformanceContext = createContext();

export const PerformanceProvider = ({ children }) => {
  const { token, user } = useAuth();
  const server = "https://edumaniax-api-343555083503.asia-south1.run.app";

  const postPerformance = async (endpoint, payload) => {
    if (!user || !token) return;
    try {
      await axios.post(`${server}${endpoint}`, {
        ...payload,
        userId: user.id,
      });
    } catch (err) {
      console.error(`Failed to update performance at ${endpoint}:`, err);
    }
  };

  return (
    <PerformanceContext.Provider
      value={{
        updateFinancePerformance: (data) =>
          postPerformance("/performance/finance", data),
        updateCommunicationPerformance: (data) =>
          postPerformance("/performance/communication", data),
        updateComputersPerformance: (data) =>
          postPerformance("/performance/computers", data),
        updateDMPerformance: (data) =>
          postPerformance("/performance/dm", data),
        updateEntreprenerushipPerformance: (data) =>
          postPerformance("/performance/entrepreneurship", data),
        updateEnvirnomentPerformance: (data) =>
          postPerformance("/performance/environment", data),
        updateLawPerformance: (data) =>
          postPerformance("/performance/law", data),
        updateLeadershipPerformance: (data) =>
          postPerformance("/performance/leadership", data),
        updateSELPerformance: (data) =>
          postPerformance("/performance/sel", data),
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => useContext(PerformanceContext);
