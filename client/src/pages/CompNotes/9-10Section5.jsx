import React, { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Eye, Brain, Cpu, Mic, Camera, Bot, Code, Cloud } from "lucide-react";

const nlpApplications = [
  {
    category: "Virtual Assistants",
    icon: "🗣️",
    color: "blue",
    apps: [
      {
        name: "Siri (Apple)",
        description: "Uses NLP to understand voice commands and respond naturally",
        features: ["Voice recognition", "Natural responses", "Task automation"]
      },
      {
        name: "Google Assistant",
        description: "Can handle complex queries like 'What's the weather like tomorrow for my morning jog?'",
        features: ["Complex queries", "Context understanding", "Smart suggestions"]
      },
      {
        name: "Alexa (Amazon)",
        description: "Processes natural language to control smart home devices, play music, and answer questions",
        features: ["Smart home control", "Music streaming", "Question answering"]
      }
    ]
  },
  {
    category: "Language Translation",
    icon: "🌐",
    color: "green",
    apps: [
      {
        name: "Google Translate",
        description: "Can translate text, speech, and even images in over 100 languages",
        features: ["100+ languages", "Image translation", "Real-time speech"]
      },
      {
        name: "Google Pixel Buds",
        description: "Can translate conversations in real-time",
        features: ["Real-time translation", "Conversation mode", "40+ languages"]
      },
      {
        name: "DeepL",
        description: "Provides more nuanced translations by understanding context better",
        features: ["Context awareness", "Nuanced translation", "Professional quality"]
      }
    ]
  },
  {
    category: "Content Generation",
    icon: "✍️",
    color: "purple",
    apps: [
      {
        name: "ChatGPT",
        description: "Can write essays, answer questions, explain concepts, and even write code",
        features: ["Essay writing", "Code generation", "Question answering"]
      },
      {
        name: "Grammarly",
        description: "Uses NLP to improve writing by suggesting grammar corrections, style improvements, and tone adjustments",
        features: ["Grammar check", "Style suggestions", "Tone adjustment"]
      }
    ]
  }
];

const visionApplications = [
  {
    category: "Security and Surveillance",
    icon: "🔒",
    color: "red",
    examples: [
      "Airport Security: AI scans luggage and identifies prohibited items in X-ray images",
      "Facial Recognition: Used for building access control and law enforcement",
      "Smart Home Security: Cameras distinguish between family members, strangers, and pets"
    ]
  },
  {
    category: "Retail and E-commerce",
    icon: "🛍️",
    color: "orange",
    examples: [
      "Amazon Go Stores: Cameras with AI track items customers pick up for checkout-free shopping",
      "Visual Search: Google Lens lets you search for products by taking photos",
      "Virtual Try-On: Apps like Sephora's allow virtual makeup testing using AR and AI"
    ]
  },
  {
    category: "Automotive",
    icon: "🚗",
    color: "blue",
    examples: [
      "License Plate Recognition: Automated toll systems and parking management",
      "Driver Monitoring: AI detects if drivers are drowsy or distracted",
      "Pedestrian Detection: Safety systems that automatically brake when detecting people"
    ]
  }
];

const robotTypes = [
  {
    type: "Industrial Robots",
    icon: "🏭",
    color: "slate",
    bgGradient: "from-slate-50 to-gray-100",
    examples: [
      "Manufacturing: AI-powered robots assemble cars, electronics with precision",
      "Quality Control: Robots use computer vision to inspect products for defects",
      "Warehouse Automation: Amazon's fulfillment centers use thousands of robots"
    ]
  },
  {
    type: "Service Robots",
    icon: "🤖",
    color: "blue",
    bgGradient: "from-blue-50 to-cyan-100",
    examples: [
      "Roomba Vacuum Cleaners: Use AI to map homes, avoid obstacles, clean efficiently",
      "Pepper Robot: Humanoid robot used in retail stores to greet customers",
      "Hospital Robots: Transport medications, supplies, perform surgical procedures"
    ]
  },
  {
    type: "Personal Robots",
    icon: "🏠",
    color: "green",
    bgGradient: "from-green-50 to-emerald-100",
    examples: [
      "Companion Robots: Provide emotional support, especially for elderly people",
      "Educational Robots: Help children learn programming and STEM concepts",
      "Pet Robots: AI-powered robotic pets that respond to touch and voice"
    ]
  }
];

