import React, { useState, useEffect } from 'react';
import { Globe, Layers, Zap, Droplets, Mountain, Leaf, ArrowRight, AlertTriangle, Waves, Thermometer, Wind, Fish } from 'lucide-react';

const Module1EarthSystem = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentSubsystem, setCurrentSubsystem] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubsystem((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const subsystems = [
    {
      name: "Atmosphere",
      description: "The gaseous layer surrounding Earth",
      icon: <Wind className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      name: "Hydrosphere", 
      description: "All forms of water on Earth",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      name: "Geosphere",
      description: "The solid Earth rocks, minerals, landforms",
      icon: <Mountain className="w-8 h-8" />,
      color: "from-teal-400 to-green-500",
      bgColor: "bg-teal-50", 
      textColor: "text-teal-600"
    },
    {
      name: "Biosphere",
      description: "All living organisms on Earth",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    }
  ];

  const feedbackLoops = [
    {
      type: "Positive",
      title: "Ice-Albedo Feedback",
      description: "Ice melts → Dark surfaces exposed → More heat absorbed → More ice melts",
      icon: <Thermometer className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      type: "Positive", 
      title: "Methane Release",
      description: "Permafrost thaws → Methane released → Global warming → More thawing",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      type: "Negative",
      title: "Carbon Absorption",
      description: "Higher CO₂ → Enhanced plant growth → More CO₂ absorbed → Slower accumulation",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    }
  ];

  return (
    <div
      id="m-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-1"] = el;
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
                <Globe className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              The Earth as a System
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover how our planet works as an interconnected web of systems
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Globe className="w-6 h-6" />, text: "Earth's four subsystems", color: "bg-green-100 text-green-600" },
              { icon: <Zap className="w-6 h-6" />, text: "The Anthropocene epoch", color: "bg-emerald-100 text-emerald-600" },
              { icon: <ArrowRight className="w-6 h-6" />, text: "Feedback loops", color: "bg-teal-100 text-teal-600" },
              { icon: <Waves className="w-6 h-6" />, text: "Ocean acidification", color: "bg-green-100 text-green-700" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-lg">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Systems Thinking Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Systems Thinking
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Earth functions as a <strong className="text-green-600">dynamic, interconnected system </strong> 
                not isolated parts, but a unified whole where everything affects everything else.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Think of it like this:</h3>
                </div>
                <p className="text-gray-600">
                  Earth is like a well-coordinated <strong className="text-green-600">orchestra </strong> 
                  if one instrument plays out of sync, the entire symphony is affected.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Earth = Integrated System</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Continuous energy exchange</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Matter constantly circulates</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Changes ripple everywhere</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Subsystems */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Earth's Four Subsystems
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                These subsystems are <strong className="text-green-600">interdependent </strong>  
                 they continuously exchange energy and matter
              </p>
            </div>
          </div>
          
          {/* Featured Subsystem (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${subsystems[currentSubsystem].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">{subsystems[currentSubsystem].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{subsystems[currentSubsystem].name}</h3>
                    <p className="text-xl opacity-90">{subsystems[currentSubsystem].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Subsystems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subsystems.map((system, index) => (
              <div
                key={index}
                className={`${system.bgColor} border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentSubsystem === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentSubsystem(index)}
              >
                <div className={`bg-gradient-to-r ${system.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {system.icon}
                </div>
                <h3 className={`text-xl font-bold ${system.textColor} mb-2`}>{system.name}</h3>
                <p className="text-gray-600 text-sm">{system.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anthropocene Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <AlertTriangle className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  The Anthropocene
                </h2>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg text-gray-700 mb-4">
                  A new geological epoch where <strong className="text-green-600">human activity </strong> 
                  has become the dominant force shaping Earth's environment and climate.
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-gray-600">
                    <strong className="text-orange-600">Fun Fact:</strong> Scientists have found microplastics 
                    in Arctic ice, coral reefs, and even human blood!
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Indicators</h3>
              {[
                "Massive land alterations through urbanization",
                "Accumulation of synthetic materials in geology",
                "Climate change from fossil fuel burning", 
                "Accelerated species extinction"
              ].map((indicator, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700 font-medium">{indicator}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Loops Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Feedback Loops
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Processes where system output influences its own operation  
                either <strong className="text-red-600">amplifying</strong> or 
                <strong className="text-green-600"> regulating</strong> change
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {feedbackLoops.map((loop, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${loop.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {loop.icon}
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${loop.bgColor} ${loop.textColor} mb-2`}>
                    {loop.type} Feedback
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{loop.title}</h3>
                </div>
                <p className="text-gray-600 text-center">{loop.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ocean Acidification */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-400">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Fish className="w-10 h-10 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Ocean Acidification
                </h2>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg text-gray-700 mb-4">
                  When CO₂ dissolves in seawater, it forms <strong className="text-blue-600">carbonic acid</strong>, 
                  reducing ocean pH and disrupting marine ecosystems.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-gray-600">
                    <strong className="text-blue-600">Analogy:</strong> Ocean acidification is like 
                    osteoporosis for the sea - weakening marine life skeletons.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Consequences</h3>
              {[
                "Coral reefs become bleached and weak",
                "Marine biodiversity declines",
                "Food chains disrupted",
                "Fisheries and global nutrition affected"
              ].map((consequence, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700 font-medium">{consequence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Earth's subsystems are deeply interconnected",
                "The Anthropocene reflects human planetary impact",
                "Feedback loops can intensify environmental issues",
                "Ocean acidification threatens marine ecosystems"
              ].map((takeaway, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <p className="text-lg text-gray-700 font-medium">{takeaway}</p>
                  </div>
                </div>
              ))}
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

export default Module1EarthSystem;