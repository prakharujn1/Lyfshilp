import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const DMContext = createContext();

export const DMProvider = ({ children }) => {
    const { token, user } = useAuth();
    const server = "https://lyfshilp-api-58229779928.asia-south1.run.app";

    const [dmprogress, setdmProgress] = useState([]);

    // Fetch progress for logged-in user
    const fetchDMChallenges = async () => {
        if (!token) return;
        try {
            const res = await axios.get(`${server}/digital-marketing/get-challenges`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setdmProgress(res.data.progress || []);
            return { success: true };
        } catch (err) {
            console.error("Error fetching progress:", err);
            return {
                success: false,
                message: err.response?.data?.error || "Failed to fetch progress",
            };
        }
    };


    // Mark a challenge complete
    const completeDMChallenge = async (moduleIndex, challengeIndex) => {
        if (!user) return;

        const isAlreadyCompleted = dmprogress?.some(
            (entry) =>
                entry.moduleIndex === moduleIndex &&
                entry.challengeIndex === challengeIndex &&
                entry.completed
        );

        if (isAlreadyCompleted) {
            return;
        }
        try {
            const res = await axios.post(
                `${server}/digital-marketing/challenge-complete`,
                { moduleIndex, challengeIndex },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Optimistically update progress
            if (res.data?.progress) {
                setdmProgress((prev) => [...prev, res.data.progress]);
                toast.success("Challenge completed!");
            }

            return { success: true };
        } catch (err) {
            console.error("Error marking challenge complete:", err);
            return {
                success: false,
                message: err.response?.data?.error || "Failed to mark complete",
            };
        }
    };


    useEffect(() => {
        if (token && user) {
            fetchDMChallenges();
        }
    }, [token, user]);

    useEffect(() => {
        if (!user) {
            setdmProgress([]); // 🔁 Reset progress when user logs out
        }
    }, [user]);
    return (
        <DMContext.Provider
            value={{
                dmprogress,
                fetchDMChallenges,
                completeDMChallenge,
            }}
        >
            {children}
        </DMContext.Provider>
    );
};

export const useDM = () => useContext(DMContext);
