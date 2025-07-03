import React, { useState, useEffect } from 'react';
import { Target, Users, MessageSquare, DollarSign, TrendingUp, Calendar, CheckCircle, ArrowRight, Megaphone, Network, BarChart3, Clock } from 'lucide-react';

const Module3GTMStrategy = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComponent((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gtmComponents = [
    {
      title: "Customer Segmentation",
      description: "Define early adopters vs mainstream vs laggards",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      details: "Identify and categorize your target audience based on their adoption patterns and willingness to try new products.",
      examples: ["Tech enthusiasts (early adopters)", "Mainstream users", "Late adopters"]
    },
    {
      title: "Value Messaging",
      description: "Tailor your message based on customer needs and pain points",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      details: "Create compelling messages that resonate with each customer segment's specific needs and motivations.",
      examples: ["Problem-focused messaging", "Benefit-driven content", "Social proof elements"]
    },
    {
      title: "Distribution Channels",
      description: "Online D2C, B2B sales, influencer marketing, and partner networks",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      details: "Choose the right channels to reach your customers where they are most likely to engage and convert.",
      examples: ["Direct-to-consumer websites", "B2B sales teams", "Influencer partnerships"]
    },
    {
      title: "Pricing Psychology",
      description: "Behavioral economics strategies (anchor pricing, freemium, bundling)",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-400 to-green-500",
      details: "Apply psychological pricing strategies to maximize perceived value and conversion rates.",
      examples: ["Anchor pricing", "Freemium models", "Bundle offers"]
    },
    {
      title: "Growth Loops",
      description: "Mechanisms that promote viral or referral-based scaling",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      details: "Build self-reinforcing growth mechanisms that turn customers into advocates for your product.",
      examples: ["Referral programs", "Viral features", "Network effects"]
    }
  ];

  const launchPhases = [
    {
      title: "Pre-Launch Phase",
      duration: "4-8 weeks before launch",
      color: "from-green-400 to-green-500",
      activities: [
        "Build landing page and collect emails",
        "Create social media presence",
        "Develop content marketing strategy",
        "Identify and reach out to early adopters",
        "Set up analytics and tracking systems"
      ],
      goals: ["Build anticipation", "Gather early feedback", "Create buzz"]
    },
    {
      title: "Launch Phase",
      duration: "Launch week",
      color: "from-green-500 to-green-600",
      activities: [
        "Execute coordinated launch campaign",
        "Send launch emails to subscribers",
        "Activate social media campaigns",
        "Reach out to press and influencers",
        "Monitor and respond to feedback"
      ],
      goals: ["Maximum visibility", "Initial user acquisition", "Media coverage"]
    },
    {
      title: "Post-Launch Phase",
      duration: "Ongoing",
      color: "from-green-600 to-green-700",
      activities: [
        "Analyze launch metrics and performance",
        "Optimize based on user feedback",
        "Scale successful marketing channels",
        "Build customer success programs",
        "Plan next phase of growth"
      ],
      goals: ["Sustained growth", "Customer retention", "Market expansion"]
    }
  ];

  const pricingStrategies = [
    {
      strategy: "Anchor Pricing",
      description: "Set a high reference point to make other options seem more reasonable",
      example: "Show premium plan first to make standard plan look affordable",
      icon: "⚓"
    },
    {
      strategy: "Freemium Model",
      description: "Offer basic features free, charge for premium functionality",
      example: "Free version with basic features, paid version with advanced tools",
      icon: "🆓"
    },
    {
      strategy: "Bundle Pricing",
      description: "Package multiple products/services together at a discount",
      example: "Software + training + support package at reduced total cost",
      icon: "📦"
    },
    {
      strategy: "Psychological Pricing",
      description: "Use pricing that appeals to customer psychology",
      example: "₹99 instead of ₹100, or ₹497 instead of ₹500",
      icon: "🧠"
    }
  ];

  return (
    <div
      id="s-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-3"] = el;
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
                <Megaphone className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Go-To-Market Strategy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Learn how to deliver your product to its intended users with effective brand voice, outreach tactics, and sales strategies
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is GTM */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  What is GTM Strategy?
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong className="text-green-600">Go-To-Market strategy</strong> defines how to deliver your product to its intended users, 
                  covering brand voice, outreach tactics, pricing methods, and sales strategies.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Megaphone className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">GTM Covers:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>How to reach your target customers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>What message resonates with them</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Which channels drive conversions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">GTM Success Framework</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Right Customer</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Right Message</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Right Channel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Components of Smart GTM */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Components of a Smart GTM Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The five essential elements that make your go-to-market strategy effective and scalable
            </p>
          </div>
          
          {/* Featured Component (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${gtmComponents[currentComponent].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{gtmComponents[currentComponent].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">{gtmComponents[currentComponent].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{gtmComponents[currentComponent].description}</p>
                    <p className="text-lg opacity-80">{gtmComponents[currentComponent].details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gtmComponents.map((component, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentComponent === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-green-200' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentComponent(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${component.color} text-white rounded-full p-3 flex-shrink-0`}>
                    {component.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{component.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{component.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-700 text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {component.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Psychology Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pricing Psychology Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behavioral economics strategies to optimize your pricing for maximum conversion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pricingStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-400 ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{strategy.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{strategy.strategy}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{strategy.description}</p>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-green-700 mb-2">Example:</h4>
                      <p className="text-gray-700 text-sm italic">"{strategy.example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GTM Worksheet Builder */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              GTM Launch Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to planning your product launch across three key phases
            </p>
          </div>

          {/* Phase Navigation */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {launchPhases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                      activePhase === index 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' 
                        : 'bg-green-50 text-green-700 hover:bg-green-100'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold">{phase.title}</div>
                      <div className="text-xs opacity-75">{phase.duration}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Phase Details */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{launchPhases[activePhase].title}</h3>
                  <p className="text-gray-600 mb-6">{launchPhases[activePhase].duration}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-700">Key Activities:</h4>
                    <ul className="space-y-3">
                      {launchPhases[activePhase].activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">Primary Goals:</h4>
                  <div className="space-y-3">
                    {launchPhases[activePhase].goals.map((goal, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                        <div className="flex items-center space-x-3">
                          <Target className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700 font-medium">{goal}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Success Metrics:</h5>
                    <div className="space-y-2">
                      {activePhase === 0 && (
                        <>
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-green-700" />
                            <span className="text-green-700 text-sm">Email signups, social followers</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-green-700" />
                            <span className="text-green-700 text-sm">Landing page conversion rate</span>
                          </div>
                        </>
                      )}
                      {activePhase === 1 && (
                        <>
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-green-700" />
                            <span className="text-green-700 text-sm">Launch day signups/sales</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-green-700" />
                            <span className="text-green-700 text-sm">Media mentions, social shares</span>
                          </div>
                        </>
                      )}
                      {activePhase === 2 && (
                        <>
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-green-700" />
                            <span className="text-green-700 text-sm">Monthly recurring revenue</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-green-700" />
                            <span className="text-green-700 text-sm">Customer retention rate</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Loops Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-6">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building Growth Loops
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Create self-reinforcing mechanisms that turn customers into advocates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-4">Referral Loop</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Customer loves product</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Refers friends for reward</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Friends become customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Cycle repeats</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-4">Viral Feature Loop</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">User creates content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Shares on social media</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Others discover product</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">New users sign up</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4">Network Effect Loop</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">More users join platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Platform becomes more valuable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Attracts even more users</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-green-300" />
                    <span className="text-green-100 text-sm">Competitive advantage grows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              GTM Success Formula
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              A successful Go-To-Market strategy aligns your product with the right customers through the right channels, 
              with the right message, at the right price, and builds sustainable growth loops.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Clear Strategy</strong> + 
                <strong className="text-green-700"> Smart Execution</strong> + 
                <strong className="text-green-800"> Growth Loops</strong> = 
                <strong className="text-green-900"> Market Success! 🎯</strong>
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

export default Module3GTMStrategy;