import React, { useState, useEffect } from 'react';
import { Brain, Zap, Users, TrendingUp, Wrench, Rocket, Bot, Target, CheckCircle, ArrowRight, Lightbulb, Cpu } from 'lucide-react';

const Module5AIEntrepreneurship = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentUseCase, setCurrentUseCase] = useState(0);
  const [activeTool, setActiveTool] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUseCase((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const aiUseCases = [
    {
      title: "Personalized Recommendation Engines",
      description: "Understanding user behavior to suggest the next best product or service automatically",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      examples: ["Netflix movie suggestions", "Amazon product recommendations", "Spotify playlists"],
      startupExample: "An e-learning app that recommends video lessons or quizzes based on a student's past performance using machine learning.",
      impact: "Increases customer retention, time on app, and conversion rates - all critical metrics for a growing startup."
    },
    {
      title: "Workflow Automation Using Bots",
      description: "AI bots help automate repetitive tasks, freeing up founders to focus on growth",
      icon: <Bot className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      examples: ["HR bots for scheduling", "CRM systems", "Customer support chatbots"],
      startupExample: "A D2C skincare brand uses bots to automatically tag orders, update stock, and notify shipping partners via WhatsApp integration.",
      impact: "Reduces burn rate, improves speed, and allows lean teams to operate like large ones."
    },
    {
      title: "Predictive Customer Insights",
      description: "Machine learning helps predict customer behavior and business outcomes",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      examples: ["Google Ads optimization", "CRM predictions", "Fintech risk scoring"],
      startupExample: "A SaaS founder uses predictive scoring to identify trial users most likely to convert to paying customers and targets them with special offers.",
      impact: "Entrepreneurs can take proactive decisions based on data, not just gut feelings - increasing ROI and reducing wasted spend."
    },
    {
      title: "AI-Driven Content Creation",
      description: "AI tools help create social media posts, videos, logos, and marketing content",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-green-400 to-green-500",
      examples: ["Instagram ads", "Blog content", "YouTube intros", "Email newsletters"],
      startupExample: "A sustainable fashion startup uses Canva AI to generate 50 ad creatives for different age groups in 1 hour - something that would take a designer a full week.",
      impact: "Helps early-stage startups market like pros on a budget, scale campaigns, and maintain consistent brand voice."
    }
  ];

  const aiTools = [
    {
      name: "Zapier / Make",
      description: "Connects apps like Google Sheets, WhatsApp, Instagram, Gmail, etc.",
      icon: "🔗",
      useCase: "Automate customer follow-ups, email alerts, payment tracking, or lead generation",
      category: "Automation",
      difficulty: "Beginner"
    },
    {
      name: "Canva AI",
      description: "Auto-generates designs, presentations, logos, ad banners",
      icon: "🎨",
      useCase: "Create brand kits, pitch decks, social content in minutes",
      category: "Design",
      difficulty: "Beginner"
    },
    {
      name: "Notion AI",
      description: "Assists in writing, organizing notes, building to-do lists, summarizing research",
      icon: "📝",
      useCase: "Plan launches, document SOPs, brainstorm content calendars",
      category: "Productivity",
      difficulty: "Beginner"
    },
    {
      name: "RunwayML / Genmo",
      description: "Generate videos from text, remove backgrounds, animate ideas with AI",
      icon: "🎬",
      useCase: "Create pitch demo videos, animated intros, marketing assets",
      category: "Video",
      difficulty: "Intermediate"
    }
  ];

  const aiFeatures = [
    {
      feature: "AI Chatbot",
      description: "Handle customer questions automatically",
      tools: "ChatGPT API, Dialogflow",
      complexity: "Medium",
      impact: "High"
    },
    {
      feature: "Personalized Suggestions",
      description: "Recommend content or products based on user behavior",
      tools: "Basic rules or ML models",
      complexity: "High",
      impact: "Very High"
    },
    {
      feature: "Automated Email Responders",
      description: "Send relevant emails based on user actions",
      tools: "Zapier, Mailchimp",
      complexity: "Low",
      impact: "Medium"
    },
    {
      feature: "Auto-generated Reports",
      description: "Create business insights and summaries automatically",
      tools: "Google Apps Script, AI APIs",
      complexity: "Medium",
      impact: "High"
    },
    {
      feature: "AI Image Generation",
      description: "Create product mockups and marketing visuals",
      tools: "DALL-E, Midjourney, Canva AI",
      complexity: "Low",
      impact: "Medium"
    },
    {
      feature: "Predictive User Behavior",
      description: "Predict which users will convert or churn",
      tools: "Google Analytics, Custom ML",
      complexity: "High",
      impact: "Very High"
    }
  ];

  return (
    <div
      id="s-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-5"] = el;
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
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              AI × Entrepreneurship
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Learn how to integrate and scale AI technologies to build smarter, faster, and more competitive startups
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
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  AI in Today's Startup Ecosystem
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In today's startup ecosystem, <strong className="text-green-600">AI isn't a luxury - it's a growth engine</strong>. 
                  Entrepreneurs are using AI not just to build futuristic products but to solve real business problems faster, cheaper, and smarter.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">AI Transforms Business by:</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Automating repetitive tasks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Personalizing customer experiences</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                      <span>Predicting market trends and behavior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">AI-Powered Startup</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Faster Growth</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Lower Costs</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse"></div>
                        <p className="text-gray-700 font-medium">Better Decisions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Use Cases */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real Use Cases: How Startups Use AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how successful startups integrate AI to solve business problems and accelerate growth
            </p>
          </div>
          
          {/* Featured Use Case (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${aiUseCases[currentUseCase].color} text-white rounded-2xl p-8 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{aiUseCases[currentUseCase].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">{aiUseCases[currentUseCase].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{aiUseCases[currentUseCase].description}</p>
                    <p className="text-lg opacity-80">{aiUseCases[currentUseCase].impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {aiUseCases.map((useCase, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentUseCase === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-green-200' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentUseCase(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${useCase.color} text-white rounded-full p-3 flex-shrink-0`}>
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{useCase.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">Common Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.examples.map((example, idx) => (
                          <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-700 mb-2">Startup Example:</h4>
                      <p className="text-gray-700 text-sm italic">"{useCase.startupExample}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              AI Tools for Student Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical toolkit for building AI-powered prototypes, even without coding skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{tool.icon}</div>
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tool.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-green-200 text-green-800'
                      }`}>
                        {tool.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{tool.description}</p>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-green-700 mb-2">How entrepreneurs use it:</h4>
                      <p className="text-gray-700 text-sm">{tool.useCase}</p>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Enhanced Product Activity */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-6">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Enhanced Product Challenge
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Take your existing MVP and upgrade it with 1-2 smart AI features to enhance user experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: "Identify Pain Point",
                icon: "🎯",
                description: "Find issues in your MVP that AI could solve"
              },
              {
                step: "Choose AI Features",
                icon: "⚡",
                description: "Select 1-2 AI features that add real value"
              },
              {
                step: "Prototype It",
                icon: "🛠️",
                description: "Use no-code tools to build and test"
              },
              {
                step: "Present Demo",
                icon: "🎬",
                description: "Create 3-slide deck or 1-min video demo"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold mb-3">{step.step}</h3>
                <p className="text-green-100 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* AI Feature Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Choose Your AI Features</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                  className={`bg-white/20 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    selectedFeature === index ? 'bg-white/30 scale-105' : 'hover:bg-white/25'
                  }`}
                >
                  <h4 className="font-bold text-white mb-2">{feature.feature}</h4>
                  <p className="text-green-100 text-sm mb-3">{feature.description}</p>
                  
                  {selectedFeature === index && (
                    <div className="bg-white/20 rounded-lg p-3 mt-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-green-200">Tools:</span>
                          <span className="text-white">{feature.tools}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-200">Complexity:</span>
                          <span className={`px-2 py-1 rounded ${
                            feature.complexity === 'Low' ? 'bg-green-500' :
                            feature.complexity === 'Medium' ? 'bg-green-600' : 'bg-green-700'
                          } text-white text-xs`}>
                            {feature.complexity}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-200">Impact:</span>
                          <span className={`px-2 py-1 rounded ${
                            feature.impact === 'Medium' ? 'bg-green-500' :
                            feature.impact === 'High' ? 'bg-green-600' : 'bg-green-700'
                          } text-white text-xs`}>
                            {feature.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What You'll Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key skills and insights from integrating AI into your entrepreneurial journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                outcome: "Value of AI in Startups",
                description: "Understand how AI creates real business value",
                icon: "💎"
              },
              {
                outcome: "Strategic Tool Selection",
                description: "Choose the right AI tools for your specific needs",
                icon: "🎯"
              },
              {
                outcome: "No-Code AI Integration",
                description: "Build AI features without programming skills",
                icon: "🔧"
              },
              {
                outcome: "Market-Ready Products",
                description: "Create competitive, AI-enhanced solutions",
                icon: "🚀"
              }
            ].map((outcome, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{outcome.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{outcome.outcome}</h3>
                <p className="text-gray-600 text-sm">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              AI × Entrepreneurship = Future Success
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              AI isn't just about technology - it's about solving real problems faster, cheaper, and smarter. 
              Entrepreneurs who master AI integration today will build the most competitive startups of tomorrow.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Smart AI Integration</strong> + 
                <strong className="text-green-700"> No-Code Tools</strong> + 
                <strong className="text-green-800"> Strategic Thinking</strong> = 
                <strong className="text-green-900"> Competitive Advantage! 🎯</strong>
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

export default Module5AIEntrepreneurship;