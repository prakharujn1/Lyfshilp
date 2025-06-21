import React, { useState, useEffect } from 'react';
import { Globe, Shield, Users, Scale, MapPin, Building, Award, Heart, Leaf, BookOpen, ArrowRight, Star, Flag, Target } from 'lucide-react';

const Module5InternationalLaw = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentOrgan, setCurrentOrgan] = useState(0);
  const [currentSource, setCurrentSource] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const organInterval = setInterval(() => {
      setCurrentOrgan((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(organInterval);
  }, []);

  useEffect(() => {
    const sourceInterval = setInterval(() => {
      setCurrentSource((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(sourceInterval);
  }, []);

  const unOrgans = [
    {
      name: "General Assembly",
      description: "All 193 member states discuss global issues",
      icon: <Users className="w-8 h-8" />,
      detail: "Democratic forum where every country has equal voice",
      emoji: "🗳️"
    },
    {
      name: "Security Council", 
      description: "Maintains global peace and security",
      icon: <Shield className="w-8 h-8" />,
      detail: "15 members with 5 permanent (P5) having veto power",
      emoji: "🛡️"
    },
    {
      name: "International Court of Justice",
      description: "Resolves disputes between countries",
      icon: <Scale className="w-8 h-8" />,
      detail: "Principal judicial body of the United Nations",
      emoji: "⚖️"
    },
    {
      name: "Secretariat",
      description: "Administrative arm led by Secretary-General",
      icon: <Building className="w-8 h-8" />,
      detail: "Manages daily UN operations worldwide",
      emoji: "🏢"
    },
    {
      name: "Economic and Social Council",
      description: "Coordinates economic and social work",
      icon: <Target className="w-8 h-8" />,
      detail: "ECOSOC promotes global development cooperation",
      emoji: "💼"
    },
    {
      name: "Trusteeship Council",
      description: "Suspended since 1994",
      icon: <Flag className="w-8 h-8" />,
      detail: "Originally oversaw territories transitioning to independence",
      emoji: "🏛️"
    }
  ];

  const lawSources = [
    {
      title: "Treaties and Agreements",
      description: "Formal contracts between states",
      example: "Geneva Conventions, Paris Climate Agreement",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Customary International Law", 
      description: "Practices countries follow consistently",
      example: "Diplomatic immunity, territorial waters",
      icon: <Globe className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "General Principles of Law",
      description: "Fundamental legal principles worldwide",
      example: "Good faith, due process, equality",
      icon: <Scale className="w-6 h-6" />,
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Judicial Decisions",
      description: "Court interpretations and expert writings",
      example: "ICJ rulings, legal scholar opinions",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const p5Countries = [
    { name: "United States", flag: "🇺🇸", role: "Major WWII Allied Power" },
    { name: "United Kingdom", flag: "🇬🇧", role: "Major WWII Allied Power" },
    { name: "France", flag: "🇫🇷", role: "Major WWII Allied Power" },
    { name: "Russia", flag: "🇷🇺", role: "Successor to Soviet Union" },
    { name: "China", flag: "🇨🇳", role: "Major WWII Allied Power" }
  ];

  const specializedAgencies = [
    { name: "WHO", full: "World Health Organization", icon: <Heart className="w-6 h-6" />, focus: "Global Health" },
    { name: "UNESCO", full: "UN Educational, Scientific & Cultural Org", icon: <BookOpen className="w-6 h-6" />, focus: "Education & Culture" },
    { name: "ILO", full: "International Labour Organization", icon: <Users className="w-6 h-6" />, focus: "Workers' Rights" },
    { name: "UNICEF", full: "UN Children's Fund", icon: <Heart className="w-6 h-6" />, focus: "Children's Welfare" }
  ];

  const indiaUNRoles = [
    { role: "UN Peacekeeping Operations", description: "Largest contributor of peacekeeping forces", icon: "🕊️" },
    { role: "Human Rights Council", description: "Active member promoting human rights", icon: "🤝" },
    { role: "UNESCO World Heritage Committee", description: "Protects world heritage sites", icon: "🏛️" },
    { role: "International Solar Alliance", description: "Global solar energy initiative with France", icon: "☀️" },
    { role: "G-77 and China", description: "Leading voice for developing countries", icon: "🌍" },
    { role: "UN Peacebuilding Commission", description: "Supporting post-conflict countries", icon: "🔨" },
    { role: "Sustainable Development Goals", description: "Champions poverty alleviation and clean energy", icon: "🎯" }
  ];

  return (
    <div
      id="m-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-5"] = el;
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
              International Law & the United Nations
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover how countries work together to maintain peace, protect rights, and solve global challenges
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is International Law */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is International Law?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <div className="flex items-center space-x-4 mb-6">
                  <Scale className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Definition</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  International law is the body of <strong className="text-green-600">rules and principles</strong> that govern relations between sovereign states and other international actors. It aims to promote <strong className="text-emerald-600">peace, justice, and cooperation</strong> globally.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-400">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">⚠️</span>
                  <h4 className="text-lg font-bold text-gray-800">Key Difference</h4>
                </div>
                <p className="text-gray-700">
                  Unlike domestic law, international law depends largely on the <strong>consent and cooperation</strong> of countries rather than enforcement by a central authority.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Cooperation</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: "🕊️", text: "Promotes Peace" },
                    { icon: "⚖️", text: "Ensures Justice" },
                    { icon: "🤝", text: "Builds Cooperation" },
                    { icon: "🛡️", text: "Protects Rights" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-gray-700 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sources of International Law */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sources of International Law
            </h2>
          </div>

          {/* Featured Source (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${lawSources[currentSource].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">{lawSources[currentSource].icon}</div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{lawSources[currentSource].title}</h3>
                    <p className="text-lg opacity-90 mb-3">{lawSources[currentSource].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Examples: <strong>{lawSources[currentSource].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Sources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawSources.map((source, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentSource === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentSource(index)}
              >
                <div className={`bg-gradient-to-r ${source.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {source.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{source.title}</h3>
                <p className="text-sm text-gray-600 text-center mb-3">{source.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-600 text-center">{source.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role and Importance */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Role & Importance of International Law
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🕊️",
                title: "Prevents Conflicts",
                description: "Regulates the use of force and encourages peaceful dispute resolution between nations"
              },
              {
                icon: "🛡️", 
                title: "Protects Human Rights",
                description: "Safeguards human rights and humanitarian laws, especially during wars and crises"
              },
              {
                icon: "🌍",
                title: "Governs Global Issues", 
                description: "Manages international trade, environmental protection, maritime boundaries, and more"
              },
              {
                icon: "🤝",
                title: "Facilitates Cooperation",
                description: "Enables global cooperation on terrorism, climate change, and health emergencies"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* United Nations Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-6xl mb-6">🇺🇳</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The United Nations
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-400 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in <strong className="text-blue-600">1945</strong> after World War II, the United Nations is the principal international organisation dedicated to maintaining <strong className="text-indigo-600">international peace and security</strong>, promoting human rights, and fostering social and economic development worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Main Organs of UN */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Main Organs of the UN
            </h2>
          </div>

          {/* Featured Organ (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Featuring</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl">{unOrgans[currentOrgan].emoji}</div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{unOrgans[currentOrgan].name}</h3>
                    <p className="text-lg opacity-90 mb-3">{unOrgans[currentOrgan].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">{unOrgans[currentOrgan].detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Organs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unOrgans.map((organ, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentOrgan === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentOrgan(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{organ.emoji}</div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 w-fit mx-auto mb-4">
                    {organ.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{organ.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{organ.description}</p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-600">{organ.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Council P5 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🛡️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Security Council Permanent Five (P5)
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              These 5 countries have <strong className="text-blue-600">veto power</strong> and permanent seats due to their major roles in World War II
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {p5Countries.map((country, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{country.name}</h3>
                <p className="text-xs text-gray-600">{country.role}</p>
                <div className="mt-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-2">
                  <p className="text-xs text-blue-700 font-semibold">VETO POWER</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Agencies */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Specialized Agencies & Programmes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedAgencies.map((agency, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 w-fit mx-auto mb-4">
                    {agency.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{agency.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{agency.full}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <p className="text-sm text-green-700 font-semibold">{agency.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India and the UN */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="text-6xl mb-6">🇮🇳</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              India and the United Nations
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-8 border-l-4 border-orange-400 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                India is a <strong className="text-orange-600">founding member</strong> of the UN and has played an active role in peacekeeping operations, global policymaking, and international law development. It advocates for reform in the UN Security Council to better represent developing countries.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indiaUNRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{role.role}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaway
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 font-medium mb-4">
                International Law and the UN work together to create a peaceful, just world where countries cooperate to solve global challenges.
              </p>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold">International Law</span>
                <span className="text-2xl">+</span>
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold">United Nations</span>
                <span className="text-2xl">=</span>
                <span className="bg-gradient-to-r from-teal-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold">Global Peace 🌍</span>
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

export default Module5InternationalLaw;