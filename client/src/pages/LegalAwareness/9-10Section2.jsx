import React, { useState, useEffect } from "react";
import {
  Scale,
  Shield,
  Gavel,
  BookOpen,
  Users,
  Building,
  Eye,
  FileText,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Zap,
  Crown,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

const Module2Judiciary = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [expandedWrit, setExpandedWrit] = useState(null);
  const [activeTab, setActiveTab] = useState("supreme");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const writTypes = [
    {
      name: "Habeas Corpus",
      meaning: "To have the body",
      purpose: "To produce a person unlawfully detained",
      example: "If someone is arrested without proper legal process",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Mandamus",
      meaning: "We command",
      purpose: "To command a public authority to perform a duty",
      example: "Forcing a government office to process your application",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
    },
    {
      name: "Prohibition",
      meaning: "To forbid",
      purpose: "To prevent a lower court from exceeding jurisdiction",
      example: "Stopping a court from hearing a case it shouldn't handle",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600",
    },
    {
      name: "Certiorari",
      meaning: "To be certified",
      purpose: "To quash an order of a lower court",
      example: "Cancelling an unfair decision by a lower court",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      name: "Quo Warranto",
      meaning: "By what authority",
      purpose: "To question a person's right to hold public office",
      example:
        "Challenging someone's illegal appointment to a government position",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const courtHierarchy = [
    {
      level: "Supreme Court",
      description: "Apex court - Final authority on constitutional matters",
      articles: "Articles 124-147",
      jurisdiction: ["Original", "Appellate", "Advisory"],
      icon: <Crown className="w-8 h-8" />,
      color: "from-emerald-600 to-green-700",
      details:
        "The highest court in India, located in New Delhi. It's the final court of appeal and guardian of the Constitution.",
    },
    {
      level: "High Courts",
      description: "Highest courts in states or groups of states",
      articles: "Articles 214-231",
      jurisdiction: ["Original", "Appellate"],
      icon: <Building className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      details:
        "Each state or group of states has a High Court. There are 25 High Courts in India currently.",
    },
    {
      level: "Subordinate Courts",
      description: "District Courts, Sessions Courts, Family Courts",
      articles: "Handle civil and criminal matters",
      jurisdiction: ["Civil", "Criminal"],
      icon: <Scale className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      details:
        "These are the courts where most people interact with the justice system. They handle day-to-day legal matters.",
    },
  ];

  const landmarkCases = [
    {
      case: "Kesavananda Bharati v. State of Kerala (1973)",
      significance: "Established the basic structure doctrine",
      impact:
        "Limited Parliament's power to amend fundamental features of Constitution",
      year: "1973",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-indigo-500",
      details:
        "This case established that Parliament cannot destroy the basic structure of the Constitution through amendments.",
    },
    {
      case: "Maneka Gandhi v. Union of India (1978)",
      significance: "Expanded Article 21 rights",
      impact:
        "Reinforced right to life and personal liberty with procedural fairness",
      year: "1978",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-emerald-500",
      details:
        "This case expanded the meaning of 'life and liberty' to include dignity and quality of life.",
    },
  ];

  const keyFeatures = [
    {
      title: "Judicial Review",
      description:
        "Courts can strike down unconstitutional laws or government actions",
      icon: <Eye className="w-10 h-10" />,
      color: "from-blue-500 to-indigo-500",
      example:
        "Like when a court cancels a law that violates fundamental rights",
    },
    {
      title: "Public Interest Litigation (PIL)",
      description:
        "Citizens can seek justice for public causes even if not personally affected",
      icon: <Users className="w-10 h-10" />,
      color: "from-green-500 to-emerald-500",
      example:
        "Anyone can file a case about pollution or corruption affecting society",
    },
    {
      title: "Separation of Powers",
      description:
        "Judiciary operates independently of executive and legislature",
      icon: <Scale className="w-10 h-10" />,
      color: "from-purple-500 to-pink-500",
      example: "Judges make decisions based on law, not political pressure",
    },
  ];

  return (
    <div
      id="m-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-2"] = el;
        }
      }}
      className="mb-12"
    >
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent animate-fade-in">
              The Indian Judiciary
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Guardian of the Constitution & Protector of Rights ⚖️
            </p>
            <div className="mt-8 flex justify-center space-x-4 animate-fade-in delay-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-green-100">Justice</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-green-100">Independence</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-green-100">Equality</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Introduction with Enhanced Design */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-4 animate-pulse">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What is the Judiciary?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border-l-4 border-green-400">
              <p className="text-xl text-gray-700 leading-relaxed">
                The judiciary is the{" "}
                <strong className="text-emerald-600">
                  guardian of the Constitution
                </strong>{" "}
                and the
                <strong className="text-green-600">
                  {" "}
                  protector of individual rights
                </strong>
                . It interprets laws, settles disputes, and ensures justice for
                all.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-400 hover:transform hover:scale-105 transition-all duration-300">
                <Gavel className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  Interprets Laws
                </h3>
                <p className="text-blue-600">
                  Explains what laws mean and how they apply in different
                  situations
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 hover:transform hover:scale-105 transition-all duration-300">
                <Users className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  Settles Disputes
                </h3>
                <p className="text-green-600">
                  Resolves conflicts between people, organizations, and
                  government
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-400 hover:transform hover:scale-105 transition-all duration-300">
                <Shield className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="text-lg font-bold text-purple-800 mb-2">
                  Ensures Justice
                </h3>
                <p className="text-purple-600">
                  Protects rights and maintains fairness for everyone
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Court Hierarchy with Improved Design */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Hierarchical Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Indian judiciary follows a{" "}
              <strong className="text-green-600">three-tier system</strong>,
              like a pyramid with the Supreme Court at the top.
            </p>
          </div>

          <div className="space-y-6">
            {courtHierarchy.map((court, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                  visibleCards.includes(index)
                    ? "animate-fade-in opacity-100"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${court.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      {court.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{court.level}</h3>
                      <p className="text-lg opacity-90">{court.articles}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-4">
                    {court.description}
                  </p>
                  <p className="text-gray-600 mb-6 italic">{court.details}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {court.jurisdiction.map((type, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="font-medium text-gray-800">
                            {type} Jurisdiction
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Jurisdiction Tabs */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Supreme Court Jurisdictions
            </h2>
            <p className="text-lg text-gray-600">
              The Supreme Court has three main types of powers and
              responsibilities
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {["original", "appellate", "advisory"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Jurisdiction
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            {activeTab === "original" && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Original Jurisdiction
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Cases that can be directly filed in the Supreme Court without
                  going through lower courts first.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        Fundamental Rights Cases
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      When your basic rights are violated
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        State vs State Disputes
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Conflicts between different states
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        State vs Union Disputes
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Conflicts between states and central government
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "appellate" && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  Appellate Jurisdiction
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Reviewing and deciding on appeals from High Court decisions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        High Court Appeals
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Cases that come from High Courts
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        Constitutional Questions
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Important legal questions about Constitution
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        Serious Criminal Cases
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Major criminal appeals
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "advisory" && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Advisory Jurisdiction
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Providing legal advice to the President on important matters.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        Constitutional Interpretation
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Explaining what Constitution means
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        Public Importance
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Questions that affect the whole country
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      <strong className="text-gray-800">
                        Presidential References
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Special questions from the President
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Judicial Independence */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-400">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Judicial Independence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why judges need to be free from outside pressure to ensure fair
              justice for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Article 50
              </h3>
              <p className="text-gray-600">
                Separates judiciary from executive branch
              </p>
              <div className="mt-3 text-sm text-green-600">
                ✓ Constitutional Protection
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Secure Tenure
              </h3>
              <p className="text-gray-600">Judges can't be removed easily</p>
              <div className="mt-3 text-sm text-blue-600">✓ Job Security</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Salary Protection
              </h3>
              <p className="text-gray-600">
                Fixed salary that can't be reduced
              </p>
              <div className="mt-3 text-sm text-purple-600">
                ✓ Financial Security
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="bg-orange-100 rounded-full p-3 w-fit mb-4">
                <Scale className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Fair Trials
              </h3>
              <p className="text-gray-600">Ensures impartial justice for all</p>
              <div className="mt-3 text-sm text-orange-600">
                ✓ Equal Treatment
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border-l-4 border-blue-400">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Why is this important?
                </h4>
                <p className="text-gray-700">
                  Imagine if judges were afraid of losing their jobs or salary
                  for making unpopular decisions. They might favor powerful
                  people or the government instead of following the law.
                  Independence ensures judges can make fair decisions based only
                  on facts and law.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Writ Petitions */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Writ Petitions & Fundamental Rights
            </h2>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-400">
              <p className="text-lg text-gray-700">
                Under <strong className="text-orange-600">Article 32</strong>,
                citizens can directly approach the Supreme Court if their
                <strong className="text-purple-600">
                  {" "}
                  Fundamental Rights
                </strong>{" "}
                are violated. High Courts have similar power under
                <strong className="text-pink-600"> Article 226</strong>. These
                are called <strong>Writ Petitions</strong>.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {writTypes.map((writ, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() =>
                    setExpandedWrit(expandedWrit === index ? null : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`bg-gradient-to-r ${writ.gradient} rounded-full p-3 text-white shadow-lg`}
                      >
                        {writ.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {writ.name}
                        </h3>
                        <p className="text-gray-600 italic">"{writ.meaning}"</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        Click to expand
                      </span>
                      {expandedWrit === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700 font-medium">{writ.purpose}</p>
                  </div>
                </div>

                {expandedWrit === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6 border-t border-gray-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                            <Target className="w-5 h-5 text-green-500 mr-2" />
                            Real-Life Example
                          </h4>
                          <p className="text-gray-700 bg-white rounded-lg p-4 border-l-4 border-green-400">
                            {writ.example}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                            <Lightbulb className="w-5 h-5 text-blue-500 mr-2" />
                            When to Use
                          </h4>
                          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                            <p className="text-gray-700">
                              {writ.name === "Habeas Corpus" &&
                                "When someone is illegally detained or imprisoned without proper legal procedures"}
                              {writ.name === "Mandamus" &&
                                "When a government office refuses to do their duty or process your legal application"}
                              {writ.name === "Prohibition" &&
                                "When a lower court tries to hear a case they don't have authority over"}
                              {writ.name === "Certiorari" &&
                                "When you want to challenge an unfair decision made by a lower court or authority"}
                              {writ.name === "Quo Warranto" &&
                                "When someone holds a government position illegally or without proper qualification"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border-l-4 border-purple-400">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full p-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Article 32 - "Heart and Soul of the Constitution"
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr. B.R. Ambedkar called Article 32 the "heart and soul" of
                  the Constitution because it gives citizens the power to
                  directly approach the Supreme Court when their fundamental
                  rights are violated. This makes our rights not just words on
                  paper, but real protections we can enforce!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features with Enhanced Design */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-4">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Features of Indian Judiciary
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three powerful features that make our judiciary strong and
              effective
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} rounded-full p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Example:
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-400">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                💡 Why These Features Matter
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-3">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">
                    Protects Democracy
                  </h4>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  Judicial review ensures government stays within constitutional
                  limits
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 w-fit mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Empowers Citizens</h4>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  PIL allows anyone to fight for justice, even for others
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 w-fit mx-auto mb-3">
                    <Scale className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Ensures Fairness</h4>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  Separation of powers prevents any branch from becoming too
                  powerful
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Landmark Cases with Enhanced Design */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Important Landmark Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Two historic cases that shaped how our Constitution works today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {landmarkCases.map((case_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div
                  className={`${case_.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      {case_.icon}
                    </div>
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium mb-2 w-fit">
                        {case_.year}
                      </div>
                      <h3 className="text-xl font-bold leading-tight">
                        {case_.case}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      What it Established
                    </h4>
                    <p className="text-lg text-gray-700 font-medium">
                      {case_.significance}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <Target className="w-5 h-5 text-green-500 mr-2" />
                      Impact on India
                    </h4>
                    <p className="text-gray-700">{case_.impact}</p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Why it Matters:
                        </h4>
                        <p className="text-gray-600 text-sm">{case_.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-400">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 rounded-full p-3">
                <Crown className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">
                  The Living Constitution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These landmark cases show how the Supreme Court interprets and
                  adapts the Constitution to changing times. Through such
                  judgments, our Constitution remains a{" "}
                  <strong>living document</strong> that continues to protect our
                  rights and democracy as India evolves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          <div className="relative text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎯 Module 2 Summary
            </h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Structure & Independence
                </h3>
                <ul className="space-y-2 text-green-100">
                  <li>
                    • Three-tier hierarchy: Supreme Court → High Courts →
                    Subordinate Courts
                  </li>
                  <li>
                    • Judicial independence through constitutional safeguards
                  </li>
                  <li>
                    • Different jurisdictions for different types of cases
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Powers & Protection
                </h3>
                <ul className="space-y-2 text-green-100">
                  <li>• Five types of writs to protect fundamental rights</li>
                  <li>• Judicial review, PIL, and separation of powers</li>
                  <li>• Landmark cases that shaped our democracy</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed">
                The Indian Judiciary stands as the{" "}
                <strong>guardian of our Constitution</strong> and the
                <strong> protector of our rights</strong>. Through its
                independence, powers, and landmark judgments, it ensures that
                justice prevails and democracy thrives in our great nation! ⚖️🇮🇳
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module2Judiciary;
