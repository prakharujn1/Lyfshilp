import React, { useState } from "react";

const termsData = [
  {
    id: 1,
    term: "Ecosystem",
    icon: "🌿",
    definition: "A community where living (biotic) and non-living (abiotic) things interact in a balanced way.",
    example: "A pond is an ecosystem — fish, frogs, water, algae, sunlight, and mud all affect each other.",
    whyMatters: "If one part is harmed (say, pollution kills algae), the whole system suffers.",
    color: "green",
    bgGradient: "from-green-50 to-emerald-100",
    borderColor: "border-green-300",
    textColor: "text-green-800",
    ringColor: "ring-green-400"
  },
  {
    id: 2,
    term: "Carbon Footprint",
    icon: "🦶",
    definition: "The total amount of greenhouse gases (mainly CO₂) released by a person, product, or activity.",
    example: "Using a car, eating meat, or charging your phone — all add to your carbon footprint.",
    whyMatters: "The bigger the footprint, the more damage to the climate. The goal is to reduce it.",
    color: "blue",
    bgGradient: "from-blue-50 to-cyan-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    ringColor: "ring-blue-400"
  },
  {
    id: 3,
    term: "Greenhouse Effect",
    icon: "🌡️",
    definition: "A natural process where gases in Earth's atmosphere trap heat — keeping the planet warm.",
    example: "Like a blanket around Earth — keeps us cozy, but too many layers (gases) make us overheat.",
    whyMatters: "This effect becomes dangerous when human activity adds too many heat-trapping gases.",
    color: "orange",
    bgGradient: "from-orange-50 to-red-100",
    borderColor: "border-orange-300",
    textColor: "text-orange-800",
    ringColor: "ring-orange-400"
  },
  {
    id: 4,
    term: "Global Warming",
    icon: "🔥",
    definition: "A gradual increase in Earth's average temperature, mainly due to human-caused emissions.",
    example: "2023 was one of the hottest years in history — a sign of global warming.",
    whyMatters: "Warmer Earth = stronger storms, melting glaciers, rising seas, crop failures.",
    color: "red",
    bgGradient: "from-red-50 to-pink-100",
    borderColor: "border-red-300",
    textColor: "text-red-800",
    ringColor: "ring-red-400"
  },
  {
    id: 5,
    term: "Biodegradable",
    icon: "🍌",
    definition: "Materials that break down naturally by bacteria or other organisms.",
    example: "Banana peels, paper, cotton cloth",
    whyMatters: "These return to nature without polluting it.",
    color: "yellow",
    bgGradient: "from-yellow-50 to-amber-100",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-800",
    ringColor: "ring-yellow-400"
  },
  {
    id: 6,
    term: "Non-Biodegradable",
    icon: "🧴",
    definition: "Substances that do not decompose easily — they stay in the environment for hundreds of years.",
    example: "Plastic bottles, aluminum foil, Styrofoam",
    whyMatters: "They pollute land, choke animals, and fill oceans and landfills.",
    color: "gray",
    bgGradient: "from-gray-50 to-slate-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-800",
    ringColor: "ring-gray-400"
  },
  {
    id: 7,
    term: "Renewable Resource",
    icon: "🔄",
    definition: "Resources that naturally replenish and don't run out easily — if used wisely.",
    example: "Sunlight, wind, water, biomass (like wood, dung)",
    whyMatters: "These are sustainable and eco-friendly sources of energy.",
    color: "teal",
    bgGradient: "from-teal-50 to-cyan-100",
    borderColor: "border-teal-300",
    textColor: "text-teal-800",
    ringColor: "ring-teal-400"
  },
  {
    id: 8,
    term: "Non-Renewable Resource",
    icon: "⛏️",
    definition: "Resources that take millions of years to form and will eventually run out.",
    example: "Coal, petroleum (crude oil), natural gas, minerals",
    whyMatters: "Once used, they're gone for generations. Burning them also harms the environment.",
    color: "purple",
    bgGradient: "from-purple-50 to-indigo-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-800",
    ringColor: "ring-purple-400"
  }
];

