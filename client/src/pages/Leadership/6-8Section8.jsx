import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Target, Sparkles, Rocket, Cog, MessageCircle } from 'lucide-react';

const Module8ChangeInnovation = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userIdea, setUserIdea] = useState('');
  const [activeInnovation, setActiveInnovation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const changeSteps = [
    {
      step: 1,
      title: "Start with a good reason",
      description: "Explain why change is needed",
      icon: <Target className="w-6 h-6" />,
      example: "Our classroom is too noisy during group work",
      color: "from-green-400 to-emerald-400"
    },
    {
      step: 2,
      title: "Talk to your team",
      description: "Discuss the change with everyone",
      icon: <MessageCircle className="w-6 h-6" />,
      example: "Ask classmates what they think about the noise issue",
      color: "from-emerald-400 to-green-500"
    },
    {
      step: 3,
      title: "Make a plan",
      description: "Create clear steps to implement change",
      icon: <Cog className="w-6 h-6" />,
      example: "Set up quiet zones and hand signals for group work",
      color: "from-green-500 to-teal-500"
    },
    {
      step: 4,
      title: "Ask for feedback",
      description: "Listen to how others feel about the change",
      icon: <Users className="w-6 h-6" />,
      example: "Check if the new system is working for everyone",
      color: "from-teal-500 to-green-600"
    },
    {
      step: 5,
      title: "Make small changes first",
      description: "Start with easy adjustments before big ones",
      icon: <RefreshCw className="w-6 h-6" />,
      example: "Try the new system for one week first",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const innovationExamples = [
    {
      title: "Digital Learning",
      description: "Using tablets instead of textbooks",
      icon: "📱",
      benefit: "More interactive and up-to-date content"
    },
    {
      title: "Eco-Friendly School",
      description: "Solar panels and recycling programs",
      icon: "🌱",
      benefit: "Better for environment and lower costs"
    },
    {
      title: "Flexible Seating",
      description: "Bean bags and standing desks in classrooms",
      icon: "🪑",
      benefit: "Students are more comfortable and focused"
    },
    {
      title: "Peer Teaching",
      description: "Students teaching other students",
      icon: "👥",
      benefit: "Everyone learns better together"
    }
  ];

  return (
    <div
      id="8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["8"] = el;
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
                <Rocket className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Leading Change & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to bring new ideas and help others embrace positive changes 
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
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Lightbulb className="w-6 h-6" />, text: "How to bring new ideas", color: "bg-green-100 text-green-600" },
              { icon: <Users className="w-6 h-6" />, text: "How to help others accept changes", color: "bg-emerald-100 text-emerald-600" }
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

        {/* Main Explanation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Change Matters
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The world is always changing. Leaders must help others adapt and come up with 
                better ways of doing things. This is called <strong className="text-green-600">innovation</strong>.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Remember:</h3>
                </div>
                <p className="text-gray-600">
                  Change can be scary, but good leaders make it exciting and positive!
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Change + Innovation</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-medium">Brings new solutions</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <p className="text-gray-700 font-medium">Makes things better</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <p className="text-gray-700 font-medium">Helps everyone grow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Examples Carousel */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Innovation in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how innovation is changing schools and making learning better
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-4 gap-6">
              {innovationExamples.map((example, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 text-center transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    activeInnovation === index 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 scale-105' 
                      : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
                  }`}
                  onClick={() => setActiveInnovation(index)}
                >
                  <div className="text-4xl mb-4">{example.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{example.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{example.description}</p>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-xs text-green-600 font-medium">{example.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Lead Change Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How to Lead Change
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Follow these <strong className="text-green-600">5 steps</strong> to make positive changes
              </p>
            </div>
          </div>
          
          {/* Featured Step (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Step {changeSteps[currentStep].step} of 5</div>
              <div className={`bg-gradient-to-r ${changeSteps[currentStep].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {changeSteps[currentStep].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{changeSteps[currentStep].title}</h3>
                    <p className="text-lg opacity-90 mb-3">{changeSteps[currentStep].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{changeSteps[currentStep].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Steps Overview */}
          <div className="grid md:grid-cols-5 gap-4">
            {changeSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentStep === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentStep(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <div className="text-green-600">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

     

        {/* Interactive Activity Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Turn to Innovate!
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Idea</h3>
              <p className="text-lg text-gray-700 mb-6">
                Think of one thing in your school that can be improved. How would you change it?
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  🏫 What would you improve in your school?
                </label>
                <textarea
                  value={userIdea}
                  onChange={(e) => setUserIdea(e.target.value)}
                  placeholder="Describe something in your school that could be better and how you would change it..."
                  className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none resize-none h-32"
                />
              </div>
              
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">💭 Think about:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Why is this change needed?</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Who would it help?</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">How would you explain it to others?</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">What small steps would you take first?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Leadership is About Making Tomorrow Better
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Great leaders don't just manage what exists - they create what's needed for the future.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Innovation</strong> + 
                <strong className="text-emerald-600"> Positive Change</strong> = 
                <strong className="text-teal-600"> Better Future! ✨</strong>
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

export default Module8ChangeInnovation;