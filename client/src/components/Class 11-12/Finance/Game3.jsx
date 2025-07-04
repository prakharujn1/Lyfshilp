import React, { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Home,
  Car,
  Shield,
  TrendingUp,
  Heart,
  Zap,
  Trophy,
  Star,
  BookOpen,
  Download,
  ArrowRight,
  ArrowLeft,
  Play,
  RotateCcw,
  Plus,
  Minus,
  DollarSign,
  AlertTriangle,
  Gift,
} from "lucide-react";

const FinFestGame = () => {
  const [currentPage, setCurrentPage] = useState("intro");
  const [gameState, setGameState] = useState({
    avatar: "",
    career: "",
    salary: 0,
    currentMonth: 1,
    totalMonths: 12,
    cash: 0,
    netWorth: 0,
    creditScore: 750,
    stress: 0,
    expenses: {
      housing: { type: "rent", amount: 10000 },
      transport: { type: "public", amount: 0 },
      insurance: { enabled: false, amount: 0 },
      sip: { enabled: false, amount: 0 },
    },
    investments: 0,
    totalEarnings: 0,
    totalExpenses: 0,
    events: [],
    badges: [],
  });

  const [currentEvent, setCurrentEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [animations, setAnimations] = useState([]);
  const [monthlyFlow, setMonthlyFlow] = useState({
    salary: 0,
    expenses: 0,
    savings: 0,
  });
  const [showMonthlyFlow, setShowMonthlyFlow] = useState(false);

  const avatars = [
    {
      id: "alex",
      name: "Alex",
      emoji: "👨‍💼",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "sara",
      name: "Sara",
      emoji: "👩‍💻",
      color: "from-pink-500 to-pink-700",
    },
    {
      id: "raj",
      name: "Raj",
      emoji: "👨‍🎓",
      color: "from-green-500 to-green-700",
    },
    {
      id: "priya",
      name: "Priya",
      emoji: "👩‍🎨",
      color: "from-purple-500 to-purple-700",
    },
  ];

  const careers = [
    {
      id: "tech",
      name: "Tech Developer",
      salary: 60000,
      icon: "💻",
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: "media",
      name: "Media Professional",
      salary: 45000,
      icon: "📺",
      color: "from-red-600 to-pink-700",
    },
    {
      id: "law",
      name: "Legal Advisor",
      salary: 55000,
      icon: "⚖️",
      color: "from-yellow-600 to-orange-700",
    },
    {
      id: "finance",
      name: "Finance Analyst",
      salary: 50000,
      icon: "💰",
      color: "from-green-600 to-emerald-700",
    },
  ];

  const events = [
    {
      id: 1,
      type: "emergency",
      title: "Medical Emergency!",
      description: "Emergency surgery required",
      cost: 25000,
      impact: "negative",
      icon: "🏥",
      color: "from-red-500 to-red-700",
    },
    {
      id: 2,
      type: "positive",
      title: "Promotion!",
      description: "Salary increased by ₹10,000",
      salaryIncrease: 10000,
      impact: "positive",
      icon: "🎉",
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      type: "life",
      title: "Getting Married!",
      description: "Wedding expenses and budget adjustments",
      cost: 50000,
      impact: "neutral",
      icon: "💒",
      color: "from-pink-500 to-pink-700",
    },
    {
      id: 4,
      type: "opportunity",
      title: "Side Hustle!",
      description: "Extra income from freelancing",
      benefit: 15000,
      impact: "positive",
      icon: "💼",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 5,
      type: "emergency",
      title: "Vehicle Breakdown!",
      description: "Major repair needed urgently",
      cost: 8000,
      impact: "negative",
      icon: "🔧",
      color: "from-orange-500 to-orange-700",
    },
    {
      id: 6,
      type: "positive",
      title: "Tax Refund!",
      description: "Government tax refund received",
      benefit: 12000,
      impact: "positive",
      icon: "💸",
      color: "from-teal-500 to-teal-700",
    },
    {
      id: 7,
      type: "emergency",
      title: "Job Loss!",
      description: "Company downsizing - need to find new job",
      salaryReduction: 0.5,
      impact: "negative",
      icon: "😰",
      color: "from-gray-500 to-gray-700",
    },
    {
      id: 8,
      type: "positive",
      title: "Bonus!",
      description: "Performance bonus received",
      benefit: 20000,
      impact: "positive",
      icon: "🏆",
      color: "from-gold-500 to-yellow-700",
    },
  ];

  const quizQuestions = [
    {
      question: "What would you cut to afford a wedding?",
      options: [
        "Entertainment expenses",
        "Investment SIP",
        "Insurance",
        "Food budget",
      ],
      correct: 0,
      explanation:
        "Never compromise on insurance or essential investments. Cut discretionary spending first.",
    },
    {
      question: "Should you take a loan or delay purchase?",
      options: [
        "Always take loan",
        "Always delay",
        "Depends on necessity",
        "Ask friends",
      ],
      correct: 2,
      explanation:
        "Evaluate necessity, interest rates, and your financial capacity before deciding.",
    },
    {
      question: "What's the ideal emergency fund?",
      options: [
        "1 month salary",
        "3-6 months expenses",
        "1 year salary",
        "No need",
      ],
      correct: 1,
      explanation:
        "3-6 months of expenses ensures you're covered during emergencies.",
    },
  ];

  const addAnimation = (type, amount, color = "text-green-400") => {
    const id = Date.now() + Math.random();
    const newAnimation = {
      id,
      type,
      amount,
      color,
      show: true,
    };

    setAnimations((prev) => [...prev, newAnimation]);

    setTimeout(() => {
      setAnimations((prev) => prev.filter((anim) => anim.id !== id));
    }, 2000);
  };

  const handleAvatarSelect = (avatar) => {
    setGameState((prev) => ({ ...prev, avatar: avatar.id }));
  };

  const handleCareerSelect = (career) => {
    setGameState((prev) => ({
      ...prev,
      career: career.id,
      salary: career.salary,
      cash: career.salary * 2,
    }));
  };

  const updateExpense = (category, type, amount) => {
    const oldAmount = gameState.expenses[category].amount;
    const difference = amount - oldAmount;

    if (difference !== 0) {
      addAnimation(
        difference > 0 ? "expense" : "saving",
        Math.abs(difference),
        difference > 0 ? "text-red-400" : "text-green-400"
      );
    }

    setGameState((prev) => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        [category]: { type, amount },
      },
    }));
  };

  const toggleInsurance = () => {
    const newEnabled = !gameState.expenses.insurance.enabled;
    const amount = newEnabled ? 2500 : 0;

    addAnimation(
      newEnabled ? "expense" : "saving",
      2500,
      newEnabled ? "text-red-400" : "text-green-400"
    );

    setGameState((prev) => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        insurance: {
          enabled: newEnabled,
          amount: amount,
        },
      },
    }));
  };

  const toggleSIP = () => {
    const newEnabled = !gameState.expenses.sip.enabled;
    const amount = newEnabled ? 5000 : 0;

    addAnimation(
      newEnabled ? "investment" : "saving",
      5000,
      newEnabled ? "text-red-400" : "text-green-400"
    );

    setGameState((prev) => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        sip: {
          enabled: newEnabled,
          amount: amount,
        },
      },
    }));
  };

  const simulateMonth = () => {
    if (gameState.currentMonth > gameState.totalMonths) return;

    const monthlyExpenses = Object.values(gameState.expenses).reduce(
      (sum, exp) => sum + exp.amount,
      0
    );

    const monthlyIncome = gameState.salary;
    const monthlySavings = monthlyIncome - monthlyExpenses;

    // Show monthly flow animation
    setMonthlyFlow({
      salary: monthlyIncome,
      expenses: monthlyExpenses,
      savings: monthlySavings,
    });

    setShowMonthlyFlow(true);

    setTimeout(() => {
      setShowMonthlyFlow(false);
    }, 4000);

    // Random event trigger (25% chance)
    if (Math.random() > 0.55 && !showEventModal) {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setCurrentEvent(randomEvent);
      setShowEventModal(true);
      return;
    }

    // Add salary animation
    addAnimation("income", monthlyIncome, "text-green-400");

    // Add expense animation
    if (monthlyExpenses > 0) {
      if (!currentEvent) {
        setTimeout(() => {
          addAnimation("expense", monthlyExpenses, "text-red-400");
        }, 500);
      } else {
        const expense = monthlyExpenses - currentEvent.cost;
        if (expense > 0) {
          setTimeout(() => {
            addAnimation(
              "expense",
              monthlyExpenses - currentEvent.cost,
              "text-red-400"
            );
          }, 500);
        }
      }
    }

    setGameState((prev) => {
      const newCash = prev.cash + monthlySavings;
      const newInvestments =
        prev.investments +
        (prev.expenses.sip.enabled ? prev.expenses.sip.amount * 1.01 : 0);
      const newNetWorth = newCash + newInvestments;
      const newStress = Math.max(
        0,
        Math.min(100, prev.stress + (monthlySavings < 0 ? 10 : -2))
      );

      return {
        ...prev,
        currentMonth: prev.currentMonth + 1,
        cash: newCash,
        investments: newInvestments,
        netWorth: newNetWorth,
        totalEarnings: prev.totalEarnings + monthlyIncome,
        totalExpenses: prev.totalExpenses + monthlyExpenses,
        stress: newStress,
        creditScore: Math.max(
          300,
          Math.min(900, prev.creditScore + (monthlySavings > 0 ? 2 : -5))
        ),
      };
    });
  };

  const handleEventChoice = (accept) => {
    if (!currentEvent) return;

    setGameState((prev) => {
      let newState = { ...prev };

      if (accept) {
        if (currentEvent.cost) {
          newState.cash -= currentEvent.cost;
          newState.stress = Math.min(100, newState.stress + 15);
          addAnimation("expense", currentEvent.cost, "text-red-400");
        }
        if (currentEvent.benefit) {
          newState.cash += currentEvent.benefit;
          newState.stress = Math.max(0, newState.stress - 10);
          addAnimation("income", currentEvent.benefit, "text-green-400");
        }
        if (currentEvent.salaryIncrease) {
          newState.salary += currentEvent.salaryIncrease;
          addAnimation("income", currentEvent.salaryIncrease, "text-green-400");
        }
        if (currentEvent.salaryReduction) {
          const reduction = newState.salary * currentEvent.salaryReduction;
          newState.salary = Math.max(0, newState.salary - reduction);
          newState.stress = Math.min(100, newState.stress + 25);
          addAnimation("expense", reduction, "text-red-400");
        }
      }

      newState.events.push({ ...currentEvent, accepted: accept });
      return newState;
    });

    setShowEventModal(false);
    setCurrentEvent(null);
  };

  const calculateBadges = () => {
    const badges = [];

    if (
      gameState.expenses.insurance.enabled &&
      gameState.cash > gameState.salary * 3
    ) {
      badges.push({
        name: "Risk Ready",
        icon: "🛡️",
        color: "from-blue-500 to-blue-700",
      });
    }

    if (gameState.expenses.sip.enabled && gameState.investments > 100000) {
      badges.push({
        name: "Investor Mindset",
        icon: "📈",
        color: "from-green-500 to-green-700",
      });
    }

    if (gameState.netWorth > gameState.totalExpenses) {
      badges.push({
        name: "Debt-Free Hero",
        icon: "🏆",
        color: "from-yellow-500 to-yellow-700",
      });
    }

    return badges;
  };

  const resetGame = () => {
    setGameState({
      avatar: "",
      career: "",
      salary: 0,
      currentMonth: 1,
      totalMonths: 12,
      cash: 0,
      netWorth: 0,
      creditScore: 750,
      stress: 0,
      expenses: {
        housing: { type: "rent", amount: 10000 },
        transport: { type: "public", amount: 0 },
        insurance: { enabled: false, amount: 0 },
        sip: { enabled: false, amount: 0 },
      },
      investments: 0,
      totalEarnings: 0,
      totalExpenses: 0,
      events: [],
      badges: [],
    });
    setCurrentPage("intro");
    setAnimations([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, gameState.currentMonth]);

  // Intro Page
  // Intro Page
  const IntroPage = () => (
    <div className="min-h-screen w-[90%] mx-auto rounded-xl mt-5 mb-5 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mt-5 mb-8 animate-bounce">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎯 FinFest
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mb-6">
            Life Simulation Challenge
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Can you balance life and money?
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            📋 Game Instructions
          </h3>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-500/20 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-white font-bold text-sm md:text-xl">
                Cash
              </div>
              <div className="text-white/80 text-sm md:text-lg t-1">
                Your available money
              </div>
            </div>
            <div className="bg-blue-500/20 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-white font-bold text-sm md:text-xl">
                Net Worth
              </div>
              <div className="text-white/80 text-sm md:text-lg mt-1">
                Cash + Investments
              </div>
            </div>
            <div className="bg-yellow-500/20 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-white font-bold text-sm md:text-xl">
                Credit Score
              </div>
              <div className="text-white/80 text-xs md:text-lg mt-1">
                300-900 range
              </div>
            </div>
            <div className="bg-red-500/20 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-2">😰</div>
              <div className="text-white font-bold text-sm md:text-xl">
                Stress
              </div>
              <div className="text-white/80 text-xs md:text-lg mt-1">
                Keep it low!
              </div>
            </div>
          </div>

          {/* Game Rules */}
          <div className="bg-white/10 rounded-2xl p-4 mb-6">
            <h4 className="text-white text-xl font-bold mb-3">
              🎮 How to Play:
            </h4>
            <ul className="text-white/90 text-lg space-y-2">
              <li>• Choose your avatar and career path</li>
              <li>• Make smart financial decisions monthly</li>
              <li>• Handle surprise events and emergencies</li>
              <li>• Build wealth while managing stress</li>
              <li>• Unlock achievements and learn financial wisdom</li>
            </ul>
          </div>

          {/* Key Game Rules & Parameters */}
          <div className="bg-white/10 rounded-2xl p-4 mb-6">
            <h4 className="text-white text-xl font-bold mb-3">
              📏 Game Rules & Scoring:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-white/90 text-sm md:text-xl">
                  <div className="text-white/90 text-md md:text-xl">
                    <strong className="text-green-300">
                      💰 Financial Impact:
                    </strong>
                  </div>
                  <ul className="text-sm md:text-lg">
                    <li />• Positive savings: +2 credit score, -2 stress
                    <li />• Negative savings: -5 credit score, +10 stress
                    <li />• SIP investments grow by 1% monthly
                  </ul>
                </div>
                <div className="text-white/90">
                  <div>
                    <strong className="text-blue-300 text-md md:text-xl">
                      🎯 Final Score Formula:
                    </strong>
                  </div>
                  <ul className="text-sm md:text-lg">
                    <li />• Net Worth: 50% weight (max ₹10L = 50 points)
                    <li />• Credit Score: 30% weight (900 = 30 points)
                    <li />• Stress Level: 20% weight (0% stress = 20 points)
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <strong className="text-yellow-300 text-sm md:text-xl">
                    ⚡ Random Events:
                  </strong>
                </div>
                <ul className="text-white/90 text-sm md:text-lg">
                  <li />• 45% chance each month (medical, promotion, etc.)
                  <li />• Major costs: ₹8K-₹50K | Benefits: ₹12K-₹20K
                  <li />• Job loss reduces salary by 50%
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Choose Your Avatar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                onClick={() => handleAvatarSelect(avatar)}
                className={`bg-gradient-to-br ${avatar.color} ${
                  gameState.avatar === avatar.id ? "ring-4 ring-white" : ""
                } 
                rounded-2xl p-4 md:p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="text-3xl md:text-4xl mb-2">{avatar.emoji}</div>
                <div className="text-white font-semibold text-sm md:text-base">
                  {avatar.name}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Choose Your Career
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {careers.map((career) => (
              <div
                key={career.id}
                onClick={() => handleCareerSelect(career)}
                className={`bg-gradient-to-br ${career.color} ${
                  gameState.career === career.id ? "ring-4 ring-white" : ""
                } 
                rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-2xl md:text-3xl mb-2">
                      {career.icon}
                    </div>
                    <div className="font-bold text-sm md:text-base">
                      {career.name}
                    </div>
                    <div className="text-xs md:text-sm opacity-90">
                      ₹{career.salary.toLocaleString()}/month
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {gameState.avatar && gameState.career && (
            <div className="text-center">
              <button
                onClick={() => setCurrentPage("game")}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Journey! <ArrowRight className="inline ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Game Page
  const GamePage = () => {
    const monthlyExpenses = Object.values(gameState.expenses).reduce(
      (sum, exp) => sum + exp.amount,
      0
    );
    const monthlyIncome = gameState.salary;
    const monthlySavings = monthlyIncome - monthlyExpenses;
    const progressPercentage =
      (gameState.currentMonth / gameState.totalMonths) * 100;

    return (
      <div className="min-h-screen w-[90%] mx-auto rounded-xl mt-5 mb-5 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative">
        {/* Floating Animations */}
        <div className="fixed top-20 right-4 z-50 space-y-2">
          {animations.map((anim) => (
            <div
              key={anim.id}
              className={`${anim.color} font-bold text-lg animate-bounce bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1`}
            >
              {anim.type === "income" && (
                <Plus className="inline mr-1" size={16} />
              )}
              {anim.type === "expense" && (
                <Minus className="inline mr-1" size={16} />
              )}
              {anim.type === "investment" && (
                <Minus className="inline mr-1" size={16} />
              )}
              ₹{anim.amount.toLocaleString()}
            </div>
          ))}
        </div>

        {/* Monthly Flow Animation */}
        {showMonthlyFlow && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-center animate-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">
                💰 Month {gameState.currentMonth} Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center text-green-400 text-xl">
                  <Plus className="mr-2" />
                  Salary: ₹{monthlyFlow.salary.toLocaleString()}
                </div>
                <div className="flex items-center justify-center text-red-400 text-xl">
                  <Minus className="mr-2" />
                  Expenses: ₹{monthlyFlow.expenses.toLocaleString()}
                </div>
                <div
                  className={`flex items-center justify-center text-xl ${
                    monthlyFlow.savings >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  <DollarSign className="mr-2" />
                  {monthlyFlow.savings >= 0 ? "Saved" : "Deficit"}: ₹
                  {Math.abs(monthlyFlow.savings).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-4 md:p-6 mb-6 border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-0">
                Month {gameState.currentMonth} / {gameState.totalMonths}
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage("intro")}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all"
                >
                  <ArrowLeft className="inline mr-1" size={16} />
                  Back
                </button>
                {gameState.currentMonth > gameState.totalMonths && (
                  <button
                    onClick={() => setCurrentPage("results")}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all"
                  >
                    Results <ArrowRight className="inline ml-1" size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white/20 rounded-full h-4 mb-4">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, progressPercentage)}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-green-500/20">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-white font-bold text-sm">Cash</div>
              <div className="text-white text-lg">
                ₹{gameState.cash.toLocaleString()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-blue-500/20">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-white font-bold text-sm">Net Worth</div>
              <div className="text-white text-lg">
                ₹{gameState.netWorth.toLocaleString()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-yellow-500/20">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-white font-bold text-sm">Credit Score</div>
              <div className="text-white text-lg">{gameState.creditScore}</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-red-500/20">
              <div className="text-2xl mb-2">😰</div>
              <div className="text-white font-bold text-sm">Stress</div>
              <div className="text-white text-lg">{gameState.stress}%</div>
              <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    gameState.stress > 70
                      ? "bg-red-500"
                      : gameState.stress > 40
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{ width: `${gameState.stress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-3xl p-6 mb-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">
              Monthly Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-4 border border-green-500/20">
                <div className="text-green-300 font-semibold flex items-center">
                  <Plus className="mr-2" size={16} />
                  Income
                </div>
                <div className="text-white text-xl">
                  ₹{monthlyIncome.toLocaleString()}
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-2xl p-4 border border-red-500/20">
                <div className="text-red-300 font-semibold flex items-center">
                  <Minus className="mr-2" size={16} />
                  Expenses
                </div>
                <div className="text-white text-xl">
                  ₹{monthlyExpenses.toLocaleString()}
                </div>
              </div>
              <div
                className={`bg-gradient-to-br ${
                  monthlySavings >= 0
                    ? "from-green-500/20 to-emerald-600/20 border-green-500/20"
                    : "from-red-500/20 to-pink-600/20 border-red-500/20"
                } rounded-2xl p-4 border`}
              >
                <div
                  className={`${
                    monthlySavings >= 0 ? "text-green-300" : "text-red-300"
                  } font-semibold flex items-center`}
                >
                  <DollarSign className="mr-2" size={16} />
                  {monthlySavings >= 0 ? "Savings" : "Deficit"}
                </div>
                <div className="text-white textxl">
                  ₹{Math.abs(monthlySavings).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Expense Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Housing */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Home className="mr-2" size={20} />
                Housing
              </h3>
              <div className="space-y-3">
                <div
                  onClick={() => updateExpense("housing", "rent", 10000)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    gameState.expenses.housing.type === "rent"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 ring-2 ring-blue-400"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="text-white font-semibold">🏠 Rent</div>
                  <div className="text-white/80 text-sm">₹10,000/month</div>
                </div>
                <div
                  onClick={() => updateExpense("housing", "emi", 20000)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    gameState.expenses.housing.type === "emi"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 ring-2 ring-blue-400"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="text-white font-semibold">🏡 Home EMI</div>
                  <div className="text-white/80 text-sm">₹20,000/month</div>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-lg rounded-3xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Car className="mr-2" size={20} />
                Transport
              </h3>
              <div className="space-y-3">
                <div
                  onClick={() => updateExpense("transport", "public", 0)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    gameState.expenses.transport.type === "public"
                      ? "bg-gradient-to-r from-green-500 to-green-600 ring-2 ring-green-400"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="text-white font-semibold">
                    🚌 Public Transport
                  </div>
                  <div className="text-white/80 text-sm">₹0/month</div>
                </div>
                <div
                  onClick={() => updateExpense("transport", "bike", 3000)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    gameState.expenses.transport.type === "bike"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 ring-2 ring-orange-400"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="text-white font-semibold">🏍️ Bike</div>
                  <div className="text-white/80 text-sm">₹3,000/month</div>
                </div>
                <div
                  onClick={() => updateExpense("transport", "car", 7000)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${
                    gameState.expenses.transport.type === "car"
                      ? "bg-gradient-to-r from-red-500 to-red-600 ring-2 ring-red-400"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="text-white font-semibold">🚗 Car</div>
                  <div className="text-white/80 text-sm">₹7,000/month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance & Investment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-lg rounded-3xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="mr-2" size={20} />
                Insurance
              </h3>
              <div
                onClick={toggleInsurance}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${
                  gameState.expenses.insurance.enabled
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 ring-2 ring-blue-400"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <div className="text-white font-semibold">
                  {gameState.expenses.insurance.enabled ? "✅" : "❌"} Health &
                  Life Insurance
                </div>
                <div className="text-white/80 text-sm">₹2,500/month</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Investment SIP
              </h3>
              <div
                onClick={toggleSIP}
                className={`p-4 rounded-2xl cursor-pointer transition-all ${
                  gameState.expenses.sip.enabled
                    ? "bg-gradient-to-r from-green-500 to-green-600 ring-2 ring-green-400"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <div className="text-white font-semibold">
                  {gameState.expenses.sip.enabled ? "✅" : "❌"} Monthly SIP
                </div>
                <div className="text-white/80 text-sm">₹5,000/month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Month Button */}
        <div className="text-center mt-6">
          {gameState.currentMonth <= gameState.totalMonths ? (
            <button
              onClick={simulateMonth}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Play className="inline mr-2" size={20} />
              Next Month
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage("results")}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Trophy className="inline mr-2" size={20} />
              View Results
            </button>
          )}
        </div>
        {/* Event Modal */}
        {showEventModal && currentEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div
              className={`bg-gradient-to-br ${currentEvent.color} rounded-3xl p-8 max-w-md w-full text-center animate-pulse`}
            >
              <div className="text-6xl mb-4">{currentEvent.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentEvent.title}
              </h3>
              <p className="text-white/90 mb-6">{currentEvent.description}</p>

              {currentEvent.cost && (
                <div className="text-red-200 font-bold mb-4">
                  Cost: ₹{currentEvent.cost.toLocaleString()}
                </div>
              )}
              {currentEvent.benefit && (
                <div className="text-green-200 font-bold mb-4">
                  Benefit: ₹{currentEvent.benefit.toLocaleString()}
                </div>
              )}
              {currentEvent.salaryIncrease && (
                <div className="text-green-200 font-bold mb-4">
                  Salary Increase: ₹
                  {currentEvent.salaryIncrease.toLocaleString()}/month
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleEventChoice(true)}
                  className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleEventChoice(false)}
                  className="bg-gray-600 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition-all"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Results Page
  const ResultsPage = () => {
    const badges = calculateBadges();
    const finalScore = Math.max(
      0,
      Math.min(
        100,
        (gameState.netWorth / 1000000) * 50 +
          (gameState.creditScore / 900) * 30 +
          ((100 - gameState.stress) / 100) * 20
      )
    );

    return (
      <div className="min-h-screen w-[90%] mx-auto rounded-xl mt-5 mb-5 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🎉 Game Complete!
            </h1>
            <div className="text-2xl md:text-3xl text-white/90 mb-6">
              Your Financial Journey: Age 22-27
            </div>
          </div>

          {/* Final Score */}
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-3xl p-8 mb-8 text-center border border-yellow-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Final Score</h2>
            <div className="text-6xl font-bold text-yellow-400 mb-4">
              {Math.round(finalScore)}/100
            </div>
            <div className="text-xl text-white/90">
              {finalScore >= 80
                ? "🏆 Financial Superstar!"
                : finalScore >= 60
                ? "⭐ Well Done!"
                : finalScore >= 40
                ? "👍 Good Effort!"
                : "💪 Keep Learning!"}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-green-500/20">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-white font-bold">Final Cash</div>
              <div className="text-white text-xl">
                ₹{gameState.cash.toLocaleString()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-blue-500/20">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white font-bold">Net Worth</div>
              <div className="text-white text-xl">
                ₹{gameState.netWorth.toLocaleString()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-yellow-500/20">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-white font-bold">Credit Score</div>
              <div className="text-white text-xl">{gameState.creditScore}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 text-center border border-purple-500/20">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-white font-bold">Investments</div>
              <div className="text-white text-xl">
                ₹{gameState.investments.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Badges */}
          {badges.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                🏆 Achievements Unlocked
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${badge.color} rounded-2xl p-6 text-center`}
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="text-white font-bold">{badge.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Financial Breakdown */}
          <div className="bg-gradient-to-br from-slate-500/20 to-gray-600/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-slate-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              💹 Financial Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between text-white">
                  <span>Total Earnings:</span>
                  <span className="text-green-400">
                    ₹{gameState.totalEarnings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Total Expenses:</span>
                  <span className="text-red-400">
                    ₹{gameState.totalExpenses.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-white border-t border-white/20 pt-2">
                  <span className="font-bold">Net Savings:</span>
                  <span
                    className={`font-bold ${
                      gameState.totalEarnings - gameState.totalExpenses >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹
                    {(
                      gameState.totalEarnings - gameState.totalExpenses
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-white">
                  <span>Stress Level:</span>
                  <span
                    className={`${
                      gameState.stress > 70
                        ? "text-red-400"
                        : gameState.stress > 40
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {gameState.stress}%
                  </span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Events Handled:</span>
                  <span className="text-blue-400">
                    {gameState.events.length}
                  </span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Investment Growth:</span>
                  <span className="text-purple-400">
                    ₹{gameState.investments.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quiz Section */}
          <div className="bg-gradient-to-br from-teal-500/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-teal-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🧠 Financial Wisdom Quiz
            </h3>
            <div className="space-y-6">
              {quizQuestions.map((q, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-4">{q.question}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {q.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          optIndex === q.correct
                            ? "bg-green-500/30 border-2 border-green-400"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <div className="text-white text-sm">{option}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-green-300 text-sm">
                    ✅ {q.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg mr-4"
            >
              <RotateCcw className="inline mr-2" size={20} />
              Play Again
            </button>
            <button
              onClick={() => {
                const checklist = `
FinFest Smart Adulting Checklist:
✅ Build Emergency Fund (3-6 months expenses)
✅ Get Health & Life Insurance
✅ Start SIP Investments Early
✅ Maintain Good Credit Score
✅ Track Monthly Expenses
✅ Plan for Major Life Events
✅ Balance Lifestyle with Savings
✅ Handle Financial Stress Wisely
                `;
                const blob = new Blob([checklist], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "smart-adulting-checklist.txt";
                a.click();
              }}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="inline mr-2" size={20} />
              Download Checklist
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Main App Component
  return (
    <div className="min-h-screen">
      {currentPage === "intro" && <IntroPage />}
      {currentPage === "game" && <GamePage />}
      {currentPage === "results" && <ResultsPage />}
    </div>
  );
};

export default FinFestGame;
