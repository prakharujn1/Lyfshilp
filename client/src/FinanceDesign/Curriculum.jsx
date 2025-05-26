import React, { useState, forwardRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  Download,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Curriculum = forwardRef((props, ref) => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      title: "🧩 LEVEL 1: The Budgeter",
      description: "🎯 Mission: “Survive the Month Without Going Broke”",
      duration: "4 weeks",
      challenges: [
        {
          title: "Weekly Budget Builder (Drag-and-Drop Game)",
          description: "Objective: Teach budgeting and prioritization.",
          duration: "45 min",
          path: "/budget-builder",
        },
        {
          title: "“Pick Your Bank” Simulator",
          description: "Objective: Introduce banking basics.",
          duration: "50 min",
          path: "/pick-a-bank",
        },
        {
          title: "Overspend Trap (Quiz Game)",
          description: "Scenario-based decision making.",
          duration: "45 min",
          path: "/overspend-trap",
        },
        {
          title: "Boss-Level Task: “My Real-Life Budget”",
          description: "Create a one-month budget for yourself.",
          duration: "55 min",
          path: "/budget-activity",
        },
      ],
    },
    {
      title: "🎮 LEVEL 2: The Smart Spender",
      description: "🎯 Mission: “Buy That Dream Phone Without Getting Tricked”",
      duration: "4 weeks",
      challenges: [
        {
          title: "Credit Card Crash Course (Simulator)",
          description: "Objective: Explain credit, interest, and EMI traps.",
          duration: "50 min",
          path: "/credit-card-simulator",
        },
        {
          title: " EMI vs Lump Sum (Choice-Based Game)",
          description: "Understand the cost of payment methods.",
          duration: "50 min",
          path: "/emi-vs-lumpsum",
        },
        {
          title: " Wants vs Needs Sorting",
          description: "Game format decision-making activity.",
          duration: "45 min",
          path: "/challenge3",
        },
        {
          title: "Boss-Level Task: “My Purchase Plan”",
          description: "Plan a smart purchase over 3 months.",
          duration: "55 min",
          path: "/my_purchase_plan",
        },
      ],
    },
    {
      title: "📈 LEVEL 3: The Rookie Investor",
      description: "🎯 Mission: “Make Your First ₹10,000 Grow”",
      duration: "4 weeks",
      challenges: [
        {
          title: "Investment Options Simulator",
          description: "Explore various investment avenues.",
          duration: "60 min",
          path: "/investment-simulator",
        },
        {
          title: " “News Flash!” Market Events",
          description: "React to market changes in real time.",
          duration: "50 min",
          path: "/newsflash",
        },
        {
          title: "Risk-O-Meter Game",
          description: "Identify risk appetite.",
          duration: "45 min",
          path: "/riskometer",
        },
        {
          title: "Boss-Level Task: “Build & Present Your Portfolio”",
          description: "Create a mock investment plan.",
          duration: "55 min",
          path: "/your_portfolio",
        },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-3">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Your Journey to Financial Mastery
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
                    {module.challenges.map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="mt-4 first:mt-0">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <PlayCircle className="h-5 w-5 text-yellow-500" />
                          </div>
                          <div className="ml-3">
                            <Link to={challenge.path}>
                              <h4 className="text-md font-semibold text-navy-800 hover:underline hover:text-yellow-600 transition">
                                Challenge {challengeIndex + 1}:{" "}
                                {challenge.title}
                              </h4>
                            </Link>

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
                    ))}
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
          <button className="px-6 py-3 bg-navy-800 text-black font-semibold rounded-md hover:bg-gray-300 transition duration-150 transform hover:-translate-y-1">
            Enroll in the Program
          </button>
        </div>
      </div>
    </section>
  );
});

export default Curriculum;
