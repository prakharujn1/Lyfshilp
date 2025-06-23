import React, { useState, useEffect } from 'react';
import { Rocket, Layers, Pencil, Monitor, Smartphone, Bot, Palette, Code, Zap, ArrowRight, CheckCircle, Star, Target, Lightbulb } from 'lucide-react';

const Module5Prototyping = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentPrototype, setCurrentPrototype] = useState(0);
  const [activeAITool, setActiveAITool] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrototype((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAITool((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const prototypeTypes = [
    {
      type: "Low-Fidelity",
      icon: <Pencil className="w-8 h-8" />,
      description: "Basic hand-drawn sketches or paper models that show layout and concept without much detail",
      benefits: "Quick to create and great for early brainstorming and feedback",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-300",
      example: "📝 Paper wireframes, sketched layouts"
    },
    {
      type: "Mid-Fidelity", 
      icon: <Monitor className="w-8 h-8" />,
      description: "Digital mockups created using design tools like Canva or wireframing apps",
      benefits: "More accurate visuals and simulate user interface elements",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-300",
      example: "🎨 Digital mockups, Canva designs"
    },
    {
      type: "High-Fidelity",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Fully interactive prototypes that closely resemble the final product in design and functionality",
      benefits: "Allow users to click through features and simulate real interactions",
      color: "from-green-600 to-teal-600",
      bgColor: "from-green-50 to-teal-50", 
      borderColor: "border-green-400",
      example: "📱 Interactive prototypes, working demos"
    }
  ];

  const aiTools = [
    {
      name: "ChatGPT",
      purpose: "Content generation",
      icon: <Bot className="w-6 h-6" />,
      description: "Generate ideas, write content, and brainstorm solutions",
      color: "bg-green-500"
    },
    {
      name: "Uizard.ai", 
      purpose: "UI mockups from sketches",
      icon: <Layers className="w-6 h-6" />,
      description: "Transform hand-drawn sketches into digital designs",
      color: "bg-emerald-500"
    },
    {
      name: "Canva AI",
      purpose: "Visual design & logo creation", 
      icon: <Palette className="w-6 h-6" />,
      description: "Create stunning visuals and brand materials",
      color: "bg-green-600"
    },
    {
      name: "Builder.ai",
      purpose: "Build functional apps without coding",
      icon: <Code className="w-6 h-6" />,
      description: "Create working applications without programming knowledge",
      color: "bg-teal-600"
    }
  ];

  return (
    <div
      id="m-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full animate-ping"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Rocket className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              🚀 Prototyping & AI Tools
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality with smart prototyping and powerful AI tools
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is a Prototype Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is a Prototype?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong className="text-green-600">prototype</strong> is an early sample or mock-up of a product that helps communicate how it works and looks. It allows entrepreneurs to test their idea's functionality, appearance, and user experience before developing the final version.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">Gather user feedback</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-emerald-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700 font-medium">Demonstrate potential to stakeholders</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-teal-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700 font-medium">Identify design improvements early</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
               
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Prototype Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Test before you build",
                    "Save time and money", 
                    "Get early feedback",
                    "Improve your idea"
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300 ${
                        visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-green-600" />
                        <p className="text-gray-700 font-medium">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Prototypes */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Prototypes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right level of detail for your stage of development
            </p>
          </div>

          {/* Featured Prototype (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${prototypeTypes[currentPrototype].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center justify-center bg-white/20 rounded-full p-4">
                    {prototypeTypes[currentPrototype].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-3">{prototypeTypes[currentPrototype].type}</h3>
                    <p className="text-lg opacity-90 mb-3">{prototypeTypes[currentPrototype].description}</p>
                    <div className="bg-white/20 rounded-lg p-3 mb-2">
                      <p className="text-sm font-medium">Benefits: {prototypeTypes[currentPrototype].benefits}</p>
                    </div>
                    <div className="text-sm opacity-80">{prototypeTypes[currentPrototype].example}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Prototype Types Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {prototypeTypes.map((prototype, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${prototype.bgColor} border-2 ${prototype.borderColor} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentPrototype === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentPrototype(index)}
              >
                <div className={`bg-gradient-to-r ${prototype.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {prototype.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{prototype.type}</h3>
                <p className="text-gray-600 text-center mb-4">{prototype.description}</p>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-sm text-gray-700 font-medium text-center">{prototype.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                AI Tools for Prototyping
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supercharge your prototype creation with these powerful AI tools
            </p>
          </div>

          {/* Featured AI Tool (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Tool Spotlight</div>
              <div className={`${aiTools[activeAITool].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {aiTools[activeAITool].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{aiTools[activeAITool].name}</h3>
                    <p className="text-xl opacity-90 mb-3">{aiTools[activeAITool].purpose}</p>
                    <p className="text-sm opacity-80">{aiTools[activeAITool].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:h-[300px] gap-6">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeAITool === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 6) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 150}ms` }}
                onClick={() => setActiveAITool(index)}
              >
                <div className={`${tool.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tool.name}</h3>
                <p className="text-sm text-green-600 font-semibold mb-3">{tool.purpose}</p>
                <p className="text-xs text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Prototyping Journey
            </h2>
            <p className="text-gray-600 mt-2">Follow these steps to create amazing prototypes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Start Low-Fi",
                description: "Sketch your ideas on paper first",
                icon: <Pencil className="w-6 h-6" />
              },
              {
                step: "2", 
                title: "Go Digital",
                description: "Use AI tools to create mid-fi designs",
                icon: <Monitor className="w-6 h-6" />
              },
              {
                step: "3",
                title: "Make it Interactive", 
                description: "Build high-fi prototypes for testing",
                icon: <Zap className="w-6 h-6" />
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
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Prototyping helps you test and improve ideas before building the final product. Start simple, use AI tools to speed up the process, and always gather feedback!
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Prototype</strong> → 
                <strong className="text-emerald-600"> Test</strong> → 
                <strong className="text-teal-600"> Improve</strong> → 
                <strong className="text-green-700"> Success! </strong>
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

export default Module5Prototyping;