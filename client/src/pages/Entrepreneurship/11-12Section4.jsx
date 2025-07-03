import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Calculator, BarChart3, PieChart, Target, AlertTriangle, Zap, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const Module4FinancialModeling = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [interactiveData, setInteractiveData] = useState({
    revenue: 100000,
    costs: 70000,
    customers: 200,
    cac: 500
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const basicFinanceMetrics = [
    {
      title: "Revenue Projection",
      description: "The financial heartbeat of your business idea - predict how much money your product will bring in",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      entrepreneurView: "As an entrepreneur, you need to predict how much money your product or service will bring in - not just for today, but 3, 6, or even 12 months ahead.",
      importance: "If your projections are too optimistic, you may overspend. If they're too low, you may underinvest in marketing or production.",
      example: "You're selling eco-friendly water bottles at ₹300 each. If you plan to acquire 200 customers in Month 1 and grow by 20% each month, your revenue trajectory helps you plan production and staff accordingly."
    },
    {
      title: "Cost Structure", 
      description: "The financial skeleton of your startup - understand exactly where money is going",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      entrepreneurView: "Entrepreneurs must understand exactly where money is going, so they can make smart decisions when cash is tight - which it often is in early stages.",
      importance: "Knowing your cost structure helps you set the right pricing, avoid cash leaks, and optimize your business model.",
      example: "You find that packaging is eating into your margins. You could switch to recycled boxes that cost less but still align with your brand values."
    },
    {
      title: "Break-even Analysis",
      description: "The survival checkpoint - tells you how many sales you need to cover all expenses",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      entrepreneurView: "Break-even is the survival checkpoint - it tells you how many sales you need to cover all your expenses. Until this point, you're losing money. After it, you're making profit.",
      importance: "Entrepreneurs use break-even analysis to set realistic sales targets, plan launch campaigns, and time fundraising rounds.",
      example: "If your fixed monthly costs are ₹50,000 and you earn ₹200 per product sold (after costs), you need 250 sales to break even."
    },
    {
      title: "Burn Rate & Runway",
      description: "How much cash your startup burns monthly and how long you can operate",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-green-400 to-green-500",
      entrepreneurView: "Burn Rate = How much cash your startup 'burns' every month. Runway = How many months you can keep operating before your cash runs out.",
      importance: "If your burn rate is ₹1,00,000 per month and you have ₹4,00,000 in the bank, you have 4 months of runway. Entrepreneurs must always track this to avoid running out of funds before hitting key milestones.",
      example: "Smart entrepreneurs constantly reduce burn rate without stalling growth - by outsourcing, automating, or adjusting customer acquisition plans."
    }
  ];

  const advancedMetrics = [
    {
      title: "CAC (Customer Acquisition Cost)",
      description: "The price you pay to win one paying customer",
      icon: "💰",
      details: "CAC includes ad spend, marketing tools, and sales effort. If your CAC is higher than your revenue per customer, you're in trouble.",
      example: "You spend ₹5,000 on Instagram ads and get 25 new customers → your CAC is ₹200."
    },
    {
      title: "LTV (Customer Lifetime Value)",
      description: "Total money a customer brings over their relationship with your brand",
      icon: "👑",
      details: "LTV reflects loyalty and product value. If LTV is greater than CAC, your business can scale.",
      example: "If each customer buys your product (₹400) 5 times a year for 2 years, their LTV = ₹4,000."
    },
    {
      title: "Margins (Gross vs Net Profit)",
      description: "What's left after costs - your actual profitability",
      icon: "📊",
      details: "Gross Margin = Revenue - Direct Costs. Net Profit = What's left after all costs, including salaries, rent, and tax.",
      example: "Selling price: ₹500, Direct cost: ₹250 → Gross margin = ₹250. After all other expenses: Net profit might be ₹50."
    },
    {
      title: "Cap Table (Capitalization Table)",
      description: "Shows who owns how much of your company",
      icon: "🏛️",
      details: "Every funding round dilutes your ownership. Entrepreneurs must protect their equity while raising enough capital to grow.",
      example: "You start with 100% ownership. After raising ₹10 lakhs from investors for 20%, you now own 80%. Future rounds will dilute it further."
    }
  ];

  const costTypes = [
    {
      type: "Fixed Costs",
      description: "Your non-negotiables - same every month",
      examples: ["Office rent", "Website hosting", "Team salaries", "Software subscriptions"],
      color: "from-green-500 to-green-600"
    },
    {
      type: "Variable Costs", 
      description: "Rise or fall based on how much you sell",
      examples: ["Raw materials", "Shipping", "Packaging", "Payment processing"],
      color: "from-green-600 to-green-700"
    }
  ];

  return (
    <div
      id="s-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-4"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Calculator className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Financial Modelling for Startups
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Master the financial fundamentals that every entrepreneur needs to turn ideas into sustainable businesses
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-3">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Startup Finance Basics
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Entrepreneurship isn't just about having a great idea - it's about <strong className="text-green-600">turning that idea into a sustainable business</strong>. 
                  For that, understanding money - how it flows in and out - is mission critical.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">Finance tells you:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Whether your startup can survive</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>If your business model can grow</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>When you need to pivot or change</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Financial Health Check</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Revenue &gt; Costs</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Positive Cash Flow</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Sustainable Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Finance Metrics */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Core Financial Metrics Every Entrepreneur Must Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these four fundamental metrics to make informed decisions about your startup's financial health
            </p>
          </div>
          
          {/* Featured Metric (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${basicFinanceMetrics[currentMetric].color} text-white rounded-2xl p-8 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{basicFinanceMetrics[currentMetric].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">{basicFinanceMetrics[currentMetric].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{basicFinanceMetrics[currentMetric].description}</p>
                    <p className="text-lg opacity-80">{basicFinanceMetrics[currentMetric].entrepreneurView}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {basicFinanceMetrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentMetric === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-green-200' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentMetric(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${metric.color} text-white rounded-full p-3 flex-shrink-0`}>
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{metric.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{metric.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">Why it matters:</h4>
                      <p className="text-gray-700 text-sm">{metric.importance}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-700 mb-2">Example:</h4>
                      <p className="text-gray-700 text-sm italic">"{metric.example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Structure Deep Dive */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Understanding Cost Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the difference between fixed and variable costs to optimize your business model
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {costTypes.map((cost, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-400 ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${cost.color} text-white rounded-full p-4 w-fit mx-auto mb-4`}>
                    <PieChart className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{cost.type}</h3>
                  <p className="text-gray-600">{cost.description}</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-green-700 mb-4">Common Examples:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {cost.examples.map((example, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-3 text-center">
                        <span className="text-gray-700 text-sm font-medium">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Cost Calculator */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Break-Even Calculator</h3>
              <p className="text-gray-600">Adjust the values to see how they affect your break-even point</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <label className="block text-sm font-semibold text-green-700 mb-3">Monthly Fixed Costs (₹)</label>
                  <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="5000"
                    value={interactiveData.costs}
                    onChange={(e) => setInteractiveData({...interactiveData, costs: parseInt(e.target.value)})}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-green-700">₹{interactiveData.costs.toLocaleString()}</div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <label className="block text-sm font-semibold text-green-700 mb-3">Profit per Unit (₹)</label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="25"
                    value={interactiveData.revenue / interactiveData.customers}
                    onChange={(e) => setInteractiveData({...interactiveData, revenue: parseInt(e.target.value) * interactiveData.customers})}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-green-700">₹{(interactiveData.revenue / interactiveData.customers).toFixed(0)}</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-800 mb-6 text-center">Break-Even Analysis</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-700 mb-2">
                        {Math.ceil(interactiveData.costs / (interactiveData.revenue / interactiveData.customers))}
                      </div>
                      <div className="text-sm text-gray-600">Units needed to break even</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700 mb-2">
                        ₹{(Math.ceil(interactiveData.costs / (interactiveData.revenue / interactiveData.customers)) * (interactiveData.revenue / interactiveData.customers)).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Revenue needed monthly</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                    <div className="font-semibold">
                      {Math.ceil(interactiveData.costs / (interactiveData.revenue / interactiveData.customers)) > interactiveData.customers ? 
                        "❌ Below break-even" : "✅ Above break-even"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Startup Finance */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced Startup Finance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these advanced metrics to speak the language of investors and scale your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advancedMetrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-400 ${
                  visibleCards.includes(index + 6) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{metric.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{metric.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{metric.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">How it works:</h4>
                      <p className="text-gray-700 text-sm">{metric.details}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-700 mb-2">Example:</h4>
                      <p className="text-gray-700 text-sm italic">"{metric.example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Planning Tool */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-6">
              <Calculator className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lean Startup Finance Tool
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A comprehensive financial planning framework for early-stage entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Revenue Planning</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Monthly customer projections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Pricing strategy inputs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Growth rate scenarios</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cost Management</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Fixed vs variable cost tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Break-even calculations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Cash flow simulations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Investor Metrics</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">CAC/LTV calculator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Cap table tracker</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Funding requirement analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-6xl mb-6">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Financial Mastery = Startup Success
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Understanding financial fundamentals isn't just about numbers - it's about making informed decisions 
              that drive sustainable growth and attract smart investment.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Smart Planning</strong> + 
                <strong className="text-green-700"> Data-Driven Decisions</strong> + 
                <strong className="text-green-800"> Financial Discipline</strong> = 
                <strong className="text-green-900"> Sustainable Business! 📈</strong>
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
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Module4FinancialModeling;