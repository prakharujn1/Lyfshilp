import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Calendar, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Users, 
  MessageCircle, 
  Share2, 
  Heart, 
  Eye,
  Play,
  Camera,
  Briefcase,
  Image,
  MessageSquare,
  Hash,
  ArrowRight,
  CheckCircle,
  Clock,
  Repeat,
  Zap
} from 'lucide-react';

const Module4SocialMediaStrategy = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [currentTactic, setCurrentTactic] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTactic((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const platforms = [
    {
      name: "Instagram",
      icon: <Camera className="w-8 h-8" />,
      idealFor: "Visual content, short videos, stories",
      example: "Reels on study tips, product photos",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      name: "YouTube",
      icon: <Play className="w-8 h-8" />,
      idealFor: "Long-form video, tutorials, vlogs",
      example: "How I revised Physics in 7 Days",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      name: "LinkedIn",
      icon: <Briefcase className="w-8 h-8" />,
      idealFor: "Professional networking, thought leadership",
      example: "Sharing internship experiences",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    },
    {
      name: "Pinterest",
      icon: <Image className="w-8 h-8" />,
      idealFor: "Visual ideas, planning content",
      example: "Posting mood boards or DIY steps",
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      name: "Twitter/X",
      icon: <MessageSquare className="w-8 h-8" />,
      idealFor: "Short updates, opinions",
      example: "Posting trending study jokes or news",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    }
  ];

  const contentBuckets = [
    { day: "Tip Tuesdays", content: "Study tricks", icon: <Target className="w-6 h-6" /> },
    { day: "Reel Fridays", content: "Fun/relatable", icon: <Play className="w-6 h-6" /> },
    { day: "Sunday Quotes", content: "Motivation", icon: <Heart className="w-6 h-6" /> }
  ];

  const contentFramework = [
    {
      title: "Attract",
      description: "Reels, trends, memes to reach new people",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Engage", 
      description: "Polls, questions, stories to connect",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Convert",
      description: "Carousels, testimonials, DMs, or links to products",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-green-500"
    }
  ];

  const growthTactics = [
    {
      title: "Trending Audio",
      description: "Use trending audio in Reels",
      icon: <TrendingUp className="w-6 h-6" />,
      tip: "Check Instagram's audio trends weekly"
    },
    {
      title: "Clear Hashtags",
      description: "Add clear hashtags (#class12tips #exammotivation)",
      icon: <Hash className="w-6 h-6" />,
      tip: "Use 5-10 relevant hashtags per post"
    },
    {
      title: "Collaborate",
      description: "Collaborate with other student creators",
      icon: <Users className="w-6 h-6" />,
      tip: "Find creators in your niche"
    },
    {
      title: "Build Relationships",
      description: "Reply to comments and DMs",
      icon: <MessageCircle className="w-6 h-6" />,
      tip: "Respond within 24 hours"
    },
    {
      title: "Include CTAs",
      description: "Save this, Share with a friend, Follow for more",
      icon: <Share2 className="w-6 h-6" />,
      tip: "End each post with a clear action"
    }
  ];

  const trackingMetrics = [
    { metric: "Reach", description: "How many saw your content", icon: <Eye className="w-6 h-6" /> },
    { metric: "Engagement", description: "Likes, shares, comments", icon: <Heart className="w-6 h-6" /> },
    { metric: "Follower Growth", description: "New followers gained", icon: <TrendingUp className="w-6 h-6" /> },
    { metric: "Saves", description: "Means your content was valuable!", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div
      id="s-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-4"] = el;
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
                <Smartphone className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Social Media Strategy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master platforms, posting schedules, and growth tactics to build your online presence
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What Is Social Media Strategy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What Is a Social Media Strategy?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong className="text-green-600">social media strategy</strong> is a 
                <strong className="text-emerald-600"> step-by-step plan</strong> to help you grow
                your presence online, attract the right people, and achieve your goals.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Key Point:</h3>
                </div>
                <p className="text-gray-600">
                  You don't post <em className="text-red-500">randomly</em> — you post 
                  <strong className="text-green-600"> intentionally</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategy Goals</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Gaining followers</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Building trust</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Selling products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Selection */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Choosing the Right Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different platforms suit different types of content and goals
            </p>
          </div>
          
          {/* Featured Platform (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Featuring</div>
              <div className={`bg-gradient-to-r ${platforms[currentPlatform].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">{platforms[currentPlatform].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{platforms[currentPlatform].name}</h3>
                    <p className="text-xl opacity-90 mb-2">{platforms[currentPlatform].idealFor}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{platforms[currentPlatform].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${platform.bgColor} border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentPlatform === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentPlatform(index)}
              >
                <div className={`bg-gradient-to-r ${platform.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{platform.name}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{platform.idealFor}</p>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 font-medium">Example:</p>
                  <p className="text-sm text-gray-700">{platform.example}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Real Example */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-800">Real Example</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 text-center mb-6">
                A Class 12 student posts <strong className="text-green-600">career advice on LinkedIn</strong> and 
                <strong className="text-emerald-600"> quick study reels on Instagram</strong>.
              </p>
              <div className="text-center">
                <p className="text-gray-600 font-medium">
                  Different content, different platforms, but <strong className="text-green-600">same brand</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Posting Frequency */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                How Often Should You Post?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                There's no perfect number — but <strong className="text-green-600">consistency wins</strong>.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Sweet Spot:</h3>
                </div>
                <p className="text-gray-600 text-xl font-semibold">
                  <strong className="text-green-600">3-4 posts a week</strong> is great for starters
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Content Buckets</h3>
            <div className="space-y-4">
              {contentBuckets.map((bucket, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300 ${
                    visibleCards.includes(index + 5) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 5) * 200}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3">
                      {bucket.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{bucket.day}</h4>
                      <p className="text-gray-600">{bucket.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Strategy Framework */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Content Strategy Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use this simple <strong className="text-green-600">3-part plan</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contentFramework.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 7) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Tactics */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Growth Tactics
            </h2>
          </div>
          
          {/* Featured Tactic (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Growth Tip #{currentTactic + 1}</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">{growthTactics[currentTactic].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{growthTactics[currentTactic].title}</h3>
                    <p className="text-xl opacity-90 mb-2">{growthTactics[currentTactic].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">💡 <strong>{growthTactics[currentTactic].tip}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tactics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthTactics.map((tactic, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTactic === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentTactic(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {tactic.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{tactic.title}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{tactic.description}</p>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-green-600 font-medium">💡 {tactic.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking Growth */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tracking Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use <strong className="text-green-600">Insights</strong> or Analytics to monitor:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{metric.metric}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recap Table */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              📝 Quick Recap
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { concept: "Social Media Strategy", meaning: "Plan to grow your brand on digital platforms" },
                { concept: "Platform Choice", meaning: "Depends on your content type and goal" },
                { concept: "Posting Schedule", meaning: "Consistent and planned content" },
                { concept: "CTA", meaning: "Encourages viewers to act (follow, share, buy)" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.concept}</h3>
                  <p className="text-gray-600">{item.meaning}</p>
                </div>
              ))}
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

export default Module4SocialMediaStrategy;