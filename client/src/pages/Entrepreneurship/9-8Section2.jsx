import React, { useState, useEffect } from 'react';
import { Search, Users, Target, MapPin, Eye, Heart, Brain, Zap, Star, AlertCircle, CheckCircle, UserCheck, FileText, Camera, MessageSquare } from 'lucide-react';

const Module2ProblemIdentification = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTool, setCurrentTool] = useState(0);
  const [currentPersonaStep, setCurrentPersonaStep] = useState(0);
  const [problemRadarActive, setProblemRadarActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const personaInterval = setInterval(() => {
      setCurrentPersonaStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(personaInterval);
  }, []);

  const discoveryTools = [
    {
      name: "Google Forms for surveys",
      description: "Create custom questionnaires to collect opinions, needs, and feedback from potential users",
      benefit: "Get quantitative data from a large group",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      example: "Survey 100 students about canteen preferences"
    },
    {
      name: "Interview scripts based on \"5 Whys\"",
      description: "Ask 'Why?' five times in a row to drill down into the root cause of a problem",
      benefit: "Discover deeper, underlying issues",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      example: "Why avoid canteen? Crowded. Why crowded? Slow service..."
    },
    {
      name: "Observation logs",
      description: "Quietly observe and document real-world behavior and patterns",
      benefit: "Reveal patterns people might not mention directly",
      icon: <Eye className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      bgColor: "from-teal-50 to-green-50",
      example: "Watch how students struggle to find seating during lunch"
    }
  ];

  const personaSteps = [
    {
      title: "Demographics",
      items: ["Name, Age, Lifestyle"],
      icon: <UserCheck className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Key Problems",
      items: ["Main challenges they face"],
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Frustrations",
      items: ["What annoys them most?"],
      icon: <Zap className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Desired Outcome",
      items: ["What do they want to achieve?"],
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  const empathyMapSections = [
    { title: "Says", color: "bg-green-100", items: ["'I need faster service'", "'Too crowded here'"] },
    { title: "Thinks", color: "bg-emerald-100", items: ["'This is inefficient'", "'There must be a better way'"] },
    { title: "Does", color: "bg-teal-100", items: ["Skips meals", "Brings lunch from home"] },
    { title: "Feels", color: "bg-green-100", items: ["Frustrated", "Hungry", "Rushed"] }
  ];

  const handleProblemRadarToggle = () => {
    setProblemRadarActive(!problemRadarActive);
  };

  return (
    <div
      id="m-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-2"] = el;
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
                <Search className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Problem Identification & Customer Discovery
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to spot high-impact problems and understand the people you're helping
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Spotting High-Impact Problems */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Spotting High-Impact Problems
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An entrepreneur's journey begins with <strong className="text-green-600">keen observation</strong> and asking: 
                <em className="text-emerald-600">"What isn't working and why?"</em>
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Key Methods:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Use <strong className="text-green-600">Design Thinking Empathy Maps</strong></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Apply <strong className="text-emerald-600">Problem Radar Framework</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Problem Radar Framework</h3>
                
              </div>
              
              <div 
                className={`relative transition-all duration-500 ${problemRadarActive ? 'transform scale-105' : ''}`}
                onClick={handleProblemRadarToggle}
              >
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 cursor-pointer">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-700 mb-2">Frequency + Frustration = Priority</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-green-600 font-bold mb-2">High Frequency</div>
                      <div className="text-sm text-gray-600">Happens often</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-emerald-600 font-bold mb-2">High Frustration</div>
                      <div className="text-sm text-gray-600">Really annoying</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-3">
                      <div className="font-bold">= High Priority Problem!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your First Activity
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              List 3 systemic problems in your school/community and map their frequency and emotional intensity.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num, index) => (
                <div 
                  key={num}
                  className={`border-2 border-dashed border-green-300 rounded-xl p-6 text-center hover:border-green-500 transition-colors duration-300 ${
                    visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-2xl font-bold text-green-600 mb-3">Problem {num}</div>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Description:</div>
                      <div className="text-xs text-gray-500">What's the problem?</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Frequency:</div>
                      <div className="text-xs text-gray-500">How often does it happen?</div>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Frustration:</div>
                      <div className="text-xs text-gray-500">How annoying is it?</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Persona Development */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Customer Persona Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding who you're helping is critical. Use demographic + psychographic details to build User Personas.
            </p>
          </div>

          {/* Featured Persona Step */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Building</div>
              <div className={`${personaSteps[currentPersonaStep].color} rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-current">
                    {personaSteps[currentPersonaStep].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{personaSteps[currentPersonaStep].title}</h3>
                    <div className="space-y-1">
                      {personaSteps[currentPersonaStep].items.map((item, index) => (
                        <p key={index} className="text-sm opacity-90">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Persona Template Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personaSteps.map((step, index) => (
              <div
                key={index}
                className={`${step.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentPersonaStep === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentPersonaStep(index)}
              >
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <div className="space-y-1">
                  {step.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm opacity-90">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Example Persona */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Example User Persona</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍🎓</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Rahul, 16 years old</h4>
                  <p className="text-gray-600">Class 10 student, Tech enthusiast</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-bold text-green-700 mb-2">Key Problems:</h5>
                    <p className="text-sm text-gray-700">Struggles to find healthy, quick lunch options at school</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h5 className="font-bold text-emerald-700 mb-2">Frustrations:</h5>
                    <p className="text-sm text-gray-700">Long queues, limited healthy choices, expensive options</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4">
                    <h5 className="font-bold text-teal-700 mb-2">Desired Outcome:</h5>
                    <p className="text-sm text-gray-700">Quick, healthy, affordable meals that fit his budget and schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Thinking Empathy Maps */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Design Thinking Empathy Maps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visual tool to understand your users' thoughts, feelings, actions, and words
            </p>
          </div>

          <div className="bg-white lg:h-[300px] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {empathyMapSections.map((section, index) => (
                <div
                  key={index}
                  className={`${section.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                    visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 7) * 150}ms` }}
                >
                  <h3 className="font-bold text-lg mb-4 text-gray-800">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-lg p-3 text-sm text-gray-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools for Discovery */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tools for Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These tools help entrepreneurs gather accurate and useful data about problems and the people affected by them
            </p>
          </div>

          {/* Featured Tool */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${discoveryTools[currentTool].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-start justify-center space-x-6">
                  <div className="text-white mt-1">
                    {discoveryTools[currentTool].icon}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-2xl font-bold mb-3">{discoveryTools[currentTool].name}</h3>
                    <p className="text-lg opacity-90 mb-3">{discoveryTools[currentTool].description}</p>
                    <div className="bg-white/20 rounded-lg p-4 mb-3">
                      <p className="text-sm"><strong>Benefit:</strong> {discoveryTools[currentTool].benefit}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm"><strong>Example:</strong> {discoveryTools[currentTool].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tools Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {discoveryTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tool.bgColor} border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTool === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
                onClick={() => setCurrentTool(index)}
              >
                <div className={`bg-gradient-to-r ${tool.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-xs text-gray-700">
                    <strong>Example:</strong> {tool.example}
                  </p>
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
              Great entrepreneurs don't just solve problems—they solve the <strong className="text-green-600">right problems</strong> for the <strong className="text-emerald-600">right people</strong> in the <strong className="text-teal-600">right way</strong>.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Problem Identification</strong> + 
                <strong className="text-emerald-600"> Customer Discovery</strong> = 
                <strong className="text-teal-600"> Solutions That Matter!</strong>
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

export default Module2ProblemIdentification;