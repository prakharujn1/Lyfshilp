import React, { useState, useEffect } from 'react';
import { Mic, DollarSign, TrendingUp, Users, Target, Lightbulb, Award, Play, Pause, RotateCcw, CheckCircle, XCircle, ArrowRight, Star } from 'lucide-react';

const Module7PitchFundScale = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentPitchStep, setCurrentPitchStep] = useState(0);
  const [selectedFunding, setSelectedFunding] = useState(null);
  const [selectedScaling, setSelectedScaling] = useState(null);
  const [pitchTimer, setPitchTimer] = useState(180); // 3 minutes
  const [timerActive, setTimerActive] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval = null;
    if (timerActive && pitchTimer > 0) {
      interval = setInterval(() => {
        setPitchTimer(timer => timer - 1);
      }, 1000);
    } else if (pitchTimer === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, pitchTimer]);

  const pitchStructure = [
    {
      step: "Hook",
      title: "Grab Attention",
      description: "Start with a powerful question, fact, or short story",
      example: "What if every blind person could read printed books?",
      duration: "30 seconds",
      color: "from-emerald-500 to-green-600"
    },
    {
      step: "Problem",
      title: "Define the Pain Point",
      description: "Show you understand the real-world problem",
      example: "There's no affordable device for early vision loss detection",
      duration: "45 seconds",
      color: "from-green-500 to-teal-600"
    },
    {
      step: "Solution",
      title: "Present Your Edge",
      description: "Show what makes your solution unique or 10x better",
      example: "Our AI-based app diagnoses early symptoms using just voice",
      duration: "60 seconds",
      color: "from-teal-500 to-emerald-600"
    },
    {
      step: "Traction",
      title: "Prove Progress",
      description: "Show early users, pilot results, media, partnerships",
      example: "We've tested with 100 students in 3 schools with 82% engagement",
      duration: "45 seconds",
      color: "from-emerald-600 to-green-500"
    },
    {
      step: "Ask",
      title: "Make Your Request",
      description: "What do you want - funding, mentorship, partnership?",
      example: "We're seeking ₹2 lakhs to expand to 5 more schools",
      duration: "30 seconds",
      color: "from-green-600 to-teal-500"
    }
  ];

  const fundingOptions = [
    {
      type: "Bootstrapping",
      description: "Self-funding from savings or family",
      pros: "Full control, no debt, quick start",
      cons: "Limited capital, slow growth",
      example: "Student builds eco-stationery kits using ₹2,000 from Diwali gifts",
      bestFor: "Early stages, testing ideas",
      icon: <Users className="w-6 h-6" />
    },
    {
      type: "Grants & Competitions",
      description: "Cash prizes, mentoring, or free tools from organizations",
      pros: "No equity loss, mentorship included",
      cons: "Competitive, specific requirements",
      example: "Youth Co:Lab India Challenge, Atal Innovation Mission grants",
      bestFor: "Student entrepreneurs, social impact",
      icon: <Award className="w-6 h-6" />
    },
    {
      type: "Angel Investors",
      description: "Early-stage investors who invest small amounts",
      pros: "Mentorship, network access, validation",
      cons: "Equity dilution, investor expectations",
      example: "Teacher or mentor funding ₹25k-₹50k for prototype",
      bestFor: "Proven concept, need guidance",
      icon: <Star className="w-6 h-6" />
    },
    {
      type: "Crowdfunding",
      description: "Public support through online platforms",
      pros: "Market validation, community building",
      cons: "Need strong story, marketing skills",
      example: "Climate action app raises ₹1 lakh through video storytelling",
      bestFor: "Consumer products, social causes",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const scalingStrategies = [
    {
      strategy: "Franchising/Licensing",
      description: "Let others use your model while you earn licensing fees",
      example: "Career mentoring model that other schools replicate for a fee",
      requirements: "Proven model, clear processes, brand value",
      timeline: "6-12 months",
      icon: <Users className="w-8 h-8" />
    },
    {
      strategy: "AI-led Scale",
      description: "Use automation to reach more users without more people",
      example: "AI chatbot handles 70% of onboarding, enabling 1000+ users",
      requirements: "Technology infrastructure, user data",
      timeline: "3-6 months",
      icon: <Target className="w-8 h-8" />
    },
    {
      strategy: "Regional Expansion",
      description: "Adapt your product for new cities, states, or languages",
      example: "Learning app goes from Hindi to Marathi and Kannada using AI",
      requirements: "Local partnerships, cultural adaptation",
      timeline: "6-18 months",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setTimerActive(true);
    setPracticeMode(true);
  };

  const pauseTimer = () => {
    setTimerActive(false);
  };

  const resetTimer = () => {
    setTimerActive(false);
    setPitchTimer(180);
    setPracticeMode(false);
  };

  return (
    <div
      id="s-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-7"] = el;
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
                <Mic className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Pitch, Fund, and Scale!
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              From idea to investment to impact — learn how great startups get noticed, funded, and grow fast
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
              What You Will Master
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Mic className="w-6 h-6" />, text: "The art of persuasive pitching", color: "bg-green-100 text-green-600" },
              { icon: <DollarSign className="w-6 h-6" />, text: "Smart fundraising strategies", color: "bg-emerald-100 text-emerald-600" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Scaling techniques for growth", color: "bg-teal-100 text-teal-600" }
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

        {/* The Art of Pitching */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🎤 The Art of the Pitch
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700">
                A pitch is not just a presentation — it's your <strong className="text-green-600">startup's first impression</strong>. 
                It combines storytelling, business logic, and emotional appeal.
              </p>
            </div>
          </div>

          {/* Pitch Structure */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              Structure of a Winning Pitch
            </h3>

            {/* Interactive Pitch Timer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Practice Mode</h4>
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className={`text-4xl font-bold ${pitchTimer <= 30 ? 'text-red-500' : 'text-green-600'}`}>
                  {formatTime(pitchTimer)}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={startTimer}
                    disabled={timerActive}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start</span>
                  </button>
                  <button
                    onClick={pauseTimer}
                    disabled={!timerActive}
                    className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                  </button>
                  <button
                    onClick={resetTimer}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              {practiceMode && (
                <p className="text-gray-600">
                  {pitchTimer > 150 ? "Start with your Hook!" : 
                   pitchTimer > 105 ? "Explain the Problem" :
                   pitchTimer > 45 ? "Present your Solution" :
                   pitchTimer > 15 ? "Show your Traction" :
                   "Make your Ask!"}
                </p>
              )}
            </div>

            <div className="grid gap-6">
              {pitchStructure.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-green-300 transform hover:scale-105 transition-all duration-300 ${
                    visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="text-center">
                      <div className={`bg-gradient-to-r ${step.color} text-white rounded-full p-4 mx-auto mb-3 w-fit`}>
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{step.step}</h3>
                      <p className="text-sm text-green-600 font-medium">{step.duration}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <p className="text-sm font-bold text-green-800 mb-2">Example:</p>
                      <p className="text-sm text-green-600 italic">"{step.example}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fundraising Options */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              💰 Smart Fundraising for Student Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not all funding requires a big VC check. Here are accessible funding routes for students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedFunding === index
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-green-300'
                }`}
                onClick={() => setSelectedFunding(selectedFunding === index ? null : index)}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{option.type}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <p className="text-sm font-bold text-green-800 mb-1">✓ Pros</p>
                    <p className="text-sm text-green-600">{option.pros}</p>
                  </div>
                  <div className="bg-red-100 rounded-lg p-3">
                    <p className="text-sm font-bold text-red-800 mb-1">✗ Cons</p>
                    <p className="text-sm text-red-600">{option.cons}</p>
                  </div>
                </div>

                {selectedFunding === index && (
                  <div className="animate-fade-in space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-bold text-blue-800 mb-2">💡 Example:</p>
                      <p className="text-sm text-blue-600">{option.example}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm font-bold text-purple-800 mb-2">🎯 Best For:</p>
                      <p className="text-sm text-purple-600">{option.bestFor}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scaling Strategies */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              📈 Scaling Strategies: From Local to Big Impact
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Once your MVP works, how do you grow? Scaling is the art of expanding 
                <strong className="text-green-600"> without losing quality</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scalingStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedScaling === index
                    ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50'
                    : 'border-gray-200 hover:border-green-300'
                } ${visibleCards.includes(index + 5) ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 5) * 200}ms` }}
                onClick={() => setSelectedScaling(selectedScaling === index ? null : index)}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{strategy.strategy}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-bold text-blue-800 mb-1">💡 Example:</p>
                    <p className="text-sm text-blue-600">{strategy.example}</p>
                  </div>
                  
                  {selectedScaling === index && (
                    <div className="animate-fade-in space-y-3">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="text-sm font-bold text-purple-800 mb-1">📋 Requirements:</p>
                        <p className="text-sm text-purple-600">{strategy.requirements}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm font-bold text-green-800 mb-1">⏱️ Timeline:</p>
                        <p className="text-sm text-green-600">{strategy.timeline}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Scoring Criteria */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🏆 How Great Pitches Are Judged
            </h2>
            <p className="text-xl text-gray-700">
              Whether it's Shark Tank or Y Combinator, here's what judges look for
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { category: "Clarity", description: "Was the idea clear and well-structured?", icon: <Target className="w-6 h-6" /> },
              { category: "Innovation", description: "Was the idea original or creatively adapted?", icon: <Lightbulb className="w-6 h-6" /> },
              { category: "Feasibility", description: "Can it realistically be built and launched?", icon: <CheckCircle className="w-6 h-6" /> },
              { category: "Traction", description: "Is there evidence of early progress?", icon: <TrendingUp className="w-6 h-6" /> },
              { category: "Delivery", description: "Was the speaker confident and engaging?", icon: <Mic className="w-6 h-6" /> }
            ].map((criteria, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 6) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 mx-auto mb-4 w-fit">
                  {criteria.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{criteria.category}</h4>
                <p className="text-sm text-gray-600">{criteria.description}</p>
                <div className="mt-3 flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-700">
                <strong className="text-green-600">Total Score:</strong> 25 points maximum<br/>
                <strong className="text-emerald-600">Bonus points for:</strong> Live demo, creative storytelling, great Q&A responses
              </p>
            </div>
          </div>
        </div>

        {/* Key Success Tips */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🎯 Your Path to Success
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                <Mic className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Master Your Pitch</h3>
              <p className="text-gray-600">
                Practice the 5-step structure until it becomes natural. Time yourself and get feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Smart Funding</h3>
              <p className="text-gray-600">
                Start with what you can access now. Bootstrap first, then explore grants and competitions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full p-4 mx-auto mb-4 w-fit">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scale Strategically</h3>
              <p className="text-gray-600">
                Use technology and partnerships to grow without losing quality or burning too much cash.
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

export default Module7PitchFundScale;