import React, { useState, useEffect } from 'react';
import { Shield, Scale, Eye, Users, AlertTriangle, CheckCircle, XCircle, Lightbulb, FileText, Award } from 'lucide-react';

const Module6LegalEthics = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedIncorporation, setSelectedIncorporation] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const incorporationTypes = [
    {
      type: "Sole Proprietorship",
      features: "Single owner",
      pros: "Easy to start, full control",
      cons: "Unlimited liability, hard to raise funds",
      icon: <Users className="w-6 h-6" />
    },
    {
      type: "Partnership",
      features: "Two or more people",
      pros: "Shared responsibility",
      cons: "Risk of disputes, shared liability",
      icon: <Users className="w-6 h-6" />
    },
    {
      type: "LLP (Limited Liability Partnership)",
      features: "Partners with limited liability",
      pros: "Flexibility + protection",
      cons: "Legal compliance needed",
      icon: <Shield className="w-6 h-6" />
    },
    {
      type: "Private Limited Company",
      features: "Separate legal entity",
      pros: "Investor-friendly, limited liability",
      cons: "Higher compliance, needs registration",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const ipTypes = [
    {
      type: "Trademark™",
      protects: "Brand name, logo, tagline",
      example: "Zomato® or Nike™",
      color: "from-emerald-500 to-green-600"
    },
    {
      type: "Copyright ©",
      protects: "Original content, code, designs",
      example: "App interface, website text",
      color: "from-green-500 to-teal-600"
    },
    {
      type: "Patent",
      protects: "Inventions, technical solutions",
      example: "AI model for detecting fake reviews",
      color: "from-teal-500 to-emerald-600"
    }
  ];

  const ethicalPrinciples = [
    {
      title: "AI Bias Prevention",
      description: "Ensure fairness in algorithms and data",
      example: "Use diverse datasets, regularly audit outputs",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Privacy & Data Ethics",
      description: "Respect user data and build trust",
      example: "Ask for consent, be transparent about data use",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Transparency in Tech",
      description: "Explain how your products work",
      example: "Simple explanations, publish ethics policy",
      icon: <Lightbulb className="w-8 h-8" />
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "Mental Health App Data Storage",
      description: "Startup A launches a mental health app but stores sensitive user data without encryption.",
      redFlag: "Privacy breach",
      prevention: "Use encryption + consent forms",
      correct: true
    },
    {
      id: 2,
      title: "AI Hiring Algorithm",
      description: "Startup B creates an AI hiring tool that shows preference for male candidates.",
      redFlag: "AI bias",
      prevention: "Audit for bias, use diverse training data",
      correct: true
    },
    {
      id: 3,
      title: "Content Creation Tool",
      description: "Startup C builds a content generation tool and clearly explains its AI capabilities to users.",
      redFlag: "No red flag - this is good practice",
      prevention: "Continue transparency practices",
      correct: false
    }
  ];

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
  };

  const handleIncorporationSelect = (type) => {
    setSelectedIncorporation(type);
  };

  return (
    <div
      id="s-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-6"] = el;
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
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Legal, Ethics & Responsible Innovation
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Build startups that are legally sound, ethically responsible, and built to last
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
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Scale className="w-6 h-6" />, text: "Startup legal foundations and incorporation types", color: "bg-green-100 text-green-600" },
              { icon: <Shield className="w-6 h-6" />, text: "Protecting intellectual property and data", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Eye className="w-6 h-6" />, text: "Ethical innovation and responsible AI", color: "bg-teal-100 text-teal-600" },
              { icon: <AlertTriangle className="w-6 h-6" />, text: "Identifying and preventing legal red flags", color: "bg-green-100 text-green-600" }
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

        {/* Startup Legal Foundations */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🏛️ Understanding Startup Law Basics
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Every startup founder must know the <strong className="text-green-600">rules of the game</strong>. 
                Legal clarity isn't optional — it's a <strong className="text-emerald-600">survival skill</strong>.
              </p>
            </div>
          </div>

          {/* Incorporation Types */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              Types of Incorporation: Choose Your Legal Structure
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {incorporationTypes.map((type, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                    selectedIncorporation === index 
                      ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50' 
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => handleIncorporationSelect(index)}
                >
                  <div className="text-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 mx-auto mb-4 w-fit">
                      {type.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{type.type}</h4>
                    <p className="text-sm text-gray-600 mb-3">{type.features}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-green-100 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-800">✓ Pros</p>
                      <p className="text-xs text-green-600">{type.pros}</p>
                    </div>
                    <div className="bg-red-100 rounded-lg p-3">
                      <p className="text-sm font-medium text-red-800">✗ Cons</p>
                      <p className="text-xs text-red-600">{type.cons}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedIncorporation !== null && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 animate-fade-in">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  💡 Why {incorporationTypes[selectedIncorporation].type} Matters
                </h4>
                <p className="text-gray-700">
                  {selectedIncorporation === 0 && "Great for testing ideas quickly with minimal setup, but limited for scaling and fundraising."}
                  {selectedIncorporation === 1 && "Works well for small teams but can become complex as the business grows."}
                  {selectedIncorporation === 2 && "Ideal for service-based startups that want protection without heavy compliance."}
                  {selectedIncorporation === 3 && "The gold standard for tech startups planning to raise investment and scale rapidly."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Intellectual Property Protection */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Protecting Your Intellectual Assets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your startup's most valuable asset might be an idea, name, design, or code. 
              Protecting these gives you a <strong className="text-green-600">competitive moat</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ipTypes.map((ip, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${ip.color} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">{ip.type}</div>
                  <h4 className="text-xl font-bold mb-4">Protects</h4>
                  <p className="text-lg opacity-90 mb-6">{ip.protects}</p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm font-medium">Example:</p>
                    <p className="text-sm opacity-90">{ip.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Innovation Principles */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ethical Innovation Principles
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 italic">
                "In the age of AI, doing what's <strong className="text-green-600">right</strong> is as important as doing what <strong className="text-emerald-600">works</strong>."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ethicalPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{principle.title}</h3>
                  <p className="text-gray-600 mb-4">{principle.description}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-sm font-medium text-green-800 mb-2">How to implement:</p>
                  <p className="text-sm text-green-600">{principle.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Showdown */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Case Study Showdown
            </h2>
            <p className="text-xl text-gray-700">
              Learn from both failures and successes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Theranos - Failure Case */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="text-center mb-6">
                <div className="bg-red-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                  <XCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Theranos</h3>
                <p className="text-gray-600">Failure Case</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-800">• Promised revolutionary blood test</p>
                  <p className="text-sm text-red-800">• Lied about technology and results</p>
                  <p className="text-sm text-red-800">• Raised millions, fooled investors</p>
                </div>
                <div className="bg-red-100 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-800">Outcome:</p>
                  <p className="text-sm text-red-600">Massive fraud, CEO jailed, brand destroyed</p>
                </div>
              </div>
            </div>

            {/* OpenAI - Success Case */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="bg-green-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">OpenAI</h3>
                <p className="text-gray-600">Ethical Scaling Case</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800">• Builds powerful AI models (ChatGPT)</p>
                  <p className="text-sm text-green-800">• Shares risks and limitations openly</p>
                  <p className="text-sm text-green-800">• Has ethics board and public research</p>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-800">Outcome:</p>
                  <p className="text-sm text-green-600">Trusted by developers, widely adopted</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-700">
                <strong className="text-red-600">Unethical shortcuts</strong> = short-term gain, long-term disaster<br/>
                <strong className="text-green-600">Ethical transparency</strong> = slower path, but scalable, trusted growth
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Red Flag Activity */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🚩 Red Flag Radar: Spot the Issues
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practice identifying legal and ethical problems in startup scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                className={`rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedScenario?.id === scenario.id
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-green-300'
                }`}
                onClick={() => handleScenarioSelect(scenario)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-2">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{scenario.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                
                {selectedScenario?.id === scenario.id && (
                  <div className="animate-fade-in space-y-3">
                    <div className="bg-red-100 rounded-lg p-3">
                      <p className="text-sm font-bold text-red-800">🚩 Red Flag:</p>
                      <p className="text-sm text-red-600">{scenario.redFlag}</p>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3">
                      <p className="text-sm font-bold text-green-800">✅ Prevention:</p>
                      <p className="text-sm text-green-600">{scenario.prevention}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🎯 Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-3">Legal Foundation</h3>
                <p className="text-gray-600">
                  Choose the right incorporation type, protect your IP, and have clear agreements from day one.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-3">Ethical Innovation</h3>
                <p className="text-gray-600">
                  Build with fairness, transparency, and respect for user privacy to create lasting trust.
                </p>
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
  );
};

export default Module6LegalEthics;