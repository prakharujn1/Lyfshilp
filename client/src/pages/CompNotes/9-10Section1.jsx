import React, { useState, useEffect } from 'react';
import { Brain, Smartphone, Camera, Music, ShoppingCart, MapPin, Zap, Eye, MessageCircle, Star, ArrowRight, Lightbulb, Cpu, Network, Users } from 'lucide-react';

const Module1 = ({ topicRefs }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const characteristics = [
    { icon: Brain, title: "Learning", desc: "AI can improve its performance over time", color: "bg-purple-500" },
    { icon: Lightbulb, title: "Reasoning", desc: "AI can draw conclusions from available information", color: "bg-blue-500" },
    { icon: Cpu, title: "Problem-solving", desc: "AI can find solutions to complex challenges", color: "bg-green-500" },
    { icon: Eye, title: "Perception", desc: "AI can interpret and understand sensory data", color: "bg-orange-500" },
    { icon: MessageCircle, title: "Language processing", desc: "AI can understand and generate human language", color: "bg-pink-500" }
  ];

  const socialMediaExamples = [
    { icon: Camera, title: "Instagram/Facebook Feed", desc: "AI algorithms decide which posts appear first based on your interests", gradient: "from-pink-500 to-purple-600" },
    { icon: Smartphone, title: "Face Unlock", desc: "Your phone uses AI to recognize your face among billions of possibilities", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Photo Tagging", desc: "AI recognizes and identifies faces in your photos automatically", gradient: "from-green-500 to-teal-500" }
  ];

  const entertainmentExamples = [
    { icon: Star, title: "Netflix Recommendations", desc: "AI analyzes your viewing history to suggest content you'll love", platform: "Netflix", color: "bg-red-600" },
    { icon: Music, title: "Spotify Discover Weekly", desc: "AI creates personalized playlists based on your music taste", platform: "Spotify", color: "bg-green-600" },
    { icon: Star, title: "YouTube Recommendations", desc: "AI learns from your watch history to suggest relevant videos", platform: "YouTube", color: "bg-red-500" }
  ];

  const otherExamples = [
    { icon: ShoppingCart, title: "Amazon Recommendations", desc: "\"Customers who bought this also bought...\" uses AI pattern analysis", color: "bg-orange-500" },
    { icon: MapPin, title: "Google Maps", desc: "AI analyzes real-time traffic data to suggest fastest routes", color: "bg-blue-600" },
    { icon: MessageCircle, title: "Customer Chatbots", desc: "AI provides instant customer service on websites", color: "bg-purple-600" }
  ];

  return (
    <div
      id="m-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-1"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Brain className="w-20 h-20 text-white animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to the World of
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover how AI is already transforming your daily life and shaping the future of technology
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* What is AI Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What is Artificial Intelligence?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Artificial Intelligence (AI)</strong> is the science of making computers and machines perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, and recognizing patterns.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <strong>Think of it this way:</strong> If a regular computer is like a very fast calculator that follows exact instructions, AI is like giving that computer the ability to think, learn from experience, and make decisions on its own.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-32 h-32 text-purple-600" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Key Characteristics of AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characteristics.map((char, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`w-12 h-12 ${char.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <char.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{char.title}</h3>
                <p className="text-gray-600 leading-relaxed">{char.desc}</p>
                <div className={`mt-4 transform transition-all duration-300 ${activeCard === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'}`}>
                  <ArrowRight className="w-5 h-5 text-purple-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Examples Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Real-World Examples You Encounter Daily
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI isn't just in science fiction movies - it's already part of your everyday life!
          </p>
        </div>

        {/* Social Media Examples */}
        <div className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Smartphones and Social Media</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {socialMediaExamples.map((example, index) => (
                <div key={index} className={`bg-gradient-to-br ${example.gradient} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300`}>
                  <example.icon className="w-8 h-8 mb-4" />
                  <h4 className="text-lg font-bold mb-2">{example.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{example.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Entertainment Examples */}
        <div className={`mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Entertainment Platforms</h3>
            </div>
            <div className="space-y-4">
              {entertainmentExamples.map((example, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <div className={`w-12 h-12 ${example.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <example.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{example.title}</h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">{example.platform}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{example.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Examples */}
        <div className={`mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Shopping & Transportation</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {otherExamples.map((example, index) => (
                <div key={index} className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-200">
                  <div className={`w-12 h-12 ${example.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <example.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{example.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{example.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white">
            <Zap className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Dive Deeper?</h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Now that you've seen how AI is already part of your daily life, let's explore the different types of AI and how they actually work!
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-white font-medium">Continue to Module 2</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Module1;