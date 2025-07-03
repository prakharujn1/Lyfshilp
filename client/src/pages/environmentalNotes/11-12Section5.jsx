import React, { useState, useEffect } from 'react';
import { Scale, Gavel, Shield, BookOpen, AlertTriangle, Factory, Droplets, Wind, TreePine, Users, Target, Award, Flag, Lightbulb, Eye, Heart, Brain, CheckSquare, Star, Zap } from 'lucide-react';

const Module5EnvironmentalLaws = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentLaw, setCurrentLaw] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLaw((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const majorLaws = [
    {
      name: "Environment Protection Act",
      year: "1986",
      nickname: "Mother Code",
      icon: <Shield className="w-8 h-8" />,
      trigger: "Bhopal Gas Tragedy - India's deadliest industrial disaster",
      powers: [
        "Central government can step in where specific laws don't exist",
        "Shut industries, regulate emissions",
        "Set environmental quality standards"
      ],
      significance: "Made environmental protection a central government mandate",
      color: "from-red-500 to-orange-600",
      bgColor: "from-red-50 to-orange-50"
    },
    {
      name: "Water Act",
      year: "1974", 
      nickname: "River Protector",
      icon: <Droplets className="w-8 h-8" />,
      trigger: "Industries discharging untreated waste directly into rivers",
      powers: [
        "Pollution boards monitor effluents and penalize polluters",
        "'Consent to operate' required for factories",
        "Water quality standards enforcement"
      ],
      significance: "First major step to protect India's sacred rivers",
      color: "from-blue-500 to-teal-600",
      bgColor: "from-blue-50 to-teal-50"
    },
    {
      name: "Air Act",
      year: "1981",
      nickname: "Breath Saver", 
      icon: <Wind className="w-8 h-8" />,
      trigger: "Delhi's black smog skies and growing air pollution crisis",
      powers: [
        "Declaration of air pollution control areas",
        "Regulate emissions from vehicles, industries, burning",
        "Monitor air quality standards"
      ],
      significance: "Led to Delhi's CNG bus conversion in 2001",
      color: "from-gray-500 to-slate-600",
      bgColor: "from-gray-50 to-slate-50"
    },
    {
      name: "Wildlife Protection Act",
      year: "1972",
      nickname: "Species Guardian",
      icon: <TreePine className="w-8 h-8" />,
      trigger: "Indian wildlife plummeting post-independence",
      powers: [
        "Banned hunting of most species",
        "Created protected areas like sanctuaries",
        "Foundation for Project Tiger"
      ],
      significance: "Made wildlife a national asset",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  const constitutionalProvisions = [
    {
      article: "Article 21",
      title: "Right to Life",
      description: "Right to life includes the right to a clean environment",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 border-red-400"
    },
    {
      article: "Article 48A", 
      title: "State's Duty",
      description: "The state shall protect and improve the environment",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-100 border-blue-400"
    },
    {
      article: "Article 51A(g)",
      title: "Citizen's Duty", 
      description: "Every citizen has the duty to protect nature",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 border-green-400"
    }
  ];

  const landmarkCases = [
    {
      name: "MC Mehta v. Union of India",
      year: "Multiple cases",
      petitioner: "M.C. Mehta - Single public interest litigator",
      outcomes: [
        "Ganga cleaning orders",
        "Ban on industrial activity near Taj Mahal", 
        "Removal of hazardous industries from Delhi"
      ],
      principles: ["Polluter Pays Principle", "Precautionary Principle"],
      impact: "Supreme Court became guardian of nature",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      name: "Vellore Citizens Welfare Forum",
      year: "1996",
      petitioner: "Citizens against tannery pollution",
      outcomes: [
        "Declared Precautionary Principle as Indian law",
        "Established Polluter Pays Principle",
        "Public Trust Doctrine recognition"
      ],
      principles: ["Public Trust Doctrine", "Sustainable Development"],
      impact: "Set legal precedents for environmental protection",
      icon: <Scale className="w-6 h-6" />
    }
  ];

  const climateMissions = [
    {
      name: "Solar Mission",
      target: "100 GW by 2022",
      status: "Massive expansion achieved",
      impact: "Created global solar leaders",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-yellow-100 border-yellow-400"
    },
    {
      name: "Energy Efficiency", 
      target: "Star-rating for appliances",
      status: "Building codes implemented", 
      impact: "Reduced energy consumption",
      icon: <Star className="w-6 h-6" />,
      color: "bg-orange-100 border-orange-400"
    },
    {
      name: "Water Mission",
      target: "Reuse, rainwater harvesting", 
      status: "More crop per drop",
      impact: "Water conservation mainstream",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-blue-100 border-blue-400"
    },
    {
      name: "Green India",
      target: "Afforestation to absorb emissions",
      status: "Tree cover increasing",
      impact: "Carbon sinks restored",
      icon: <TreePine className="w-6 h-6" />,
      color: "bg-green-100 border-green-400"
    }
  ];

  return (
    <div
      id="s-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-teal-700 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-28 h-28 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-24 right-24 w-32 h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/15 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Environmental Laws & Policies
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              ⚖️ Balancing Growth with Green - India's legal framework for environmental protection
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-green-100">
                In a country where monsoons decide farmers' fate and urban smog decides lung health, 
                environmental protection needs a <strong>codified will</strong> that can't be ignored
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Why Laws Matter */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Why Laws? Because Intent Without Enforcement is Just Hope
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                India's environmental laws are not just technicalities - they are <strong className="text-green-600">moral contracts</strong>, 
                built on centuries of civilizational reverence for nature and post-independence industrial ambition.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="font-bold text-green-700 mb-3">🔍 Three Overlapping Lenses</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">Biodiversity haven (8% of global species)</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <p className="text-gray-700">Developing economy (fighting poverty through growth)</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">Culturally diverse society (rivers as goddesses, forests as deities)</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-100 border-l-4 border-emerald-500 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong className="text-emerald-600">Laws are our attempt</strong> to harmonize these often conflicting truths 🤝
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">📜 From Reverence to Rights</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🕉️</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Ancient Reverence</h4>
                        <p className="text-sm text-gray-600">Rivers as mothers, trees as gods</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🏭</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Colonial Extraction</h4>
                        <p className="text-sm text-gray-600">Nature as resource to exploit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">⚖️</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Modern Laws</h4>
                        <p className="text-sm text-gray-600">Balance growth with protection</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-100 rounded-lg p-4">
                  <p className="text-sm text-green-700 text-center font-medium">
                    Laws bridge the gap between <strong>ancient wisdom</strong> and <strong>modern needs</strong> 🌿
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture of Environmental Law */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🏛️ The Architecture of Indian Environmental Law
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars that protect India's environment and public health
            </p>
          </div>

          {/* Featured Law (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Spotlight on</div>
              <div className={`bg-gradient-to-r ${majorLaws[currentLaw].color} text-white rounded-3xl p-8 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-8xl">{majorLaws[currentLaw].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-2">{majorLaws[currentLaw].name}</h3>
                    <p className="text-2xl opacity-90 mb-1">{majorLaws[currentLaw].year}</p>
                    <p className="text-xl opacity-80 mb-4">"{majorLaws[currentLaw].nickname}"</p>
                    <div className="bg-white/20 rounded-xl p-4 mb-4">
                      <p className="text-sm"><strong>Triggered by:</strong> {majorLaws[currentLaw].trigger}</p>
                    </div>
                    <p className="text-lg opacity-90">{majorLaws[currentLaw].significance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Laws Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorLaws.map((law, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${law.bgColor} border-2 border-gray-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentLaw === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-br from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentLaw(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r ${law.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {law.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{law.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{law.year}</p>
                <p className="text-xs font-medium text-green-600">"{law.nickname}"</p>
                
                {hoveredCard === index && (
                  <div className="mt-4 bg-white rounded-lg p-3 shadow-sm animate-fade-in">
                    <p className="text-xs text-gray-700">{law.trigger}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Constitutional Ethics */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-600">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <BookOpen className="w-10 h-10 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                📜 Constitutional Ethics of Environment
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              India doesn't just regulate nature - it <strong>honors</strong> it. Our Constitution foresaw the ecological dimension of rights and duties.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {constitutionalProvisions.map((provision, index) => (
              <div key={index} className={`${provision.color} rounded-xl p-6 shadow-lg`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-2">
                    {provision.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{provision.article}</h3>
                    <p className="text-sm text-gray-600">{provision.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{provision.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🌟 Unique Global Feature</h3>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
              <p className="text-gray-700 text-center leading-relaxed">
                India is <strong className="text-green-600">rare in making environmental care</strong> both a 
                <strong className="text-blue-600"> right</strong> and a <strong className="text-purple-600">duty</strong> 🕉️
              </p>
            </div>
          </div>
        </div>

        {/* Green Judiciary */}
        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-teal-600">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Gavel className="w-10 h-10 text-teal-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ⚖️ The Green Judiciary - Where Law Got a Voice
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              M.C. Mehta - a single public interest litigator - became the face of Indian environmental law
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {landmarkCases.map((case_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedCase(selectedCase === index ? null : index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-teal-100 rounded-full p-2">
                    {case_.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{case_.name}</h3>
                    <p className="text-sm text-gray-600">{case_.year}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">{case_.petitioner}</p>
                
                {selectedCase === index && (
                  <div className="animate-fade-in space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700 mb-2">🏆 Outcomes:</h4>
                      <div className="space-y-1">
                        {case_.outcomes.map((outcome, i) => (
                          <p key={i} className="text-sm text-gray-700">• {outcome}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-700 mb-2">⚖️ Legal Principles:</h4>
                      <div className="space-y-1">
                        {case_.principles.map((principle, i) => (
                          <p key={i} className="text-sm text-gray-700">• {principle}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Impact:</strong> {case_.impact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Climate Missions */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-600">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Target className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                🎯 India's Climate and Sustainability Missions
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              National Action Plan on Climate Change (NAPCC) - launched in 2008 with 8 focused missions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateMissions.map((mission, index) => (
              <div key={index} className={`${mission.color} rounded-xl p-6 shadow-lg`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-2">
                    {mission.icon}
                  </div>
                  <h3 className="font-bold text-gray-800">{mission.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/80 rounded-lg p-3">
                    <p className="text-xs text-gray-600">Target</p>
                    <p className="text-sm font-semibold text-gray-800">{mission.target}</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-3">
                    <p className="text-xs text-gray-600">Status</p>
                    <p className="text-sm font-semibold text-gray-800">{mission.status}</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <strong>Impact:</strong> {mission.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Lightbulb className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ✅ Final Takeaways: Laws + Awareness = Power
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-lg font-bold text-gray-800">Strong Foundation</h3>
                </div>
                <p className="text-gray-700">
                  India's environmental laws are strong on paper - some of the world's best legal frameworks
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-800">Judicial Support</h3>
                </div>
                <p className="text-gray-700">
                  Courts have consistently upheld environmental rights as fundamental to life
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-800">Implementation Gap</h3>
                </div>
                <p className="text-gray-700">
                  True change needs citizen awareness, political will, and consistent enforcement
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">📜 Constitutional Promise</h3>
                <p className="text-lg mb-6">
                  Sustainability is not optional in India. 
                  <strong> It's constitutional.</strong>
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm">
                    Article 21 guarantees clean environment as a fundamental right. 
                    Article 51A makes it every citizen's duty. 
                    The framework exists - <strong>now we must use it</strong> ⚖️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Legal Scenario */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🏛️ Your Legal Power Scenario
            </h2>
            <p className="text-gray-600">
              You discover a factory polluting your local river. Which legal tools can you use?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-center mb-4">
                <Scale className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-700">Constitutional Rights</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">📜 Article 21: Right to clean environment</p>
                <p className="text-sm text-gray-700">🛡️ Article 48A: State's duty to protect</p>
                <p className="text-sm text-gray-700">👥 Article 51A(g): Your duty as citizen</p>
              </div>
              <div className="mt-4 bg-blue-100 rounded-lg p-3">
                <p className="text-xs text-blue-700 font-medium">
                  Fundamental right to approach courts
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-center mb-4">
                <Gavel className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-green-700">Specific Laws</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">💧 Water Act: Report pollution board</p>
                <p className="text-sm text-gray-700">🛡️ EPA: Central govt intervention</p>
                <p className="text-sm text-gray-700">⚖️ PIL: Public Interest Litigation</p>
              </div>
              <div className="mt-4 bg-green-100 rounded-lg p-3">
                <p className="text-xs text-green-700 font-medium">
                  Multiple legal avenues available
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="text-center mb-4">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-bold text-purple-700">Judicial Principles</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">💰 Polluter Pays: Factory must pay cleanup</p>
                <p className="text-sm text-gray-700">⚠️ Precautionary: Stop if uncertain</p>
                <p className="text-sm text-gray-700">🌊 Public Trust: River belongs to all</p>
              </div>
              <div className="mt-4 bg-purple-100 rounded-lg p-3">
                <p className="text-xs text-purple-700 font-medium">
                  Courts as environmental guardians
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3">⚡ Your Legal Power</h3>
              <p className="text-lg">
                As an Indian citizen, you have <strong>constitutional rights</strong>, 
                <strong> specific laws</strong>, and <strong>judicial precedents</strong> 
                to protect your environment. Use them! 🌱
              </p>
              <p className="text-sm mt-3 opacity-90">
                Knowledge of your rights is the first step to protecting them 📚⚖️
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

export default Module5EnvironmentalLaws;