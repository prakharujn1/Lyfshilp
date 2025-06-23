import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Brain, 
  PenTool, 
  Palette, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Star,
  Play,
  Pause
} from 'lucide-react';

const Module7AIDigitalMarketing = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % aiFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const aiFeatures = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Writing",
      description: "ChatGPT helps write captions, blog posts, product descriptions instantly",
      example: "Write a funny caption for my exam meme - Done in 3 seconds!",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Assistance", 
      description: "AI tools suggest layouts, colors, and edit images automatically",
      example: "Canva AI suggests improvements, Remove.bg removes backgrounds",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience Targeting",
      description: "AI shows your ads to the right people and predicts engagement",
      example: "Meta AI finds users most likely to buy your products",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "AI tracks performance and recommends the best posting times",
      example: "Post at 6pm - your audience is most active then",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chatbots & Automation",
      description: "AI bots answer FAQs, handle orders, and suggest products 24/7",
      example: "Instant replies when you message a brand - that's AI!",
      color: "from-emerald-600 to-green-500"
    }
  ];

  const aiTools = [
    { name: "ChatGPT", purpose: "AI tool for writing, replying, generating ideas", icon: <Brain className="w-6 h-6" /> },
    { name: "Canva AI", purpose: "Smart design suggestions for your posts", icon: <Palette className="w-6 h-6" /> },
    { name: "Remove.bg", purpose: "Instantly removes photo backgrounds", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Analytics", purpose: "Data about what works and what doesn't", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  const responsibleUseTips = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Don't rely on AI for everything",
      description: "Use AI as a helper, not a replacement for your creativity"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Add your personality",
      description: "Include your own humor, voice, and unique style"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Support creativity",
      description: "Use AI to enhance your ideas, not replace them"
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-emerald-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Bot className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              AI in Digital Marketing
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Content Creation Revolution
              </p>
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Discover how AI makes marketing tasks faster, smarter, and easier
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is AI Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What Is AI? 🤖
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Artificial Intelligence (AI)</strong> is when machines 
                or software simulate human thinking—like writing, designing, analyzing data, or predicting trends.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">In Digital Marketing:</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  AI makes tasks <strong className="text-green-600">faster</strong>, 
                  <strong className="text-emerald-600"> smarter</strong>, and 
                  <strong className="text-teal-600"> easier</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">AI = Smart Helper</h3>
                <div className="space-y-4">
                  {[
                    { icon: <PenTool className="w-5 h-5" />, text: "Writes content instantly" },
                    { icon: <Palette className="w-5 h-5" />, text: "Designs beautiful graphics" },
                    { icon: <BarChart3 className="w-5 h-5" />, text: "Analyzes your performance" },
                    { icon: <Target className="w-5 h-5" />, text: "Finds your ideal audience" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <div className="text-green-600">{item.icon}</div>
                        <p className="text-gray-700 font-medium">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How AI Helps in Marketing - Interactive Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              How AI Helps in Marketing 🚀
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isAnimating ? 'Pause' : 'Play'} Auto Demo</span>
              </button>
            </div>
          </div>
          
          {/* Featured AI Feature (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Showcasing</div>
              <div className={`bg-gradient-to-r ${aiFeatures[currentFeature].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-6xl">
                    {aiFeatures[currentFeature].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-3">{aiFeatures[currentFeature].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{aiFeatures[currentFeature].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm"><strong>Example:</strong> {aiFeatures[currentFeature].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All AI Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentFeature === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentFeature(index)}
              >
                <div className={`bg-gradient-to-r ${feature.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Examples Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Real Examples You'll Use 📱
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content Writing Example */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Content Writing</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                  <p className="text-gray-600 text-sm mb-2">You ask ChatGPT:</p>
                  <p className="text-gray-800 font-medium">"Write a funny caption for my exam meme."</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-600 mx-auto" />
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-green-600 text-sm mb-2">ChatGPT responds in 3 seconds:</p>
                  <p className="text-gray-800 font-medium">"When you realize the exam is tomorrow but you're still on episode 47 of your series 😅 #StudentLife #LastMinutePanic"</p>
                </div>
              </div>
            </div>

            {/* Design Assistance Example */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Design Tools</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <div className="flex items-center space-x-3 mb-2">
                    <Palette className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-gray-800">Canva AI</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Automatically suggests design improvements and color combinations</p>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4 border-l-4 border-teal-400">
                  <div className="flex items-center space-x-3 mb-2">
                    <Sparkles className="w-5 h-5 text-teal-600" />
                    <h4 className="font-bold text-gray-800">Remove.bg</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Instantly removes photo backgrounds with one click</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Recap */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              AI Tools You Should Know 🛠️
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 text-white">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{tool.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Using AI Responsibly */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Using AI Responsibly ⚖️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI is a powerful tool, but remember to use it wisely
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {responsibleUseTips.map((tip, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 5) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 5) * 200}ms` }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                    {tip.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 text-center border-2 border-green-200">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Remember</h3>
            <p className="text-lg text-gray-700 font-medium">
              Use AI to <strong className="text-green-600">support your creativity</strong>, not replace it!
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaway
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                AI is transforming digital marketing by making tasks faster and smarter. 
                As a student content creator, you can use these tools to enhance your work 
                while keeping your unique personality and creativity at the center.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-bold text-gray-800 mb-2">Faster</h4>
                  <p className="text-gray-600 text-sm">Complete tasks in seconds, not hours</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🧠</div>
                  <h4 className="font-bold text-gray-800 mb-2">Smarter</h4>
                  <p className="text-gray-600 text-sm">AI analyzes data and gives insights</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">✨</div>
                  <h4 className="font-bold text-gray-800 mb-2">Easier</h4>
                  <p className="text-gray-600 text-sm">Simple tools with powerful results</p>
                </div>
              </div>
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

export default Module7AIDigitalMarketing;