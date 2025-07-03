import React, { useState, useEffect } from 'react';
import { Heart, Users, TreePine, Globe, Scale, Lightbulb, Eye, Target, Brain, Mountain, Waves, Leaf, User, Trees, Earth, Star, Compass, BookOpen, Gavel } from 'lucide-react';

const Module3EnvironmentalEthics = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentWorldview, setCurrentWorldview] = useState(0);
  const [selectedEthicsCard, setSelectedEthicsCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorldview((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const worldviews = [
    {
      name: "Anthropocentrism",
      subtitle: "Human-Supremacy Lens",
      icon: <User className="w-8 h-8" />,
      description: "Humans are the center of the universe, everything else exists for our benefit",
      examples: [
        "Forests seen as 'unused land'",
        "Rivers as 'channels for dams'",
        "Animals as 'resources' not lives"
      ],
      problem: "When humans become the only ones with value, everything else becomes expendable",
      analogy: "Like a landlord who sees a heritage building as just bricks to be replaced by a mall",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Biocentrism", 
      subtitle: "All Life Matters",
      icon: <Trees className="w-8 h-8" />,
      description: "Every living being has intrinsic value and a right to live",
      examples: [
        "Jain monks wear masks to avoid harming tiny organisms",
        "They sweep paths to avoid trampling ants", 
        "Even silence can be ethical"
      ],
      problem: "Challenges human arrogance - we become caretakers, not conquerors",
      analogy: "Like a grand orchestra where even the tiniest triangle matters - remove instruments and symphony collapses",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Ecocentrism",
      subtitle: "The Whole is Sacred", 
      icon: <Earth className="w-8 h-8" />,
      description: "Entire ecosystems and relationships matter, not just individual beings",
      examples: [
        "Forest as intricate web of soil, fungi, rainfall, animals",
        "Wetlands as essential flood-buffering systems",
        "Balance and interdependence define life"
      ],
      problem: "Respects the interconnected web that sustains all life on Earth",
      analogy: "Like Earth as a body - you can't declare organs as 'waste space' because destroying one affects the whole",
      color: "from-teal-500 to-green-600"
    }
  ];

  const culturalExamples = [
    {
      title: "Sacred Groves",
      location: "Meghalaya & Kerala",
      icon: <TreePine className="w-6 h-6" />,
      description: "Protected forest patches where cutting trees is taboo, hunting forbidden",
      significance: "Living temples respected not for laws, but love",
      color: "bg-green-100 border-green-400"
    },
    {
      title: "Chipko Movement",
      location: "Uttarakhand (1970s)",
      icon: <Heart className="w-6 h-6" />,
      description: "Local women hugged trees to stop loggers from cutting them",
      significance: "These trees protect us. They are not timber; they are life.",
      color: "bg-emerald-100 border-emerald-400"
    },
    {
      title: "Rivers as Legal Persons",
      location: "New Zealand & India",
      icon: <Waves className="w-6 h-6" />,
      description: "Whanganui River declared a 'living entity' with legal rights",
      significance: "India briefly did same for Ganga and Yamuna",
      color: "bg-teal-100 border-teal-400"
    },
    {
      title: "Rivers as Mothers",
      location: "Indian Culture",
      icon: <Mountain className="w-6 h-6" />,
      description: "Rivers seen as mothers, mountains as gods, animals as divine messengers",
      significance: "Where laws say 'Do not dump waste,' culture says 'Respect her—she's your mother'",
      color: "bg-blue-100 border-blue-400"
    }
  ];

  const justiceExamples = [
    {
      type: "Climate Inequity",
      icon: <Globe className="w-6 h-6" />,
      problem: "Rich nations polluted for centuries, now ask poorer nations to 'go green'",
      question: "Is it fair to tell developing countries to stop using coal while developed world drives SUVs?",
      color: "from-orange-400 to-red-500"
    },
    {
      type: "Environmental Racism",
      icon: <Users className="w-6 h-6" />,
      problem: "Worst air quality in slums, not gated communities. Mining displaces tribal people with no lawyers",
      question: "Who suffers the worst pollution? Usually the poor, not the powerful",
      color: "from-red-400 to-pink-500"
    },
    {
      type: "Intergenerational Ethics",
      icon: <Star className="w-6 h-6" />,
      problem: "If we deplete groundwater and warm planet, what are we leaving behind?",
      question: "Like partying in a house then handing keys to kids with broken plumbing and no food",
      color: "from-purple-400 to-blue-500"
    }
  ];

  return (
    <div
      id="s-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-teal-700 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-16 w-28 h-28 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-24 right-20 w-36 h-36 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/15 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Compass className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Environmental Ethics
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              🧭 Why Should We Care? - The moral framework that guides how we treat our planet
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-green-100">
                Science tells us <strong>what is</strong>. Ethics asks <strong>what should be</strong>. 
                Do only humans deserve rights, or do rivers, forests, and animals too?
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What Is Environmental Ethics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  🌍 What Is Environmental Ethics?
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Imagine you're standing in a dense forest. No Wi-Fi, no humans - just chirping birds, 
                  rustling leaves, and a river flowing nearby.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700">💭 Would you still care if that river was polluted?</p>
                  <p className="text-gray-700">💭 Would it matter if trees were cut, even if you weren't harmed?</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-green-600">Environmental ethics</strong> goes beyond science. 
                It's the <strong>moral framework</strong> that guides how we treat the planet - 
                not just in courts or classrooms, but in daily life.
              </p>

              <div className="bg-emerald-100 border-l-4 border-emerald-500 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong className="text-emerald-600">Key Insight:</strong> Science measures pollution. 
                  Ethics asks whether it's acceptable to pollute in the first place.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">🤔 Deep Questions</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <p className="text-gray-700 font-medium">Do only humans deserve rights?</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <p className="text-gray-700 font-medium">Do animals, plants, rivers have value in themselves?</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <p className="text-gray-700 font-medium">Do we owe anything to children not yet born?</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <p className="text-gray-700 font-medium">What about the voiceless - forests, coral reefs, mountains?</p>
                  </div>
                </div>

                <div className="mt-6 bg-green-100 rounded-lg p-4">
                  <p className="text-sm text-green-700 text-center font-medium">
                    These aren't just philosophical puzzles. They are 
                    <strong> daily, planetary decisions</strong> disguised as development and policy 🌍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Major Worldviews */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🧠 Three Major Environmental Worldviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we see our relationship with nature shapes how we treat it
            </p>
          </div>

          {/* Featured Worldview (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Exploring</div>
              <div className={`bg-gradient-to-r ${worldviews[currentWorldview].color} text-white rounded-3xl p-8 max-w-5xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-8xl">{worldviews[currentWorldview].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-2">{worldviews[currentWorldview].name}</h3>
                    <p className="text-2xl opacity-90 mb-4">{worldviews[currentWorldview].subtitle}</p>
                    <p className="text-lg opacity-80 mb-4">{worldviews[currentWorldview].description}</p>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-sm"><strong>Key Insight:</strong> {worldviews[currentWorldview].problem}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Worldviews Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {worldviews.map((worldview, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentWorldview === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-br from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentWorldview(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-gradient-to-r ${worldview.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {worldview.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{worldview.name}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{worldview.subtitle}</p>
                
                {hoveredCard === index && (
                  <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in">
                    <p className="text-xs text-gray-700 mb-3">{worldview.analogy}</p>
                    <div className="space-y-2">
                      {worldview.examples.map((example, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <p className="text-xs text-gray-600">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Worldview Explanations */}
        <div className="space-y-16">
          
          {/* Anthropocentrism */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border-l-4 border-orange-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <User className="w-10 h-10 text-orange-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    1. Anthropocentrism - Human-Supremacy Lens
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  At the heart of this worldview is the belief that humans are the 
                  <strong className="text-orange-600"> center of the universe</strong>, 
                  and everything else exists <strong>for our benefit</strong>.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800">🏗️ Historical Impact:</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🌲 Forests seen as "unused land"</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🏞️ Rivers as "channels for dams and irrigation"</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🐄 Animals as "resources" - not lives, but leather, meat, muscle</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-4">
                  <h4 className="font-bold text-red-700 mb-2">⚠️ Ethical Problem</h4>
                  <p className="text-gray-700">
                    When humans become the only ones with value, everything else becomes expendable
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800">🏛️ Heritage Building Analogy</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                    <p className="text-gray-700">
                      <strong className="text-orange-600">Anthropocentrism:</strong> Like a landlord who sees 
                      a heritage haveli as just a pile of bricks
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700">
                      <strong className="text-red-600">Action:</strong> Replaces it with a profitable mall
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong className="text-gray-600">Result:</strong> Short-term gain over timeless worth
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-orange-100 rounded-lg p-4">
                  <h5 className="font-bold text-orange-700 mb-2">👷 Real Example</h5>
                  <p className="text-sm text-gray-700">
                    Massive hydroelectric dams displace thousands, submerge forests, 
                    disrupt ecosystems - yet justified as "nation-building"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biocentrism */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800">🎼 Orchestra Analogy</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700">
                      <strong className="text-green-600">Biocentrism:</strong> Life is like a well-cast orchestra
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <p className="text-gray-700">
                      <strong className="text-emerald-600">Every Being:</strong> Even the tiniest triangle or flute matters
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700">
                      <strong className="text-red-600">Remove Them:</strong> The symphony collapses
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-100 rounded-lg p-4">
                  <h5 className="font-bold text-green-700 mb-2">🕉️ Jainism Example</h5>
                  <p className="text-sm text-gray-700">
                    Monks wear masks to avoid inhaling tiny organisms, 
                    sweep paths to avoid trampling ants - even silence can be ethical
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Trees className="w-10 h-10 text-green-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    2. Biocentrism - All Life Matters
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Biocentrism says: <strong className="text-green-600">Every living being has intrinsic value.</strong>
                  A sparrow, spider, or sapling has a right to live - not because it's useful to us, but because it's alive.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800">🌱 Core Philosophy:</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🐦 Every sparrow has inherent worth</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🕷️ Every spider deserves to live</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🌿 Every sapling has a right to grow</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 border-l-4 border-green-500 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">👩‍🏫 Modern Relevance</h4>
                  <p className="text-gray-700">
                    Challenges human arrogance. We become <strong>caretakers, not conquerors</strong>
                  </p>
                </div>

                <div className="bg-emerald-100 rounded-lg p-4">
                  <p className="text-sm text-emerald-700 font-medium text-center">
                    "If a tree is your sister, you don't let someone take an axe to her just for profit" 🌳
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ecocentrism */}
          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-teal-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Earth className="w-10 h-10 text-teal-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    3. Ecocentrism - The Whole is Sacred
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ecocentrism takes a broader view. It argues that it's not just individual beings that matter - 
                  but <strong className="text-teal-600">entire systems</strong>.
                </p>

                <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-400">
                  <p className="text-gray-700 leading-relaxed">
                    A forest is not just a collection of trees. It's an intricate web of 
                    <strong className="text-teal-600"> soil, fungi, rainfall, monkeys, beetles, birdcalls, and time</strong>. 
                    Kill one part, and the whole can unravel.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-800">🌊 Deep Insight:</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🔗 Respects the <strong>balance</strong></p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🤝 Values the <strong>relationships</strong></p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-700">🌐 Honors the <strong>interdependence</strong> that defines life</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-100 border-l-4 border-teal-500 rounded-lg p-4">
                  <h4 className="font-bold text-teal-700 mb-2">🌊 Wetlands Example</h4>
                  <p className="text-gray-700">
                    Often drained for real estate, but ecocentrism sees them as essential systems - 
                    filtering water, buffering floods, nurturing life
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800">🫀 Body Analogy</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <p className="text-gray-700">
                      <strong className="text-teal-600">Earth's Systems:</strong> Like organs in a body
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-gray-700">
                      <strong className="text-blue-600">Wetlands:</strong> Earth's kidneys (filter water)
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700">
                      <strong className="text-green-600">Forests:</strong> Earth's lungs (produce oxygen)
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700">
                      <strong className="text-red-600">Can't declare:</strong> Liver or lungs as "waste space"
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-orange-100 rounded-lg p-4">
                  <p className="text-sm text-orange-700 text-center font-medium">
                    Destroying one system affects the whole body 🫀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural and Indigenous Ethics */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-600">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Leaf className="w-10 h-10 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                🌀 Cultural and Indigenous Environmental Ethics
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ethics isn't just in textbooks - it's woven into stories, customs, and rituals of traditional cultures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {culturalExamples.map((example, index) => (
              <div key={index} className={`${example.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-2">
                    {example.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{example.title}</h3>
                    <p className="text-sm text-gray-600">{example.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{example.description}</p>
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">"{example.significance}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🪷 Spiritual Traditions Rooted in Nature</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌊</div>
                <h4 className="font-bold text-gray-800 mb-2">Rivers as Mothers</h4>
                <p className="text-sm text-gray-600">Ganga isn't just a river. She's Ganga Ma - goddess, purifier, mother</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌳</div>
                <h4 className="font-bold text-gray-800 mb-2">Trees as Kin</h4>
                <p className="text-sm text-gray-600">Tulsi planted for health, Peepal worshipped - worship meets science</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏡</div>
                <h4 className="font-bold text-gray-800 mb-2">Village Wisdom</h4>
                <p className="text-sm text-gray-600">"Jal hai to kal hai" - If there's water, there's a future</p>
              </div>
            </div>
            
            <div className="mt-6 bg-emerald-100 rounded-lg p-4">
              <p className="text-center text-emerald-700 font-medium">
                These practices weren't "superstition" - they were <strong>ecological coding through culture</strong> 🌿
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Justice */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-orange-600">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Scale className="w-10 h-10 text-orange-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                ⚖️ Environmental Justice - Ethics in Action
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Environmental damage doesn't impact everyone equally
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {justiceExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-r ${example.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {example.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{example.type}</h3>
                <p className="text-gray-700 mb-4 text-sm">{example.problem}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 italic">💭 {example.question}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🌡️ Who Suffers Most?</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-red-50 rounded-lg p-3">
                  <span className="text-gray-700">Worst Air Quality</span>
                  <span className="text-red-600 font-bold">Slum dwellers</span>
                </div>
                <div className="flex items-center justify-between bg-orange-50 rounded-lg p-3">
                  <span className="text-gray-700">Land Taken for Mining</span>
                  <span className="text-orange-600 font-bold">Tribal people</span>
                </div>
                <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
                  <span className="text-gray-700">Floods & Droughts</span>
                  <span className="text-blue-600 font-bold">The poor</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">👶 Greta's Message</h3>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-gray-700 mb-3 italic">
                  "You are stealing our future" - Greta Thunberg
                </p>
                <p className="text-sm text-gray-600">
                  This isn't data; it's <strong className="text-green-600">ethical outrage</strong>
                </p>
              </div>
              
              <div className="mt-4 bg-orange-100 rounded-lg p-4">
                <h4 className="font-bold text-orange-700 mb-2">🏠 Party House Analogy</h4>
                <p className="text-sm text-gray-700">
                  Like partying in a house then handing keys to your kids - 
                  with broken plumbing, unpaid bills, and no food left
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Worldview Comparison */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🎯 Worldview Comparison
            </h2>
            <p className="text-gray-600">
              Click on each worldview to explore its perspective
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {worldviews.map((worldview, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setCurrentWorldview(index)}
              >
                <div className={`bg-gradient-to-br ${worldview.color} text-white rounded-2xl p-6 text-center transform group-hover:scale-110 transition-all duration-300 ${
                  currentWorldview === index ? 'ring-4 ring-green-300 scale-110' : ''
                }`}>
                  <div className="text-4xl mb-3">{worldview.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{worldview.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{worldview.subtitle}</p>
                  {currentWorldview === index && (
                    <div className="bg-white/20 rounded-lg p-3 animate-fade-in">
                      <p className="text-xs">{worldview.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🌍 The Question That Matters</h3>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                When you see a polluted river, what do you feel?
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-orange-600 mb-2">Anthropocentric:</h4>
                  <p className="text-sm text-gray-700">"How does this affect humans?"</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-green-600 mb-2">Biocentric:</h4>
                  <p className="text-sm text-gray-700">"What about the fish suffering?"</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-teal-600 mb-2">Ecocentric:</h4>
                  <p className="text-sm text-gray-700">"The whole ecosystem is dying"</p>
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
                  <h3 className="text-lg font-bold text-gray-800">Ethics Shape Action</h3>
                </div>
                <p className="text-gray-700">
                  Ethics shape how we treat the Earth - especially when law or science remains silent
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-lg font-bold text-gray-800">Three Worldviews</h3>
                </div>
                <p className="text-gray-700">
                  Anthropocentrism exploits, Biocentrism values all life, Ecocentrism protects systems
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-lg font-bold text-gray-800">Cultural Wisdom</h3>
                </div>
                <p className="text-gray-700">
                  Indigenous cultures embody ecological wisdom through rituals, beliefs, and customs
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-lg font-bold text-gray-800">Environmental Justice</h3>
                </div>
                <p className="text-gray-700">
                  Environmental justice is about fairness - to the poor, the future, and the voiceless
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <h3 className="text-lg font-bold text-gray-800">Daily Decisions</h3>
                </div>
                <p className="text-gray-700">
                  These aren't abstract ideas - they guide daily decisions about development and consumption
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <h3 className="text-lg font-bold text-gray-800">Beyond Laws</h3>
                </div>
                <p className="text-gray-700">
                  Love, culture, and community protect Earth before damage is done
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">🌍 The Ultimate Question</h3>
              <p className="text-lg mb-6">
                How you see nature determines how you treat it. 
                <strong> What lens will you choose?</strong>
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm">
                  Whether rivers remain sacred mothers or become sewage drains, 
                  whether forests stay divine temples or become shopping malls - 
                  it all depends on the ethics we choose to live by 🌿
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Ethics Scenario */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🤔 Ethics in Action Scenario
            </h2>
            <p className="text-gray-600">
              A company wants to build a factory near a sacred grove. How would each worldview respond?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <div className="text-center mb-4">
                <User className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-bold text-orange-700">Anthropocentric Response</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">"Will this create jobs?"</p>
                <p className="text-sm text-gray-700">"How much profit will it generate?"</p>
                <p className="text-sm text-gray-700">"Can we relocate the trees?"</p>
              </div>
              <div className="mt-4 bg-orange-100 rounded-lg p-3">
                <p className="text-xs text-orange-700 font-medium">
                  Focus: Human economic benefit
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-center mb-4">
                <Trees className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-green-700">Biocentric Response</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">"What about the trees' right to live?"</p>
                <p className="text-sm text-gray-700">"Do animals have a voice in this?"</p>
                <p className="text-sm text-gray-700">"Every life has intrinsic value"</p>
              </div>
              <div className="mt-4 bg-green-100 rounded-lg p-3">
                <p className="text-xs text-green-700 font-medium">
                  Focus: Rights of all living beings
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border-2 border-teal-200">
              <div className="text-center mb-4">
                <Earth className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-bold text-teal-700">Ecocentric Response</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">"This will disrupt the entire ecosystem"</p>
                <p className="text-sm text-gray-700">"Sacred groves maintain ecological balance"</p>
                <p className="text-sm text-gray-700">"System health over individual profit"</p>
              </div>
              <div className="mt-4 bg-teal-100 rounded-lg p-3">
                <p className="text-xs text-teal-700 font-medium">
                  Focus: Ecosystem integrity
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Which Response Resonates With You?</h3>
              <p className="text-lg">
                Your answer reveals your environmental ethic and shapes how you'll treat nature 
                throughout your life 🌱
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

export default Module3EnvironmentalEthics;