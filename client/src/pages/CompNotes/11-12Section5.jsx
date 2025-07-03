import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Brain, 
  Zap, 
  Shield, 
  Code, 
  Stethoscope, 
  GraduationCap, 
  Sprout,
  Video,
  Globe,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Star,
  BookOpen,
  Heart,
  Cpu,
  Database,
  Monitor
} from 'lucide-react';

const Module5AIFuture = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentJobType, setCurrentJobType] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobType((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const jobTypes = [
    {
      title: "Jobs Being Automated",
      icon: <Monitor className="w-8 h-8" />,
      description: "Routine and repetitive tasks",
      examples: ["Assembly Line Workers", "Data Entry Clerks", "Basic Customer Service", "Cashiers", "Basic Bookkeeping"],
      color: "from-red-100 to-orange-100",
      borderColor: "border-red-300"
    },
    {
      title: "Jobs Being Transformed",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Enhanced human roles",
      examples: ["Doctors with AI diagnosis", "Teachers with AI tutoring", "Lawyers with AI research", "Financial Advisors", "Radiologists"],
      color: "from-yellow-100 to-amber-100",
      borderColor: "border-yellow-300"
    },
    {
      title: "New Jobs Created",
      icon: <Star className="w-8 h-8" />,
      description: "AI-powered opportunities",
      examples: ["ML Engineers", "AI Ethics Consultants", "Prompt Engineers", "Data Scientists", "Robot Technicians"],
      color: "from-emerald-100 to-green-100",
      borderColor: "border-emerald-300"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <Stethoscope className="w-6 h-6" />,
      transformation: "AI diagnoses diseases faster and more accurately",
      example: "Niramai uses AI to detect breast cancer using thermal imaging",
      newJobs: ["AI-assisted surgeons", "Health data analysts", "Telemedicine coordinators"],
      skills: ["Medical knowledge", "Technology understanding", "Patient care"]
    },
    {
      name: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      transformation: "Personalized learning experiences for each student",
      example: "BYJU'S uses AI to customize learning paths for millions of students",
      newJobs: ["Educational tech designers", "AI tutoring developers", "Learning analytics specialists"],
      skills: ["Teaching expertise", "Technology skills", "Learning psychology"]
    },
    {
      name: "Agriculture",
      icon: <Sprout className="w-6 h-6" />,
      transformation: "AI-powered drones monitor crop health and optimize water usage",
      example: "CropIn uses AI to help farmers increase yields",
      newJobs: ["Precision agriculture specialists", "Agricultural data scientists", "Drone operators"],
      skills: ["Agricultural knowledge", "Technology skills", "Environmental understanding"]
    },
    {
      name: "Entertainment",
      icon: <Video className="w-6 h-6" />,
      transformation: "AI creates music, writes scripts, and personalizes content",
      example: "Netflix uses AI to suggest shows based on viewing patterns",
      newJobs: ["AI content creators", "Digital media strategists", "VR experience designers"],
      skills: ["Creative abilities", "Technology understanding", "Audience analysis"]
    }
  ];

  const essentialSkills = [
    {
      category: "Digital Literacy",
      icon: <Code className="w-6 h-6" />,
      skills: ["Basic Coding (Python/JavaScript)", "AI Tool Proficiency", "Data Analysis"],
      tip: "Start using AI tools in your daily studies"
    },
    {
      category: "Human Skills",
      icon: <Heart className="w-6 h-6" />,
      skills: ["Emotional Intelligence", "Creative Problem-Solving", "Critical Thinking", "Communication"],
      tip: "These skills cannot be replicated by AI"
    },
    {
      category: "Adaptability",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Growth Mindset", "Cross-disciplinary Knowledge", "Continuous Learning"],
      tip: "Embrace change as an opportunity"
    }
  ];

  return (
    <div
      id="s-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-5"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Cpu className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              The Future Impact of AI
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Jobs, Opportunities, and Adapting to Change in an AI-Powered World
            </p>
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-green-50">
                Imagine waking up in 2030 where AI assists with everything from booking appointments to preparing food. 
                This isn't science fiction—it's your rapidly approaching reality.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* The Great Debate Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Great Debate: Will AI Take Away Jobs?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                <strong className="text-green-600">The Reality Check:</strong>
              </p>
              <p className="text-lg text-gray-600">
                AI will eliminate some jobs, transform others, and create entirely new ones. 
                Think of it like the invention of the internet—it killed video rental stores but created entire industries.
              </p>
            </div>
          </div>

          {/* Job Types Carousel */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                How AI Affects Different Job Types
              </h3>
              <div className="flex justify-center space-x-2 mb-6">
                {jobTypes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentJobType === index ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className={`bg-gradient-to-r ${jobTypes[currentJobType].color} border-2 ${jobTypes[currentJobType].borderColor} rounded-2xl p-8 transform hover:scale-105 transition-all duration-500`}>
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    {jobTypes[currentJobType].icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  {jobTypes[currentJobType].title}
                </h4>
                <p className="text-lg text-gray-600 mb-6">
                  {jobTypes[currentJobType].description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-5 gap-4">
                {jobTypes[currentJobType].examples.map((example, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-sm font-medium text-gray-700">{example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              {jobTypes.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentJobType(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    currentJobType === index
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type.title.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Real-World Example */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-500 rounded-full p-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Real Example: McDonald's</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                McDonald's introduced self-service kiosks, reducing the need for order-taking staff.
              </p>
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Result:</strong> Workers were redirected to food preparation 
                and customer service roles that require human interaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🍔</div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Transformation, Not Elimination</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Automated ordering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Human food preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Enhanced customer service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Skills Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Essential Skills for the AI Age
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your survival guide for thriving in an AI-powered world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {essentialSkills.map((skillSet, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {skillSet.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{skillSet.category}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm text-green-700">
                      <strong>Tip:</strong> {skillSet.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Impact Section */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Industry-Wise AI Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How different industries are being transformed by AI
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndustry(index)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedIndustry === index
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {industry.icon}
                    <span>{industry.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
                      {industries[selectedIndustry].icon}
                      <span>{industries[selectedIndustry].name}</span>
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                      <strong className="text-green-600">Transformation:</strong> {industries[selectedIndustry].transformation}
                    </p>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-gray-600">
                        <strong className="text-emerald-600">Example:</strong> {industries[selectedIndustry].example}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                      <Briefcase className="w-5 h-5 text-green-600" />
                      <span>New Jobs Created</span>
                    </h4>
                    <div className="space-y-2">
                      {industries[selectedIndustry].newJobs.map((job, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{job}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-green-600" />
                      <span>Skills Needed</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industries[selectedIndustry].skills.map((skill, index) => (
                        <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* India's AI Advantage */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🇮🇳</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              India's AI Advantage
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <span>Our Strengths</span>
              </h3>
              <div className="space-y-3">
                {[
                  "Large English-speaking Population",
                  "Strong IT Foundation", 
                  "Digital India Initiative",
                  "Cost-Effective Innovation"
                ].map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Star className="w-6 h-6 text-green-600" />
                <span>Success Stories</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800">Ola & Uber</h4>
                  <p className="text-sm text-gray-600">AI for ride matching and route optimization</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-bold text-emerald-800">Paytm & PhonePe</h4>
                  <p className="text-sm text-gray-600">AI for fraud detection and credit scoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Plan */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Preparing for Tomorrow: Your Action Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Next 6 Months",
                icon: <Zap className="w-6 h-6" />,
                actions: [
                  "Explore AI tools daily (30 mins)",
                  "Read AI news regularly",
                  "Join tech communities",
                  "Start learning basics"
                ],
                color: "from-green-100 to-emerald-100"
              },
              {
                title: "Next 2 Years", 
                icon: <TrendingUp className="w-6 h-6" />,
                actions: [
                  "Develop AI expertise",
                  "Build practical projects",
                  "Network with professionals",
                  "Gain relevant experience"
                ],
                color: "from-emerald-100 to-teal-100"
              },
              {
                title: "Next 5 Years",
                icon: <Star className="w-6 h-6" />,
                actions: [
                  "Align career with AI trends",
                  "Commit to lifelong learning",
                  "Take leadership roles",
                  "Contribute to innovation"
                ],
                color: "from-teal-100 to-green-100"
              }
            ].map((phase, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${phase.color} rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div className="bg-green-500 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {phase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {phase.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Embracing the AI Future
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              The AI revolution isn't something happening to you—it's something you can actively shape. 
              Your generation has the unique opportunity to grow up alongside AI, making you natural partners 
              in this technological revolution.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">AI</div>
                  <div className="text-gray-600">Tool</div>
                </div>
                <div className="text-2xl font-bold text-gray-400">+</div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">You</div>
                  <div className="text-gray-600">Guide</div>
                </div>
              </div>
              <div className="mt-6 text-lg font-medium text-gray-800">
                = Future Success! 🌟
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Key Takeaways
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "AI will eliminate some jobs, transform others, and create entirely new career paths",
              "Success requires both technical skills and uniquely human capabilities",
              "India has significant opportunities in the global AI economy",
              "Continuous learning and adaptability are essential for thriving",
              "Ethical considerations must guide AI development and implementation",
              "The key is to work with AI as a collaborative tool rather than seeing it as a threat"
            ].map((takeaway, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <p className="text-gray-700">{takeaway}</p>
                </div>
              </div>
            ))}
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

export default Module5AIFuture;