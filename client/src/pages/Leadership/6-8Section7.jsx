import React, { useState, useEffect } from 'react';
import { Shield, Heart, Scale, Eye, CheckCircle, AlertTriangle, User, Users, Target, Star, Lightbulb, Award, BookOpen, Handshake } from 'lucide-react';

const Module7Ethics = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentExample, setCurrentExample] = useState(0);
  const [activeScenario, setActiveScenario] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [scenarioStep, setScenarioStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % ethicalExamples.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % ethicalScenarios.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ethicalExamples = [
    {
      title: "Returning a Lost Item",
      description: "Finding someone's wallet and giving it back",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      situation: "You find a wallet with money in the school hallway",
      rightChoice: "Take it to the teacher or office immediately",
      whyRight: "Shows honesty and helps the owner get their belongings back"
    },
    {
      title: "Saying No to Cheating",
      description: "Refusing to copy answers even when it's easy",
      icon: <Shield className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      situation: "Your friend offers to let you copy their homework",
      rightChoice: "Politely decline and do your own work",
      whyRight: "Builds your own knowledge and maintains academic integrity"
    },
    {
      title: "Telling the Truth",
      description: "Being honest even when it might get you in trouble",
      icon: <Scale className="w-6 h-6" />,
      color: "from-teal-500 to-green-600",
      situation: "You accidentally broke something at school",
      rightChoice: "Tell the teacher what happened and offer to help fix it",
      whyRight: "Takes responsibility and builds trust with others"
    },
    {
      title: "Standing Up Against Bullying",
      description: "Protecting others from unfair treatment",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      situation: "You see someone being bullied in the playground",
      rightChoice: "Step in to help or get a teacher immediately",
      whyRight: "Protects others and creates a safer environment for everyone"
    }
  ];

  const ethicalPrinciples = [
    {
      title: "Honesty",
      description: "Always tell the truth",
      icon: <Eye className="w-6 h-6" />,
      examples: ["Admitting mistakes", "Not lying to parents", "Being truthful in school"]
    },
    {
      title: "Fairness", 
      description: "Treat everyone equally",
      icon: <Scale className="w-6 h-6" />,
      examples: ["Sharing toys equally", "Not picking favorites", "Following the same rules"]
    },
    {
      title: "Respect",
      description: "Value others and their feelings",
      icon: <Heart className="w-6 h-6" />,
      examples: ["Listening to others", "Not interrupting", "Being kind to everyone"]
    },
    
  ];

  const ethicalScenarios = [
    {
      title: "The Cheating Dilemma",
      situation: "Your best friend is struggling with a test and asks you to let them copy your answers. They say they'll fail if you don't help them.",
      options: [
        "Let them copy to help them pass",
        "Refuse and offer to help them study instead",
        "Tell the teacher about the situation"
      ],
      correctAnswer: 1,
      explanation: "Helping them study teaches them the material and maintains integrity for both of you."
    },
    {
      title: "The Lost Money",
      situation: "You find $20 on the school ground during recess. No one is around, and you could really use the money for lunch this week.",
      options: [
        "Keep the money since no one saw you find it",
        "Take it to the teacher or school office",
        "Ask friends if they lost any money"
      ],
      correctAnswer: 1,
      explanation: "Taking it to the office gives the real owner the best chance to get their money back."
    },
    {
      title: "The Group Project",
      situation: "In a group project, one member isn't doing any work but wants their name on the final presentation. The group is frustrated.",
      options: [
        "Let them take credit to avoid conflict",
        "Talk to them privately about contributing",
        "Remove their name without telling them"
      ],
      correctAnswer: 1,
      explanation: "Honest communication gives them a chance to improve and keeps the team working fairly."
    }
  ];

  const integrityQualities = [
    {
      quality: "Consistency",
      description: "Acting the same way whether people are watching or not",
      icon: <Target className="w-5 h-5" />
    },
    {
      quality: "Courage",
      description: "Doing the right thing even when it's difficult",
      icon: <Award className="w-5 h-5" />
    },
    {
      quality: "Accountability",
      description: "Taking responsibility for your actions",
      icon: <User className="w-5 h-5" />
    },
    {
      quality: "Authenticity",
      description: "Being true to your values and beliefs",
      icon: <Star className="w-5 h-5" />
    }
  ];

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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ethics & Integrity
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to be honest, fair, and do the right thing always 
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, text: "How to be honest and fair", color: "bg-green-100 text-green-600" },
              { icon: <Shield className="w-6 h-6" />, text: "Why leaders must follow rules and do the right thing", color: "bg-emerald-100 text-emerald-600" }
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

        {/* Core Concepts */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What Are Ethics?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Ethics</strong> means knowing right from wrong. 
                <strong className="text-emerald-600"> Integrity</strong> means doing the right thing, 
                even when no one is watching.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Key Insight:</h3>
                </div>
                <p className="text-gray-600">
                  Good leaders never lie or cheat, and they treat everyone equally.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ethics in Action</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Always tell the truth</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Treat everyone fairly</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Stand up for what's right</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Ethical Examples */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Examples of Ethical Behavior
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                See how ethical leaders act in real situations
              </p>
            </div>
          </div>
          
          {/* Featured Example (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${ethicalExamples[currentExample].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-5xl">
                    {ethicalExamples[currentExample].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{ethicalExamples[currentExample].title}</h3>
                    <p className="text-xl opacity-90">{ethicalExamples[currentExample].description}</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 space-y-3">
                  <p className="text-sm"><strong>Situation:</strong> {ethicalExamples[currentExample].situation}</p>
                  <p className="text-sm"><strong>Right Choice:</strong> {ethicalExamples[currentExample].rightChoice}</p>
                  <p className="text-sm"><strong>Why It's Right:</strong> {ethicalExamples[currentExample].whyRight}</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Examples Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ethicalExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentExample === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
                onClick={() => setCurrentExample(index)}
              >
                <div className={`bg-gradient-to-r ${example.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {example.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{example.title}</h3>
                <p className="text-xs text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Principles */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Three Pillars of Ethics
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              The foundation of ethical leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 6) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 200}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{principle.description}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-700">Examples:</p>
                  {principle.examples.map((example, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2">
                      <p className="text-xs text-gray-600">• {example}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrity Qualities */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Does Integrity Look Like?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrity is more than just being honest - it's about being a person others can trust completely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrityQualities.map((quality, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-green-600">
                    {quality.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{quality.quality}</h3>
                </div>
                <p className="text-sm text-gray-600">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scenario Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Ethical Decision Making
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Think It Through</h3>
              <p className="text-lg text-gray-700 mb-6">
                Read the scenario below and think about what you would do as an ethical leader
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  {ethicalScenarios[activeScenario].title}
                </h4>
                <p className="text-gray-700 mb-4">
                  {ethicalScenarios[activeScenario].situation}
                </p>
                
                <div className="space-y-3">
                  <p className="font-medium text-gray-800">What would you do?</p>
                  {ethicalScenarios[activeScenario].options.map((option, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg p-3 border-2 cursor-pointer transition-all duration-300 ${
                        index === ethicalScenarios[activeScenario].correctAnswer 
                          ? 'border-green-400 bg-green-50' 
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <p className="text-gray-700">{option}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 bg-green-100 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>Best Choice:</strong> Option {String.fromCharCode(65 + ethicalScenarios[activeScenario].correctAnswer)}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    <strong>Why:</strong> {ethicalScenarios[activeScenario].explanation}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center space-x-2">
                  {ethicalScenarios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScenario(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeScenario === index ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Reflection Activity */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">✏️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Ethical Leadership Plan
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Write about a time you showed integrity or how you can be more ethical
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Think of a time when you had to make a tough ethical decision, or describe how you want to be an ethical leader in your school or community..."
              className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none resize-none h-32"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Remember: There's no wrong answer here. This is about your personal growth as a leader.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Ethical leaders are trusted because they always do the right thing, 
              even when it's difficult or when no one is watching.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Ethics</strong> + 
                <strong className="text-emerald-600"> Integrity</strong> + 
                <strong className="text-teal-600"> Courage</strong> = 
                <strong className="text-green-700"> Trusted Leadership! 🌟</strong>
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

export default Module7Ethics;