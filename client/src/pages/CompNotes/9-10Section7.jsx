import React, { useState, useEffect } from 'react';
import { Shield, Scale, Eye, Lock, Users, AlertTriangle, Gavel, Heart, Brain, Car, Briefcase, Globe, CheckCircle, XCircle, ArrowRight, Lightbulb, Target, BookOpen, MessageSquare } from 'lucide-react';

const Module7 = ({ topicRefs }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDilemma, setActiveDilemma] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ethicalPrinciples = [
    {
      icon: Scale,
      title: "Fairness and Non-Discrimination",
      desc: "AI systems should treat all individuals fairly, regardless of background",
      color: "from-purple-500 to-pink-500",
      example: "Amazon's hiring AI showed bias against women candidates",
      solution: "Use diverse training data and regular bias testing"
    },
    {
      icon: Eye,
      title: "Transparency and Explainability",
      desc: "People should understand how AI makes decisions affecting their lives",
      color: "from-blue-500 to-cyan-500",
      example: "Medical AI must explain treatment recommendations to doctors",
      solution: "Build interpretable AI systems with clear reasoning"
    },
    {
      icon: Lock,
      title: "Privacy and Data Protection",
      desc: "AI should respect individual privacy and protect personal data",
      color: "from-green-500 to-teal-500",
      example: "Smart speakers are always listening - what happens to recordings?",
      solution: "Data minimization and user consent requirements"
    },
    {
      icon: Users,
      title: "Accountability and Responsibility",
      desc: "Clear responsibility must exist for AI decisions and consequences",
      color: "from-orange-500 to-red-500",
      example: "Who's responsible if a self-driving car causes an accident?",
      solution: "Legal frameworks and human oversight for critical applications"
    }
  ];

  const ethicalDilemmas = [
    {
      title: "The Trolley Problem in AI",
      icon: Car,
      scenario: "A self-driving car must choose between hitting one person or swerving to hit five people.",
      questions: [
        "Should AI minimize total harm?",
        "Should it prioritize passengers over pedestrians?",
        "Who makes these moral decisions?"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "AI in Warfare",
      icon: Shield,
      scenario: "Military drones and defense systems increasingly use AI for critical decisions.",
      questions: [
        "Should AI make life-or-death decisions without humans?",
        "How do we prevent AI weapons misuse?",
        "What if AI warfare systems are hacked?"
      ],
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "AI and Employment",
      icon: Briefcase,
      scenario: "AI can eliminate jobs but also create new opportunities for workers.",
      questions: [
        "Should companies retrain displaced workers?",
        "Should there be limits on automation speed?",
        "How do we distribute AI benefits fairly?"
      ],
      color: "from-blue-600 to-purple-600"
    }
  ];

  const userRoles = [
    {
      role: "As a Student",
      icon: BookOpen,
      color: "bg-blue-500",
      responsibilities: [
        "Use AI tools to learn, not cheat on assignments",
        "Question AI outputs and verify information",
        "Don't create harmful content with AI"
      ]
    },
    {
      role: "As a Future Professional",
      icon: Target,
      color: "bg-green-500",
      responsibilities: [
        "Stay informed about AI developments",
        "Advocate for ethical AI practices at work",
        "Consider how AI use affects others"
      ]
    },
    {
      role: "As a Citizen",
      icon: Globe,
      color: "bg-purple-500",
      responsibilities: [
        "Engage in AI policy discussions",
        "Protect your privacy with AI systems",
        "Ensure AI benefits reach all communities"
      ]
    }
  ];

  const regulations = [
    {
      region: "European Union",
      title: "AI Act",
      color: "from-blue-600 to-blue-800",
      features: ["Risk-based AI categorization", "Strict requirements for high-risk AI", "Banned harmful practices"]
    },
    {
      region: "United States",
      title: "Executive Orders",
      color: "from-red-600 to-red-800",
      features: ["AI safety frameworks", "Sector-specific regulations", "NIST risk management"]
    },
    {
      region: "Global",
      title: "International Cooperation",
      color: "from-green-600 to-green-800",
      features: ["Partnership on AI", "IEEE Standards", "UN AI Ethics Guidelines"]
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
      className="mb-12"
    >
         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Scale className="w-12 h-12 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              AI Ethics &
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                Moral Responsibility
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Understanding the moral principles that guide AI development and ensuring technology serves humanity responsibly
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* What is AI Ethics */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What is AI Ethics?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">AI Ethics</strong> refers to the moral principles and guidelines that should govern the development, deployment, and use of artificial intelligence systems. It ensures that AI benefits humanity while minimizing harm.
                </p>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-500">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <strong>Think of it as:</strong> The moral compass that guides how we create and use AI technology to ensure it helps people rather than hurts them.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Scale className="w-32 h-32 text-indigo-600" />
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Ethical Principles */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Key Ethical Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ethicalPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{principle.desc}</p>
                
                <div className={`transform transition-all duration-500 ${activeCard === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
                  <div className="bg-red-50 rounded-xl p-4 mb-4 border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-1">Real Challenge:</h4>
                    <p className="text-red-700 text-sm">{principle.example}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-1">Solution:</h4>
                    <p className="text-green-700 text-sm">{principle.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Dilemmas */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Real-World Ethical Dilemmas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complex moral questions that AI developers and society must answer
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {ethicalDilemmas.map((dilemma, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDilemma(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeDilemma === index
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <dilemma.icon className="w-4 h-4" />
                  {dilemma.title}
                </button>
              ))}
            </div>

            <div className="min-h-[300px]">
              {ethicalDilemmas.map((dilemma, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    activeDilemma === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute'
                  }`}
                  style={{ display: activeDilemma === index ? 'block' : 'none' }}
                >
                  <div className={`bg-gradient-to-r ${dilemma.color} rounded-2xl p-8 text-white mb-6`}>
                    <div className="flex items-center gap-4 mb-4">
                      <dilemma.icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">{dilemma.title}</h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">{dilemma.scenario}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {dilemma.questions.map((question, qIndex) => (
                      <div key={qIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-sm font-bold">{qIndex + 1}</span>
                          </div>
                          <p className="text-gray-700 font-medium">{question}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Governance */}
        <div className={`mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI Governance and Regulation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How governments and organizations are working to ensure responsible AI development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {regulations.map((reg, index) => (
              <div key={index} className={`bg-gradient-to-br ${reg.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-center gap-2 mb-4">
                  <Gavel className="w-6 h-6" />
                  <h3 className="text-lg font-bold">{reg.region}</h3>
                </div>
                <h4 className="text-xl font-bold mb-4">{reg.title}</h4>
                <ul className="space-y-2">
                  {reg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Your Role Section */}
        <div className={`mb-20 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Your Role as an Ethical AI User
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How you can contribute to responsible AI development and use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {userRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className={`w-12 h-12 ${role.color} rounded-xl flex items-center justify-center mb-4`}>
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{role.role}</h3>
                <ul className="space-y-3">
                  {role.responsibilities.map((resp, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="relative">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Be Part of the Solution</h3>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                AI ethics isn't just for developers and policymakers. Every AI user has a role in ensuring technology serves humanity responsibly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Heart className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Use AI Responsibly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Advocate for Ethics</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Globe className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Shape the Future</span>
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

export default Module7;