import React, { useState, useEffect } from 'react';
import { Globe, Users, FileText, Calendar, Target, CheckCircle, ArrowRight, TreePine, Shield, Leaf, HandHeart, Scale, MapPin, Clock, Award, ChevronRight } from 'lucide-react';

const Module3GlobalAction = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentAgreement, setCurrentAgreement] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const majorAgreements = [
    {
      year: "1972",
      title: "Stockholm Conference",
      subtitle: "The Beginning of Global Environmental Action",
      description: "First major global meeting focused on the environment with 113 countries",
      icon: <Globe className="w-8 h-8" />,
      achievements: [
        "Created UN Environment Programme (UNEP)",
        "Linked environment with development",
        "Started international environmental diplomacy"
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      year: "1987",
      title: "Montreal Protocol",
      subtitle: "Healing the Ozone Layer",
      description: "Most successful environmental agreement protecting the ozone layer",
      icon: <Shield className="w-8 h-8" />,
      achievements: [
        "Banned harmful CFCs worldwide", 
        "Over 190 countries participated",
        "Ozone layer is now healing"
      ],
      color: "from-emerald-400 to-green-500"
    },
    {
      year: "1992",
      title: "Earth Summit (Rio)",
      subtitle: "Sustainable Development Revolution",
      description: "Introduced sustainable development concept to the world",
      icon: <TreePine className="w-8 h-8" />,
      achievements: [
        "Created UNFCCC for climate action",
        "Convention on Biological Diversity",
        "Linked environment to social development"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      year: "1997",
      title: "Kyoto Protocol",
      subtitle: "First Legal Climate Commitment",
      description: "First legally binding treaty to reduce greenhouse gas emissions",
      icon: <Scale className="w-8 h-8" />,
      achievements: [
        "Set emission reduction targets",
        "Focused on developed countries",
        "Foundation for future agreements"
      ],
      color: "from-teal-400 to-green-500"
    },
    {
      year: "2015",
      title: "Paris Agreement",
      subtitle: "Global Climate Unity",
      description: "Most important current international climate treaty",
      icon: <HandHeart className="w-8 h-8" />,
      achievements: [
        "Nearly every country participates",
        "Limit warming to 1.5°C target",
        "National climate commitments (NDCs)"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      year: "Ongoing",
      title: "COP Meetings",
      subtitle: "Annual Climate Summits",
      description: "Yearly global meetings to track climate progress",
      icon: <Users className="w-8 h-8" />,
      achievements: [
        "Annual progress reviews",
        "New climate commitments",
        "Global collaboration platform"
      ],
      color: "from-emerald-500 to-green-600"
    }
  ];

  const keyFacts = [
    { icon: <Globe className="w-6 h-6" />, text: "Environmental problems cross borders", color: "bg-green-100 text-green-700" },
    { icon: <Users className="w-6 h-6" />, text: "Global cooperation is essential", color: "bg-emerald-100 text-emerald-700" },
    { icon: <Target className="w-6 h-6" />, text: "Shared goals, shared responsibility", color: "bg-teal-100 text-teal-700" }
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
              Global Environmental Action
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              How the world comes together to fight climate change and protect our planet
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
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {keyFacts.map((objective, index) => (
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

        {/* Why Global Agreements Matter */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Work Together?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Environmental issues like <strong className="text-green-600">climate change</strong> and 
                <strong className="text-emerald-600"> ozone depletion</strong> affect the entire planet. 
                The air, oceans, and atmosphere are <strong className="text-teal-600">shared resources</strong>.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Global Problems Need Global Solutions</h3>
                </div>
                <p className="text-gray-600">
                  When one country pollutes heavily, the effects can reach far beyond its borders.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Shared Planet, Shared Responsibility</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Air pollution crosses borders</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Climate affects everyone</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Together we are stronger</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Timeline of Global Environmental Action
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Major agreements that shaped how the world fights environmental challenges
              </p>
            </div>
          </div>
          
          {/* Featured Agreement */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${majorAgreements[activeTimeline].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl font-bold">{majorAgreements[activeTimeline].year}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{majorAgreements[activeTimeline].title}</h3>
                    <p className="text-xl opacity-90 mb-2">{majorAgreements[activeTimeline].subtitle}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">{majorAgreements[activeTimeline].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-6 gap-4">
            {majorAgreements.map((agreement, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeTimeline === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setActiveTimeline(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {agreement.year.slice(-2)}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{agreement.title}</h3>
                <p className="text-xs text-gray-600">{agreement.subtitle}</p>
                <div className="text-green-600 mt-2 flex justify-center">
                  {agreement.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story - Montreal Protocol */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🏆</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Amazing Success Story: Montreal Protocol
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">The Problem</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Scientists discovered that chemicals called <strong className="text-red-500">CFCs</strong> in 
                  refrigerators and aerosols were creating holes in the ozone layer that protects us from harmful UV rays.
                </p>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-red-700 font-medium">🛡️ Earth's protective shield was damaged!</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">The Solution</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-green-700 font-medium">190+ countries banned CFCs</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <p className="text-emerald-700 font-medium">Companies found safe alternatives</p>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <p className="text-teal-700 font-medium">🌍 Ozone layer is healing!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                <p className="text-lg text-gray-700">
                  <strong className="text-green-600">This proves</strong> that when the world works together, 
                  we can solve even the biggest environmental problems! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Climate Action */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Today's Climate Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current international efforts to fight climate change
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Paris Agreement */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Paris Agreement (2015)</h3>
                  <p className="text-green-600">The World's Climate Promise</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-800">Main Goal</h4>
                  </div>
                  <p className="text-gray-700">
                    Keep global warming <strong className="text-red-500">below 2°C</strong>, 
                    ideally <strong className="text-green-600">1.5°C</strong>
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600">195+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-600">NDCs</div>
                    <div className="text-sm text-gray-600">Climate Plans</div>
                  </div>
                </div>
              </div>
            </div>

            {/* COP Meetings */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border-l-4 border-emerald-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">COP Meetings</h3>
                  <p className="text-emerald-600">Annual Climate Summits</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "COP21 (Paris 2015)", achievement: "Created Paris Agreement" },
                  { name: "COP26 (Glasgow 2021)", achievement: "Net-zero commitments" },
                  { name: "COP28 (Dubai 2023)", achievement: "Fossil fuel discussions" }
                ].map((cop, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800">{cop.name}</h4>
                        <p className="text-sm text-gray-600">{cop.achievement}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-white rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600">
                  <strong className="text-emerald-600">COP</strong> = Conference of the Parties
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Environmental challenges don't respect borders. When countries work together, 
              they can achieve amazing things - like healing the ozone layer and fighting climate change.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Global Problems</strong> + 
                <strong className="text-emerald-600"> Global Cooperation</strong> = 
                <strong className="text-teal-600"> Real Solutions! 🌍</strong>
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

export default Module3GlobalAction;