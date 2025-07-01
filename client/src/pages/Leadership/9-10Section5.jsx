import React, { useState, useEffect } from 'react';
import { Scale, Shield, Heart, Users, CheckCircle, AlertTriangle, Lightbulb, ArrowRight, Star, Target, Eye, Brain } from 'lucide-react';

const Module5EthicalDecision = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentBias, setCurrentBias] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [userChoices, setUserChoices] = useState({});
  const [showBiasAlert, setShowBiasAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBias((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const biasTypes = [
    {
      name: "Confirmation Bias",
      description: "Looking for info that supports what you already believe",
      example: "Only listening to friends who agree with you",
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "Peer Pressure",
      description: "Going along with the group even when it feels wrong",
      example: "Copying homework because everyone else does it",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Authority Bias",
      description: "Following someone just because they're in charge",
      example: "Not questioning a teacher's unfair rule",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Self-Interest Bias",
      description: "Only thinking about what benefits you",
      example: "Taking credit for group work you didn't do",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "The Group Project Dilemma",
      situation: "Your group member hasn't done their part of the project, and the deadline is tomorrow. You could do their work to save your grade, tell the teacher, or confront them directly.",
      options: [
        { text: "Do their work yourself", feedback: "This might help short-term but doesn't solve the real problem", ethical: false },
        { text: "Tell the teacher immediately", feedback: "This addresses the issue but might damage relationships", ethical: true },
        { text: "Talk to your group member first", feedback: "This shows respect and gives them a chance to explain", ethical: true },
        { text: "Ignore it and hope for the best", feedback: "This avoids conflict but isn't fair to your group", ethical: false }
      ]
    },
    {
      id: 2,
      title: "The Popularity Contest",
      situation: "You see a classmate being excluded from your friend group because they're 'different.' Your friends expect you to go along with it to stay popular.",
      options: [
        { text: "Join in excluding them", feedback: "This perpetuates bullying and goes against treating others with respect", ethical: false },
        { text: "Stay silent to avoid conflict", feedback: "Silence in the face of unfairness can be harmful", ethical: false },
        { text: "Speak up for the classmate", feedback: "This shows courage and stands up for what's right", ethical: true },
        { text: "Try to include them when friends aren't around", feedback: "This is better than nothing but still isn't fully honest", ethical: true }
      ]
    }
  ];

  const handleScenarioChoice = (scenarioId, optionIndex) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    const choice = scenario.options[optionIndex];
    
    setUserChoices(prev => ({
      ...prev,
      [scenarioId]: { optionIndex, choice }
    }));

    // Show bias alert for unethical choices
    if (!choice.ethical) {
      setShowBiasAlert(true);
      setTimeout(() => setShowBiasAlert(false), 3000);
    }
  };

  return (
    <div
      id="m-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ethical Decision-Making
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to make choices that are fair, honest, and right for everyone
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Scale className="w-6 h-6" />, text: "Understand right vs. wrong decisions", color: "bg-green-100 text-green-600" },
              { icon: <Brain className="w-6 h-6" />, text: "Spot biases that cloud judgment", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Heart className="w-6 h-6" />, text: "Make decisions based on strong values", color: "bg-green-100 text-green-600" }
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

        {/* What is Ethics? */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Ethics?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Ethics</strong> is about doing the right thing, 
                even when no one is watching. It's your moral compass that helps you choose between right and wrong.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Key Values:</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-600"><strong className="text-green-600">Honesty:</strong> Tell the truth</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-gray-600"><strong className="text-emerald-600">Fairness:</strong> Treat everyone equally</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <p className="text-gray-600"><strong className="text-green-600">Respect:</strong> Value others and their rights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ethical Decision Making</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Consider all people affected</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Think about long-term consequences</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Choose what's right, not easy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bias Alert System */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Watch Out for Biases!
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                <strong className="text-green-600">Biases</strong> are tricks your brain plays that can lead to unfair decisions
              </p>
            </div>
          </div>
          
          {/* Featured Bias (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Bias Alert 🚨</div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">⚠️</div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{biasTypes[currentBias].name}</h3>
                    <p className="text-lg opacity-90 mb-2">{biasTypes[currentBias].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{biasTypes[currentBias].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Bias Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biasTypes.map((bias, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentBias === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentBias(index)}
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {bias.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{bias.name}</h3>
                <p className="text-sm text-gray-600">{bias.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scenarios */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Practice Ethical Decisions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Test your ethical decision-making skills with these real-life scenarios
            </p>
          </div>

          {/* Bias Alert Popup */}
          {showBiasAlert && (
            <div className="fixed top-4 right-4 bg-red-500 text-white rounded-lg p-4 shadow-lg z-50 animate-bounce">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Bias Alert! Try thinking differently.</span>
              </div>
            </div>
          )}

          {scenarios.map((scenario) => (
            <div key={scenario.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {scenario.situation}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {scenario.options.map((option, optionIndex) => {
                  const isSelected = userChoices[scenario.id]?.optionIndex === optionIndex;
                  const selectedChoice = userChoices[scenario.id]?.choice;
                  
                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleScenarioChoice(scenario.id, optionIndex)}
                      className={`p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                        isSelected
                          ? option.ethical
                            ? 'bg-green-100 border-green-400 ring-4 ring-green-200'
                            : 'bg-red-100 border-red-400 ring-4 ring-red-200'
                          : 'bg-gray-50 border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isSelected
                            ? option.ethical
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                            : 'bg-gray-300'
                        }`}>
                          {isSelected ? (
                            option.ethical ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-bold text-white">{optionIndex + 1}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 mb-2">{option.text}</p>
                          {isSelected && (
                            <p className="text-sm text-gray-600 italic">{option.feedback}</p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {userChoices[scenario.id] && (
                <div className="mt-6 text-center">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                    userChoices[scenario.id].choice.ethical
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {userChoices[scenario.id].choice.ethical ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                    <span className="font-semibold">
                      {userChoices[scenario.id].choice.ethical ? 'Great ethical choice!' : 'Consider the impact on others'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ethical Decision Framework */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧭</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Ethical Decision Framework
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Pause", description: "Take a moment to think", icon: "⏸️" },
              { step: "2", title: "Consider", description: "Who will be affected?", icon: "🤔" },
              { step: "3", title: "Values", description: "What would you want if you were them?", icon: "💝" },
              { step: "4", title: "Act", description: "Choose the most ethical option", icon: "✅" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Ethical leaders make decisions based on fairness, honesty, and respect for others, not just what's convenient.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Good leaders</strong> make 
                <strong className="text-emerald-600"> ethical choices</strong> even when 
                <strong className="text-green-700"> no one is watching</strong>
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

export default Module5EthicalDecision;