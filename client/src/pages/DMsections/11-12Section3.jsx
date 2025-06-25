import React, { useState, useEffect } from "react";
import {
  Video,
  Image,
  Type,
  Play,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
  Camera,
  Edit3,
  Smartphone,
  Monitor,
  Calendar,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Zap,
  Star,
  Download,
  Globe,
} from "lucide-react";

const Module3ContentCreation = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTool, setCurrentTool] = useState(0);
  const [currentContentType, setCurrentContentType] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentType((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const contentTypes = [
    {
      title: "Reels/Short Videos",
      duration: "15-60 sec",
      description: "Best for engagement and reach",
      features: ["Relatable content", "Trendy music", "Quick storytelling"],
      example: "3 Study Hacks I Wish I Knew in Class 10",
      icon: <Video className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Carousels",
      duration: "Swipe Posts",
      description: "Great for teaching in steps",
      features: ["Step-by-step content", "Build curiosity", "Educational"],
      example: "Want to stop procrastinating? → Tips → Follow for more",
      icon: <ArrowRight className="w-8 h-8" />,
      color: "from-green-600 to-teal-500",
    },
    {
      title: "Static Posts",
      duration: "Single Image",
      description: "Perfect for quotes and info",
      features: ["Motivational content", "Easy to design", "Quick to read"],
      example:
        "Monday Motivation: You don't have to be perfect, just consistent",
      icon: <Image className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Stories",
      duration: "24 hours",
      description: "Quick updates and polls",
      features: ["Behind-the-scenes", "Interactive polls", "Close connection"],
      example: "Studying or chilling today? 🤔 Vote in poll!",
      icon: <Camera className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
    },
    {
      title: "Blogs",
      duration: "Long-form",
      description: "Deep-dive topics with SEO value",
      features: ["Detailed content", "Long-term value", "SEO benefits"],
      example: "How I Balanced Boards + JEE Prep with timelines",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Live Sessions",
      duration: "Real-time",
      description: "Interactive engagement",
      features: ["Q&A sessions", "Real-time chat", "Product launches"],
      example: "Going live tonight to share my exact study routine!",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-500",
    },
  ];

  const tools = [
    {
      name: "Canva",
      use: "Design posts, reels, logos",
      why: "Free templates, drag-and-drop",
      icon: <Edit3 className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      name: "CapCut",
      use: "Video editing",
      why: "Easy effects, transitions, music",
      icon: <Video className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
    {
      name: "InShot",
      use: "Editing reels and stories",
      why: "Good for mobile users",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-teal-500",
    },
    {
      name: "Notion",
      use: "Plan content ideas and scripts",
      why: "Clean layout, easy to organize",
      icon: <Type className="w-6 h-6" />,
      color: "bg-green-600",
    },
    {
      name: "ChatGPT",
      use: "Caption writing, idea generation",
      why: "Fast and creative suggestions",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-emerald-600",
    },
    {
      name: "Pixabay/Pexels",
      use: "Free stock images and videos",
      why: "High-quality visuals for posts",
      icon: <Download className="w-6 h-6" />,
      color: "bg-teal-600",
    },
  ];

  const contentQualities = [
    {
      title: "Useful",
      description: "It teaches or informs",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Entertaining",
      description: "It makes people smile or relate",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Emotional",
      description: "It connects with feelings",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Shareable",
      description: "People want to forward it",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
    },
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Edit3 className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Creating Great Content
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of content creation with formats, tools, and tips
              that get results
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* What is Content Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Type className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  What is Content?
                </h2>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-green-600">Content</strong> is
                  anything you post, share, write, record, or design to inform,
                  entertain, or engage your audience.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">
                      The Goal:
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg font-medium">
                    Good content gets people to{" "}
                    <strong className="text-green-600">
                      stop, look, think, and act
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Content Includes:
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Video className="w-6 h-6" />, text: "Videos" },
                    { icon: <Image className="w-6 h-6" />, text: "Images" },
                    {
                      icon: <Type className="w-6 h-6" />,
                      text: "Text Captions",
                    },
                    { icon: <Play className="w-6 h-6" />, text: "Reels" },
                    { icon: <Camera className="w-6 h-6" />, text: "Stories" },
                    { icon: <BookOpen className="w-6 h-6" />, text: "Blogs" },
                    { icon: <Users className="w-6 h-6" />, text: "Podcasts" },
                    {
                      icon: <Globe className="w-6 h-6" />,
                      text: "Infographics",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-green-600">{item.icon}</div>
                      <span className="text-gray-700 font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Content Matters */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Does Content Matter in Digital Marketing?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Discovery",
                description: "It helps people discover your brand",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Trust Building",
                description: "It builds trust and personality",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Action Driver",
                description:
                  "It drives actions (likes, shares, follows, purchases)",
                color: "from-teal-500 to-green-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${
                  item.color
                } text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Example in Action
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                You post a funny reel about "types of students during exams." It
                goes viral, brings in new followers, and then you promote your
                study planner for sale. That's content doing marketing!
              </p>
            </div>
          </div>
        </div>

        {/* Content Types Showcase */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Content Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master these main content types used by digital marketers and
              creators
            </p>
          </div>

          {/* Featured Content Type */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">
                Currently Highlighting
              </div>
              <div
                className={`bg-gradient-to-r ${contentTypes[currentContentType].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-6xl">
                    {contentTypes[currentContentType].icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">
                      {contentTypes[currentContentType].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-2">
                      {contentTypes[currentContentType].duration}
                    </p>
                    <p className="text-lg opacity-80 mb-4">
                      {contentTypes[currentContentType].description}
                    </p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm font-medium">
                        Example: {contentTypes[currentContentType].example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Content Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentContentType === index
                    ? "ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100"
                    : ""
                } ${
                  visibleCards.includes(index) ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentContentType(index)}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-green-600 font-medium mb-3">
                    {type.duration}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Creation Tools */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Content Creation Tools for Beginners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential tools to create professional-looking content without
              breaking the bank
            </p>
          </div>

          {/* Featured Tool */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Tool Spotlight</div>
              <div
                className={`${tools[currentTool].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}
              >
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-5xl">{tools[currentTool].icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">
                      {tools[currentTool].name}
                    </h3>
                    <p className="text-xl opacity-90 mb-2">
                      {tools[currentTool].use}
                    </p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm font-medium">
                        Why it's great: {tools[currentTool].why}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTool === index
                    ? "ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100"
                    : ""
                } ${
                  visibleCards.includes(index) ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setCurrentTool(index)}
              >
                <div className="text-center">
                  <div
                    className={`${tool.color} text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4`}
                  >
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{tool.use}</p>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-xs text-green-600 font-medium">
                      {tool.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Content Great */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Makes Content "Great"?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The best content usually checks these 4 boxes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentQualities.map((quality, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${
                  quality.color
                } text-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{quality.icon}</div>
                <h3 className="text-xl font-bold mb-3">{quality.title}</h3>
                <p className="text-white/90">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Formula */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🪄</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Content Formula
            </h2>
            <p className="text-xl text-gray-600">
              A simple formula to make your content effective
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 text-center flex-1">
                <Target className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">HOOK</h3>
                <p className="text-white/90">Grab attention first</p>
              </div>

              <ArrowRight className="w-8 h-8 text-green-600 hidden md:block" />

              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl p-6 text-center flex-1">
                <Star className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">VALUE</h3>
                <p className="text-white/90">Provide useful content</p>
              </div>

              <ArrowRight className="w-8 h-8 text-green-600 hidden md:block" />

              <div className="bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-2xl p-6 text-center flex-1">
                <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">CALL TO ACTION</h3>
                <p className="text-white/90">Tell them what to do next</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Example Post:
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-700">
                    <strong className="text-green-600">Hook:</strong> 🧠 "Study
                    smarter, not harder!"
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-500">
                  <p className="text-gray-700">
                    <strong className="text-emerald-600">Value:</strong> 📌
                    "Here are 3 memory tricks that actually work..."
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-teal-500">
                  <p className="text-gray-700">
                    <strong className="text-teal-600">Call to Action:</strong>{" "}
                    ✅ "Save this for your next revision session."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Planning */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Plan Before You Post
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistency matters more than perfection. Create a content
              calendar to stay organized.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Example Weekly Plan
              </h3>
              <div className="space-y-4">
                {[
                  {
                    day: "Monday",
                    format: "Carousel",
                    topic: "Time-blocking study method",
                    color: "bg-green-100 text-green-700",
                  },
                  {
                    day: "Wednesday",
                    format: "Reel",
                    topic: "Study motivation with trending audio",
                    color: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    day: "Friday",
                    format: "Story",
                    topic: "Poll: Are you a night owl or early bird?",
                    color: "bg-teal-100 text-teal-700",
                  },
                  {
                    day: "Sunday",
                    format: "Static Post",
                    topic: "Quote of the week",
                    color: "bg-green-100 text-green-700",
                  },
                ].map((item, index) => (
                  <div key={index} className={`${item.color} rounded-lg p-4`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold">{item.day}</span>
                      <span className="text-sm font-medium px-2 py-1 bg-white rounded">
                        {item.format}
                      </span>
                    </div>
                    <p className="text-sm">{item.topic}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Planning Tools
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Notion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Google Sheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Simple notebook</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Phone calendar</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Planning Tips
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">
                        Plan 1 week ahead
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      Reduces last-minute stress
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">
                        Batch similar content
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      Record 3 reels in one session
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">
                        Keep a backup list
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      Ideas for when you're stuck
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Life Student Examples */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how other students are creating amazing content and building
              their presence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya, Class 11",
                content: "Study organization reels",
                tool: "Canva for covers",
                result: "5K followers in 3 months",
                icon: <Video className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "Arjun, Class 12",
                content: "Biology notes carousels",
                tool: "Posted every Tuesday",
                result: "Helping 100+ students",
                icon: <BookOpen className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-500",
              },
              {
                name: "Sneha, Budget Tech",
                content: "Phone review videos",
                tool: "CapCut for editing",
                result: "Brand collaborations",
                icon: <Smartphone className="w-8 h-8" />,
                color: "from-teal-500 to-green-500",
              },
            ].map((student, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${
                  student.color
                } text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 6)
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 6) * 200}ms` }}
              >
                <div className="text-center">
                  <div className="mb-4">{student.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-white/90">{student.content}</p>
                    <p className="text-white/80 text-sm">{student.tool}</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm font-medium">
                      Result: {student.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Remember these essential points about content creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Content is King
                  </h3>
                </div>
                <p className="text-gray-600">
                  Good content helps people discover your brand, builds trust,
                  and drives action. It's the foundation of digital marketing.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Hook + Value + CTA
                  </h3>
                </div>
                <p className="text-gray-600">
                  Use this simple formula: grab attention with a hook, provide
                  value, then tell people what to do next.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-full p-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Consistency Wins
                  </h3>
                </div>
                <p className="text-gray-600">
                  Posting regularly is more important than making every post
                  perfect. Plan ahead and stay consistent.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                    <Edit3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Tools Make It Easy
                  </h3>
                </div>
                <p className="text-gray-600">
                  Use free tools like Canva, CapCut, and Notion to create
                  professional-looking content without experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Recap */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Vocabulary Recap
            </h2>
            <p className="text-xl text-gray-600">
              Key terms you learned in this module
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                term: "Content",
                meaning: "Anything you post online to inform or engage",
                color: "from-green-500 to-emerald-500",
              },
              {
                term: "Reels",
                meaning: "Short videos for fast reach and engagement",
                color: "from-emerald-500 to-teal-500",
              },
              {
                term: "Carousel",
                meaning: "Multi-slide posts that teach step-by-step",
                color: "from-teal-500 to-green-500",
              },
              {
                term: "Hook",
                meaning: "First line or visual that grabs attention",
                color: "from-green-600 to-emerald-600",
              },
              {
                term: "Call to Action",
                meaning: "What you ask the viewer to do next",
                color: "from-emerald-600 to-teal-600",
              },
              {
                term: "Content Calendar",
                meaning: "Plan showing what to post and when",
                color: "from-teal-600 to-green-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${
                  item.color
                } text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 9)
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 9) * 100}ms` }}
              >
                <h3 className="text-lg font-bold mb-3">{item.term}</h3>
                <p className="text-white/90 text-sm">{item.meaning}</p>
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

export default Module3ContentCreation;