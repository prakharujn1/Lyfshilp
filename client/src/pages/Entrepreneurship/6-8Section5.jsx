import React, { useState, useEffect } from 'react';

const Module5 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentGameDemo, setCurrentGameDemo] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);
  const [aiOpponentMove, setAiOpponentMove] = useState('thinking');
  const [storyChoice, setStoryChoice] = useState(null);

  const gameEnhancements = [
    { 
      icon: "🎯", 
      title: "Personalized Learning", 
      desc: "AI adapts the game to each player's skill level",
      color: "from-blue-500 to-cyan-500",
      example: "Math puzzles get harder as you improve!"
    },
    { 
      icon: "🤖", 
      title: "Smart Opponents", 
      desc: "AI creates challenging and realistic opponents",
      color: "from-purple-500 to-pink-500",
      example: "Chess AI that learns your playing style"
    },
    { 
      icon: "📚", 
      title: "Dynamic Storytelling", 
      desc: "AI changes the story based on player choices",
      color: "from-green-500 to-emerald-500",
      example: "Your decisions shape the adventure!"
    },
    { 
      icon: "💡", 
      title: "Instant Feedback", 
      desc: "AI provides tips and suggestions during gameplay",
      color: "from-orange-500 to-red-500",
      example: "Hints appear when you're stuck"
    }
  ];

  const educationalGames = [
    {
      icon: "🧮",
      title: "Math and Science Tutors",
      desc: "AI guides students through problems",
      color: "bg-gradient-to-br from-blue-100 to-indigo-100",
      features: ["Step-by-step solutions", "Practice problems", "Visual explanations"]
    },
    {
      icon: "🗣️",
      title: "Language Learning Games",
      desc: "AI helps with pronunciation and vocabulary",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      features: ["Speech recognition", "Interactive dialogues", "Cultural context"]
    },
    {
      icon: "💹",
      title: "Business Simulations",
      desc: "AI simulates market conditions and customer behavior",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
      features: ["Market trends", "Customer responses", "Economic scenarios"]
    }
  ];

  const buildingSteps = [
    { step: 1, title: "Define Learning Objectives", icon: "🎯", desc: "What should players learn?" },
    { step: 2, title: "Choose AI Technology", icon: "🔧", desc: "Pick the right AI tools" },
    { step: 3, title: "Design Engaging Gameplay", icon: "🎮", desc: "Make it fun and interactive" },
    { step: 4, title: "Test and Iterate", icon: "🔄", desc: "Improve based on feedback" }
  ];

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

  // Demo animations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGameDemo((prev) => (prev + 1) % gameEnhancements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const aiTimer = setInterval(() => {
      const moves = ['thinking', 'calculating', 'strategizing', 'ready!'];
      setAiOpponentMove(moves[Math.floor(Math.random() * moves.length)]);
    }, 2000);
    return () => clearInterval(aiTimer);
  }, []);

  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-6 animate-pulse">
              <span className="text-5xl">🕹️</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              AI in Games & Simulations
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Where learning meets fun! Discover how AI makes games smarter and more engaging 🎮✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* How AI Enhances Games */}
        <div 
          data-card="enhancements"
          className={`mb-16 transform transition-all duration-1000 ${visibleCards.includes('enhancements') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block animate-bounce">🚀</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How AI Enhances Games
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI doesn't just make games harder—it makes them smarter, more personal, and way more fun!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {gameEnhancements.map((enhancement, index) => (
              <div 
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                  currentGameDemo === index ? 'scale-105 z-10' : 'scale-100'
                }`}
                onClick={() => setCurrentGameDemo(index)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-purple-200">
                  <div className={`w-16 h-16 bg-gradient-to-r ${enhancement.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{enhancement.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{enhancement.title}</h3>
                  <p className="text-gray-600 mb-3">{enhancement.desc}</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-purple-600 font-medium">💡 {enhancement.example}</p>
                  </div>
                </div>
                {currentGameDemo === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✨</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Demo */}
          {/* <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">🎮 Try It Out!</h3>
              <p className="text-purple-600">Click the cards above to see different AI features in action</p>
            </div>

            {currentGameDemo === 0 && (
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold mb-4">🎯 Adaptive Difficulty Demo</h4>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span>Player Level:</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(level => (
                      <div 
                        key={level}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          level <= playerLevel ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                      >
                        {level}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setPlayerLevel(prev => prev < 5 ? prev + 1 : 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Level Up!
                  </button>
                </div>
                <p className="text-gray-600">AI adjusts puzzle complexity based on your skill level!</p>
              </div>
            )}

            {currentGameDemo === 1 && (
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold mb-4">🤖 Smart AI Opponent</h4>
                <div className="flex items-center justify-center space-x-8">
                  <div className="bg-blue-100 rounded-lg p-4">
                    <span className="text-2xl block mb-2">😊</span>
                    <p className="font-medium">You</p>
                  </div>
                  <div className="text-2xl">VS</div>
                  <div className="bg-purple-100 rounded-lg p-4">
                    <span className="text-2xl block mb-2">🤖</span>
                    <p className="font-medium">AI: {aiOpponentMove}</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">AI analyzes your moves and adapts its strategy!</p>
              </div>
            )}

            {currentGameDemo === 2 && (
              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 text-center">📚 Dynamic Story Choice</h4>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 italic">"You find a mysterious door in the castle. What do you do?"</p>
                </div>
                <div className="space-y-2">
                  {['Open it carefully', 'Knock first', 'Walk away'].map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => setStoryChoice(choice)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        storyChoice === choice 
                          ? 'bg-green-100 border-2 border-green-300' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {choice} {storyChoice === choice && '✅'}
                    </button>
                  ))}
                </div>
                {storyChoice && (
                  <div className="mt-4 bg-green-50 rounded-lg p-3">
                    <p className="text-green-700">🎭 AI generates a unique story path based on your choice!</p>
                  </div>
                )}
              </div>
            )}

            {currentGameDemo === 3 && (
              <div className="bg-white rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold mb-4">💡 Instant AI Feedback</h4>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🤔</span>
                    <div className="text-left">
                      <p className="font-medium text-yellow-800">AI Hint</p>
                      <p className="text-yellow-700">"Try looking at the pattern in the numbers. What comes next?"</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">AI provides just enough help to keep you learning!</p>
              </div>
            )}
          </div> */}
        </div>

        {/* AI-Powered Educational Games */}
        <div 
          data-card="educational-games"
          className={`mb-16 transform transition-all duration-1000 delay-200 ${visibleCards.includes('educational-games') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-indigo-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🎓</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                AI-Powered Educational Games
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learning disguised as fun! These AI games make studying feel like playing your favorite video game.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {educationalGames.map((game, index) => (
                <div 
                  key={index}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className={`${game.color} rounded-2xl p-8 h-full border-2 border-transparent group-hover:border-indigo-200`}>
                    <div className="text-center mb-6">
                      <span className="text-5xl mb-4 block group-hover:animate-bounce">{game.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                      <p className="text-gray-600 mb-4">{game.desc}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Key Features:</h4>
                      {game.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Building AI-Driven Games */}
        <div 
          data-card="building-games"
          className={`mb-16 transform transition-all duration-1000 delay-400 ${visibleCards.includes('building-games') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🛠️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Building AI-Driven Games
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to create your own AI-powered game? Follow these steps to build something amazing!
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 to-emerald-400 transform -translate-x-1/2"></div>
              
              <div className="space-y-8">
                {buildingSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                  >
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="bg-green-100 text-green-800 text-sm font-bold px-2 py-1 rounded-full">
                                Step {step.step}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                    
                    {/* Center dot for timeline */}
                    <div className="hidden lg:block absolute left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future of AI in Games */}
        <div 
          data-card="future"
          className={`mb-16 transform transition-all duration-1000 delay-600 ${visibleCards.includes('future') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white bg-opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10 text-center">
              <span className="text-6xl mb-6 block animate-pulse">🌟</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Future of AI in Games
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl leading-relaxed mb-8 opacity-90">
                  AI will continue to make games more <strong>immersive</strong>, <strong>personalized</strong>, 
                  and <strong>effective</strong> for learning. It opens up new possibilities for teaching 
                  complex concepts in fun and interactive ways.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: "🌍", title: "Virtual Worlds", desc: "AI creates endless, personalized learning environments" },
                    { icon: "🧠", title: "Mind Reading", desc: "AI understands how you learn best and adapts instantly" },
                    { icon: "🎭", title: "Emotional AI", desc: "Games that respond to your feelings and motivate you" }
                  ].map((future, index) => (
                    <div key={index} className="bg-white text-black bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                      <span className="text-4xl mb-3 block">{future.icon}</span>
                      <h3 className="text-lg font-bold mb-2">{future.title}</h3>
                      <p className="text-sm opacity-80">{future.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Module5;