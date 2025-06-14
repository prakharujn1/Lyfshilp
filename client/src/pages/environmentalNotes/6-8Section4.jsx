import React, { useState, useEffect } from "react";

const causesData = [
  {
    id: 1,
    icon: "🏭",
    title: "Greenhouse Gas Emissions",
    description: "Gases like CO₂, methane, and nitrous oxide trap heat in Earth's atmosphere",
    sources: [
      "Burning fossil fuels in cars, factories, and power plants",
      "Agriculture (especially from cattle and rice fields)",
      "Industrial processes and landfill gas release"
    ],
    color: "from-red-400 to-orange-500",
    bgColor: "from-red-50 to-orange-50",
    borderColor: "border-red-300"
  },
  {
    id: 2,
    icon: "🌲",
    title: "Deforestation",
    description: "Trees absorb CO₂. Fewer trees = less carbon absorption",
    sources: [
      "Forests cleared for agriculture and logging",
      "Development and urbanization",
      "More CO₂ stays in atmosphere, worsening global warming"
    ],
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-300"
  },
  {
    id: 3,
    icon: "🛒",
    title: "Overconsumption & Waste",
    description: "High energy use and unsustainable lifestyles increase emissions",
    sources: [
      "Excessive use of gadgets, appliances, and air conditioners",
      "Fast fashion, food waste, single-use plastics",
      "Unsustainable production = more emissions"
    ],
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-300"
  }
];

const effectsData = [
  {
    id: 1,
    icon: "🌊",
    title: "Rising Sea Levels",
    description: "Melting ice caps and glaciers add water to oceans",
    impact: "Islands like the Maldives may become uninhabitable within decades",
    quote: "\"Samundar andar aa raha hai, hum toh baithe hain chhat par\"",
    quoteSource: "Villagers in Sundarbans",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    id: 2,
    icon: "🧊",
    title: "Melting Glaciers",
    description: "Himalayan glaciers are retreating rapidly",
    impact: "Affects water supplies for millions of people",
    quote: "\"Pehle toh barf June tak rehti thi...\"",
    quoteSource: "Local communities",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    icon: "🔥",
    title: "Extreme Weather",
    description: "More heatwaves, flooding, and severe droughts",
    impact: "Increased flooding in Mumbai, Chennai; droughts in Maharashtra, Rajasthan",
    quote: "\"Yeh Mausam Pehle Nahin Tha\"",
    quoteSource: "Grandparents everywhere",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 4,
    icon: "🌾",
    title: "Food Security Impact",
    description: "Crops fail due to unpredictable weather and pests",
    impact: "Affects farmers, food prices, and nutrition",
    quote: "\"Aloo's Getting Pricier\"",
    quoteSource: "Climate injustice in motion",
    gradient: "from-yellow-400 to-orange-500"
  }
];

const globalEffortsData = [
  {
    title: "The Paris Agreement (2015)",
    icon: "🌡️",
    description: "International treaty where 190+ countries pledged to limit global warming to well below 2°C, ideally to 1.5°C",
    commitment: "India committed to reduce emissions intensity of its GDP by 33-35% by 2030",
    color: "blue"
  },
  {
    title: "COP (Conference of Parties)",
    icon: "🛢️",
    description: "Annual climate summits where nations report progress and set tougher targets",
    commitment: "Focus areas: fossil fuel phaseout, climate finance, green tech transfer",
    color: "green"
  },
  {
    title: "Kyoto Protocol (1997)",
    icon: "🌱",
    description: "First legally binding international agreement on reducing greenhouse gases",
    commitment: "Laid the groundwork for future climate agreements",
    color: "purple"
  }
];

const indiaActionsData = [
  {
    title: "National Action Plan on Climate Change (NAPCC)",
    icon: "🪔",
    year: "2008",
    description: "Includes 8 missions from promoting solar energy to sustainable agriculture"
  },
  {
    title: "International Solar Alliance (ISA)",
    icon: "🔋",
    year: "Ongoing",
    description: "India-led initiative to mobilize 120+ countries to harness solar energy"
  },
  {
    title: "Green India Mission",
    icon: "🌳",
    year: "Ongoing",
    description: "Targets reforestation and restoring degraded ecosystems"
  },
  {
    title: "Lifestyle for Environment (LiFE)",
    icon: "🚉",
    year: "2021",
    description: "Promotes mindful and sustainable consumption choices"
  }
];

