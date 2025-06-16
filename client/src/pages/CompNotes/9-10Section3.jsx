import React, { useState, useEffect } from 'react';
import { 
  Brain, Database, Target, TrendingUp, Zap, 
  Mail, Shield, X, CheckCircle, ArrowRight, 
  Play, Pause, RotateCcw, Eye, FileText, 
  PieChart, BarChart3, Activity, Lightbulb,
  Cpu, Network, Users, Star, Trophy, Gamepad2,
  Stethoscope, ShoppingCart, Camera, Sparkles,
  RefreshCw, GitBranch, Layers, BookOpen,
  ArrowDown, ChevronRight, Clock, Rocket
} from 'lucide-react';

const Module3 = ({ topicRefs }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeExample, setActiveExample] = useState('email');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateCards(true), 500);
  }, []);

  const learningSteps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "AI needs large amounts of data to learn patterns, just like how you need to see many examples to learn a new concept.",
      color: "from-blue-500 to-cyan-500",
      details: "Millions of labeled examples are gathered to train the AI system"
    },
    {
      icon: Eye,
      title: "Pattern Recognition",
      description: "AI analyzes the data to find common patterns and relationships.",
      color: "from-purple-500 to-pink-500",
      details: "Complex algorithms identify hidden connections in the data"
    },
    {
      icon: Cpu,
      title: "Model Training",
      description: "AI creates a mathematical model that can make predictions based on the patterns it found.",
      color: "from-green-500 to-emerald-500",
      details: "Neural networks learn to map inputs to outputs through training"
    },
    {
      icon: Target,
      title: "Testing & Validation",
      description: "AI tests its predictions on new, unseen data to check accuracy.",
      color: "from-orange-500 to-red-500",
      details: "Performance is measured using metrics like accuracy and precision"
    },
    {
      icon: Rocket,
      title: "Deployment & Learning",
      description: "AI is deployed in real-world applications and continues learning from new data.",
      color: "from-indigo-500 to-purple-500",
      details: "Continuous improvement through feedback and new data"
    }
  ];

  const emailExample = {
    title: "Email Spam Detection",
    steps: [
      {
        phase: "Data Collection",
        content: "Google collects millions of emails labeled as 'spam' or 'not spam'",
        visual: "📧 Million+ emails",
        details: "Each email becomes a training example with features like sender, subject line, content, and links"
      },
      {
        phase: "Pattern Recognition", 
        content: "AI notices emails with words like 'FREE,' 'URGENT,' 'CLICK NOW' are often spam",
        visual: "🔍 Pattern found",
        details: "It identifies that emails from unknown senders with multiple exclamation marks are frequently spam"
      },
      {
        phase: "Model Training",
        content: "AI develops rules: 'FREE' + unknown sender + poor grammar = 90% spam chance",
        visual: "🧠 Rules created",
        details: "These rules become more complex and accurate with more training data"
      },
      {
        phase: "Testing",
        content: "AI analyzes new emails it hasn't seen before",
        visual: "✅ 95% accuracy",
        details: "If it correctly identifies 95% of spam without blocking legitimate emails, the model is good"
      },
      {
        phase: "Deployment",
        content: "Gmail uses this AI to filter your emails automatically",
        visual: "🚀 Live system",
        details: "As spammers develop new techniques, AI adapts by learning from user feedback"
      }
    ]
  };

  const learningTypes = [
    {
      icon: BookOpen,
      title: "Supervised Learning",
      subtitle: "Learning with a teacher",
      description: "AI learns from examples with correct answers provided",
      color: "from-blue-500 to-purple-500",
      example: {
        title: "Medical Diagnosis",
        scenario: "Doctors provide AI with thousands of X-ray images labeled as 'normal' or 'pneumonia'",
        process: "AI learns to identify pneumonia patterns in chest X-rays",
        result: "When shown a new X-ray, AI can predict if pneumonia is present",
        application: "Some hospitals use AI to help radiologists detect diseases faster and more accurately"
      },
      advantages: ["High accuracy", "Clear guidance", "Predictable results"],
      disadvantages: ["Requires labeled data", "Limited to known categories"]
    },
    {
      icon: Sparkles,
      title: "Unsupervised Learning", 
      subtitle: "Learning without guidance",
      description: "AI finds hidden patterns in data without being told what to look for",
      color: "from-green-500 to-teal-500",
      example: {
        title: "Customer Segmentation",
        scenario: "Amazon analyzes customer purchase data without any predefined categories",
        process: "AI discovers natural groupings: 'budget-conscious,' 'premium lovers,' 'tech enthusiasts'",
        result: "Amazon can create targeted marketing campaigns for each group",
        application: "Personalized recommendations and marketing strategies"
      },
      advantages: ["Discovers hidden patterns", "No labeled data needed", "Finds unexpected insights"],
      disadvantages: ["Results can be unclear", "Harder to validate"]
    },
    {
      icon: Gamepad2,
      title: "Reinforcement Learning",
      subtitle: "Learning through trial and error",
      description: "AI learns through trial and error, receiving rewards for good actions and penalties for bad ones",
      color: "from-orange-500 to-red-500",
      example: {
        title: "Game AI - AlphaGo",
        scenario: "Google's AI learned to play the board game Go by playing millions of games against itself",
        process: "Initially made random moves, but gradually learned winning strategies through rewards and penalties",
        result: "AlphaGo defeated world champion Lee Sedol in 2016",
        application: "Achieving something experts thought would take decades"
      },
      advantages: ["Learns optimal strategies", "Adapts to environment", "No training data needed"],
      disadvantages: ["Requires reward system", "Can take long to train"]
    }
  ];

  const handleStepAnimation = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    
    setIsPlaying(true);
    let step = 0;
    const interval = setInterval(() => {
      setCurrentStep(step);
      step++;
      if (step >= learningSteps.length) {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 2000);
  };

  return (
    <div
      id="m-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-3"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">3</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              How AI Works
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                The Learning Process
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover the fascinating journey of how machines learn to think and make decisions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Machine Learning Foundation */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Machine Learning: The Foundation of Modern AI
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-gray-900">Machine Learning (ML)</strong> is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed for every task.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Think of it like this:</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Instead of programming a computer with specific instructions for every possible situation, 
                    we teach it to recognize patterns and make decisions based on examples - just like how 
                    you learned to recognize faces, understand language, or ride a bicycle through practice and experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Learning Steps */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                How AI Learns - Step by Step
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow the journey of how AI transforms raw data into intelligent decisions
              </p>
            </div>

            {/* Animation Controls */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-2xl p-2 flex items-center gap-2">
                <button
                  onClick={handleStepAnimation}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors duration-200"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isPlaying ? 'Pause' : 'Watch Process'}
                </button>
                <button
                  onClick={() => setCurrentStep(0)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </div>

            {/* Learning Steps Visualization */}
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                {learningSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        currentStep >= index 
                          ? `bg-gradient-to-r ${step.color} scale-110 shadow-lg` 
                          : 'bg-gray-200'
                      }`}
                    >
                      <step.icon className={`w-8 h-8 ${currentStep >= index ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <div className={`mt-3 text-center transition-all duration-500 ${
                      currentStep >= index ? 'opacity-100' : 'opacity-50'
                    }`}>
                      <h3 className="font-bold text-sm text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Step Description */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Step {currentStep + 1}: {learningSteps[currentStep]?.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {learningSteps[currentStep]?.description}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {learningSteps[currentStep]?.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Spam Example */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                Real-World Example: Email Spam Detection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Let's follow how Gmail's AI learned to protect you from spam emails
              </p>
            </div>

            <div className="space-y-6">
              {emailExample.steps.map((step, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-l-4 transition-all duration-500 ${
                    index === 0 ? 'border-blue-500' :
                    index === 1 ? 'border-purple-500' :
                    index === 2 ? 'border-green-500' :
                    index === 3 ? 'border-orange-500' : 'border-indigo-500'
                  } ${animateCards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                        index === 0 ? 'bg-blue-100' :
                        index === 1 ? 'bg-purple-100' :
                        index === 2 ? 'bg-green-100' :
                        index === 3 ? 'bg-orange-100' : 'bg-indigo-100'
                      }`}>
                        {step.visual}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          index === 0 ? 'bg-blue-100 text-blue-700' :
                          index === 1 ? 'bg-purple-100 text-purple-700' :
                          index === 2 ? 'bg-green-100 text-green-700' :
                          index === 3 ? 'bg-orange-100 text-orange-700' : 'bg-indigo-100 text-indigo-700'
                        }`}>
                          Step {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg mb-3">{step.content}</p>
                      <p className="text-gray-500 text-sm italic">{step.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">The Result</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Today, Gmail's AI filters over <strong>99.9% of spam emails</strong> automatically, processing 
                    billions of emails daily while continuously improving its accuracy through machine learning!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Machine Learning */}
        <div className={`mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Types of Machine Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different approaches to teaching machines, each with its own strengths and applications
            </p>
          </div>

          <div className="space-y-8">
            {learningTypes.map((type, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                  animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Type Description */}
                  <div className="lg:col-span-1 p-8 bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center`}>
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                        <p className="text-sm text-purple-600 font-medium">{type.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Advantages
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          {type.advantages.map((adv, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                              {adv}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                          <X className="w-4 h-4" />
                          Limitations
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1 pl-6">
                          {type.disadvantages.map((dis, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                              {dis}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Example Case Study */}
                  <div className="lg:col-span-2 p-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <Stethoscope className="w-6 h-6 text-purple-600" />
                        <h4 className="text-xl font-bold text-gray-900">Case Study: {type.example.title}</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
                          <h5 className="font-semibold text-gray-900 mb-2">The Scenario</h5>
                          <p className="text-gray-600 text-sm">{type.example.scenario}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500">
                          <h5 ClassName="font-semibold text-gray-900 mb-2">The Process</h5>
                          <p className="text-gray-600 text-sm">{type.example.process}</p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
                          <h5 className="font-semibold text-gray-900 mb-2">The Result</h5>
                          <p className="text-gray-600 text-sm">{type.example.result}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4">
                          <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            Real-World Application
                          </h5>
                          <p className="text-gray-700 text-sm font-medium">{type.example.application}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className={`mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Key Takeaways</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Database className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-lg font-bold mb-2">Data is Fuel</h4>
                  <p className="text-white/90 text-sm">AI needs large amounts of quality data to learn effectively, just like students need many examples to master a concept.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <RefreshCw className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-lg font-bold mb-2">Continuous Learning</h4>
                  <p className="text-white/90 text-sm">AI systems improve over time through experience and feedback, making them more accurate and useful.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Layers className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-lg font-bold mb-2">Different Approaches</h4>
                  <p className="text-white/90 text-sm">Each type of machine learning serves different purposes - from medical diagnosis to game playing.</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                  You've now discovered the fascinating world of how AI learns! From pattern recognition to real-world applications, 
                  you understand the core principles that power modern artificial intelligence.
                </p>
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                    <span className="text-white font-medium">Continue your AI journey</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Module3;