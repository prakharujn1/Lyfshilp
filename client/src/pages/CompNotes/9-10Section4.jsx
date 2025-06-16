import React, { useState } from "react";

const applicationFields = [
  {
    id: 1,
    icon: "🏥",
    title: "Healthcare & Medicine",
    color: "red",
    bgGradient: "from-red-50 to-pink-100",
    borderColor: "border-red-300",
    textColor: "text-red-800",
    description: "AI revolutionizes medical diagnosis, drug discovery, and personalized treatment",
    applications: [
      {
        name: "Medical Imaging",
        description: "AI analyzes X-rays, MRIs, and CT scans to detect diseases",
        examples: [
          "Google's AI detects diabetic retinopathy from eye photos",
          "IBM Watson helps identify cancer types and treatments",
          "SkinVision app analyzes skin spots for cancer detection"
        ]
      },
      {
        name: "Drug Discovery",
        description: "AI predicts which compounds might work as medicines",
        examples: [
          "COVID-19 vaccine development accelerated by AI",
          "Molecular structure analysis for new medicines"
        ]
      },
      {
        name: "Personalized Treatment",
        description: "AI creates custom treatment plans for individual patients",
        examples: [
          "Cancer treatment based on genetic makeup",
          "Minimized side effects through AI analysis"
        ]
      }
    ]
  },
  {
    id: 2,
    icon: "🚗",
    title: "Transportation",
    color: "blue",
    bgGradient: "from-blue-50 to-cyan-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    description: "Self-driving cars and smart traffic systems powered by AI",
    applications: [
      {
        name: "Autonomous Vehicles",
        description: "AI processes camera, radar, and sensor data for safe navigation",
        examples: [
          "Tesla Autopilot: Highway driving, lane changes, parking",
          "Waymo: Fully autonomous taxi services",
          "Challenges: Construction zones, weather, human behavior"
        ]
      },
      {
        name: "Traffic Management",
        description: "AI optimizes traffic flow and reduces congestion",
        examples: [
          "Smart traffic lights in LA reduce commute times by 16%",
          "Real-time route optimization for better traffic flow"
        ]
      }
    ]
  },
  {
    id: 3,
    icon: "📚",
    title: "Education",
    color: "purple",
    bgGradient: "from-purple-50 to-indigo-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-800",
    description: "Personalized learning experiences and automated grading systems",
    applications: [
      {
        name: "Personalized Learning",
        description: "AI adapts content to individual student needs and pace",
        examples: [
          "Khan Academy identifies knowledge gaps",
          "Duolingo adjusts language difficulty based on performance",
          "BYJU'S creates personalized math and science paths"
        ]
      },
      {
        name: "Automated Grading",
        description: "AI evaluates student work and provides instant feedback",
        examples: [
          "Gradescope assists teachers with consistent grading",
          "Real-time feedback for better learning outcomes"
        ]
      }
    ]
  },
  {
    id: 4,
    icon: "💳",
    title: "Finance & Banking",
    color: "emerald",
    bgGradient: "from-emerald-50 to-green-100",
    borderColor: "border-emerald-300",
    textColor: "text-emerald-800",
    description: "Fraud detection, algorithmic trading, and credit scoring",
    applications: [
      {
        name: "Fraud Detection",
        description: "AI monitors transactions to identify suspicious activities",
        examples: [
          "Credit card fraud detection for unusual spending",
          "PayPal analyzes 19 billion data points in real-time"
        ]
      },
      {
        name: "Algorithmic Trading",
        description: "AI makes investment decisions using market analysis",
        examples: [
          "High-frequency trading executes thousands of trades per second",
          "Market data and news analysis for investment decisions"
        ]
      },
      {
        name: "Credit Scoring",
        description: "AI evaluates loan risks using alternative data",
        examples: [
          "ZestFinance assesses creditworthiness beyond traditional metrics",
          "Utility payments and rental history analysis"
        ]
      }
    ]
  },
  {
    id: 5,
    icon: "🎬",
    title: "Entertainment & Media",
    color: "pink",
    bgGradient: "from-pink-50 to-rose-100",
    borderColor: "border-pink-300",
    textColor: "text-pink-800",
    description: "Content creation and personalized recommendations",
    applications: [
      {
        name: "Content Creation",
        description: "AI generates music, art, writing, and video content",
        examples: [
          "AIVA composes classical music for films and games",
          "GPT-3/ChatGPT writes articles, stories, and code",
          "DeepFake technology creates realistic videos (ethical concerns)"
        ]
      },
      {
        name: "Content Recommendation",
        description: "AI analyzes user behavior to suggest relevant content",
        examples: [
          "TikTok's For You Page learns from interactions",
          "Spotify's Discover Weekly creates personalized playlists"
        ]
      }
    ]
  },
  {
    id: 6,
    icon: "🌾",
    title: "Agriculture",
    color: "yellow",
    bgGradient: "from-yellow-50 to-amber-100",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-800",
    description: "Precision farming and weather prediction for better crops",
    applications: [
      {
        name: "Precision Farming",
        description: "AI optimizes farming practices using data analysis",
        examples: [
          "John Deere tractors use AI for optimal seed planting",
          "Drones monitor crop health and detect pest infestations"
        ]
      },
      {
        name: "Weather Prediction",
        description: "AI improves weather forecasting for farming decisions",
        examples: [
          "The Weather Channel provides hyperlocal predictions",
          "Helps farmers decide when to plant, harvest, or protect crops"
        ]
      }
    ]
  }
];

