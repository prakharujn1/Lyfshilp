import React, { useState, useEffect } from 'react';
import { Scale, Users, FileText, CheckCircle, ArrowRight, Building, Gavel, BookOpen, Clock, AlertCircle, Star, Award, Target, Zap } from 'lucide-react';

const Module3LawMaking = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [showOrdinanceInfo, setShowOrdinanceInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const governmentOrgans = [
    {
      name: "Legislature",
      description: "The law-making body that debates, drafts, and passes laws",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      examples: ["Lok Sabha", "Rajya Sabha", "State Assemblies"]
    },
    {
      name: "Executive", 
      description: "Responsible for implementing and enforcing laws passed by the Legislature",
      icon: <Building className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      examples: ["Prime Minister", "Cabinet", "Civil Services"]
    },
    {
      name: "Judiciary",
      description: "Interprets laws and ensures they are applied fairly and justly",
      icon: <Scale className="w-8 h-8" />,
      color: "from-teal-600 to-cyan-600", 
      examples: ["Supreme Court", "High Courts", "District Courts"]
    }
  ];

  const billTypes = [
    {
      type: "Government Bill",
      description: "Introduced by a minister, usually backed by the ruling party",
      icon: <Building className="w-6 h-6" />,
      color: "bg-emerald-100 border-emerald-300 text-emerald-800",
      priority: "High"
    },
    {
      type: "Private Member's Bill", 
      description: "Introduced by MPs who are not ministers, often to raise specific issues",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 border-green-300 text-green-800",
      priority: "Medium"
    },
    {
      type: "Money Bill",
      description: "Deals exclusively with taxation, government borrowing, or expenditure (Article 110)",
      icon: <Target className="w-6 h-6" />,
      color: "bg-teal-100 border-teal-300 text-teal-800",
      priority: "High",
      note: "Can only be introduced in Lok Sabha"
    },
    {
      type: "Ordinary Bill",
      description: "Covers all other subjects besides money-related issues",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-cyan-100 border-cyan-300 text-cyan-800",
      priority: "Medium"
    },
    {
      type: "Constitutional Amendment Bill",
      description: "Proposes changes to the Constitution itself (Article 368)",
      icon: <Award className="w-6 h-6" />,
      color: "bg-indigo-100 border-indigo-300 text-indigo-800",
      priority: "Critical",
      note: "Requires special procedures and majorities"
    }
  ];

  const legislativeSteps = [
    {
      step: "First Reading",
      description: "Bill is introduced, and its objectives are explained",
      icon: <BookOpen className="w-6 h-6" />,
      detail: "The bill title is read and basic purpose is outlined"
    },
    {
      step: "Second Reading", 
      description: "Detailed discussion happens, sometimes involving a Committee",
      icon: <Users className="w-6 h-6" />,
      detail: "Clause-by-clause examination and debate"
    },
    {
      step: "Third Reading",
      description: "Final debate and voting on the Bill",
      icon: <Gavel className="w-6 h-6" />,
      detail: "No amendments allowed, only accept or reject"
    },
    {
      step: "Other House",
      description: "The Bill goes through the same three readings in the other House",
      icon: <ArrowRight className="w-6 h-6" />,
      detail: "Lok Sabha ↔ Rajya Sabha process"
    },
    {
      step: "President's Assent",
      description: "After both Houses pass the Bill, it is sent to the President",
      icon: <CheckCircle className="w-6 h-6" />,
      detail: "Under Article 111 - can give assent, withhold, or return"
    }
  ];

  const landmarkLaws = [
    {
      name: "Right to Information Act, 2005",
      description: "Empowers citizens to demand information from the government, promoting transparency",
      impact: "Transparency & Accountability",
      icon: <AlertCircle className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "Protection of Women from Domestic Violence Act, 2005", 
      description: "Provides legal protection to women against domestic abuse",
      impact: "Women's Safety",
      icon: <Scale className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Juvenile Justice Act, 2015",
      description: "Amended to hold juveniles aged 16+ accountable for heinous crimes under certain conditions",
      impact: "Child Protection & Justice",
      icon: <Star className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div
      id="m-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Gavel className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Law-Making Process in India
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover how laws are created, debated, and implemented in our democracy 🏛️⚖️
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Opening Section */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-6xl mb-6">🏛️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The Foundation of Democracy
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              Ever wondered how laws like the Right to Education or Digital India initiatives come to life?
            </p>
            <p className="text-lg text-gray-600">
              Let's explore the fascinating journey of how an <strong className="text-green-600">idea becomes law</strong> in India! 🚀
            </p>
          </div>
        </div>

        {/* Three Organs of Government */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-4">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Three Pillars of Government
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our democracy works through three interconnected branches, each with specific roles 🏗️
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governmentOrgans.map((organ, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${organ.color} rounded-full p-4 w-fit mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {organ.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{organ.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{organ.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-green-700 mb-2">Examples:</p>
                  {organ.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bicameral Parliament */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🏛️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              India's Bicameral Parliament
            </h2>
            <p className="text-lg text-gray-600">Two houses working together for better governance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3 w-fit mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lok Sabha</h3>
              <p className="text-gray-600 mb-4">(House of the People)</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Directly elected representatives
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Reflects the public's will
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  543 members (max)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-3 w-fit mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Rajya Sabha</h3>
              <p className="text-gray-600 mb-4">(Council of States)</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Represents the states
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Elected by state legislatures
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  245 members (max)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Bills */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full p-4">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Bills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different types of bills serve different purposes in our legislative system 📋
            </p>
          </div>

          <div className="grid gap-6">
            {billTypes.map((bill, index) => (
              <div
                key={index}
                className={`${bill.color} rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    {bill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{bill.type}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        bill.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                        bill.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {bill.priority} Priority
                      </span>
                    </div>
                    <p className="mb-2">{bill.description}</p>
                    {bill.note && (
                      <div className="bg-white bg-opacity-30 rounded-lg p-3 mt-3">
                        <p className="text-sm font-medium">📌 {bill.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legislative Process */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Legislative Journey
            </h2>
            <p className="text-lg text-gray-600">From idea to law: The complete process</p>
          </div>

          <div className="space-y-8">
            {legislativeSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 transform scale-105' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`rounded-full p-4 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                    : 'bg-gray-100 text-gray-600'
                } transition-all duration-300`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      Step {index + 1}: {step.step}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {activeStep === index ? 'Active' : 'Click to expand'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  {activeStep === index && (
                    <div className="bg-white rounded-lg p-4 mt-4 border border-green-200 animate-fade-in">
                      <p className="text-sm text-green-700 font-medium">💡 {step.detail}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* President's Powers */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border-l-4 border-indigo-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">👨‍⚖️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              President's Role (Article 111)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-green-500 mb-2">✅ Give Assent</div>
              <p className="text-gray-600">Making the Bill a law</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-red-500 mb-2">❌ Withhold Assent</div>
              <p className="text-gray-600">Rare and controversial</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-blue-500 mb-2">↩️ Return Bill</div>
              <p className="text-gray-600">For reconsideration (except Money Bills)</p>
            </div>
          </div>
        </div>

        {/* Committees Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Role of Committees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert examination for better legislation 🔍
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-green-500 mr-2" />
                  Standing Committees
                </h3>
                <p className="text-gray-600 mb-4">Permanent committees that examine bills in detail</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Expert knowledge and scrutiny
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Detailed examination beyond debates
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-green-500 mr-2" />
                  Select Committees
                </h3>
                <p className="text-gray-600 mb-4">Temporary committees for specific bills</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Identify issues and loopholes
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Improve quality of laws
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ordinance Making Power */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-yellow-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Emergency Law-Making: Ordinances
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Article 123 (President)
              </h3>
              <p className="text-gray-600 mb-4">When Parliament is not in session but urgent laws are needed</p>
              <div className="bg-orange-100 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  📅 <strong>Duration:</strong> 6 weeks after Parliament reconvenes
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                <Building className="w-6 h-6 mr-2" />
                Article 213 (Governors)
              </h3>
              <p className="text-gray-600 mb-4">Similar powers for state governors during urgent situations</p>
              <div className="bg-orange-100 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  ⚖️ <strong>Force:</strong> Same as regular law until approved/rejected
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowOrdinanceInfo(!showOrdinanceInfo)}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
          >
            {showOrdinanceInfo ? 'Hide' : 'Show'} Ordinance Examples
          </button>

          {showOrdinanceInfo && (
            <div className="mt-6 bg-white rounded-xl p-6 shadow-md animate-fade-in">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Recent Ordinance Examples:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                  Banking regulation during financial crises
                </li>
                <li className="flex items-center text-gray-600">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                  COVID-19 emergency health measures
                </li>
                <li className="flex items-center text-gray-600">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                  Economic reforms during Parliament recess
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Landmark Laws */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                <Star className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Landmark Laws That Changed India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Laws that have made a real difference in people's lives 🌟
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {landmarkLaws.map((law, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${law.color} rounded-full p-4 w-fit mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {law.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{law.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{law.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-700">
                    🎯 Impact: {law.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
       </div>

          
);
};

export default Module3LawMaking;