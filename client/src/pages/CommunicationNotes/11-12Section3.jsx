import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Lightbulb, Target, Star, CheckCircle, ArrowRight, Zap, Heart, Brain, Trophy, Book } from 'lucide-react';

const Module3Persuasion = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTriad, setCurrentTriad] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedExample, setSelectedExample] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTriad((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const persuasionTriad = [
    {
      name: "Ethos",
      subtitle: "Credibility",
      description: "Build trust through your expertise and character",
      example: "I've worked hard on this idea and done my research.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-400"
    },
    {
      name: "Pathos",
      subtitle: "Emotion",
      description: "Connect with feelings and create emotional impact",
      example: "Imagine how many people this can help.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-400"
    },
    {
      name: "Logos",
      subtitle: "Logic",
      description: "Use facts, data, and logical reasoning",
      example: "Studies show that this method is 40% more effective.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-600 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-500"
    }
  ];

  const messageStructure = [
    {
      step: "Hook",
      description: "Start with a question, quote, or surprising fact",
      icon: <Zap className="w-6 h-6" />,
      example: "Did you know that over 50% of students skip breakfast?"
    },
    {
      step: "Message",
      description: "State your idea with clear reasons",
      icon: <MessageCircle className="w-6 h-6" />,
      example: "I'm proposing a 'Morning Bites' club with free breakfast bars."
    },
    {
      step: "Close",
      description: "Call to action or final strong point",
      icon: <Target className="w-6 h-6" />,
      example: "Let's take one small step for better mornings and bigger achievements!"
    }
  ];

  const campaignExample = [
    { text: "Did you know that over 50% of students skip breakfast?", type: "hook", highlight: "question" },
    { text: "This affects memory and focus.", type: "hook", highlight: "fact" },
    { text: "I'm proposing a 'Morning Bites' club with free breakfast bars.", type: "message", highlight: "solution" },
    { text: "Let's take one small step for better mornings and bigger achievements!", type: "close", highlight: "action" }
  ];

  return (
    <div
      id="s-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Mastering Persuasion & Influence
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Learn the art of ethical influence to win hearts, minds, and make your ideas unstoppable
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, text: "How to influence others ethically using logic, emotion, and credibility", color: "bg-green-100 text-green-600" },
              { icon: <MessageCircle className="w-6 h-6" />, text: "The structure of a powerful argument", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Lightbulb className="w-6 h-6" />, text: "How to make your ideas stick in someone's mind", color: "bg-green-100 text-green-700" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {objective.icon}
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
                <p className="font-semibold text-lg leading-relaxed">{objective.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Persuasion Matters */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Learn Persuasion?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Persuasion isn't just for politicians or advertisers. It's a <strong className="text-green-600">life skill</strong> that helps you succeed in everything you do.
              </p>
              
              <div className="space-y-4">
                {[
                  "Get approval for your creative ideas",
                  "Win competitions and debates",
                  "Convince your parents to let you take that trip",
                  "Lead your team to success",
                  "Make a positive impact in your community"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Persuasion in Action</h3>
                <div className="space-y-4">
                  {[
                    { emoji: "💡", text: "Share your brilliant ideas", color: "from-green-100 to-emerald-100" },
                    { emoji: "🏆", text: "Win people over to your cause", color: "from-emerald-100 to-green-100" },
                    { emoji: "🤝", text: "Build stronger relationships", color: "from-green-100 to-emerald-100" },
                    { emoji: "🌟", text: "Become a natural leader", color: "from-emerald-100 to-green-100" }
                  ].map((item, index) => (
                    <div key={index} className={`bg-gradient-to-r ${item.color} rounded-lg p-4 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300`}>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <p className="text-gray-700 font-medium">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aristotle's Triad */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Three Pillars of Persuasion
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                Over 2,000 years ago, the philosopher <strong className="text-green-600">Aristotle</strong> discovered the secret formula for persuasion
              </p>
              <p className="text-lg text-gray-600">
                These three pillars still work today! 🏛️
              </p>
            </div>
          </div>

          {/* Featured Triad (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${persuasionTriad[currentTriad].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {persuasionTriad[currentTriad].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-4xl font-bold mb-2">{persuasionTriad[currentTriad].name}</h3>
                    <p className="text-xl opacity-90 mb-3">{persuasionTriad[currentTriad].subtitle}</p>
                    <p className="text-lg opacity-80 mb-4">{persuasionTriad[currentTriad].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm">Example: <strong>"{persuasionTriad[currentTriad].example}"</strong></p>
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
                className={`bg-gradient-to-r ${element.bgColor} border-2 ${element.borderColor} rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTriad === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentTriad(index)}
              >
                <div className={`bg-gradient-to-r ${element.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  {element.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{element.name}</h3>
                <h4 className="text-lg font-semibold text-green-600 mb-4">{element.subtitle}</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">{element.description}</p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 italic">"{element.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Structure */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Structure of a Powerful Message
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Every great speech follows this <strong className="text-green-600">3-step formula</strong>
              </p>
            </div>
          </div>

          {/* Interactive Message Structure */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8">
              {messageStructure.map((step, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-500 ${
                    activeStep === index ? 'scale-110' : 'scale-100 opacity-70'
                  }`}
                >
                  <div className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                    activeStep === index ? 'animate-pulse' : ''
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.step}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 italic">"{step.example}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="flex justify-center items-center space-x-4">
                {messageStructure.map((_, index) => (
                  <React.Fragment key={index}>
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-green-500 scale-125' : 'bg-gray-300'
                    }`}></div>
                    {index < messageStructure.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Speech Example */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎤</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Real Campaign Speech Example
            </h2>
            <p className="text-lg text-gray-600 mt-4">See how the 3-step structure works in action</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-6">
              {campaignExample.map((line, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    line.type === 'hook' ? 'bg-yellow-50 border-yellow-400' :
                    line.type === 'message' ? 'bg-blue-50 border-blue-400' :
                    'bg-green-50 border-green-400'
                  }`}
                  onClick={() => setSelectedExample(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      line.type === 'hook' ? 'bg-yellow-200 text-yellow-800' :
                      line.type === 'message' ? 'bg-blue-200 text-blue-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {line.type === 'hook' ? 'HOOK' : line.type === 'message' ? 'MESSAGE' : 'CLOSE'}
                    </div>
                    <p className="text-lg text-gray-800 flex-1 leading-relaxed">"{line.text}"</p>
                  </div>
                  {selectedExample === index && (
                    <div className="mt-4 p-3 bg-white rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">
                        <strong>Why this works:</strong> This {line.highlight} {line.type === 'hook' ? 'grabs attention immediately' : line.type === 'message' ? 'presents a clear solution' : 'motivates people to act'}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">The Magic Formula</h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600 font-semibold">Hook</span> + 
                  <span className="text-blue-600 font-semibold"> Message</span> + 
                  <span className="text-green-600 font-semibold"> Close</span> = 
                  <span className="text-gray-800 font-bold"> Persuasive Power! 🚀</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Practice Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Practice Makes Perfect
            </h2>
            <p className="text-lg text-gray-600 mt-4">Try creating your own persuasive message using what you've learned</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800">Your Turn to Practice:</h3>
              <div className="space-y-4">
                {[
                  "Choose a topic you care about",
                  "Write a hook that grabs attention",
                  "Present your main message clearly",
                  "End with a strong call to action"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Topic Ideas to Get Started:</h3>
              <div className="space-y-3">
                {[
                  "Convince your school to start a recycling program",
                  "Persuade friends to join your study group",
                  "Get support for a school talent show",
                  "Advocate for healthier cafeteria food",
                  "Propose a new school club or activity"
                ].map((idea, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                    <p className="text-gray-700">💡 {idea}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Great persuasion combines <strong className="text-green-600">credibility</strong>, <strong className="text-emerald-600">emotion</strong>, and <strong className="text-green-700">logic</strong> in a clear, structured message.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Ethos</strong> + 
                <strong className="text-emerald-600"> Pathos</strong> + 
                <strong className="text-green-700"> Logos</strong> + 
                <strong className="text-gray-800"> Structure</strong> = 
                <strong className="text-green-600"> Unstoppable Influence! 🚀</strong>
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

export default Module3Persuasion;