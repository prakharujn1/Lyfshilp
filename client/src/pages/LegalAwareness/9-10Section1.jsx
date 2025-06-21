import React, { useState, useEffect } from "react";

const timelineData = [
  {
    date: "9 December 1946",
    event: "First meeting of Constituent Assembly",
    icon: "🎯",
    color: "from-green-400 to-emerald-500"
  },
  {
    date: "29 August 1947",
    event: "Drafting Committee formed",
    icon: "📝",
    color: "from-emerald-400 to-teal-500"
  },
  {
    date: "February 1948",
    event: "Draft completed",
    icon: "📋",
    color: "from-teal-400 to-cyan-500"
  },
  {
    date: "26 November 1949",
    event: "Constitution adopted (Constitution Day)",
    icon: "🎉",
    color: "from-cyan-400 to-blue-500"
  },
  {
    date: "26 January 1950",
    event: "Constitution came into effect",
    icon: "🇮🇳",
    color: "from-blue-400 to-indigo-500"
  }
];

const keyPersonalities = [
  {
    name: "Dr. Rajendra Prasad",
    role: "President of the Assembly",
    icon: "👨‍⚖️",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Dr. B.R. Ambedkar",
    role: "Chairman of Drafting Committee - 'Architect of the Constitution'",
    icon: "🏗️",
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "Jawaharlal Nehru",
    role: "Proposed the Objective Resolution (became the Preamble)",
    icon: "📜",
    color: "from-teal-500 to-cyan-600"
  },
  {
    name: "Others",
    role: "Sardar Vallabhbhai Patel, K.M. Munshi, Hansa Mehta, T.T. Krishnamachari",
    icon: "👥",
    color: "from-cyan-500 to-blue-600"
  }
];

const committees = [
  { name: "Union Powers Committee", icon: "⚡", desc: "Defined central government powers" },
  { name: "Provincial Constitution Committee", icon: "🏛️", desc: "Structured state governance" },
  { name: "Advisory Committee on Minorities", icon: "🤝", desc: "Protected minority rights" },
  { name: "Drafting Committee", icon: "✍️", desc: "Most important - drafted the final Constitution" }
];

const uniqueFeatures = [
  {
    feature: "Lengthiest Written Constitution",
    description: "Most comprehensive constitution in the world",
    icon: "📚",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    feature: "Federal + Unitary Features",
    description: "Balances central authority with state autonomy",
    icon: "⚖️",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    feature: "Global Inspiration",
    description: "UK (Parliamentary), USA (Bill of Rights), Ireland (DPSPs), Canada (Federalism)",
    icon: "🌍",
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    feature: "Adaptable Framework",
    description: "100+ amendments show its flexibility",
    icon: "🔄",
    gradient: "from-cyan-400 to-blue-500"
  }
];

const Module1 = ({ topicRefs }) => {
  const [activePersonality, setActivePersonality] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-8 right-8 bg-white/20 rounded-full p-4 backdrop-blur-sm animate-pulse">
            <div className="text-3xl">📜</div>
          </div>
          <div className="absolute bottom-8 left-8 bg-white/20 rounded-full p-3 backdrop-blur-sm animate-bounce">
            <div className="text-2xl">⚖️</div>
          </div>

          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-6 animate-bounce">🏛️</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
              The Constituent Assembly
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-100">
              & The Making of the Indian Constitution
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-green-50">
              The remarkable journey of creating the world's longest written constitution
            </p>
          </div>
        </div>

        {/* Why Was a New Constitution Needed */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-8 border-l-4 border-green-500 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 flex items-center gap-3">
              <span className="text-4xl animate-pulse">🤔</span>
              Why Was a New Constitution Needed?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  After centuries of British colonial rule and the trauma of Partition, 
                  India needed a <strong className="text-green-700">fresh, indigenous framework</strong> to 
                  govern itself as a sovereign, democratic republic.
                </p>
                <p className="text-lg text-gray-700">
                  The British laws, like the Government of India Act, 1935, were no longer adequate 
                  for an independent nation with its own aspirations and values.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                  🔗 Breaking the Colonial Chain
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-gray-600">Colonial Laws (Outdated)</span>
                  </div>
                  <div className="w-full h-2 bg-gradient-to-r from-red-200 to-green-200 rounded-full"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Indian Constitution (New Era)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Origins and Composition */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🧠 Origins and Composition
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl mb-4 animate-bounce">📊</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">389</h3>
                <p className="text-gray-700">Total members initially</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: '0.1s' }}>🔢</div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">299</h3>
                <p className="text-gray-700">After Partition</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: '0.2s' }}>👩</div>
                <h3 className="text-2xl font-bold text-teal-800 mb-2">15</h3>
                <p className="text-gray-700">Women members (including Sarojini Naidu, Durgabai Deshmukh)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <p className="text-center text-lg text-gray-700">
              <strong>Formation:</strong> Under the Cabinet Mission Plan (1946) • 
              <strong> Composition:</strong> Representatives chosen by Provincial Legislative Assemblies
            </p>
          </div>
        </div>

        {/* Key Personalities */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              👑 Key Personalities
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {keyPersonalities.map((person, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl 
                         transition-all duration-500 cursor-pointer border-l-4 border-transparent hover:border-green-400
                         ${activePersonality === index ? 'ring-4 ring-green-200 border-green-400 scale-105' : ''}`}
                onClick={() => setActivePersonality(activePersonality === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${person.color} rounded-full p-3 text-3xl shadow-lg`}>
                    {person.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {person.name}
                    </h3>
                    <p className="text-gray-700">
                      {person.role}
                    </p>
                  </div>
                </div>

                {activePersonality === index && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 animate-in slide-in-from-top duration-500">
                    <p className="text-sm text-gray-600 italic">
                      Click to learn more about their contributions...
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              📅 Journey Timeline
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`bg-gradient-to-r ${item.color} rounded-full p-2 text-2xl`}>
                          {item.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'text-right' : ''}>
                          <h3 className="font-bold text-gray-800">{item.date}</h3>
                          <p className="text-gray-600 text-sm">{item.event}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Duration Summary */}
          <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">⏱️ Total Duration</h3>
            <p className="text-lg">2 years, 11 months, and 18 days</p>
            <p className="text-green-200">Total sittings: 165</p>
          </div>
        </div>

        {/* Committees */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              🧱 Committees and Drafting Process
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="text-3xl bg-white rounded-full p-2 shadow-md">
                    {committee.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{committee.name}</h3>
                    <p className="text-gray-600">{committee.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-400">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Over 20 committees</span> were formed to ensure thorough examination of every aspect of governance
            </p>
          </div>
        </div>

        {/* Key Legal Provisions */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              📌 Key Legal Provisions
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Article 394</h3>
                <p className="text-gray-600">Specifies the commencement of the Constitution</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Article 368</h3>
                <p className="text-gray-600">Provides for amendment procedure</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Preamble</h3>
                <p className="text-gray-600">Enshrines Justice, Liberty, Equality, and Fraternity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Features */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ✨ Unique Features
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} rounded-full p-3 text-3xl shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.feature}
                    </h3>
                    <p className="text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Still Matters */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4 animate-pulse">🔑</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why It Still Matters Today
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-semibold mb-2">Fundamental Rights</h3>
              <p className="text-sm text-green-100">Guarantees basic freedoms (Part III)</p>
            </div>
            
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg font-semibold mb-2">Welfare Governance</h3>
              <p className="text-sm text-green-100">Directive Principles ensure social justice (Part IV)</p>
            </div>
            
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/30">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold mb-2">Adaptability</h3>
              <p className="text-sm text-green-100">100+ amendments show flexibility</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module1;