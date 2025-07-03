import React, { useState, useEffect } from 'react';
import { Activity, Thermometer, Wind, Droplets, TreePine, AlertTriangle, TrendingUp, BarChart3, Eye, Heart, Stethoscope, Target, MapPin, CheckSquare, Clock, ArrowRight, Star, Lightbulb, Trophy, Flag } from 'lucide-react';

const Module2EnvironmentalIndicators = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndicator, setCurrentIndicator] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndicator((prev) => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const indicators = [
    {
      name: "CO₂ Concentration",
      icon: <Thermometer className="w-8 h-8" />,
      current: ">420 ppm",
      preindustrial: "~280 ppm",
      status: "Critical",
      impact: "Global warming, sea-level rise, ocean acidification",
      color: "from-red-500 to-orange-600",
      statusColor: "bg-red-500"
    },
    {
      name: "Air Quality Index",
      icon: <Wind className="w-8 h-8" />,
      current: "300+ (Delhi winter)",
      safe: "0-50 WHO limit",
      status: "Hazardous",
      impact: "Asthma, heart disease, lung cancer",
      color: "from-orange-500 to-red-600",
      statusColor: "bg-red-600"
    },
    {
      name: "Biodiversity Index",
      icon: <TreePine className="w-8 h-8" />,
      current: "1 species lost/day",
      trend: "Declining rapidly",
      status: "Alarming",
      impact: "Ecosystem instability, crop failure",
      color: "from-yellow-500 to-orange-600",
      statusColor: "bg-orange-500"
    },
    {
      name: "Water Quality",
      icon: <Droplets className="w-8 h-8" />,
      current: "80% polluted (India)",
      healthy: "DO ≥ 6 mg/L",
      status: "Poor",
      impact: "Disease, ecosystem collapse",
      color: "from-blue-500 to-teal-600",
      statusColor: "bg-blue-600"
    },
    {
      name: "Ecological Footprint",
      icon: <Activity className="w-8 h-8" />,
      current: "1.7 Earths",
      sustainable: "1.0 Earth",
      status: "Overshoot",
      impact: "Resource depletion, future crisis",
      color: "from-purple-500 to-pink-600",
      statusColor: "bg-purple-500"
    }
  ];

  const aqiLevels = [
    { range: "0-50", level: "Good", color: "bg-green-500", health: "Minimal impact" },
    { range: "51-100", level: "Moderate", color: "bg-yellow-500", health: "Sensitive groups affected" },
    { range: "101-150", level: "Unhealthy for Sensitive", color: "bg-orange-500", health: "Health warnings" },
    { range: "151-200", level: "Unhealthy", color: "bg-red-500", health: "Everyone affected" },
    { range: "201-300", level: "Very Unhealthy", color: "bg-purple-500", health: "Emergency conditions" },
    { range: "300+", level: "Hazardous", color: "bg-red-800", health: "Health alert" }
  ];

  const waterParameters = [
    {
      name: "BOD",
      fullName: "Biological Oxygen Demand",
      meaning: "High BOD = more organic waste = less oxygen = aquatic life suffocates",
      healthy: "< 3 mg/L",
      polluted: "> 10 mg/L"
    },
    {
      name: "DO",
      fullName: "Dissolved Oxygen", 
      meaning: "Healthy water has enough oxygen for fish and aquatic life",
      healthy: "≥ 6 mg/L",
      polluted: "< 2 mg/L (dead zones)"
    },
    {
      name: "pH",
      fullName: "Acidity/Alkalinity",
      meaning: "Should be neutral for healthy aquatic ecosystems",
      healthy: "6.5-8.5",
      polluted: "< 6 or > 9"
    },
    {
      name: "Nitrates/Phosphates",
      fullName: "Nutrient Pollution",
      meaning: "Excess nutrients cause algae blooms that turn water into green sludge",
      healthy: "Low levels",
      polluted: "High = eutrophication"
    }
  ];

  return (
    <div
      id="s-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-2"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-20 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/15 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Stethoscope className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Environmental Indicators
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              📊 Planet Earth's Medical Report - Reading the vital signs of our environment
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-green-100">
                Just like doctors measure <strong>temperature, blood pressure, and pulse</strong> to diagnose illness, 
                scientists use environmental indicators to gauge our planet's health
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Why Indicators Matter */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  🧠 Why Indicators Matter
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Think of Earth as a <strong className="text-green-600">patient at a doctor's clinic</strong>. 
                But this isn't a single-day check-up - it's a long-term health chart that tracks patterns over decades.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-400">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-green-600" />
                    <p className="text-gray-700 font-medium">How sick or healthy our planet is</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border-l-4 border-emerald-400">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-emerald-600" />
                    <p className="text-gray-700 font-medium">What's causing the illness</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-4 border-l-4 border-teal-400">
                  <div className="flex items-center space-x-3">
                    <CheckSquare className="w-6 h-6 text-teal-600" />
                    <p className="text-gray-700 font-medium">Whether our "treatments" are working</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🩺 Earth's Check-up</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">Temperature</span>
                      <span className="text-red-600 font-bold">🌡️ Rising</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">Air Quality</span>
                      <span className="text-red-600 font-bold">💨 Critical</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">Biodiversity</span>
                      <span className="text-orange-600 font-bold">🦋 Declining</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">Water Quality</span>
                      <span className="text-red-600 font-bold">💧 Poor</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-red-100 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="text-sm text-red-700 font-medium">
                    These aren't just numbers - they're <strong>early warnings</strong>, 
                    nature's feedback loops whispering urgent messages 📢
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Indicators Overview */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🔍 Key Environmental Indicators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The vital signs that tell us how our planet is really doing
            </p>
          </div>

          {/* Featured Indicator (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Monitoring</div>
              <div className={`bg-gradient-to-r ${indicators[currentIndicator].color} text-white rounded-3xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-8xl">{indicators[currentIndicator].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-3">{indicators[currentIndicator].name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/20 rounded-xl p-3">
                        <p className="text-sm opacity-80">Current</p>
                        <p className="font-bold text-lg">{indicators[currentIndicator].current}</p>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <p className="text-sm opacity-80">Status</p>
                        <p className="font-bold text-lg">{indicators[currentIndicator].status}</p>
                      </div>
                    </div>
                    <p className="text-lg opacity-90">{indicators[currentIndicator].impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Indicators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {indicators.map((indicator, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentIndicator === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-br from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => {
                  setCurrentIndicator(index);
                  setSelectedIndicator(index);
                }}
              >
                <div className={`bg-gradient-to-r ${indicator.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                  {indicator.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{indicator.name}</h3>
                <div className={`${indicator.statusColor} text-white rounded-full px-2 py-1 text-xs font-medium`}>
                  {indicator.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Indicator Sections */}
        
        {/* CO2 Concentration */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Thermometer className="w-10 h-10 text-red-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  🌬️ Carbon Dioxide Concentration
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Current Level</h4>
                  <p className="text-2xl font-bold text-red-600">420 ppm</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Pre-industrial</h4>
                  <p className="text-2xl font-bold text-green-600">~280 ppm</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">🔥 Why It Matters:</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-gray-700">🌡️ Traps heat → global warming</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-gray-700">🧊 Melts glaciers → sea-level rise</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-gray-700">🌊 Acidifies oceans → marine life destruction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800">💡 Blanket Analogy</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong className="text-green-600">Natural CO₂:</strong> Like one cozy blanket on a summer night
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-gray-700">
                    <strong className="text-orange-600">Current CO₂:</strong> We've added too many layers
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-gray-700">
                    <strong className="text-red-600">Result:</strong> Earth is suffocating with heat
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-red-100 rounded-lg p-4">
                <p className="text-center text-red-700 font-bold">
                  📍 India is the world's 3rd largest CO₂ emitter
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Air Quality Index */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border-l-4 border-orange-500">
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Wind className="w-10 h-10 text-orange-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  💨 Air Quality Index (AQI)
                </h3>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The scale that measures how <strong className="text-orange-600">safe or dangerous</strong> it is to breathe
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-800">🧪 What It Measures:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-800 mb-2">PM2.5</h5>
                    <p className="text-sm text-gray-600">Tiny particles that penetrate lungs</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-800 mb-2">PM10</h5>
                    <p className="text-sm text-gray-600">Dust and smoke particles</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-800 mb-2">NO₂</h5>
                    <p className="text-sm text-gray-600">Nitrogen dioxide from vehicles</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-800 mb-2">SO₂</h5>
                    <p className="text-sm text-gray-600">Sulfur dioxide from factories</p>
                  </div>
                </div>

                <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
                  <h4 className="font-bold text-red-700 mb-3">😷 Delhi's "Gas Chamber" Winters</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>🔥 Farmers burn stubble → wind carries smoke</p>
                    <p>🏭 Combines with urban pollution</p>
                    <p>☁️ Creates choking haze</p>
                    <p className="font-bold text-red-700">📊 40x the safe WHO limit on some days!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">AQI Scale (0-500)</h4>
                <div className="space-y-3">
                  {aqiLevels.map((level, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-16 h-8 ${level.color} rounded text-white text-xs flex items-center justify-center font-bold`}>
                        {level.range}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{level.level}</p>
                        <p className="text-xs text-gray-600">{level.health}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    💡 <strong>Engine Oil Analogy:</strong> AQI is like your car's oil level - 
                    run it dirty too long, and the damage becomes permanent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biodiversity Index */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-yellow-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800">🎼 Orchestra Analogy</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong className="text-green-600">Biodiversity:</strong> Like a well-cast orchestra
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong className="text-orange-600">Species Loss:</strong> Remove enough musicians
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-gray-700">
                    <strong className="text-red-600">Result:</strong> Music turns to noise, then stops
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-red-100 rounded-lg p-4">
                <h5 className="font-bold text-red-700 mb-2">📉 Alarming Trend</h5>
                <p className="text-sm text-gray-700">
                  India loses nearly <strong>1 species every day</strong> to extinction or threat
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <TreePine className="w-10 h-10 text-yellow-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  🐝 Biodiversity Index
                </h3>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">🌿 What It Tracks:</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700">Variety of plant and animal species in a region</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700">Population health and genetic diversity</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-gray-800">🌍 Why It Matters:</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700">🐝 Fewer pollinators → lower crop yield</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700">🦁 Loss of apex predators → explosion of pests</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700">🌿 Biodiversity = Nature's insurance policy</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 border-l-4 border-orange-500 rounded-lg p-4">
                <p className="text-sm text-orange-700">
                  Silent disappearance of frogs, bees, butterflies - without them, ecosystems unravel quietly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Water Quality Parameters */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-500">
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Droplets className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  💧 Water Quality Parameters
                </h3>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Water is life, but <strong className="text-blue-600">dirty water is death in disguise</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {waterParameters.map((param, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Droplets className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">{param.name}</h4>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{param.fullName}</p>
                  <p className="text-sm text-gray-700 mb-4">{param.meaning}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                      <p className="text-xs text-green-600 font-semibold">HEALTHY</p>
                      <p className="text-sm text-gray-700">{param.healthy}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                      <p className="text-xs text-red-600 font-semibold">POLLUTED</p>
                      <p className="text-sm text-gray-700">{param.polluted}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
              <h4 className="font-bold text-red-700 mb-3">🌊 Yamuna River Example</h4>
              <p className="text-gray-700 mb-3">
                Delhi stretch looks like a toxic foam party - because of untreated sewage, 
                detergent runoff, and industrial waste
              </p>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Bloodstream Analogy:</strong> Think of a river as the bloodstream of an ecosystem. 
                  High BOD is like cholesterol clogging arteries
                </p>
              </div>
              <div className="mt-3 text-center">
                <p className="font-bold text-red-700">📊 80% of India's surface water is polluted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ecological Footprint */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-purple-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Activity className="w-10 h-10 text-purple-600" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  🌎 Ecological Footprint vs Biocapacity
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">📐 Ecological Footprint</h4>
                  <p className="text-sm text-gray-600">
                    How much land, water, and air we use to support our lifestyle (food, energy, waste)
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">📐 Biocapacity</h4>
                  <p className="text-sm text-gray-600">
                    How much the Earth can regenerate in a year
                  </p>
                </div>
              </div>

              <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-700 mb-3">💥 Today's Reality</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    Humanity uses resources at <strong className="text-red-600">1.7 Earths</strong> rate
                  </p>
                  <p className="text-gray-700">
                    India's demand is also growing rapidly due to urbanization
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800">💰 Budget Analogy</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong className="text-green-600">Earth gives us:</strong> ₹100 worth of resources annually
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-gray-700">
                    <strong className="text-red-600">We're spending:</strong> ₹170 and borrowing the rest
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-gray-700">
                    <strong className="text-orange-600">Borrowing from:</strong> Forests, soil, water, and future generations
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-red-100 rounded-lg p-4">
                <h5 className="font-bold text-red-700 mb-2">📍 Overshoot Day</h5>
                <p className="text-sm text-gray-700">
                  2023: July 28 - the date we exhausted Earth's annual budget. 
                  For India, it came even earlier
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* India's Environmental Performance */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-600">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              📊 India's Report Card
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These indicators help governments shape policies and empower citizens to ask tough questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800">❓ Tough Questions to Ask:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700 italic">"Why does our water look like sewage?"</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700 italic">"Why are our lungs blackened before age 30?"</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-700 italic">"What happened to the birds we used to see?"</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-800">🚨 Wake-up Call</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6">
                  <h5 className="font-bold text-red-700 mb-3">Environmental Performance Index (2022)</h5>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-red-600 mb-2">180/180</p>
                    <p className="text-sm text-gray-700">India ranked last among all countries</p>
                  </div>
                </div>
                
                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-center text-orange-700 font-bold">
                    This isn't a red flag. It's a red siren. 🚨
                  </p>
                </div>
              </div>
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
                  <h3 className="text-lg font-bold text-gray-800">More Than Numbers</h3>
                </div>
                <p className="text-gray-700">
                  Indicators are not just numbers - they are signs of deep-rooted imbalances
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-800">Tracking Progress</h3>
                </div>
                <p className="text-gray-700">
                  Tracking them over time shows whether we are healing or harming
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-800">Policy Guidance</h3>
                </div>
                <p className="text-gray-700">
                  They help governments shape policies and citizens ask tough questions
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">🩺 Remember This</h3>
                <p className="text-lg mb-6">
                  Environmental indicators are Earth's way of communicating with us. 
                  <strong> Are we listening?</strong>
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm">
                    Just like doctors use vital signs to diagnose illness, 
                    scientists use these indicators to diagnose our planet's health. 
                    The diagnosis is clear: <strong>urgent care needed</strong> 🚨
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
              🎯 Indicator Review
            </h2>
            <p className="text-gray-600">
              Click on each indicator to see its current status
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {indicators.map((indicator, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setCurrentIndicator(index)}
              >
                <div className={`bg-gradient-to-br ${indicator.color} text-white rounded-2xl p-6 text-center transform group-hover:scale-110 transition-all duration-300 ${
                  currentIndicator === index ? 'ring-4 ring-green-300 scale-110' : ''
                }`}>
                  <div className="text-4xl mb-3">{indicator.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{indicator.name}</h3>
                  <div className={`${indicator.statusColor} rounded-full px-3 py-1 text-sm font-medium mb-3`}>
                    {indicator.status}
                  </div>
                  {currentIndicator === index && (
                    <div className="bg-white/20 rounded-lg p-3 animate-fade-in">
                      <p className="text-xs">{indicator.current}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3">🌍 Planet Earth's Vital Signs</h3>
              <p className="text-lg">
                <strong>Temperature:</strong> Rising • <strong>Air:</strong> Polluted • 
                <strong>Water:</strong> Contaminated • <strong>Biodiversity:</strong> Declining
              </p>
              <p className="text-sm mt-3 opacity-90">
                The indicators are flashing red. Time for urgent action! 🚨
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

export default Module2EnvironmentalIndicators;