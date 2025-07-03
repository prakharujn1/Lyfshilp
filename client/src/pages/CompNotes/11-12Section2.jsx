import React, { useState, useEffect } from 'react';
import { 
  Brain, Bot, Target, Eye, Clock, Database, 
  Lightbulb, Zap, CheckCircle, ArrowRight, 
  Smartphone, Car, Music, Languages, 
  ChevronDown, ChevronUp, Star, Trophy,
  BookOpen, MessageCircle, Navigation,
  Cpu, Heart, User, Users
} from 'lucide-react';

const Module2AITypes = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentExample, setCurrentExample] = useState(0);
  const [activeTab, setActiveTab] = useState('capabilities');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate examples
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const narrowAIExamples = [
    {
      name: "Google Translate",
      icon: <Languages className="w-8 h-8" />,
      description: "Master of 100+ languages",
      whatItDoes: "Instantly translates text between languages with remarkable accuracy",
      whatItCannot: "Cannot play chess, recommend movies, or solve math problems",
      scenario: "Can translate 'Good morning' to Japanese, but asks it '2+2' and it will translate the question instead of solving it"
    },
    {
      name: "Tesla Autopilot", 
      icon: <Car className="w-8 h-8" />,
      description: "The ultimate driving expert",
      whatItDoes: "Navigates highways, changes lanes, parks cars, responds to traffic",
      whatItCannot: "Cannot help write essays, play music, or order food online",
      scenario: "Can safely drive 500 miles on highway, but can't suggest what movie to watch during breaks"
    },
    {
      name: "Spotify AI",
      icon: <Music className="w-8 h-8" />,
      description: "Your personal music curator",
      whatItDoes: "Analyzes listening history and suggests songs you might enjoy",
      whatItCannot: "Cannot help with homework, navigate roads, or translate languages", 
      scenario: "Knows you love indie rock, but can't help you write a history essay"
    },
    {
      name: "IBM Watson",
      icon: <Trophy className="w-8 h-8" />,
      description: "The quiz champion",
      whatItDoes: "Answered complex trivia questions and defeated human champions",
      whatItCannot: "Cannot diagnose medical conditions or manage your calendar",
      scenario: "Could answer 'Who wrote Pride and Prejudice?' instantly, but couldn't plan a dinner party"
    }
  ];

  const functionalityTypes = [
    {
      type: "Reactive Machines",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      description: "Lives only in the present moment",
      characteristics: ["No memory", "Same input = same output", "Cannot learn", "Present-focused"],
      example: "Deep Blue Chess Computer",
      realWorld: "Like a calculator - gives perfect answers but never remembers yesterday's calculations"
    },
    {
      type: "Limited Memory AI", 
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-500",
      description: "Learns from the past to improve",
      characteristics: ["Uses past data", "Improves over time", "Remembers patterns", "Task-specific memory"],
      example: "Netflix Recommendations, Tesla Autopilot",
      realWorld: "Like a friend who remembers your preferences and gets better at suggesting things you like"
    },
    {
      type: "Theory of Mind AI",
      icon: <Heart className="w-8 h-8" />,
      color: "from-teal-400 to-green-500", 
      description: "Understands emotions and thoughts",
      characteristics: ["Emotional intelligence", "Predicts behavior", "Social awareness", "Empathetic responses"],
      example: "Still in development",
      realWorld: "Like an empathetic friend who reads your mood and adapts accordingly"
    },
    {
      type: "Self-Aware AI",
      icon: <User className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      description: "Conscious and self-reflecting",
      characteristics: ["Has consciousness", "Self-reflection", "Personal preferences", "Existential awareness"],
      example: "Purely theoretical",
      realWorld: "Like a conscious being that thinks 'I think, therefore I am' and truly understands it"
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Types of Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover how AI systems think, learn, and solve problems - from today's narrow specialists to tomorrow's general intelligence
            </p>
            <div className="flex justify-center space-x-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span className="text-sm">Visual Learning</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Interactive Examples</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction with Friend Analogy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Think of Three Friends
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-800">Friend 1: The Specialist</h3>
                </div>
                <p className="text-gray-700">Math genius but struggles with creative writing</p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-400 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-800">Friend 2: The All-Rounder</h3>
                </div>
                <p className="text-gray-700">Good at math, writing, and giving life advice</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-6 border-l-4 border-teal-400 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-800">Friend 3: The Genius</h3>
                </div>
                <p className="text-gray-700">Solves any problem better than anyone else</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">This is exactly how we classify AI!</h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    AI systems have different <strong className="text-green-600">strengths</strong> and <strong className="text-emerald-600">limitations</strong>, just like people do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classification Overview */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Two Ways to Classify AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We can understand AI by asking two simple questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeTab === 'capabilities' ? 'border-green-400 ring-4 ring-green-200' : 'border-green-200'
              }`}
              onClick={() => setActiveTab('capabilities')}
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4 w-fit">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Based on Capabilities</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-green-600">"What can this AI actually do?"</strong>
                </p>
                <p className="text-gray-600 mt-2">How smart is it compared to humans?</p>
              </div>
            </div>
            
            <div 
              className={`bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeTab === 'functionality' ? 'border-emerald-400 ring-4 ring-emerald-200' : 'border-emerald-200'
              }`}
              onClick={() => setActiveTab('functionality')}
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-4 mx-auto mb-4 w-fit">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Based on Functionality</h3>
                <p className="text-gray-700 text-lg">
                  <strong className="text-emerald-600">"How does this AI think?"</strong>
                </p>
                <p className="text-gray-600 mt-2">How does it process information and remember?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content Based on Tab */}
        {activeTab === 'capabilities' && (
          <>
            {/* Narrow AI Section */}
            <div className="space-y-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Narrow AI - The Specialist
                  </h2>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
                  <p className="text-xl text-gray-700 mb-4">
                    <strong className="text-green-600">The only AI that exists today!</strong> 
                    Like a world-class surgeon who can perform complex operations but can't cook a simple meal.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-green-600 mb-2">✅ Can Do</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Masters one specific task</li>
                        <li>• Incredible accuracy in its domain</li>
                        <li>• Works within defined boundaries</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-red-600 mb-2">❌ Cannot Do</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Transfer knowledge to other tasks</li>
                        <li>• Understand the broader world</li>
                        <li>• Adapt beyond its training</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Examples Carousel */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Real-World Examples
                  </h3>
                  <p className="text-gray-600">See how narrow AI works in your daily life</p>
                </div>

                {/* Featured Example */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-l-4 border-green-400">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 text-white">
                      {narrowAIExamples[currentExample].icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{narrowAIExamples[currentExample].name}</h4>
                      <p className="text-lg text-gray-600">{narrowAIExamples[currentExample].description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-100 rounded-lg p-6">
                      <h5 className="font-bold text-green-700 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        What it DOES
                      </h5>
                      <p className="text-gray-700">{narrowAIExamples[currentExample].whatItDoes}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-6">
                      <h5 className="font-bold text-red-700 mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        What it CANNOT do
                      </h5>
                      <p className="text-gray-700">{narrowAIExamples[currentExample].whatItCannot}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-3">🎯 Real Scenario:</h5>
                    <p className="text-gray-700 italic">{narrowAIExamples[currentExample].scenario}</p>
                  </div>
                </div>

                {/* Example Navigation */}
                <div className="flex justify-center space-x-4">
                  {narrowAIExamples.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentExample === index ? 'bg-green-500 scale-125' : 'bg-gray-300'
                      }`}
                      onClick={() => setCurrentExample(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* General AI Section */}
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-400">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      General AI - The All-Rounder
                    </h2>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                    <p className="text-xl text-gray-700 mb-4">
                      <strong className="text-emerald-600">Doesn't exist yet!</strong> Would be like having a brilliant human friend available 24/7.
                    </p>
                    <div className="text-6xl mb-4">🤔</div>
                    <p className="text-gray-600">This is what researchers are working towards...</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">What General AI would do:</h4>
                    <div className="space-y-3">
                      {[
                        "Drive you to work while discussing your presentation",
                        "Help your child with math homework", 
                        "Plan and cook dinner based on dietary preferences",
                        "Analyze business strategy and provide insights",
                        "Create artwork for your home",
                        "Have meaningful philosophical discussions"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Key Characteristics:</h4>
                    <div className="space-y-4">
                      {[
                        { icon: <Brain className="w-5 h-5" />, text: "Human-level intelligence in ALL areas" },
                        { icon: <ArrowRight className="w-5 h-5" />, text: "Transfer learning between domains" },
                        { icon: <Lightbulb className="w-5 h-5" />, text: "Reasoning, creativity, problem-solving" },
                        { icon: <Eye className="w-5 h-5" />, text: "Consciousness and self-awareness" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="text-emerald-600">{item.icon}</div>
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Super AI Section */}
            <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-teal-400">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-full p-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Super AI - The Superior Intelligence
                  </h2>
                </div>
                
                <div className="text-6xl mb-6">🚀</div>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  <strong className="text-teal-600">Purely theoretical!</strong> Would surpass human intelligence in every aspect - creativity, problem-solving, emotional intelligence, and wisdom.
                </p>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">What Super AI might achieve:</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: "🌍", title: "Solve Climate Change", desc: "Find solutions we can't imagine" },
                      { icon: "🧬", title: "Cure All Diseases", desc: "Unlock medical mysteries" },
                      { icon: "🌌", title: "Understand Universe", desc: "Answer fundamental questions" }
                    ].map((item, index) => (
                      <div key={index} className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h5 className="font-bold text-gray-800 mb-2">{item.title}</h5>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'functionality' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                How AI Processes Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding how different AI systems think, remember, and make decisions
              </p>
            </div>

            <div className="grid gap-8">
              {functionalityTypes.map((type, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                    visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <div className={`bg-gradient-to-r ${type.color} rounded-full p-4 mx-auto lg:mx-0 w-fit mb-4 text-white`}>
                        {type.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{type.type}</h3>
                      <p className="text-lg text-gray-700 mb-6">{type.description}</p>
                      <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 border-l-4 border-green-400">
                        <p className="text-gray-600 italic">{type.realWorld}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                          <h4 className="font-bold text-gray-800 mb-4">Key Characteristics:</h4>
                          <div className="space-y-2">
                            {type.characteristics.map((char, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <p className="text-gray-700">{char}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                          <h4 className="font-bold text-gray-800 mb-4">Examples:</h4>
                          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                            <p className="text-gray-700 font-medium">{type.example}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Current Reality Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Where We Are Today
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Current Reality
              </h4>
              <div className="space-y-4">
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-gray-700 font-medium mb-2">✅ All existing AI is:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Narrow AI with Limited Memory capabilities</li>
                    <li>• Specialized in specific tasks only</li>
                    <li>• Learning from past data within their domain</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-300">
                  <p className="text-gray-700 font-medium mb-2">❌ We have NO:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• General AI</li>
                    <li>• Theory of Mind AI</li>
                    <li>• Self-Aware AI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-2" />
                AI in Your Daily Life
              </h4>
              <div className="space-y-3">
                {[
                  { icon: <Smartphone className="w-5 h-5" />, text: "Smartphone AI: Learns your usage patterns" },
                  { icon: <MessageCircle className="w-5 h-5" />, text: "Social media feeds: Learns your preferences" },
                  { icon: <Target className="w-5 h-5" />, text: "Shopping recommendations: Remembers purchases" },
                  { icon: <Music className="w-5 h-5" />, text: "Voice assistants: Context within conversations" },
                  { icon: <Navigation className="w-5 h-5" />, text: "GPS navigation: Learns traffic patterns" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-green-600">{item.icon}</div>
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Looking Forward</h4>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                The journey from <strong className="text-green-600">Narrow AI</strong> to <strong className="text-emerald-600">General AI</strong> represents one of the greatest challenges in technology and science. While we've made remarkable progress in specific domains, creating AI that matches human versatility and understanding remains a distant goal.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Learning Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Test Your Understanding
              </h2>
            </div>
            <p className="text-gray-600">Interactive challenges to reinforce your learning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge 1 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
              <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 Challenge 1: Identify the AI Type</h4>
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <p className="text-gray-700 mb-3">
                  <strong>Scenario:</strong> Your Netflix app suggests movies based on what you've watched before and keeps getting better at recommendations.
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'a', text: 'Reactive Machine', correct: false },
                    { id: 'b', text: 'Limited Memory AI', correct: true },
                    { id: 'c', text: 'Theory of Mind AI', correct: false },
                    { id: 'd', text: 'Self-Aware AI', correct: false }
                  ].map((option) => (
                    <button
                      key={option.id}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all duration-200"
                      onClick={() => {
                        const buttons = document.querySelectorAll(`[data-challenge="1"]`);
                        buttons.forEach(btn => {
                          btn.classList.remove('bg-green-100', 'bg-red-100', 'border-green-400', 'border-red-400');
                          if (btn.getAttribute('data-correct') === 'true') {
                            btn.classList.add('bg-green-100', 'border-green-400');
                            btn.innerHTML += ' ✅';
                          } else {
                            btn.classList.add('bg-red-100', 'border-red-400');
                            btn.innerHTML += ' ❌';
                          }
                        });
                      }}
                      data-challenge="1"
                      data-correct={option.correct}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-400">
              <h4 className="text-lg font-bold text-gray-800 mb-4">🧠 Challenge 2: Capability Classification</h4>
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <p className="text-gray-700 mb-3">
                  <strong>Scenario:</strong> An AI that can drive cars, write poetry, solve math problems, and give relationship advice - all with human-level performance.
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'a', text: 'Narrow AI', correct: false },
                    { id: 'b', text: 'General AI', correct: true },
                    { id: 'c', text: 'Super AI', correct: false },
                    { id: 'd', text: 'Current AI', correct: false }
                  ].map((option) => (
                    <button
                      key={option.id}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200"
                      onClick={() => {
                        const buttons = document.querySelectorAll(`[data-challenge="2"]`);
                        buttons.forEach(btn => {
                          btn.classList.remove('bg-green-100', 'bg-red-100', 'border-green-400', 'border-red-400');
                          if (btn.getAttribute('data-correct') === 'true') {
                            btn.classList.add('bg-green-100', 'border-green-400');
                            btn.innerHTML += ' ✅';
                          } else {
                            btn.classList.add('bg-red-100', 'border-red-400');
                            btn.innerHTML += ' ❌';
                          }
                        });
                      }}
                      data-challenge="2"
                      data-correct={option.correct}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
            <div className="text-2xl mb-2">🎓</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Quick Tip for Remembering</h4>
            <p className="text-gray-700">
              <strong className="text-green-600">Narrow AI</strong> = Today's specialists (like your apps) | 
              <strong className="text-emerald-600"> General AI</strong> = Future all-rounders (like humans) | 
              <strong className="text-teal-600"> Super AI</strong> = Theoretical super-humans
            </p>
          </div>
        </div>

        {/* Key Takeaways Summary */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📚</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Takeaways</h2>
              <p className="text-xl text-green-100">What you should remember from this module</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "AI Classification",
                  points: [
                    "Two main ways: Capabilities & Functionality",
                    "Each classification answers different questions",
                    "Helps understand AI limitations and strengths"
                  ]
                },
                {
                  icon: <Bot className="w-8 h-8" />,
                  title: "Current AI Reality",
                  points: [
                    "All existing AI is Narrow AI",
                    "Specialists in specific domains only",
                    "Cannot transfer knowledge between tasks"
                  ]
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Future Possibilities",
                  points: [
                    "General AI: Human-level versatility",
                    "Super AI: Beyond human capabilities",
                    "Theory of Mind: Emotional understanding"
                  ]
                }
              ].map((takeaway, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center mb-4">
                    <div className="bg-white/20 rounded-full p-3 mx-auto w-fit mb-3">
                      {takeaway.icon}
                    </div>
                    <h4 className="text-xl font-bold">{takeaway.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {takeaway.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-200 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-green-100 text-sm">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
                <p className="text-lg text-green-100 leading-relaxed">
                  Understanding AI types helps us set realistic expectations about what current AI can do and envision the possibilities that lie ahead. Remember: we're still in the early days of the AI revolution!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
          <div className="text-4xl mb-6">🚀</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ready for More?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            You've mastered the types of AI! Next, we'll explore how AI systems actually learn and make decisions in the real world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg px-6 py-3 border-l-4 border-green-400">
              <p className="text-gray-700 font-medium">Coming up: Machine Learning Fundamentals</p>
            </div>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg px-6 py-3 border-l-4 border-emerald-400">
              <p className="text-gray-700 font-medium">Then: Neural Networks & Deep Learning</p>
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

export default Module2AITypes;