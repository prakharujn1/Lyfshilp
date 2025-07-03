import React, { useState, useEffect } from 'react';
import { Heart, Globe, Lightbulb, Users, Leaf, BookOpen, Zap, Target, Award, CheckCircle, ArrowRight, Star, TrendingUp, Shield } from 'lucide-react';

const Module8ImpactEntrepreneurship = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedSDG, setSelectedSDG] = useState(null);
  const [canvasData, setCanvasData] = useState({
    sdgChosen: '',
    startupIdea: '',
    impactMetrics: '',
    targetGroup: '',
    techLayer: '',
    longTermVision: ''
  });
  const [currentSDGIndex, setCurrentSDGIndex] = useState(0);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSDGIndex((prev) => (prev + 1) % sdgExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const impactTraits = [
    {
      trait: "Purpose-driven",
      description: "Solving real-world problems is the primary motivation",
      icon: <Target className="w-8 h-8" />
    },
    {
      trait: "Double Impact",
      description: "Generate both financial profit and social/environmental benefit",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      trait: "Innovation for Inclusion",
      description: "Use technology to reach underserved communities",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      trait: "Measurable Outcomes",
      description: "Track both business metrics and social impact",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const sdgExamples = [
    {
      sdg: "Zero Hunger (SDG 2)",
      startup: "Agri-tech platform connecting farmers to AI-powered crop advisory",
      impact: "Increases food yield and reduces waste",
      color: "from-green-500 to-emerald-600",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      sdg: "Quality Education (SDG 4)",
      startup: "EdTech app for low-income students with adaptive learning",
      impact: "Reduces learning gaps with AI personalization",
      color: "from-emerald-500 to-teal-600",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      sdg: "Gender Equality (SDG 5)",
      startup: "Job-tech platform connecting women to work-from-home gigs",
      impact: "Empowers women with income and digital upskilling",
      color: "from-teal-500 to-green-600",
      icon: <Users className="w-8 h-8" />
    },
    {
      sdg: "Affordable Clean Energy (SDG 7)",
      startup: "Solar kits for rural homes with micro-loans",
      impact: "Enables lighting, phone charging, and internet access in off-grid areas",
      color: "from-green-600 to-emerald-500",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const allSDGs = [
    { number: 1, title: "No Poverty", color: "bg-green-500", icon: "🏠" },
    { number: 2, title: "Zero Hunger", color: "bg-green-500", icon: "🌾" },
    { number: 3, title: "Good Health", color: "bg-green-500", icon: "🏥" },
    { number: 4, title: "Quality Education", color: "bg-green-500", icon: "📚" },
    { number: 5, title: "Gender Equality", color: "bg-green-500", icon: "⚖️" },
    { number: 6, title: "Clean Water", color: "bg-green-500", icon: "💧" },
    { number: 7, title: "Clean Energy", color: "bg-green-500", icon: "⚡" },
    { number: 8, title: "Decent Work", color: "bg-green-500", icon: "💼" },
    { number: 9, title: "Industry Innovation", color: "bg-green-500", icon: "🏭" },
    { number: 10, title: "Reduced Inequalities", color: "bg-green-500", icon: "🤝" },
    { number: 11, title: "Sustainable Cities", color: "bg-green-500", icon: "🏙️" },
    { number: 12, title: "Responsible Consumption", color: "bg-green-500", icon: "♻️" },
    { number: 13, title: "Climate Action", color: "bg-green-500", icon: "🌍" },
    { number: 14, title: "Life Below Water", color: "bg-green-500", icon: "🐟" },
    { number: 15, title: "Life on Land", color: "bg-green-500", icon: "🌳" },
    { number: 16, title: "Peace & Justice", color: "bg-green-500", icon: "⚖️" },
    { number: 17, title: "Partnerships", color: "bg-green-500", icon: "🤝" }
  ];

  const handleCanvasChange = (field, value) => {
    setCanvasData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSDGSelect = (sdg) => {
    setSelectedSDG(sdg);
    setCanvasData(prev => ({
      ...prev,
      sdgChosen: `${sdg.title} (SDG ${sdg.number})`
    }));
  };

  return (
    <div
      id="s-8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-8"] = el;
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
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Impact Entrepreneurship & the SDGs
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Create businesses that make money AND make a difference in the world
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, text: "What is Impact Entrepreneurship and why it matters", color: "bg-green-100 text-green-600" },
              { icon: <Globe className="w-6 h-6" />, text: "How to align your startup with UN Sustainable Development Goals", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Target className="w-6 h-6" />, text: "Measuring both profit and social impact", color: "bg-teal-100 text-teal-600" },
              { icon: <Lightbulb className="w-6 h-6" />, text: "Using technology for social good", color: "bg-green-100 text-green-600" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-lg">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is Impact Entrepreneurship */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Impact Entrepreneurship?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Impact Entrepreneurship is about creating startups that aim for <strong className="text-green-600">double returns</strong>:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full p-2">
                      <span className="text-xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Financial Profit</h3>
                      <p className="text-gray-600">Sustainable business model that generates revenue</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500 text-white rounded-full p-2">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Social/Environmental Benefit</h3>
                      <p className="text-gray-600">Positive impact on society and the planet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Traits of Impact Entrepreneurs</h3>
                <div className="space-y-4">
                  {impactTraits.map((trait, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${(index + 4) * 200}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-2 flex-shrink-0">
                          <Target className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-gray-800">{trait.trait}</h4>
                          <p className="text-sm text-gray-600">{trait.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UN SDGs Introduction */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🌍 The UN Sustainable Development Goals
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700">
                The <strong className="text-green-600">17 UN SDGs</strong> are a global roadmap for solving humanity's biggest problems. 
                Impact startups align their <strong className="text-emerald-600">mission and metrics</strong> to these goals.
              </p>
            </div>
          </div>

          {/* Featured SDG Example (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Featured SDG Impact Example</div>
              <div className={`bg-gradient-to-r ${sdgExamples[currentSDGIndex].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl">
                    {sdgExamples[currentSDGIndex].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{sdgExamples[currentSDGIndex].sdg}</h3>
                    <p className="text-lg opacity-90 mb-4">{sdgExamples[currentSDGIndex].startup}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm font-medium">Impact: <strong>{sdgExamples[currentSDGIndex].impact}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All SDGs Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              All 17 Sustainable Development Goals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {allSDGs.map((sdg, index) => (
                <div
                  key={index}
                  className={`${sdg.color} text-white rounded-xl p-4 text-center cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in ${
                    selectedSDG?.number === sdg.number ? 'ring-4 ring-green-800 scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleSDGSelect(sdg)}
                >
                  <div className="text-2xl mb-2">{sdg.icon}</div>
                  <div className="text-xs font-bold mb-1">{sdg.number}</div>
                  <div className="text-xs">{sdg.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SDG Alignment Canvas */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🎯 SDG Alignment Canvas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design your impact startup by choosing SDGs and defining your approach
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                  <label className="block text-lg font-bold text-gray-800 mb-3">SDG Chosen</label>
                  <input
                    type="text"
                    value={canvasData.sdgChosen}
                    onChange={(e) => handleCanvasChange('sdgChosen', e.target.value)}
                    placeholder="Pick 1 or 2 relevant goals"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-600 mt-2">Click on SDG icons above to select</p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400">
                  <label className="block text-lg font-bold text-gray-800 mb-3">Startup Idea Summary</label>
                  <textarea
                    value={canvasData.startupIdea}
                    onChange={(e) => handleCanvasChange('startupIdea', e.target.value)}
                    placeholder="2-3 lines describing your solution"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-24 resize-none"
                  />
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border-l-4 border-teal-400">
                  <label className="block text-lg font-bold text-gray-800 mb-3">Impact Metrics</label>
                  <textarea
                    value={canvasData.impactMetrics}
                    onChange={(e) => handleCanvasChange('impactMetrics', e.target.value)}
                    placeholder="How will success be measured? (e.g., # of students educated, CO₂ saved)"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent h-24 resize-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                  <label className="block text-lg font-bold text-gray-800 mb-3">Target Group</label>
                  <input
                    type="text"
                    value={canvasData.targetGroup}
                    onChange={(e) => handleCanvasChange('targetGroup', e.target.value)}
                    placeholder="Who benefits? (e.g., farmers, students, women)"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400">
                  <label className="block text-lg font-bold text-gray-800 mb-3">Tech/AI Layer</label>
                  <textarea
                    value={canvasData.techLayer}
                    onChange={(e) => handleCanvasChange('techLayer', e.target.value)}
                    placeholder="How does technology increase reach or effectiveness?"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent h-24 resize-none"
                  />
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border-l-4 border-teal-400">
                  <label className="block text-lg font-bold text-gray-800 mb-3">Long-Term Vision</label>
                  <textarea
                    value={canvasData.longTermVision}
                    onChange={(e) => handleCanvasChange('longTermVision', e.target.value)}
                    placeholder="What future impact do you hope to scale?"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent h-24 resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setShowCanvas(!showCanvas)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                {showCanvas ? 'Hide' : 'Show'} My Impact Canvas
              </button>
            </div>

            {showCanvas && (
              <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Impact Startup Canvas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-green-600 mb-2">🎯 SDG Focus</h4>
                      <p className="text-gray-700">{canvasData.sdgChosen || 'Not selected yet'}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-emerald-600 mb-2">💡 Startup Idea</h4>
                      <p className="text-gray-700">{canvasData.startupIdea || 'Not defined yet'}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-teal-600 mb-2">📊 Impact Metrics</h4>
                      <p className="text-gray-700">{canvasData.impactMetrics || 'Not defined yet'}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-green-600 mb-2">👥 Target Group</h4>
                      <p className="text-gray-700">{canvasData.targetGroup || 'Not defined yet'}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-emerald-600 mb-2">🤖 Tech Layer</h4>
                      <p className="text-gray-700">{canvasData.techLayer || 'Not defined yet'}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-teal-600 mb-2">🚀 Long-Term Vision</h4>
                      <p className="text-gray-700">{canvasData.longTermVision || 'Not defined yet'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🌟 Real Impact Success Stories
            </h2>
            <p className="text-xl text-gray-700">
              Young entrepreneurs making a difference worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Malala Fund",
                founder: "Malala Yousafzai",
                impact: "Education for girls worldwide",
                sdg: "SDG 4 & 5",
                achievement: "12 million girls in school"
              },
              {
                name: "Grameen Bank",
                founder: "Muhammad Yunus",
                impact: "Microfinance for the poor",
                sdg: "SDG 1 & 8",
                achievement: "97% loan repayment rate"
              },
              {
                name: "Patagonia",
                founder: "Yvon Chouinard",
                impact: "Environmental activism through business",
                sdg: "SDG 13 & 15",
                achievement: "$100M+ donated to climate causes"
              }
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 mx-auto mb-4 w-fit">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Founded by {story.founder}</p>
                  <p className="text-gray-700 mb-4">{story.impact}</p>
                  <div className="bg-green-100 rounded-lg p-3 mb-3">
                    <p className="text-sm font-bold text-green-800">{story.sdg}</p>
                  </div>
                  <p className="text-sm text-emerald-600 font-bold">{story.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🎯 Your Impact Journey Starts Here
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-600 mb-3">Think Beyond Profit</h3>
                <p className="text-gray-700">
                  Ask yourself: "How can my startup solve a real problem while building a sustainable business?"
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400">
                <h3 className="text-xl font-bold text-emerald-600 mb-3">Measure What Matters</h3>
                <p className="text-gray-700">
                  Track both business metrics AND social impact. Show investors you care about more than just money.
                </p>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border-l-4 border-teal-400">
                <h3 className="text-xl font-bold text-teal-600 mb-3">Start Small, Think Big</h3>
                <p className="text-gray-700">
                  Begin with local impact, then scale globally. Every great movement started with one person caring enough to act.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-600 mb-3">Use Technology for Good</h3>
                <p className="text-gray-700">
                  AI and tech can amplify your impact. Use them to reach more people, reduce costs, and create lasting change.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 font-medium">
                  <strong className="text-green-600">Remember:</strong> The best startups don't just serve customers — 
                  they serve <strong className="text-emerald-600">humanity</strong>. 🌍✨
                </p>
              </div>
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

export default Module8ImpactEntrepreneurship;