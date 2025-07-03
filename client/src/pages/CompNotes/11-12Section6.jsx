import React, { useState, useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  Users,
  Eye,
  Brain,
  Scale,
  Lightbulb,
  BookOpen,
  CheckCircle,
  XCircle,
  ArrowRight,
  Target,
  Zap,
  Globe,
  Lock,
  Cpu,
  TrendingUp,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

const Module6AIEthics = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [showQuizFeedback, setShowQuizFeedback] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(Array.from({ length: 20 }, (_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const ethicalPrinciples = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Fairness",
      description: "Ensure AI systems treat all individuals and groups fairly",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accountability",
      description: "Maintain clear responsibility for AI decisions",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "Make AI systems as explainable as possible",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy",
      description: "Protect user data and privacy",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Beneficence",
      description: "Ensure AI benefits humanity",
      color: "from-emerald-600 to-green-500",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Non-maleficence",
      description: "Do no harm - avoid creating harmful AI systems",
      color: "from-green-500 to-teal-500",
    },
  ];

  const keyIssues = [
    {
      title: "Bias and Discrimination",
      icon: <Scale className="w-6 h-6" />,
      description: "AI systems making unfair decisions against certain groups",
      example:
        "Amazon's AI recruiting tool was biased against women candidates",
      impact:
        "Affects hiring, healthcare, criminal justice, and financial services",
    },
    {
      title: "Privacy and Surveillance",
      icon: <Eye className="w-6 h-6" />,
      description:
        "AI systems collecting and analyzing vast amounts of personal data",
      example:
        "Facial recognition in public spaces and social media data mining",
      impact: "Concerns about personal privacy and government surveillance",
    },
    {
      title: "Job Displacement",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "AI replacing human workers across various industries",
      example: "Automated manufacturing, self-checkout systems, and chatbots",
      impact: "Economic disruption but also creation of new job categories",
    },
    {
      title: "Transparency Issues",
      icon: <Brain className="w-6 h-6" />,
      description:
        "AI systems being 'black boxes' with unexplainable decisions",
      example: "Medical AI recommending treatments without clear reasoning",
      impact: "Difficulty in trusting and validating AI recommendations",
    },
  ];

  const quizQuestions = [
    {
      question: "What does AI bias mean?",
      options: [
        "AI systems working faster than humans",
        "AI systems making unfair decisions against certain groups",
        "AI systems being too expensive",
        "AI systems using too much electricity",
      ],
      correct: 1,
      explanation:
        "AI bias occurs when AI systems make unfair or prejudiced decisions against certain groups of people based on characteristics like race, gender, or age.",
    },
    {
      question: "Which principle means 'do no harm' in AI ethics?",
      options: [
        "Beneficence",
        "Non-maleficence",
        "Transparency",
        "Accountability",
      ],
      correct: 1,
      explanation:
        "Non-maleficence means 'do no harm' - it's about avoiding the creation of harmful AI systems.",
    },
    {
      question: "What is a 'black box' problem in AI?",
      options: [
        "AI systems that are painted black",
        "AI systems that work in the dark",
        "AI systems whose decision-making process cannot be understood",
        "AI systems that break easily",
      ],
      correct: 2,
      explanation:
        "A 'black box' refers to AI systems where we can see the inputs and outputs, but we don't understand how they make decisions internally.",
    },
  ];

  const handleQuizAnswer = (questionIndex, selectedOption) => {
    setSelectedQuiz((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
    setShowQuizFeedback((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));
  };

  return (
    <div
      id="s-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-6"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ethical Considerations in AI
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Understanding the moral principles that guide responsible AI
              development and deployment
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                text: "What are AI ethics and why they matter",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                text: "Key ethical issues in AI development",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                icon: <Scale className="w-6 h-6" />,
                text: "Principles of responsible AI development",
                color: "bg-teal-100 text-teal-600",
              },
              {
                icon: <Users className="w-6 h-6" />,
                text: "Real-world examples and case studies",
                color: "bg-green-100 text-green-700",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                text: "Solutions and best practices",
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                text: "Future considerations and your role",
                color: "bg-teal-100 text-teal-700",
              },
            ].map((objective, index) => (
              <div
                key={index}
                className={`${
                  objective.color
                } rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-sm">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Are AI Ethics */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What Are AI Ethics?
              </h2>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AI ethics refers to the{" "}
                <strong className="text-green-600">
                  moral principles and guidelines
                </strong>{" "}
                that govern the development, deployment, and use of artificial
                intelligence systems.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">
                    Think of it like this:
                  </h3>
                </div>
                <p className="text-gray-600">
                  Just as we have traffic rules to ensure safe driving, we need
                  ethical guidelines to ensure AI systems are developed and used
                  responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  AI Ethics Ensures
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <p className="text-gray-700 font-medium">
                        AI is used for good
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <p className="text-gray-700 font-medium">
                        No harm to individuals
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <p className="text-gray-700 font-medium">
                        Benefits society
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Ethical Issues */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Ethical Issues in AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the main challenges we face as AI becomes more
              powerful
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyIssues.map((issue, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 6)
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 6) * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 text-white">
                    {issue.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {issue.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {issue.description}
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4 border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-700 mb-2">
                    Real Example:
                  </h4>
                  <p className="text-gray-700 text-sm">{issue.example}</p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border-l-4 border-emerald-400">
                  <h4 className="font-semibold text-emerald-700 mb-2">
                    Impact:
                  </h4>
                  <p className="text-gray-700 text-sm">{issue.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Case Study */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📱</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Case Study: Facial Recognition in Schools
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  The Scenario
                </h3>
                <p className="text-gray-700">
                  A school wants to use facial recognition technology to
                  automatically take attendance and improve security. The AI
                  system would identify students as they enter the building.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Potential Benefits
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Faster attendance taking</li>
                    <li>• Improved security</li>
                    <li>• Track student punctuality</li>
                    <li>• Identify unauthorized visitors</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-700 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Ethical Concerns
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Student privacy violations</li>
                    <li>• Constant surveillance feeling</li>
                    <li>• Potential for bias in recognition</li>
                    <li>• Data security risks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border-l-4 border-emerald-400">
                <h4 className="font-bold text-emerald-700 mb-3">
                  Questions to Consider
                </h4>
                <p className="text-gray-700 text-sm">
                  Is the convenience worth the privacy trade-off? How would you
                  feel being constantly monitored at school? What safeguards
                  would you want in place?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Principles */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Principles of Ethical AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six key principles that guide responsible AI development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-500 ${
                  visibleCards.includes(index + 10)
                    ? "animate-fade-in"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 10) * 150}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${principle.color} rounded-full p-4 text-white mb-6 w-fit`}
                >
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions and Best Practices */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🛠️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Solutions and Best Practices
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                Diverse Teams
              </h3>
              <p className="text-gray-600 mb-4">
                Include people from different backgrounds, cultures, and
                perspectives in AI development to identify potential biases.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Why it matters:</strong> Diverse teams are more likely
                  to spot ethical issues and create fairer AI systems.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <RefreshCw className="w-6 h-6 text-emerald-600 mr-3" />
                Continuous Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Regularly check AI systems for bias, accuracy, and ethical
                compliance throughout their lifecycle.
              </p>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Key activities:</strong> Regular audits, user
                  feedback, performance monitoring across different groups.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 text-teal-600 mr-3" />
                Education & Awareness
              </h3>
              <p className="text-gray-600 mb-4">
                Educate both developers and users about AI ethics and potential
                impacts.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Focus areas:</strong> Digital literacy, AI awareness,
                  ethical decision-making in technology.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-green-600 mr-3" />
                Regulation & Standards
              </h3>
              <p className="text-gray-600 mb-4">
                Develop appropriate laws and industry standards to govern AI
                development and deployment.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Examples:</strong> EU AI Act, industry ethics boards,
                  technical standards for AI safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Quiz Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Test Your Understanding
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check your knowledge of AI ethics concepts
            </p>
          </div>

          <div className="space-y-8">
            {quizQuestions.map((quiz, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {quiz.question}
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {quiz.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleQuizAnswer(index, optionIndex)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedQuiz[index] === optionIndex
                          ? optionIndex === quiz.correct
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 text-green-700"
                            : "bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-400 text-red-700"
                          : "bg-gray-50 hover:bg-gray-100 border-2 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {selectedQuiz[index] === optionIndex &&
                          (optionIndex === quiz.correct ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          ))}
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {showQuizFeedback[index] && (
                  <div
                    className={`p-4 rounded-xl ${
                      selectedQuiz[index] === quiz.correct
                        ? "bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400"
                        : "bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400"
                    }`}
                  >
                    <p className="text-gray-700">
                      <strong>
                        {selectedQuiz[index] === quiz.correct
                          ? "Correct!"
                          : "Not quite right."}
                      </strong>{" "}
                      {quiz.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Your Role Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Role in Ethical AI
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              As digital natives, you have an important role in shaping the
              ethical development of AI:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  text: "Stay informed about AI developments and their implications",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "Advocate for responsible AI use in your communities",
                },
                {
                  icon: <Brain className="w-6 h-6" />,
                  text: "Consider ethical implications in your own use of AI tools",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  text: "Participate in public discourse about AI governance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 flex items-start space-x-3"
                >
                  <div className="bg-green-500 text-white rounded-full p-2 mt-1">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Key Takeaways
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "AI systems can perpetuate and amplify existing social biases",
                "Privacy and surveillance concerns require careful balance",
                "Transparency and accountability are essential for trust",
                "Diverse perspectives are crucial in AI development",
                "Continuous monitoring and adjustment are necessary",
                "Both regulation and self-governance have important roles",
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

export default Module6AIEthics;