const Module5 = ({ topicRefs }) => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredTerms = termsData.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedTerms = showAll ? filteredTerms : filteredTerms.slice(0, 4);

  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">📚</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
              Key Terms & Definitions
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Master the essential vocabulary of environmental science
            </p>
          </div>
          <div className="absolute top-4 right-4 text-4xl opacity-30 animate-pulse">🔍</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-spin">📖</div>
          <div className="absolute top-1/2 left-8 text-2xl opacity-20 animate-bounce" style={{animationDelay: '1s'}}>💡</div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-xl">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Search terms or definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                />
              </div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {showAll ? "Show Less" : "Show All Terms"}
              </button>
            </div>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {displayedTerms.map((term, index) => (
            <div
              key={term.id}
              className={`bg-gradient-to-br ${term.bgGradient} rounded-2xl p-6 border ${term.borderColor} 
                       shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2
                       ${selectedTerm === term.id ? `ring-4 ring-offset-2 ${term.ringColor} ring-opacity-50 scale-105` : ''}
                       animate-in slide-in-from-bottom duration-700`}
              onClick={() => setSelectedTerm(selectedTerm === term.id ? null : term.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Term Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl md:text-5xl animate-pulse">{term.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-bold ${term.textColor} mb-1`}>
                    {term.term}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-2 h-2 rounded-full bg-${term.color}-400`}></span>
                    <span className="text-sm text-gray-600 font-medium">Environmental Term</span>
                  </div>
                </div>
              </div>

              {/* Definition */}
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed font-medium">
                  {term.definition}
                </p>
              </div>

              {/* Expanded Content */}
              {selectedTerm === term.id && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-500">
                  {/* Example */}
                  <div className="bg-white/70 rounded-xl p-4 border border-white/50">
                    <h4 className={`font-semibold ${term.textColor} mb-2 flex items-center gap-2`}>
                      <span className="text-lg">🔍</span>
                      Example
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {term.example}
                    </p>
                  </div>

                  {/* Why It Matters */}
                  <div className="bg-white/70 rounded-xl p-4 border border-white/50">
                    <h4 className={`font-semibold ${term.textColor} mb-2 flex items-center gap-2`}>
                      <span className="text-lg">🧠</span>
                      Why It Matters
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {term.whyMatters}
                    </p>
                  </div>
                </div>
              )}

              {/* Click to expand indicator */}
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500 font-medium">
                  {selectedTerm === term.id ? "Click to collapse" : "Click to learn more"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference Cards */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              🎯 Quick Reference Guide
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Biodegradable vs Non-biodegradable */}
            <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-6 border border-gray-200 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                🍌 Biodegradable vs 🧴 Non-Biodegradable
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded-xl p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Biodegradable</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Banana peels</li>
                    <li>• Paper</li>
                    <li>• Cotton cloth</li>
                    <li>• Food waste</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded-xl p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Non-Biodegradable</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Plastic bottles</li>
                    <li>• Aluminum foil</li>
                    <li>• Styrofoam</li>
                    <li>• Glass</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Renewable vs Non-renewable */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                🔄 Renewable vs ⛏️ Non-Renewable
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 rounded-xl p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">♻️ Renewable</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Solar energy</li>
                    <li>• Wind power</li>
                    <li>• Water (hydro)</li>
                    <li>• Biomass</li>
                  </ul>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">⚡ Non-Renewable</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Coal</li>
                    <li>• Petroleum</li>
                    <li>• Natural gas</li>
                    <li>• Minerals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Memory Game Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              🎮 Test Your Knowledge
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-8 text-white text-center shadow-2xl">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Memory Challenge</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Can you match each term with its correct definition? Challenge yourself and see how many you remember!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {termsData.slice(0, 4).map((term, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                >
                  <span>{term.icon}</span>
                  <span>{term.term}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Study Tips */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">💡</span>
              Study Tips for Mastering These Terms
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold text-indigo-700 mb-2">Practice Regularly</h3>
                <p className="text-gray-600 text-sm">Review these terms daily for 5 minutes to strengthen memory</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🖼️</div>
                <h3 className="font-semibold text-indigo-700 mb-2">Create Visual Connections</h3>
                <p className="text-gray-600 text-sm">Associate each term with a mental image or real-life example</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-3">🗣️</div>
                <h3 className="font-semibold text-indigo-700 mb-2">Explain to Others</h3>
                <p className="text-gray-600 text-sm">Teaching someone else helps reinforce your understanding</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            You're Building Your Environmental Vocabulary!
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            These terms are the <strong>building blocks</strong> of environmental understanding. 
            Master them, and you'll be able to discuss climate change, sustainability, and conservation like a pro!
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-2xl">📈</span>
            <span className="font-semibold">Keep Learning, Keep Growing!</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module5;
