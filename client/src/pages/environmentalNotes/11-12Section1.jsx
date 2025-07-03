import React, { useState, useEffect } from 'react';
import { Recycle, Droplets, Wind, Zap, TreePine, Factory, Globe, ChevronRight, Info, AlertCircle, Lightbulb, TrendingUp, BarChart3 } from 'lucide-react';

const Module1BiogeochemicalCycles = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCycle((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const cycles = [
    {
      name: "Carbon Cycle",
      icon: <TreePine className="w-8 h-8" />,
      description: "Nature's Currency of Life",
      detail: "Carbon is the backbone of life. Every cell is built on carbon.",
      process: "Photosynthesis → Respiration → Decomposition → Ocean Absorption",
      impact: "Burning fossil fuels releases ancient locked carbon",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Nitrogen Cycle", 
      icon: <Zap className="w-8 h-8" />,
      description: "The Protein Pipeline",
      detail: "78% of atmosphere, yet most beings can't use it directly",
      process: "Fixation → Assimilation → Ammonification → Nitrification",
      impact: "Chemical fertilizers cause eutrophication in water bodies",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Water Cycle",
      icon: <Droplets className="w-8 h-8" />,
      description: "Earth's Circulatory System", 
      detail: "Connects ecosystems across continents through circulation",
      process: "Evaporation → Condensation → Precipitation → Infiltration",
      impact: "Urban sprawl reduces infiltration, causing floods and droughts",
      color: "from-green-600 to-teal-600"
    },
    {
      name: "Phosphorus Cycle",
      icon: <Globe className="w-8 h-8" />,
      description: "The Slow Mover",
      detail: "Essential for DNA and ATP, but no atmospheric component",
      process: "Rock Weathering → Soil Absorption → Plant Uptake → Decomposition",
      impact: "Mining phosphorus faster than Earth can replace it",
      color: "from-teal-500 to-green-600"
    }
  ];

  const humanImpacts = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial Emissions",
      description: "Burning fossil fuels disrupts carbon balance",
      stat: "420+ ppm CO₂ (vs 280 ppm pre-industrial)"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Deforestation", 
      description: "Removes carbon sinks and disrupts water cycles",
      stat: "10 million hectares lost annually"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Pollution",
      description: "Fertilizer runoff creates ocean dead zones", 
      stat: "80% of India's surface water polluted"
    }
  ];

  return (
    <div
      id="s-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-1"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Recycle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Biogeochemical Cycles
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              🌿 Earth's Invisible Engines - The natural recycling systems that keep life flowing
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-green-100">
                Discover how <strong>Bio</strong> (life), <strong>Geo</strong> (Earth), and <strong>Chemical</strong> (elements) 
                work together in perfect harmony
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What Are Biogeochemical Cycles */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  What Are They?
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Biogeochemical cycles are the Earth's <strong className="text-green-600">natural recycling systems</strong>. 
                  These invisible engines run silently beneath every breath we take, every bite of food we eat, 
                  and every drop of rain that falls.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-2">🧬</div>
                      <h3 className="font-bold text-green-700">Bio</h3>
                      <p className="text-sm text-gray-600">Life</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🌍</div>
                      <h3 className="font-bold text-green-700">Geo</h3>
                      <p className="text-sm text-gray-600">Earth</p>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">⚛️</div>
                      <h3 className="font-bold text-green-700">Chemical</h3>
                      <p className="text-sm text-gray-600">Elements</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-600 text-white rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <AlertCircle className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Critical Truth</h3>
                  </div>
                  <p className="text-lg">
                    Without these cycles, life on Earth would shut down. Think of them as 
                    <strong> life's operating systems</strong> 🖥️
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">The Recycling Process</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Elements Move</h4>
                      <p className="text-sm text-gray-600">Between living organisms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Through Environment</h4>
                      <p className="text-sm text-gray-600">Air, water, soil, rocks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Back to Life</h4>
                      <p className="text-sm text-gray-600">Completing the cycle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Cycles Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ♻️ The Four Major Cycles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each cycle plays a unique role in maintaining Earth's delicate balance
            </p>
          </div>

          {/* Featured Cycle (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Featuring</div>
              <div className={`bg-gradient-to-r ${cycles[currentCycle].color} text-white rounded-3xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-8xl">{cycles[currentCycle].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-3">{cycles[currentCycle].name}</h3>
                    <p className="text-2xl opacity-90 mb-4">{cycles[currentCycle].description}</p>
                    <p className="text-lg opacity-80 mb-4">{cycles[currentCycle].detail}</p>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-sm"><strong>Process:</strong> {cycles[currentCycle].process}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Cycles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cycles.map((cycle, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentCycle === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-br from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentCycle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r ${cycle.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {cycle.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cycle.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{cycle.description}</p>
                {hoveredCard === index && (
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-xs text-gray-700">{cycle.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Cycle Explanations */}
        <div className="space-y-16">
          
          {/* Carbon Cycle */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <TreePine className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    🟢 Carbon Cycle - Nature's Currency
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Carbon is the <strong className="text-green-600">backbone of life</strong>. 
                  Every cell, from the smallest microbe to the largest whale, is built on carbon.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h4 className="font-semibold text-gray-800">Photosynthesis</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Plants absorb CO₂ and convert it into glucose</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <h4 className="font-semibold text-gray-800">Respiration</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Animals break down glucose, releasing CO₂</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <h4 className="font-semibold text-gray-800">Decomposition</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Dead organisms return carbon to soil</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800">💡 Bank Analogy</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong className="text-green-600">Nature:</strong> Carefully earns, saves, spends, and reinvests carbon
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700">
                      <strong className="text-red-600">Humans:</strong> Overspending + printing fake currency (excess CO₂)
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong className="text-orange-600">Result:</strong> Climate inflation - heatwaves, floods, food insecurity
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-3">
                    <p className="font-bold">📉 280 ppm → 420+ ppm in just 200 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nitrogen Cycle */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800">🍚 Rice Analogy</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong className="text-blue-600">Nitrogen:</strong> Like uncooked rice - abundant but needs a cook (bacteria)
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong className="text-green-600">Natural Process:</strong> Bacteria carefully prepare usable forms
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700">
                      <strong className="text-red-600">Fertilizers:</strong> Like force-feeding instant noodles - quick but unhealthy
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-orange-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Punjab Example:</strong> Green revolution → soil fatigue + contaminated water
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Zap className="w-10 h-10 text-emerald-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    🟡 Nitrogen Cycle - The Protein Pipeline
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nitrogen makes up <strong className="text-emerald-600">78% of the atmosphere</strong>, 
                  yet most living beings can't use it in that form. It must be converted - fixed - into usable forms.
                </p>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <h4 className="font-semibold text-gray-800">Nitrogen Fixation</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Bacteria convert inert N₂ into usable nitrates</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h4 className="font-semibold text-gray-800">Assimilation</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Plants absorb nitrates → passed to animals</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <h4 className="font-semibold text-gray-800">Decomposition & Return</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Waste converted back to ammonia and N₂</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Water Cycle */}
          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-teal-500">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Droplets className="w-10 h-10 text-teal-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  🔵 Water Cycle - Earth's Circulatory System
                </h3>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Water is the <strong className="text-teal-600">beating heart of the planet</strong>, 
                connecting ecosystems across continents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { step: "Evaporation", icon: "☀️", desc: "Water rises from oceans & plants" },
                { step: "Condensation", icon: "☁️", desc: "Forms clouds in atmosphere" },
                { step: "Precipitation", icon: "🌧️", desc: "Rain, snow, sleet falls" },
                { step: "Infiltration", icon: "🌊", desc: "Flows to rivers or groundwater" }
              ].map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{phase.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{phase.step}</h4>
                  <p className="text-sm text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
              <h4 className="font-bold text-red-700 mb-3">🌪️ Chennai's "Day Zero" Crisis (2019)</h4>
              <p className="text-gray-700">
                An urban water apocalypse where taps literally ran dry. This happens when we pave over 
                recharge zones and over-extract groundwater - pipes either burst (floods) or run dry (droughts).
              </p>
              <div className="mt-3 bg-white rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>India fact:</strong> Uses more groundwater than China + US combined! 🚰
                </p>
              </div>
            </div>
          </div>

          {/* Phosphorus Cycle */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-600">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Globe className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    🟣 Phosphorus Cycle - The Slow Mover
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Essential for <strong className="text-green-600">DNA and ATP</strong> (energy molecule), 
                  but unlike other cycles, it has <strong>no atmospheric component</strong> - moves slowly through rocks, water, and soil.
                </p>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">🔄 Natural Flow:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      <p className="text-gray-700">Rocks weather → phosphate enters soil</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      <p className="text-gray-700">Plants absorb → animals eat plants</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <ChevronRight className="w-4 h-4 text-green-500" />
                      <p className="text-gray-700">Decomposers return to soil → buried as sediments</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800">⚠️ Future Shock</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">Finite Resource</h5>
                    <p className="text-sm text-gray-700">
                      Unlike oil, we can't "invent" phosphorus in a lab. We're mining it faster than Earth can replace.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">Peak Phosphorus</h5>
                    <p className="text-sm text-gray-700">
                      Predicted by 2035 - could make global food production vulnerable
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-700 mb-2">Current Impact</h5>
                    <p className="text-sm text-gray-700">
                      Excess fertilizer runoff creates dead zones in lakes and seas due to algal overgrowth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Human Impact Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <AlertCircle className="w-10 h-10 text-red-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                🚨 Human Disruption Alert
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              In just 200 years, human activity has started overloading cycles that worked in harmony for billions of years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {humanImpacts.map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-100 rounded-full p-3">
                    {impact.icon}
                  </div>
                  <h3 className="font-bold text-gray-800">{impact.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{impact.description}</p>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-red-700">{impact.stat}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🌐 Interconnected Crisis Example</h3>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-orange-700">Melting permafrost</strong> (from global warming) → 
                releases <strong className="text-red-700">methane</strong> (potent greenhouse gas) → 
                accelerates <strong className="text-green-700">carbon cycle disruption</strong> → 
                affects <strong className="text-blue-700">water and nitrogen cycles</strong> too
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Lightbulb className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ✅ Key Takeaways
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-lg font-bold text-gray-800">Life Support Systems</h3>
                </div>
                <p className="text-gray-700">
                  Biogeochemical cycles are not environmental trivia - they are the life support systems of our planet
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-800">Interconnected Web</h3>
                </div>
                <p className="text-gray-700">
                  Each cycle is interconnected. Disturb one, and the ripple affects all others
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-800">Harmony Disrupted</h3>
                </div>
                <p className="text-gray-700">
                  These cycles worked in harmony for billions of years - until human activity started overloading them
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">🌍 The Big Picture</h3>
                <p className="text-lg mb-6">
                  Sustainability means <strong>living within the boundaries of these cycles</strong>, 
                  not bulldozing over them.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm">
                    Every breath, every meal, every drop of water depends on these invisible engines. 
                    Understanding them is the first step to protecting our future. 🌱
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Summary */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🎯 Quick Cycle Review
            </h2>
            <p className="text-gray-600">
              Test your understanding by clicking on each cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cycles.map((cycle, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setCurrentCycle(index)}
              >
                <div className={`bg-gradient-to-br ${cycle.color} text-white rounded-2xl p-6 text-center transform group-hover:scale-110 transition-all duration-300 ${
                  currentCycle === index ? 'ring-4 ring-green-300 scale-110' : ''
                }`}>
                  <div className="text-4xl mb-3">{cycle.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{cycle.name}</h3>
                  <p className="text-sm opacity-90">{cycle.description}</p>
                  {currentCycle === index && (
                    <div className="mt-4 bg-white/20 rounded-lg p-3 animate-fade-in">
                      <p className="text-xs">{cycle.impact}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Remember This Formula:</h3>
              <p className="text-lg">
                <strong>Bio</strong> + <strong>Geo</strong> + <strong>Chemical</strong> = 
                <strong> Life's Operating System</strong> 🖥️🌍
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

export default Module1BiogeochemicalCycles;