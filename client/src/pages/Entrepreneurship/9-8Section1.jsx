import React, { useState, useEffect } from 'react';
import { Lightbulb, Users, Target, TrendingUp, Brain, Heart, Zap, Star, ArrowRight, CheckCircle, User, Briefcase, ArrowDown } from 'lucide-react';

const Module1Foundation = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentEntrepreneur, setCurrentEntrepreneur] = useState(0);
  const [currentTrait, setCurrentTrait] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEntrepreneur((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const traitInterval = setInterval(() => {
      setCurrentTrait((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(traitInterval);
  }, []);

  const entrepreneurs = [
    {
      name: "Disruptors",
      description: "Redefine how industries operate",
      example: "Elon Musk",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      name: "Scalable Entrepreneurs", 
      description: "Build startups that scale fast",
      example: "Byju Raveendran",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      name: "Social Entrepreneurs",
      description: "Focus on impact, not just income", 
      example: "Anshu Gupta - Goonj",
      icon: <Heart className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      bgColor: "from-teal-50 to-green-50"
    }
  ];

  const mindsetTraits = [
    {
      trait: "Risk Approach",
      entrepreneur: "Seeks calculated risk",
      employee: "Avoids uncertainty",
      icon: <Target className="w-6 h-6" />
    },
    {
      trait: "Thinking Style", 
      entrepreneur: "Visionary & strategic",
      employee: "Task-oriented",
      icon: <Brain className="w-6 h-6" />
    },
    {
      trait: "Learning",
      entrepreneur: "Self-driven", 
      employee: "Structured",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      trait: "Value Creation",
      entrepreneur: "Solves broad problems",
      employee: "Executes tasks", 
      icon: <Star className="w-6 h-6" />
    }
  ];

  const whyMatters = [
    {
      title: "Critical thinking",
      description: "for complex decisions",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Creative problem solving",
      description: "in the face of uncertainty", 
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Tech-savviness",
      description: "for navigating AI and digital ecosystems",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Empathy and ethics",
      description: "to design inclusive solutions",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <div
      id="m-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-1"] = el;
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
                <Lightbulb className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Foundation of Entrepreneurship
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the mindset and skills that transform ideas into impact
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Entrepreneurship */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Entrepreneurship?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Entrepreneurship is the act of <strong className="text-green-600">identifying high-impact problems</strong> and 
                building <strong className="text-emerald-600">scalable, innovative solutions</strong> using limited resources.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">At the advanced level, it's about:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Creating <strong className="text-green-600">sustainable value</strong></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Validating ideas through <strong className="text-emerald-600">smart business modeling</strong></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Using <strong className="text-teal-600">tech-enabled execution</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
               
                <h3 className="text-2xl font-bold text-gray-800 mb-6">The Entrepreneur's Journey</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Spot the Problem</p>
                    </div>
                  </div>
                  <ArrowDown className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Build the Solution</p>
                    </div>
                  </div>
                  <ArrowDown className="w-6 h-6 text-emerald-600 mx-auto" />
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Create Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters Today */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Entrepreneurship Matters Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In a rapidly changing world, entrepreneurship equips students with essential skills:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMatters.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Entrepreneurs */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Different approaches to creating change and value
            </p>
          </div>
          
          {/* Featured Entrepreneur Type (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${entrepreneurs[currentEntrepreneur].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">
                    {entrepreneurs[currentEntrepreneur].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{entrepreneurs[currentEntrepreneur].name}</h3>
                    <p className="text-lg opacity-90 mb-2">{entrepreneurs[currentEntrepreneur].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{entrepreneurs[currentEntrepreneur].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Entrepreneur Types Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {entrepreneurs.map((entrepreneur, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${entrepreneur.bgColor} border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentEntrepreneur === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
                onClick={() => setCurrentEntrepreneur(index)}
              >
                <div className={`bg-gradient-to-r ${entrepreneur.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {entrepreneur.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{entrepreneur.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{entrepreneur.description}</p>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-xs text-gray-700">
                    <strong>Example:</strong> {entrepreneur.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entrepreneurial vs Employee Mindset */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Entrepreneurial vs Employee Mindset
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the key differences in thinking and approach
            </p>
          </div>

          {/* Featured Trait Comparison */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Comparing</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {mindsetTraits[currentTrait].icon}
                  <h3 className="text-2xl font-bold">{mindsetTraits[currentTrait].trait}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-5 h-5" />
                      <h4 className="font-bold">Entrepreneur</h4>
                    </div>
                    <p className="text-green-100">{mindsetTraits[currentTrait].entrepreneur}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="w-5 h-5" />
                      <h4 className="font-bold">Employee</h4>
                    </div>
                    <p className="text-green-100">{mindsetTraits[currentTrait].employee}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Mindset Comparison Table */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <th className="px-6 py-4 text-left font-bold rounded-tl-2xl">Trait</th>
                    <th className="px-6 py-4 text-left font-bold">Entrepreneur</th>
                    <th className="px-6 py-4 text-left font-bold rounded-tr-2xl">Employee</th>
                  </tr>
                </thead>
                <tbody>
                  {mindsetTraits.map((trait, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-100 hover:bg-green-50 transition-colors duration-200 ${
                        currentTrait === index ? 'bg-green-100' : ''
                      }`}
                      onClick={() => setCurrentTrait(index)}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800 flex items-center space-x-2">
                        {trait.icon}
                        <span>{trait.trait}</span>
                      </td>
                      <td className="px-6 py-4 text-green-700 font-medium">{trait.entrepreneur}</td>
                      <td className="px-6 py-4 text-gray-600">{trait.employee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Your Entrepreneurial Journey Starts Here
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Entrepreneurship isn't just about starting businesses—it's about developing a mindset 
              that sees opportunities, solves problems, and creates value for others.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                Ready to think like an entrepreneur? Let's explore how to identify problems and discover opportunities! 
                <strong className="text-green-600"> 🌟</strong>
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

export default Module1Foundation;