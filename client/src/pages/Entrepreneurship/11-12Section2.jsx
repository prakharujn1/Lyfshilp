import React, { useState, useEffect } from 'react';
import { Lightbulb, Users, Target, TrendingUp, Wrench, Rocket, CheckCircle, ArrowRight, Brain, Search, Layers, Map } from 'lucide-react';

const Module2VentureDesign = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeCanvas, setActiveCanvas] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 8);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const ventureSteps = [
    {
      title: "Problem Deep-Dive",
      description: "Use Design Thinking to explore systemic problems. Identify real human struggles.",
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      details: "Apply design thinking methodologies to uncover root causes and understand the full scope of human problems."
    },
    {
      title: "Persona Clustering", 
      description: "Segment users using psychological and behavioral traits to understand motivations and habits.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      details: "Create detailed user personas based on deep psychological insights and behavioral patterns."
    },
    {
      title: "Insight Extraction",
      description: "Gather insights via interviews, surveys, and social listening.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      details: "Collect and analyze data from multiple sources to extract actionable insights about user needs."
    },
    {
      title: "Ideation Sprints",
      description: "Use techniques like SCAMPER, AI-assisted brainstorming, and constraint-based thinking.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-green-400 to-green-500",
      details: "Generate innovative solutions through structured creative thinking methods and AI tools."
    },
    {
      title: "Market Mapping",
      description: "Analyze competition, pricing, trends, and value gaps.",
      icon: <Map className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      details: "Comprehensive analysis of market dynamics, competitive landscape, and opportunity identification."
    },
    {
      title: "Solution Architecture",
      description: "Detail how tech and AI create user value.",
      icon: <Layers className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      details: "Design the technical architecture that delivers value through technology and AI integration."
    },
    {
      title: "MVP Blueprint",
      description: "Define your prototype specs. Include function, UI/UX sketch, backend tools.",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      details: "Create detailed specifications for your minimum viable product including all technical components."
    },
    {
      title: "Launch Roadmap",
      description: "Design a timeline with measurable KPIs for testing and growth.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-800 to-green-900",
      details: "Develop a strategic timeline with clear milestones and key performance indicators for success."
    }
  ];

  const canvasElements = [
    {
      title: "Core Problem",
      description: "Every successful startup begins with a real, specific problem. Be a problem hunter - notice pain points others overlook.",
      icon: "🎯",
      questions: [
        "Is this problem real and painful for a group of people?",
        "How often do people face this issue?",
        "How are they solving it today - and why is that not good enough?"
      ],
      example: "Many students in Tier 2 towns lack guidance for college preparation. There's too much generic advice online, and very little is localized or personalized."
    },
    {
      title: "Ideal Customer",
      description: "Your ideal customer faces the problem most intensely and is most likely to buy your solution first.",
      icon: "👥",
      questions: [
        "What age, background, habits, and needs define your ideal customer?",
        "Where do they spend time (online or offline)?",
        "What motivates or frustrates them?"
      ],
      example: "My ideal customer is a Class 11 science student in a small town who wants to crack NEET but doesn't have access to proper coaching. They rely on YouTube and Telegram groups but feel lost."
    },
    {
      title: "Key Features (with AI Layers)",
      description: "Core elements that make your solution useful. Many startups integrate AI to make products smarter, faster, or more personalized.",
      icon: "⚡",
      questions: [
        "Which 3-5 features are absolutely essential for solving the problem?",
        "How can AI enhance the user experience or automate work?",
        "What makes your solution different or better than others?"
      ],
      example: "My app will include an AI-powered mentor bot that suggests study schedules based on previous test scores and time left before the exam."
    },
    {
      title: "Monetization Strategy",
      description: "Your answer to 'How will you make money?' It includes your pricing model and potential revenue streams.",
      icon: "💰",
      questions: [
        "Will you charge users directly? If yes, how?",
        "Will others (like advertisers or partners) pay you instead?",
        "Is your product free at first and then paid (freemium)?"
      ],
      example: "I'll offer a freemium model: Free access to basic features, and ₹99/month for premium coaching tools and AI mentor access."
    },
    {
      title: "Cost Structure",
      description: "Every business has costs. Understand where your money will go - both to launch and to keep running.",
      icon: "📊",
      questions: [
        "What are your biggest ongoing costs (people, servers, tools)?",
        "What upfront investments do you need?",
        "Are your costs fixed (same every month) or variable?"
      ],
      example: "I'll need to pay ₹5,000/month for server hosting, ₹10,000 for AI APIs, and ₹20,000 for hiring two part-time educators."
    },
    {
      title: "Partnerships & Ecosystem",
      description: "No startup grows alone. Strategic partnerships provide access to customers, technology, credibility, or distribution.",
      icon: "🤝",
      questions: [
        "Are there platforms, companies, or communities that can help you grow?",
        "Can you collaborate with NGOs, schools, brands, or tech providers?",
        "Who benefits when you succeed, and how can they support you?"
      ],
      example: "I'll partner with rural schools for free trials and use Google Cloud credits for hosting. Also, I'll approach content creators for co-promotions."
    },
    {
      title: "Success Metrics",
      description: "Numbers that show whether your business is working. Without tracking metrics, you'll fly blind.",
      icon: "📈",
      questions: [
        "How will you measure progress - user signups, revenue, engagement?",
        "What are realistic goals for the first 3, 6, and 12 months?",
        "Which 2-3 numbers will tell you whether you're growing?"
      ],
      example: "In the first 3 months, I want 500 active users, 100 paid users, and a 30% referral rate."
    }
  ];

  return (
    <div
      id="s-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-2"] = el;
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
                <Wrench className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              The Venture Design Framework
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Move beyond basic idea generation to full venture blueprinting with our comprehensive framework
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Step-by-Step Venture Creation
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn a modified Business Model Canvas tailored to tech-led startups and master the complete venture creation process
            </p>
          </div>
        </div>

        {/* Venture Creation Steps */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The 8-Step Venture Creation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this comprehensive framework to transform your idea into a viable business venture
            </p>
          </div>
          
          {/* Featured Step (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting: Step {currentStep + 1}</div>
              <div className={`bg-gradient-to-r ${ventureSteps[currentStep].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{ventureSteps[currentStep].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-4">{ventureSteps[currentStep].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{ventureSteps[currentStep].description}</p>
                    <p className="text-lg opacity-80">{ventureSteps[currentStep].details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventureSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentStep === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-green-200' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentStep(index)}
              >
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className={`bg-gradient-to-r ${step.color} text-white rounded-full p-3 w-fit mx-auto mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Business Canvas */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced Business Canvas Template
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive framework to design and validate your business model
            </p>
          </div>

          {/* Canvas Navigation */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {canvasElements.map((element, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCanvas(index)}
                  className={`p-3 rounded-xl transition-all duration-300 text-center ${
                    activeCanvas === index 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105' 
                      : 'bg-green-50 text-green-700 hover:bg-green-100'
                  }`}
                >
                  <div className="text-2xl mb-2">{element.icon}</div>
                  <div className="text-xs font-medium">{element.title}</div>
                </button>
              ))}
            </div>

            {/* Active Canvas Element */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{canvasElements[activeCanvas].icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{canvasElements[activeCanvas].title}</h3>
                      <p className="text-gray-600">{canvasElements[activeCanvas].description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-700">Key Questions to Consider:</h4>
                    <ul className="space-y-3">
                      {canvasElements[activeCanvas].questions.map((question, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-green-700 mb-4">Example Thought Process:</h4>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 italic">"{canvasElements[activeCanvas].example}"</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Why This Matters:</h5>
                    <p className="text-green-700 text-sm">
                      {activeCanvas === 0 && "Customers don't pay for products; they pay for solutions to problems. If your business doesn't address a pressing issue, it won't gain traction."}
                      {activeCanvas === 1 && "Trying to serve 'everyone' usually means serving no one. When you know your ideal customer, you can design better features, messages, and marketing strategies."}
                      {activeCanvas === 2 && "A startup must do something better, cheaper, or faster than existing options. Your key features are where innovation lives - especially if powered by AI."}
                      {activeCanvas === 3 && "Many startups fail because they don't have a clear, sustainable way to earn. Your monetization must match your customer's ability and willingness to pay."}
                      {activeCanvas === 4 && "Knowing your major expenses helps you plan better, avoid surprises, and price your product right. It also shows investors you are financially aware."}
                      {activeCanvas === 5 && "Partners reduce your cost and effort. A strong ecosystem also helps validate your idea and provides support during growth."}
                      {activeCanvas === 6 && "Metrics help you adjust quickly. If user growth is flat or drop-offs are high, you can test changes before it's too late. Investors also want to see real traction."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Canvas Workflow */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-6">
              <Layers className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Canvas Building Workflow
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Follow this sequence to build your complete business canvas systematically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 1: Foundation</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Core Problem</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Ideal Customer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Key Features</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 2: Business Model</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Monetization Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Cost Structure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Success Metrics</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Phase 3: Growth</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Partnerships & Ecosystem</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Validation Testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-green-100">Scale Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Framework Success Formula
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              The Venture Design Framework transforms ideas into viable businesses by providing structure, validation methods, and clear execution steps.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Structured Thinking</strong> + 
                <strong className="text-green-700"> Market Validation</strong> + 
                <strong className="text-green-800"> Clear Execution</strong> = 
                <strong className="text-green-900"> Venture Success! 🚀</strong>
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

export default Module2VentureDesign;