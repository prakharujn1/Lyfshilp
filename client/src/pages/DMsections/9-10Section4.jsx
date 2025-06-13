import React, { useState, useEffect } from 'react';
import { TrendingUp, Calculator, BarChart3, Eye, MousePointer, Users, ShoppingCart, Zap, Target, DollarSign, Smartphone, Monitor, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Module5ROIAnalytics = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [roiResult, setRoiResult] = useState(null);
  const [investment, setInvestment] = useState(1000);
  const [sales, setSales] = useState(2000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const calculateROI = () => {
    const profit = sales - investment;
    const roi = ((profit / investment) * 100).toFixed(1);
    setRoiResult(roi);
  };

  const analyticsTools = [
    {
      name: "Google Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Tracks website traffic and where people come from",
      color: "bg-blue-500",
      features: ["Website visitors", "Traffic sources", "User behavior"]
    },
    {
      name: "Instagram Insights", 
      icon: <Smartphone className="w-8 h-8" />,
      description: "Shows reach, likes, saves, profile visits",
      color: "bg-pink-500",
      features: ["Post reach", "Story views", "Profile visits"]
    },
    {
      name: "YouTube Studio",
      icon: <Monitor className="w-8 h-8" />,
      description: "Views, watch time, audience retention",
      color: "bg-red-500",
      features: ["Video views", "Watch time", "Subscriber growth"]
    },
    {
      name: "Facebook Ads Manager",
      icon: <Target className="w-8 h-8" />,
      description: "Impressions, clicks, cost per click",
      color: "bg-indigo-500",
      features: ["Ad impressions", "Click rates", "Conversion tracking"]
    }
  ];

  const metrics = [
    {
      metric: "Reach",
      meaning: "How many people saw your post or ad",
      icon: <Eye className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      metric: "Engagement",
      meaning: "Likes, comments, shares",
      icon: <Users className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      metric: "Click-Through Rate (CTR)",
      meaning: "% of people who clicked your link",
      icon: <MousePointer className="w-6 h-6" />,
      color: "text-purple-500"
    },
    {
      metric: "Bounce Rate",
      meaning: "People who left your site quickly",
      icon: <ArrowRight className="w-6 h-6" />,
      color: "text-orange-500"
    },
    {
      metric: "Conversion Rate",
      meaning: "% of people who took an action (like purchase or signup)",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "text-pink-500"
    }
  ];

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
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              ROI & Analytics
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Learn how to track your marketing success and make data-driven decisions 📊✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Opening Question */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-6xl mb-6">🤔</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Let's Begin with a Simple Question:
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              If you spent ₹500 on ads and earned ₹1000 in sales, was it worth it?
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Yes? But how do you <strong className="text-green-600">prove</strong> it?
            </p>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            That's where <strong className="text-indigo-600">ROI (Return on Investment)</strong> and 
            <strong className="text-purple-600"> analytics</strong> come in — to help you 
            <strong className="text-pink-600"> track results</strong> and 
            <strong className="text-green-600"> make smarter marketing choices</strong>.
          </p>
        </div>

        {/* ROI Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is ROI?
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-green-600">ROI</strong> is short for 
                <strong className="text-green-600"> Return on Investment</strong>. 
                It shows <strong>how much money you earned compared to what you spent.</strong>
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Formula:
                </h3>
                <div className="text-2xl font-bold text-center bg-white rounded-lg p-4 shadow-sm">
                  ROI = (Profit ÷ Investment) × 100
                </div>
              </div>
            </div>
          </div>

          {/* Interactive ROI Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🧮 Try the ROI Calculator!
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment (₹)
                </label>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sales (₹)
                </label>
                <input
                  type="number"
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Calculate ROI
              </button>
              
              {roiResult && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400 animate-fade-in">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {roiResult}%
                    </div>
                    <p className="text-gray-700">
                      {roiResult > 0 ? "🎉 That's a positive ROI!" : "📉 This needs improvement"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Example Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-yellow-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Real Example</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">₹1,000</div>
              <p className="text-gray-600">Spent on Google ads</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-green-500 mb-2">₹2,000</div>
              <p className="text-gray-600">Made in sales</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">100%</div>
              <p className="text-gray-600">ROI - Great result! 🎉</p>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Are Analytics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analytics are <strong className="text-purple-600">tools and data</strong> that show 
              what's working and what's not in a campaign.
            </p>
          </div>

          {/* Analytics Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`${tool.color} rounded-full p-3 w-fit mb-4 text-white`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🕵️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Do Analytics Tell You?
            </h2>
          </div>

          <div className="grid gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${metric.color} bg-opacity-10 rounded-lg p-3`}>
                    {metric.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{metric.metric}</h3>
                    <p className="text-gray-600">{metric.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border-l-4 border-indigo-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Think Like a Brand: ChillWear Campaign
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-500 mb-2">10,000</div>
              <p className="text-gray-600">Instagram ad views (Reach)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-green-500 mb-2">400</div>
              <p className="text-gray-600">People clicked the link (CTR)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-500 mb-2">50</div>
              <p className="text-gray-600">People bought hoodies (Conversions)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-lg text-gray-700 text-center">
              Now you can <strong className="text-indigo-600">calculate ROI</strong>, 
              see what worked, and <strong className="text-purple-600">optimize the next campaign</strong>. 🚀
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Teacher Says:
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 rounded-full p-2 mt-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                Marketing without tracking is like flying blind — <strong>analytics</strong> give you a map.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 rounded-full p-2 mt-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                A high ROI means you're spending money wisely.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 rounded-full p-2 mt-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                Even if a post gets lots of likes, <strong>check if it actually leads to sales</strong>.
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

export default Module5ROIAnalytics;