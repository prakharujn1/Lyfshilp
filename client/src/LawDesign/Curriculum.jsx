import React, { useState, forwardRef } from "react";
import { ChevronDown, ChevronUp, PlayCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFinance } from "../contexts/FinanceContext";
import { useAuth } from "../contexts/AuthContext";

const Curriculum = forwardRef((props, ref) => {
  const { progress } = useFinance();
  const [activeModule, setActiveModule] = useState(null);
  const { role } = useAuth();

  const modules = [
    {
      title: "🧩 LEVEL 1 - Legal Starters – Awareness & Identification",
      description: "🎯 Mission: Learn legal basics and awareness",
      duration: "4 weeks",
      challenges: [
        {
          title: "Sort It Out",
          description: "Objective: Categorize legal phrases into correct law types.",
          duration: "45 min",
          path: "/sort-it-out",
        },
        {
          title: "LawQuest – The Legal Adventure",
          description: "Objective: Answer MCQs on rights, duties, and basic laws.",
          duration: "50 min",
          path: "/legal-quiz",
        },
      ],
    },
    {
      title: "🎮 LEVEL 2 - Law Learner – Match & Connect",
      description: "🎯 Mission: Know rights, duties and law better.",
      duration: "4 weeks",
      challenges: [
        {
          title: "Puzzle Match",
          description:
            "Objective: Match legal terms with correct descriptions.",
          duration: "50 min",
          path: "/puzzle-match",
        },
        {
          title: "Catch Your Rights",
          description: "Objective: Categorize terms into law, rights, duties.",
          duration: "50 min",
          path: "/catch-your-rights",
        },
      ],
    },
    {
      title: "📈 LEVEL 3 - Legal Strategist",
      description: "🎯 Mission: Experience the Court",
      duration: "4 weeks",
      challenges: [
        {
          title: "Courtroom Clash",
          description: "Objective: Live through courtroom experience.",
          duration: "50 min",
          path: "/case-hear",
        },
      ],
    },
    {
      title: "📈 LEVEL 4 - Questionnaire",
      description: "🎯 Mission: Be more legally aware",
      duration: "4 weeks",
      challenges: [
        {
          title: "Maze Of Choices",
          description: "Objective: Break through several legal awareness questions.",
          duration: "50 min",
          path: "/maze-of-choices",
        },
      ],
    },
  ];

  const handleLockedClick = () => {
    toast.info("🔒 Complete previous challenges to unlock this one!");
  };

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

    // Check if the previous challenge in the same module is completed
    if (challengeIndex > 0) {
      return isChallengeCompleted(moduleIndex, challengeIndex - 1);
    }

    // If it's the first challenge in a module, unlock if last challenge in previous module is complete
    const prevModule = modules[moduleIndex - 1];
    if (!prevModule) return false;
    const lastChallengeIndex = prevModule.challenges.length - 1;
    return isChallengeCompleted(moduleIndex - 1, lastChallengeIndex);
  };

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-3">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Your Journey to Legal Awareness Mastery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our structured curriculum takes you from financial basics to
            advanced wealth-building strategies through 3 carefully designed
            levels ensuring practical learning phases.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {modules.map((module, moduleIndex) => (
            <div
              key={moduleIndex}
              className="mb-4 overflow-hidden border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() =>
                  setActiveModule(
                    activeModule === moduleIndex ? null : moduleIndex
                  )
                }
              >
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-navy-100 text-navy-800 font-semibold text-sm">
                    {moduleIndex + 1}
                  </span>
                  <div className="ml-4 text-left">
                    <h3 className="text-lg font-semibold text-navy-900">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {module.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 hidden sm:block">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  {activeModule === moduleIndex ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>

              {activeModule === moduleIndex && (
                <div className="px-6 pb-4">
                  <div className="pt-2 pb-4">
                    {module.challenges.map((challenge, challengeIndex) => {
                      const isUnlocked = isChallengeUnlocked(
                        moduleIndex,
                        challengeIndex
                      );
                      const isCompleted = isChallengeCompleted(
                        moduleIndex,
                        challengeIndex
                      );

                      return (
                        <div key={challengeIndex} className="mt-4 first:mt-0">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <PlayCircle
                                className={`h-5 w-5 ${
                                  isCompleted || role === "admin"
                                    ? "text-green-500"
                                    : isUnlocked
                                    ? "text-yellow-500"
                                    : "text-gray-400"
                                }`}
                              />
                            </div>
                            <div className="ml-3">
                              {isUnlocked || isCompleted || role === "admin" ? (
                                <Link to={challenge.path}>
                                  <h4 className="text-md font-semibold text-navy-800 hover:underline hover:text-yellow-600 transition">
                                    {isCompleted || role === "admin"
                                      ? "✅"
                                      : "⏳"}{" "}
                                    Challenge {challengeIndex + 1}:{" "}
                                    {challenge.title}
                                  </h4>
                                </Link>
                              ) : (
                                <button
                                  onClick={handleLockedClick}
                                  className="text-left"
                                  disabled
                                >
                                  <h4 className="text-md font-semibold text-gray-400 cursor-not-allowed">
                                    🔒 Challenge {challengeIndex + 1}:{" "}
                                    {challenge.title}
                                  </h4>
                                </button>
                              )}

                              <p className="text-sm text-gray-600 mt-1">
                                {challenge.description}
                              </p>
                              <div className="mt-2 flex items-center text-xs text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{challenge.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to access the full curriculum?
          </p>
          <Link to="/register">
            <button className="px-6 py-3 bg-navy-800 text-black font-semibold rounded-md hover:bg-gray-300 transition duration-150 transform hover:-translate-y-1">
              Enroll in the Program
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Curriculum;
