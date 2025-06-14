import React, { useState } from "react";

const pillarsData = [
  {
    id: 1,
    icon: "🌳",
    title: "Environmental Sustainability",
    color: "emerald",
    description: "Using natural resources carefully and renewing them when possible. Reducing pollution and conserving biodiversity.",
    examples: [
      "Planting trees to restore green cover",
      "Using public transport to reduce carbon emissions",
      "Avoiding plastic that pollutes oceans and soil"
    ],
    bgGradient: "from-emerald-50 to-green-100",
    borderColor: "border-emerald-300",
    textColor: "text-emerald-800"
  },
  {
    id: 2,
    icon: "🧑‍🤝‍🧑",
    title: "Social Sustainability",
    color: "blue",
    description: "Ensuring everyone has access to clean water, education, healthcare, and safe working conditions. Promoting fairness and equality.",
    examples: [
      "Building schools and hospitals in remote villages",
      "Supporting fair wages for farmers and workers",
      "Providing clean toilets and menstrual hygiene in schools"
    ],
    bgGradient: "from-blue-50 to-cyan-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800"
  },
  {
    id: 3,
    icon: "💰",
    title: "Economic Sustainability",
    color: "amber",
    description: "Encouraging development that doesn't harm the environment or exploit workers. Creating jobs that are both profitable and planet-friendly.",
    examples: [
      "Green startups that use recycled materials",
      "Farmers practicing organic farming to reduce chemical use",
      "Companies investing in clean energy like wind and solar"
    ],
    bgGradient: "from-amber-50 to-yellow-100",
    borderColor: "border-amber-300",
    textColor: "text-amber-800"
  }
];

const practicesData = [
  { action: "Energy Use", sustainable: "Solar panels instead of coal", benefit: "Clean, renewable power", icon: "☀️" },
  { action: "Water", sustainable: "Rainwater harvesting in schools", benefit: "Saves water, reduces dependency", icon: "💧" },
  { action: "Bags", sustainable: "Cloth/jute bags over plastic", benefit: "Less pollution, reusable", icon: "🛍️" },
  { action: "Agriculture", sustainable: "Crop rotation & organic farming", benefit: "Maintains soil fertility", icon: "🌱" },
  { action: "Transport", sustainable: "Cycling or carpooling", benefit: "Lowers air pollution", icon: "🚲" }
];

const Module2 = ({ topicRefs }) => {
  const [activePillar, setActivePillar] = useState(null);
  const [selectedPractice, setSelectedPractice] = useState(null);

  return (
    <div
      id="2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">♻️</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-green-200">
              Sustainability
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Meeting our needs without harming future generations' ability to meet theirs
            </p>
          </div>
          <div className="absolute top-4 right-4 text-4xl opacity-30 animate-spin">🌍</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-pulse">🌱</div>
        </div>

        {/* What is Sustainability */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border-l-4 border-indigo-400 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">📌</span>
              What is Sustainability?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>Sustainability</strong> means meeting our needs (like food, water, energy, shelter) 
                  without harming the ability of future generations to meet theirs.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  It's not just about saving trees or recycling — it's about building a system where 
                  <span className="font-bold text-indigo-600"> people, planet, and progress</span> can coexist.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100">
                <h3 className="text-xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
                  🧠 Think of Earth as a Bank Account
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">❌</span>
                    <p>Keep withdrawing without saving = Account empties</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✅</span>
                    <p>Live off the "interest" (solar energy) not principal (coal/oil)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ⚖️ The 3 Pillars of Sustainability
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Sustainability stands on three main pillars. If any one of them is weak, the entire system collapses.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {pillarsData.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`bg-gradient-to-br ${pillar.bgGradient} rounded-2xl p-6 border ${pillar.borderColor} 
                         shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2
                         ${activePillar === pillar.id ? 'ring-4 ring-offset-2 ring-opacity-50' : ''}`}
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2 animate-pulse">{pillar.icon}</div>
                  <h3 className={`text-xl font-bold ${pillar.textColor} mb-3`}>
                    {pillar.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 text-center">
                  {pillar.description}
                </p>

                {activePillar === pillar.id && (
                  <div className="mt-4 space-y-2 animate-in slide-in-from-top duration-300">
                    <h4 className={`font-semibold ${pillar.textColor} mb-2`}>🔍 Examples:</h4>
                    {pillar.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <p className="text-sm text-gray-700">{example}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sustainable Practices Table */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              🌱 Examples of Sustainable Practices
            </span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4">
              <div className="grid grid-cols-4 gap-4 font-semibold text-center">
                <div>Action</div>
                <div>Sustainable Choice</div>
                <div>Benefit</div>
                <div>Impact</div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {practicesData.map((practice, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 p-4 hover:bg-emerald-50 transition-colors duration-200 cursor-pointer
                           ${selectedPractice === index ? 'bg-emerald-50 border-l-4 border-emerald-400' : ''}`}
                  onClick={() => setSelectedPractice(selectedPractice === index ? null : index)}
                >
                  <div className="font-medium text-gray-800 flex items-center gap-2">
                    <span className="text-2xl">{practice.icon}</span>
                    {practice.action}
                  </div>
                  <div className="text-gray-700">{practice.sustainable}</div>
                  <div className="text-gray-700">{practice.benefit}</div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Positive
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-400">
            <p className="text-lg text-gray-700 flex items-start gap-3">
              <span className="text-2xl">🏡</span>
              <span>
                Even small steps at home — like switching off lights, avoiding food waste, or reusing notebooks — count as sustainability.
              </span>
            </p>
          </div>
        </div>

        {/* Why Sustainability Matters */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              🧠 Why Sustainability Matters
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌍</div>
              <h3 className="text-xl font-bold text-red-700 mb-3 text-center">One Earth, Limited Resources</h3>
              <p className="text-gray-700 text-center">
                We can't "order another planet" on Amazon. What we have is all we get!
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⏳</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">Future Generations Depend on Us</h3>
              <p className="text-gray-700 text-center">
                The choices we make today shape their tomorrow. Let's make them count!
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-green-700 mb-3 text-center">Smarter Growth</h3>
              <p className="text-gray-700 text-center">
                Sustainable development combines technology, ecology, and human values.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sustainability is not a trend.
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            It is a <strong>habit</strong>, a <strong>responsibility</strong>, and a <strong>survival strategy</strong>. 
            If we want clean air, safe food, and a livable planet 20 years from now, the journey starts with informed choices <em>today</em>.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Start Your Sustainable Journey Today!</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module2;