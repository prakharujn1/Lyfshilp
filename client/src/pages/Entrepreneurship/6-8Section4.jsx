import React, { useState, useEffect } from 'react';

const Module4 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTransformation, setCurrentTransformation] = useState(0);
  const [hoveredTool, setHoveredTool] = useState(null);

  const aiTransformations = [
    { 
      area: "Idea Generation", 
      description: "AI tools can suggest new business ideas by analyzing trends and data",
      icon: "💡",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-100 text-yellow-700"
    },
    { 
      area: "Market Research", 
      description: "AI can quickly analyze large amounts of data to identify market opportunities",
      icon: "📊",
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-100 text-blue-700"
    },
    { 
      area: "Customer Service", 
      description: "Chatbots and virtual assistants provide 24/7 support",
      icon: "🤖",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-100 text-green-700"
    },
    { 
      area: "Product Development", 
      description: "AI helps design and test products faster and more efficiently",
      icon: "🛠️",
      color: "from-purple-400 to-violet-400",
      bgColor: "bg-purple-100 text-purple-700"
    },
    { 
      area: "Marketing", 
      description: "AI personalizes marketing messages and targets the right audience",
      icon: "🎯",
      color: "from-pink-400 to-red-400",
      bgColor: "bg-pink-100 text-pink-700"
    }
  ];

  const realLifeExamples = [
    {
      title: "AI-powered logo makers",
      description: "Create professional logos in seconds",
      icon: "🖼️",
      gradient: "from-indigo-500 to-purple-600",
      features: ["Instant design", "Multiple variations", "Professional quality"]
    },
    {
      title: "Chatbots for customer support",
      description: "Answer customer queries instantly",
      icon: "💬",
      gradient: "from-blue-500 to-cyan-600",
      features: ["24/7 availability", "Instant responses", "Multiple languages"]
    },
    {
      title: "Recommendation engines",
      description: "Suggest products based on preferences",
      icon: "🛒",
      gradient: "from-green-500 to-emerald-600",
      features: ["Personalized suggestions", "Increased sales", "Better user experience"]
    }
  ];

  const aiTools = [
    {
      category: "No-code app builders",
      icon: "🛠️",
      description: "Build apps without coding knowledge",
      examples: ["Bubble", "Glide", "Adalo"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      category: "AI writing assistants",
      icon: "✍️",
      description: "Generate content and copy automatically",
      examples: ["Content creation", "Email writing", "Social media posts"],
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Data analysis platforms",
      icon: "📊",
      description: "Analyze business data and trends",
      examples: ["Trend analysis", "Customer insights", "Performance metrics"],
      color: "from-purple-400 to-violet-500"
    }
  ];

  const challenges = [
    {
      title: "Ethical concerns",
      icon: "⚖️",
      description: "Ensuring AI is fair and unbiased",
      details: "AI systems must be designed to treat all users fairly and avoid discrimination"
    },
    {
      title: "Data privacy",
      icon: "🔒",
      description: "Protecting user information",
      details: "Companies must secure personal data and use it responsibly"
    },
    {
      title: "Accessibility",
      icon: "🌐",
      description: "Making AI tools available to all",
      details: "Ensuring AI benefits reach everyone, not just those with resources"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTransformation((prev) => (prev + 1) % aiTransformations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-card');
            setVisibleCards(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-card]').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 animate-pulse">
              <span className="text-4xl">🤖</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              The Role of AI in Entrepreneurship
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Discover how Artificial Intelligence is revolutionizing the way we start and run businesses! 🚀✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* What is AI */}
        <div 
          data-card="definition"
          className={`mb-16 transform transition-all duration-1000 ${visibleCards.includes('definition') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-cyan-100">
            <div className="text-center mb-10">
              <span className="text-6xl mb-6 block animate-bounce">🧠</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What is Artificial Intelligence (AI)?
              </h2>
              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-xl text-gray-800 leading-relaxed">
                  AI refers to <span className="text-cyan-600 font-bold">computer systems</span> that can perform tasks that usually require 
                  <span className="text-blue-600 font-bold"> human intelligence</span>, such as learning, reasoning, and problem-solving.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-4 block">🤖</span>
                <h3 className="font-bold text-purple-800 mb-2">Learning</h3>
                <p className="text-sm text-gray-700">AI can learn from data and improve over time</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-4 block">🧩</span>
                <h3 className="font-bold text-green-800 mb-2">Reasoning</h3>
                <p className="text-sm text-gray-700">AI can analyze information and make logical decisions</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <span className="text-4xl mb-4 block">🔧</span>
                <h3 className="font-bold text-orange-800 mb-2">Problem-Solving</h3>
                <p className="text-sm text-gray-700">AI can find solutions to complex challenges</p>
              </div>
            </div>
          </div>
        </div>

        {/* How AI is Transforming */}
        <div 
          data-card="transforming"
          className={`mb-16 transform transition-all duration-1000 delay-200 ${visibleCards.includes('transforming') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🚀</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How AI is Transforming Entrepreneurship
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                AI is revolutionizing every aspect of starting and running a business. Here's how:
              </p>
            </div>

            {/* Interactive Transformation Steps */}
            <div className="relative max-w-5xl mx-auto">
              <div className="grid gap-6">
                {aiTransformations.map((transformation, index) => (
                  <div 
                    key={index}
                    className={`relative transition-all duration-700 ${
                      currentTransformation === index ? 'scale-105 z-10' : 'scale-100'
                    }`}
                  >
                    <div className={`${transformation.bgColor} rounded-2xl p-6 border-2 ${
                      currentTransformation === index ? 'border-indigo-400 shadow-xl' : 'border-transparent shadow-md'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-4xl mr-6">{transformation.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{transformation.area}</h3>
                            <p className="text-sm opacity-80">{transformation.description}</p>
                          </div>
                        </div>
                        <div className="text-3xl font-bold opacity-60">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    {index < aiTransformations.length - 1 && (
                      <div className="flex justify-center my-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <span className="text-2xl text-gray-400">⬇️</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-Life Examples */}
        <div 
          data-card="examples"
          className={`mb-16 transform transition-all duration-1000 delay-400 ${visibleCards.includes('examples') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-green-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">💼</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Real-Life Examples
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                See how AI is already helping entrepreneurs succeed in the real world:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {realLifeExamples.map((example, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`h-24 bg-gradient-to-r ${example.gradient} flex items-center justify-center`}>
                    <span className="text-5xl">{example.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{example.title}</h3>
                    <p className="text-gray-600 mb-4">{example.description}</p>
                    <div className="space-y-2">
                      {example.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools for Young Entrepreneurs */}
        <div 
          data-card="tools"
          className={`mb-16 transform transition-all duration-1000 delay-600 ${visibleCards.includes('tools') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🛠️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                AI Tools for Young Entrepreneurs
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                These AI-powered tools can help you start your entrepreneurial journey:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {aiTools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mb-4 ${hoveredTool === index ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                    <span className="text-2xl text-white">{tool.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{tool.category}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="space-y-2">
                    {tool.examples.map((example, idx) => (
                      <div key={idx} className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-1">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges and Considerations */}
        <div 
          data-card="challenges"
          className={`mb-16 transform transition-all duration-1000 delay-800 ${visibleCards.includes('challenges') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-red-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">⚠️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Challenges and Considerations
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                While AI offers amazing opportunities, we must also be aware of important challenges:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 hover:border-red-300 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-3 block">{challenge.icon}</span>
                    <h3 className="text-xl font-bold text-red-800 mb-2">{challenge.title}</h3>
                    <p className="text-red-700 font-medium mb-3">{challenge.description}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-700">{challenge.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Possibilities */}
        <div 
          data-card="future"
          className={`mb-16 transform transition-all duration-1000 delay-1000 ${visibleCards.includes('future') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <span className="text-6xl mb-6 block">🌟</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Future of AI and Entrepreneurship
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
                As AI continues to evolve, it will create even more opportunities for young entrepreneurs. 
                The key is to stay curious, keep learning, and always consider how technology can help solve real problems!
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <span className="text-3xl mb-3 block">🎓</span>
                  <h3 className="text-xl text-black font-bold mb-2">Keep Learning</h3>
                  <p className="text-sm text-black opacity-90">Stay updated with AI trends and new tools</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <span className="text-3xl mb-3 block">🤝</span>
                  <h3 className="text-xl text-black font-bold mb-2">Use AI Responsibly</h3>
                  <p className="text-sm text-black opacity-90">Always consider ethics and fairness in AI applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          data-card="cta"
          className={`transform transition-all duration-1000 delay-1200 ${visibleCards.includes('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 text-center">
            <span className="text-6xl mb-6 block">🚀</span>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore AI-Powered Entrepreneurship?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The future belongs to entrepreneurs who can harness the power of AI to solve problems and create value. 
              Start exploring AI tools today and see what amazing solutions you can create! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4;