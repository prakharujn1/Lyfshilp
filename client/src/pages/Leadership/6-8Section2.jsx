import React, { useState, useEffect } from 'react';
import { Eye, Target, MapPin, CheckSquare, Clock, ArrowRight, Star, Lightbulb, Trophy, Flag } from 'lucide-react';

const Module2VisionGoals = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentSmart, setCurrentSmart] = useState(0);
  const [userGoals, setUserGoals] = useState({
    vision: '',
    goal1: '',
    goal2: '',
    goal3: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSmart((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const smartCriteria = [
    {
      letter: "S",
      word: "Specific",
      description: "Clear and simple",
      example: "Score 90% in Math",
      icon: <Target className="w-6 h-6" />
    },
    {
      letter: "M", 
      word: "Measurable",
      description: "You can count or check it",
      example: "Read 5 books this month",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      letter: "A",
      word: "Achievable", 
      description: "Not too hard",
      example: "Practice piano 30 min daily",
      icon: <Star className="w-6 h-6" />
    },
    {
      letter: "R",
      word: "Realistic",
      description: "Possible to do",
      example: "Join the school debate team",
      icon: <Flag className="w-6 h-6" />
    },
    {
      letter: "T",
      word: "Time-based",
      description: "Has a deadline",
      example: "Complete by December",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const handleInputChange = (field, value) => {
    setUserGoals(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div
      id="2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2"] = el;
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
                <Eye className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Vision & Goal Setting
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to dream big and create a roadmap to turn your vision into reality 
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
              { icon: <Eye className="w-6 h-6" />, text: "What is a vision?", color: "bg-green-100 text-green-600" },
              { icon: <Target className="w-6 h-6" />, text: "How to set small, achievable goals", color: "bg-emerald-100 text-emerald-600" }
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

        {/* Vision Explanation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is a Vision?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong className="text-green-600">vision</strong> is like a dream for the future. 
                A leader's vision gives direction to others, just like a map guides travelers.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Think of it like this:</h3>
                </div>
                <p className="text-gray-600">
                  <strong className="text-green-600">Goals</strong> are steps you take to reach that dream.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Vision = Your Map</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Shows the destination</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Guides your decisions</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Inspires your team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMART Goals Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How to Set Good Goals?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Use the <strong className="text-green-600 text-2xl">SMART</strong> method
              </p>
            </div>
          </div>
          
          {/* Featured SMART Letter (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl font-bold">{smartCriteria[currentSmart].letter}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{smartCriteria[currentSmart].word}</h3>
                    <p className="text-xl opacity-90 mb-2">{smartCriteria[currentSmart].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{smartCriteria[currentSmart].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All SMART Criteria Grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {smartCriteria.map((smart, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentSmart === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentSmart(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {smart.letter}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{smart.word}</h3>
                <p className="text-sm text-gray-600 mb-3">{smart.description}</p>
                <div className="text-green-600">
                  {smart.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMART Example Breakdown */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              SMART Goal Example
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                "I want to improve my grades"
              </h3>
              <ArrowRight className="w-8 h-8 text-green-600 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-green-600">
                "I will score 85% or above in Math by studying 1 hour daily for the next 3 months"
              </h3>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4 mt-8">
              {[
                { letter: "S", check: "Score 85% in Math" },
                { letter: "M", check: "85% is measurable" },
                { letter: "A", check: "1 hour daily is doable" },
                { letter: "R", check: "Realistic improvement" },
                { letter: "T", check: "3 months deadline" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 text-center">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                    {item.letter}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{item.check}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Activity Section */}
        

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              A clear vision gives you direction, and SMART goals give you the steps to get there.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Vision</strong> + 
                <strong className="text-emerald-600"> SMART Goals</strong> = 
                <strong className="text-teal-600"> Success! 🌟</strong>
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

export default Module2VisionGoals;