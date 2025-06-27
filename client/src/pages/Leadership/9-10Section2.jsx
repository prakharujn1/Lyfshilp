import React, { useState, useEffect } from 'react';
import { Eye, Target, MapPin, CheckSquare, Clock, ArrowRight, Star, Lightbulb, Trophy, Flag, Compass, Zap, Award, Users, Heart, Globe } from 'lucide-react';

const Module2VisionGoals = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentSmart, setCurrentSmart] = useState(0);
  const [showVisionCanvas, setShowVisionCanvas] = useState(false);
  const [visionInputs, setVisionInputs] = useState({
    want: '',
    care: '',
    help: ''
  });
  const [goals, setGoals] = useState({
    goal1: '',
    goal2: '',
    stretch: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSmart((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const smarterCriteria = [
    {
      letter: "S",
      word: "Specific",
      description: "Crystal clear and focused",
      example: "Improve public speaking skills by joining debate club",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      letter: "M", 
      word: "Measurable",
      description: "Track your progress",
      example: "Deliver 5 presentations this semester",
      icon: <CheckSquare className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      letter: "A",
      word: "Achievable", 
      description: "Challenging but possible",
      example: "Practice 30 minutes daily, not 5 hours",
      icon: <Star className="w-6 h-6" />,
      color: "from-teal-500 to-green-600"
    },
    {
      letter: "R",
      word: "Relevant",
      description: "Aligns with your vision",
      example: "Communication skills for leadership goals",
      icon: <Flag className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      letter: "T",
      word: "Time-bound",
      description: "Has a clear deadline",
      example: "Complete by end of school year",
      icon: <Clock className="w-6 h-6" />,
      color: "from-emerald-600 to-green-500"
    },
    {
      letter: "E+R",
      word: "Evaluated & Revised",
      description: "Review and adjust regularly",
      example: "Weekly check-ins and monthly adjustments",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-teal-600"
    }
  ];

  const visionExamples = [
    {
      title: "Environmental Leader",
      vision: "Create a sustainable school environment",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Community Builder", 
      vision: "Unite students through inclusive activities",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-400"
    },
    {
      title: "Academic Champion",
      vision: "Help peers excel in their studies",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-teal-400 to-green-500"
    }
  ];

  const handleVisionInput = (field, value) => {
    setVisionInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGoalInput = (field, value) => {
    setGoals(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div
      id="vision-goals-module"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["vision-goals"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-bounce">
                <Eye className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
              Vision Crafting & Strategic Goals
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your dreams into structured visions and create the roadmap to achieve them
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                <Compass className="w-4 h-4" />
                <span>Vision Canvas</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>SMART+ER Goals</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Vision Architect Badge</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-all duration-500">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mr-4 animate-pulse">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Eye className="w-8 h-8" />, 
                title: "Turn Dreams into Visions", 
                description: "Learn to structure your biggest dreams into clear, actionable visions",
                color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
              },
              { 
                icon: <Target className="w-8 h-8" />, 
                title: "Mission vs Vision vs Goals", 
                description: "Understand the key differences and how they work together",
                color: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
              },
              { 
                icon: <CheckSquare className="w-8 h-8" />, 
                title: "SMART+ER Planning", 
                description: "Master the enhanced goal-setting framework with evaluation and revision",
                color: "bg-gradient-to-br from-teal-50 to-green-50 border-teal-200"
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} border-2 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="text-green-600 mb-4">{objective.icon}</div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision as North Star */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-4">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Vision: Your North Star
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-l-6 border-green-400 shadow-lg">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Vision is the <strong className="text-green-600">north star</strong> for leadership. 
                  It's your beacon in the darkness, guiding every decision and inspiring others to follow.
                </p>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">But here's the key:</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Even the brightest vision needs a <strong className="text-emerald-600">map</strong>. 
                    That's where structured goal setting comes in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 transform hover:rotate-1 transition-all duration-500">
              <div className="text-center">
                <div className="text-8xl mb-6">🌟</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Vision + Goals = Success</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-semibold text-lg">Provides Direction</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-400 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-semibold text-lg">Inspires Others</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border-l-4 border-teal-400 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-semibold text-lg">Drives Decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Examples */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Vision Examples from Young Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other students have crafted compelling visions that drive real change
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visionExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${example.color} text-white rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 inline-block mb-6">
                    {example.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{example.title}</h3>
                  <p className="text-xl opacity-90 leading-relaxed">{example.vision}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMART+ER Goals Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              SMART+ER Goal Framework
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-l-6 border-green-400 max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 mb-4">
                Enhanced goal-setting with <strong className="text-green-600 text-3xl">Evaluation</strong> and <strong className="text-emerald-600 text-3xl">Revision</strong>
              </p>
              <p className="text-lg text-gray-600">
                The traditional SMART framework gets an upgrade for modern leaders
              </p>
            </div>
          </div>
          
          {/* Featured SMART+ER Letter (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="text-lg text-gray-600 mb-6">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${smarterCriteria[currentSmart].color} text-white rounded-3xl p-10 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-700 shadow-xl`}>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-8xl font-bold">{smarterCriteria[currentSmart].letter}</div>
                  <div className="text-left">
                    <h3 className="text-4xl font-bold mb-3">{smarterCriteria[currentSmart].word}</h3>
                    <p className="text-xl opacity-90 mb-4">{smarterCriteria[currentSmart].description}</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-sm"><strong>Example:</strong> {smarterCriteria[currentSmart].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All SMART+ER Criteria Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {smarterCriteria.map((smart, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-500 cursor-pointer ${
                  currentSmart === index ? 'ring-4 ring-green-300 scale-110 shadow-2xl' : 'shadow-lg'
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentSmart(index)}
              >
                <div className={`bg-gradient-to-r ${smart.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg`}>
                  {smart.letter}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{smart.word}</h3>
                <p className="text-sm text-gray-600 mb-3">{smart.description}</p>
                <div className="text-green-600">
                  {smart.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMART+ER Example Transformation */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-6 border-green-400 shadow-xl">
          <div className="text-center mb-10">
            <div className="text-6xl mb-6">💡</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Goal Transformation Example
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl p-10 shadow-lg max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Before */}
              <div className="text-center">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-4">
                  <h3 className="text-2xl font-bold text-red-600 mb-3">❌ Weak Goal</h3>
                  <p className="text-xl text-gray-700">
                    "I want to be a better leader"
                  </p>
                </div>
                <ArrowRight className="w-12 h-12 text-green-600 mx-auto mb-4 animate-bounce" />
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-3">✅ SMART+ER Goal</h3>
                  <p className="text-xl text-gray-700 font-semibold">
                    "I will improve my leadership skills by organizing 3 school events this semester, 
                    leading a team of 10+ students each time, with weekly progress reviews and monthly 
                    strategy adjustments based on feedback"
                  </p>
                </div>
              </div>
              
              {/* Breakdown */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
                {[
                  { letter: "S", check: "Organize school events", color: "from-green-400 to-emerald-400" },
                  { letter: "M", check: "3 events, 10+ students", color: "from-emerald-400 to-teal-400" },
                  { letter: "A", check: "Realistic for semester", color: "from-teal-400 to-green-500" },
                  { letter: "R", check: "Builds leadership skills", color: "from-green-500 to-emerald-500" },
                  { letter: "T", check: "This semester", color: "from-emerald-500 to-teal-500" },
                  { letter: "E+R", check: "Weekly & monthly reviews", color: "from-teal-500 to-green-400" }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300`}>
                    <div className="font-bold text-lg mb-2">{item.letter}</div>
                    <p className="text-sm font-medium">{item.check}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Canvas Challenge */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Award className="w-12 h-12 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Challenge: Vision Blueprint Builder
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-lg text-gray-700">
                <strong className="text-green-600">Badge to Earn:</strong> 🔭 Vision Architect
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowVisionCanvas(!showVisionCanvas)}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 text-xl font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg mb-8"
            >
              {showVisionCanvas ? 'Hide Vision Canvas' : 'Start Vision Canvas ✨'}
            </button>

            {showVisionCanvas && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Fill Your Vision Canvas
                </h3>
                
                <div className="space-y-8">
                  {[
                    { field: 'want', label: 'I want to...', icon: <Target className="w-6 h-6" /> },
                    { field: 'care', label: 'Because I care about...', icon: <Heart className="w-6 h-6" /> },
                    { field: 'help', label: 'It will help others by...', icon: <Users className="w-6 h-6" /> }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-green-600">{item.icon}</div>
                        <label className="text-lg font-semibold text-gray-800">{item.label}</label>
                      </div>
                      <textarea
                        value={visionInputs[item.field]}
                        onChange={(e) => handleVisionInput(item.field, e.target.value)}
                        className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-400 focus:outline-none resize-none"
                        rows="3"
                        placeholder={`Share your thoughts about ${item.label.toLowerCase()}...`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg border border-green-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Now Set Your SMART+ER Goals
                  </h4>
                  <div className="space-y-6">
                    {[
                      { field: 'goal1', label: 'SMART+ER Goal #1' },
                      { field: 'goal2', label: 'SMART+ER Goal #2' },
                      { field: 'stretch', label: 'Stretch Goal (Dream Big!)' }
                    ].map((goal, index) => (
                      <div key={index}>
                        <label className="block text-lg font-semibold text-gray-800 mb-2">
                          {goal.label}
                        </label>
                        <input
                          type="text"
                          value={goals[goal.field]}
                          onChange={(e) => handleGoalInput(goal.field, e.target.value)}
                          className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-400 focus:outline-none"
                          placeholder={`Write your ${goal.label.toLowerCase()}...`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Concepts Summary */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-6 border-green-400 shadow-xl">
          <div className="text-center mb-10">
            <Trophy className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Concepts Mastered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision Canvas",
                description: "A structured framework to transform dreams into actionable visions",
                icon: <Compass className="w-8 h-8" />
              },
              {
                title: "SMART+ER Goals",
                description: "Enhanced goal-setting with continuous evaluation and revision",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Strategic Planning",
                description: "Balancing short-term wins with long-term vision achievement",
                icon: <MapPin className="w-8 h-8" />
              }
            ].map((concept, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-green-600 mb-4">{concept.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{concept.title}</h3>
                <p className="text-gray-600 leading-relaxed">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Takeaway */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Your Leadership Journey Begins Here
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-medium mb-8 leading-relaxed">
            You now have the tools to craft compelling visions and create strategic goals that turn dreams into reality. 
            Remember: every great leader started with a vision and the courage to pursue it.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-6 text-lg font-semibold">
              <div className="flex items-center space-x-2">
                <Eye className="w-6 h-6" />
                <span>Vision</span>
              </div>
              <ArrowRight className="w-6 h-6 animate-pulse" />
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6" />
                <span>Goals</span>
              </div>
              <ArrowRight className="w-6 h-6 animate-pulse" />
              <div className="flex items-center space-x-2">
                <Trophy className="w-6 h-6" />
                <span>Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Module2VisionGoals;