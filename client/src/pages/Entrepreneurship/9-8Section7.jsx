import React, { useState, useEffect } from 'react';
import { Shield, Scale, Lock, Users, Eye, FileText, Copyright, Award, AlertTriangle, CheckCircle, Lightbulb, Gavel, UserCheck } from 'lucide-react';

const Module7EthicsLegal = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentEthicsPoint, setCurrentEthicsPoint] = useState(0);
  const [currentLegalPoint, setCurrentLegalPoint] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ethicsInterval = setInterval(() => {
      setCurrentEthicsPoint((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(ethicsInterval);
  }, []);

  useEffect(() => {
    const legalInterval = setInterval(() => {
      setCurrentLegalPoint((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(legalInterval);
  }, []);

  const ethicsPoints = [
    {
      title: "Bias in AI",
      description: "AI tools may unintentionally favor certain groups due to biased training data",
      example: "A language AI trained only on English might exclude users speaking regional languages",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-100 to-orange-100 border-orange-300"
    },
    {
      title: "Privacy by Design",
      description: "Your product should protect user privacy from the very beginning",
      example: "Ask for clear consent, minimize data storage, and allow users to opt out",
      icon: <Lock className="w-6 h-6" />,
      color: "from-blue-100 to-green-100 border-green-300"
    },
    {
      title: "Inclusivity",
      description: "Ensure your product can be used by everyone, regardless of differences",
      example: "Larger fonts, screen reader compatibility, and multilingual support",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-100 to-green-100 border-green-300"
    }
  ];

  const legalConcepts = [
    {
      title: "Trademarks",
      description: "Protect brand names and logos",
      icon: <Award className="w-8 h-8" />,
      example: "Nike's swoosh logo and brand name"
    },
    {
      title: "Copyright",
      description: "Covers original creative works",
      icon: <Copyright className="w-8 h-8" />,
      example: "Content, images, or software code"
    },
    {
      title: "Patents",
      description: "Protect new inventions and processes",
      icon: <Lightbulb className="w-8 h-8" />,
      example: "Original and useful product designs"
    }
  ];

  const businessTypes = [
    {
      type: "Sole Proprietorship",
      description: "Owned by one person",
      pros: ["Easy to start", "Complete control", "Simple taxes"],
      cons: ["Higher personal risk", "Limited resources", "All responsibility on owner"],
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      type: "Partnership",
      description: "Shared between two or more individuals",
      pros: ["Shared responsibilities", "Combined skills", "Shared resources"],
      cons: ["Shared profits", "Potential conflicts", "Joint liability"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div
      id="m-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-7"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ethics, Sustainability & Legal Readiness
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Build ethical, sustainable startups while understanding legal foundations
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3 mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Shield className="w-6 h-6" />, text: "Building ethical and sustainable startups", color: "bg-green-100 text-green-600" },
              { icon: <Gavel className="w-6 h-6" />, text: "Understanding legal basics for entrepreneurs", color: "bg-emerald-100 text-emerald-600" }
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

        {/* Building Ethical Startups Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Building Ethical Startups
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Ethical decision-making is essential in modern entrepreneurship, especially when using technology like AI. 
                Building an ethical startup means ensuring your product is <strong className="text-green-600">fair</strong>, 
                <strong className="text-emerald-600"> transparent</strong>, 
                <strong className="text-teal-600"> safe</strong>, and 
                <strong className="text-green-700"> inclusive</strong>.
              </p>
            </div>
          </div>

          {/* Featured Ethics Point (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Key Ethics Focus</div>
              <div className={`bg-gradient-to-r ${ethicsPoints[currentEthicsPoint].color} rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 border-2`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white rounded-full p-3 mr-4 text-gray-700">
                    {ethicsPoints[currentEthicsPoint].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {ethicsPoints[currentEthicsPoint].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {ethicsPoints[currentEthicsPoint].description}
                </p>
                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Example:</strong> {ethicsPoints[currentEthicsPoint].example}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Ethics Points Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {ethicsPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${point.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${
                  currentEthicsPoint === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
                onClick={() => setCurrentEthicsPoint(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-2 text-gray-700">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{point.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Basics Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Legal Basics for Young Entrepreneurs
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Understanding the legal side of business protects your ideas and ensures your startup runs smoothly.
              </p>
            </div>
          </div>

          {/* Business Types Comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 ${
                  visibleCards.includes(index + 5) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 5) * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 text-white">
                    {business.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{business.type}</h3>
                    <p className="text-gray-600">{business.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Advantages
                    </h4>
                    <ul className="space-y-1">
                      {business.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Considerations
                    </h4>
                    <ul className="space-y-1">
                      {business.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intellectual Property Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Intellectual Property (IP) Protection
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                <strong className="text-green-600">Intellectual Property</strong> includes creations like your product idea, brand name, and logos.
              </p>
              <p className="text-lg text-gray-600">
                Protecting your IP ensures others cannot legally copy or steal your work.
              </p>
            </div>
          </div>

          {/* IP Types Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {legalConcepts.map((concept, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 ${
                  currentLegalPoint === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-50 to-emerald-50' : ''
                } ${
                  visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 150}ms` }}
                onClick={() => setCurrentLegalPoint(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{concept.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{concept.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-sm text-gray-700">
                    <strong className="text-green-600">Example:</strong> {concept.example}
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
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6 leading-relaxed">
              Building an ethical startup means creating products that are fair, transparent, and inclusive. 
              Understanding legal basics protects your innovations and helps you respect others' creations.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Ethics</strong> + 
                <strong className="text-emerald-600"> Legal Knowledge</strong> = 
                <strong className="text-teal-600"> Sustainable Success! </strong>
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

export default Module7EthicsLegal;