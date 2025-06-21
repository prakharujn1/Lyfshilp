import React, { useState, useEffect } from 'react';
import { Brain, Lightbulb, CheckCircle, AlertCircle, Target, Users, ArrowRight, Zap, Search, BookOpen, Trophy, Star } from 'lucide-react';

const Module5DecisionMaking = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [userSolutions, setUserSolutions] = useState(['', '', '']);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const problemSolvingSteps = [
    {
      number: 1,
      title: "Understand",
      description: "the problem",
      detail: "Take time to really understand what's going wrong",
      icon: <Search className="w-6 h-6" />,
      color: "from-green-400 to-green-500"
    },
    {
      number: 2,
      title: "Think",
      description: "of all possible solutions",
      detail: "Brainstorm different ways to solve it",
      icon: <Brain className="w-6 h-6" />,
      color: "from-emerald-400 to-emerald-500"
    },
    {
      number: 3,
      title: "Choose",
      description: "the best one",
      detail: "Pick the solution that makes the most sense",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 4,
      title: "Try",
      description: "it out",
      detail: "Put your chosen solution into action",
      icon: <Zap className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      number: 5,
      title: "Learn",
      description: "from what happened",
      detail: "Reflect on the results and improve next time",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "Team Not Listening",
      problem: "Your team is not listening during group work",
      icon: <Users className="w-8 h-8" />,
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Friend in Trouble",
      problem: "Your friend is being bullied and asks you not to tell anyone",
      icon: <AlertCircle className="w-8 h-8" />,
      difficulty: "Hard"
    },
    {
      id: 3,
      title: "Project Deadline",
      problem: "Your group project is due tomorrow but half the work isn't done",
      icon: <Trophy className="w-8 h-8" />,
      difficulty: "Medium"
    }
  ];

  const handleSolutionChange = (index, value) => {
    const newSolutions = [...userSolutions];
    newSolutions[index] = value;
    setUserSolutions(newSolutions);
  };

  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Decision-Making & Problem Solving
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn how leaders think before they act and solve problems step by step 🧠
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Brain className="w-6 h-6" />, text: "How leaders make choices", color: "bg-green-100 text-green-600" },
              { icon: <Lightbulb className="w-6 h-6" />, text: "How to solve problems step by step", color: "bg-emerald-100 text-emerald-600" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-lg">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Explanation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Smart Decision Making
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Good leaders <strong className="text-green-600">think before they act</strong>. 
                When problems happen, they don't panic — they use steps to find the best solution.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">The Key:</h3>
                </div>
                <p className="text-gray-600">
                  <strong className="text-green-600">Stay calm</strong> and follow a clear process to solve any problem.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Smart Leaders</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Don't make quick decisions</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Think about consequences</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Learn from every situation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Solving Steps - Featured Step */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              5 Steps to Solve Any Problem
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Follow these <strong className="text-green-600 text-2xl">5 simple steps</strong>
              </p>
            </div>
          </div>
          
          {/* Featured Step (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Step {currentStep + 1} of 5</div>
              <div className={`bg-gradient-to-r ${problemSolvingSteps[currentStep].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl font-bold">{problemSolvingSteps[currentStep].number}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{problemSolvingSteps[currentStep].title}</h3>
                    <p className="text-xl opacity-90 mb-3">{problemSolvingSteps[currentStep].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">{problemSolvingSteps[currentStep].detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Steps Grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {problemSolvingSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentStep === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentStep(index)}
              >
                <div className={`bg-gradient-to-r ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <div className="text-green-600">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Example Walkthrough */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Example: Team Not Listening
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Problem: "Your team is not listening during group work"
              </h3>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { 
                  step: "1. UNDERSTAND", 
                  solution: "Why aren't they listening? Are they bored? Confused? Distracted?",
                  icon: <Search className="w-5 h-5" />
                },
                { 
                  step: "2. THINK", 
                  solution: "• Make work more fun • Give clear instructions • Take a break • Change seating",
                  icon: <Brain className="w-5 h-5" />
                },
                { 
                  step: "3. CHOOSE", 
                  solution: "Let's make the work more interactive and give everyone a specific role",
                  icon: <Target className="w-5 h-5" />
                },
                { 
                  step: "4. TRY", 
                  solution: "Assign roles: researcher, writer, presenter, time-keeper. Make it a game!",
                  icon: <Zap className="w-5 h-5" />
                },
                { 
                  step: "5. LEARN", 
                  solution: "Did it work? Team was more engaged! Next time, set clear roles from the start.",
                  icon: <BookOpen className="w-5 h-5" />
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="bg-green-500 text-white rounded-full p-1">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">{item.step}</h4>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Scenarios */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Practice Time!
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Choose a Leadership Challenge</h3>
              <p className="text-lg text-gray-700">
                Pick a scenario and think of 3 possible solutions using the 5-step method!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {scenarios.map((scenario) => (
                <div
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                    selectedScenario?.id === scenario.id
                      ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="text-center">
                    <div className={`${selectedScenario?.id === scenario.id ? 'text-green-600' : 'text-gray-600'} mb-4`}>
                      {scenario.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{scenario.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{scenario.problem}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      scenario.difficulty === 'Hard' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {scenario.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {selectedScenario && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Selected Challenge:</h4>
                  <p className="text-gray-700">{selectedScenario.problem}</p>
                </div>
                
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-700">
                    💡 Your 3 Solutions:
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🏆</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Good leaders don't panic when problems arise. They follow a clear process to find the best solution.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Think</strong> → 
                <strong className="text-emerald-600"> Plan</strong> → 
                <strong className="text-teal-600"> Act</strong> → 
                <strong className="text-green-600"> Learn! 🌟</strong>
              </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Module5DecisionMaking;