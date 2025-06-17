import React, { useState, useEffect } from 'react';
import { Ear, Eye, MessageCircle, Heart, CheckCircle, Users, Target, Lightbulb, ArrowRight, Play, Pause, Volume2, UserCheck, AlertCircle, Star, Brain, Zap } from 'lucide-react';

const CommunicationSection2 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeSkill, setActiveSkill] = useState(0);
  const [listeningDemo, setListeningDemo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const listeningSkills = [
    {
      skill: "Maintaining Eye Contact",
      description: "Shows you're focused and engaged",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-blue-500",
      tip: "Look at the speaker's face, not your phone!"
    },
    {
      skill: "Not Interrupting",
      description: "Let them finish their thoughts completely",
      icon: <Pause className="w-6 h-6" />,
      color: "bg-green-500",
      tip: "Count to 3 before responding"
    },
    {
      skill: "Showing Interest",
      description: "Nod, say 'I see' or 'Go on' to encourage",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-pink-500",
      tip: "Your body language speaks volumes"
    },
    {
      skill: "Asking Follow-up Questions",
      description: "Dig deeper to understand better",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-purple-500",
      tip: "What happened next? How did that feel?"
    }
  ];

  const observationExamples = [
    {
      situation: "Someone says 'I'm fine'",
      bodylanguage: "Frowning, avoiding eye contact",
      reality: "They're probably NOT fine",
      emoji: "😔",
      color: "from-red-50 to-orange-50",
      borderColor: "border-red-400"
    },
    {
      situation: "Teacher praising a student",
      bodylanguage: "Warm tone vs sarcastic tone",  
      reality: "Tone completely changes the meaning",
      emoji: "🎭",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-400"
    }
  ];

  const activeListeningTips = [
    {
      tip: "Face the speaker",
      description: "Turn your body toward them - it shows respect",
      icon: <UserCheck className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      tip: "Don't plan your reply",
      description: "While they're talking, just listen - don't rehearse",
      icon: <Brain className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      tip: "Reflect & paraphrase",
      description: "Repeat back what you heard to confirm understanding",
      icon: <Volume2 className="w-6 h-6" />,
      color: "text-purple-500"
    }
  ];

  return (
    <div
      id="m-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-2"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6 space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Ear className="w-12 h-12 text-white" />
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Eye className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Active Listening & Observation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of truly hearing and seeing what others are communicating 👂👁️
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Opening Question */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-6xl mb-6">🤔</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Quick Reality Check:
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-400">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              When your friend is talking, are you <strong className="text-blue-600">really listening</strong>... 
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Or are you just waiting for your turn to speak? 🎤
            </p>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            There's a <strong className="text-indigo-600">huge difference</strong> between 
            <strong className="text-purple-600"> hearing</strong> and 
            <strong className="text-pink-600"> actively listening</strong> — and we're about to learn it!
          </p>
        </div>

        {/* What is Active Listening */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3">
                <Ear className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Active Listening?
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 mb-6">
                Active listening means you are <strong className="text-blue-600">fully focused</strong> on what the other person is saying — you're not just hearing the words, but understanding the 
                <strong className="text-indigo-600"> message, feelings, and intention</strong> behind it.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2" />
                  Why It Matters:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Avoids misunderstandings</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Builds trust with others</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">Makes people feel valued</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Listening Demo */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🎯 Listening vs Hearing
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-700 mb-2">Just Hearing 👂</h4>
                  <p className="text-sm text-gray-600">
                    "Uh-huh, yeah, sure..."<br/>
                    <span className="text-red-500">*scrolling phone*</span>
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-400">
                  <h4 className="font-bold text-green-700 mb-2">Active Listening 👁️</h4>
                  <p className="text-sm text-gray-600">
                    "Tell me more about that..."<br/>
                    <span className="text-green-500">*eye contact, nodding*</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-gray-700">
                  <strong>Result:</strong> The second approach makes people want to talk to you more!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills of Active Listening */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                <Target className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The 4 Skills of Active Listening
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these and watch your relationships transform! ✨
            </p>
          </div>

          {/* Interactive Skills Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listeningSkills.map((skill, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                } ${activeSkill === index ? 'ring-2 ring-purple-500' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setActiveSkill(index)}
              >
                <div className={`${skill.color} rounded-full p-3 w-fit mb-4 text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.skill}</h3>
                <p className="text-gray-600 mb-4 text-sm">{skill.description}</p>
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-3 border-l-4 border-yellow-400">
                  <p className="text-xs text-gray-700 font-medium">💡 {skill.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Examples */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎬</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Real-Life Examples
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Everyday Scenario</h3>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                <p className="text-gray-700 mb-3">
                  <strong>Situation:</strong> Your friend is venting about a bad day
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Active Listening Response:</strong><br/>
                  "That sounds tough. Want to talk more about it?" 💚
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Corporate Example</h3>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-gray-700 mb-3">
                  <strong>Situation:</strong> Client describes their needs in a meeting
                </p>
                <p className="text-red-600 font-medium">
                  <strong>If you're distracted:</strong> Company could lose the contract! 💸
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Observation Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4">
                <Eye className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Observation in Communication
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sometimes people say one thing but <strong className="text-orange-600">mean another</strong>. 
              Body language reveals the truth! 🕵️
            </p>
          </div>

          {/* Observation Examples */}
          <div className="grid md:grid-cols-2 gap-8">
            {observationExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${example.color} rounded-2xl p-8 border-l-4 ${example.borderColor}`}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{example.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-800">Example {index + 1}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1"><strong>What they say:</strong></p>
                    <p className="text-gray-800 font-medium">"{example.situation}"</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1"><strong>Body language:</strong></p>
                    <p className="text-gray-800 font-medium">{example.bodylanguage}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-600 mb-1"><strong>Reality check:</strong></p>
                    <p className="text-yellow-700 font-bold">{example.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Active Listening */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pro Tips for Active Listening
            </h2>
            <p className="text-xl text-gray-600">
              Follow these and become the person everyone loves talking to! ⭐
            </p>
          </div>

          <div className="grid gap-6">
            {activeListeningTips.map((tip, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${tip.color} bg-opacity-10 rounded-lg p-3`}>
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.tip}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                  <div className="bg-yellow-100 rounded-full p-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-purple-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🏆</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Remember This:
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 rounded-full p-2 mt-1">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                <strong className="text-purple-600">Active listening</strong> makes people feel heard and valued — it's a superpower! 🦸‍♀️
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 rounded-full p-2 mt-1">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                Watch body language — it often tells the <strong className="text-pink-600">real story</strong>.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 rounded-full p-2 mt-1">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <p className="text-lg text-gray-700">
                Practice these skills daily and watch your relationships <strong className="text-indigo-600">level up</strong>! ⬆️
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

export default CommunicationSection2;