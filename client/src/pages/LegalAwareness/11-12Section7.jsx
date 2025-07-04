import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Scale, 
  Zap, 
  FileText, 
  Search, 
  Shield, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  BookOpen,
  CheckCircle,
  XCircle,
  Lightbulb,
  Globe,
  Gavel,
  Bot,
  Eye,
  Clock,
  Target,
  ArrowRight,
  Star,
  ChevronRight,
  Briefcase,
  Database,
  Lock,
  UserCheck,
  AlertCircle,
  Cpu,
  Network,
  BarChart3
} from 'lucide-react';

const Module7AILaw = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentApplication, setCurrentApplication] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(Array.from({ length: 20 }, (_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApplication((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChallenge((prev) => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const aiApplications = [
    {
      area: "Legal Research",
      description: "AI scans thousands of judgments to find relevant case law in seconds",
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      area: "Contract Drafting",
      description: "Auto-generates contracts with predefined clauses",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      area: "Due Diligence",
      description: "Scans contracts to flag risks (e.g., missing clauses or conflicting terms)",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-green-500"
    },
    {
      area: "Litigation Prediction",
      description: "Predicts case outcomes based on historic rulings and judge behavior",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      area: "Chatbots for Legal Aid",
      description: "Offer legal advice on tenancy, divorce, harassment, etc., 24/7",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-600"
    },
    {
      area: "E-Discovery",
      description: "Finds useful digital evidence in fraud, crime, or civil cases",
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-600 to-green-600"
    },
    {
      area: "Judicial Assistance",
      description: "Provides summaries, precedents, or legal questions to assist judges",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-green-700 to-emerald-700"
    }
  ];

  const challenges = [
    {
      challenge: "Bias in Training Data",
      explanation: "If past judgments were biased, the AI will replicate that bias",
      implication: "Discriminatory outcomes in bail or sentencing",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "bg-green-100 text-green-700"
    },
    {
      challenge: "Lack of Human Emotion",
      explanation: "AI can't consider compassion, social context, or psychological trauma",
      implication: "A crime committed in desperation may be judged harshly",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      challenge: "Transparency Issues",
      explanation: "Many AI systems are 'black boxes' -- we don't know how they make decisions",
      implication: "Unclear legal accountability",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-700"
    },
    {
      challenge: "Privacy Concerns",
      explanation: "AI tools need vast personal/legal data to function",
      implication: "Can lead to leaks or misuse if not regulated",
      icon: <Lock className="w-6 h-6" />,
      color: "bg-green-100 text-green-700"
    },
    {
      challenge: "Job Displacement",
      explanation: "AI may reduce demand for paralegals, junior associates, clerks",
      implication: "Lawyers need to upskill in tech and ethics",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  const benefits = [
    {
      title: "Time Efficiency",
      description: "What takes lawyers 20 hours, AI does in 20 minutes",
      icon: <Clock className="w-8 h-8" />,
      stats: "95% faster processing"
    },
    {
      title: "Cost Saving",
      description: "Clients save money as fewer billable hours are required",
      icon: <TrendingUp className="w-8 h-8" />,
      stats: "60% cost reduction"
    },
    {
      title: "Wider Access to Justice",
      description: "Low-income individuals can get legal help via chatbots and automated filing tools",
      icon: <Users className="w-8 h-8" />,
      stats: "24/7 availability"
    },
    {
      title: "Data-Driven Consistency",
      description: "AI treats similar cases similarly—reducing personal bias",
      icon: <BarChart3 className="w-8 h-8" />,
      stats: "Consistent outcomes"
    },
    {
      title: "Support for Overloaded Courts",
      description: "AI can ease caseloads by sorting evidence, preparing briefs, or assisting in bail decisions",
      icon: <Scale className="w-8 h-8" />,
      stats: "50% workload reduction"
    }
  ];

  const caseStudies = [
    {
      title: "SUPACE (India)",
      description: "Supreme Court's AI tool to assist in complex cases by providing summarized information",
      details: "Launched to reduce workload—not to make decisions",
      flag: "🇮🇳",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Hangzhou Internet Court (China)",
      description: "Has an AI judge avatar that decides minor e-commerce cases based on documents and inputs",
      details: "Works 24x7; humans intervene if the dispute escalates",
      flag: "🇨🇳",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Shreya Singhal v. Union of India (2015)",
      description: "Though not an AI case, it involved digital rights",
      details: "Set the standard for free speech in the digital world, relevant for regulating AI-generated content",
      flag: "🇮🇳",
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Estonia's 'Robot Judge' Plan",
      description: "Estonia piloted an AI judge for small claims disputes (under €7,000)",
      details: "Legal experts oversee final decisions but AI handles the bulk of the process",
      flag: "🇪🇪",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const careerOptions = [
    {
      title: "Legal Data Analyst",
      description: "Analyze judgment trends, win rates, or court delays using data",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Data Analysis", "Legal Research", "Statistics"]
    },
    {
      title: "Cyber Law Expert",
      description: "Handle cases involving hacking, deepfakes, privacy breaches",
      icon: <Shield className="w-8 h-8" />,
      skills: ["Cybersecurity", "Privacy Law", "Digital Forensics"]
    },
    {
      title: "AI Policy Advisor",
      description: "Draft laws on AI ethics, fairness, and accountability",
      icon: <Gavel className="w-8 h-8" />,
      skills: ["Policy Writing", "Ethics", "AI Understanding"]
    },
    {
      title: "Legal Design Expert",
      description: "Make legal processes user-friendly using tech and design thinking",
      icon: <Lightbulb className="w-8 h-8" />,
      skills: ["UX Design", "Legal Tech", "Human-Centered Design"]
    },
    {
      title: "Tech-Law Startup Founder",
      description: "Build tools that democratize access to justice (e.g., online court filing, automated wills)",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["Entrepreneurship", "Legal Tech", "Product Development"]
    }
  ];

  const handleQuizAnswer = (answer) => {
    setQuizAnswer(answer);
    setShowQuizResult(true);
  };

  return (
    <div
      id="s-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-7"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-pulse">
                  <Brain className="w-20 h-20 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-green-400 rounded-full p-2">
                  <Scale className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
              AI & Future of Law
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how Artificial Intelligence is revolutionizing the legal profession and shaping the future of justice
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="text-sm font-medium">Smart Legal Tech</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Global Impact</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* What is AI Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What is Artificial Intelligence?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the technology that's transforming legal practice
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500 ${
                visibleCards.includes(0) ? 'animate-fade-in' : 'opacity-0'
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Definition</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Artificial Intelligence is the simulation of human intelligence by machines, especially computer systems. 
                It allows systems to perform tasks like understanding language, solving problems, learning from data, 
                and even making decisions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Network className="w-6 h-6" />,
                  title: "Machine Learning (ML)",
                  description: "AI systems learn patterns from past data (e.g., court rulings) to make predictions or decisions without being explicitly programmed for each task.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Natural Language Processing (NLP)",
                  description: "This allows AI to 'read' legal texts, judgments, and contracts, then interpret or summarize them.",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Automation",
                  description: "Replacing repetitive, manual legal tasks (like document reviews) with software that works faster and more accurately.",
                  color: "from-teal-500 to-green-500"
                }
              ].map((concept, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${concept.color} p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 ${
                    visibleCards.includes(index + 1) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      {concept.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{concept.title}</h4>
                      <p className="text-white/90 leading-relaxed">{concept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why It Matters for Law</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Law involves huge amounts of reading, analysis, and decision-making—perfect for AI tools that process text, 
                identify patterns, and spot risks. However, the law also involves human judgment, morality, and empathy—areas 
                where AI has limitations.
              </p>
            </div>
          </div>
        </div>

        {/* AI Applications Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Real-World Applications of AI in Law
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI is already transforming legal practice across different areas
            </p>
          </div>

          {/* Featured Application */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Featured Application</div>
              <div className={`bg-gradient-to-r ${aiApplications[currentApplication].color} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {aiApplications[currentApplication].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{aiApplications[currentApplication].area}</h3>
                    <p className="text-xl opacity-90">{aiApplications[currentApplication].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Applications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiApplications.map((app, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentApplication === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
                onClick={() => setCurrentApplication(index)}
              >
                <div className={`bg-gradient-to-r ${app.color} rounded-xl p-4 mb-4 text-white`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{app.area}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Benefits of Using AI in Law
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedBenefit === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 11) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 11) * 150}ms` }}
                onClick={() => setSelectedBenefit(selectedBenefit === index ? null : index)}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 mb-4 text-white w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm font-semibold text-green-700">{benefit.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Challenges & Ethical Risks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the limitations and concerns of AI in legal practice
            </p>
          </div>

          {/* Featured Challenge */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Current Challenge</div>
              <div className={`${challenges[currentChallenge].color} rounded-2xl p-8 transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="bg-white/20 rounded-full p-4">
                    {challenges[currentChallenge].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{challenges[currentChallenge].challenge}</h3>
                    <p className="text-xl opacity-90 mb-2">{challenges[currentChallenge].explanation}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm font-semibold">Impact: {challenges[currentChallenge].implication}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Challenges */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  currentChallenge === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index + 16) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 16) * 100}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className={`${challenge.color} rounded-xl p-4 flex items-center space-x-3`}>
                    {challenge.icon}
                    <h3 className="text-lg font-bold">{challenge.challenge}</h3>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-2">Problem:</p>
                    <p className="text-gray-600">{challenge.explanation}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-2">Impact:</p>
                    <p className="text-gray-600">{challenge.implication}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hybrid Future Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              AI + Humans = The Hybrid Legal Future
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-green-700 mb-4">
                AI is not the judge—it's the assistant
              </p>
              <p className="text-lg text-gray-700">
                It can support but not replace the unique skills lawyers and judges bring: moral reasoning, 
                client empathy, interpreting vague laws, balancing rights.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lawyers who use AI tools",
                description: "will boost productivity and have an edge",
                icon: <Users className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Judges may use AI",
                description: "to ensure they don't miss precedents or make inconsistent decisions",
                icon: <Gavel className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Law schools must teach",
                description: "technology literacy along with constitutional law, contracts, and IPC",
                icon: <BookOpen className="w-8 h-8" />,
                color: "from-teal-500 to-green-500"
              }
            ].map((future, index) => (
              <div key={index} className={`bg-gradient-to-r ${future.color} text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300`}>
                <div className="bg-white/20 rounded-full p-3 mb-4 w-fit">
                  {future.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{future.title}</h3>
                <p className="text-white/90">{future.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Global Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of AI implementation in legal systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 17) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 17) * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${study.color} rounded-xl p-4 mb-4 text-white flex items-center space-x-3`}>
                  <span className="text-2xl">{study.flag}</span>
                  <h3 className="text-xl font-bold">{study.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{study.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700">{study.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Careers Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              AI and Legal Careers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Future-proof your role in the evolving legal landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOptions.map((career, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 21) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 21) * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 mb-4 text-white w-fit">
                  {career.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{career.title}</h3>
                <p className="text-gray-600 mb-4">{career.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-green-700 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Quiz Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Test Your Understanding
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick check: What's the biggest challenge with AI in legal systems?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Which is the most significant ethical concern when using AI in legal decision-making?
              </h3>
              
              <div className="space-y-4">
                {[
                  { 
                    id: 'A', 
                    text: 'AI is too expensive for small law firms', 
                    isCorrect: false,
                    explanation: 'While cost is a concern, it\'s not the most significant ethical issue.'
                  },
                  { 
                    id: 'B', 
                    text: 'AI systems can perpetuate historical biases present in training data', 
                    isCorrect: true,
                    explanation: 'Correct! Bias in training data is the most serious ethical concern as it can lead to discriminatory outcomes in justice.'
                  },
                  { 
                    id: 'C', 
                    text: 'AI works too slowly compared to human lawyers', 
                    isCorrect: false,
                    explanation: 'Actually, AI typically works much faster than humans - this isn\'t an ethical concern.'
                  },
                  { 
                    id: 'D', 
                    text: 'AI requires internet connection to function', 
                    isCorrect: false,
                    explanation: 'Technical requirements aren\'t the primary ethical concern with AI in law.'
                  }
                ].map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      quizAnswer === option.id
                        ? option.isCorrect
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50/30'
                    }`}
                    onClick={() => handleQuizAnswer(option.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        quizAnswer === option.id
                          ? option.isCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {option.id}
                      </div>
                      <p className="text-gray-700 font-medium">{option.text}</p>
                    </div>
                    
                    {showQuizResult && quizAnswer === option.id && (
                      <div className={`mt-3 p-3 rounded-lg ${
                        option.isCorrect ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'
                      }`}>
                        <p className={`text-sm font-medium ${
                          option.isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {option.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {showQuizResult && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      setQuizAnswer(null);
                      setShowQuizResult(false);
                    }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Takeaways Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 w-fit mx-auto mb-6">
              <Target className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">AI is a Powerful Tool</h3>
                  <p className="text-gray-600">AI can dramatically improve efficiency, reduce costs, and increase access to justice through automation and intelligent analysis.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Humans Remain Essential</h3>
                  <p className="text-gray-600">AI cannot replace human judgment, empathy, and moral reasoning that are crucial in legal decision-making.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Ethical Considerations Are Critical</h3>
                  <p className="text-gray-600">Issues like bias, transparency, and privacy must be carefully addressed to ensure fair and just AI implementation.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Future is Hybrid</h3>
                  <p className="text-gray-600">The most effective legal systems will combine AI efficiency with human wisdom and oversight.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">New Career Opportunities</h3>
                  <p className="text-gray-600">AI creates new roles at the intersection of law and technology, requiring both legal knowledge and tech skills.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Continuous Learning Required</h3>
                  <p className="text-gray-600">Legal professionals must continuously update their skills to work effectively with AI tools and understand their implications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Outlook Section */}
        <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-6">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Future of AI in Law
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">2025-2030</h3>
                <p className="text-white/90">
                  AI assistants become standard in most law firms. Basic legal research and document drafting are largely automated.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">2030-2040</h3>
                <p className="text-white/90">
                  AI systems handle routine legal procedures. Human lawyers focus on complex cases, negotiations, and client relations.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Beyond 2040</h3>
                <p className="text-white/90">
                  AI and humans work seamlessly together. Legal education fully integrates technology, ethics, and traditional law.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-xl font-bold mb-2">
                  "The question isn't whether AI will change law—it's how prepared we are for that change."
                </p>
                <p className="text-white/80">
                  The future belongs to those who can harness AI's power while preserving the human values that make justice meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Shape the Future of Law?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're interested in becoming a lawyer, working in legal tech, or simply understanding how AI impacts society, 
            the future of law is filled with exciting possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Continue Learning</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3">
              <Lightbulb className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Explore Tech Careers</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg flex items-center space-x-3">
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Join the Discussion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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

export default Module7AILaw;