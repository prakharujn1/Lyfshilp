import React, { useState, useEffect } from 'react';
import { User, Target, Globe, FileText, Star, Crown, Lightbulb, ArrowRight, CheckCircle, Eye } from 'lucide-react';

const Module1PersonalBranding = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentArchetype, setCurrentArchetype] = useState(0);
  const [selectedArchetype, setSelectedArchetype] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArchetype(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const archetypes = [
    {
      name: "Visionary",
      icon: <Eye className="w-8 h-8" />,
      description: "Dream big and inspire others to follow",
      traits: ["Big picture thinker", "Inspiring speaker", "Future-focused"],
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Operator",
      icon: <Target className="w-8 h-8" />,
      description: "Get things done efficiently and effectively",
      traits: ["Detail-oriented", "Results-driven", "Organized"],
      color: "from-emerald-600 to-green-700"
    },
    {
      name: "Connector",
      icon: <Globe className="w-8 h-8" />,
      description: "Build bridges and bring people together",
      traits: ["Great networker", "Team builder", "Communication expert"],
      color: "from-green-700 to-emerald-800"
    },
    {
      name: "Disruptor",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Challenge the status quo and innovate",
      traits: ["Creative thinker", "Risk-taker", "Change agent"],
      color: "from-emerald-700 to-green-800"
    }
  ];

  const keyElements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Discover Your Leadership Archetype",
      description: "Are you a Visionary, Operator, Connector, or Disruptor?",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Craft Your Personal Mission Statement",
      description: "Define your beliefs and purpose in one clear sentence",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Build Your Digital Credibility",
      description: "Align your online presence with your leadership image",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Create Your Leadership Portfolio",
      description: "Package your achievements and values for opportunities",
      gradient: "from-emerald-600 to-green-700"
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
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Personal Branding & Leadership Identity
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Brand You: Leading by Who You Are
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Core Message */}
        <div 
          className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transform transition-all duration-700 ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center space-y-6">
            <div className="text-6xl mb-6">👑</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leadership is not just about titles
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                It's about <strong className="text-green-600">influence</strong>, 
                <strong className="text-emerald-600"> values</strong>, and 
                the ability to <strong className="text-green-700">inspire action</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In today's world, how you present yourself matters as much as what you stand for. 
              Your leadership identity is a mix of your purpose, behavior, and public image.
            </p>
          </div>
        </div>

        {/* Key Learning Elements */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What You'll Master
            </h2>
            <p className="text-lg text-gray-600">
              This module helps you shape your leadership identity with clarity and confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyElements.map((element, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                  visibleSections.includes(1) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${element.gradient} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {element.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {element.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Archetypes Section */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Discover Your Leadership Archetype
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding your natural leadership style is the first step to authentic leadership
            </p>
          </div>

          {/* Featured Archetype (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Currently Featuring</div>
              <div className={`bg-gradient-to-r ${archetypes[currentArchetype].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">
                    {archetypes[currentArchetype].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{archetypes[currentArchetype].name}</h3>
                    <p className="text-xl opacity-90 mb-4">{archetypes[currentArchetype].description}</p>
                    <div className="space-y-1">
                      {archetypes[currentArchetype].traits.map((trait, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{trait}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Archetypes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {archetypes.map((archetype, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentArchetype === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${selectedArchetype === index ? 'bg-gradient-to-br from-green-100 to-emerald-100' : ''}`}
                onClick={() => {
                  setCurrentArchetype(index);
                  setSelectedArchetype(index);
                }}
              >
                <div className={`bg-gradient-to-r ${archetype.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {archetype.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{archetype.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{archetype.description}</p>
                <div className="space-y-1">
                  {archetype.traits.map((trait, traitIndex) => (
                    <div key={traitIndex} className="text-xs text-gray-600 bg-white rounded-full px-3 py-1">
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Mission Statement */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-3">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Your Personal Mission
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A personal mission statement is a <strong className="text-green-600">one-sentence</strong> declaration 
                  that captures your beliefs, values, and purpose as a leader.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
                    <Star className="w-5 h-5 text-green-600" />
                    <span>A strong mission statement:</span>
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Reflects your core values</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Guides your decisions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Inspires others to follow</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Mission Statement Template</h3>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400 text-left">
                    <p className="text-gray-700 leading-relaxed">
                      "I believe in <strong className="text-green-600">[your core value]</strong> and 
                      my purpose is to <strong className="text-emerald-600">[your mission]</strong> so that 
                      <strong className="text-green-700">[desired impact]</strong>."
                    </p>
                  </div>
                  <div className="mt-6 bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-medium">Example:</p>
                    <p className="text-sm text-gray-700 italic mt-2">
                      "I believe in empowering others and my purpose is to lead with authenticity 
                      so that everyone can reach their full potential."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Credibility Section */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Build Your Digital Credibility
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your online presence is often the first impression people have of your leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Social Media Alignment",
                points: ["Consistent messaging", "Professional photos", "Value-driven content"],
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Content Creation",
                points: ["Share your insights", "Demonstrate expertise", "Engage thoughtfully"],
                color: "from-emerald-500 to-green-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Personal Branding",
                points: ["Clear value proposition", "Authentic voice", "Consistent visuals"],
                color: "from-green-600 to-emerald-700"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${item.color} rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              Authentic leadership starts with knowing who you are, what you stand for, 
              and how you want to impact the world around you.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg">
                <span className="font-bold text-green-600">Self-Awareness</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Authentic Brand</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Leadership Impact</span>
              </div>
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
    </div>
    
  );
};

export default Module1PersonalBranding;