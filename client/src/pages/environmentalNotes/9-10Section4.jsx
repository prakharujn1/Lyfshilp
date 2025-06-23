import React, { useState, useEffect } from 'react';
import { Building2, TreePine, Zap, Shield, AlertTriangle, Users, Eye, Lightbulb, ArrowRight, CheckCircle, XCircle, Cpu, Leaf, Car, Home, Factory, Droplets } from 'lucide-react';

const Module4CitiesTech = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeComparison, setActiveComparison] = useState('sprawl');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const smartCityFeatures = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Digital Governance",
      description: "Online services, traffic monitoring, smart administration",
      example: "Electricity bills, certificates, all online"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Design",
      description: "Energy-efficient buildings, solar lighting, water recycling",
      example: "Solar panels, smart meters, green buildings"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Smart Mobility",
      description: "Intelligent traffic, integrated transport, cycle sharing",
      example: "Smart traffic lights, transport apps"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental Focus",
      description: "Waste management, air monitoring, water conservation",
      example: "Sensor-based monitoring, waste segregation"
    }
  ];

  const comparisonData = {
    sprawl: {
      title: "Urban Sprawl",
      subtitle: "Growth Without Planning",
      color: "red",
      bgColor: "from-red-100 to-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-600",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: [
        "Isolated residential areas",
        "Dependence on private vehicles",
        "Higher infrastructure costs",
        "Destruction of ecosystems"
      ],
      example: "Gurgaon's outward growth leading to traffic chaos"
    },
    smart: {
      title: "Smart Cities",
      subtitle: "Promise of Order in Urban Chaos",
      color: "green",
      bgColor: "from-green-100 to-green-50",
      borderColor: "border-green-300",
      textColor: "text-green-600",
      icon: <Building2 className="w-8 h-8" />,
      features: [
        "Technology-driven governance",
        "Sustainable infrastructure",
        "Integrated transport systems",
        "Environmental monitoring"
      ],
      example: "Indira Paryavaran Bhawan - India's first net-zero building"
    }
  };

  const sustainableFeatures = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Green Architecture",
      description: "Local materials, natural ventilation, solar panels",
      percentage: "40%",
      stat: "of energy use"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Public Transport",
      description: "Metro, BRT, E-buses reducing emissions",
      percentage: "70%",
      stat: "CO₂ reduction"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Green Spaces",
      description: "Parks, lakes, urban forests for cooling",
      percentage: "70%",
      stat: "lake loss in Bengaluru"
    }
  ];

  const hiddenTraps = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Greenwashing",
      subtitle: "Fake It Till You Sell It",
      description: "Companies pretend to be eco-friendly without real changes",
      tactics: [
        "Vague eco-labels with no proof",
        "Carbon offsets instead of emission cuts",
        "PR tree planting while cutting forests"
      ],
      example: "Mall with rooftop garden but massive energy consumption"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Techno-Solutionism",
      subtitle: "When Tech Becomes a Distraction",
      description: "Belief that all problems can be fixed by new technology",
      tactics: [
        "Shiny gadgets distract from policy reform",
        "Tech waste and environmental impact",
        "Overconfidence in unproven solutions"
      ],
      example: "Solar panels while dumping waste and cutting trees"
    }
  ];

  return (
    <div
      id="m-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-4"] = el;
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
                <Building2 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Cities, Tech & Progress
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Exploring urban development, smart cities, and the reality behind technological solutions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Urban Sprawl vs Smart Cities Comparison */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Two Faces of Urban Development 🏙️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the contrast between unplanned growth and smart city initiatives
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
              <button
                onClick={() => setActiveComparison('sprawl')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeComparison === 'sprawl'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                Urban Sprawl
              </button>
              <button
                onClick={() => setActiveComparison('smart')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeComparison === 'smart'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                Smart Cities
              </button>
            </div>
          </div>

          {/* Comparison Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className={`bg-gradient-to-r ${comparisonData[activeComparison].bgColor} rounded-2xl p-8 border-2 ${comparisonData[activeComparison].borderColor}`}>
              <div className="flex items-center justify-center mb-6">
                <div className={`${comparisonData[activeComparison].textColor} mr-4`}>
                  {comparisonData[activeComparison].icon}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {comparisonData[activeComparison].title}
                  </h3>
                  <p className={`text-lg ${comparisonData[activeComparison].textColor} font-medium`}>
                    {comparisonData[activeComparison].subtitle}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Characteristics:</h4>
                  <ul className="space-y-3">
                    {comparisonData[activeComparison].features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${activeComparison === 'sprawl' ? 'bg-red-500' : 'bg-green-500'} rounded-full mt-2`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Real Example:</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {comparisonData[activeComparison].example}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart City Features - Auto-rotating */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Smart City Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Explore the core features that make cities "smart"
            </p>
          </div>

          {/* Featured Technology (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-green-100">
                    {smartCityFeatures[currentFeature].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {smartCityFeatures[currentFeature].title}
                    </h3>
                    <p className="text-lg opacity-90 mb-3">
                      {smartCityFeatures[currentFeature].description}
                    </p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">
                        Example: <strong>{smartCityFeatures[currentFeature].example}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Features Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {smartCityFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentFeature === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentFeature(index)}
              >
                <div className="text-green-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainable Infrastructure */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sustainable Urban Infrastructure 🏗️
            </h2>
            <p className="text-xl text-gray-600">
              Building cities that work in harmony with nature
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sustainableFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-400">
                    <div className="text-3xl font-bold text-green-600 mb-1">{feature.percentage}</div>
                    <div className="text-sm text-gray-600">{feature.stat}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Success Story</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Indira Paryavaran Bhawan, Delhi
                </h4>
                <p className="text-gray-600 mb-6">
                  India's first net-zero energy building that produces as much energy as it consumes
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Solar Energy</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Rainwater Harvesting</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <Home className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Natural Ventilation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Traps Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Hidden Traps 🚨
            </h2>
            <p className="text-xl text-gray-600">
              Watch out for these common pitfalls in urban development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {hiddenTraps.map((trap, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 ${
                  visibleCards.includes(index + 7) ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 250}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {trap.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{trap.title}</h3>
                  <p className="text-red-600 font-semibold">{trap.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 text-center">{trap.description}</p>
                  
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                    <h4 className="font-semibold text-gray-800 mb-3">Common Tactics:</h4>
                    <ul className="space-y-2">
                      {trap.tactics.map((tactic, tacticIndex) => (
                        <li key={tacticIndex} className="flex items-start space-x-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-gray-800 mb-2">Example:</h4>
                    <p className="text-sm text-gray-700">{trap.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who Gets Left Behind */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-400">
          <div className="text-center mb-8">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Who Gets Left Behind? 🌐
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Modern cities often prioritize corporate spaces and premium living, but at what cost?
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-bold text-gray-800 mb-2">Housing</h4>
                <p className="text-sm text-gray-600">Informal settlements pushed out</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚶</div>
                <h4 className="font-bold text-gray-800 mb-2">Mobility</h4>
                <p className="text-sm text-gray-600">Street vendors, pedestrians get no space</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h4 className="font-bold text-gray-800 mb-2">Environment</h4>
                <p className="text-sm text-gray-600">Poor areas near waste dumps, factories</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-2">True Sustainability Requires Justice</h4>
              <p className="text-gray-700">
                Cities where <strong className="text-green-600">all citizens</strong> have access to clean air, 
                green spaces, water, housing, and dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Key Takeaways 🧠
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Urban sprawl creates stress on land, water, and people",
              "Smart cities must be inclusive, ecological, and people-centered",
              "Sustainable architecture and public transport are vital",
              "Watch out for greenwashing and techno-fixes",
              "True development includes the most vulnerable citizens"
            ].map((takeaway, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{takeaway}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-700 font-medium">
              A "developed" city is one where even the most vulnerable live with dignity, 
              not just where tech parks bloom 🌟
            </p>
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

export default Module4CitiesTech;