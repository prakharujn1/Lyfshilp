import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useSEL } from "@/contexts/SELContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const difficultyMap = {
  0: {
    label: "Beginner",
    color: "bg-[#DCFCE7]",
    stripColor: "bg-[#16A34A]", // Vibrant green
    textColor: "text-[#016630]",
    icon: "/imageForDesign/Be.svg",
    role: {
      label: "Explorer",
      bg: "bg-pink-100",
      textColor: "text-[#CC348D]",
      icon: "/imageForDesign/Explorer.png",
    },
    mascot: "/imageForDesign/level-1.png",
  },
  1: {
    label: "Intermediate",
    color: "bg-[#9C73001A]",
    stripColor: "bg-[#EAB308]", // Vibrant yellow
    textColor: "text-yellow-900",
    icon: "/imageForDesign/Intermediate.png",
    role: {
      label: "Builder",
      bg: "bg-[#CC348D1A]",
      textColor: "text-[#CC348D]",
      icon: "/imageForDesign/Builder.png",
    },
    mascot: "/imageForDesign/level-2.png",
  },
  2: {
    label: "Advance",
    color: "bg-[#FEE2E2]",
    stripColor: "bg-[#DC2626]", // Vibrant red
    textColor: "text-[#BC0808]",
    icon: "/imageForDesign/Advance.png",
    role: {
      label: "Hero",
      bg: "bg-[#FCE7F3]",
      textColor: "text-[#CC348D]",
      icon: "/imageForDesign/Hero.png",
    },
    mascot: "/imageForDesign/level-3.png",
  },
  3: {
    label: "Pro",
    color: "bg-[#FF3D3A1A]", // Distinct soft indigo background
    stripColor: "bg-[#4338CA]", // Rich indigo strip
    textColor: "text-[#BC0808]",
    icon: "/imageForDesign/Pro.png", // Add this icon
    role: {
      label: "Champ",
      bg: "bg-[#CC348D1A]", // Lavender-like soft role background
      textColor: "text-[#CC348D]", // Violet text
      icon: "/imageForDesign/Master.png", // Add this icon
    },
    mascot: "/imageForDesign/level-4.png",
  },
};

const LevelsDisplay = ({ modules }) => {
  const navigate = useNavigate();
  const { progress } = useSEL();
  const { user, role } = useAuth();
  const [expanded, setExpanded] = useState({});
  // Add this above your return (or in your globals if preferred)
  const buttonBaseClasses =
    "btn-standard flex items-center justify-center gap-2 px-4 py-2 w-[120px] h-[40px] rounded-md text-sm font-semibold shadow transition duration-200";

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // 🔐 Helper functions
  const isChallengeCompleted = (moduleIndex, challengeIndex) => {
    return progress.some(
      (p) =>
        p.moduleIndex === moduleIndex &&
        p.challengeIndex === challengeIndex &&
        p.completed
    );
  };

  const isChallengeUnlocked = (moduleIndex, challengeIndex) => {
    if (moduleIndex === 0 && challengeIndex === 0) return true;

    if (challengeIndex > 0) {
      return isChallengeCompleted(moduleIndex, challengeIndex - 1);
    }

    const prevModule = modules[moduleIndex - 1];
    if (!prevModule) return false;

    const lastChallengeIndex = prevModule.challenges.length - 1;
    return isChallengeCompleted(moduleIndex - 1, lastChallengeIndex);
  };

  return (
    <div className="space-y-6">
      {modules.map((module, index) => {
        const difficulty = difficultyMap[index] || difficultyMap[0];
        const isExpanded = expanded[index];

        return (
          <div
            key={index}
            className="relative rounded-xl border shadow-sm p-4 pl-5 overflow-hidden bg-white"
          >
            {/* ✅ Left Color Strip using vibrant color */}
            <div
              className={`absolute top-0 left-0 h-full w-2 rounded-l-xl ${difficulty.stripColor}`}
            ></div>

            {/* Header + Toggle */}
            <div
              className="flex items-start justify-between cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-start gap-4">
                <img
                  src={difficulty.mascot}
                  alt="Mascot"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{module.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {module.description}
                  </p>

                  {/* ✅ Updated Badges */}
                  <div className="flex gap-3 mt-3 items-center flex-wrap text-xs font-medium">
                    {/* Difficulty Tag */}
                    <div
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${difficulty.color} ${difficulty.textColor}`}
                    >
                      <img
                        src={difficulty.icon}
                        alt="Difficulty"
                        className="h-4 w-4"
                      />
                      <span>{difficulty.label}</span>
                    </div>

                    {/* Role Tag */}
                    <div
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${difficulty.role.textColor} ${difficulty.role.bg}`}
                    >
                      <img
                        src={difficulty.role.icon}
                        alt={difficulty.role.label}
                        className="h-4 w-4"
                      />
                      <span>{difficulty.role.label}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
                {isExpanded ? (
                  <ChevronUp className="text-green-600 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-green-600 w-5 h-5" />
                )}
              </div>
            </div>

            {/* Challenge List */}
            {isExpanded && (
              <ul className="mt-4 space-y-3 transition-all duration-300 ease-in-out">
                {module.challenges.map((challenge, i) => {
                  const isUnlocked =
                    role === "admin" ||
                    isChallengeUnlocked(index, i) ||
                    isChallengeCompleted(index, i);

                  const isCompleted = isChallengeCompleted(index, i);

                  return (
                    <li
                      key={i}
                      className="border rounded-md px-4 py-3 flex items-center justify-between gap-4 bg-white shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            isUnlocked
                              ? "/imageForDesign/play-button.png"
                              : "/imageForDesign/red-lock.png"
                          }
                          alt="icon"
                          className="w-6 h-6 mt-1"
                        />
                        <div>
                          <p className="font-medium">
                            {` Challenge ${i + 1}: ${challenge.title}`}
                          </p>
                          <p className="text-sm text-gray-600">
                            {challenge.description}
                          </p>
                        </div>
                      </div>

                      {isUnlocked || role === "admin" ? (
                        <button
                          onClick={() => {
                            if (role === "admin") navigate(challenge.path);
                            else if (!user) navigate("/login");
                            else navigate(challenge.path);
                          }}
                          className={`${buttonBaseClasses} bg-[#10903E] text-white hover:bg-[#0a7d35] hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-transform duration-200`}
                        >
                          <img src="/imageForDesign/start.svg" alt="Start Icon" className="w-4 h-4" />
                          <span className="whitespace-nowrap">Start Now</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate("/payment-required")}
                          className={`${buttonBaseClasses} bg-[#BB8B00] text-white`}
                        >
                          <img src="/imageForDesign/unlock.svg" alt="Unlock Icon" className="w-4 h-4" />
                          <span className="whitespace-nowrap">Unlock Now</span>
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LevelsDisplay;
