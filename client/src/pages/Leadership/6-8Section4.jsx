import React, { useState, useEffect } from 'react';
import { Heart, Brain, Users, Target, Zap, Shield, Smile, MessageCircle, Star, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

const Module4EmotionalIntelligence = ({ topicRefs }) => {
  const [currentEQSkill, setCurrentEQSkill] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEQSkill((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const eqSkills = [
    {
      title: "Self-awareness",
      description: "Knowing how you feel",
      detail: "Understanding your emotions as they happen helps you make better decisions and react appropriately to situations.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      example: "Noticing when you feel frustrated during a difficult task"
    },
    {
      title: "Empathy", 
      description: "Understanding how others feel",
      detail: "The ability to put yourself in someone else's shoes and truly understand their emotions and perspectives.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      example: "Recognizing when a friend is sad even if they don't say anything"
    },
    {
      title: "Self-control",
      description: "Staying calm even when upset",
      detail: "Managing your emotions and reactions, especially in challenging or stressful situations.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      bgColor: "from-teal-50 to-green-50",
      example: "Taking deep breaths instead of getting angry when someone disagrees with you"
    },
    {
      title: "Motivation",
      description: "Trying even when things are hard",
      detail: "The inner drive to keep going and pursue your goals, even when facing obstacles or setbacks.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      example: "Continuing to practice a skill even after making mistakes"
    }
  ];

  const emotionalScenarios = [
    {
      id: 1,
      situation: "Your team member seems upset after receiving feedback",
      emotion: "Sadness/Disappointment",
      response: "Ask them privately if they want to talk about it and listen without judgment",
      skill: "Empathy"
    },
    {
      id: 2,
      situation: "You made a mistake in front of the whole class",
      emotion: "Embarrassment/Shame",
      response: "Acknowledge the mistake, learn from it, and move forward positively",
      skill: "Self-control"
    },
    {
      id: 3,
      situation: "A project isn't going as planned despite your efforts",
      emotion: "Frustration/Disappointment",
      response: "Stay motivated, ask for help, and try a different approach",
      skill: "Motivation"
    }
  ];

  return (
    <div
      id="4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Emotional Intelligence (EQ)
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master your emotions and connect with others like a true leader 
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
              { icon: <Brain className="w-6 h-6" />, text: "How to understand your own feelings", color: "bg-green-100 text-green-600" },
              { icon: <Heart className="w-6 h-6" />, text: "How to care about others' feelings", color: "bg-emerald-100 text-emerald-600" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in`}
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Understanding EQ
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Emotional Intelligence</strong> means knowing how you feel 
                and using those feelings to make smart decisions.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Why it matters for leaders:</h3>
                </div>
                <p className="text-gray-600">
                  Leaders with EQ don't get angry quickly and help others when they're sad or upset.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">EQ in Action</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-700 font-medium">Think before you react</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                      <p className="text-gray-700 font-medium">Understand others' perspectives</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse delay-1000"></div>
                      <p className="text-gray-700 font-medium">Stay motivated during challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQ Skills Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Four Key EQ Skills
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Master these skills to become an <strong className="text-green-600">emotionally intelligent</strong> leader
              </p>
            </div>
          </div>
          
          {/* Featured EQ Skill (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${eqSkills[currentEQSkill].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl">
                    {eqSkills[currentEQSkill].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{eqSkills[currentEQSkill].title}</h3>
                    <p className="text-xl opacity-90 mb-3">{eqSkills[currentEQSkill].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm mb-2"><strong>What it means:</strong></p>
                      <p className="text-sm">{eqSkills[currentEQSkill].detail}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 mt-3">
                      <p className="text-sm"><strong>Example:</strong> {eqSkills[currentEQSkill].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All EQ Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eqSkills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${skill.bgColor} border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in ${
                  currentEQSkill === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentEQSkill(index)}
              >
                <div className={`bg-gradient-to-r ${skill.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{skill.description}</p>
                <div className="text-xs text-gray-500 bg-white rounded-lg p-2">
                  {skill.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Scenarios Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              EQ in Real Situations
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              How would you handle these emotional challenges as a leader?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {emotionalScenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in ${
                  selectedScenario === scenario.id ? 'ring-4 ring-green-300' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {scenario.id}
                  </div>
                  <h3 className="font-bold text-gray-800">Scenario {scenario.id}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-700">Situation:</p>
                    <p className="text-sm text-gray-600">{scenario.situation}</p>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-yellow-700">Emotion Involved:</p>
                    <p className="text-sm text-yellow-600">{scenario.emotion}</p>
                  </div>
                  
                  {selectedScenario === scenario.id && (
                    <div className="bg-green-50 rounded-lg p-3 animate-fade-in">
                      <p className="text-sm font-medium text-green-700">EQ Response:</p>
                      <p className="text-sm text-green-600 mb-2">{scenario.response}</p>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-medium text-green-600">Uses: {scenario.skill}</span>
                      </div>
                    </div>
                  )}
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
              Reflect on Your EQ Journey
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Idea</h3>
              <p className="text-lg text-gray-700 mb-6">
                Think of a time you helped a friend feel better. That's emotional intelligence!
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-green-600" />
                    When did you show empathy?
                  </h4>
                  <textarea
                    placeholder="Describe a time when you understood how someone else was feeling..."
                    className="w-full p-3 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none resize-none h-20 text-sm"
                  />
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-emerald-600" />
                    When did you show self-control?
                  </h4>
                  <textarea
                    placeholder="Describe a time when you stayed calm in a difficult situation..."
                    className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:outline-none resize-none h-20 text-sm"
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4">
                  <p className="text-gray-700 font-medium">
                    💡 <strong>Remember:</strong> Every time you help someone feel better, you're using your emotional intelligence!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQ Benefits for Leaders */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">👑</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Why EQ Makes You a Better Leader
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Better Relationships",
                description: "People trust and respect leaders who understand emotions",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Clearer Communication",
                description: "You can adapt your message based on how others are feeling",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Better Decisions",
                description: "You consider both logic and emotions when making choices",
                color: "from-teal-500 to-green-600"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${benefit.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              The EQ Leader's Superpower
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Leaders with high emotional intelligence create teams where everyone feels understood, valued, and motivated to do their best.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Know Yourself</strong> + 
                <strong className="text-emerald-600"> Care for Others</strong> = 
                <strong className="text-teal-600"> Exceptional Leadership! </strong>
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

export default Module4EmotionalIntelligence;