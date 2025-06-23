import React, { useState, useEffect } from 'react';
import { Calendar, Target, Users, MessageCircle, Mail, TrendingUp, Share2, Gift, Megaphone, BarChart3, Globe, Heart, Star, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const Module6GoToMarket = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [activeMarketingTool, setActiveMarketingTool] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComponent((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarketingTool((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const gtmComponents = [
    {
      name: "Target Audience Definition",
      icon: <Users className="w-8 h-8" />,
      description: "Identify the specific group of people who are most likely to benefit from your product",
      details: "Understand their demographics, behaviors, needs, and the problems they face",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      example: "Teen students aged 14-18 who struggle with time management"
    },
    {
      name: "Marketing Channels",
      icon: <Share2 className="w-8 h-8" />,
      description: "Select platforms and strategies to reach your audience effectively",
      details: "For students: Instagram campaigns, school events, posters, and email newsletters",
      color: "from-emerald-500 to-green-600", 
      bgColor: "from-emerald-50 to-green-50",
      example: "Social media, email marketing, school events"
    },
    {
      name: "Content Plan",
      icon: <MessageCircle className="w-8 h-8" />,
      description: "Plan what kind of content you will share to inform and attract users",
      details: "Blogs explain your idea, reels show product demos, infographics highlight benefits",
      color: "from-green-600 to-teal-600",
      bgColor: "from-green-50 to-teal-50",
      example: "Blog posts, video demos, infographics"
    },
    {
      name: "Growth Loop",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Design systems that help your user base grow organically",
      details: "Offer rewards to users who refer friends or share your product on social media",
      color: "from-teal-600 to-green-700",
      bgColor: "from-teal-50 to-green-50", 
      example: "Referral rewards, social sharing incentives"
    }
  ];

  const marketingChannels = [
    {
      name: "Social Media",
      icon: <Share2 className="w-6 h-6" />,
      platforms: ["Instagram", "TikTok", "YouTube"],
      benefits: "Wide reach, visual content, viral potential",
      color: "bg-green-500"
    },
    {
      name: "Email Marketing", 
      icon: <Mail className="w-6 h-6" />,
      platforms: ["Newsletters", "Updates", "Promotions"],
      benefits: "Direct communication, personal touch",
      color: "bg-emerald-500"
    },
    {
      name: "School Events",
      icon: <Users className="w-6 h-6" />,
      platforms: ["Presentations", "Fairs", "Workshops"],
      benefits: "Face-to-face interaction, trust building",
      color: "bg-green-600"
    },
    {
      name: "Content Marketing",
      icon: <MessageCircle className="w-6 h-6" />,
      platforms: ["Blogs", "Videos", "Infographics"],
      benefits: "Educational value, SEO benefits",
      color: "bg-teal-600"
    }
  ];

  const marketingTools = [
    {
      name: "Canva",
      purpose: "Design & Visual Content",
      icon: <Globe className="w-6 h-6" />,
      description: "Create posters, social media graphics, and presentation slides with drag-and-drop features",
      features: ["Easy templates", "Drag-and-drop", "Social media sizes"],
      color: "bg-green-500"
    },
    {
      name: "Mailchimp",
      purpose: "Email Campaigns", 
      icon: <Mail className="w-6 h-6" />,
      description: "Create and send email campaigns to subscribers for updates, promotions, and newsletters",
      features: ["Email automation", "Subscriber management", "Analytics"],
      color: "bg-emerald-500"
    },
    {
      name: "Buffer",
      purpose: "Social Media Management",
      icon: <Share2 className="w-6 h-6" />,
      description: "Schedule and manage posts on Instagram, Facebook, and Twitter for consistent content",
      features: ["Post scheduling", "Multi-platform", "Analytics"],
      color: "bg-green-600"
    },
    {
      name: "Google Ads",
      purpose: "Online Advertising",
      icon: <Megaphone className="w-6 h-6" />,
      description: "Run paid ads that appear on Google search results to reach more potential customers",
      features: ["Search ads", "Targeting options", "Budget control"],
      color: "bg-teal-600"
    }
  ];

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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-spin"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-white rounded-lg animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-white rounded-full animate-bounce"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Calendar className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              📆 Go-To-Market Strategy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Launch your startup successfully with strategic marketing and promotion
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is GTM Strategy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is a Go-to-Market Strategy?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong className="text-green-600">Go-to-Market (GTM) strategy</strong> is a structured plan that outlines how a startup will introduce its product or service to the target market, attract early users, and build momentum for growth.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">It combines:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Marketing tactics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Sales strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Distribution methods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">GTM Success Formula</h3>
                <div className="space-y-4">
                  {[
                    "Know your audience",
                    "Choose right channels", 
                    "Create compelling content",
                    "Build growth systems"
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300 ${
                        visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Components */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Core Components of GTM Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four essential elements that make your launch successful
            </p>
          </div>

          {/* Featured Component (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Component Spotlight</div>
              <div className={`bg-gradient-to-r ${gtmComponents[currentComponent].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center justify-center bg-white/20 rounded-full p-4">
                    {gtmComponents[currentComponent].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-3">{gtmComponents[currentComponent].name}</h3>
                    <p className="text-lg opacity-90 mb-3">{gtmComponents[currentComponent].description}</p>
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <p className="text-sm font-medium">{gtmComponents[currentComponent].details}</p>
                    </div>
                    <div className="text-sm opacity-80">Example: {gtmComponents[currentComponent].example}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gtmComponents.map((component, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${component.bgColor} border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentComponent === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
                onClick={() => setCurrentComponent(index)}
              >
                <div className={`bg-gradient-to-r ${component.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {component.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{component.name}</h3>
                <p className="text-gray-600 text-sm text-center mb-3">{component.description}</p>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-gray-700 text-center">{component.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Channels */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Marketing Channels
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right platforms to reach your target audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:h-[300px] gap-6">
            {marketingChannels.map((channel, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedChannel === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 8) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 8) * 150}ms` }}
                onClick={() => setSelectedChannel(index)}
              >
                <div className={`${channel.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {channel.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{channel.name}</h3>
                <div className="space-y-2 mb-4">
                  {channel.platforms.map((platform, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-2 text-sm text-gray-700">
                      {platform}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-green-600 font-medium">{channel.benefits}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Tools */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Marketing Tools for Young Entrepreneurs
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beginner-friendly tools to promote your startup effectively
            </p>
          </div>

          {/* Featured Tool (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Tool Spotlight</div>
              <div className={`${marketingTools[activeMarketingTool].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="bg-white/20 rounded-full p-4">
                    {marketingTools[activeMarketingTool].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{marketingTools[activeMarketingTool].name}</h3>
                    <p className="text-xl opacity-90 mb-3">{marketingTools[activeMarketingTool].purpose}</p>
                    <p className="text-sm opacity-80 mb-4">{marketingTools[activeMarketingTool].description}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {marketingTools[activeMarketingTool].features.map((feature, idx) => (
                        <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeMarketingTool === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                }`}
                onClick={() => setActiveMarketingTool(index)}
              >
                <div className={`${tool.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{tool.name}</h3>
                <p className="text-sm text-green-600 font-semibold mb-3 text-center">{tool.purpose}</p>
                <p className="text-xs text-gray-600 mb-4 text-center">{tool.description}</p>
                <div className="space-y-1">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-2 text-xs text-gray-700 text-center">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GTM Roadmap */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Go-To-Market Roadmap
            </h2>
            <p className="text-gray-600 mt-2">Follow this step-by-step guide to launch successfully</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Define Your Audience",
                description: "Research and identify your ideal customers",
                icon: <Users className="w-6 h-6" />,
                action: "Create user personas"
              },
              {
                step: "2", 
                title: "Choose Channels",
                description: "Select the best platforms to reach them",
                icon: <Share2 className="w-6 h-6" />,
                action: "Pick 2-3 main channels"
              },
              {
                step: "3",
                title: "Create Content", 
                description: "Develop engaging content for each channel",
                icon: <MessageCircle className="w-6 h-6" />,
                action: "Plan content calendar"
              },
              {
                step: "4",
                title: "Launch & Grow",
                description: "Execute your plan and optimize based on results",
                icon: <TrendingUp className="w-6 h-6" />,
                action: "Track and improve"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <div className="text-green-600 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-green-100 rounded-lg p-2">
                  <p className="text-xs text-green-700 font-medium">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              A successful Go-to-Market strategy combines knowing your audience, choosing the right channels, creating valuable content, and building systems for growth.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Audience</strong> + 
                <strong className="text-emerald-600"> Channels</strong> + 
                <strong className="text-teal-600"> Content</strong> + 
                <strong className="text-green-700"> Growth = Launch Success! 📈</strong>
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

export default Module6GoToMarket;