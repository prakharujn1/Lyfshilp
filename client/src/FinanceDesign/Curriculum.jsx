import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  Download,
  Clock,
} from "lucide-react";

const Curriculum = () => {
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
          howItWorks: [
            "Students get a digital wallet with ₹500 for the week.",
            "They drag expenses into a timeline — choices include:",
            "₹100 – Weekend movie with friends",
            "₹150 – 1GB/day data plan",
            "₹75 – Lunch at canteen",
            "₹300 – Save for new shoes",
            "₹200 – School books",
            "₹50 – Surprise birthday gift",
            "Mid-week twist: broken earphone or last-minute project printout.",
            "Learning Outcome: Trade-offs and unexpected costs of real life.",
          ],
        },
        {
          title: "“Pick Your Bank” Simulator",
          description: "Objective: Introduce banking basics.",
          duration: "50 min",
          howItWorks: [
            "Scenario: Opening your first bank account.",
            "Bank A: ₹0 monthly fee, 3% interest",
            "Bank B: ₹50/month fee, free UPI + cashback",
            "Bank C: ₹0 fees but offline only",
            "Task: Pick one, explain your choice.",
            "Relatable Angle: Digital wallets (UPI, Paytm, Google Pay).",
          ],
        },
        {
          title: "Overspend Trap (Quiz Game)",
          description: "Scenario-based decision making.",
          duration: "45 min",
          howItWorks: [
            "Friend spent ₹1,200 on concert tickets, can't pay school trip fees.",
            "Decision options: Lend money, suggest selling something, help budget, or skip the trip.",
            "Feedback: Consequences of impulsive spending.",
          ],
        },
        {
          title: "Boss-Level Task: “My Real-Life Budget”",
          description: "Create a one-month budget for yourself.",
          duration: "55 min",
          howItWorks: [
            "₹ Income from allowance/part-time work",
            "Expected expenses list",
            "3 saving strategies",
            "Outcome: Earn 'Budget Boss' badge",
          ],
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
          howItWorks: [
            "Virtual credit card with ₹5,000 limit",
            "Spend options: games, headphones, dinner, phone EMI",
            "Monthly choices: pay minimum or full amount",
            "Watch interest and debt pile up",
            "Relatable: BNPL schemes on apps",
          ],
        },
        {
          title: " EMI vs Lump Sum (Choice-Based Game)",
          description: "Understand the cost of payment methods.",
          duration: "50 min",
          howItWorks: [
            "Option A: Save ₹4,000/month for 3 months",
            "Option B: ₹4,500 upfront + ₹3,000/month for 3 months (EMI)",
            "Visual simulation of total cost",
            "Choose the better option and justify",
          ],
        },
        {
          title: " Wants vs Needs Sorting",
          description: "Game format decision-making activity.",
          duration: "45 min",
          howItWorks: [
            "Sort items into 'Need Now', 'Want Later', 'Skip It'",
            "Examples: School bag, Spotify Premium, Xbox controller, Bus pass",
            "Feedback: Spending values reconsidered",
          ],
        },
        {
          title: "Boss-Level Task: “My Purchase Plan”",
          description: "Plan a smart purchase over 3 months.",
          duration: "55 min",
          howItWorks: [
            "Choose a real product (e.g. gadget, books)",
            "Research price, create 3-month saving plan",
            "Consider EMI, discounts, alternatives",
            "Earn 'Smart Spender' badge",
          ],
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
          howItWorks: [
            "Allocate ₹10,000 into: FD (2%), MF (6–10%), Gold, Stocks, Savings (3%)",
            "Simulated 6-month loop shows growth/loss",
          ],
        },
        {
          title: " “News Flash!” Market Events",
          description: "React to market changes in real time.",
          duration: "50 min",
          howItWorks: [
            "Fake headlines impact portfolio:",
            "“Tech stocks crash”",
            "“Gold hits all-time high”",
            "“Mutual funds outperform savings”",
            "Adjust investments accordingly",
          ],
        },
        {
          title: "Risk-O-Meter Game",
          description: "Identify risk appetite.",
          duration: "45 min",
          howItWorks: [
            "Answer risk-tolerance questions",
            "Result: Risk profile (Cautious, Balanced, Aggressive)",
          ],
        },
        {
          title: "Boss-Level Task: “Build & Present Your Portfolio”",
          description: "Create a mock investment plan.",
          duration: "55 min",
          howItWorks: [
            "Allocate ₹10,000 across 3–5 options",
            "Write 3 reasons for choices",
            "Submit results after 6 simulated months",
            "Earn 'Rookie Investor' badge",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
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
                            <h4 className="text-md font-semibold text-navy-800">
                              Challenge {challengeIndex + 1}: {challenge.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {challenge.description}
                            </p>

                            <div className="mt-2 flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{challenge.duration}</span>
                            </div>

                            <div className="mt-3 pl-2 border-l-2 border-gray-200">
                              <h5 className="text-sm font-medium text-gray-700 mb-2">
                                How It Works:
                              </h5>
                              <ul className="space-y-1">
                                {challenge.howItWorks.map((step, stepIndex) => (
                                  <li
                                    key={stepIndex}
                                    className="text-sm text-gray-600 flex items-start"
                                  >
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <button className="inline-flex items-center px-3 py-1 text-xs font-medium text-navy-700 bg-navy-100 rounded-md hover:bg-navy-200 transition duration-150">
                                <FileText className="h-3.5 w-3.5 mr-1" />
                                Challenge Notes
                              </button>
                              <button className="inline-flex items-center px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-md hover:bg-green-200 transition duration-150">
                                <Download className="h-3.5 w-3.5 mr-1" />
                                Worksheet
                              </button>
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
};

export default Curriculum;