const mlPlatforms = [
  {
    category: "AI Frameworks",
    icon: "🛠️",
    platforms: [
      {
        name: "TensorFlow (Google)",
        description: "Open-source platform for building machine learning models",
        color: "orange"
      },
      {
        name: "PyTorch (Facebook)",
        description: "Popular among researchers for deep learning projects",
        color: "red"
      },
      {
        name: "Scikit-learn",
        description: "User-friendly library for basic machine learning tasks",
        color: "blue"
      }
    ]
  },
  {
    category: "Cloud AI Services",
    icon: "☁️",
    platforms: [
      {
        name: "Google Cloud AI",
        description: "Provides pre-trained models for vision, language, and prediction",
        color: "blue"
      },
      {
        name: "Amazon Web Services (AWS) AI",
        description: "Offers AI services like image recognition and chatbot creation",
        color: "orange"
      },
      {
        name: "Microsoft Azure AI",
        description: "Includes tools for building and deploying AI applications",
        color: "cyan"
      }
    ]
  }
];

const Module5 = ({ topicRefs }) => {
  const [activeNLP, setActiveNLP] = useState(null);
  const [activeVision, setActiveVision] = useState(null);
  const [activeRobot, setActiveRobot] = useState(null);
  const [activePlatform, setActivePlatform] = useState(null);

  return (
    <div
      id="m-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-5"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
              AI Tools & Technologies
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Discover the amazing AI technologies that are shaping our world today
            </p>
          </div>
          <div className="absolute top-4 right-4 text-4xl opacity-30 animate-spin">⚡</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-pulse">🧠</div>
          <div className="absolute top-1/2 left-8 text-2xl opacity-20 animate-bounce">💡</div>
        </div>

        {/* Natural Language Processing */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mic className="text-blue-600 w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Natural Language Processing (NLP)
              </h2>
              <Brain className="text-purple-600 w-8 h-8" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI's ability to understand, interpret, and generate human language
            </p>
          </div>

          {/* NLP Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { name: "Speech Recognition", icon: "🎤", desc: "Converting spoken words to text" },
              { name: "Language Understanding", icon: "🧠", desc: "Comprehending meaning and context" },
              { name: "Language Generation", icon: "✍️", desc: "Creating human-like text or speech" },
              { name: "Translation", icon: "🌐", desc: "Converting between different languages" }
            ].map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-2 text-center">{component.icon}</div>
                <h3 className="font-semibold text-blue-800 mb-2 text-center">{component.name}</h3>
                <p className="text-sm text-gray-600 text-center">{component.desc}</p>
              </div>
            ))}
          </div>

          {/* NLP Applications */}
          <div className="space-y-6">
            {nlpApplications.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${
                    category.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    category.color === 'green' ? 'from-green-500 to-green-600' :
                    'from-purple-500 to-purple-600'
                  } text-white p-6 cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={() => setActiveNLP(activeNLP === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                    {activeNLP === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                
                {activeNLP === index && (
                  <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in slide-in-from-top duration-300">
                    {category.apps.map((app, appIndex) => (
                      <div key={appIndex} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-800 mb-2">{app.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                        <div className="space-y-1">
                          {app.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <span className="text-green-500 text-sm">✓</span>
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Computer Vision */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="text-green-600 w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Computer Vision
              </h2>
              <Camera className="text-blue-600 w-8 h-8" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI's ability to interpret and understand visual information from the world
            </p>
          </div>

          {/* Vision Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { name: "Image Recognition", icon: "🖼️", desc: "Identifying objects, people, or scenes" },
              { name: "Object Detection", icon: "🎯", desc: "Locating and classifying multiple objects" },
              { name: "Facial Recognition", icon: "👤", desc: "Identifying specific individuals" },
              { name: "Motion Detection", icon: "🏃", desc: "Understanding movement patterns" }
            ].map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-2 text-center">{component.icon}</div>
                <h3 className="font-semibold text-green-800 mb-2 text-center">{component.name}</h3>
                <p className="text-sm text-gray-600 text-center">{component.desc}</p>
              </div>
            ))}
          </div>

          {/* Vision Applications */}
          <div className="grid md:grid-cols-3 gap-6">
            {visionApplications.map((app, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${
                  app.color === 'red' ? 'from-red-50 to-pink-50 border-red-200' :
                  app.color === 'orange' ? 'from-orange-50 to-yellow-50 border-orange-200' :
                  'from-blue-50 to-cyan-50 border-blue-200'
                } rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2`}
                onClick={() => setActiveVision(activeVision === index ? null : index)}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{app.icon}</div>
                  <h3 className={`text-xl font-bold ${
                    app.color === 'red' ? 'text-red-700' :
                    app.color === 'orange' ? 'text-orange-700' :
                    'text-blue-700'
                  }`}>
                    {app.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {app.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                      <p className="text-sm text-gray-700">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Robotics and AI */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="text-purple-600 w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Robotics and AI
              </h2>
              <Zap className="text-pink-600 w-8 h-8" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The integration of AI with physical machines to perform tasks in the real world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {robotTypes.map((robot, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${robot.bgGradient} rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2`}
                onClick={() => setActiveRobot(activeRobot === index ? null : index)}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3 animate-pulse">{robot.icon}</div>
                  <h3 className={`text-xl font-bold ${
                    robot.color === 'slate' ? 'text-slate-700' :
                    robot.color === 'blue' ? 'text-blue-700' :
                    'text-green-700'
                  } mb-4`}>
                    {robot.type}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {robot.examples.map((example, exampleIndex) => (
                    <div 
                      key={exampleIndex} 
                      className={`p-3 rounded-lg ${
                        robot.color === 'slate' ? 'bg-slate-100' :
                        robot.color === 'blue' ? 'bg-blue-100' :
                        'bg-green-100'
                      } border border-gray-200`}
                    >
                      <p className="text-sm text-gray-700">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Learning Platforms */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="text-indigo-600 w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Machine Learning Platforms
              </h2>
              <Cloud className="text-purple-600 w-8 h-8" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tools and platforms that make AI development accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mlPlatforms.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {category.platforms.map((platform, platformIndex) => (
                    <div 
                      key={platformIndex}
                      className={`p-4 rounded-xl border-2 ${
                        platform.color === 'orange' ? 'border-orange-200 bg-orange-50' :
                        platform.color === 'red' ? 'border-red-200 bg-red-50' :
                        platform.color === 'blue' ? 'border-blue-200 bg-blue-50' :
                        platform.color === 'cyan' ? 'border-cyan-200 bg-cyan-50' :
                        'border-gray-200 bg-gray-50'
                      } hover:shadow-md transition-shadow`}
                    >
                      <h4 className={`font-semibold mb-2 ${
                        platform.color === 'orange' ? 'text-orange-700' :
                        platform.color === 'red' ? 'text-red-700' :
                        platform.color === 'blue' ? 'text-blue-700' :
                        platform.color === 'cyan' ? 'text-cyan-700' :
                        'text-gray-700'
                      }`}>
                        {platform.name}
                      </h4>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Future is AI-Powered!
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            From understanding your voice to recognizing your face, from robots that clean your home to platforms that help build the next generation of AI - these technologies are transforming how we live, work, and learn.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">🗣️</div>
              <p className="font-semibold">NLP</p>
              <p className="text-sm">Talk to machines</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">👁️</div>
              <p className="font-semibold">Computer Vision</p>
              <p className="text-sm">See like humans</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">🤖</div>
              <p className="font-semibold">Robotics</p>
              <p className="text-sm">Act in the world</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-2xl mb-2">🛠️</div>
              <p className="font-semibold">ML Platforms</p>
              <p className="text-sm">Build the future</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module5;