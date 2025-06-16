import React, { useState, useEffect } from 'react';
import { 
  Brain, Target, Zap, Eye, Clock, Database, 
  ChevronRight, Star, Trophy, Gamepad2, Car, 
  MessageSquare, Lightbulb, Cpu, Network, 
  ArrowRight, Play, Pause, RotateCcw, CheckCircle,
  Sparkles, Rocket, Shield, Crown
} from 'lucide-react';

const Module2 = ({ topicRefs }) => {
  const [activeTab, setActiveTab] = useState('capabilities');
  const [selectedAI, setSelectedAI] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateCards(true), 500);
  }, []);

  const narrowAIExamples = [
    {
      icon: MessageSquare,
      title: "Google Translate",
      description: "Can translate between 100+ languages but cannot play chess or recommend movies",
      gradient: "from-blue-500 to-cyan-500",
      features: ["100+ Languages", "Real-time Translation", "Text & Voice"],
      limitation: "Cannot transfer knowledge to other tasks"
    },
    {
      icon: Brain,
      title: "Siri/Alexa",
      description: "Great at voice recognition and basic tasks but cannot drive a car or diagnose diseases",
      gradient: "from-purple-500 to-pink-500",
      features: ["Voice Recognition", "Smart Home Control", "Basic Q&A"],
      limitation: "Limited to predefined capabilities"
    },
    {
      icon: Trophy,
      title: "Chess AI (Deep Blue)",
      description: "Can beat world champions at chess but cannot play checkers or solve math problems",
      gradient: "from-green-500 to-emerald-500",
      features: ["Strategic Thinking", "Pattern Recognition", "Game Mastery"],
      limitation: "Single-domain expertise only"
    },
    {
      icon: Star,
      title: "Recommendation Systems",
      description: "Netflix knows what movies you'll like but cannot help with your homework",
      gradient: "from-red-500 to-orange-500",
      features: ["Personal Preferences", "Pattern Analysis", "Content Matching"],
      limitation: "Cannot assist with unrelated tasks"
    }
  ];

  const functionalityTypes = [
    {
      icon: Target,
      title: "Reactive Machines",
      description: "Respond to current situations without memory of past events",
      example: "IBM's Deep Blue",
      exampleDesc: "The chess computer that beat Garry Kasparov in 1997. It analyzed millions of moves but didn't learn from previous games.",
      color: "bg-red-500",
      status: "Current Technology",
      capabilities: ["Real-time Response", "No Memory", "Task-Specific"]
    },
    {
      icon: Clock,
      title: "Limited Memory AI",
      description: "Use past experiences to make current decisions",
      example: "Self-driving Cars",
      exampleDesc: "Tesla's Autopilot remembers road patterns, traffic behaviors, and driving conditions to make better decisions.",
      color: "bg-blue-500",
      status: "Current Technology",
      capabilities: ["Past Experience", "Pattern Learning", "Context Awareness"]
    },
    {
      icon: Eye,
      title: "Theory of Mind AI",
      description: "Understand that others have beliefs, intentions, and emotions different from their own",
      example: "Future AI Assistants",
      exampleDesc: "AI that could understand human emotions and respond with empathy and social awareness.",
      color: "bg-purple-500",
      status: "In Development",
      capabilities: ["Emotional Intelligence", "Social Awareness", "Empathy"]
    },
    {
      icon: Sparkles,
      title: "Self-Aware AI",
      description: "Have consciousness and self-awareness like humans",
      example: "Theoretical Concept",
      exampleDesc: "AI that would have consciousness, self-reflection, and genuine understanding of its own existence.",
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
      status: "Theoretical",
      capabilities: ["Consciousness", "Self-Reflection", "Existential Awareness"]
    }
  ];

  const capabilityLevels = [
    {
      icon: Target,
      title: "Narrow AI",
      subtitle: "(Weak AI)",
      description: "AI designed for specific, limited tasks. This is the only type that currently exists.",
      status: "Current Reality",
      color: "from-green-400 to-blue-500",
      examples: ["Google Translate", "Chess AI", "Face Recognition"],
      strength: "Excellent at specific tasks",
      limitation: "Cannot transfer knowledge between domains"
    },
    {
      icon: Brain,
      title: "General AI",
      subtitle: "(Strong AI)",
      description: "Hypothetical AI that can understand, learn, and apply knowledge across different domains like humans.",
      status: "Under Development",
      color: "from-purple-400 to-pink-500",
      examples: ["Human-like reasoning", "Cross-domain learning", "Consciousness"],
      strength: "Would match human cognitive abilities",
      limitation: "Doesn't exist yet - still being researched"
    },
    {
      icon: Crown,
      title: "Super AI",
      subtitle: "(Artificial Superintelligence)",
      description: "Hypothetical AI that would surpass human intelligence in all aspects.",
      status: "Theoretical",
      color: "from-yellow-400 to-red-500",
      examples: ["Beyond human capabilities", "Scientific breakthroughs", "Universal problem solving"],
      strength: "Would exceed all human cognitive abilities",
      limitation: "Purely theoretical - may never exist"
    }
  ];

  return (
    <div
      id="m-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-2"] = el;
        }
      }}
      className="mb-12"
    >
       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <Network className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">2</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Types of
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover the different categories of AI - from today's specialized systems to tomorrow's possibilities
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('capabilities')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'capabilities'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  By Capabilities
                </button>
                <button
                  onClick={() => setActiveTab('functionality')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'functionality'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  By Functionality
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Tab Content */}
        {activeTab === 'capabilities' && (
          <div className="space-y-16">
            {/* Capability Levels Overview */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Classification by Capabilities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding the three main levels of AI development - from today's reality to future possibilities
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {capabilityLevels.map((level, index) => (
                  <div
                    key={index}
                    className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer border border-gray-100 overflow-hidden ${
                      animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <level.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{level.title}</h3>
                          <p className="text-sm text-purple-600 font-medium">{level.subtitle}</p>
                        </div>
                      </div>

                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        level.status === 'Current Reality' ? 'bg-green-100 text-green-700' :
                        level.status === 'Under Development' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {level.status}
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">{level.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Strength
                          </h4>
                          <p className="text-sm text-gray-600 pl-6">{level.strength}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Examples</h4>
                          <div className="flex flex-wrap gap-2 pl-2">
                            {level.examples.map((example, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-xs text-gray-500 italic">{level.limitation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrow AI Deep Dive */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                    Narrow AI in Action
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    The only type of AI that exists today - specialized systems that excel at specific tasks
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {narrowAIExamples.map((ai, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-200 cursor-pointer"
                      onClick={() => setSelectedAI(selectedAI === index ? null : index)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${ai.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <ai.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{ai.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{ai.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {ai.features.map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className={`overflow-hidden transition-all duration-300 ${
                            selectedAI === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                              <p className="text-red-700 text-xs font-medium">
                                <strong>Limitation:</strong> {ai.limitation}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <span className="text-xs text-gray-500">Click to learn more</span>
                            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                              selectedAI === index ? 'rotate-90' : ''
                            }`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Key Insight</h4>
                      <p className="text-gray-700 leading-relaxed">
                        All current AI systems are <strong>Narrow AI</strong>. They're incredibly good at their specific tasks but can't apply their knowledge to different domains. This is why your chess-playing AI can't help you with language translation!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Functionality Tab Content */}
        {activeTab === 'functionality' && (
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Classification by Functionality
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding how AI systems process information and learn from experience
              </p>
            </div>

            <div className="space-y-8">
              {functionalityTypes.map((type, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                    animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 sm:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center`}>
                          <type.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{type.title}</h3>
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                            type.status === 'Current Technology' ? 'bg-green-100 text-green-700' :
                            type.status === 'In Development' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {type.status}
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed mb-6">{type.description}</p>

                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Key Capabilities:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {type.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-700">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 flex flex-col justify-center">
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Rocket className="w-6 h-6 text-purple-600" />
                          <h4 className="font-bold text-gray-900">Real-World Example</h4>
                        </div>
                        <h5 className="text-lg font-semibold text-purple-600 mb-2">{type.example}</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{type.exampleDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>
            
            <div className="relative text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">From Narrow to General AI</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                We've explored the current landscape of AI types. Next, we'll dive into the fascinating world of machine learning - the technology that powers modern AI systems!
              </p>
              
              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="text-white font-medium">Continue to Module 3: How AI Learns</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Module2;