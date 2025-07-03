import React, { useState, useEffect } from 'react';
import { Brain, Database, Target, TrendingUp, Eye, Cpu, Network, Zap, CheckCircle, AlertCircle, BookOpen, Lightbulb, Settings, BarChart3, Users, Shield, Globe, ArrowRight, Play, Pause } from 'lucide-react';

const Module3AILearning = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentMLType, setCurrentMLType] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMLType((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(stepInterval);
  }, []);

  const mlTypes = [
    {
      title: "Supervised Learning",
      description: "AI learns from labeled examples",
      icon: <Target className="w-8 h-8" />,
      example: "Teaching AI to recognize cats by showing it thousands of labeled cat photos",
      color: "from-green-500 to-emerald-600",
      realWorld: "Tesla's self-driving cars learning to identify objects on the road"
    },
    {
      title: "Unsupervised Learning", 
      description: "AI discovers hidden patterns",
      icon: <Eye className="w-8 h-8" />,
      example: "AI finding customer groups in shopping data without being told what to look for",
      color: "from-emerald-500 to-green-600",
      realWorld: "Banks detecting unusual spending patterns to prevent fraud"
    },
    {
      title: "Reinforcement Learning",
      description: "AI learns through trial and error",
      icon: <TrendingUp className="w-8 h-8" />,
      example: "AI playing chess and getting better by winning and losing games",
      color: "from-green-600 to-teal-600", 
      realWorld: "Google's AI reducing data center cooling costs by 40%"
    }
  ];

  const learningSteps = [
    {
      title: "Data Collection",
      description: "Gathering high-quality, relevant data",
      icon: <Database className="w-6 h-6" />,
      example: "Netflix collects viewing history, ratings, and user behavior"
    },
    {
      title: "Pattern Recognition", 
      description: "Finding hidden relationships in data",
      icon: <Network className="w-6 h-6" />,
      example: "Discovering users who like sci-fi also enjoy thrillers"
    },
    {
      title: "Model Training",
      description: "Teaching AI to make accurate predictions",
      icon: <Settings className="w-6 h-6" />,
      example: "AI adjusts its recommendations based on user feedback"
    },
    {
      title: "Testing & Validation",
      description: "Ensuring AI works on new, unseen data",
      icon: <CheckCircle className="w-6 h-6" />,
      example: "Testing recommendations on different user groups"
    },
    {
      title: "Continuous Learning",
      description: "AI keeps improving with new data",
      icon: <Zap className="w-6 h-6" />,
      example: "System updates recommendations as you watch more content"
    }
  ];

  const challenges = [
    {
      title: "Data Bias",
      description: "AI can inherit unfair biases from training data",
      icon: <AlertCircle className="w-6 h-6" />,
      example: "Amazon's hiring AI favored male candidates due to biased historical data"
    },
    {
      title: "Explainability",
      description: "Understanding why AI made a specific decision",
      icon: <Lightbulb className="w-6 h-6" />,
      example: "Doctors need to know why AI diagnosed a particular condition"
    },
    {
      title: "Security Risks",
      description: "AI systems can be fooled by adversarial attacks",
      icon: <Shield className="w-6 h-6" />,
      example: "Adding noise to stop signs can confuse self-driving cars"
    }
  ];

  return (
    <div
      id="s-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-300"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              How AI Works
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the fascinating world of machine learning and how AI systems learn from data
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              From Human Learning to Machine Learning
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800">Human Learning</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Learns from few examples</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Uses intuition and context</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Applies past experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-400">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-800">Machine Learning</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Needs massive amounts of data</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Uses mathematical patterns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Requires computational power</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Question Highlight */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center">
            <div className="text-4xl mb-4">🤔</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Key Question
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto italic">
              "How does a machine that only understands 0s and 1s learn to recognize your face, recommend movies, or drive a car?"
            </p>
          </div>
        </div>

        {/* Traditional vs ML Programming */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Traditional Programming vs Machine Learning
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <Cpu className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Traditional Programming</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <span className="font-semibold text-green-700">Data + Program</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <span className="font-semibold text-green-800">Output</span>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Example: Calculator with predefined math operations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <Brain className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Machine Learning</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                  <span className="font-semibold text-emerald-700">Data + Desired Output</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                <div className="bg-emerald-100 rounded-lg p-4 text-center">
                  <span className="font-semibold text-emerald-800">Program (Model)</span>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  AI creates its own "program" from data patterns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Process Steps */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The AI Learning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the 5-step journey of how AI systems learn from data
            </p>
          </div>

          {/* Current Step Highlight */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">
                    {learningSteps[currentStep].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">Step {currentStep + 1}: {learningSteps[currentStep].title}</h3>
                    <p className="text-lg opacity-90 mb-3">{learningSteps[currentStep].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: {learningSteps[currentStep].example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Steps Grid */}
          <div className="grid md:grid-cols-5 gap-4">
            {learningSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentStep === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentStep(index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Netflix Example Deep Dive */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📺</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Real-World Example: Netflix Recommendations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Database className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Data Collection</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Viewing history and ratings</li>
                <li>• Time and device preferences</li>
                <li>• Search and browsing patterns</li>
                <li>• Content analysis (genre, actors)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Network className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Pattern Discovery</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Similar taste clusters</li>
                <li>• Genre preferences by time</li>
                <li>• Binge-watching behaviors</li>
                <li>• Geographic viewing trends</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <BarChart3 className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Continuous Learning</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time profile updates</li>
                <li>• Seasonal adaptations</li>
                <li>• Trend detection</li>
                <li>• Global learning insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Machine Learning */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Machine Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three main approaches to teaching AI systems
            </p>
          </div>

          {/* Featured ML Type (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Featuring</div>
              <div className={`bg-gradient-to-r ${mlTypes[currentMLType].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-5xl">
                    {mlTypes[currentMLType].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{mlTypes[currentMLType].title}</h3>
                    <p className="text-xl opacity-90">{mlTypes[currentMLType].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Simple Example:</h4>
                    <p className="text-sm">{mlTypes[currentMLType].example}</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Real-World Application:</h4>
                    <p className="text-sm">{mlTypes[currentMLType].realWorld}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All ML Types Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {mlTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentMLType === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setCurrentMLType(index)}
              >
                <div className={`bg-gradient-to-r ${type.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Learning Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Network className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Deep Learning: AI's Neural Networks</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Advanced AI that mimics how the human brain processes information
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Google Translate Example</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                    <span>Understands context and meaning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                    <span>Handles idioms and cultural nuances</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                    <span>Supports 108 languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                    <span>Near-human quality translation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-bold mb-4">Translation Challenge</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm">"Time flies like an arrow"</p>
                    <p className="text-xs text-green-200 mt-1">vs</p>
                    <p className="text-sm">"Fruit flies like a banana"</p>
                  </div>
                  <p className="text-sm text-green-200">
                    Same structure, completely different meanings!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges and Limitations */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Challenges and Limitations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important considerations when developing AI systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{challenge.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> {challenge.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future of AI Learning */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              The Future of AI Learning
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Zap className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Few-Shot Learning</h3>
              <p className="text-gray-600 text-sm">AI learning new tasks with minimal examples, like humans do</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <BookOpen className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Continual Learning</h3>
              <p className="text-gray-600 text-sm">AI that learns new skills without forgetting previous knowledge</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Network className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-3">Multi-Modal Learning</h3>
              <p className="text-gray-600 text-sm">AI understanding text, images, audio, and video simultaneously</p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaway
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              AI learning is fundamentally about pattern recognition at scale — finding meaningful relationships in data that help solve real-world problems.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                As future innovators and leaders, understanding these processes will be crucial in shaping how AI transforms our society.
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

export default Module3AILearning;