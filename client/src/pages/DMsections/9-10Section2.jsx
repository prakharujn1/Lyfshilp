import React, { useState } from "react";

const contentTypes = [
  {
    format: "Meme",
    platform: "Social Media",
    purpose: "Grabs attention (TOFU)",
    icon: "😂",
    color: "from-pink-400 to-red-400",
    description: "Funny, relatable content that makes people laugh and share",
    example: "A relatable post from Swiggy about late-night cravings that gets thousands of shares"
  },
  {
    format: "Blog",
    platform: "Website",
    purpose: "Explains details (MOFU)",
    icon: "📝",
    color: "from-blue-400 to-indigo-400",
    description: "In-depth articles that educate and inform your audience",
    example: "A detailed guide on 'How to Choose the Perfect Gaming Setup' on a tech blog"
  },
  {
    format: "Video",
    platform: "YouTube/Instagram",
    purpose: "Builds trust, shows use (MOFU/BOFU)",
    icon: "🎥",
    color: "from-purple-400 to-pink-400",
    description: "Visual content that demonstrates products and builds credibility",
    example: "A YouTube video comparing two gaming phones with real-world tests"
  },
  {
    format: "Testimonial",
    platform: "Website/Ad",
    purpose: "Builds trust to convert (BOFU)",
    icon: "⭐",
    color: "from-green-400 to-emerald-400",
    description: "Real customer reviews and success stories",
    example: "Customer reviews showing before/after results or satisfaction ratings"
  },
  {
    format: "Infographic",
    platform: "Instagram/PDF",
    purpose: "Simplifies data (TOFU/MOFU)",
    icon: "📊",
    color: "from-orange-400 to-yellow-400",
    description: "Visual representations of complex information made simple",
    example: "A colorful chart showing 'Top 5 Benefits of Online Learning' with icons and stats"
  }
];

const funnelStages = [
  {
    stage: "Top of Funnel (TOFU)",
    subtitle: "Awareness",
    goal: "Hey, we exist!",
    content: "Entertaining posts, memes, reels, influencer shoutouts",
    example: "A relatable post from Swiggy about late-night cravings",
    icon: "📢",
    color: "bg-gradient-to-r from-cyan-400 to-blue-500",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-50"
  },
  {
    stage: "Middle of Funnel (MOFU)",
    subtitle: "Interest",
    goal: "Here's why we're good for you",
    content: "Product demos, comparison videos, tips",
    example: "A YouTube video comparing two gaming phones",
    icon: "🤔",
    color: "bg-gradient-to-r from-purple-400 to-pink-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    stage: "Bottom of Funnel (BOFU)",
    subtitle: "Action",
    goal: "Buy now!",
    content: "Offers, reviews, user testimonials, call-to-action ads",
    example: "A Google ad: 'Buy iPhone 14 -- Flat ₹5,000 Off Today!'",
    icon: "🎯",
    color: "bg-gradient-to-r from-emerald-400 to-green-500",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }
];

const Module3 = ({ topicRefs }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredContent, setHoveredContent] = useState(null);

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
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
            📘 Module 2
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Content Types & Funnels
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ever wonder why some content makes you laugh, while others make you want to buy something? 
            Let's decode the secret behind strategic content! 🚀
          </p>
        </div>

        {/* Interactive Introduction */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 mb-12 border border-purple-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            🧠 Let's Understand This Together
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3">🍕</div>
              <h3 className="font-semibold text-lg mb-2">A funny meme from Zomato</h3>
              <div className="h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3">🎧</div>
              <h3 className="font-semibold text-lg mb-2">A "How to use" video from Boat</h3>
              <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-lg mb-2">A product unboxing by a tech YouTuber</h3>
              <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each of these is <span className="font-bold text-purple-600">content</span> — and brands use different types to talk to
              you based on <span className="font-bold text-purple-600">where you are in their funnel</span>.
            </p>
          </div>
        </div>

        {/* Funnel Explanation */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🧠 What's a Funnel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A <strong>lead funnel</strong> is like a staircase 🪜. Every step takes someone closer to buying something.
            </p>
          </div>

          {/* Interactive Funnel Stages */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {funnelStages.map((stage, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeStage === index
                      ? `${stage.color} text-white shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {stage.icon} {stage.stage}
                </button>
              ))}
            </div>

            <div className={`${funnelStages[activeStage].bgColor} rounded-2xl p-8 transition-all duration-500`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`text-3xl font-bold ${funnelStages[activeStage].textColor} mb-2`}>
                    {funnelStages[activeStage].stage}
                  </h3>
                  <p className="text-xl font-semibold text-gray-700 mb-4">
                    {funnelStages[activeStage].subtitle}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-semibold text-gray-800">Goal:</p>
                        <p className="text-gray-700">"{funnelStages[activeStage].goal}"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📝</span>
                      <div>
                        <p className="font-semibold text-gray-800">Content:</p>
                        <p className="text-gray-700">{funnelStages[activeStage].content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 Real Example:</h4>
                  <p className="text-gray-700 italic">"{funnelStages[activeStage].example}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Types Grid */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            🧩 Different Types of Content
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredContent(index)}
                onMouseLeave={() => setHoveredContent(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${content.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{content.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{content.format}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-600">Platform:</span>
                      <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{content.platform}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-semibold text-gray-600">Purpose:</span>
                      <p className="text-sm text-gray-700 mt-1">{content.purpose}</p>
                    </div>
                    
                    <p className="text-sm text-gray-600">{content.description}</p>
                    
                    {hoveredContent === index && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg transition-all duration-300">
                        <p className="text-sm text-gray-700 italic">
                          <strong>Example:</strong> {content.example}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Says Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 mb-12 border-l-4 border-yellow-400">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 rounded-full p-3 flex-shrink-0">
              <span className="text-2xl">👩‍🏫</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">💡 Teacher Says:</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">👉</span>
                  Brands don't just post random content — they match content type to funnel stage.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">👉</span>
                  A funny meme won't help you decide what laptop to buy — but a review will.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">👉</span>
                  Good content feels <em>natural</em> but has a purpose.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default Module3;