const Module4 = ({ topicRefs }) => {
  const [activeEffect, setActiveEffect] = useState(null);
  const [activeCause, setActiveCause] = useState(null);
  const [temperatureAnimation, setTemperatureAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperatureAnimation(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br  from-red-500 via-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          
          {/* Animated Temperature Indicator */}
          <div className="absolute top-6 right-6 bg-white/20 rounded-full p-4 backdrop-blur-sm">
            <div className="text-3xl animate-pulse">🌡️</div>
            <div className="text-white text-sm font-medium mt-1">
              +{(temperatureAnimation * 0.02).toFixed(1)}°C
            </div>
          </div>

          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">🔥</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              Climate Change
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Long-term shifts in temperature and weather patterns largely caused by human activities
            </p>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-8 left-8 text-4xl opacity-40 animate-spin-slow">🌍</div>
          <div className="absolute bottom-8 right-12 text-3xl opacity-40 animate-pulse">⚡</div>
          <div className="absolute bottom-12 left-12 text-2xl opacity-40 animate-bounce">💨</div>
        </div>

        {/* What is Climate Change */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border-l-4 border-red-400 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <span className="text-4xl animate-pulse">🌍</span>
              What is Climate Change?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>Climate change</strong> refers to long-term shifts in temperature, weather patterns, 
                  and global climate systems — largely caused by human activities.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  While Earth's climate has changed in the past, what's alarming now is the 
                  <span className="font-bold text-red-600"> speed and scale</span> of change due to 
                  <span className="font-bold text-red-600"> human interference</span>.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-red-100">
                <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
                  ⏳ Earth's Rising Fever
                </h3>
                <div className="bg-gradient-to-r from-blue-200 to-red-500 rounded-full h-4 mb-4 relative overflow-hidden">
                  <div 
                    className="bg-red-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.min(75 + temperatureAnimation * 0.25, 95)}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 text-sm">
                  Think of Earth as a patient with a rising fever — climate change is that fever, and humans are the cause.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Causes */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              🧪 Main Causes of Climate Change
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's break down how our actions are heating up the planet
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {causesData.map((cause, index) => (
              <div
                key={cause.id}
                className={`bg-gradient-to-br ${cause.bgColor} rounded-2xl p-6 border ${cause.borderColor} 
                         shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3
                         ${activeCause === cause.id ? 'ring-4 ring-offset-2 ring-opacity-50 scale-105' : ''}`}
                onClick={() => setActiveCause(activeCause === cause.id ? null : cause.id)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                    {cause.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {cause.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 text-center">
                  {cause.description}
                </p>

                {activeCause === cause.id && (
                  <div className="mt-4 space-y-2 animate-in slide-in-from-top duration-500">
                    <h4 className="font-semibold text-gray-800 mb-2">📍 Sources:</h4>
                    {cause.sources.map((source, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 text-sm">•</span>
                        <p className="text-sm text-gray-700">{source}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-500">
                    {activeCause === cause.id ? 'Click to collapse' : 'Click to expand'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Fun Fact */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-400">
            <div className="flex items-start gap-4">
              <span className="text-3xl animate-spin-slow">🧠</span>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Fun Fact!</h3>
                <p className="text-gray-700">
                  If food waste were a country, it would be the <strong>third largest emitter</strong> of 
                  greenhouse gases after China and the U.S.!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visible Effects */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              ⚡ Visible Effects Around the World
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Climate change is no longer a distant threat. Its impact is visible <em>now</em>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {effectsData.map((effect, index) => (
              <div
                key={effect.id}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl 
                         transition-all duration-500 cursor-pointer border-l-4 border-transparent hover:border-blue-400
                         ${activeEffect === effect.id ? 'ring-4 ring-blue-200 border-blue-400' : ''}`}
                onClick={() => setActiveEffect(activeEffect === effect.id ? null : effect.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${effect.gradient} rounded-full p-3 text-3xl`}>
                    {effect.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {effect.title}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {effect.description}
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      {effect.impact}
                    </p>
                  </div>
                </div>

                {activeEffect === effect.id && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 animate-in slide-in-from-top duration-500">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💬</span>
                      <div>
                        <blockquote className="text-gray-700 italic font-medium mb-2">
                          {effect.quote}
                        </blockquote>
                        <cite className="text-sm text-gray-500">— {effect.quoteSource}</cite>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Data Snapshot */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <span className="text-4xl">🔎</span>
              Data Snapshot (India-specific)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <div className="text-4xl mb-3 text-center">🥉</div>
                <h3 className="text-xl font-bold mb-2 text-center">3rd Rank</h3>
                <p className="text-center text-white/90">
                  India ranks 3rd in global carbon emissions (after China and the US)
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <div className="text-4xl mb-3 text-center">🏭</div>
                <h3 className="text-xl font-bold mb-2 text-center">20 out of 30</h3>
                <p className="text-center text-white/90">
                  Most polluted cities in the world are in India
                </p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                <div className="text-4xl mb-3 text-center">🏔️</div>
                <h3 className="text-xl font-bold mb-2 text-center">Glaciers Shrinking</h3>
                <p className="text-center text-white/90">
                  Risk of future water wars as glaciers feeding major rivers shrink
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Efforts */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              🌐 Global Efforts
            </span>
          </h2>

          <div className="space-y-6">
            {globalEffortsData.map((effort, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl bg-gradient-to-r from-blue-100 to-green-100 rounded-full p-3">
                    {effort.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{effort.title}</h3>
                    <p className="text-gray-700 mb-3">{effort.description}</p>
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3 border-l-4 border-blue-400">
                      <p className="text-sm text-gray-700">{effort.commitment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India's Climate Action */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              🇮🇳 India's Climate Action
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {indiaActionsData.map((action, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl bg-white rounded-full p-2 shadow-md">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{action.title}</h3>
                    <span className="text-sm text-orange-600 font-medium">{action.year}</span>
                  </div>
                </div>
                <p className="text-gray-700">{action.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Impact Message */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4 animate-pulse">🔁</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Life = Proof of the Problem. But Also the Solution.
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
            From how you travel (bike &gt; Uber), to what you eat (local &gt; packaged), 
            to what you wear (repeat &gt; replace) — your lifestyle is either a{" "}
            <strong>climate burden or buffer</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🚲</div>
              <p className="text-sm">Choose sustainable transport</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🥬</div>
              <p className="text-sm">Eat local, reduce waste</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">♻️</div>
              <p className="text-sm">Reuse, recycle, reduce</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module4;