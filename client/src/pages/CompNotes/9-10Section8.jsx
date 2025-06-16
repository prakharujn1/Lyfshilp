import React, { useState, useEffect } from "react";

const Module8 = ({ topicRefs }) => {
  const [activeTab, setActiveTab] = useState('trends');
  const [visibleCards, setVisibleCards] = useState([]);
  const [expandedCareer, setExpandedCareer] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const emergingTrends = [
    {
      id: 1,
      title: "Generative AI",
      icon: "🎨",
      description: "AI that creates new content like text, images, music, and videos.",
      examples: ["ChatGPT - Human-like text generation", "DALL-E 2 - Images from text", "GitHub Copilot - Code writing", "Midjourney - Artistic designs"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      id: 2,
      title: "Edge AI",
      icon: "📱",
      description: "Running AI directly on devices instead of cloud servers.",
      examples: ["Smart cameras with instant face recognition", "Offline voice assistants", "Self-driving cars making split-second decisions"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 3,
      title: "Quantum AI",
      icon: "⚛️",
      description: "Combining quantum computing with artificial intelligence.",
      examples: ["Accelerated drug discovery", "Complex climate modeling", "Advanced encryption methods"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      id: 4,
      title: "AI in AR/VR",
      icon: "🥽",
      description: "AI-powered virtual and augmented reality experiences.",
      examples: ["Virtual AI tutors", "AI-powered virtual workspaces", "Realistic virtual social interactions"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  const technicalCareers = [
    {
      title: "Machine Learning Engineer",
      icon: "🤖",
      description: "Design and implement AI systems that learn from data",
      skills: ["Python, R Programming", "Mathematics & Statistics", "Data Analysis"],
      companies: ["Google", "Microsoft", "Amazon", "Flipkart"],
      salary: "₹8-25 LPA",
      growth: "95%"
    },
    {
      title: "Data Scientist",
      icon: "📊",
      description: "Extract insights from large datasets to solve business problems",
      skills: ["Statistics", "Machine Learning", "Data Visualization"],
      companies: ["Netflix", "Uber", "Paytm", "BYJU'S"],
      salary: "₹6-20 LPA",
      growth: "85%"
    },
    {
      title: "AI Research Scientist",
      icon: "🔬",
      description: "Develop new AI algorithms and techniques",
      skills: ["Advanced Mathematics", "Research Methodology", "Programming"],
      companies: ["Google DeepMind", "Microsoft Research", "OpenAI"],
      salary: "₹15-40 LPA",
      growth: "75%"
    },
    {
      title: "Robotics Engineer",
      icon: "🦾",
      description: "Design and build AI-powered robots",
      skills: ["Mechanical Engineering", "AI Programming", "Electronics"],
      companies: ["Tesla", "Boston Dynamics", "Mahindra"],
      salary: "₹10-30 LPA",
      growth: "80%"
    }
  ];

  const nonTechnicalCareers = [
    {
      title: "AI Product Manager",
      icon: "💼",
      description: "Guide development of AI-powered products and services",
      skills: ["Business Strategy", "Communication", "UX Understanding"],
      importance: "Bridge between technical teams and business needs"
    },
    {
      title: "AI Ethics Specialist",
      icon: "⚖️",
      description: "Ensure AI systems are fair, transparent, and responsible",
      skills: ["Philosophy", "Law", "Policy Analysis"],
      importance: "Navigate AI regulations and ethical concerns"
    },
    {
      title: "AI Trainer/Content Creator",
      icon: "🎯",
      description: "Teach AI concepts and train AI systems",
      skills: ["Teaching Ability", "Subject Expertise", "Communication"],
      importance: "Bridge human knowledge and AI learning"
    },
    {
      title: "AI Business Analyst",
      icon: "📈",
      description: "Analyze how AI can solve business problems",
      skills: ["Business Analysis", "AI Understanding", "Data Interpretation"],
      importance: "Help companies implement AI strategically"
    }
  ];

  const essentialSkills = [
    {
      category: "Digital Literacy",
      icon: "💻",
      skills: ["Understanding digital technologies", "Learning new tools quickly", "Basic data & algorithms knowledge"],
      color: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      category: "Critical Thinking",
      icon: "🧠",
      skills: ["Evaluating AI outputs", "Questioning assumptions", "Understanding AI limitations"],
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      category: "Human-Centric Skills",
      icon: "❤️",
      skills: ["Emotional intelligence", "Creative problem-solving", "Leadership & collaboration"],
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      category: "Adaptability",
      icon: "🔄",
      skills: ["Continuous learning mindset", "Flexibility to pivot", "Comfort with change"],
      color: "bg-gradient-to-r from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div
      id="m-8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-8"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">🚀</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
              Future of AI & Careers
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Discover emerging AI trends and exciting career opportunities in the AI revolution
            </p>
          </div>
          
          <div className="absolute top-8 right-8 text-4xl opacity-30 animate-spin">🤖</div>
          <div className="absolute bottom-8 left-8 text-3xl opacity-30 animate-pulse">💡</div>
          <div className="absolute top-1/2 left-8 text-2xl opacity-20 animate-bounce" style={{animationDelay: "0.5s"}}>⭐</div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'trends', label: 'Emerging Trends', icon: '📈' },
              { id: 'technical', label: 'Technical Careers', icon: '💻' },
              { id: 'nontechnical', label: 'Non-Technical Careers', icon: '👔' },
              { id: 'skills', label: 'Essential Skills', icon: '🎯' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Emerging Trends Section */}
        {activeTab === 'trends' && (
          <div className="mb-12 animate-in slide-in-from-right duration-500">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                🌟 Emerging Trends in AI
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {emergingTrends.map((trend, index) => (
                <div
                  key={trend.id}
                  className={`bg-gradient-to-br ${trend.bgColor} rounded-3xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                    visibleCards.includes(index) ? 'animate-in slide-in-from-bottom duration-700' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 animate-pulse">{trend.icon}</div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${trend.color} bg-clip-text text-transparent mb-3`}>
                      {trend.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {trend.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <span className="text-lg">✨</span>
                      Current Examples:
                    </h4>
                    {trend.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/50 rounded-lg p-3">
                        <span className="text-green-500 mt-1">•</span>
                        <p className="text-gray-700 font-medium">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Careers Section */}
        {activeTab === 'technical' && (
          <div className="mb-12 animate-in slide-in-from-left duration-500">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                💻 Technical AI Careers
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {technicalCareers.map((career, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setExpandedCareer(expandedCareer === index ? null : index)}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl">
                      {career.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">{career.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{career.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/70 rounded-xl p-3">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Salary Range</div>
                      <div className="text-lg font-bold text-green-600">{career.salary}</div>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3">
                      <div className="text-sm font-semibold text-gray-600 mb-1">Growth Rate</div>
                      <div className="text-lg font-bold text-blue-600">{career.growth}</div>
                    </div>
                  </div>
                  
                  {expandedCareer === index && (
                    <div className="mt-4 space-y-4 animate-in slide-in-from-top duration-300">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                          <span>🛠️</span> Key Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                          <span>🏢</span> Top Companies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.companies.map((company, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Non-Technical Careers Section */}
        {activeTab === 'nontechnical' && (
          <div className="mb-12 animate-in slide-in-from-right duration-500">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                👔 Non-Technical AI Careers
              </span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              You don't need to code to have an amazing career in AI! These roles focus on strategy, ethics, and human aspects of AI.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {nonTechnicalCareers.map((career, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl inline-block">
                      {career.icon}
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-3">{career.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{career.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                        <span>🎯</span> Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, idx) => (
                          <span key={idx} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/70 rounded-xl p-4">
                      <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                        <span>⭐</span> Why It Matters:
                      </h4>
                      <p className="text-gray-700 text-sm">{career.importance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Essential Skills Section */}
        {activeTab === 'skills' && (
          <div className="mb-12 animate-in slide-in-from-bottom duration-500">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🎯 Essential Skills for AI Future
              </span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
              These skills will be valuable regardless of your chosen career path in an AI-driven world.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {essentialSkills.map((skillSet, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-6">
                    <div className={`text-4xl mb-4 ${skillSet.color} p-4 rounded-2xl inline-block text-white`}>
                      {skillSet.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{skillSet.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skillSet.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                        <span className="text-purple-500 mt-1 text-sm">•</span>
                        <p className="text-gray-700 text-sm font-medium">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Career Preparation Tips */}
            <div className="mt-12 bg-gradient-to-r from-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Your AI Career Action Plan</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📅</div>
                  <h4 className="font-semibold mb-2">This Week</h4>
                  <p className="text-sm opacity-90">Try ChatGPT or another AI tool for a school project</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-semibold mb-2">This Month</h4>
                  <p className="text-sm opacity-90">Join online AI communities in your field of interest</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-semibold mb-2">This Year</h4>
                  <p className="text-sm opacity-90">Take a course combining your passion with AI</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="font-semibold mb-2">Long-term</h4>
                  <p className="text-sm opacity-90">Build a portfolio showing AI as your tool</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final Message */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-200 shadow-xl">
          <div className="text-center">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              You Are the AI Generation
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
              You are among the first generation to grow up understanding AI from an early age. 
              This gives you a unique advantage to shape how AI develops and is used in society.
            </p>
            <div className="bg-white/70 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-gray-800 font-medium italic">
                "The future is not something that happens to you — it's something you actively create. 
                Your understanding of AI today will help you become the leaders, innovators, and ethical 
                decision-makers of tomorrow."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module8;