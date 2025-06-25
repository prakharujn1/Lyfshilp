import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Users, TrendingUp, Target, Zap, ArrowRight, Eye, MessageCircle, Search, Mail, UserCheck, DollarSign, Monitor, Wifi, BarChart3, Heart, CheckCircle } from 'lucide-react';

const Module1DigitalMarketing = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentExample, setCurrentExample] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const digitalMarketingTypes = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Building communities on Instagram, YouTube, LinkedIn",
      example: "Zomato's witty tweets that go viral",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization",
      description: "Ranking higher in Google search results",
      example: "Blog: 'Top 5 Exam Tips for CBSE Class 12'",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Personalized emails for updates and offers",
      example: "'Sale ends tonight! Get 30% off'",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Search Engine Marketing",
      description: "Paid ads at the top of Google results",
      example: "Tuition class ads when searching nearby",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Influencer Marketing",
      description: "Collaborating with influencers for promotion",
      example: "Skincare brand with 5K follower student",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affiliate Marketing",
      description: "Earning commission through special links",
      example: "Student promoting favorite pens via bio link",
      color: "from-teal-600 to-green-600"
    }
  ];

  const comparisonData = [
    { feature: "Medium", traditional: "TV, radio, newspaper", digital: "Social media, websites, apps" },
    { feature: "Cost", traditional: "High", digital: "Can be low or free" },
    { feature: "Targeting", traditional: "Mass audience", digital: "Specific audience (age, interest, location)" },
    { feature: "Tracking", traditional: "Difficult to measure", digital: "Easy to track clicks, views, conversions" },
    { feature: "Interaction", traditional: "One-way (ad to viewer)", digital: "Two-way (likes, comments, shares)" }
  ];

  const realWorldExamples = [
    {
      title: "Book Review Prodigy",
      description: "17-year-old creates reels reviewing fiction books",
      result: "Publishers start offering ARCs (Advance Review Copies)",
      icon: "📚"
    },
    {
      title: "Study Meme Master",
      description: "Class 12 student runs a study meme page",
      result: "Promotes exam prep apps and earns via affiliate links",
      icon: "😄"
    },
    {
      title: "Handmade Candle Business",
      description: "Student sells handmade candles on Instagram",
      result: "Posts photos, replies to DMs, takes UPI payments",
      icon: "🕯️"
    }
  ];

  return (
    <div
      id="s-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-1"] = el;
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
                <Globe className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Introduction to Digital Marketing
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the world of online promotion and learn how brands connect with audiences in the digital age
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Digital Marketing */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Digital Marketing?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Digital marketing is the <strong className="text-green-600">promotion of products, services, or ideas</strong> using 
                digital channels like the internet, mobile apps, websites, and social media.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Smartphone className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Think about it:</h3>
                </div>
                <p className="text-gray-600">
                  When was the last time you saw an ad while scrolling Instagram or watching YouTube? 
                  <strong className="text-green-600"> That's digital marketing in action!</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Digital Marketing Happens Online</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Where people spend their time</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">4-6 hours daily on phones</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Interactive and engaging</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional vs Digital Comparison */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Traditional vs Digital Marketing
              </h2>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <th className="text-left p-4 font-bold text-gray-800 rounded-tl-xl">Feature</th>
                  <th className="text-left p-4 font-bold text-gray-800">Traditional Marketing</th>
                  <th className="text-left p-4 font-bold text-gray-800 rounded-tr-xl">Digital Marketing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-green-50/50 transition-colors ${
                    visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}>
                    <td className="p-4 font-semibold text-green-600">{row.feature}</td>
                    <td className="p-4 text-gray-600">{row.traditional}</td>
                    <td className="p-4 text-gray-800 font-medium">{row.digital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Example Comparison</h3>
                <p className="text-gray-700">
                  <strong className="text-red-600">Traditional:</strong> A shoe brand puts up a billboard on a highway
                  <br />
                  <strong className="text-green-600">Digital:</strong> The same brand posts a Reel on Instagram showing someone unboxing new shoes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Digital Marketing is Popular */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Is Digital Marketing So Popular?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-12 h-12 text-green-600" />,
                title: "Mobile-First World",
                description: "People spend 4-6 hours daily on their phones",
                stat: "4-6 hours daily"
              },
              {
                icon: <Users className="w-12 h-12 text-emerald-600" />,
                title: "Where Audiences Are",
                description: "Brands want to be where the audience is: online",
                stat: "Online presence"
              },
              {
                icon: <DollarSign className="w-12 h-12 text-teal-600" />,
                title: "Budget-Friendly",
                description: "Even small businesses or students can market without big budgets",
                stat: "Low cost entry"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3">
                  <span className="text-green-700 font-semibold">{item.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Digital Marketing */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Main Types of Digital Marketing
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's explore the most important categories every digital marketer should know
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketingTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${type.color} rounded-2xl p-4 w-fit mb-6`}>
                  <div className="text-white">{type.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-400">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700">Example:</span>
                  </div>
                  <p className="text-sm text-gray-700">{type.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* B2B vs B2C Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              B2B vs B2C in Digital Marketing
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-500 text-white rounded-full p-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">B2C (Business to Consumer)</h3>
              </div>
              <p className="text-gray-700 mb-4">Targeted at everyday people</p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-700">Example:</span>
                </div>
                <p className="text-sm text-gray-700">Nykaa selling lipsticks on Instagram</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-l-4 border-emerald-400">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-emerald-500 text-white rounded-full p-3">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">B2B (Business to Business)</h3>
              </div>
              <p className="text-gray-700 mb-4">One business selling to another</p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-emerald-700">Example:</span>
                </div>
                <p className="text-sm text-gray-700">A software company promoting accounting tools to other businesses on LinkedIn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Teen Examples */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real-World Teen Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how students your age are already succeeding in digital marketing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {realWorldExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 400}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{example.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{example.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{example.description}</p>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">Result:</span>
                  </div>
                  <p className="text-sm text-gray-700">{example.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Terms Recap */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Key Terms Recap
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { term: "Digital Marketing", meaning: "Promoting products or content online" },
              { term: "SEO", meaning: "Making content rank high on search engines" },
              { term: "SMM", meaning: "Marketing via platforms like Instagram, YouTube" },
              { term: "Affiliate Marketing", meaning: "Earning commission for product referrals" },
              { term: "B2B vs B2C", meaning: "Marketing to businesses vs customers" }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 hover:shadow-lg transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg font-bold text-green-600 mb-2">{item.term}</h3>
                <p className="text-gray-700">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Self-Test Questions */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Quick Questions to Test Yourself
            </h2>
            <p className="text-xl text-gray-600">
              Challenge yourself with these questions to reinforce your learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "What is one major difference between traditional and digital marketing?",
              "Name 3 platforms used in Social Media Marketing.",
              "What does SEO stand for, and why is it useful?",
              "Can you name a brand that uses memes or humor in their digital strategy?",
              "If you started a page about 'board exam tips,' which two digital marketing types could you use?"
            ].map((question, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{question}</p>
                </div>
              </div>
            ))}
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

export default Module1DigitalMarketing;