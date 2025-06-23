import React, { useState, useEffect } from 'react';
import { Lightbulb, Target, Users, TrendingUp, CheckCircle, Star, Zap, ArrowRight, Brain, TestTube, Trophy, Heart, Sparkles, BarChart3, RefreshCw, Globe } from 'lucide-react';

const Module3IdeationValidation = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentScamper, setCurrentScamper] = useState(0);
  const [activeIdea, setActiveIdea] = useState(null);
  const [ideaScores, setIdeaScores] = useState({
    idea1: { uniqueness: 0, scalability: 0, feasibility: 0, impact: 0 },
    idea2: { uniqueness: 0, scalability: 0, feasibility: 0, impact: 0 },
    idea3: { uniqueness: 0, scalability: 0, feasibility: 0, impact: 0 }
  });
  const [currentValidation, setCurrentValidation] = useState(0);
  const [productMarketFit, setProductMarketFit] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScamper((prev) => (prev + 1) % 7);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValidation((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProductMarketFit((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scamperMethods = [
    {
      letter: "S",
      word: "Substitute",
      description: "What can be substituted?",
      example: "Replace plastic with bamboo",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      letter: "C",
      word: "Combine",
      description: "What can be combined?",
      example: "Phone + Camera = Smartphone",
      icon: <Zap className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      letter: "A",
      word: "Adapt",
      description: "What can be adapted?",
      example: "Adapt ride-sharing to food delivery",
      icon: <Target className="w-6 h-6" />,
      color: "from-teal-500 to-green-600"
    },
    {
      letter: "M",
      word: "Modify",
      description: "What can be modified?",
      example: "Make it smaller, faster, or stronger",
      icon: <Star className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      letter: "P",
      word: "Put to Other Use",
      description: "How else can this be used?",
      example: "Use coffee grounds as fertilizer",
      icon: <Globe className="w-6 h-6" />,
      color: "from-emerald-600 to-teal-600"
    },
    {
      letter: "E",
      word: "Eliminate",
      description: "What can be removed?",
      example: "Remove buttons for touchscreen",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-teal-600 to-green-500"
    },
    {
      letter: "R",
      word: "Reverse",
      description: "What can be reversed?",
      example: "Customers serve themselves",
      icon: <ArrowRight className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const validationMethods = [
    {
      title: "Landing Page Testing",
      description: "Create a simple website to test interest",
      tools: "Tilda, Carrd",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      steps: ["Create landing page", "Add signup form", "Share with users", "Track metrics"]
    },
    {
      title: "MVP Demos",
      description: "Build a basic working version",
      tools: "Glide, Bubble, Adalo",
      icon: <TestTube className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      steps: ["Identify core features", "Build with no-code", "Test with users", "Gather feedback"]
    },
    {
      title: "A/B Testing",
      description: "Compare two versions to see which works better",
      tools: "Google Optimize, Hotjar",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      steps: ["Create two versions", "Split user traffic", "Measure results", "Choose winner"]
    }
  ];

  const productMarketFitIndicators = [
    {
      title: "Users Refer Others",
      description: "People naturally tell friends about your product",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      examples: ["Word of mouth", "Social sharing", "Organic growth"]
    },
    {
      title: "High Engagement",
      description: "Users come back repeatedly",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      examples: ["Daily active users", "Long session times", "Feature usage"]
    },
    {
      title: "Willingness to Pay",
      description: "Users are ready to invest money",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      examples: ["Pre-orders", "Subscriptions", "Premium upgrades"]
    }
  ];

  const criteriaLabels = {
    uniqueness: "Uniqueness",
    scalability: "Scalability", 
    feasibility: "Feasibility",
    impact: "Social/Environmental Impact"
  };

  const handleScoreChange = (ideaKey, criterion, value) => {
    setIdeaScores(prev => ({
      ...prev,
      [ideaKey]: {
        ...prev[ideaKey],
        [criterion]: parseInt(value)
      }
    }));
  };

  const getTotalScore = (ideaKey) => {
    const scores = ideaScores[ideaKey];
    return Object.values(scores).reduce((sum, score) => sum + score, 0);
  };

  return (
    <div
      id="m-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-3"] = el;
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
                <Lightbulb className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ideation, Validation & Product-Market Fit
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to generate innovative ideas, validate them with real users, and achieve product-market fit
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
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Brain className="w-6 h-6" />, text: "Structured ideation using SCAMPER method", color: "bg-green-100 text-green-600" },
              { icon: <TestTube className="w-6 h-6" />, text: "Validation techniques to test your ideas", color: "bg-emerald-100 text-emerald-600" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Understanding product-market fit", color: "bg-teal-100 text-teal-600" }
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

        {/* Structured Ideation Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Structured Ideation
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Go beyond random brainstorming. Use <strong className="text-green-600">SCAMPER</strong> to modify existing solutions and explore <strong className="text-emerald-600">Blue Ocean Strategy</strong> to find uncontested markets.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Why Structure Matters</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Generates more creative solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Prevents getting stuck in one direction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span>Builds on existing successful ideas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">SCAMPER Method</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {scamperMethods.map((method, index) => (
                    <span key={index} className={index === currentScamper ? 'text-green-600' : 'text-gray-300'}>
                      {method.letter}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">
                  7 different ways to think about your problem
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SCAMPER Method Details */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The SCAMPER Method
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Each letter gives you a different <strong className="text-green-600">perspective</strong> on your problem
              </p>
            </div>
          </div>
          
          {/* Featured SCAMPER Letter (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${scamperMethods[currentScamper].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-white/20 rounded-full p-4">
                    <div className="text-4xl font-bold">{scamperMethods[currentScamper].letter}</div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{scamperMethods[currentScamper].word}</h3>
                    <p className="text-xl opacity-90 mb-2">{scamperMethods[currentScamper].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{scamperMethods[currentScamper].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All SCAMPER Methods Grid */}
          <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4">
            {scamperMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentScamper === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                onClick={() => setCurrentScamper(index)}
              >
                <div className={`bg-gradient-to-r ${method.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold`}>
                  {method.letter}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{method.word}</h3>
                <div className="text-green-600 mb-2">
                  {method.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Idea Filter Worksheet */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Idea Filter Worksheet
            </h2>
            <p className="text-lg text-gray-600">
              Evaluate your top 3 ideas using these criteria (1-5 scale)
            </p>
          </div>

          <div className="space-y-8">
            {['idea1', 'idea2', 'idea3'].map((ideaKey, ideaIndex) => (
              <div key={ideaKey} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Idea {ideaIndex + 1}</h3>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <span className="text-sm text-gray-600">Total Score: </span>
                    <span className="text-2xl font-bold text-green-600">{getTotalScore(ideaKey)}/20</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(criteriaLabels).map(([criterion, label]) => (
                    <div key={criterion} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-gray-700">{label}</label>
                        <span className="text-lg font-bold text-green-600">{ideaScores[ideaKey][criterion]}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={ideaScores[ideaKey][criterion]}
                        onChange={(e) => handleScoreChange(ideaKey, criterion, e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Scoring Guide</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <strong className="text-green-600">Uniqueness:</strong> How different from existing solutions?
              </div>
              <div className="bg-white rounded-lg p-3">
                <strong className="text-emerald-600">Scalability:</strong> Can it grow to serve more users?
              </div>
              <div className="bg-white rounded-lg p-3">
                <strong className="text-teal-600">Feasibility:</strong> Is it realistic with available resources?
              </div>
              <div className="bg-white rounded-lg p-3">
                <strong className="text-green-700">Impact:</strong> Positive social/environmental contribution?
              </div>
            </div>
          </div>
        </div>

        {/* Validation Techniques */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Validation Techniques
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Test your ideas with <strong className="text-green-600">real users</strong> before building the full product
              </p>
            </div>
          </div>
          
          {/* Featured Validation Method (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${validationMethods[currentValidation].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {validationMethods[currentValidation].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{validationMethods[currentValidation].title}</h3>
                    <p className="text-xl opacity-90 mb-2">{validationMethods[currentValidation].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Tools: <strong>{validationMethods[currentValidation].tools}</strong></p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {validationMethods[currentValidation].steps.map((step, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold mb-1">{index + 1}</div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All Validation Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            {validationMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentValidation === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 150}ms` }}
                onClick={() => setCurrentValidation(index)}
              >
                <div className={`bg-gradient-to-r ${method.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{method.description}</p>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-green-600 font-medium">Tools: {method.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product-Market Fit Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is Product-Market Fit?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                Product-Market Fit occurs when your product is not only used but <strong className="text-green-600">genuinely valued</strong> by your target customers.
              </p>
              <p className="text-lg text-gray-600">
                It means you've built something that people truly need, want, and are willing to pay for.
              </p>
            </div>
          </div>

          {/* Featured PMF Indicator (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Key Indicator</div>
              <div className={`bg-gradient-to-r ${productMarketFitIndicators[productMarketFit].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {productMarketFitIndicators[productMarketFit].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{productMarketFitIndicators[productMarketFit].title}</h3>
                    <p className="text-xl opacity-90">{productMarketFitIndicators[productMarketFit].description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {productMarketFitIndicators[productMarketFit].examples.map((example, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                      <p className="text-sm font-medium">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All PMF Indicators */}
          <div className="grid md:grid-cols-3 gap-8">
            {productMarketFitIndicators.map((indicator, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  productMarketFit === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 8) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 8) * 150}ms` }}
                onClick={() => setProductMarketFit(index)}
              >
                <div className={`bg-gradient-to-r ${indicator.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {indicator.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{indicator.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        {/* <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Great entrepreneurs don't just solve problems—they solve the <strong className="text-green-600">right problems</strong> for the <strong className="text-emerald-600">right people</strong> in the <strong className="text-teal-600">right way</strong>.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Problem Identification</strong> + 
                <strong className="text-emerald-600"> Customer Discovery</strong> = 
                <strong className="text-teal-600"> Solutions That Matter! 🎯</strong>
              </p>
            </div>
          </div>
        </div> */}

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

export default Module3IdeationValidation;