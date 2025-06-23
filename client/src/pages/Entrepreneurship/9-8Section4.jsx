import React, { useState, useEffect } from 'react';
import { DollarSign, Target, Users, Zap, TrendingUp, Star, CheckCircle, ArrowRight, Layers, BarChart3, Lightbulb, Coins, CreditCard, Smartphone, Play, Monitor } from 'lucide-react';

const Module4BusinessModel = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [activeCanvas, setActiveCanvas] = useState(null);
  const [canvasData, setCanvasData] = useState({
    problem: '',
    solution: '',
    uvp: '',
    channels: '',
    customers: '',
    revenue: '',
    costs: '',
    metrics: '',
    advantage: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRevenue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const revenueModels = [
    {
      name: "Freemium",
      description: "Basic free version + paid premium",
      example: "Spotify",
      icon: <Play className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Free basic features", "Premium upgrades", "Large user base", "Convert to paid"]
    },
    {
      name: "Subscription",
      description: "Regular monthly/yearly payments",
      example: "Netflix",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: ["Recurring revenue", "Predictable income", "Customer loyalty", "Continuous service"]
    },
    {
      name: "Ads-based",
      description: "Free usage, revenue via advertisements",
      example: "Facebook",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      features: ["Free for users", "Ad revenue", "Large audience", "Data insights"]
    },
    {
      name: "Marketplace",
      description: "Charging commissions on transactions",
      example: "Amazon",
      icon: <Coins className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      features: ["Commission-based", "Scale with volume", "Connect buyers/sellers", "Network effects"]
    }
  ];

  const canvasFields = [
    { key: 'problem', label: 'Problem', icon: <Target className="w-5 h-5" />, color: 'border-red-300 bg-red-50' },
    { key: 'solution', label: 'Solution', icon: <Lightbulb className="w-5 h-5" />, color: 'border-blue-300 bg-blue-50' },
    { key: 'uvp', label: 'Unique Value Proposition', icon: <Star className="w-5 h-5" />, color: 'border-purple-300 bg-purple-50' },
    { key: 'channels', label: 'Channels', icon: <ArrowRight className="w-5 h-5" />, color: 'border-orange-300 bg-orange-50' },
    { key: 'customers', label: 'Customer Segments', icon: <Users className="w-5 h-5" />, color: 'border-pink-300 bg-pink-50' },
    { key: 'revenue', label: 'Revenue Streams', icon: <DollarSign className="w-5 h-5" />, color: 'border-green-300 bg-green-50' },
    { key: 'costs', label: 'Cost Structure', icon: <BarChart3 className="w-5 h-5" />, color: 'border-yellow-300 bg-yellow-50' },
    { key: 'metrics', label: 'Key Metrics', icon: <TrendingUp className="w-5 h-5" />, color: 'border-indigo-300 bg-indigo-50' },
    { key: 'advantage', label: 'Unfair Advantage', icon: <Zap className="w-5 h-5" />, color: 'border-cyan-300 bg-cyan-50' }
  ];

  const handleCanvasChange = (field, value) => {
    setCanvasData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div
      id="m-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-4"] = el;
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
                <DollarSign className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Business Model & Revenue Design
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn how to build sustainable business models and design revenue streams that scale
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
              { icon: <Layers className="w-6 h-6" />, text: "Understanding the Lean Business Model Canvas", color: "bg-green-100 text-green-600" },
              { icon: <DollarSign className="w-6 h-6" />, text: "Different types of revenue models and how they work", color: "bg-emerald-100 text-emerald-600" }
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

        {/* Lean Business Model Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Lean Business Model
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The <strong className="text-green-600">Lean Canvas</strong> is a one-page business plan template that helps entrepreneurs break down their idea into 9 essential components.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Why Use It?</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Quick to create and update</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Focus on what matters most</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Easy to share and discuss</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">9 Key Components</h3>
                <div className="grid grid-cols-3 gap-3">
                  {canvasFields.map((field, index) => (
                    <div key={index} className={`${field.color} border-2 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105`}>
                      <div className="flex justify-center mb-2">
                        {field.icon}
                      </div>
                      <p className="text-xs font-medium text-gray-700">{field.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Lean Canvas */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Interactive Lean Canvas
            </h2>
            <p className="text-lg text-gray-600">
              Click on each section to learn more and try filling it out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {canvasFields.map((field, index) => (
              <div
                key={index}
                className={`${field.color} border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeCanvas === field.key ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                onClick={() => setActiveCanvas(activeCanvas === field.key ? null : field.key)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {field.icon}
                  <h3 className="text-lg font-bold text-gray-800">{field.label}</h3>
                </div>
                
                {activeCanvas === field.key && (
                  <div className="mt-4 animate-fade-in">
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      rows="3"
                      placeholder={`Describe your ${field.label.toLowerCase()}...`}
                      value={canvasData[field.key]}
                      onChange={(e) => handleCanvasChange(field.key, e.target.value)}
                    />
                    <div className="mt-3 text-sm text-gray-600">
                      {field.key === 'problem' && "Identify the top 1-3 problems your target customers face."}
                      {field.key === 'solution' && "Describe your core solution that addresses the problem."}
                      {field.key === 'uvp' && "What makes your product stand out from others?"}
                      {field.key === 'channels' && "How will you reach your customers? (social media, email, etc.)"}
                      {field.key === 'customers' && "Define your primary users or customer groups."}
                      {field.key === 'revenue' && "How will you make money? (subscriptions, sales, ads, etc.)"}
                      {field.key === 'costs' && "What are the key costs? (materials, tools, marketing, staff)"}
                      {field.key === 'metrics' && "What numbers will you track to measure success?"}
                      {field.key === 'advantage' && "What do you have that others can't easily copy?"}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Models Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Revenue Models
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Different ways businesses make <strong className="text-green-600">money</strong> from their products or services
              </p>
            </div>
          </div>
          
          {/* Featured Revenue Model (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${revenueModels[currentRevenue].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {revenueModels[currentRevenue].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{revenueModels[currentRevenue].name}</h3>
                    <p className="text-xl opacity-90 mb-2">{revenueModels[currentRevenue].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{revenueModels[currentRevenue].example}</strong></p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {revenueModels[currentRevenue].features.map((feature, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All Revenue Models Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueModels.map((model, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentRevenue === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
                onClick={() => setCurrentRevenue(index)}
              >
                <div className={`bg-gradient-to-r ${model.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {model.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{model.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                <div className="bg-white rounded-lg p-2 text-xs text-green-600 font-medium">
                  Example: {model.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Model Comparison */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Which Model to Choose?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🤔</div>
                <h3 className="text-xl font-bold text-gray-800">Consider These Factors</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Who are your customers?",
                  "How much can they pay?",
                  "How often will they use it?",
                  "What are your costs?",
                  "How fast do you need money?"
                ].map((question, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{question}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">💡</div>
                <h3 className="text-xl font-bold text-gray-800">Pro Tips</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-sm text-gray-700"><strong>Start Simple:</strong> Begin with one revenue model and expand later</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-400">
                  <p className="text-sm text-gray-700"><strong>Test First:</strong> Validate with real customers before committing</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-sm text-gray-700"><strong>Be Flexible:</strong> You can always change your model as you learn</p>
                </div>
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
              A good business model clearly shows how you create, deliver, and capture value for your customers.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Canvas</strong> + 
                <strong className="text-emerald-600"> Revenue Model</strong> = 
                <strong className="text-teal-600"> Business Success! 💰</strong>
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

export default Module4BusinessModel;