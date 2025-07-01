import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Eye, EyeOff, Volume2, VolumeX, Ear, CheckCircle, XCircle, ArrowRight, Star, Target, Lightbulb, Brain, Heart, Zap } from 'lucide-react';

const Module2Communication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const communicationTypes = [
    {
      title: "Verbal",
      description: "What you say",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      examples: ["Speaking clearly", "Choosing right words", "Tone of voice"]
    },
    {
      title: "Non-verbal",
      description: "Your gestures, tone, facial expressions",
      icon: <Eye className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      examples: ["Body language", "Facial expressions", "Hand gestures"]
    },
    {
      title: "Written",
      description: "Emails, messages, reports",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      examples: ["Clear writing", "Proper grammar", "Professional emails"]
    },
    {
      title: "Visual",
      description: "Graphs, presentations, infographics",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      examples: ["Charts & graphs", "Presentations", "Visual aids"]
    }
  ];

  const communicationStyles = [
    {
      title: "Assertive",
      description: "Honest, respectful, and clear (ideal)",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-green-100 border-green-300 text-green-700",
      status: "✅ Ideal Style"
    },
    {
      title: "Aggressive",
      description: "Forceful, hostile (often damaging)",
      icon: <XCircle className="w-6 h-6" />,
      color: "bg-red-50 border-red-200 text-red-600",
      status: "❌ Avoid This"
    },
    {
      title: "Passive",
      description: "Doesn't express needs or opinions (leads to frustration)",
      icon: <VolumeX className="w-6 h-6" />,
      color: "bg-gray-50 border-gray-200 text-gray-600",
      status: "⚠️ Not Effective"
    },
    {
      title: "Passive-Aggressive",
      description: "Sarcastic, unclear, avoids confrontation",
      icon: <EyeOff className="w-6 h-6" />,
      color: "bg-orange-50 border-orange-200 text-orange-600",
      status: "⚠️ Problematic"
    }
  ];

  const listeningSkills = [
    { skill: "Tone of voice", tip: "Calm, firm, respectful", icon: <Volume2 className="w-5 h-5" /> },
    { skill: "Eye contact", tip: "Builds trust", icon: <Eye className="w-5 h-5" /> },
    { skill: "Posture", tip: "Sit/stand straight, lean in slightly", icon: <Users className="w-5 h-5" /> },
    { skill: "Gestures", tip: "Use hands to emphasize, not distract", icon: <Star className="w-5 h-5" /> },
    { skill: "Active listening", tip: "Nodding, paraphrasing, asking follow-ups", icon: <Ear className="w-5 h-5" /> }
  ];

  const handleQuizAnswer = (questionId, answerId, isCorrect) => {
    setSelectedQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
    setShowFeedback(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
  };

  return (
    <div
      id="s-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-2"] = el;
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
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Communication Mastery
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of effective communication for life and leadership success
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Foundation Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Foundation of Effective Communication
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Communication is not just talking—it's about being understood
            </p>
          </div>

          {/* Key Insight Box */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Communication Matters More Than Talent
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Whether you're asking your teacher for a deadline extension or pitching an idea in a corporate internship, 
                <strong className="text-green-600"> how you express yourself makes all the difference</strong>.
              </p>
            </div>
          </div>

          {/* Types of Communication */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              Types of Communication
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communicationTypes.map((type, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-xl ${
                    visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`bg-gradient-to-r ${type.color} text-white rounded-xl p-4 mb-4 text-center`}>
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h4>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communication Styles Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Communication Styles
            </h2>
            <p className="text-lg text-gray-600">
              Understanding different styles helps you choose the most effective approach
            </p>
          </div>

          {/* Featured Style (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`${communicationStyles[currentStyle].color} border-2 rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {communicationStyles[currentStyle].icon}
                  <h3 className="text-2xl font-bold">{communicationStyles[currentStyle].title}</h3>
                </div>
                <p className="text-lg mb-4">{communicationStyles[currentStyle].description}</p>
                <div className="text-sm font-semibold">
                  {communicationStyles[currentStyle].status}
                </div>
              </div>
            </div>
          </div>

          {/* All Styles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationStyles.map((style, index) => (
              <div
                key={index}
                className={`${style.color} border-2 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentStyle === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
                onClick={() => setCurrentStyle(index)}
              >
                <div className="mb-4">
                  {style.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{style.title}</h4>
                <p className="text-sm mb-3">{style.description}</p>
                <div className="text-xs font-semibold">
                  {style.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Scenario */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Real-Life Scenario: Group Project
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Situation:</h3>
              <p className="text-gray-700 mb-6">
                You're part of a group project and don't like the current plan...
              </p>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                  <h4 className="font-bold text-red-700 mb-2">❌ Passive Response:</h4>
                  <p className="text-red-600">Stay silent, don't express your concerns</p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4">
                  <h4 className="font-bold text-orange-700 mb-2">⚠️ Passive-Aggressive Response:</h4>
                  <p className="text-orange-600">"Do whatever you want, I don't care" (sarcastic tone)</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
                  <h4 className="font-bold text-green-700 mb-2">✅ Assertive Response:</h4>
                  <p className="text-green-600">"I think we could improve our idea by doing XYZ. Can we discuss this?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Listening Skills */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3 mr-4">
                <Ear className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Verbal, Non-Verbal & Active Listening Skills
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Communication is 20% what you say, and 80% how you say it
            </p>
          </div>

          {/* Key Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listeningSkills.map((skill, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 8) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 8) * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-3 mb-4 w-fit">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{skill.skill}</h4>
                <p className="text-gray-600">{skill.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Example */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Interview Example
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
                <h4 className="font-bold text-red-700 mb-3">❌ Poor Communication:</h4>
                <p className="text-red-600 mb-2">
                  Saying "I'm really interested in this internship" while:
                </p>
                <ul className="text-red-600 space-y-1 ml-4">
                  <li>• Looking down</li>
                  <li>• Slouching</li>
                  <li>• Speaking quietly</li>
                </ul>
              </div>
              
              <ArrowRight className="w-8 h-8 text-green-600 mx-auto animate-pulse" />
              
              <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6">
                <h4 className="font-bold text-green-700 mb-3">✅ Excellent Communication:</h4>
                <p className="text-green-600 mb-2">
                  Saying "I'm really interested in this internship" while:
                </p>
                <ul className="text-green-600 space-y-1 ml-4">
                  <li>• Making eye contact</li>
                  <li>• Sitting straight</li>
                  <li>• Speaking clearly and confidently</li>
                  <li>• Smiling appropriately</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Listening Example */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">👂</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Active Listening in Action
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Scenario:</h3>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Friend:</strong> "I'm really stressed about my exam."
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <h4 className="font-bold text-red-700 mb-2">❌ Poor Response:</h4>
                <p className="text-red-600">"Same. I hate studying."</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
                <h4 className="font-bold text-green-700 mb-2">✅ Good Response:</h4>
                <p className="text-green-600">"Yeah, I get that. Is it a particular subject or just everything piling up?"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Master Communication for Success
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Effective communication opens doors to better relationships, academic success, and career opportunities.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Clear Expression</strong> + 
                <strong className="text-emerald-600"> Active Listening</strong> + 
                <strong className="text-teal-600"> Right Style</strong> = 
                <strong className="text-green-700"> Communication Mastery! 🚀</strong>
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

export default Module2Communication;