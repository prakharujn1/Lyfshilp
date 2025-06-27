import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Lightbulb, Shield, Volume2, Heart, Brain, CheckCircle, X, ArrowRight, Star, Target, Zap } from 'lucide-react';

const Module3Communication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentLEAD, setCurrentLEAD] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [scenarioResponses, setScenarioResponses] = useState({});
  const [showResults, setShowResults] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLEAD((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const leadModel = [
    {
      letter: "L",
      word: "Listen",
      description: "Really hear what others are saying",
      example: "Put down your phone and make eye contact",
      icon: <Volume2 className="w-6 h-6" />
    },
    {
      letter: "E", 
      word: "Empathize",
      description: "Try to understand their feelings",
      example: "I can see why you're frustrated about this",
      icon: <Heart className="w-6 h-6" />
    },
    {
      letter: "A",
      word: "Assert", 
      description: "Share your view clearly and kindly",
      example: "Here's how I see the situation...",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      letter: "D",
      word: "Defuse",
      description: "Find a solution together",
      example: "What if we tried this approach?",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const communicationStyles = [
    {
      name: "Assertive",
      description: "Clear, respectful, confident",
      color: "from-green-500 to-emerald-500",
      effectiveness: "High",
      example: "I understand your point, and here's my perspective..."
    },
    {
      name: "Passive",
      description: "Avoiding conflict, not sharing views",
      color: "from-green-300 to-emerald-300",
      effectiveness: "Low",
      example: "Whatever you think is fine..."
    },
    {
      name: "Aggressive",
      description: "Forceful, dismissive of others",
      color: "from-green-700 to-emerald-700",
      effectiveness: "Low",
      example: "You're completely wrong about this!"
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "Team Credit Issue",
      situation: "Your group project got an A, but one member claims they did most of the work and deserves extra credit.",
      options: [
        { id: 'a', text: "Ignore it - grades are already submitted", style: "Passive", correct: false },
        { id: 'b', text: "Tell them they're wrong and being selfish", style: "Aggressive", correct: false },
        { id: 'c', text: "Listen to their concerns, then suggest discussing contributions with the teacher together", style: "Assertive", correct: true },
        { id: 'd', text: "Agree with them to avoid conflict", style: "Passive", correct: false }
      ]
    },
    {
      id: 2,
      title: "Argument at Practice",
      situation: "Two teammates are arguing loudly during practice, affecting the whole team's focus.",
      options: [
        { id: 'a', text: "Tell them both to stop being childish", style: "Aggressive", correct: false },
        { id: 'b', text: "Wait for the coach to handle it", style: "Passive", correct: false },
        { id: 'c', text: "Approach them calmly, acknowledge the tension, and ask if you can help resolve it", style: "Assertive", correct: true },
        { id: 'd', text: "Join in to defend your friend", style: "Aggressive", correct: false }
      ]
    },
    {
      id: 3,
      title: "School Rule Debate",
      situation: "Your friend wants you to help them petition against a new school policy you actually support.",
      options: [
        { id: 'a', text: "Help them anyway to maintain the friendship", style: "Passive", correct: false },
        { id: 'b', text: "Tell them their idea is stupid", style: "Aggressive", correct: false },
        { id: 'c', text: "Explain your different perspective respectfully and suggest discussing both viewpoints", style: "Assertive", correct: true },
        { id: 'd', text: "Avoid the topic completely", style: "Passive", correct: false }
      ]
    }
  ];

  const handleScenarioResponse = (scenarioId, optionId) => {
    setScenarioResponses(prev => ({
      ...prev,
      [scenarioId]: optionId
    }));
    
    setTimeout(() => {
      setShowResults(prev => ({
        ...prev,
        [scenarioId]: true
      }));
    }, 500);
  };

  return (
    <div
      id="3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3"] = el;
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
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Persuasive Communication & Conflict Management
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Master the art of effective communication and turn conflicts into opportunities for growth
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <MessageCircle className="w-6 h-6" />, text: "Assertive communication under pressure", color: "bg-green-100 text-green-600" },
              { icon: <Users className="w-6 h-6" />, text: "Resolving peer disagreements respectfully", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Brain className="w-6 h-6" />, text: "Influencing decisions without manipulation", color: "bg-teal-100 text-teal-600" }
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

        {/* Deep Dive Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Power of Effective Communication
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                Leaders don't just speak well — they speak <strong className="text-green-600">effectively</strong>. 
                That means knowing when to talk, how to listen, and how to defuse tension before it explodes.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                  <Volume2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">When to Talk</h3>
                  <p className="text-gray-600">Choose your moments wisely</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-6 text-center">
                  <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">How to Listen</h3>
                  <p className="text-gray-600">Truly understand others</p>
                </div>
                <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-xl p-6 text-center">
                  <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Defuse Tension</h3>
                  <p className="text-gray-600">Turn conflict into collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEAD Model Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The LEAD Communication Model
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                A simple framework to handle any difficult conversation
              </p>
            </div>
          </div>
          
          {/* Featured LEAD Step (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl font-bold">{leadModel[currentLEAD].letter}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{leadModel[currentLEAD].word}</h3>
                    <p className="text-xl opacity-90 mb-3">{leadModel[currentLEAD].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: "{leadModel[currentLEAD].example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All LEAD Steps Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {leadModel.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentLEAD === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentLEAD(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.letter}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.word}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <div className="text-green-600 flex justify-center">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Styles */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Communication Styles Quiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding different approaches and their effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communicationStyles.map((style, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border-2 ${
                  style.effectiveness === 'High' ? 'border-green-300' : 'border-gray-200'
                } transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${style.color} text-white rounded-xl p-4 mb-6`}>
                  <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                  <p className="opacity-90">{style.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Effectiveness:</span>
                    <span className={`font-bold ${
                      style.effectiveness === 'High' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {style.effectiveness}
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 italic">
                      "{style.example}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conflict Simulator */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Conflict Simulator
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Practice your communication skills with real-life teen conflict scenarios
            </p>
          </div>

          <div className="space-y-12">
            {scenarios.map((scenario, scenarioIndex) => (
              <div key={scenario.id} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Scenario {scenario.id}: {scenario.title}
                  </h3>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-l-4 border-green-400">
                    <p className="text-lg text-gray-700">{scenario.situation}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    How would you respond?
                  </h4>
                  
                  {scenario.options.map((option) => (
                    <div
                      key={option.id}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                        scenarioResponses[scenario.id] === option.id
                          ? option.correct
                            ? 'border-green-400 bg-green-50'
                            : 'border-red-400 bg-red-50'
                          : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                      onClick={() => handleScenarioResponse(scenario.id, option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-gray-700 flex-1">{option.text}</p>
                        {scenarioResponses[scenario.id] === option.id && (
                          <div className="flex items-center space-x-2 ml-4">
                            {option.correct ? (
                              <CheckCircle className="w-6 h-6 text-green-600" />
                            ) : (
                              <X className="w-6 h-6 text-red-600" />
                            )}
                            <span className={`text-sm font-medium ${
                              option.correct ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {option.style}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {showResults[scenario.id] && (
                  <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Lightbulb className="w-6 h-6 text-green-600" />
                      <h5 className="text-lg font-bold text-green-800">Reflection</h5>
                    </div>
                    {scenarioResponses[scenario.id] && (
                      <p className="text-green-700">
                        You chose an <strong>
                          {scenario.options.find(opt => opt.id === scenarioResponses[scenario.id])?.style}
                        </strong> approach. 
                        {scenario.options.find(opt => opt.id === scenarioResponses[scenario.id])?.correct
                          ? " Great choice! This assertive response shows leadership by addressing the issue directly while remaining respectful."
                          : " Consider how an assertive approach might be more effective - it involves listening, understanding, and then clearly communicating your perspective."
                        }
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Negotiation vs Domination */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Negotiation vs. Domination
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Negotiation (Win-Win)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Everyone's needs are considered</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Builds stronger relationships</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Creates lasting solutions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Increases trust and respect</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-gray-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <X className="w-6 h-6 mr-2" />
                  Domination (Win-Lose)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><X className="w-4 h-4 text-red-600 mr-2" />Only one person gets their way</li>
                  <li className="flex items-center"><X className="w-4 h-4 text-red-600 mr-2" />Damages relationships</li>
                  <li className="flex items-center"><X className="w-4 h-4 text-red-600 mr-2" />Creates resentment</li>
                  <li className="flex items-center"><X className="w-4 h-4 text-red-600 mr-2" />Short-term solutions only</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Approach</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-xl font-bold mb-2">Effective Leaders</h4>
                    <p className="opacity-90">Influence through respect, not force</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-green-600 mx-auto animate-pulse" />
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-2 border-green-300">
                    <h4 className="text-lg font-bold text-green-800 mb-2">Result</h4>
                    <p className="text-green-700">People follow willingly and enthusiastically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Great leaders don't win arguments — they win hearts and minds through 
              respectful, effective communication.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Listen</strong> + 
                <strong className="text-emerald-600"> Empathize</strong> + 
                <strong className="text-teal-600"> Assert</strong> + 
                <strong className="text-green-600"> Defuse</strong> = 
                <strong className="text-emerald-600"> Leadership Success! 🚀</strong>
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

export default Module3Communication;