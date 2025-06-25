import React, { useState, useEffect } from 'react';
import { User, Heart, Target, Eye, Star, Users, Shield, Lightbulb, CheckCircle, ArrowRight, Compass, BookOpen, Sparkles } from 'lucide-react';

const Module6Identity = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIdentityElement, setCurrentIdentityElement] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const [showMissionBuilder, setShowMissionBuilder] = useState(false);
  const [missionInputs, setMissionInputs] = useState({
    action: '',
    purpose: '',
    values: '',
    challenge: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdentityElement((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const identityElements = [
    {
      title: "Cultural Background",
      description: "Your heritage and family influence",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Personal Beliefs", 
      description: "Your core values and principles",
      icon: <Heart className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Interests & Passions",
      description: "What excites and motivates you",
      icon: <Star className="w-6 h-6" />,
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Social Identity",
      description: "How you connect with others",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Goals & Strengths",
      description: "Your skills and aspirations",
      icon: <Target className="w-6 h-6" />,
      color: "from-emerald-600 to-green-500"
    }
  ];

  const valuesList = [
    "Honesty", "Kindness", "Creativity", "Independence", "Loyalty", 
    "Respect", "Freedom", "Justice", "Courage", "Compassion",
    "Innovation", "Integrity", "Family", "Adventure", "Learning"
  ];

  const pressureExamples = [
    {
      title: "Social Comparison",
      description: "Comparing yourself to others on social media",
      icon: <Users className="w-6 h-6" />,
      solution: "Focus on your own journey and growth"
    },
    {
      title: "Gender Stereotypes", 
      description: "Pressure to fit traditional gender roles",
      icon: <Shield className="w-6 h-6" />,
      solution: "Be true to who you are, not what others expect"
    },
    {
      title: "Academic Expectations",
      description: "Pressure to meet family or school standards",
      icon: <BookOpen className="w-6 h-6" />,
      solution: "Set your own meaningful goals and standards"
    },
    {
      title: "Online vs Real Self",
      description: "Creating a perfect image online",
      icon: <Sparkles className="w-6 h-6" />,
      solution: "Authenticity is more valuable than perfection"
    }
  ];

  const handleValueSelection = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(v => v !== value));
    } else if (selectedValues.length < 5) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleMissionInputChange = (field, value) => {
    setMissionInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateMissionStatement = () => {
    if (missionInputs.action && missionInputs.purpose) {
      return `I want to ${missionInputs.action} so that ${missionInputs.purpose}. I will stay true to ${missionInputs.values || 'my values'} even when ${missionInputs.challenge || 'faced with challenges'}.`;
    }
    return '';
  };

  return (
    <div
      id="m-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-6"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Identity?
              </h2>
              </div>
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Identity & Personal Values
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              "Who Am I Becoming?" - Discover your authentic self and core values
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Identity Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Identity?
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Identity is more than just your name, background, or interests — it's 
                  <strong className="text-green-600"> how you see yourself</strong> and the roles you play in life.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Compass className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">Why It Matters:</h3>
                  </div>
                  <p className="text-gray-600">
                    A strong sense of identity helps you make confident decisions, set meaningful goals, 
                    and resist negative peer pressure.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Identity Grows</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-medium">New experiences shape you</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-medium">Decisions reveal who you are</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-medium">Reflection deepens understanding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Elements of Identity */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Elements of Identity
            </h2>
          </div>

          {/* Featured Identity Element (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Exploring</div>
              <div className={`bg-gradient-to-r ${identityElements[currentIdentityElement].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">
                    {identityElements[currentIdentityElement].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{identityElements[currentIdentityElement].title}</h3>
                    <p className="text-lg opacity-90">{identityElements[currentIdentityElement].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Identity Elements Grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {identityElements.map((element, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentIdentityElement === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentIdentityElement(index)}
              >
                <div className={`bg-gradient-to-r ${element.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {element.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{element.title}</h3>
                <p className="text-xs text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Values Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Understanding Your Personal Values
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Values are the <strong className="text-green-600">principles and beliefs</strong> that guide your behavior and decisions — 
              like honesty, fairness, independence, or kindness. Your values shape how you treat others, 
              what goals you chase, and what kind of life you want to lead.
            </p>

            {/* Reflection Questions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                "What makes you feel proud of yourself?",
                "Who do you look up to, and why?", 
                "What are your 'non-negotiables' in life?"
              ].map((question, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <h3 className="text-sm font-bold text-gray-800">Reflect:</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{question}</p>
                </div>
              ))}
            </div>

            {/* Interactive Values Selection */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Choose Your Top 5 Values
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Click on values that resonate with you (max 5)
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                {valuesList.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => handleValueSelection(value)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedValues.includes(value)
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'
                    } ${selectedValues.length >= 5 && !selectedValues.includes(value) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={selectedValues.length >= 5 && !selectedValues.includes(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>

              {selectedValues.length > 0 && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h4 className="font-bold text-gray-800 mb-4">Your Selected Values:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedValues.map((value, index) => (
                      <span key={index} className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pressures That Shape Identity */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Pressures That Shape Identity
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In teen years, identity can feel "under construction." It's okay to explore, 
              but important to ask: <em className="text-green-600 font-semibold">Is this really me, or am I just fitting in?</em>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressureExamples.map((pressure, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className={`bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  {pressure.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{pressure.title}</h3>
                <p className="text-gray-600 mb-4">{pressure.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-medium">
                    <strong>Solution:</strong> {pressure.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Building Authentic Self */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">✨</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Building an Authentic Self
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Being authentic means your actions match your values and beliefs — even when it's hard. 
              You don't need to be perfect, but you should strive to be <strong className="text-green-600">real</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                tip: "Check in with yourself before saying yes to something"
              },
              {
                icon: <Target className="w-6 h-6" />,
                tip: "Ask: 'Is this choice aligned with who I want to be?'"
              },
              {
                icon: <Star className="w-6 h-6" />,
                tip: "Be open to evolving, but hold on to what matters most"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-700 font-medium">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Mission Statement Builder */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Personal Mission Statement
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              A personal mission statement is a sentence that describes who you are and how you want to live. 
              It doesn't have to be final — but it gives you direction.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Example Mission Statement:</h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400 text-center">
                <p className="text-lg text-gray-700 italic">
                  "I want to use my creativity to solve real-world problems and treat others with kindness and fairness."
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => setShowMissionBuilder(!showMissionBuilder)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {showMissionBuilder ? 'Hide' : 'Create'} Your Mission Statement
              </button>
            </div>

            {showMissionBuilder && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      What do you want to do?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., help others, create art, solve problems..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={missionInputs.action}
                      onChange={(e) => handleMissionInputChange('action', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Why does it matter?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., make the world better, inspire others..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={missionInputs.purpose}
                      onChange={(e) => handleMissionInputChange('purpose', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      What values will guide you?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., honesty, creativity, compassion..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={missionInputs.values}
                      onChange={(e) => handleMissionInputChange('values', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      What challenges might you face?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., peer pressure, difficult times..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={missionInputs.challenge}
                      onChange={(e) => handleMissionInputChange('challenge', e.target.value)}
                    />
                  </div>
                </div>

                {generateMissionStatement() && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400 mt-8">
                    <h4 className="font-bold text-gray-800 mb-3">Your Mission Statement:</h4>
                    <p className="text-lg text-gray-700 italic font-medium">
                      "{generateMissionStatement()}"
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Your identity is not fixed — it grows with every experience, decision, and reflection. 
              Stay true to your values while remaining open to growth.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Authentic Self</strong> + 
                <strong className="text-emerald-600"> Clear Values</strong> + 
                <strong className="text-teal-600"> Personal Mission</strong> = 
                <strong className="text-green-700"> Confident Identity! ✨</strong>
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

export default Module6Identity;