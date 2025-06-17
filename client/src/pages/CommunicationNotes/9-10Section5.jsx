import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Users, Shield, CheckCircle, AlertTriangle, Lightbulb, HandHeart, Volume2, VolumeX, UserCheck, Clock, ArrowRight, Sparkles, Target, RefreshCw } from 'lucide-react';

const Module5ConflictResolution = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [showEmpathyDemo, setShowEmpathyDemo] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const conflictSteps = [
    {
      step: 1,
      title: "Stay Calm",
      description: "Don't shout or get angry",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-blue-500",
      tip: "Take deep breaths before responding"
    },
    {
      step: 2,
      title: "Use 'I' Statements",
      description: "Say 'I feel...' instead of blaming",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-green-500",
      tip: "Focus on your feelings, not accusations"
    },
    {
      step: 3,
      title: "Listen Actively",
      description: "Really hear the other person's side",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-500",
      tip: "Ask questions to understand better"
    },
    {
      step: 4,
      title: "Find Common Ground",
      description: "Look for solutions that work for everyone",
      icon: <HandHeart className="w-8 h-8" />,
      color: "bg-pink-500",
      tip: "Compromise when possible"
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "Group Project Disagreement",
      situation: "You and a classmate argue over a group project",
      goodResponse: "I understand you were stressed. Let's split the work again more fairly.",
      badResponse: "You never do your share! This is all your fault!",
      empathy: "Your classmate might be overwhelmed with other subjects too",
      outcome: "Better teamwork and shared responsibility"
    },
    {
      id: 2,
      title: "Corporate Report Conflict",
      situation: "Two employees disagree on how to present a report",
      goodResponse: "I see your point about the charts. Can we combine both approaches?",
      badResponse: "My way is obviously better. You don't understand the data.",
      empathy: "Both want the presentation to succeed",
      outcome: "Creative solution using both ideas"
    },
    {
      id: 3,
      title: "Friend Misunderstanding",
      situation: "Your friend thinks you're ignoring them",
      goodResponse: "I'm sorry if I seemed distant. I've been dealing with family stuff.",
      badResponse: "You're being too sensitive. I don't have to text you all the time.",
      empathy: "Your friend values your friendship and felt hurt",
      outcome: "Stronger understanding and communication"
    }
  ];

  const doNots = [
    {
      action: "Don't blame or yell",
      icon: <VolumeX className="w-6 h-6" />,
      color: "text-red-500",
      explanation: "This escalates the conflict instead of solving it"
    },
    {
      action: "Don't walk away without discussing",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "text-orange-500",
      explanation: "Avoidance doesn't resolve the underlying issue"
    },
    {
      action: "Don't interrupt when others speak",
      icon: <Volume2 className="w-6 h-6" />,
      color: "text-yellow-500",
      explanation: "Everyone deserves to be heard completely"
    }
  ];

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
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Conflict Resolution & Empathy
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
             Turn disagreements into understanding 🤝✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Conflict Section */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-6xl mb-6">⚡</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What is Conflict?
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-l-4 border-orange-400 mb-8">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Conflict is when two people or groups disagree.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              It's <strong className="text-orange-600">normal</strong>, but how we respond 
              <strong className="text-red-600"> matters</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
              <div className="text-4xl mb-4">😠</div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Unhealthy Response</h3>
              <p className="text-gray-600">Makes problems worse, damages relationships</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Healthy Communication</h3>
              <p className="text-gray-600">Solves problems, strengthens bonds</p>
            </div>
          </div>
        </div>

        {/* Interactive Conflict Resolution Steps */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4">
                <Target className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              4 Steps to Resolve Conflict
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these steps to turn arguments into understanding 🎯
            </p>
          </div>

          {/* Animated Steps Display */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-4 gap-6">
              {conflictSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-500 hover:scale-105 ${
                    activeStep === index ? 'ring-4 ring-purple-200 scale-105' : ''
                  } ${visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${step.color} rounded-2xl p-6 text-white h-full relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-6xl font-bold opacity-10">
                      {step.step}
                    </div>
                    <div className="relative z-10">
                      <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{step.description}</p>
                      <div className="bg-white/20 rounded-lg p-3">
                        <p className="text-xs font-medium">💡 {step.tip}</p>
                      </div>
                    </div>
                    {activeStep === index && (
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Empathy Section */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 border-l-4 border-pink-400">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">💝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What is Empathy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empathy means trying to understand how the other person feels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-4 w-fit mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Empathy IS:</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Trying to understand their feelings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Showing that you care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Listening with your heart</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 w-fit mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Empathy is NOT:</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Having to agree with them</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Giving up your own feelings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Being weak or soft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowEmpathyDemo(!showEmpathyDemo)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
            >
              {showEmpathyDemo ? 'Hide Demo' : 'See Empathy in Action'} ✨
            </button>
          </div>

          {showEmpathyDemo && (
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Empathy Demo</h3>
                <p className="text-gray-600">See how empathy changes everything!</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-700 mb-2">😤 Without Empathy:</h4>
                  <p className="text-gray-700 italic">"You're wrong! That's stupid!"</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h4 className="font-bold text-green-700 mb-2">💝 With Empathy:</h4>
                  <p className="text-gray-700 italic">"I can see why you feel that way. Help me understand your perspective."</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Scenarios */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real-Life Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on each scenario to see empathy and conflict resolution in action!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  selectedScenario === scenario.id ? 'ring-4 ring-purple-200 bg-purple-50' : ''
                }`}
                onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">
                    {index === 0 ? '📚' : index === 1 ? '💼' : '👥'}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{scenario.title}</h3>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm">{scenario.situation}</p>
                </div>

                {selectedScenario === scenario.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-red-700 mb-2">❌ Bad Response:</h4>
                      <p className="text-sm text-gray-700 italic">"{scenario.badResponse}"</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-700 mb-2">✅ Good Response:</h4>
                      <p className="text-sm text-gray-700 italic">"{scenario.goodResponse}"</p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-700 mb-2">💝 Empathy Insight:</h4>
                      <p className="text-sm text-gray-700">{scenario.empathy}</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                      <h4 className="font-bold text-purple-700 mb-2">🎉 Outcome:</h4>
                      <p className="text-sm text-gray-700">{scenario.outcome}</p>
                    </div>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    {selectedScenario === scenario.id ? 'Click to close' : 'Click to explore'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What NOT to Do */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🚫</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What NOT to Do
            </h2>
            <p className="text-xl text-gray-600">
              Avoid these common mistakes that make conflicts worse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {doNots.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${item.color} bg-opacity-20 rounded-lg p-3`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.action}</h3>
                    <p className="text-sm text-gray-600">{item.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Pro Tips for Healthy Conflict Resolution
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-500 rounded-full p-2">
                  <Volume2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Keep Volume & Tone Respectful</h3>
              </div>
              <p className="text-gray-600 text-sm">Speaking calmly shows maturity and helps others listen better.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500 rounded-full p-2">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Show You're Willing to Listen</h3>
              </div>
              <p className="text-gray-600 text-sm">Make eye contact, nod, and ask questions to show genuine interest.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-500 rounded-full p-2">
                  <HandHeart className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Apologize When Needed</h3>
              </div>
              <p className="text-gray-600 text-sm">A sincere apology can heal wounds and strengthen relationships.</p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border-l-4 border-indigo-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Remember This!
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-500 rounded-full p-2 mt-1">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                Conflict is <strong className="text-indigo-600">normal</strong> - it's how you handle it that matters.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 rounded-full p-2 mt-1">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                <strong className="text-purple-600">Empathy</strong> is your superpower - use it to understand others.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-500 rounded-full p-2 mt-1">
                <RefreshCw className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                Practice makes perfect - the more you use these skills, the <strong className="text-pink-600">easier</strong> they become.
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

export default Module5ConflictResolution;