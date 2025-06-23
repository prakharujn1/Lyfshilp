import React, { useState, useEffect } from 'react';
import { Droplets, Shield, Leaf, Recycle, AlertTriangle, Settings, Users, Home, Factory, Sprout, CheckCircle, ArrowRight, Play, Pause, RotateCw } from 'lucide-react';

const Module5Wastewater = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(tipInterval);
  }, []);

  const wastewaterSources = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Homes",
      description: "Water from toilets, baths, kitchens, and laundry",
      examples: ["Sewage", "Bath water", "Kitchen waste", "Laundry water"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industries", 
      description: "Factory water mixed with chemicals and oils",
      examples: ["Chemical waste", "Dyes", "Oil residue", "Metal particles"],
      color: "from-emerald-400 to-green-600"
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Farms",
      description: "Agricultural runoff with pesticides and fertilizers",
      examples: ["Pesticides", "Fertilizers", "Animal waste", "Soil runoff"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Stormwater",
      description: "Rainwater collecting dirt and debris",
      examples: ["Road oil", "Trash", "Dirt", "Roof runoff"],
      color: "from-emerald-500 to-green-700"
    }
  ];

  const treatmentSteps = [
    {
      title: "Primary Treatment",
      subtitle: "Removing the Big Stuff",
      description: "Large items and heavy particles are filtered out",
      processes: ["Screening out plastic & debris", "Settling tanks for solids", "Skimming oils & grease"],
      icon: <Settings className="w-6 h-6" />,
      color: "bg-green-100 border-green-300"
    },
    {
      title: "Secondary Treatment", 
      subtitle: "Biological Cleaning",
      description: "Microorganisms break down organic matter",
      processes: ["Introducing helpful bacteria", "Aeration with oxygen", "Biological decomposition"],
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-emerald-100 border-emerald-300"
    },
    {
      title: "Tertiary Treatment",
      subtitle: "Advanced Purification", 
      description: "Final cleaning to remove chemicals and pathogens",
      processes: ["Chlorination or UV treatment", "Advanced filtration", "Membrane technologies"],
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-200 border-green-400"
    },
    {
      title: "Sludge Management",
      subtitle: "Waste Processing",
      description: "Converting solid waste into useful products",
      processes: ["Drying sludge", "Converting to biogas", "Making fertilizer"],
      icon: <Recycle className="w-6 h-6" />,
      color: "bg-emerald-200 border-emerald-400"
    }
  ];

  const reuseOptions = [
    { icon: <Sprout className="w-6 h-6" />, text: "Irrigation for farms & gardens", color: "text-green-600" },
    { icon: <Home className="w-6 h-6" />, text: "Flushing toilets", color: "text-emerald-600" },
    { icon: <Factory className="w-6 h-6" />, text: "Industrial cooling systems", color: "text-green-700" },
    { icon: <Droplets className="w-6 h-6" />, text: "Groundwater recharge", color: "text-emerald-700" }
  ];

  const individualTips = [
    {
      title: "Avoid Harmful Disposal",
      description: "Never pour oil, chemicals, or medicines down the drain",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Use Eco-Friendly Products",
      description: "Choose biodegradable cleaners and soaps",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Fix Leaks Quickly",
      description: "A single leaky tap can waste thousands of liters yearly",
      icon: <Droplets className="w-6 h-6" />,
      color: "from-green-600 to-emerald-700"
    },
    {
      title: "Separate Water Types",
      description: "Keep greywater separate from blackwater for easier reuse",
      icon: <Recycle className="w-6 h-6" />,
      color: "from-emerald-600 to-green-700"
    }
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Droplets className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Wastewater Management
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              From Sewage to Sustainability - Learn how we clean and reuse water
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Wastewater Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Wastewater?
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Wastewater is any water that has been <strong className="text-green-600">used and contaminated</strong>. 
                Think of it as water that needs cleaning before it can safely return to nature.
              </p>
            </div>
          </div>

          {/* Wastewater Sources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wastewaterSources.map((source, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-500 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${source.color} rounded-full p-4 w-fit mx-auto mb-4 text-white`}>
                  {source.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{source.title}</h3>
                <p className="text-gray-600 text-center mb-4">{source.description}</p>
                <div className="space-y-2">
                  {source.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Management is Essential */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-3">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Why is it Essential?
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">Public Health Protection</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Prevents waterborne diseases like cholera, typhoid</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Reduces mosquito breeding grounds</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Protects vulnerable communities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Leaf className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">Environmental Protection</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Saves aquatic life in rivers and lakes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Prevents eutrophication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Protects groundwater quality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏥</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Real Impact</h3>
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-400 mb-6">
                    <p className="text-gray-700 font-medium">
                      <strong className="text-red-600">Example:</strong> Many stretches of the Yamuna River in Delhi have become biologically dead due to untreated sewage.
                    </p>
                  </div>
                  <div className="text-5xl">💀</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Process */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How is Wastewater Treated?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-gray-700">
                Treatment happens in <strong className="text-green-600">Sewage Treatment Plants (STPs)</strong> through multiple stages
              </p>
            </div>
          </div>

          {/* Animated Process Steps */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Showing Step</div>
              <div className={`${treatmentSteps[currentStep].color} border-2 rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-green-600">
                    {treatmentSteps[currentStep].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{treatmentSteps[currentStep].title}</h3>
                    <p className="text-lg text-green-600 font-semibold mb-2">{treatmentSteps[currentStep].subtitle}</p>
                    <p className="text-gray-600 mb-4">{treatmentSteps[currentStep].description}</p>
                    <div className="space-y-2">
                      {treatmentSteps[currentStep].processes.map((process, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{process}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center space-x-4">
              {treatmentSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentStep === index ? 'bg-green-600 scale-125' : 'bg-gray-300 hover:bg-green-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Process Flow Diagram */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Treatment Flow</h3>
              <div className="flex items-center justify-center space-x-4 overflow-x-auto">
                {treatmentSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center min-w-0 flex-shrink-0">
                      <div className={`${step.color} border-2 rounded-xl p-4 mb-2`}>
                        <div className="text-green-600">{step.icon}</div>
                      </div>
                      <h4 className="font-bold text-sm text-center text-gray-800">{step.title}</h4>
                    </div>
                    {index < treatmentSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">🧽</div>
                <h3 className="text-lg font-bold text-gray-800">Think of it like cleaning muddy clothes:</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>1. Remove big stains and dirt (Primary)</p>
                <p>2. Use detergent to scrub deeper (Secondary)</p>
                <p>3. Final rinse and dry for reuse (Tertiary)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reuse Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Reusing Treated Water
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Once treated, wastewater becomes safe for <strong className="text-green-600">non-drinking uses</strong>, 
                reducing pressure on freshwater sources.
              </p>
              
              <div className="space-y-4">
                {reuseOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className={option.color}>
                      {option.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{option.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">♻️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Success Story</h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-green-600">Chennai Example:</strong> Treated wastewater is reused in industrial zones, 
                    saving millions of liters of fresh water daily.
                  </p>
                </div>
                <div className="mt-6 text-4xl">💧</div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Actions */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What Can You Do?
              </h2>
            </div>
          </div>

          {/* Rotating Tips */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Tip of the Moment</div>
              <div className={`bg-gradient-to-r ${individualTips[currentTip].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">
                    {individualTips[currentTip].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{individualTips[currentTip].title}</h3>
                    <p className="text-lg opacity-90">{individualTips[currentTip].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tips Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {individualTips.map((tip, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTip === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
                onClick={() => setCurrentTip(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-5xl mb-6">📚</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Key Takeaways
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Droplets className="w-6 h-6" />,
                  text: "Wastewater needs proper treatment before returning to environment",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  text: "Untreated wastewater causes disease and pollution",
                  color: "from-emerald-400 to-green-600"
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  text: "STPs use three main treatment stages",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: <Recycle className="w-6 h-6" />,
                  text: "Treated water can be safely reused for many purposes",
                  color: "from-emerald-500 to-green-700"
                },
                {
                  icon: <Home className="w-6 h-6" />,
                  text: "Decentralized systems work where big infrastructure is missing",
                  color: "from-green-600 to-emerald-700"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "Every citizen has a role in responsible water use",
                  color: "from-emerald-600 to-green-800"
                }
              ].map((takeaway, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className={`bg-gradient-to-r ${takeaway.color} text-white rounded-full p-3 w-fit mx-auto mb-4`}>
                    {takeaway.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-center">{takeaway.text}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto mt-8">
              <p className="text-xl text-gray-700">
                <strong className="text-green-600">Clean Water</strong> + 
                <strong className="text-emerald-600"> Proper Treatment</strong> = 
                <strong className="text-green-700"> Healthy Future! 🌱</strong>
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

export default Module5Wastewater;