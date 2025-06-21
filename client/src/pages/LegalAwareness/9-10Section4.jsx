import React, { useState, useEffect } from 'react';
import { Shield, Globe, Scale, Lock, AlertTriangle, Phone, Eye, FileText, Gavel, Users, ChevronRight, Star, BookOpen, Zap, Clock, CheckCircle } from 'lucide-react';

const Module4CyberLaws = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentThreat, setCurrentThreat] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThreat((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cyberthreats = [
    { name: "Cyberbullying", icon: "😠", description: "Harassment through digital platforms" },
    { name: "Phishing", icon: "🎣", description: "Fake messages to steal personal info" },
    { name: "Sextortion", icon: "⚠️", description: "Blackmail using intimate content" },
    { name: "Revenge Porn", icon: "📱", description: "Sharing private images without consent" },
    { name: "Online Stalking", icon: "👁️", description: "Persistent unwanted digital attention" }
  ];

  const keyLaws = [
    {
      section: "Section 43",
      title: "Unauthorized Access",
      description: "Penalty for accessing systems without permission",
      example: "Hacking someone's computer and deleting their files",
      color: "from-green-500 to-emerald-500"
    },
    {
      section: "Section 66",
      title: "Computer Hacking",
      description: "Fraudulent or dishonest unauthorized access",
      example: "Breaking into bank systems to steal money",
      color: "from-emerald-500 to-teal-500"
    },
    {
      section: "Section 66E",
      title: "Privacy Violation",
      description: "Capturing/sharing private content without consent",
      example: "Recording someone secretly in private spaces",
      color: "from-teal-500 to-green-600"
    },
    {
      section: "Section 72",
      title: "Breach of Confidentiality",
      description: "Misuse of user data by intermediaries",
      example: "Telecom staff leaking your call records",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const reportingTools = [
    { name: "Cybercrime Portal", contact: "cybercrime.gov.in", icon: <Globe className="w-6 h-6" /> },
    { name: "Financial Fraud", contact: "1930", icon: <Phone className="w-6 h-6" /> },
    { name: "Childline", contact: "1098", icon: <Users className="w-6 h-6" /> },
    { name: "Emergency", contact: "112", icon: <AlertTriangle className="w-6 h-6" /> }
  ];

  return (
    <div
      id="m-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-4"] = el;
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
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Cyber Laws & Digital Rights
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Understanding your rights and responsibilities in the digital world
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Origins Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Origins of Cyber Law in India
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-800">Timeline</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-bold text-green-600">Late 1990s</span>
                    </div>
                    <p className="text-gray-700">Internet boom creates need for digital regulation</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="font-bold text-emerald-600">October 17, 2000</span>
                    </div>
                    <p className="text-gray-700">Information Technology Act, 2000 comes into force</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">IT Act 2000</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <p className="text-gray-700 font-medium">Legal recognition to e-transactions</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <p className="text-gray-700 font-medium">Based on UNCITRAL Model Law</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <p className="text-gray-700 font-medium">Foundation for digital India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Amendments */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Key Amendments
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-800">IT Amendment Act, 2008</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-gray-700">Introduced cyber terrorism definition</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-gray-700">Added identity theft provisions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-gray-700">Legal validity to digital signatures</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-l-4 border-emerald-400">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-800">IT Rules, 2021</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-emerald-600 mt-1" />
                  <p className="text-gray-700">Platform accountability increased</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-emerald-600 mt-1" />
                  <p className="text-gray-700">24-36 hour content removal mandate</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-emerald-600 mt-1" />
                  <p className="text-gray-700">Enhanced user protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Sections */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Important Legal Sections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key provisions that protect your digital rights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyLaws.map((law, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${law.color} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{law.section}</h3>
                  <Scale className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{law.title}</h4>
                <p className="text-white/90 mb-4">{law.description}</p>
                {expandedSection === index && (
                  <div className="bg-white/20 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Example:</strong> {law.example}
                    </p>
                  </div>
                )}
                <ChevronRight className={`w-5 h-5 ml-auto transition-transform ${expandedSection === index ? 'rotate-90' : ''}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Rights */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Right to Privacy
                </h2>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Justice K.S. Puttaswamy v. Union of India (2017)
                </h3>
                <p className="text-gray-700 mb-4">
                  Supreme Court declared <strong className="text-green-600">Right to Privacy</strong> as a fundamental right under Article 21
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Personal data protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Browsing history privacy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Biometric data (Aadhar)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Digital Shield</h3>
              <p className="text-gray-600">
                Privacy is not about hiding something. It's about protecting something valuable - your digital identity.
              </p>
            </div>
          </div>
        </div>

        {/* Cyber Threats (Rotating Display) */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real-World Cyber Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay aware of these common digital dangers
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl">{cyberthreats[currentThreat].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{cyberthreats[currentThreat].name}</h3>
                    <p className="text-xl opacity-90">{cyberthreats[currentThreat].description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
              {cyberthreats.map((threat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                    currentThreat === index ? 'ring-4 ring-red-300 scale-105 bg-gradient-to-r from-red-50 to-orange-50' : ''
                  }`}
                  onClick={() => setCurrentThreat(index)}
                >
                  <div className="text-4xl mb-4">{threat.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{threat.name}</h3>
                  <p className="text-sm text-gray-600">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reporting Tools */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Reporting Tools & Helplines
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Know where to get help when you need it
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingTools.map((tool, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tool.name}</h3>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-green-600 font-bold text-lg">{tool.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Digital Behavior */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Be a Responsible Digital Citizen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to stay safe and legal online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">❌ Don't Do</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                  <p className="text-gray-700">Spread fake news (Section 505 IPC applies)</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                  <p className="text-gray-700">Forward violent or obscene content</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                  <p className="text-gray-700">Click suspicious links or download shady apps</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">✅ Always Do</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
                  <p className="text-gray-700">Update passwords regularly</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
                  <p className="text-gray-700">Use two-factor authentication</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
                  <p className="text-gray-700">Verify information before sharing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              With great digital power comes great digital responsibility. Know your rights, respect others' rights, and stay safe online.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Knowledge</strong> + 
                <strong className="text-emerald-600"> Awareness</strong> + 
                <strong className="text-teal-600"> Responsibility</strong> = 
                <strong className="text-green-700"> Digital Safety! 🌟</strong>
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

export default Module4CyberLaws;