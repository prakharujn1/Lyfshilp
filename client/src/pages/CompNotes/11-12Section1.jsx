import React, { useState, useEffect } from 'react';
import { Brain, Lightbulb, Eye, MessageCircle, Navigation, Music, ShoppingCart, Car, Home, ArrowRight, CheckCircle, Star, Zap, Target, Users, Clock, Award } from 'lucide-react';

const Module1AIIntro = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentExample, setCurrentExample] = useState(0);
  const [activeCharacteristic, setActiveCharacteristic] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const characteristics = [
    {
      title: "Learning (Machine Learning)",
      description: "AI systems can improve their performance over time by analyzing data and identifying patterns.",
      example: "YouTube learns your preferences and suggests videos you'll actually want to watch",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Reasoning",
      description: "AI can draw logical conclusions from available information and make inferences.",
      example: "Google reasons through location, time, and preferences when you search 'best pizza near me'",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Problem-Solving",
      description: "AI can analyze complex situations and find optimal solutions.",
      example: "AI travel planners create optimized itineraries considering budget, weather, and preferences",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Perception",
      description: "AI can interpret and understand sensory information like images, sounds, and text.",
      example: "Bank apps can 'see' and read checks when you deposit them using your phone camera",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Natural Language Processing",
      description: "AI can understand, interpret, and generate human language.",
      example: "Voice assistants understand complex questions and respond naturally",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-emerald-600 to-green-500"
    }
  ];

  const realWorldExamples = [
    {
      category: "Social Media",
      title: "Instagram Feed Curation",
      description: "AI personalizes your feed based on your behavior, interests, and social connections",
      icon: <Users className="w-12 h-12" />,
      features: ["Analyzes your past likes", "Tracks time spent on content", "Considers friend interactions"]
    },
    {
      category: "Entertainment",
      title: "Netflix Recommendations",
      description: "AI suggests movies and shows based on complex viewing patterns and preferences",
      icon: <Star className="w-12 h-12" />,
      features: ["Viewing pattern analysis", "Completion rate tracking", "Personalized thumbnails"]
    },
    {
      category: "Navigation",
      title: "Google Maps Traffic",
      description: "AI predicts traffic and suggests optimal routes using real-time data",
      icon: <Navigation className="w-12 h-12" />,
      features: ["Real-time traffic analysis", "Historical pattern recognition", "Event-based predictions"]
    },
    {
      category: "E-commerce",
      title: "Amazon Shopping",
      description: "AI predicts what you'll buy and optimizes the entire shopping experience",
      icon: <ShoppingCart className="w-12 h-12" />,
      features: ["Predictive shipping", "Dynamic pricing", "Personalized recommendations"]
    }
  ];

  const aiTypes = [
    {
      type: "Narrow AI (Weak AI)",
      description: "AI designed for specific tasks. All current AI applications fall into this category.",
      examples: "Chess programs, translators, recommendation systems",
      status: "Current Reality",
      color: "bg-green-100 border-green-300"
    },
    {
      type: "General AI (Strong AI)",
      description: "Hypothetical AI that could perform any intellectual task that a human can do.",
      examples: "Human-level AI that can learn any skill",
      status: "Future Goal",
      color: "bg-emerald-100 border-emerald-300"
    },
    {
      type: "Artificial Superintelligence",
      description: "AI that surpasses human intelligence in all areas.",
      examples: "Beyond human capabilities in every domain",
      status: "Theoretical",
      color: "bg-teal-100 border-teal-300"
    }
  ];

  return (
    <div
      id="s-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-1"] = el;
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
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Introduction to Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the fascinating world of AI and how it's already transforming your daily life
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is AI Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Artificial Intelligence?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Artificial Intelligence (AI)</strong> is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that typically require human intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Learning from experience", "Reasoning through problems", "Understanding language", "Making decisions"].map((task, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Think of Your Brain</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Learns new skills</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Solves problems</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Recognizes patterns</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-semibold">AI aims to give computers these same abilities!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Characteristics */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Core Characteristics of AI Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding what makes AI systems intelligent and powerful
            </p>
          </div>
          
          {/* Featured Characteristic (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${characteristics[activeCharacteristic].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{characteristics[activeCharacteristic].icon}</div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{characteristics[activeCharacteristic].title}</h3>
                    <p className="text-lg opacity-90 mb-4">{characteristics[activeCharacteristic].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm"><strong>Example:</strong> {characteristics[activeCharacteristic].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Characteristics Grid */}
          <div className="grid md:grid-cols-5 gap-6">
            {characteristics.map((char, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeCharacteristic === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setActiveCharacteristic(index)}
              >
                <div className="text-green-600 flex justify-center mb-4">
                  {char.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{char.title.split(' ')[0]}</h3>
                <p className="text-sm text-gray-600">{char.title.includes('(') ? char.title.match(/\((.*?)\)/)[1] : char.title.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              AI in Your Daily Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You interact with AI systems dozens of times daily, often without realizing it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realWorldExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 5) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 5) * 200}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                    <div className="text-green-600">
                      {example.icon}
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-semibold mb-2">{example.category}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{example.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                </div>
                <div className="space-y-2">
                  {example.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Application Examples */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Deep Dive: How AI Works Behind the Scenes
          </h2>
          
          <div className="space-y-8">
            {/* Netflix Example */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-red-100 rounded-full p-3">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Netflix's Recommendation Engine</h3>
              </div>
              <p className="text-gray-700 mb-6">Netflix doesn't just look at what you've watched. Its AI considers multiple factors:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-gray-800 mb-2">Viewing Patterns</h4>
                    <p className="text-sm text-gray-600">Do you binge-watch or watch one episode at a time?</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <h4 className="font-semibold text-gray-800 mb-2">Time Analysis</h4>
                    <p className="text-sm text-gray-600">When you pause, rewind, or skip scenes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <h4 className="font-semibold text-gray-800 mb-2">Similar Users</h4>
                    <p className="text-sm text-gray-600">People with similar tastes and what they enjoyed</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-gray-800 mb-2">Content Analysis</h4>
                    <p className="text-sm text-gray-600">Understanding genres, actors, directors, and mood</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                <p className="text-green-800 font-semibold">🎯 Advanced Feature: Netflix creates personalized thumbnails based on your preferences!</p>
              </div>
            </div>

            {/* Google Maps Example */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <Navigation className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Google Maps Traffic Prediction</h3>
              </div>
              <p className="text-gray-700 mb-6">Google Maps doesn't just show current traffic; it predicts future traffic by analyzing:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Real-time Data</h4>
                  <p className="text-sm text-gray-600">Speed data from millions of Android phones</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Historical Patterns</h4>
                  <p className="text-sm text-gray-600">Knowing certain roads are busy at 5 PM</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏟️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Event Correlation</h4>
                  <p className="text-sm text-gray-600">Traffic increases near stadiums during games</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of AI */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the different levels of artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiTypes.map((type, index) => (
              <div
                key={index}
                className={`${type.color} rounded-2xl p-6 border-2 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 200}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-4">
                    {index === 0 ? '🤖' : index === 1 ? '🧠' : '🚀'}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{type.type}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    index === 0 ? 'bg-green-200 text-green-800' : 
                    index === 1 ? 'bg-emerald-200 text-emerald-800' : 
                    'bg-teal-200 text-teal-800'
                  }`}>
                    {type.status}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{type.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-600"><strong>Examples:</strong> {type.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why AI Matters */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Why AI Matters in Today's World
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Efficiency & Automation", desc: "Handles repetitive tasks", icon: <Zap className="w-6 h-6" /> },
              { title: "Personalization", desc: "Customized experiences for each user", icon: <Target className="w-6 h-6" /> },
              { title: "Problem-Solving at Scale", desc: "Analyzes vast amounts of data", icon: <Brain className="w-6 h-6" /> },
              { title: "24/7 Availability", desc: "Works continuously without breaks", icon: <Clock className="w-6 h-6" /> }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-green-600">{benefit.icon}</div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Key Takeaways
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "AI is everywhere: You interact with AI systems dozens of times daily",
              "AI learns and improves: Unlike traditional software, AI systems get better with use",
              "AI enhances human capabilities: Rather than replacing humans, AI augments our abilities",
              "AI is data-driven: The quality and quantity of data directly impact AI performance",
              "AI is rapidly evolving: New applications emerge constantly, opening exciting opportunities"
            ].map((takeaway, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{takeaway}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 font-medium">
                <strong className="text-green-600">Remember:</strong> Artificial Intelligence is not magic—it's sophisticated mathematics and computer science working together to create systems that can learn, reason, and make decisions. Understanding AI helps you become a more informed digital citizen and opens doors to exciting career opportunities in the future.
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

export default Module1AIIntro;