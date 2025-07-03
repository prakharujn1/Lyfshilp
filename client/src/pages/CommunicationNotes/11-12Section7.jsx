import React, { useState, useEffect } from 'react';
import { Users, Crown, Heart, Lightbulb, MessageSquare, Target, CheckCircle, ArrowRight, Star, Sparkles, TrendingUp, Zap } from 'lucide-react';

const Module7LeadershipCommunication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTool, setCurrentTool] = useState(0);
  const [activeScenario, setActiveScenario] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const leadershipTools = [
    {
      title: "Vision Speech",
      description: "What you believe in, what you want to create",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      example: "I envision a school where every student feels confident to share their ideas and contribute to positive change."
    },
    {
      title: "Motivational Tone",
      description: "Use 'we' more than 'I'",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      example: "Together, we can make our school event the most memorable one yet. Let's work as a team!"
    },
    {
      title: "Clarity in Instruction",
      description: "Be direct but kind",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-600 to-emerald-500",
      example: "Could you please handle the decorations? I know you have great creative skills for this task."
    },
    {
      title: "Empathy",
      description: "Show you understand people's feelings",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-600 to-green-500",
      example: "I understand this is a busy time for everyone. Let's see how we can support each other."
    }
  ];

  const scenarios = [
    {
      situation: "Team members are not participating in group work",
      badResponse: "No one is helping me with this project!",
      goodResponse: "I know we're all stretched right now. If each person takes one task, we can finish this in an hour. Let's divide responsibilities and make this awesome.",
      lesson: "Turn complaints into collaborative solutions"
    },
    {
      situation: "Someone made a mistake in the team",
      badResponse: "You messed up everything! Now we have to start over.",
      goodResponse: "Let's figure out how to fix this together. Mistakes happen, and we can learn from this.",
      lesson: "Support team members instead of blaming them"
    },
    {
      situation: "Team is losing motivation",
      badResponse: "Why is everyone giving up? This is important!",
      goodResponse: "I can see we're all tired, but remember why we started this. We're almost there, and I believe in what we can achieve together.",
      lesson: "Reconnect the team with their purpose and show confidence"
    }
  ];

  return (
    <div
      id="s-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-7"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-bounce">
                <Crown className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
              Leadership Communication
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Master the art of leading with your words, inspiring teams, and bringing people together
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-green-200 font-medium">🎯 Lead with Purpose</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-green-200 font-medium">🤝 Build Unity</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-50 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 mr-4 shadow-lg">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Crown className="w-8 h-8" />, 
                title: "Lead with Your Words", 
                description: "Learn how communication shapes great leadership",
                color: "bg-green-100 text-green-700 border-green-200" 
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "Manage Team Dynamics", 
                description: "Bring people together and handle conflicts smoothly",
                color: "bg-emerald-100 text-emerald-700 border-emerald-200" 
              },
              { 
                icon: <Sparkles className="w-8 h-8" />, 
                title: "Inspire & Guide", 
                description: "Use communication to motivate and share your vision",
                color: "bg-green-100 text-green-700 border-green-200" 
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-8 border-2 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`transform transition-all duration-300 ${hoveredCard === index ? 'scale-110 rotate-6' : ''}`}>
                    {objective.icon}
                  </div>
                  <h3 className="font-bold text-xl">{objective.title}</h3>
                  <p className="font-medium opacity-90">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-8 border-green-500 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-green-200 text-6xl font-serif">"</div>
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-4xl mb-6">👑</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              The Power of Leadership Communication
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-8">
              Great leaders are not just great doers — they are great communicators. 
              They can motivate teams, handle conflicts, and share a vision people want to follow.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <p className="text-lg text-gray-600 font-semibold">
                  Communication + Leadership = Unstoppable Impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Communication Tools */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Leadership Communication Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these four essential tools to become an effective leader
            </p>
          </div>
          
          {/* Featured Tool (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="text-sm text-gray-500 mb-4 uppercase tracking-wide font-semibold">Featured Tool</div>
                <div className={`bg-gradient-to-r ${leadershipTools[currentTool].color} text-white rounded-3xl p-10 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 shadow-2xl`}>
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="bg-white/20 rounded-full p-4">
                        {leadershipTools[currentTool].icon}
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{leadershipTools[currentTool].title}</h3>
                      <p className="text-xl opacity-90 mb-6">{leadershipTools[currentTool].description}</p>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <p className="text-sm opacity-95">
                          <strong>Example:</strong> "{leadershipTools[currentTool].example}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  currentTool === index ? 'ring-4 ring-green-300 scale-105 shadow-xl' : ''
                } ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
                onClick={() => setCurrentTool(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-World Scenarios */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leadership in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how great leaders handle challenging situations
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            {/* Scenario Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {scenarios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScenario(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeScenario === index
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  Scenario {index + 1}
                </button>
              ))}
            </div>

            {/* Active Scenario */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-800">Situation</h3>
                </div>
                <p className="text-lg text-gray-700">{scenarios[activeScenario].situation}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Bad Response */}
                <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-400">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✗</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Poor Leadership Response</h4>
                  </div>
                  <p className="text-gray-700 italic">"{scenarios[activeScenario].badResponse}"</p>
                </div>

                {/* Good Response */}
                <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-400">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Great Leadership Response</h4>
                  </div>
                  <p className="text-gray-700 font-medium">"{scenarios[activeScenario].goodResponse}"</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                  <h4 className="text-xl font-bold text-gray-800">Key Leadership Lesson</h4>
                </div>
                <p className="text-lg text-gray-700 font-medium">{scenarios[activeScenario].lesson}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Event Example */}
        <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-8 border-emerald-500">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Perfect Example: Leading a Student Event
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">✗</span>
                    </span>
                    Poor Leadership
                  </h3>
                  <p className="text-gray-700 italic">"No one is helping me with this event!"</p>
                </div>

                <ArrowRight className="w-8 h-8 text-green-600 mx-auto animate-pulse" />

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    Great Leadership
                  </h3>
                  <p className="text-gray-700 font-medium">"I know we're all stretched right now. If each person takes one task, we can finish this in an hour. Let's divide responsibilities and make this awesome."</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Why This Works:</h3>
                {[
                  { icon: <Heart className="w-5 h-5" />, text: "Shows empathy for team members" },
                  { icon: <Users className="w-5 h-5" />, text: "Uses 'we' instead of 'I'" },
                  { icon: <Target className="w-5 h-5" />, text: "Provides clear, actionable solution" },
                  { icon: <Sparkles className="w-5 h-5" />, text: "Ends with motivation and vision" }
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <div className="text-green-600">{point.icon}</div>
                    <p className="text-gray-700 font-medium">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative text-center">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your Leadership Journey Starts Now
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Remember: Great leaders inspire through their words, unite through empathy, 
              and guide through clear communication.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Crown className="w-8 h-8" />, text: "Lead with Vision" },
                { icon: <Heart className="w-8 h-8" />, text: "Connect with Empathy" },
                { icon: <Users className="w-8 h-8" />, text: "Unite with 'We'" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-green-200 mb-3 flex justify-center">{item.icon}</div>
                  <p className="text-lg font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/30">
              <p className="text-xl font-bold">
                🚀 Your words have the power to change everything. Use them wisely.
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
  );
};

export default Module7LeadershipCommunication;