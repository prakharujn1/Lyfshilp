import React, { useState, useEffect } from 'react';

const Module3 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const entrepreneurSteps = [
    { step: "Spot Problems", icon: "🕵️", desc: "Observe school challenges", color: "bg-yellow-100 text-yellow-700" },
    { step: "Understand Needs", icon: "🧠", desc: "Talk to classmates", color: "bg-blue-100 text-blue-700" },
    { step: "Brainstorm Ideas", icon: "💡", desc: "Creative problem solving", color: "bg-green-100 text-green-700" },
    { step: "Test Product-Market Fit", icon: "🧪", desc: "Validate your solution", color: "bg-purple-100 text-purple-700" },
    { step: "Create Prototype", icon: "🛠️", desc: "Build and test", color: "bg-orange-100 text-orange-700" },
    { step: "Pitch Your Idea", icon: "🎤", desc: "Present confidently", color: "bg-red-100 text-red-700" },
    { step: "Get Feedback", icon: "🔍", desc: "Learn and improve", color: "bg-indigo-100 text-indigo-700" }
  ];

  const projectExamples = [
    { 
      idea: "Eco-Bottle Drive", 
      problem: "Too many plastic bottles in school", 
      outcome: "Started a bottle recycling system",
      icon: "♻️",
      color: "from-green-400 to-emerald-500"
    },
    { 
      idea: "Quiet Club", 
      problem: "No quiet place to read or relax", 
      outcome: "Created a \"Calm Corner\" in the library",
      icon: "📚",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      idea: "Healthy Tuck Shop", 
      problem: "Junk food in canteen", 
      outcome: "Ran a pop-up healthy snacks stall during lunch",
      icon: "🥗",
      color: "from-orange-400 to-amber-500"
    }
  ];

  const fitTestSteps = [
    { step: "Ask Around", action: "Talk to classmates: \"Would you use this?\"", tells: "Checks if your idea is interesting to others" },
    { step: "Show a Sample", action: "Share a drawing, model, or demo", tells: "See if they get excited or bored" },
    { step: "Collect Feedback", action: "Ask what they like, what's missing", tells: "Helps you improve your idea" },
    { step: "Compare Options", action: "\"Do you prefer my idea or another one?\"", tells: "Find out if your solution is truly better" },
    { step: "Check Repeat Interest", action: "Do people keep asking about it?", tells: "Shows if they really *want* it—not just being nice!" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % entrepreneurSteps.length);
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
      id="3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 animate-pulse">
              <span className="text-4xl">🏫</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Learning Entrepreneurship Through School Activities
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              What if we told you that you don't need a fancy office or a million dollars to be an entrepreneur? 
              You can start learning right at school! 💡✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* What is Entrepreneurship */}
        <div 
          data-card="definition"
          className={`mb-16 transform transition-all duration-1000 ${visibleCards.includes('definition') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
            <div className="text-center mb-10">
              <span className="text-6xl mb-6 block animate-bounce">🤔</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                But wait... What Is Entrepreneurship Again?
              </h2>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 max-w-3xl mx-auto">
                <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                  Entrepreneurship means <span className="text-purple-600 font-bold">finding a problem and solving it in a smart, creative way</span>. 
                  And guess what? That skill can be used in your school life too!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How Can You Learn */}
        <div 
          data-card="learning"
          className={`mb-16 transform transition-all duration-1000 delay-200 ${visibleCards.includes('learning') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">📚</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How Can You Learn Entrepreneurship in School?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Here's a breakdown of how each step in the entrepreneurial journey can turn into an exciting school-based activity:
              </p>
            </div>

            {/* Interactive Journey Steps */}
            <div className="relative max-w-5xl mx-auto">
              <div className="grid gap-6">
                {entrepreneurSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative transition-all duration-700 ${
                      currentStep === index ? 'scale-105 z-10' : 'scale-100'
                    }`}
                  >
                    <div className={`${step.color} rounded-2xl p-6 border-2 ${
                      currentStep === index ? 'border-indigo-400 shadow-xl' : 'border-transparent shadow-md'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-4xl mr-6">{step.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{step.step}</h3>
                            <p className="text-sm opacity-80">{step.desc}</p>
                          </div>
                        </div>
                        <div className="text-3xl font-bold opacity-60">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    {index < entrepreneurSteps.length - 1 && (
                      <div className="flex justify-center my-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <span className="text-2xl text-gray-400">⬇️</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product-Market Fit Section */}
        <div 
          data-card="product-fit"
          className={`mb-16 transform transition-all duration-1000 delay-400 ${visibleCards.includes('product-fit') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-green-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🎯</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What is Product-Market Fit?
              </h2>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Imagine you baked 100 cupcakes, but nobody liked them. That means your product (the cupcakes) didn't match what people wanted. 
                  But if everyone asks for more—bingo! You've found the sweet spot. That's called <strong className="text-green-600">Product-Market Fit</strong>.
                </p>
              </div>
            </div>

            {/* Breaking it Down */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">📦</span>
                <h3 className="font-bold text-blue-800 mb-2">Product</h3>
                <p className="text-sm text-gray-700">What you're offering (like a snack, app, or service)</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">👥</span>
                <h3 className="font-bold text-purple-800 mb-2">Market</h3>
                <p className="text-sm text-gray-700">The people who might use or buy it (your customers)</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">✨</span>
                <h3 className="font-bold text-green-800 mb-2">Fit</h3>
                <p className="text-sm text-gray-700">A perfect match! Your product solves a real need</p>
              </div>
            </div>

            {/* Testing Steps */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🧪 How to Test for Product-Market Fit in School
              </h3>
              <div className="space-y-4">
                {fitTestSteps.map((test, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div className="font-bold text-gray-800">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full text-sm mr-3">
                          {index + 1}
                        </span>
                        {test.step}
                      </div>
                      <div className="text-gray-700">{test.action}</div>
                      <div className="text-sm text-gray-600">{test.tells}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* School Project Examples */}
        <div 
          data-card="examples"
          className={`mb-16 transform transition-all duration-1000 delay-600 ${visibleCards.includes('examples') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border border-orange-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🚀</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                School-Based Entrepreneurship Projects
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Here are some cool ways students like you have used entrepreneurship in school:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projectExamples.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`h-20 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                    <span className="text-4xl">{project.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.idea}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-red-600">Problem:</span>
                        <p className="text-sm text-gray-700">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-green-600">Outcome:</span>
                        <p className="text-sm text-gray-700">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div 
          data-card="actions"
          className={`mb-16 transform transition-all duration-1000 delay-800 ${visibleCards.includes('actions') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-indigo-100">
            <div className="text-center mb-10">
              <span className="text-6xl mb-4 block">📝</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ready to Start Your Entrepreneurial Journey?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Here are some activities you can do right now to practice entrepreneurial thinking:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3">🕵️ Problem Spotting Activity</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Make a list of 3 everyday problems you notice in school.
                  </p>
                  <div className="text-xs text-gray-600 italic">
                    Examples: "The school canteen line is too long" or "There's no quiet space for reading."
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6">
                  <h3 className="font-bold text-green-800 mb-3">🧠 Research Activity</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Interview 2-3 people in school and write down what they said. Try to understand their "why."
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                  <h3 className="font-bold text-purple-800 mb-3">💡 Brainstorming Activity</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Pick one school problem and come up with at least 3 different ideas to solve it.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6">
                  <h3 className="font-bold text-orange-800 mb-3">🛠️ Prototype Activity</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Create a one-page plan of your idea: What it is, who it's for, how it helps, and how it works.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">🎤 Pitching Activity</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Prepare a 1-minute pitch about your idea and present it to your class or teacher.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl p-6">
                  <h3 className="font-bold text-indigo-800 mb-3">🔍 Reflection Activity</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Write down 2 things you learned from feedback and 1 improvement you'll make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          data-card="cta"
          className={`transform transition-all duration-1000 delay-1000 ${visibleCards.includes('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-3xl p-8 md:p-12 text-center">
            <span className="text-6xl mb-6 block">🌟</span>
            <h2 className="text-3xl font-bold mb-4">
              You're Now Ready to Think Like an Entrepreneur!
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Remember: Every big business started with someone noticing a problem and deciding to solve it. 
              Your school is the perfect place to practice these skills! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3;