import React, { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    brand: "Stridez",
    category: "Sportswear Brand",
    icon: "👟",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    goal: "Launch a new sneaker targeted at teens and young adults",
    strategy: [
      "Shared Reels and Shorts featuring popular young athletes",
      "Created hashtag campaign: #FeelTheRush", 
      "Targeted users in the consideration stage of the funnel"
    ],
    results: [
      { metric: "18M+", label: "views in first week", icon: "👁️" },
      { metric: "3x", label: "increase in Google searches", icon: "🔍" },
      { metric: "27%", label: "sales increase (15-22 year olds)", icon: "📈" }
    ],
    keyTactic: "Influencer content",
    funnelStage: "Consideration",
    whatWorked: "High-energy influencer content + smart platform targeting"
  },
  {
    id: 2,
    brand: "Foodster",
    category: "Quirky Delivery App",
    icon: "🍕",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    goal: "Boost engagement and increase app installs",
    strategy: [
      "Shared relatable memes based on everyday cravings",
      "Added app download links in every post",
      "Focused on awareness and consideration stages"
    ],
    results: [
      { metric: "95k+", label: "followers in 30 days", icon: "👥" },
      { metric: "17%", label: "rise in app installs", icon: "📱" },
      { metric: "Minimal", label: "ad spend, maximum reach", icon: "💰" }
    ],
    keyTactic: "Meme marketing",
    funnelStage: "Awareness & Consideration",
    whatWorked: "Humor, trends, and rapid posting = viral success"
  },
  {
    id: 3,
    brand: "EyeKart",
    category: "Affordable Eyewear Brand",
    icon: "👓",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    goal: "Increase online bookings for eye tests and glasses",
    strategy: [
      "Ran Google Search Ads for 'free eye test near me'",
      "Used clean landing page with quick call-to-action buttons",
      "Targeted the decision and purchase stage"
    ],
    results: [
      { metric: "11%", label: "click-through rate (CTR)", icon: "🎯" },
      { metric: "30%", label: "drop in bounce rate", icon: "⬇️" },
      { metric: "2x", label: "monthly bookings doubled", icon: "📅" }
    ],
    keyTactic: "Search ads + CTAs",
    funnelStage: "Decision & Purchase",
    whatWorked: "Targeted search + clear user journey = more conversions"
  }
];

const learningPoints = [
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    description: "These brands didn't just guess — they used data, trends, and the funnel to guide their actions.",
    color: "text-purple-600"
  },
  {
    icon: "💡",
    title: "Strategy Over Spending",
    description: "The best campaigns aren't always the most expensive. They're the most strategic.",
    color: "text-blue-600"
  },
  {
    icon: "🎯",
    title: "Purpose-Driven Content",
    description: "Every post, ad, and caption had a purpose — and it worked!",
    color: "text-green-600"
  }
];

const Module6CaseStudies = ({ topicRefs }) => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      id="m-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-5"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="text-center mb-12 relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
              📘 Real Brand Strategies
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Let's peek behind the scenes at how brands you might recognize use smart strategies to win online
            </p>
            <div className="mt-6 inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <span className="text-lg">🕵️</span>
              <span className="font-medium">Case Studies from Popular Brands</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border-l-4 border-yellow-400">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              These examples tie together all the ideas we've learned so far. 
              <span className="font-semibold text-orange-600"> Get ready to see strategy in action!</span>
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:gap-12 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={caseStudy.id}
              className={`transform transition-all duration-500 hover:scale-[1.02] ${
                hoveredCard === index ? 'z-10' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`${caseStudy.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${caseStudy.borderColor}`}>
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className={`text-6xl mr-4 p-4 bg-white rounded-2xl shadow-md`}>
                      {caseStudy.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Case Study {index + 1}: {caseStudy.brand}
                      </h2>
                      <p className="text-lg text-gray-600 font-medium">{caseStudy.category}</p>
                    </div>
                  </div>
                  <div className="md:ml-auto">
                    <div className={`bg-gradient-to-r ${caseStudy.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}>
                      🎯 Goal Achieved!
                    </div>
                  </div>
                </div>

                {/* Goal */}
                <div className="mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <span className="text-2xl mr-2">🎯</span>
                      The Goal
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">{caseStudy.goal}</p>
                  </div>
                </div>

                {/* Strategy & Results Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Strategy */}
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-2xl mr-2">🧠</span>
                      Strategy Highlights
                    </h3>
                    <ul className="space-y-3">
                      {caseStudy.strategy.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-3 text-xl">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      Amazing Results
                    </h3>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{result.icon}</span>
                            <span className="text-gray-700">{result.label}</span>
                          </div>
                          <span className={`text-2xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                            {result.metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* What Worked */}
                <div className={`bg-gradient-to-r ${caseStudy.color} text-white rounded-2xl p-6 shadow-lg`}>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-2">🎯</span>
                    What Made It Work
                  </h3>
                  <p className="text-lg font-medium">{caseStudy.whatWorked}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            📋 Quick Strategy Summary
          </h2>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
              <h3 className="text-xl font-bold text-center">💬 What You Can Learn</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800">Brand</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800">Key Tactic</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800">Funnel Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudies.map((study, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{study.icon}</span>
                          <span className="font-semibold text-gray-800">{study.brand}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{study.keyTactic}</td>
                      <td className="px-6 py-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.funnelStage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            💡 Key Takeaways for You
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-center">{point.icon}</div>
                <h3 className={`text-xl font-bold mb-3 text-center ${point.color}`}>
                  {point.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 border-2 border-pink-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            🚀 Ready to Apply These Strategies?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Remember: Great marketing isn't about luck — it's about understanding your audience, 
            choosing the right tactics, and measuring what works!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-lg">📈 Track Your Results</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-lg">🎯 Know Your Audience</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-lg">✨ Be Strategic</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module6CaseStudies;