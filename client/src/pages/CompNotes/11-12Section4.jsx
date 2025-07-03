import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Video, 
  Image, 
  PenTool, 
  Music, 
  Database, 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw,
  Cpu,
  Wand2,
  Palette,
  Mic,
  BarChart3,
  Shield,
  Award,
  BookOpen,
  Monitor,
  Star,
  Clock,
  Eye,
  Users,
  Layers
} from 'lucide-react';

const Module4AITools = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeToolCategory, setActiveToolCategory] = useState(0);
  const [currentPromptExample, setCurrentPromptExample] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(Array.from({ length: 20 }, (_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveToolCategory((prev) => (prev + 1) % 6);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const promptInterval = setInterval(() => {
      setCurrentPromptExample((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(promptInterval);
  }, []);

  const toolCategories = [
    {
      title: "Video Creation",
      icon: <Video className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      tools: ["Runway ML", "Pictory AI", "Synthesia"],
      description: "Create amazing videos from text descriptions"
    },
    {
      title: "Image Generation", 
      icon: <Image className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      tools: ["DALL-E", "Midjourney", "Stable Diffusion"],
      description: "Generate stunning images with AI"
    },
    {
      title: "Writing & Text",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      tools: ["ChatGPT", "Claude", "Grammarly AI"],
      description: "Enhance your writing with AI assistance"
    },
    {
      title: "Learning & Study",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      tools: ["Khanmigo", "Socratic", "Quizlet AI"],
      description: "Personalized learning assistance"
    },
    {
      title: "Music & Audio",
      icon: <Music className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-600",
      tools: ["AIVA", "Murf AI", "Descript"],
      description: "Create music and audio content"
    },
    {
      title: "Data & Research",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-600 to-green-500",
      tools: ["Perplexity AI", "Wolfram Alpha"],
      description: "Research and analyze data effectively"
    }
  ];

  const promptExamples = [
    {
      type: "Poor",
      text: "Make a video",
      color: "bg-red-50 border-red-200 text-red-800",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />
    },
    {
      type: "Better",
      text: "Create a video about photosynthesis",
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
      icon: <Clock className="w-5 h-5 text-yellow-500" />
    },
    {
      type: "Excellent",
      text: "Create a 2-minute educational video about photosynthesis for high school students, including animated diagrams of chloroplasts and the chemical equation",
      color: "bg-green-50 border-green-200 text-green-800",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ];

  const clearMethod = [
    {
      letter: "C",
      word: "Context",
      description: "What's the situation?",
      example: "For my biology project...",
      color: "bg-green-100 text-green-700"
    },
    {
      letter: "L",
      word: "Length",
      description: "How long should it be?",
      example: "2-minute video...",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      letter: "E",
      word: "Example",
      description: "Show what you want",
      example: "Like a documentary style...",
      color: "bg-teal-100 text-teal-700"
    },
    {
      letter: "A",
      word: "Audience",
      description: "Who is this for?",
      example: "High school students...",
      color: "bg-green-100 text-green-700"
    },
    {
      letter: "R",
      word: "Role",
      description: "What role should AI play?",
      example: "Act as a science teacher...",
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  const ethicalGuidelines = [
    {
      title: "Always Disclose AI Use",
      description: "Be transparent when you use AI tools for assignments",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      good: "Mentioning AI assistance in your work"
    },
    {
      title: "Use AI as Learning Aid",
      description: "Don't let AI replace your thinking process",
      icon: <Brain className="w-6 h-6 text-green-600" />,
      good: "Using AI to understand concepts better"
    },
    {
      title: "Verify Information",
      description: "Always fact-check AI-generated content",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      good: "Cross-checking facts from reliable sources"
    },
    {
      title: "Understand Content",
      description: "Make sure you understand what you're submitting",
      icon: <Lightbulb className="w-6 h-6 text-green-600" />,
      good: "Explaining the work in your own words"
    }
  ];

  const handleQuizAnswer = (questionId, answer, isCorrect) => {
    setSelectedQuizAnswer(prev => ({
      ...prev,
      [questionId]: { answer, isCorrect }
    }));
  };

  const quizQuestions = [
    {
      id: 1,
      question: "What makes a good AI prompt?",
      options: [
        { text: "Short and vague", isCorrect: false },
        { text: "Clear and specific", isCorrect: true },
        { text: "Complex and confusing", isCorrect: false },
        { text: "One word only", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "Which is the best prompt example?",
      options: [
        { text: "Make something", isCorrect: false },
        { text: "Create an image", isCorrect: false },
        { text: "Create a detailed diagram of the human heart for biology class", isCorrect: true },
        { text: "Draw", isCorrect: false }
      ]
    }
  ];

  return (
    <div
      id="s-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-4"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-700"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 animate-bounce">
                <Brain className="w-20 h-20 text-white drop-shadow-lg" />
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent leading-tight">
              Mastering AI Tools
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Unlock the power of Artificial Intelligence to enhance your creativity, learning, and productivity
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
                🎯 Learn Smart Prompting
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
                🚀 Explore AI Tools
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
                ⚡ Create Amazing Content
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          <div className="relative">
            <div className="flex items-center justify-center mb-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mr-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                What You'll Master
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Wand2 className="w-8 h-8" />, 
                  title: "AI Prompts", 
                  desc: "Write effective instructions for AI",
                  color: "bg-green-50 border-green-200 text-green-700",
                  iconBg: "bg-green-500"
                },
                { 
                  icon: <Video className="w-8 h-8" />, 
                  title: "Video Creation", 
                  desc: "Make videos from text descriptions",
                  color: "bg-emerald-50 border-emerald-200 text-emerald-700",
                  iconBg: "bg-emerald-500"
                },
                { 
                  icon: <Image className="w-8 h-8" />, 
                  title: "Image Generation", 
                  desc: "Create stunning visuals with AI",
                  color: "bg-teal-50 border-teal-200 text-teal-700",
                  iconBg: "bg-teal-500"
                },
                { 
                  icon: <Shield className="w-8 h-8" />, 
                  title: "Ethical AI Use", 
                  desc: "Use AI responsibly and transparently",
                  color: "bg-green-50 border-green-200 text-green-700",
                  iconBg: "bg-green-500"
                }
              ].map((objective, index) => (
                <div
                  key={index}
                  className={`${objective.color} border-2 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-lg ${
                    visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`${objective.iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto text-white shadow-lg`}>
                    {objective.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">{objective.title}</h3>
                  <p className="text-sm text-center opacity-80">{objective.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What is AI Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is AI?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-500 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Artificial Intelligence</strong> is like having a super-smart assistant that can help you with almost anything - from writing essays to creating videos, solving math problems, and generating amazing artwork.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-green-600 mr-3" />
                  Think of AI as:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">A creative partner that never gets tired</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-gray-700">A tutor available 24/7</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <p className="text-gray-700">A tool that learns from examples</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4">AI Can Help You:</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "📝", text: "Write Essays" },
                    { icon: "🎥", text: "Create Videos" },
                    { icon: "🎨", text: "Generate Art" },
                    { icon: "🧮", text: "Solve Math" },
                    { icon: "🔬", text: "Explain Science" },
                    { icon: "🎵", text: "Compose Music" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-sm font-semibold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Prompts */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg">
                <PenTool className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Understanding AI Prompts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A prompt is like giving directions to a very smart assistant. The clearer your directions, the better results you'll get!
            </p>
          </div>
          
          {/* Prompt Examples Carousel */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Prompt Examples</h3>
              <div className="text-sm text-gray-500 mb-6">Showing example {currentPromptExample + 1} of 3</div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className={`${promptExamples[currentPromptExample].color} border-2 rounded-2xl p-8 transition-all duration-500 transform hover:scale-105`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {promptExamples[currentPromptExample].icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">
                      {promptExamples[currentPromptExample].type} Prompt
                    </h4>
                    <p className="text-lg leading-relaxed">
                      "{promptExamples[currentPromptExample].text}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {promptExamples.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPromptExample === index ? 'bg-green-500 scale-125' : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* CLEAR Method */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The CLEAR Method
              </h3>
              <p className="text-xl text-gray-600">
                Follow these 5 steps to write amazing AI prompts
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {clearMethod.map((step, index) => (
                <div
                  key={index}
                  className={`${step.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg ${
                    visibleCards.includes(index + 10) ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 10) * 150}ms` }}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-green-600">{step.letter}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{step.word}</h4>
                  <p className="text-sm mb-4 opacity-80">{step.description}</p>
                  <div className="bg-white/70 rounded-lg p-3 text-xs">
                    <strong>Example:</strong> {step.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tool Categories */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              AI Tool Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different types of AI tools and what they can do for you
            </p>
          </div>
          
          {/* Featured Category (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${toolCategories[activeToolCategory].color} text-white rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-xl`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    {toolCategories[activeToolCategory].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{toolCategories[activeToolCategory].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{toolCategories[activeToolCategory].description}</p>
                    <div className="flex flex-wrap gap-2">
                      {toolCategories[activeToolCategory].tools.map((tool, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
            </div>
            
            {/* All Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {toolCategories.map((category, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer ${
                    visibleCards.includes(index + 15) ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 15) * 100}ms` }}
                  onClick={() => setActiveToolCategory(index)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practical AI Applications */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl p-4 shadow-lg">
                <Monitor className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Practical AI Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how to use AI tools for your school projects
            </p>
          </div>

          {/* Application Examples */}
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Creating a School Presentation",
                icon: <Monitor className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                steps: [
                  { step: "Research", tool: "Perplexity AI", desc: "Gather facts and statistics" },
                  { step: "Outline", tool: "ChatGPT", desc: "Structure your presentation" },
                  { step: "Visuals", tool: "DALL-E", desc: "Create custom images" },
                  { step: "Video", tool: "Pictory AI", desc: "Add engaging video content" },
                  { step: "Audio", tool: "Murf AI", desc: "Professional voiceover" }
                ]
              },
              {
                title: "Writing a Research Essay",
                icon: <PenTool className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-500",
                steps: [
                  { step: "Ideas", tool: "ChatGPT", desc: "Brainstorm and outline" },
                  { step: "Research", tool: "Perplexity AI", desc: "Find current information" },
                  { step: "Writing", tool: "Claude", desc: "Draft and refine content" },
                  { step: "Editing", tool: "Grammarly AI", desc: "Polish your writing" },
                  { step: "Citations", tool: "Manual", desc: "Add proper references" }
                ]
              }
            ].map((application, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500"
              >
                <div className={`bg-gradient-to-r ${application.color} text-white rounded-2xl p-6 mb-8`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      {application.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{application.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {application.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                    >
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {stepIndex + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-gray-800">{step.step}</h4>
                          <span className="text-green-600 font-semibold">→ {step.tool}</span>
                        </div>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical AI Use */}
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 shadow-xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Using AI Ethically
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be responsible and transparent when using AI tools for your studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ethicalGuidelines.map((guideline, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  visibleCards.includes(index + 20) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 20) * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-xl p-3 flex-shrink-0">
                    {guideline.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{guideline.title}</h3>
                    <p className="text-gray-600 mb-4">{guideline.description}</p>
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                      <p className="text-sm text-green-700">
                        <strong>Good practice:</strong> {guideline.good}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Best Practices Checklist */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              Best Practices Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Always disclose when you use AI tools",
                "Use AI to understand concepts, not replace thinking",
                "Verify all AI-generated information",
                "Make sure you understand the content",
                "Follow your school's AI policy",
                "Use AI as a learning aid, not a shortcut",
                "Cite AI assistance when required",
                "Don't submit AI work as entirely your own"
              ].map((practice, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-green-50 rounded-lg transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Quiz Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Test Your Knowledge
            </h2>
            <p className="text-xl text-gray-600">
              Check your understanding of AI tools and prompting
            </p>
          </div>

          <div className="space-y-8">
            {quizQuestions.map((question) => (
              <div key={question.id} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {question.options.map((option, index) => {
                    const isSelected = selectedQuizAnswer[question.id]?.answer === index;
                    const isAnswered = selectedQuizAnswer[question.id] !== undefined;
                    const isCorrect = option.isCorrect;
                    
                    let buttonClass = "p-4 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md ";
                    
                    if (!isAnswered) {
                      buttonClass += "bg-white border-gray-200 hover:border-green-300 hover:bg-green-50 cursor-pointer";
                    } else if (isSelected) {
                      buttonClass += isCorrect 
                        ? "bg-green-100 border-green-500 text-green-800" 
                        : "bg-red-100 border-red-500 text-red-800";
                    } else if (isCorrect) {
                      buttonClass += "bg-green-100 border-green-500 text-green-800";
                    } else {
                      buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
                    }

                    return (
                      <button
                        key={index}
                        className={buttonClass}
                        onClick={() => !isAnswered && handleQuizAnswer(question.id, index, isCorrect)}
                        disabled={isAnswered}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isAnswered && isCorrect 
                              ? "bg-green-500 border-green-500 text-white" 
                              : isAnswered && isSelected && !isCorrect
                              ? "bg-red-500 border-red-500 text-white"
                              : "border-gray-300"
                          }`}>
                            {isAnswered && isCorrect && <CheckCircle className="w-4 h-4" />}
                            {isAnswered && isSelected && !isCorrect && <AlertTriangle className="w-4 h-4" />}
                          </div>
                          <span className="font-medium">{option.text}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedQuizAnswer[question.id] && (
                  <div className={`mt-4 p-4 rounded-xl ${
                    selectedQuizAnswer[question.id].isCorrect 
                      ? "bg-green-50 border border-green-200" 
                      : "bg-red-50 border border-red-200"
                  }`}>
                    <p className={`font-semibold ${
                      selectedQuizAnswer[question.id].isCorrect ? "text-green-800" : "text-red-800"
                    }`}>
                      {selectedQuizAnswer[question.id].isCorrect ? "Correct! 🎉" : "Not quite right. 🤔"}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedQuizAnswer[question.id].isCorrect 
                        ? "Great job! You understand the importance of clear and specific prompts."
                        : "Good prompts are clear, specific, and provide context to help AI understand exactly what you need."
                      }
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Tips Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-4 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Pro Tips & Tricks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced techniques to get even better results from AI tools
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Role-Playing Prompts",
                icon: <Users className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                tip: "Ask AI to act as a specific character",
                example: "Act as a biology teacher explaining photosynthesis to Class 11 students",
                benefit: "Gets more targeted, appropriate responses"
              },
              {
                title: "Step-by-Step Instructions",
                icon: <Layers className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-500",
                tip: "Break complex tasks into numbered steps",
                example: "Explain in 5 steps: 1. First identify... 2. Then calculate...",
                benefit: "Clearer, more organized explanations"
              },
              {
                title: "Constraint-Based Prompts",
                icon: <Eye className="w-8 h-8" />,
                color: "from-teal-500 to-green-600",
                tip: "Set specific limits and requirements",
                example: "Explain in exactly 200 words using simple vocabulary",
                benefit: "Gets responses that fit your exact needs"
              }
            ].map((tip, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${tip.color} text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl ${
                  visibleCards.includes(index + 25) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 25) * 200}ms` }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 w-fit mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-sm opacity-90 mb-4">{tip.tip}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold mb-1">Example:</p>
                  <p className="text-sm italic">"{tip.example}"</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-xs font-semibold mb-1">Benefit:</p>
                  <p className="text-sm">{tip.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 border-l-4 border-orange-400 shadow-xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-4 shadow-lg">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Common Mistakes to Avoid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from these frequent errors to get better AI results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                mistake: "Vague Prompts",
                wrong: "Help with math",
                right: "Explain the quadratic formula and show me how to use it to solve x² + 5x + 6 = 0",
                icon: <PenTool className="w-6 h-6" />
              },
              {
                mistake: "No Context",
                wrong: "Write an essay about pollution",
                right: "Write an introduction paragraph for my Class 12 environmental science essay about air pollution in Delhi",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                mistake: "Accepting Everything Blindly",
                wrong: "Using AI responses without checking",
                right: "Always verify facts, especially dates, statistics, and scientific data",
                icon: <Eye className="w-6 h-6" />
              },
              {
                mistake: "Not Iterating",
                wrong: "Stopping at the first response",
                right: "Ask follow-up questions: 'Can you make this simpler?' or 'Add more examples'",
                icon: <RotateCcw className="w-6 h-6" />
              }
            ].map((mistake, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-xl p-3 flex-shrink-0">
                    <div className="text-orange-600">
                      {mistake.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{mistake.mistake}</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm font-semibold text-red-800 mb-1">❌ Wrong:</p>
                        <p className="text-red-700 italic">"{mistake.wrong}"</p>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-semibold text-green-800 mb-1">✅ Right:</p>
                        <p className="text-green-700 italic">"{mistake.right}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future of AI Section */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Future of AI Tools
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                What's coming next in the world of AI and education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Multi-modal AI",
                  desc: "AI that works with text, images, and audio together",
                  icon: <Layers className="w-8 h-8" />
                },
                {
                  title: "Personal AI Tutors",
                  desc: "AI that adapts to your unique learning style",
                  icon: <Brain className="w-8 h-8" />
                },
                {
                  title: "Real-time Collaboration",
                  desc: "AI that works with you as you create",
                  icon: <Users className="w-8 h-8" />
                },
                {
                  title: "Subject-Specific AI",
                  desc: "Specialized tools for different school subjects",
                  icon: <BookOpen className="w-8 h-8" />
                }
              ].map((trend, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 w-fit mb-4">
                    {trend.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{trend.title}</h3>
                  <p className="text-sm opacity-90">{trend.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Skills You'll Need for the Future</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Wand2 className="w-4 h-4" />
                    <span>Prompt Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Literacy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Critical Thinking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Ethical Reasoning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module Summary */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Module Summary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key takeaways from mastering AI tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Prompting",
                points: [
                  "Use the CLEAR method",
                  "Be specific and detailed",
                  "Provide context and examples",
                  "Iterate and refine"
                ],
                icon: <Wand2 className="w-8 h-8 text-green-600" />
              },
              {
                title: "Tool Selection",
                points: [
                  "Choose the right tool for the task",
                  "Understand each tool's strengths",
                  "Combine multiple tools effectively",
                  "Stay updated with new tools"
                ],
                icon: <Cpu className="w-8 h-8 text-emerald-600" />
              },
              {
                title: "Ethical Use",
                points: [
                  "Always disclose AI assistance",
                  "Verify information accuracy",
                  "Use AI to enhance learning",
                  "Follow academic integrity rules"
                ],
                icon: <Shield className="w-8 h-8 text-teal-600" />
              }
            ].map((summary, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {summary.icon}
                  <h3 className="text-xl font-bold text-gray-800">{summary.title}</h3>
                </div>
                <ul className="space-y-2">
                  {summary.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🎉 Congratulations!</h3>
            <p className="text-lg mb-6">
              You've completed the AI Tools module! You now have the skills to use AI effectively and ethically.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block">
              <p className="text-sm font-semibold">
                Remember: AI is your assistant, not your replacement. Use it to enhance your learning and creativity!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Module4AITools;