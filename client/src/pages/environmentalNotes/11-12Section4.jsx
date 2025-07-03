import React, { useState, useEffect } from 'react';
import { Train, AlertTriangle, Zap, Droplets, TreePine, Factory, Users, Heart, Target, TrendingUp, Award, Flag, Sun, Book } from 'lucide-react';

const Module4IndiaSustainability = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [currentSolution, setCurrentSolution] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const challengeInterval = setInterval(() => {
      setCurrentChallenge((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(challengeInterval);
  }, []);

  useEffect(() => {
    const solutionInterval = setInterval(() => {
      setCurrentSolution((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(solutionInterval);
  }, []);

  const challenges = [
    {
      name: "Air Pollution",
      icon: <Factory className="w-8 h-8" />,
      severity: "Critical",
      facts: [
        "39 of world's 50 most polluted cities in India",
        "PM2.5 levels 12x WHO safe limit in Delhi",
        "Stubble burning creates toxic cocktail"
      ],
      impact: "Asthma, heart disease, school closures",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Water Crisis",
      icon: <Droplets className="w-8 h-8" />,
      severity: "Severe",
      facts: [
        "600 million face high water stress",
        "Chennai's Day Zero crisis in 2019",
        "Groundwater overuse nationwide"
      ],
      impact: "Taps running dry, water conflicts",
      color: "from-blue-500 to-teal-600"
    },
    {
      name: "Biodiversity Loss",
      icon: <TreePine className="w-8 h-8" />,
      severity: "Alarming",
      facts: [
        "1 species lost every day",
        "30% of natural forest lost",
        "Human-wildlife conflict rising"
      ],
      impact: "Ecosystem collapse, crop failure",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const solutions = [
    {
      name: "Renewable Energy Revolution",
      icon: <Sun className="w-8 h-8" />,
      achievement: "170+ GW renewable capacity",
      description: "4th largest in world",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "Policy Frameworks",
      icon: <Flag className="w-8 h-8" />,
      achievement: "Comprehensive climate action",
      description: "NAPCC, Swachh Bharat missions",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Grassroots Movements",
      icon: <Users className="w-8 h-8" />,
      achievement: "People-powered activism",
      description: "Chipko, Bishnoi traditions",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div
      id="s-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-4"] = el;
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
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Train className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              India & Sustainability
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              🚄 Between Crisis and Commitment - Riding a fast train with brakes only half-working
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-green-100">
                One of the <strong>fastest-growing economies</strong> in the world, 
                and also home to <strong>severe environmental degradation</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* The Crossroads */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Train className="w-10 h-10 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                🌏 At a Fascinating Crossroads
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              India stands at a high-stakes intersection between rapid growth and environmental protection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Economic Powerhouse</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">🚀 Fastest-growing major economy</p>
                <p className="text-gray-700">🏭 Massive industrialization push</p>
                <p className="text-gray-700">🏙️ Rapid urbanization (400M+ in cities)</p>
                <p className="text-gray-700">⚡ Energy demand skyrocketing</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-gray-800">Environmental Crisis</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">💨 39 of world's 50 most polluted cities</p>
                <p className="text-gray-700">💧 600M people face water stress</p>
                <p className="text-gray-700">🦋 1 species lost every day</p>
                <p className="text-gray-700">📊 Ranked 180/180 in Environmental Performance</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 border-l-4 border-orange-500">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">🚄 The Train Analogy</h3>
              <p className="text-lg text-gray-700">
                <strong>Impressive momentum</strong> (economic growth) but <strong>dangerous if the system overheats</strong> (environmental collapse)
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Pain Points */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🛑 India's Environmental Pain Points
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The urgent challenges that demand immediate action
            </p>
          </div>

          {/* Featured Challenge (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Critical Challenge</div>
              <div className={`bg-gradient-to-r ${challenges[currentChallenge].color} text-white rounded-3xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-8xl">{challenges[currentChallenge].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-3">{challenges[currentChallenge].name}</h3>
                    <p className="text-2xl opacity-90 mb-4">Severity: {challenges[currentChallenge].severity}</p>
                    <div className="space-y-2 mb-4">
                      {challenges[currentChallenge].facts.map((fact, index) => (
                        <p key={index} className="text-lg opacity-80">• {fact}</p>
                      ))}
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-lg"><strong>Impact:</strong> {challenges[currentChallenge].impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Challenges Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-gray-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentChallenge === index ? 'ring-4 ring-green-300 scale-105 shadow-xl' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentChallenge(index)}
              >
                <div className={`bg-gradient-to-r ${challenge.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{challenge.name}</h3>
                <div className="text-center mb-4">
                  <span className="bg-red-500 text-white rounded-full px-3 py-1 text-sm font-medium">
                    {challenge.severity}
                  </span>
                </div>
                <div className="space-y-2">
                  {challenge.facts.slice(0, 2).map((fact, i) => (
                    <p key={i} className="text-sm text-gray-700">• {fact}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions and Progress */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ☀️ India's Solutions & Progress
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From climate leader to grassroots activism - the fight back begins
            </p>
          </div>

          {/* Featured Solution (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Progress Spotlight</div>
              <div className={`bg-gradient-to-r ${solutions[currentSolution].color} text-white rounded-3xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-8xl">{solutions[currentSolution].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-3">{solutions[currentSolution].name}</h3>
                    <p className="text-2xl opacity-90 mb-4">{solutions[currentSolution].achievement}</p>
                    <p className="text-lg opacity-80">{solutions[currentSolution].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Solutions Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentSolution === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-br from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentSolution(index)}
              >
                <div className={`bg-gradient-to-r ${solution.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{solution.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{solution.achievement}</p>
                <p className="text-xs text-gray-500">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grassroots Movements */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-600">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Heart className="w-10 h-10 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                🤲 Grassroots Heroes
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              India's greatest strength: People-powered activism & sacred ecology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 rounded-full p-2">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Chipko Movement</h3>
                  <p className="text-sm text-gray-600">1970s • Uttarakhand</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">Women hugged trees to prevent logging</p>
                
                <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-400">
                  <p className="text-sm text-emerald-700 font-medium">
                    Philosophy: Trees as family, not property
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-700">
                    <strong>Impact:</strong> Spread across India, influenced forest policies
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 italic">
                    "These trees protect us. They are not timber; they are life."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Jal Satyagraha</h3>
                  <p className="text-sm text-gray-600">2012 • Madhya Pradesh</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">Villagers stood chest-deep in dam water for days</p>
                
                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                  <p className="text-sm text-blue-700 font-medium">
                    Philosophy: Development without justice is injustice
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-700">
                    <strong>Impact:</strong> Forced temporary rollback of dam levels
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 italic">
                    "Immersing themselves in the very injustice they resisted"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 rounded-full p-2">
                  <TreePine className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Bishnoi Tradition</h3>
                  <p className="text-sm text-gray-600">15th Century • Rajasthan</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">360 people sacrificed lives to protect trees (1730)</p>
                
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-medium">
                    Philosophy: All life is sacred, ecology = spirituality
                  </p>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-sm text-emerald-700">
                    <strong>Impact:</strong> Continue protecting wildlife while facing poverty
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 italic">
                    "A chopped head is cheaper than a felled tree"
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
              <Book className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ✅ Module Takeaways
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-lg font-bold text-gray-800">Rich Tapestry</h3>
                </div>
                <p className="text-gray-700">
                  India's sustainability story is part innovation, part struggle - a complex mix of progress and challenges
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-800">Implementation Gap</h3>
                </div>
                <p className="text-gray-700">
                  Policy exists, but gaps in implementation, equity, and enforcement remain
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-800">Greatest Allies</h3>
                </div>
                <p className="text-gray-700">
                  Youth, courts, technology, and tradition are India's greatest allies in securing a greener future
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">🍽️ The Thali Analogy</h3>
                <p className="text-lg mb-6">
                  India's sustainability is like a thali - diverse elements, each essential, 
                  but must be <strong>balanced</strong> or the whole meal fails.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm">
                    Economic growth (the rice), environmental protection (the dal), 
                    social justice (the sabzi), and cultural wisdom (the pickle) - 
                    all must work together for a complete, nourishing future 🌱
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Future Scenario */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🔮 India 2047: Two Possible Futures
            </h2>
            <p className="text-gray-600">
              The choices we make today will determine which path India takes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">⚠️</div>
                <h3 className="font-bold text-red-700">Dystopian Path</h3>
                <p className="text-sm text-gray-600">If current trends continue...</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">💨 Cities become uninhabitable due to air pollution</p>
                <p className="text-sm text-gray-700">💧 Water wars between states become common</p>
                <p className="text-sm text-gray-700">🌾 Agricultural collapse due to climate change</p>
                <p className="text-sm text-gray-700">🦋 Biodiversity loss triggers ecosystem collapse</p>
              </div>
              <div className="mt-4 bg-red-100 rounded-lg p-3">
                <p className="text-xs text-red-700 font-medium text-center">
                  Economic growth at any cost leads to civilizational collapse
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🌟</div>
                <h3 className="font-bold text-green-700">Sustainable Path</h3>
                <p className="text-sm text-gray-600">If we act decisively now...</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">☀️ 100% renewable energy powers clean cities</p>
                <p className="text-sm text-gray-700">💧 Water security through smart conservation</p>
                <p className="text-sm text-gray-700">🌱 Climate-resilient agriculture feeds the nation</p>
                <p className="text-sm text-gray-700">🐅 Thriving biodiversity in protected landscapes</p>
              </div>
              <div className="mt-4 bg-green-100 rounded-lg p-3">
                <p className="text-xs text-green-700 font-medium text-center">
                  Balanced development creates prosperity within planetary boundaries
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3">🌍 The Choice Is Ours</h3>
              <p className="text-lg">
                India's future - and the world's - depends on the choices made by 
                <strong> your generation</strong>. Which future will you choose to build?
              </p>
              <p className="text-sm mt-3 opacity-90">
                Every policy decision, every lifestyle choice, every vote matters in shaping this destiny 🗳️
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

export default Module4IndiaSustainability;