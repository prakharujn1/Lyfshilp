import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Heart, Share2, TrendingUp, Target, Hash, UserCheck, Repeat, CheckCircle, HelpCircle, BarChart3, Zap, Globe, ArrowRight, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

const Module5Engagement = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentEngagementType, setCurrentEngagementType] = useState(0);
  const [isLoopAnimating, setIsLoopAnimating] = useState(true);
  const [currentCommunityTip, setCurrentCommunityTip] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEngagementType((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommunityTip((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const engagementTypes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Likes",
      description: "Quick appreciation",
      color: "from-green-400 to-emerald-400",
      example: "Double-tap to show love ❤️"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Comments",
      description: "Deeper conversation",
      color: "from-emerald-400 to-green-500",
      example: "Share your thoughts below 💭"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Shares",
      description: "Spreads your reach",
      color: "from-green-500 to-teal-500",
      example: "Share with friends who need this!"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Saves",
      description: "Content they value",
      color: "from-teal-500 to-green-600",
      example: "Save for later reference 📌"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Replies",
      description: "Direct conversations",
      color: "from-green-600 to-emerald-600",
      example: "Reply to build relationships 🤝"
    }
  ];

  const buildEngagementStrategies = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Ask Questions",
      description: "Create conversation starters",
      example: "What's your biggest distraction while studying?",
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      borderColor: "border-green-300"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Run Polls/Quizzes",
      description: "Perfect for Instagram stories",
      example: "Poll: Coffee ☕ or Tea 🍃 for late-night study?",
      bgColor: "bg-gradient-to-r from-emerald-50 to-green-50",
      borderColor: "border-emerald-300"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Use CTAs",
      description: "Call people to action",
      example: "Tag a friend who needs this motivation!",
      bgColor: "bg-gradient-to-r from-green-50 to-teal-50",
      borderColor: "border-green-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Reply to Everything",
      description: "Build personal connections",
      example: "Thanks for sharing! What worked best for you?",
      bgColor: "bg-gradient-to-r from-teal-50 to-emerald-50",
      borderColor: "border-teal-300"
    }
  ];

  const growthStrategies = [
    {
      icon: "🎭",
      title: "Be Authentic",
      description: "Show your real voice and story",
      tip: "Share behind-the-scenes moments"
    },
    {
      icon: "💎",
      title: "Provide Value",
      description: "Tips, motivation, hacks, entertainment",
      tip: "Every post should help or inspire"
    },
    {
      icon: "#️⃣",
      title: "Use Hashtags Wisely",
      description: "Mix niche and broad hashtags",
      tip: "Research trending tags in your field"
    },
    {
      icon: "📸",
      title: "Encourage UGC",
      description: "User-generated content builds community",
      tip: "Ask followers to share their results"
    },
    {
      icon: "📅",
      title: "Post Consistently",
      description: "Not perfectly, but regularly",
      tip: "Quality over perfection always wins"
    }
  ];

  const communityTips = [
    {
      icon: "📱",
      title: "Create Groups",
      description: "Telegram/WhatsApp communities",
      benefit: "Direct connection with your audience"
    },
    {
      icon: "🎥",
      title: "Host Live Sessions",
      description: "Q&A sessions and tutorials",
      benefit: "Real-time interaction builds trust"
    },
    {
      icon: "📢",
      title: "Shoutout Followers",
      description: "Feature customers and supporters",
      benefit: "Makes people feel valued and seen"
    }
  ];

  const toggleLoopAnimation = () => {
    setIsLoopAnimating(!isLoopAnimating);
  };

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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-900/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Engagement & Audience Building
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn how to build meaningful connections and grow your community organically
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-green-100 font-medium">
                📈 Organic Growth
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-green-100 font-medium">
                🤝 Community Building
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Engagement Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What Is Engagement?
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong className="text-green-600">Engagement</strong> means how your audience 
                  <strong className="text-emerald-600"> interacts</strong> with your content.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">It shows if people are just <em>watching</em> or actually <strong className="text-green-600">connecting</strong> with your brand.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Types of Engagement</h3>
                </div>
                
                {/* Featured Engagement Type */}
                <div className={`bg-gradient-to-r ${engagementTypes[currentEngagementType].color} text-white rounded-2xl p-6 mb-6 transform hover:scale-105 transition-all duration-500`}>
                  <div className="flex items-center space-x-4 mb-3">
                    {engagementTypes[currentEngagementType].icon}
                    <div>
                      <h4 className="text-2xl font-bold">{engagementTypes[currentEngagementType].title}</h4>
                      <p className="text-white/90">{engagementTypes[currentEngagementType].description}</p>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm font-medium">{engagementTypes[currentEngagementType].example}</p>
                  </div>
                </div>

                {/* All Engagement Types Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {engagementTypes.map((type, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        currentEngagementType === index 
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 ring-2 ring-green-300' 
                          : 'bg-gray-50 hover:bg-green-50'
                      }`}
                      onClick={() => setCurrentEngagementType(index)}
                    >
                      <div className="text-center">
                        <div className={`w-8 h-8 mx-auto mb-1 flex items-center justify-center rounded-full ${
                          currentEngagementType === index ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {React.cloneElement(type.icon, { className: 'w-4 h-4' })}
                        </div>
                        <p className={`text-xs font-medium ${
                          currentEngagementType === index ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {type.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Build Engagement */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How to Build Engagement?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four proven strategies to get your audience actively participating
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {buildEngagementStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`${strategy.bgColor} border-2 ${strategy.borderColor} rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 flex-shrink-0">
                    {strategy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{strategy.title}</h3>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                      <p className="text-sm text-gray-700 font-medium">
                        💡 Example: "{strategy.example}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growing Your Audience */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Growing Your Audience (Organically)
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a loyal following that truly connects with your content
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {growthStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{strategy.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="text-xs text-green-700 font-medium">{strategy.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Engagement Loop */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <Repeat className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                The Engagement Loop
              </h2>
              <button
                onClick={toggleLoopAnimation}
                className="ml-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isLoopAnimating ? <Pause className="w-5 h-5 text-green-600" /> : <Play className="w-5 h-5 text-green-600" />}
              </button>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Understanding how engagement creates a cycle of growth
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
              {[
                { text: "Good Content", icon: "✨", color: "from-green-400 to-emerald-400" },
                { text: "Gets Engagement", icon: "❤️", color: "from-emerald-400 to-green-500" },
                { text: "Algorithm Boost", icon: "🚀", color: "from-green-500 to-teal-500" },
                { text: "More Visibility", icon: "👀", color: "from-teal-500 to-green-600" },
                { text: "Faster Growth", icon: "📈", color: "from-green-600 to-emerald-600" }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div 
                    className={`bg-gradient-to-r ${step.color} text-white rounded-2xl p-6 text-center transform transition-all duration-500 ${
                      isLoopAnimating ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      animationDelay: isLoopAnimating ? `${index * 500}ms` : '0ms',
                      animationDuration: '2s'
                    }}
                  >
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <p className="font-bold text-sm md:text-base">{step.text}</p>
                  </div>
                  {index < 4 && (
                    <div className={`text-green-600 ${isLoopAnimating ? 'animate-bounce' : ''}`} style={{ animationDelay: `${index * 500 + 250}ms` }}>
                      <ArrowRight className="w-6 h-6 hidden md:block" />
                      <ChevronRight className="w-6 h-6 md:hidden rotate-90" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Loop back arrow */}
            <div className="flex justify-center mt-8">
              <div className={`text-green-600 ${isLoopAnimating ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
                <RotateCcw className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Community > Followers */}
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Community &gt; Followers
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🤔</div>
                    <p className="text-gray-600 line-through mb-2">"I want 10k followers"</p>
                    <ArrowRight className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-green-700 font-bold text-lg">
                      "How can I help 100 people who trust me?"
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Focus on building a <strong className="text-green-600">community</strong> of people who genuinely 
                  connect with your content rather than chasing vanity metrics.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Build Your Community</h3>
                </div>
                
                {/* Featured Community Tip */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-6 transform hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{communityTips[currentCommunityTip].icon}</div>
                    <h4 className="text-xl font-bold mb-2">{communityTips[currentCommunityTip].title}</h4>
                    <p className="text-white/90 mb-3">{communityTips[currentCommunityTip].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm font-medium">{communityTips[currentCommunityTip].benefit}</p>
                    </div>
                  </div>
                </div>

                {/* Community Building Options */}
                <div className="space-y-3">
                  {communityTips.map((tip, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        currentCommunityTip === index 
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 ring-2 ring-green-300' 
                          : 'bg-gray-50 hover:bg-green-50'
                      }`}
                      onClick={() => setCurrentCommunityTip(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{tip.icon}</div>
                        <div className="flex-1">
                          <p className={`font-semibold ${
                            currentCommunityTip === index ? 'text-green-700' : 'text-gray-700'
                          }`}>
                            {tip.title}
                          </p>
                          <p className={`text-sm ${
                            currentCommunityTip === index ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recap Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Quick Recap
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { term: "Engagement", meaning: "Actions your audience takes (likes, replies)", icon: "💬" },
              { term: "UGC", meaning: "Content created by your followers", icon: "📸" },
              { term: "CTA", meaning: "A prompt for viewers to act", icon: "📢" },
              { term: "Community", meaning: "A loyal group that supports and trusts you", icon: "🤝" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-green-700 mb-2">{item.term}</h3>
                <p className="text-sm text-gray-600">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <div className="text-5xl mb-6">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Remember This
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-medium mb-6 leading-relaxed">
              Engagement isn't about the numbers—it's about building real relationships with people who value what you share.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>Quality engagement</strong> + 
                <strong> Authentic community</strong> = 
                <strong> Sustainable growth! 🚀</strong>
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

export default Module5Engagement;