const Module4 = ({ topicRefs }) => {
  const [activeField, setActiveField] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);

  return (
    <div
      id="m-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-4"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-pulse">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-cyan-200">
              AI Applications
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Discovering How Artificial Intelligence Transforms Every Aspect of Our Lives
            </p>
          </div>
          <div className="absolute top-4 right-4 text-4xl opacity-30 animate-bounce">🧠</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-spin">⚡</div>
          <div className="absolute top-1/2 left-8 text-2xl opacity-20 animate-pulse">🔬</div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border-l-4 border-cyan-400 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">🌟</span>
              AI is Everywhere Around Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  From the moment you wake up to when you go to sleep, AI is working behind the scenes 
                  to make your life easier, safer, and more enjoyable.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Let's explore how AI is revolutionizing different fields and creating amazing 
                  possibilities for the future!
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-cyan-100">
                <h3 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
                  💡 Did You Know?
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">📱</span>
                    <p>Your smartphone uses AI in camera, voice assistant, and apps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">🎵</span>
                    <p>Music streaming services use AI to recommend songs you'll love</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">🛒</span>
                    <p>Online shopping sites use AI to show you relevant products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Application Fields */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              🔍 AI Applications in Different Fields
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover how AI is transforming industries and creating new possibilities in every field imaginable
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationFields.map((field, index) => (
              <div
                key={field.id}
                className={`bg-gradient-to-br ${field.bgGradient} rounded-2xl p-6 border ${field.borderColor} 
                         shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2
                         ${activeField === field.id ? 'ring-4 ring-offset-2 ring-opacity-50 scale-105' : ''}`}
                onClick={() => setActiveField(activeField === field.id ? null : field.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3 animate-bounce">{field.icon}</div>
                  <h3 className={`text-xl font-bold ${field.textColor} mb-3`}>
                    {field.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 text-center text-sm">
                  {field.description}
                </p>

                <div className="text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                  bg-${field.color}-100 text-${field.color}-800 hover:bg-${field.color}-200 transition-colors`}>
                    {activeField === field.id ? 'Click to close' : 'Click to explore'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Field View */}
        {activeField && (
          <div className="mb-12 animate-in slide-in-from-top duration-500">
            {applicationFields
              .filter(field => field.id === activeField)
              .map(field => (
                <div key={field.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${field.bgGradient} p-8 border-b`}>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-6xl animate-pulse">{field.icon}</span>
                      <h3 className={`text-3xl md:text-4xl font-bold ${field.textColor}`}>
                        {field.title}
                      </h3>
                    </div>
                    <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
                      {field.description}
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {field.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 
                                   hover:border-${field.color}-300 transition-all duration-300 cursor-pointer
                                   hover:shadow-lg transform hover:-translate-y-1
                                   ${selectedApplication === `${field.id}-${appIndex}` ? 
                                     `border-${field.color}-400 shadow-lg` : 'border-gray-200'}`}
                          onClick={() => setSelectedApplication(
                            selectedApplication === `${field.id}-${appIndex}` ? null : `${field.id}-${appIndex}`
                          )}
                        >
                          <h4 className={`text-xl font-bold ${field.textColor} mb-3 flex items-center gap-2`}>
                            <span className="text-2xl">⚡</span>
                            {app.name}
                          </h4>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                            {app.description}
                          </p>

                          {selectedApplication === `${field.id}-${appIndex}` && (
                            <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-300">
                              <h5 className={`font-semibold ${field.textColor} text-sm flex items-center gap-2`}>
                                <span>🌟</span> Real-World Examples:
                              </h5>
                              {app.examples.map((example, exIndex) => (
                                <div key={exIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                  <span className="text-green-500 mt-0.5 text-sm">✓</span>
                                  <p className="text-sm text-gray-700 leading-relaxed">{example}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="mt-4 text-center">
                            <span className={`text-xs text-${field.color}-600 font-medium`}>
                              {selectedApplication === `${field.id}-${appIndex}` ? '↑ Click to collapse' : '↓ Click for examples'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Impact Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              🌍 The Impact of AI on Our Daily Lives
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center animate-bounce">⚡</div>
              <h3 className="text-xl font-bold text-green-700 mb-3 text-center">Faster Solutions</h3>
              <p className="text-gray-700 text-center text-sm">
                AI can process information millions of times faster than humans
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center animate-pulse">🎯</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">Better Accuracy</h3>
              <p className="text-gray-700 text-center text-sm">
                AI reduces human errors in critical tasks like medical diagnosis
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center animate-spin">🔄</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">24/7 Availability</h3>
              <p className="text-gray-700 text-center text-sm">
                AI systems work around the clock without getting tired
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center animate-bounce">👥</div>
              <h3 className="text-xl font-bold text-pink-700 mb-3 text-center">Personalized Experience</h3>
              <p className="text-gray-700 text-center text-sm">
                AI adapts to individual preferences and needs
              </p>
            </div>
          </div>
        </div>

        {/* Future Possibilities */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🚀</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Future is Being Written Today
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
                Every field we've explored is just the beginning. AI will continue to evolve and create 
                new possibilities we can't even imagine yet. The key is to understand how it works and 
                use it responsibly to build a better world.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl mb-2">🎓</div>
                  <h3 className="font-semibold mb-2">Learn & Adapt</h3>
                  <p className="text-sm opacity-90">Stay curious about AI developments</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="font-semibold mb-2">Use Responsibly</h3>
                  <p className="text-sm opacity-90">Consider ethics and human values</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl mb-2">💡</div>
                  <h3 className="font-semibold mb-2">Innovate</h3>
                  <p className="text-sm opacity-90">Think of new ways AI can help humanity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-400 shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Key Takeaways
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <p className="text-gray-700">AI is already transforming every major industry</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <p className="text-gray-700">From healthcare to entertainment, AI makes processes faster and more accurate</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <p className="text-gray-700">Real-world examples show AI's practical impact on daily life</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">→</span>
                <p className="text-gray-700">The future will bring even more AI innovations</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">→</span>
                <p className="text-gray-700">Understanding AI applications helps us prepare for tomorrow</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">→</span>
                <p className="text-gray-700">Responsible AI development is key to a better future</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module4;