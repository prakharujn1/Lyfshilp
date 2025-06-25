import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Shield, Users, CheckCircle, UserCheck, Lightbulb, Star, ArrowRight, Ear, Eye, Hand } from 'lucide-react';

const Module2Relationships = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [empathyStep, setEmpathyStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const communicationTips = [
    {
      title: "Use 'I' Statements",
      description: "Express your feelings without blaming others",
      example: "I felt uncomfortable when...",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Body Language Matters",
      description: "Your posture and tone speak volumes",
      example: "Maintain eye contact and open posture",
      icon: <Eye className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Listen Actively",
      description: "Really hear what others are saying",
      example: "Ask questions and show you care",
      icon: <Ear className="w-6 h-6" />,
      color: "from-teal-500 to-green-500"
    }
  ];

  const pressureScenarios = [
    {
      id: 1,
      situation: "Friends want you to skip class to hang out",
      response: "I value my education. How about we meet after school instead?",
      principle: "Honor your values while offering alternatives"
    },
    {
      id: 2,
      situation: "Someone pressures you to share personal information online",
      response: "I prefer to keep some things private. That's just how I am.",
      principle: "Protect your boundaries confidently"
    },
    {
      id: 3,
      situation: "Peer pressure to try something you're not comfortable with",
      response: "That's not for me, but I respect your choice.",
      principle: "Stand firm while respecting others"
    }
  ];

  const empathySteps = [
    {
      step: "Pause",
      description: "Take a moment before reacting",
      icon: <Hand className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      step: "Observe",
      description: "Notice their emotions and body language",
      icon: <Eye className="w-8 h-8" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      step: "Ask",
      description: "Simply ask: 'Do you want to talk?'",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      step: "Listen",
      description: "Listen without trying to fix or give advice",
      icon: <Ear className="w-8 h-8" />,
      color: "bg-green-100 text-green-700"
    }
  ];

  return (
    <div
      id="m-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-2"] = el;
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
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Building Meaningful Relationships
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to connect with others through empathy, respect, and clear communication
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, text: "Qualities of healthy relationships", color: "bg-green-100 text-green-600" },
              { icon: <MessageCircle className="w-6 h-6" />, text: "Assertive communication skills", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Shield className="w-6 h-6" />, text: "Handling peer pressure", color: "bg-teal-100 text-teal-600" },
              { icon: <UserCheck className="w-6 h-6" />, text: "Building empathy", color: "bg-green-100 text-green-700" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center space-y-3 text-center">
                  {objective.icon}
                  <p className="font-semibold text-sm">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthy Relationships Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Qualities of Healthy Relationships
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Strong relationships aren't built on convenience or just shared interests. 
                They're founded on deeper qualities that create lasting connections.
              </p>
              
              <div className="space-y-4">
                {[
                  { quality: "Honesty", description: "Being truthful, even when it's difficult" },
                  { quality: "Trust", description: "Feeling safe to be vulnerable" },
                  { quality: "Boundaries", description: "Respecting each other's limits" },
                  { quality: "Mutual Respect", description: "Valuing each other's perspectives" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-300">
                    <h4 className="font-bold text-gray-800 mb-1">{item.quality}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Self-Reflection</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700 font-medium mb-2">Ask Yourself:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Who do you feel safe being vulnerable with?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Do your friendships allow space for disagreement without judgment?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assertive Communication Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Assertive Communication
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Express your thoughts, needs, and boundaries clearly — without aggression or passivity
              </p>
            </div>
          </div>
          
          {/* Communication Tips Carousel */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Communication Skills</h3>
              <div className="text-sm text-gray-600 mb-4">Tip {currentTip + 1} of 3</div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className={`bg-gradient-to-r ${communicationTips[currentTip].color} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {communicationTips[currentTip].icon}
                  <h4 className="text-2xl font-bold">{communicationTips[currentTip].title}</h4>
                </div>
                <p className="text-xl opacity-90 mb-4 text-center">{communicationTips[currentTip].description}</p>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <p className="text-sm">Example: <strong>"{communicationTips[currentTip].example}"</strong></p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              {communicationTips.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTip === index ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTip(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Peer Pressure Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Handling Peer Pressure
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It takes strength to honor your own values. Practice standing your ground with confidence and respect.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto text-center">
            <div className="text-3xl mb-4">💪</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Go-To Phrase</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xl font-bold text-green-600">
                "That's not for me, but I respect your choice."
              </p>
            </div>
          </div>
          
          {/* Interactive Scenarios */}
          <div className="grid md:grid-cols-3 gap-6">
            {pressureScenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedScenario === scenario.id ? 'border-green-400 ring-4 ring-green-200' : 'border-gray-200 hover:border-green-300'
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
                onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-green-600">{scenario.id}</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Scenario {scenario.id}</h4>
                  <p className="text-gray-600 text-sm mb-4">{scenario.situation}</p>
                </div>
                
                {selectedScenario === scenario.id && (
                  <div className="border-t pt-4 space-y-3 animate-fade-in">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-800 mb-1">Your Response:</p>
                      <p className="text-sm text-green-700">"{scenario.response}"</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-emerald-800 mb-1">Key Principle:</p>
                      <p className="text-sm text-emerald-700">{scenario.principle}</p>
                    </div>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <ArrowRight className={`w-5 h-5 mx-auto text-green-600 transition-transform duration-300 ${
                    selectedScenario === scenario.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Building Empathy Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Building Empathy
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empathy is more than feeling sorry for someone — it's making an effort to understand and connect with their experience.
            </p>
          </div>
          
          {/* Empathy Steps */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Empathy Process</h3>
              <p className="text-gray-600">When someone seems upset or distant, follow these steps:</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {empathySteps.map((step, index) => (
                <div
                  key={index}
                  className={`${step.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                    empathyStep === index ? 'ring-4 ring-green-300 scale-105' : ''
                  } ${
                    visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 7) * 150}ms` }}
                  onClick={() => setEmpathyStep(index)}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-white rounded-full p-3 mb-2">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-bold">{step.step}</h4>
                    <p className="text-sm opacity-90">{step.description}</p>
                  </div>
                  
                  {index < empathySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Remember</h4>
                <p className="text-gray-700">
                  Don't try to fix everything. Sometimes people just need to be heard and understood.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <Star className="w-12 h-12 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Meaningful relationships are built on empathy, clear communication, and mutual respect. 
              They take time and effort, but they're worth it.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Listen</strong> + 
                <strong className="text-emerald-600"> Respect</strong> + 
                <strong className="text-teal-600"> Communicate</strong> = 
                <strong className="text-green-700"> Strong Relationships 🌟</strong>
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

export default Module2Relationships;