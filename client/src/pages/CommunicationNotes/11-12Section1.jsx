import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Target, CheckCircle, ArrowRight, Eye, Lightbulb, Star, BookOpen, Zap } from 'lucide-react';

const CommunicationModule1 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [selectedExample, setSelectedExample] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const communicationTypes = [
    {
      title: "Verbal",
      description: "What you say",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      example: "Clear spoken words"
    },
    {
      title: "Non-verbal", 
      description: "Your gestures, tone, facial expressions",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      example: "Body language and expressions"
    },
    {
      title: "Written",
      description: "Emails, messages, reports", 
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      example: "Professional emails and documents"
    },
    {
      title: "Visual",
      description: "Graphs, presentations, infographics",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      example: "Charts and visual presentations"
    }
  ];

  const communicationStyles = [
    {
      title: "Assertive", 
      description: "Honest, respectful, and clear",
      status: "ideal",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-400",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Aggressive",
      description: "Forceful, hostile",
      status: "often damaging", 
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      borderColor: "border-green-500",
      bgColor: "from-green-100 to-green-50"
    },
    {
      title: "Passive",
      description: "Doesn't express needs or opinions",
      status: "leads to frustration",
      icon: <Eye className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500", 
      borderColor: "border-emerald-400",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      title: "Passive-Aggressive",
      description: "Sarcastic, unclear, avoids confrontation",
      status: "creates confusion",
      icon: <Target className="w-6 h-6" />,
      color: "from-teal-500 to-green-600",
      borderColor: "border-teal-400", 
      bgColor: "from-teal-50 to-green-50"
    }
  ];

  return (
    <div
      id="s-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-1"] = el;
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
              Communication Mastery
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the foundation of effective communication for life and leadership success
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
              { 
                icon: <MessageCircle className="w-6 h-6" />, 
                text: "What communication really means in everyday and professional life", 
                color: "bg-green-100 text-green-600" 
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                text: "Different communication styles and how they shape relationships", 
                color: "bg-emerald-100 text-emerald-600" 
              },
              { 
                icon: <Star className="w-6 h-6" />, 
                text: "Why effective communication is the key to success—more than talent sometimes!", 
                color: "bg-teal-100 text-teal-600" 
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-sm leading-relaxed">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is Communication Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Understanding Communication
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Communication is <strong className="text-green-600">not just talking</strong>—it's about being understood. 
                Whether you're asking your teacher for a deadline extension or pitching an idea in a corporate internship, 
                how you express yourself makes all the difference.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Key Insight:</h3>
                </div>
                <p className="text-gray-600">
                  Effective communication can be more valuable than raw talent in achieving success.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Communication Success Formula</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Clear Message</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Right Method</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Understanding Achieved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Communication */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Communication
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master all four types to become a complete communicator
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${type.color} text-white rounded-xl p-4 mb-4 flex items-center justify-center`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                  <p className="text-sm text-green-700 font-medium">{type.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Styles Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Communication Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different styles helps you choose the right approach for every situation
            </p>
          </div>
          
          {/* Featured Style (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${communicationStyles[currentStyle].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">{communicationStyles[currentStyle].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{communicationStyles[currentStyle].title}</h3>
                    <p className="text-xl opacity-90 mb-2">{communicationStyles[currentStyle].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Status: <strong>{communicationStyles[currentStyle].status}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Styles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationStyles.map((style, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${style.bgColor} border-2 ${style.borderColor} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentStyle === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 150}ms` }}
                onClick={() => setCurrentStyle(index)}
              >
                <div className={`bg-gradient-to-r ${style.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {style.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{style.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{style.description}</p>
                <div className="text-xs font-medium text-green-700 bg-white/50 rounded-lg p-2">
                  {style.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Example Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Real-Life Example: Group Project
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Wrong Approaches */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <span className="text-2xl mr-2">❌</span>
                Wrong Approaches
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-300">
                  <p className="font-semibold text-red-700 mb-1">Passive:</p>
                  <p className="text-gray-700">"You don't like the current plan, but you stay silent"</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-300">
                  <p className="font-semibold text-orange-700 mb-1">Passive-Aggressive:</p>
                  <p className="text-gray-700">"Do whatever you want, I don't care" (said sarcastically)</p>
                </div>
              </div>
            </div>

            {/* Right Approach */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <span className="text-2xl mr-2">✅</span>
                Assertive Approach
              </h3>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                <p className="text-lg text-gray-800 font-medium mb-2">
                  "I think we could improve our idea by doing XYZ. Can we discuss this?"
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Clear</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Respectful</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Solution-focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaway
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Communication is about connection, not just expression. Master the assertive style to build stronger relationships and achieve better outcomes.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Remember:</strong> It's not just what you say, but 
                <strong className="text-emerald-600"> how you say it</strong> that makes the difference! 🌟
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

export default CommunicationModule1;