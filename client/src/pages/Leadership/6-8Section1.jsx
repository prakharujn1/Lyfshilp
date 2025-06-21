import React, { useState, useEffect } from 'react';
import { User, Brain, Heart, Megaphone, Users, Star, ArrowRight, BookOpen, Target, Lightbulb } from 'lucide-react';

const Module1Leadership = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentLeaderType, setCurrentLeaderType] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeaderType((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const leaderTypes = [
    {
      type: "Smart Leaders",
      icon: <Brain className="w-8 h-8" />,
      description: "Plan everything carefully",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      type: "Kind Leaders", 
      icon: <Heart className="w-8 h-8" />,
      description: "Care for people's feelings",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      type: "Strong Leaders",
      icon: <Megaphone className="w-8 h-8" />,
      description: "Speak up and take bold decisions",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      type: "Team Leaders",
      icon: <Users className="w-8 h-8" />,
      description: "Ask everyone's opinion before deciding",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <div
      id="1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              What is Leadership?
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the power of guiding others to achieve greatness together 
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
              { icon: <User className="w-6 h-6" />, text: "Who is a leader?", color: "bg-blue-100 text-blue-600" },
              { icon: <Star className="w-6 h-6" />, text: "What makes someone a good leader?", color: "bg-purple-100 text-purple-600" },
              { icon: <BookOpen className="w-6 h-6" />, text: "Different types of leadership styles", color: "bg-green-100 text-green-600" }
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

        {/* Main Definition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Understanding Leadership
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed">
                Leadership is when someone <strong className="text-green-600">guides others to do great things together</strong>. 
                A leader helps the team stay focused, solve problems, and reach goals.
              </p>
              <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
                <p className="text-base text-gray-600 font-medium">
                  💡 <strong>Remember:</strong> Leaders are not always the boss — they can be anyone who helps others do better.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Leadership in Action</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-left space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">Helps team stay focused</p>
                  </div>
                  <div className="flex items-center text-left space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">Solves problems together</p>
                  </div>
                  <div className="flex items-center text-left space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-700">Achieves goals as a team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Leaders - Interactive Showcase */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every leader has their own unique style. Here are four common types:
            </p>
          </div>
          
          {/* Featured Leader Type (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-2xl text-gray-600 mb-4">Featured Leadership Style</div>
              <div className={`inline-flex items-center space-x-4 bg-gradient-to-r ${leaderTypes[currentLeaderType].color} text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-500`}>
                {leaderTypes[currentLeaderType].icon}
                <div className="text-left">
                  <h3 className="text-2xl font-bold">{leaderTypes[currentLeaderType].type}</h3>
                  <p className="text-lg opacity-90">{leaderTypes[currentLeaderType].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Leader Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaderTypes.map((leader, index) => (
              <div
                key={index}
                className={`${leader.bgColor} ${leader.borderColor} border-2 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentLeaderType === index ? 'ring-4 ring-green-200 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentLeaderType(index)}
              >
                <div className={`bg-gradient-to-r ${leader.color} rounded-full p-3 w-fit mb-4 text-white`}>
                  {leader.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.type}</h3>
                <p className="text-gray-600">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3 mr-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Time for Reflection!
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Idea</h3>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Think of a leader from your family, school, or favorite book/movie.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <p className="text-lg font-semibold text-green-800 text-center">
                  What makes them a good leader?
                </p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Leadership isn't about being the loudest or the smartest. It's about 
              <strong className="text-green-600"> bringing out the best in others</strong> and 
              <strong className="text-emerald-600"> working together toward a common goal</strong>.
            </p>
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

export default Module1Leadership;