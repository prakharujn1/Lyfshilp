import React, { useState } from 'react';
import { TrendingUp, Target, Clock, DollarSign, Users, Zap, Heart, BarChart3, Play, CheckCircle, XCircle } from 'lucide-react';

const Module4 = ({ topicRefs }) => {
  const [activeTab, setActiveTab] = useState('organic');
  const [hoveredCard, setHoveredCard] = useState(null);

  const organicExamples = [
    { icon: "📱", text: "A viral Instagram reel", color: "bg-pink-100" },
    { icon: "📝", text: "A blog that ranks high on Google", color: "bg-blue-100" },
    { icon: "😂", text: "A funny tweet that gets retweeted", color: "bg-yellow-100" },
    { icon: "🎥", text: "A YouTube channel with loyal subscribers", color: "bg-purple-100" }
  ];

  const paidExamples = [
    { icon: "🔍", text: "Google search ads: 'Best Bluetooth headphones -- Buy now'", color: "bg-green-100" },
    { icon: "📸", text: "Instagram ads: 'Flat 30% Off on ChillWear. Shop Now!'", color: "bg-red-100" },
    { icon: "▶️", text: "YouTube ads before videos", color: "bg-orange-100" }
  ];

  const comparisonData = [
    { situation: "Launching a new product?", organic: "❌ Too slow", paid: "✅ Quick reach", winner: "paid" },
    { situation: "Building a loyal community?", organic: "✅ Trust takes time", paid: "❌ Temporary", winner: "organic" },
    { situation: "Promoting a seasonal sale?", organic: "❌ Limited time", paid: "✅ Perfect timing", winner: "paid" },
    { situation: "Becoming known for content?", organic: "✅ Authentic following", paid: "❌ Feels fake", winner: "organic" }
  ];

  return (
    <div
      id="m-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Module 3</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              Paid vs Organic Marketing
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              🚀 Discover the power of growing naturally vs. paying for instant reach!
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Story Introduction */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Let's Talk Like Marketers</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Let's say you've launched your own hoodie brand called <span className="font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">ChillWear</span>. 
                  You post a reel on Instagram showing your designs. 🎥
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-l-4 border-green-400">
                  <p>• It gets shared by your friends, and slowly, people start following your page.</p>
                  <p>• But then you decide to boost the reel by paying ₹200 to Instagram.</p>
                </div>
                <p className="text-xl font-semibold text-indigo-600">
                  That's the <span className="bg-indigo-100 px-2 py-1 rounded">difference between organic and paid marketing</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('organic')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'organic'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                🌱 Organic Marketing
              </button>
              <button
                onClick={() => setActiveTab('paid')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'paid'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                💰 Paid Marketing
              </button>
            </div>
          </div>

          {/* Organic Marketing Tab */}
          {activeTab === 'organic' && (
            <div className="space-y-8 animate-in slide-in-from-left duration-500">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">Organic Marketing - Grows Naturally</h3>
                </div>
                <p className="text-xl text-green-700 mb-8 leading-relaxed">
                  This is when people find your brand without you paying platforms to promote it.
                </p>

                {/* Examples Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {organicExamples.map((example, index) => (
                    <div
                      key={index}
                      className={`${example.color} p-6 rounded-2xl border-2 border-transparent hover:border-green-300 transition-all duration-300 hover:scale-105 cursor-pointer`}
                      onMouseEnter={() => setHoveredCard(`organic-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{example.icon}</span>
                        <p className="font-medium text-gray-800">{example.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                    <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Free
                      </li>
                      <li className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Builds trust
                      </li>
                      <li className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Good for long-term growth
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-200">
                    <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-4 h-4" />
                        Slow results
                      </li>
                      <li className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-4 h-4" />
                        Depends on algorithm
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Paid Marketing Tab */}
          {activeTab === 'paid' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-orange-800">Paid Marketing - Reach Faster by Paying</h3>
                </div>
                <p className="text-xl text-orange-700 mb-8 leading-relaxed">
                  This is when you pay platforms (like Instagram or Google) to show your content to more people.
                </p>

                {/* Examples Grid */}
                <div className="space-y-4 mb-8">
                  {paidExamples.map((example, index) => (
                    <div
                      key={index}
                      className={`${example.color} p-6 rounded-2xl border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:scale-105 cursor-pointer`}
                      onMouseEnter={() => setHoveredCard(`paid-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{example.icon}</span>
                        <p className="font-medium text-gray-800">{example.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                    <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Faster reach
                      </li>
                      <li className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Targeted (age, location, interests)
                      </li>
                      <li className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        Trackable results
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-red-200">
                    <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-4 h-4" />
                        Costs money
                      </li>
                      <li className="flex items-center gap-2 text-red-600">
                        <XCircle className="w-4 h-4" />
                        Stops when you stop paying
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Think Like a Brand Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-indigo-800">🧠 Think Like a Brand</h3>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div className="font-semibold text-gray-800 text-lg">
                        {item.situation}
                      </div>
                      <div className={`p-3 rounded-xl text-center ${
                        item.winner === 'organic' && item.organic.includes('✅') 
                          ? 'bg-green-100 border-2 border-green-300' 
                          : 'bg-gray-100'
                      }`}>
                        <span className="font-medium">{item.organic}</span>
                      </div>
                      <div className={`p-3 rounded-xl text-center ${
                        item.winner === 'paid' && item.paid.includes('✅') 
                          ? 'bg-green-100 border-2 border-green-300' 
                          : 'bg-gray-100'
                      }`}>
                        <span className="font-medium">{item.paid}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Says Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 border-l-4 border-yellow-400 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-800">💡 Teacher Says</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-start gap-3">
                <span className="text-xl">👉</span>
                Great brands <span className="font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">balance</span> both. 
                They use organic content to stay connected and paid ads to grow faster when needed.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-xl">👉</span>
                Google and social media offer <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">insights</span> like 
                clicks, views, and engagement so you know what's working.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-xl">👉</span>
                If you only rely on organic, it's like whispering in a crowded room. 
                Paid lets you <span className="font-bold text-green-600 bg-green-100 px-2 py-1 rounded">speak through a mic</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">🎯 Ready to Master Marketing?</h3>
              <p className="text-xl text-indigo-100 mb-6">
                Remember: The best marketing strategy combines both organic authenticity and paid precision!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">Organic = Trust Building</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">Paid = Quick Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4;