import React, { useState, useEffect } from 'react';
import { Scale, TrendingUp, Globe, DollarSign, Factory, Users, AlertTriangle, BarChart3, TreePine, Droplets, Wind, MapPin, ArrowRight } from 'lucide-react';

const Module2UnsustainableGrowth = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTab, setActiveTab] = useState('hdi');
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
      setAnimateStats(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const hdiIndicators = [
    { icon: <Users className="w-6 h-6" />, title: "Health", desc: "Life expectancy at birth", color: "from-green-400 to-emerald-500" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Education", desc: "Years of schooling", color: "from-emerald-400 to-green-600" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Standard of Living", desc: "Gross National Income per capita", color: "from-green-500 to-emerald-600" }
  ];

  const footprintElements = [
    { icon: <TreePine className="w-6 h-6" />, title: "Land Use", desc: "For food, housing, and infrastructure" },
    { icon: <Droplets className="w-6 h-6" />, title: "Water Resources", desc: "Fresh water consumption" },
    { icon: <Wind className="w-6 h-6" />, title: "Carbon Emissions", desc: "Waste absorption capacity needed" }
  ];

  const globalStats = [
    { value: "50%", label: "Global emissions by richest 10%", animated: animateStats },
    { value: "1.5°C", label: "Critical temperature rise limit", animated: animateStats },
    { value: "0%", label: "Emissions from many island nations", animated: animateStats }
  ];

  return (
    <div
      id="m-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-2"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/25 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Unsustainable Growth
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Who Pays the Price? Understanding the true cost of development
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-green-200 text-sm font-medium">⚖️ Balance</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-green-200 text-sm font-medium">🌍 Global Impact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* HDI vs Ecological Footprint */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Development Dilemma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How do we measure true progress? Let's explore the relationship between human development and environmental cost.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('hdi')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'hdi' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Human Development Index
              </button>
              <button
                onClick={() => setActiveTab('footprint')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'footprint' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Ecological Footprint
              </button>
            </div>
          </div>

          {/* HDI Content */}
          {activeTab === 'hdi' && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transform transition-all duration-500">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Human Development Index (HDI)
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A measure that combines three key indicators to assess a country's overall development
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {hdiIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${indicator.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 ${
                      visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                      {indicator.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{indicator.title}</h4>
                    <p className="text-white/90">{indicator.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                <p className="text-gray-700 text-lg">
                  <strong className="text-green-600">High HDI</strong> reflects longer life spans, better education, and higher income — often seen as indicators of a successful and comfortable society.
                </p>
              </div>
            </div>
          )}

          {/* Ecological Footprint Content */}
          {activeTab === 'footprint' && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transform transition-all duration-500">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Ecological Footprint
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Measures how much land and water area is required to sustain our lifestyle
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {footprintElements.map((element, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl p-6 border-l-4 border-emerald-400 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-emerald-500 text-white rounded-full p-3 w-fit mb-4">
                      {element.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{element.title}</h4>
                    <p className="text-gray-600">{element.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-400">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h4 className="text-lg font-bold text-gray-800">The Problem</h4>
                </div>
                <p className="text-gray-700 text-lg">
                  A large footprint means more natural resources are being used than the Earth can regenerate.
                </p>
              </div>
            </div>
          )}

          {/* Analogy Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Think of it This Way</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 mb-4">
                    <h4 className="text-xl font-bold">HDI = Monthly Salary</h4>
                    <p className="text-green-100">Looks impressive</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6 mb-4">
                    <h4 className="text-xl font-bold">Ecological Footprint = Credit Card Bill</h4>
                    <p className="text-red-100">The real cost</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-lg text-gray-700 font-medium">
                  A high salary looks good — but if your spending is beyond your means, you're heading for trouble.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global North vs South */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Climate Injustice: A Tale of Two Worlds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The divide between those who cause environmental problems and those who suffer from them
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Global North */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Global North</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-gray-700"><strong className="text-blue-600">Status:</strong> Economically advanced, industrialized countries</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-gray-700"><strong className="text-red-600">Responsibility:</strong> Historically responsible for largest share of emissions</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-gray-700"><strong className="text-orange-600">Method:</strong> Achieved development through intensive fossil fuel use</p>
                </div>
              </div>
            </div>

            {/* Global South */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Global South</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700"><strong className="text-green-600">Status:</strong> Many developing or less industrialized nations</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <p className="text-gray-700"><strong className="text-emerald-600">Contribution:</strong> Contributed least to global emissions</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-gray-700"><strong className="text-red-600">Impact:</strong> Most vulnerable to climate change effects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Boat Analogy */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-400">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Sinking Boat Analogy</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Imagine two people sitting in a boat. One eats and leaves garbage everywhere, while the other is fasting. 
                When the boat starts to sink, <strong className="text-red-600">both drown</strong> — but only one caused the mess.
              </p>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Key Statistics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {globalStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                >
                  <div className={`text-4xl font-bold text-green-600 mb-2 ${stat.animated ? 'animate-pulse' : ''}`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Externalities Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Externalities: The Hidden Costs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When the real costs of economic activities are paid by someone else
            </p>
          </div>

          {/* Definition */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What is an Externality?</h3>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 border-l-4 border-gray-400 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                An <strong className="text-purple-600">externality</strong> is a side-effect or consequence of an activity 
                that affects others who did not choose to be involved in it.
              </p>
            </div>
          </div>

          {/* Negative Externalities Examples */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center">Examples of Negative Externalities</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Factory className="w-8 h-8" />,
                  title: "Industrial Pollution",
                  description: "Factories contaminate rivers, affecting downstream farmers",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Wind className="w-8 h-8" />,
                  title: "Air Pollution",
                  description: "Traffic and factories cause respiratory illnesses in communities",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Carbon Emissions",
                  description: "Excessive emissions heat the planet, worsening droughts and floods",
                  color: "from-blue-500 to-green-500"
                }
              ].map((example, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${example.color} text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
                    {example.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{example.title}</h4>
                  <p className="text-white/90">{example.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Garbage Analogy */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-400">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🗑️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Simple Analogy</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                It's like dumping your garbage in your neighbor's yard, then walking away as if nothing happened.
              </p>
            </div>
          </div>

          {/* Real Examples */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-2">Factory vs Village</h4>
                <Droplets className="w-8 h-8" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                A factory saves money by releasing untreated waste into a nearby river. The villagers who depend on that river for drinking and farming <strong className="text-red-600">suffer the consequences</strong> — but the factory keeps its profit.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-2">Oil Companies vs Society</h4>
                <Factory className="w-8 h-8" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Fossil fuel companies extract and burn oil, but the costs of climate disasters, heatwaves, and rising healthcare are <strong className="text-red-600">paid by taxpayers</strong>, not the polluters.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-3 w-fit mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <p className="text-gray-700 font-medium">
                Development without environmental responsibility leads to degradation and inequality.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg p-3 w-fit mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-gray-700 font-medium">
                The Global North-South divide highlights moral and ecological imbalance in environmental impact.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg p-3 w-fit mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <p className="text-gray-700 font-medium">
                Externalities reveal hidden costs that often fall on those least able to bear them.
              </p>
            </div>
          </div>
        </div>

        {/* Reflection Questions */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🤔</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Questions for Reflection
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              "Should countries with high HDI and high emissions be held more accountable in international climate agreements?",
              "How can we redefine \"development\" to include ecological balance and equity?",
              "What role should young people play in making growth more sustainable and fair?"
            ].map((question, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{question}</p>
                </div>
              </div>
            ))}
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

export default Module2UnsustainableGrowth;