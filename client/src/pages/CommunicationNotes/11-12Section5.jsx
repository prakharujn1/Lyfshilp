import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Lightbulb, Target, Crown, Brain, Heart, BarChart3, CheckCircle, ArrowRight, Quote, Sparkles, Megaphone } from 'lucide-react';

const Module5Persuasion = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTriad, setCurrentTriad] = useState(0);
  const [activeExample, setActiveExample] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTriad((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const persuasionTriad = [
    {
      name: "Ethos",
      subtitle: "Credibility",
      description: "Build trust through your expertise and character",
      example: "I've worked hard on this idea and done my research.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      lightColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-400"
    },
    {
      name: "Pathos", 
      subtitle: "Emotion",
      description: "Connect with feelings and values",
      example: "Imagine how many people this can help.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-600",
      lightColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-400"
    },
    {
      name: "Logos",
      subtitle: "Logic", 
      description: "Use facts, data, and reasoning",
      example: "Studies show that this method is 40% more effective.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-600 to-green-600",
      lightColor: "from-teal-50 to-green-50",
      borderColor: "border-teal-400"
    }
  ];

  const messageStructure = [
    {
      step: "Hook",
      description: "Start with a question, quote, or surprising fact",
      example: "Did you know that over 50% of students skip breakfast?",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "Message", 
      description: "State your idea with reasons",
      example: "This affects memory and focus. I'm proposing a 'Morning Bites' club with free breakfast bars.",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      step: "Close",
      description: "Call to action or final strong point", 
      example: "Let's take one small step for better mornings and bigger achievements!",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div
      id="s-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22white%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Megaphone className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Mastering Persuasion & Influence
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Learn the art of ethical influence to win hearts, minds, and achieve your goals
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
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Master
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                text: "How to influence others ethically using logic, emotion, and credibility", 
                color: "bg-green-100 text-green-700" 
              },
              { 
                icon: <Brain className="w-6 h-6" />, 
                text: "The structure of a powerful argument", 
                color: "bg-emerald-100 text-emerald-700" 
              },
              { 
                icon: <Sparkles className="w-6 h-6" />, 
                text: "How to make your ideas stick in someone's mind", 
                color: "bg-teal-100 text-teal-700" 
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="mt-1">{objective.icon}</div>
                  <p className="font-semibold text-lg leading-relaxed">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Persuasion Matters */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-full p-3">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Learn Persuasion?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Persuasion isn't just for politicians or advertisers. It's a life skill that helps you:
              </p>
              <div className="space-y-4">
                {[
                  "Get approval for your ideas",
                  "Win competitions and debates", 
                  "Convince your parents to let you take that trip",
                  "Build stronger relationships",
                  "Become a more effective leader"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">The Power of Influence</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 font-medium">Shape opinions</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <p className="text-gray-700 font-medium">Inspire action</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <p className="text-gray-700 font-medium">Create positive change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aristotle's Triad - Interactive */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Three Pillars of Persuasion
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                <strong className="text-green-700">Aristotle's Triad</strong> - The foundation of all persuasive communication
              </p>
              <p className="text-gray-600">Used by great leaders and speakers for over 2,000 years!</p>
            </div>
          </div>
          
          {/* Featured Triad Element (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${persuasionTriad[currentTriad].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-white">{persuasionTriad[currentTriad].icon}</div>
                  <div className="text-left">
                    <h3 className="text-4xl font-bold mb-2">{persuasionTriad[currentTriad].name}</h3>
                    <p className="text-xl opacity-90 mb-3">{persuasionTriad[currentTriad].subtitle}</p>
                    <p className="text-lg opacity-80 mb-4">{persuasionTriad[currentTriad].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <Quote className="w-5 h-5 mb-2" />
                      <p className="text-sm italic">"{persuasionTriad[currentTriad].example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Triad Elements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {persuasionTriad.map((element, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${element.lightColor} border-2 ${element.borderColor} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTriad === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentTriad(index)}
              >
                <div className={`bg-gradient-to-r ${element.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {element.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{element.name}</h3>
                <p className="text-gray-600 text-center mb-4">{element.subtitle}</p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-700 italic">"{element.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Structure */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Structure of a Persuasive Message
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Follow this <strong className="text-green-700">3-step formula</strong> for maximum impact
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {messageStructure.map((step, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 6) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.step}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-sm text-gray-700 italic">"{step.example}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Example */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🎤</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Complete Campaign Speech Example
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how all the elements come together in this winning student campaign speech
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Hook */}
              <div className="border-l-4 border-green-400 pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <h4 className="text-lg font-bold text-green-700">Hook</h4>
                </div>
                <p className="text-gray-800 text-lg italic">"Did you know that over 50% of students skip breakfast?"</p>
              </div>

              {/* Message */}
              <div className="border-l-4 border-emerald-400 pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <h4 className="text-lg font-bold text-emerald-700">Message</h4>
                </div>
                <p className="text-gray-800 text-lg italic">"This affects memory and focus. I'm proposing a 'Morning Bites' club with free breakfast bars."</p>
              </div>

              {/* Close */}
              <div className="border-l-4 border-teal-400 pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <h4 className="text-lg font-bold text-teal-700">Close</h4>
                </div>
                <p className="text-gray-800 text-lg italic">"Let's take one small step for better mornings and bigger achievements!"</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Why This Works:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Crown className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700"><strong>Ethos:</strong> Shows research</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700"><strong>Pathos:</strong> Appeals to student welfare</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700"><strong>Logos:</strong> Uses statistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Master This, Master Life
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto font-medium mb-8">
              Ethical persuasion is about creating win-win situations where everyone benefits from your ideas.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>Ethos + Pathos + Logos</strong> = Unstoppable Influence ✨
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

export default Module5Persuasion;