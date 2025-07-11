import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useFinance } from "../contexts/FinanceContext";
import { useAuth } from "../contexts/AuthContext";

const difficultyMap = {
  0: {
    label: "Beginner",
    color: "bg-green-500",
    icon: "/imageForDesign/Beginner.png",
    role: "/imageForDesign/Explorer.png",
    mascot: "/imageForDesign/level-1.png",
  },
  1: {
    label: "Intermediate",
    color: "bg-yellow-400",
    icon: "/imageForDesign/Intermediate.png",
    role: "/imageForDesign/Builder.png",
    mascot: "/imageForDesign/level-2.png",
  },
  2: {
    label: "Advance",
    color: "bg-red-400",
    icon: "/imageForDesign/Advance.png",
    role: "/imageForDesign/Hero.png",
    mascot: "/imageForDesign/level-3.png",
  },
};

const LevelsDisplay = ({ modules }) => {
  const { progress } = useFinance();
  const { role } = useAuth();
  const [expanded, setExpanded] = useState({});

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
            {/* Left Color Strip */}
            <div
              className={`absolute top-0 left-0 h-full w-2 rounded-l-xl ${difficulty.color}`}
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
                  <p className="text-sm text-gray-600">{module.description}</p>
                  <div className="flex gap-2 text-xs mt-1 text-gray-500 items-center">
                    <img src={difficulty.icon} alt="Difficulty" className="h-5" />
                    <img src={difficulty.role} alt="Role" className="h-5" />
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
                            {` Challenge ${i + 1
                              }: ${challenge.title}`}
                          </p>
                          <p className="text-sm text-gray-600">
                            {challenge.description}
                          </p>
                        </div>
                      </div>

                      {isUnlocked ? (
                        <Link to={challenge.path}>
                          <img
                            src="/imageForDesign/start-now.png"
                            alt="Start"
                            className="w-[100px]"
                          />
                        </Link>
                      ) : (
                        <img
                          src="/imageForDesign/unlock-now-button.png"
                          alt="Locked"
                          className="w-[100px]"
                        />
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
