import React, { useState, useEffect } from 'react';
import { Presentation, Mic, Users, TrendingUp, Target, DollarSign, MessageSquare, BookOpen, Lightbulb, ArrowRight, Play, Timer, Zap, BarChart3, RefreshCw, PenTool, Rocket } from 'lucide-react';

const Module8PitchingScale = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentPitchElement, setCurrentPitchElement] = useState(0);
  const [currentReflectionPrompt, setCurrentReflectionPrompt] = useState(0);
  const [currentScalingStrategy, setCurrentScalingStrategy] = useState(0);
  const [pitchTimer, setPitchTimer] = useState(120); // 2 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pitchInterval = setInterval(() => {
      setCurrentPitchElement((prev) => (prev + 1) % 7);
    }, 3500);
    return () => clearInterval(pitchInterval);
  }, []);

  useEffect(() => {
    const reflectionInterval = setInterval(() => {
      setCurrentReflectionPrompt((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(reflectionInterval);
  }, []);

  useEffect(() => {
    const scalingInterval = setInterval(() => {
      setCurrentScalingStrategy((prev) => (prev + 1) % 3);
    }, 3800);
    return () => clearInterval(scalingInterval);
  }, []);

  useEffect(() => {
    let interval;
    if (isTimerRunning && pitchTimer > 0) {
      interval = setInterval(() => {
        setPitchTimer((prev) => prev - 1);
      }, 1000);
    } else if (pitchTimer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, pitchTimer]);

  const pitchElements = [
    {
      title: "Problem & Market Opportunity",
      description: "Clearly define the problem your startup solves and how big or important that problem is",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-100 to-orange-100 border-orange-300",
      example: "60% of students struggle with time management during exams"
    },
    {
      title: "Your Solution + Unique Edge",
      description: "Describe your product and explain what makes it different or better than alternatives",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-100 to-green-100 border-green-300",
      example: "Our AI-powered study planner with gamification elements"
    },
    {
      title: "Target Market & Market Size",
      description: "Who are your customers? How many people potentially face the problem?",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-100 to-green-100 border-green-300",
      example: "2.5 million high school students in urban areas"
    },
    {
      title: "Business & Revenue Model",
      description: "Explain how your startup will make money. This shows sustainability",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-100 to-emerald-100 border-green-300",
      example: "Freemium model: Basic free, Premium ₹99/month"
    },
    {
      title: "Traction",
      description: "Share proof that people want your product",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-purple-100 to-green-100 border-green-300",
      example: "500+ student waitlist, 85% positive feedback from pilot"
    },
    {
      title: "Team",
      description: "Highlight the strengths of your team and what skills each person brings",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-100 to-green-100 border-green-300",
      example: "Tech lead (coding), Designer (UI/UX), Marketing (social media)"
    },
    {
      title: "Ask",
      description: "What do you want from your audience?",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-pink-100 to-green-100 border-green-300",
      example: "Seeking mentorship and feedback for beta testing"
    }
  ];

  const reflectionPrompts = [
    {
      question: "What surprised you the most during this project?",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-100 to-green-100"
    },
    {
      question: "What feedback helped you the most and why?",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-100 to-green-100"
    },
    {
      question: "Which part of your idea changed the most and how did you adapt?",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "from-purple-100 to-green-100"
    },
    {
      question: "What did you learn about working in a team?",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-100 to-green-100"
    },
    {
      question: "What would you do differently next time?",
      icon: <ArrowRight className="w-6 h-6" />,
      color: "from-pink-100 to-green-100"
    }
  ];

  const scalingStrategies = [
    {
      title: "Leverage Customer Feedback Loops",
      description: "Collect ongoing feedback using surveys, forms, and conversations to improve your product continuously",
      icon: <MessageSquare className="w-8 h-8" />,
      tools: ["Google Forms", "Typeform", "User interviews"],
      benefit: "Continuous improvement based on real user needs"
    },
    {
      title: "Test Pricing and New Markets",
      description: "Try different pricing strategies or launch in a new segment",
      icon: <BarChart3 className="w-8 h-8" />,
      tools: ["A/B testing", "Market research", "Pilot programs"],
      benefit: "Find optimal pricing and expand customer base"
    },
    {
      title: "Explore Automation or Outsourcing",
      description: "Use technology to save time and hire freelancers for specialized tasks",
      icon: <Zap className="w-8 h-8" />,
      tools: ["Chatbots", "AI tools", "Freelance platforms"],
      benefit: "Scale operations without increasing workload"
    }
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const resetTimer = () => {
    setPitchTimer(120);
    setIsTimerRunning(false);
  };

  return (
    <div
      id="m-8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-8"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-emerald-800 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Presentation className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Pitching, Reflection & Scale
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of pitching, reflect on your journey, and learn to scale your startup
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3 mr-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Presentation className="w-6 h-6" />, text: "Craft a powerful 2-minute pitch", color: "bg-green-100 text-green-600" },
              { icon: <BookOpen className="w-6 h-6" />, text: "Reflect on your entrepreneurship journey", color: "bg-emerald-100 text-emerald-600" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Understand scaling strategies for growth", color: "bg-teal-100 text-teal-600" }
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

        {/* Crafting a Powerful Pitch Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Crafting a Powerful Pitch
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Pitching is the skill of presenting your business idea <strong className="text-green-600">clearly</strong>, 
                <strong className="text-emerald-600"> concisely</strong>, and 
                <strong className="text-teal-600"> compellingly</strong> to an audience such as investors, teachers, mentors, or peers.
              </p>
            </div>
          </div>

          {/* Featured Pitch Element (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${pitchElements[currentPitchElement].color} rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 border-2`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white rounded-full p-3 mr-4 text-gray-700">
                    {pitchElements[currentPitchElement].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {pitchElements[currentPitchElement].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {pitchElements[currentPitchElement].description}
                </p>
                <div className="bg-white/80 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-800">Example:</strong> {pitchElements[currentPitchElement].example}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Pitch Elements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pitchElements.map((element, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${element.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${
                  currentPitchElement === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentPitchElement(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white rounded-full p-2 text-gray-700">
                    {element.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{element.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Timer Activity */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              2-Minute Pitch Challenge
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Practice your elevator pitch! Use the timer below and include all the key elements we've covered.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="text-6xl font-bold text-green-600 mb-4">
                {formatTime(pitchTimer)}
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={startTimer}
                  disabled={isTimerRunning}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Pitch</span>
                </button>
                <button
                  onClick={resetTimer}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Reflection Journal
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Reflection helps entrepreneurs learn from their experiences. Use these prompts to think about your journey and growth.
              </p>
            </div>
          </div>

          {/* Featured Reflection Prompt (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="text-lg text-gray-600 mb-4">Reflection Prompt</div>
              <div className={`bg-gradient-to-r ${reflectionPrompts[currentReflectionPrompt].color} rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500 border-2 border-green-300`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white rounded-full p-3 mr-4 text-gray-700">
                    {reflectionPrompts[currentReflectionPrompt].icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Question {currentReflectionPrompt + 1}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 font-medium">
                  {reflectionPrompts[currentReflectionPrompt].question}
                </p>
              </div>
            </div>
          </div>

          {/* All Reflection Prompts */}
          <div className="grid md:grid-cols-2 gap-6">
            {reflectionPrompts.map((prompt, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${prompt.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-green-200 ${
                  currentReflectionPrompt === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 10) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 10) * 150}ms` }}
                onClick={() => setCurrentReflectionPrompt(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2 text-gray-700">
                    {prompt.icon}
                  </div>
                  <p className="font-semibold text-gray-800">{prompt.question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scaling Strategies Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Scaling Strategies
              </h2>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Once you've validated your idea and pitched it successfully, think about how to grow and reach more people.
              </p>
            </div>
          </div>

          {/* Featured Scaling Strategy (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Growth Strategy Focus</div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 border-2 border-green-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4 text-white">
                    {scalingStrategies[currentScalingStrategy].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {scalingStrategies[currentScalingStrategy].title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {scalingStrategies[currentScalingStrategy].description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Tools:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {scalingStrategies[currentScalingStrategy].tools.map((tool, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Benefit:</h4>
                    <p className="text-sm text-gray-600">
                      {scalingStrategies[currentScalingStrategy].benefit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Scaling Strategies */}
          <div className="grid lg:grid-cols-3 gap-6">
            {scalingStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentScalingStrategy === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-50 to-emerald-50' : ''
                } ${
                  visibleCards.includes(index + 15) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 15) * 200}ms` }}
                onClick={() => setCurrentScalingStrategy(index)}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                    {strategy.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{strategy.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Conclusion */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              You're Now a Young Changemaker!
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6 leading-relaxed">
              By the end of this module, you have transformed your idea into a structured, validated business concept. 
              You've developed the skills to communicate and grow it effectively.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-4">
                <strong className="text-green-600">Pitching</strong> is not just about impressing others — it's about clearly expressing your vision and impact.
              </p>
              <p className="text-lg text-gray-600">
                <strong className="text-emerald-600">Reflection</strong> ensures you learn from the journey, while 
                <strong className="text-teal-600"> scaling</strong> teaches you how to move from a small idea to something that can reach and help many people.
              </p>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-bold">
                With these tools, you're ready to shape the future with purpose, innovation, and responsibility! 
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

export default Module8PitchingScale;