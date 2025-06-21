import React, { useState, useEffect } from 'react';
import { MessageSquare, Ear, Eye, Clock, Users, CheckCircle, ArrowRight, Lightbulb, Star, Volume2, Heart } from 'lucide-react';

const Module3Communication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [activeListeningStep, setActiveListeningStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveListeningStep((prev) => (prev + 1) % 3);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const communicationTips = [
    {
      tip: "Look at the person when talking",
      icon: <Eye className="w-6 h-6" />,
      description: "Eye contact shows you're paying attention and builds trust",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      tip: "Speak kindly and clearly",
      icon: <Volume2 className="w-6 h-6" />,
      description: "Use a warm tone and speak at the right pace",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      tip: "Don't interrupt when others are speaking",
      icon: <Ear className="w-6 h-6" />,
      description: "Wait for your turn to show respect for others",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    },
    {
      tip: "Ask questions if you don't understand",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "It's okay to ask for clarification - it shows you care",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const listeningSteps = [
    {
      step: "Listen with your ears",
      description: "Focus on the words being spoken",
      icon: <Ear className="w-8 h-8" />,
      color: "bg-green-500"
    },
    {
      step: "Watch with your eyes",
      description: "Notice body language and facial expressions",
      icon: <Eye className="w-8 h-8" />,
      color: "bg-emerald-500"
    },
    {
      step: "Feel with your heart",
      description: "Try to understand their emotions",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-teal-500"
    }
  ];

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
                <MessageSquare className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Communication & Listening
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of speaking clearly and listening with care 🗣️👂
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
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: <MessageSquare className="w-6 h-6" />, 
                text: "How to talk clearly and confidently", 
                color: "bg-green-100 text-green-600" 
              },
              { 
                icon: <Ear className="w-6 h-6" />, 
                text: "How to listen with care and attention", 
                color: "bg-emerald-100 text-emerald-600" 
              }
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Communication Matters
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Leaders must <strong className="text-green-600">talk so people understand them</strong>. 
                But they must also be <strong className="text-emerald-600">great listeners</strong>. 
                Listening shows respect and helps solve problems faster.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-gray-800">Good Speaking</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Helps others understand your ideas clearly</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <Ear className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-gray-800">Good Listening</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Shows respect and builds stronger relationships</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Communication Formula</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center justify-center space-x-3">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700 font-medium">Clear Speaking</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">+</div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center justify-center space-x-3">
                      <Ear className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-700 font-medium">Active Listening</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">=</div>
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center justify-center space-x-3">
                      <Star className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-700 font-medium">Great Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Tips Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tips for Good Communication
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Follow these <strong className="text-green-600">simple rules</strong> to communicate better
              </p>
            </div>
          </div>
          
          {/* Featured Tip (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${communicationTips[currentTip].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-5xl">
                    {communicationTips[currentTip].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {communicationTips[currentTip].tip}
                    </h3>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-lg opacity-90">
                        {communicationTips[currentTip].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tips Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationTips.map((tip, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tip.bgColor} border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTip === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
                onClick={() => setCurrentTip(index)}
              >
                <div className={`bg-gradient-to-r ${tip.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {tip.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{tip.tip}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Listening Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">👂</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              The Art of Active Listening
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Active listening means using your whole self to understand what someone is saying
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              {listeningSteps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl transition-all duration-500 ${
                    activeListeningStep === index 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 scale-105 shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Activity Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Try This Activity!
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Active Listening Challenge</h3>
              <p className="text-lg text-gray-700 mb-6">
                Try "active listening" with a friend. One person talks for 1 minute about their favorite game, 
                while the other only listens. Then repeat with roles reversed!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Person A Speaks</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Share about your favorite game</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Speak for exactly 1 minute</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Be enthusiastic and clear</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Person B Listens</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Only listen, don't interrupt</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Make eye contact</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Show you're engaged</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-xl p-6 max-w-md mx-auto">
                
                <p className="text-gray-700 font-medium">
                  Then switch roles and repeat the exercise!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Great leaders are great communicators. They speak clearly and listen carefully.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Good Speaking</strong> + 
                <strong className="text-emerald-600"> Active Listening</strong> = 
                <strong className="text-teal-600"> Effective Leadership! 🌟</strong>
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