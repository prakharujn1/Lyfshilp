import React, { useState, useEffect } from 'react';

const Module7 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [entrepreneurSkills, setEntrepreneurSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const journeySteps = [
    {
      step: "Spot the Problem",
      icon: "🔍",
      description: "Look around you. Is there something people struggle with?",
      example: "Students can't find healthy snacks at school",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      step: "Understand Customers",
      icon: "👥", 
      description: "Before jumping to solutions, ask the right questions",
      example: "Interview friends and family about their needs",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      step: "Brainstorm Ideas",
      icon: "💡",
      description: "Come up with creative solutions using AI tools",
      example: "Use ChatGPT to help generate new ideas",
      color: "from-yellow-400 to-orange-500", 
      bgColor: "bg-yellow-50"
    },
    {
      step: "Find Product-Market Fit",
      icon: "🎯",
      description: "Do people actually want what you're offering?",
      example: "Test if your idea solves the problem better than existing solutions",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      step: "Create Prototype",
      icon: "🛠️",
      description: "Sketch, describe, or make a basic version",
      example: "Draw what your app might look like",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      step: "Use AI to Build",
      icon: "🤖",
      description: "Leverage AI tools to build smarter and faster",
      example: "Use AI for design, coding, or market research",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-50"
    }
  ];

  const futureSkills = [
    {
      skill: "Digital Literacy",
      icon: "💻",
      description: "Know how to use tech tools smartly",
      examples: ["Code with AI assistance", "Use design tools", "Understand data"],
      color: "bg-blue-100 hover:bg-blue-200"
    },
    {
      skill: "Critical Thinking", 
      icon: "🧠",
      description: "Think clearly, solve problems creatively",
      examples: ["Analyze market trends", "Question assumptions", "Find root causes"],
      color: "bg-green-100 hover:bg-green-200"
    },
    {
      skill: "Collaboration",
      icon: "🤝", 
      description: "Work in teams, share ideas, build together",
      examples: ["Lead diverse teams", "Communicate across cultures", "Build partnerships"],
      color: "bg-purple-100 hover:bg-purple-200"
    },
    {
      skill: "Ethical Awareness",
      icon: "⚖️",
      description: "Use AI responsibly, think about fairness and privacy", 
      examples: ["Consider AI bias", "Protect user privacy", "Build inclusive products"],
      color: "bg-orange-100 hover:bg-orange-200"
    }
  ];

  const aiStartupExamples = [
    {
      name: "EcoTrack",
      problem: "People don't know their carbon footprint",
      solution: "AI app that tracks daily activities and suggests eco-friendly alternatives",
      icon: "🌱",
      age: "17 years old",
      impact: "10K+ users reducing their carbon footprint"
    },
    {
      name: "StudyBuddy AI",
      problem: "Students struggle with personalized learning",
      solution: "AI tutor that adapts to individual learning styles",
      icon: "📚", 
      age: "16 years old",
      impact: "Improved test scores by 25% for users"
    },
    {
      name: "HealthMind",
      problem: "Teens need mental health support",
      solution: "AI chatbot providing 24/7 emotional support and resources",
      icon: "💚",
      age: "18 years old", 
      impact: "Helped 5K+ teens access mental health resources"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-card');
            setVisibleCards(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-card]').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["7"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 animate-bounce">
              <span className="text-4xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Turn Ideas into Reality!
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Your step-by-step guide to becoming an AI-powered entrepreneur! 💡🤖
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div 
          data-card="intro"
          className={`mb-16 transform transition-all duration-1000 ${visibleCards.includes('intro') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-200">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">👩‍🏫</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ready to Build Your Business?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Now that you know how to think like an entrepreneur and use AI tools, 
                let's bring everything together. This module is all about building your business idea — step by step — with the help of technology!
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Journey */}
        <div 
          data-card="journey"
          className={`mb-16 transform transition-all duration-1000 delay-200 ${visibleCards.includes('journey') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🚶‍♂️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Your Entrepreneur Journey
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Follow these steps to transform your ideas into real solutions that help people!
              </p>
            </div>

            {/* Interactive Journey Steps */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {journeySteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative transition-all duration-1000 mb-8 ${
                      currentStep === index ? 'scale-105 z-10' : 'scale-100'
                    }`}
                  >
                    <div className={`${step.bgColor} rounded-2xl p-6 border-2 ${
                      currentStep === index ? 'border-indigo-400 shadow-lg' : 'border-transparent'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1">
                          <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-6 text-white text-2xl font-bold`}>
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{index + 1}. {step.step}</h3>
                            <p className="text-gray-700 mb-2">{step.description}</p>
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <p className="text-sm text-gray-600 italic">💡 Example: {step.example}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="flex justify-center my-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <span className="text-2xl text-gray-400">⬇️</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {journeySteps.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentStep === index ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product-Market Fit Deep Dive */}
        <div 
          data-card="fit"
          className={`mb-16 transform transition-all duration-1000 delay-400 ${visibleCards.includes('fit') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🎯</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Understanding Product-Market Fit
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                This means: Do people actually want what you're offering? Even the coolest idea doesn't work if nobody needs it!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">👥</span>
                  <h3 className="text-xl font-bold text-green-700 mb-3">Will People Use It?</h3>
                  <p className="text-gray-700">Survey potential users, run small tests, and gather feedback before building the full product.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">⚡</span>
                  <h3 className="text-xl font-bold text-green-700 mb-3">Better Than Existing?</h3>
                  <p className="text-gray-700">Research competitors and find what makes your solution unique and more valuable.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">✅</span>
                  <h3 className="text-xl font-bold text-green-700 mb-3">Solves Real Problems?</h3>
                  <p className="text-gray-700">Make sure you're addressing a genuine pain point, not just a nice-to-have feature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Startup Examples */}
        <div 
          data-card="examples"
          className={`mb-16 transform transition-all duration-1000 delay-600 ${visibleCards.includes('examples') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🌟</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Young AI Entrepreneurs Making Impact
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Real examples of young people starting AI businesses to solve problems they care about!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {aiStartupExamples.map((startup, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <span className="text-5xl mb-4 block">{startup.icon}</span>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{startup.name}</h3>
                    <p className="text-sm text-blue-600 mb-4">Founded by {startup.age} entrepreneur</p>
                    
                    <div className="space-y-3 text-left">
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <p className="text-sm font-semibold text-red-700 mb-1">❌ Problem:</p>
                        <p className="text-sm text-gray-700">{startup.problem}</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border border-blue-100">
                        <p className="text-sm font-semibold text-green-700 mb-1">✅ AI Solution:</p>
                        <p className="text-sm text-gray-700">{startup.solution}</p>
                      </div>
                      
                      <div className="bg-blue-100 rounded-lg p-3">
                        <p className="text-sm font-semibold text-blue-800 mb-1">🎯 Impact:</p>
                        <p className="text-sm text-blue-700">{startup.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Skills */}
        <div 
          data-card="skills"
          className={`mb-16 transform transition-all duration-1000 delay-800 ${visibleCards.includes('skills') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🧠</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Must-Have Skills for Young Entrepreneurs
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The world is changing fast — and YOU are going to be part of shaping it!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureSkills.map((skill, index) => (
                <div 
                  key={index}
                  className={`${skill.color} rounded-2xl p-6 transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                  onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                >
                  <div className="text-center">
                    <span className="text-4xl mb-4 block">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.skill}</h3>
                    <p className="text-gray-700 mb-4">{skill.description}</p>
                    
                    {selectedSkill === index && (
                      <div className="bg-white rounded-lg p-4 mt-4 border border-gray-200 animate-fadeIn">
                        <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {skill.examples.map((example, i) => (
                            <li key={i} className="text-sm text-gray-600">• {example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <button className="text-sm text-gray-500 mt-2">
                      {selectedSkill === index ? 'Click to collapse' : 'Click to see examples'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future of Entrepreneurship */}
        <div 
          data-card="future"
          className={`mb-16 transform transition-all duration-1000 delay-1000 ${visibleCards.includes('future') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🌍</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Future of Entrepreneurship with AI
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Let's look ahead! The world is changing fast — and YOU are going to be part of shaping it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">More AI Startups</h3>
                <p className="text-gray-700">Young people are starting businesses using AI to solve real problems like health, education, and the environment.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🌎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Entrepreneurs Everywhere</h3>
                <p className="text-gray-700">You don't need a big office — just a great idea and the right tools to start making a difference.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Learning Through Play</h3>
                <p className="text-gray-700">Schools are using AI-powered learning tools that feel like games but teach serious entrepreneurial skills.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          data-card="action"
          className={`transform transition-all duration-1000 delay-1200 ${visibleCards.includes('action') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center">
              <span className="text-6xl mb-6 block animate-bounce">🎯</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Entrepreneurial Journey Starts Now!
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
                You now have all the tools and knowledge to start building something amazing. 
                Remember: every successful entrepreneur started with just an idea and the courage to begin.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">💡</span>
                  <p className=" text-black font-semibold">Start with problems you see</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">🤖</span>
                  <p className=" text-black font-semibold">Use AI as your co-pilot</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">👥</span>
                  <p className=" text-black font-semibold">Listen to your users</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">🌟</span>
                  <p className="text-black font-semibold">Build for good</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-lg font-semibold">
                  The future needs young entrepreneurs like you. Go make it happen! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module7;