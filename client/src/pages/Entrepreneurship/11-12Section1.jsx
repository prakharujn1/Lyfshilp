import React, { useState, useEffect } from 'react';
import { Globe, Target, TrendingUp, Users, Lightbulb, CheckCircle, Star, ArrowRight, Zap, Brain } from 'lucide-react';

const Module1StrategicEntrepreneurship = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentCharacteristic, setCurrentCharacteristic] = useState(0);
  const [currentTrend, setCurrentTrend] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCharacteristic((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const trendInterval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(trendInterval);
  }, []);

  const characteristics = [
    {
      title: "Visionary Outlook",
      description: "The ability to forecast market changes and identify future trends before they emerge.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Execution Intelligence", 
      description: "Knowing how to assemble resources, manage projects, and lead effectively to turn an idea into impact.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Systems Thinking",
      description: "Understanding the interconnectedness between societal issues, business solutions, and environmental outcomes.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Ethical Foresight",
      description: "Anticipating the ethical impact of innovation and embedding accountability from day one.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const globalTrends = [
    {
      title: "Climate-tech & Sustainability",
      description: "Businesses focused on environmental solutions and sustainable practices",
      icon: "🌱",
      examples: ["Solar energy startups", "Waste management tech", "Carbon capture solutions"]
    },
    {
      title: "AI-native Startups",
      description: "Companies built with AI at their core, transforming traditional sectors",
      icon: "🤖",
      examples: ["Healthcare diagnostics", "Personalized education", "Smart agriculture"]
    },
    {
      title: "Creator Economy",
      description: "Digital influencers, content monetization, and solopreneurship",
      icon: "🎨",
      examples: ["Content platforms", "Creator tools", "Monetization apps"]
    },
    {
      title: "Decentralized Finance (DeFi)",
      description: "Blockchain-based financial services and gig work models",
      icon: "💰",
      examples: ["Crypto wallets", "Freelance platforms", "Digital payments"]
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Globe className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Strategic Entrepreneurship & Global Thinking
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Discover how to combine innovation with long-term vision and market positioning to create impactful businesses
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Strategic Entrepreneurship */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  What is Strategic Entrepreneurship?
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Strategic entrepreneurship refers to <strong className="text-green-600">combining innovation with long-term vision</strong> and market positioning. 
                  It emphasizes creating disruptive ideas while aligning them with emerging trends, sustainable development, and competitive strategy.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">Key Focus Areas:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Opportunity-seeking with risk mitigation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Ethical forecasting and accountability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Sustainable competitive advantage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategic Innovation</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Vision + Innovation</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Market Positioning</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Sustainable Impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characteristics of Strategic Entrepreneurs */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Characteristics of Strategic Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The key traits that define successful strategic entrepreneurs in today's global economy
            </p>
          </div>
          
          {/* Featured Characteristic (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${characteristics[currentCharacteristic].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{characteristics[currentCharacteristic].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">{characteristics[currentCharacteristic].title}</h3>
                    <p className="text-xl opacity-90">{characteristics[currentCharacteristic].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Characteristics Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {characteristics.map((characteristic, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentCharacteristic === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentCharacteristic(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${characteristic.color} text-white rounded-full p-3 flex-shrink-0`}>
                    {characteristic.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{characteristic.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{characteristic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Entrepreneurial Trends */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Global Entrepreneurial Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the emerging trends shaping the future of entrepreneurship worldwide
            </p>
          </div>

          {/* Featured Trend */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="text-6xl mb-4">{globalTrends[currentTrend].icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{globalTrends[currentTrend].title}</h3>
                <p className="text-lg text-gray-700 mb-6">{globalTrends[currentTrend].description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-700">Examples:</h4>
                  <ul className="space-y-2">
                    {globalTrends[currentTrend].examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {globalTrends.map((trend, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-4 shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                      currentTrend === index ? 'ring-2 ring-green-400 bg-green-50' : ''
                    }`}
                    onClick={() => setCurrentTrend(index)}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{trend.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-sm">{trend.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-6">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Trend Tracker Activity
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Research and analyze AI-driven startups that are tackling global challenges
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3">Research Phase</h3>
                <p className="text-green-100">Find 3 AI-driven startups targeting global challenges</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Analysis Phase</h3>
                <p className="text-green-100">Analyze their impact, business model, and scalability</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Deliverable</h3>
                <p className="text-green-100">Create a 2-slide impact report</p>
              </div>
            </div>

            <div className="mt-8 bg-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Focus Areas</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="font-medium">AI for Education</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <p className="font-medium">AI for Health</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🌍</div>
                  <p className="font-medium">AI for Climate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-6xl mb-6">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaway
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Strategic entrepreneurship is about creating businesses that not only generate profit but also 
              address global challenges through innovative, sustainable, and ethical approaches.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Vision</strong> + 
                <strong className="text-emerald-600"> Innovation</strong> + 
                <strong className="text-teal-600"> Global Impact</strong> = 
                <strong className="text-green-700"> Strategic Success! 🌟</strong>
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

export default Module1StrategicEntrepreneurship;