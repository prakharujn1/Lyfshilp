import React, { useState, useEffect } from 'react';
import { MessageCircle, Volume2, User, Mail, Eye, CheckCircle, ArrowRight, Send, Target, MessageSquare, VolumeX, EyeOff, AlertTriangle, Lightbulb } from 'lucide-react';

const CommunicationSection1 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [showCycle, setShowCycle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const communicationTypes = [
    {
      title: "Verbal Communication",
      description: "Speaking with words",
      examples: ["Conversations", "Phone calls", "Speeches"],
      icon: <Volume2 className="w-8 h-8" />,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Non-verbal Communication", 
      description: "Body language & gestures",
      examples: ["Facial expressions", "Body posture", "Hand gestures"],
      icon: <User className="w-8 h-8" />,
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Written Communication",
      description: "Text-based messages",
      examples: ["Letters", "Emails", "Text messages"],
      icon: <Mail className="w-8 h-8" />,
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Visual Communication",
      description: "Images & symbols",
      examples: ["Graphs", "Road signs", "Memes"],
      icon: <Eye className="w-8 h-8" />,
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  const communicationCycle = [
    { step: "Sender", description: "Person who starts the message", icon: <User className="w-6 h-6" />, color: "bg-pink-500" },
    { step: "Message", description: "The content being shared", icon: <MessageSquare className="w-6 h-6" />, color: "bg-indigo-500" },
    { step: "Medium", description: "Method used to send", icon: <Send className="w-6 h-6" />, color: "bg-green-500" },
    { step: "Receiver", description: "Person getting the message", icon: <Target className="w-6 h-6" />, color: "bg-blue-500" },
    { step: "Feedback", description: "Response from receiver", icon: <ArrowRight className="w-6 h-6" />, color: "bg-purple-500" }
  ];

  const barriers = [
    { barrier: "Noise or distractions", icon: <VolumeX className="w-6 h-6" />, color: "text-red-500" },
    { barrier: "Language differences", icon: <MessageCircle className="w-6 h-6" />, color: "text-orange-500" },
    { barrier: "Poor listening", icon: <EyeOff className="w-6 h-6" />, color: "text-yellow-500" },
    { barrier: "Emotions (anger, stress)", icon: <AlertTriangle className="w-6 h-6" />, color: "text-pink-500" }
  ];

  return (
    <div
      id="m-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-1"] = el;
        }
      }}
      className="mb-10"
    >
         <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              The Foundation of Communication
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of sharing ideas, thoughts, and emotions effectively! 🗣️✨
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* What is Communication */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl">
            <div className="text-6xl mb-6">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is Communication?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Communication is the <span className="text-blue-600 font-semibold">process of exchanging information, ideas, thoughts, and emotions</span>. 
              It happens all the time — whether we're talking to a friend, writing an email, giving a presentation, or even rolling our eyes in disagreement! 😅
            </p>
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400">
              <p className="text-lg text-gray-700 font-medium">
                💡 <strong>Remember:</strong> Communication is not just <em>what</em> you say, but <em>how</em> you say it, and <em>how</em> it's understood!
              </p>
            </div>
          </div>
        </div>

        {/* Types of Communication */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of Communication 📢
            </h2>
            <p className="text-xl text-gray-600">
              There are four main ways we communicate with each other
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transition: 'all 0.6s ease-out'
                }}
              >
                <div className={`bg-gradient-to-r ${type.gradient} rounded-full p-3 w-fit mb-4 text-white shadow-lg`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Example */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-yellow-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Quick Example</h3>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                Imagine you're texting a friend: <span className="bg-gray-100 px-3 py-1 rounded-lg font-mono">\"We need to talk.\"</span>
              </p>
              <p className="text-gray-600">😰 Without context, it sounds scary!</p>
            </div>
            
            <div className="text-center">
              <ArrowRight className="w-8 h-8 text-orange-500 mx-auto animate-bounce" />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-400">
              <p className="text-lg text-gray-700 mb-4">
                But if you add: <span className="bg-green-100 px-3 py-1 rounded-lg font-mono">\"Haha, nothing serious 😊\"</span>
              </p>
              <p className="text-green-600">😌 Now it feels lighter!</p>
            </div>
            
            <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4">
              <p className="text-lg font-semibold text-gray-800">
                See how <span className="text-purple-600">tone</span> changes the impact? ✨
              </p>
            </div>
          </div>
        </div>

        {/* Communication Cycle */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Communication Cycle 🔄
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every conversation follows this simple pattern
            </p>
            <button
              onClick={() => setShowCycle(!showCycle)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {showCycle ? 'Hide' : 'Show'} Communication Flow
            </button>
          </div>

          {showCycle && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {communicationCycle.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center  opacity-0 animate-fade-in" style={{ animationDelay: `${index * 300}ms` }}>
                      <div className={`${item.color} rounded-full p-4 mx-auto mb-3 text-white shadow-lg`}>
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.step}</h4>
                      <p className="text-sm text-gray-600 max-w-20">{item.description}</p>
                    </div>
                    {index < communicationCycle.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block animate-pulse" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Barriers to Communication */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-400">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Barriers to Communication
            </h2>
            <p className="text-lg text-gray-600">Things that can block or mess up your message</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barriers.map((barrier, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`${barrier.color} mb-3`}>
                  {barrier.icon}
                </div>
                <p className="text-gray-700 font-medium">{barrier.barrier}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Examples */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Real-Life Examples 🌟
            </h2>
            <p className="text-xl text-gray-600">
              See how poor communication causes problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-bold text-gray-800">Everyday Example</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-sm text-blue-600 font-medium mb-1">Scenario:</p>
                  <p className="text-gray-700">You tell your sibling:</p>
                  <p className="text-lg font-semibold text-gray-800 mt-2">\"Get it done\"</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-600 font-medium mb-1">Problem:</p>
                  <p className="text-gray-700">Without explaining what 'it' is</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-sm text-red-600 font-medium mb-1">Result:</p>
                  <p className="text-gray-700">They might do the wrong thing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-gray-800">Corporate Example</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <p className="text-sm text-blue-600 font-medium mb-1">Scenario:</p>
                  <p className="text-gray-700">Manager sends:</p>
                  <p className="text-lg font-semibold text-gray-800 mt-2">Unclear instructions</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-600 font-medium mb-1">Problem:</p>
                  <p className="text-gray-700">Team doesn't understand</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <p className="text-sm text-red-600 font-medium mb-1">Result:</p>
                  <p className="text-gray-700">Hours wasted on wrong task</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Why Communication Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-bold text-gray-800 mb-2">School Success</h4>
              <p className="text-sm text-gray-600">Better grades through clear questions and answers</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="font-bold text-gray-800 mb-2">Friendships</h4>
              <p className="text-sm text-gray-600">Stronger relationships with friends and family</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🧩</div>
              <h4 className="font-bold text-gray-800 mb-2">Problem Solving</h4>
              <p className="text-sm text-gray-600">Resolve conflicts and misunderstandings</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-gray-800 mb-2">Future Career</h4>
              <p className="text-sm text-gray-600">Become a leader in professional life</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md inline-block">
              <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-green-600">Effective communication</span> is your superpower for success! 💪✨
              </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
    </div>
   
  );
};

export default CommunicationSection1;