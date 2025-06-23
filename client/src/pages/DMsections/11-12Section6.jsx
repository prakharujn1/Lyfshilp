import React, { useState, useEffect } from 'react';
import { DollarSign, ShoppingBag, Users, Star, TrendingUp, Smartphone, CreditCard, Gift, Play, MessageCircle, Award, ArrowRight, Check, BookOpen, PenTool, Camera, Lightbulb } from 'lucide-react';

const Module6MonetizingContent = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentMonetization, setCurrentMonetization] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonetization((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const monetizationMethods = [
    {
      title: "Sell Digital Products",
      description: "E-books, planners, templates, notes, flashcards",
      example: "Design a PDF 'Exam Planner for CBSE Students' and sell it for ₹49",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      items: ["E-books", "Study Planners", "Templates", "Notes", "Flashcards"]
    },
    {
      title: "Affiliate Marketing",
      description: "Share product links → someone buys → you earn commission",
      example: "Post 'Best Study Lamp Under ₹500' and add affiliate link in bio",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      items: ["Product Reviews", "Comparison Posts", "Recommendation Lists", "Tutorial Content"]
    },
    {
      title: "Sponsored Posts",
      description: "Brands pay you to talk about their products",
      example: "A stationery brand asks you to review their pens in a Reel",
      icon: <Star className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      items: ["Product Reviews", "Brand Collaborations", "Sponsored Content", "Story Features"]
    },
    {
      title: "Content Services",
      description: "Offer your creative skills as services",
      example: "Video editing, Canva design, Caption writing - all in demand!",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-green-600 to-emerald-500",
      items: ["Video Editing", "Canva Design", "Caption Writing", "Social Media Management"]
    },
    {
      title: "Platform Monetization",
      description: "Earn directly from social media platforms",
      example: "YouTube ads, Instagram bonuses, super chats",
      icon: <Play className="w-8 h-8" />,
      color: "from-emerald-600 to-green-500",
      items: ["YouTube Ads", "Super Chats", "Instagram Bonuses", "Live Stream Tips"]
    }
  ];

  const platforms = [
    { name: "Gumroad", icon: <ShoppingBag className="w-6 h-6" />, desc: "Easy digital product sales" },
    { name: "Instamojo", icon: <CreditCard className="w-6 h-6" />, desc: "Indian payment gateway" },
    { name: "Notion", icon: <BookOpen className="w-6 h-6" />, desc: "Template marketplace" },
    { name: "Google Forms", icon: <MessageCircle className="w-6 h-6" />, desc: "Simple order collection" }
  ];

  const paymentMethods = [
    { name: "UPI", icon: <Smartphone className="w-6 h-6" />, popular: true },
    { name: "Paytm", icon: <CreditCard className="w-6 h-6" />, popular: true },
    { name: "Razorpay", icon: <DollarSign className="w-6 h-6" />, popular: false }
  ];

  const terms = [
    { term: "Digital Product", meaning: "A downloadable file or tool sold online", icon: <BookOpen className="w-6 h-6" /> },
    { term: "Affiliate Link", meaning: "A link that helps you earn money from referrals", icon: <TrendingUp className="w-6 h-6" /> },
    { term: "Sponsored Post", meaning: "Paid promotion from a brand", icon: <Star className="w-6 h-6" /> },
    { term: "Service Offering", meaning: "You use your skill to help someone else", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div
      id="s-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-6"] = el;
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
                <DollarSign className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Monetising Content & Digital Products
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn how students can turn their creativity into income through digital marketing
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Can Students Earn Online? */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Can Students Earn Online?
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Yes, Absolutely!</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Many students earn money through <strong className="text-green-600">digital marketing and content creation</strong>
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {["Products", "Services", "Collaborations", "Platforms"].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 ${
                      visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <p className="font-bold text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Main Ways to Monetise */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              5 Main Ways to Monetise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most effective methods students use to earn money online
            </p>
          </div>

          {/* Featured Method (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Featuring</div>
              <div className={`bg-gradient-to-r ${monetizationMethods[currentMonetization].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full p-4 inline-block mb-4">
                      {monetizationMethods[currentMonetization].icon}
                    </div>
                    <h3 className="text-2xl font-bold">{monetizationMethods[currentMonetization].title}</h3>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-xl opacity-90">{monetizationMethods[currentMonetization].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm font-medium">Example:</p>
                      <p className="text-lg">{monetizationMethods[currentMonetization].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Methods Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {monetizationMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  currentMonetization === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentMonetization(index)}
              >
                <div className={`bg-gradient-to-r ${method.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{method.title}</h3>
                <div className="space-y-2">
                  {method.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selling Without a Website */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Selling Without a Website
                </h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                You don't need a complex website to start earning! Use these simple platforms and payment methods to begin your journey.
              </p>
            </div>

            <div className="space-y-8">
              {/* Platforms */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <ShoppingBag className="w-6 h-6 text-green-600 mr-2" />
                  Platforms to Use
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                        selectedPlatform === index ? 'ring-2 ring-green-400' : ''
                      }`}
                      onClick={() => setSelectedPlatform(index)}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-green-500 text-white rounded-full p-2">
                          {platform.icon}
                        </div>
                        <p className="font-bold text-gray-800">{platform.name}</p>
                      </div>
                      <p className="text-sm text-gray-600">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-green-600 mr-2" />
                  Payment Methods
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-500 text-white rounded-full p-2">
                          {payment.icon}
                        </div>
                        <p className="font-medium text-gray-800">{payment.name}</p>
                      </div>
                      {payment.popular && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Recap */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Terms to Remember
            </h2>
            <p className="text-xl text-gray-600">
              Master these essential concepts for online monetization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {terms.map((term, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 flex-shrink-0">
                    {term.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{term.term}</h3>
                    <p className="text-gray-600 leading-relaxed">{term.meaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-8">
              The digital world is full of opportunities for creative students. Start small, stay consistent, and watch your efforts turn into income!
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-600">Create</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-emerald-600" />
                  <span className="font-bold text-emerald-600">Share</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-teal-600" />
                  <span className="font-bold text-teal-600">Earn</span>
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

export default Module6MonetizingContent;