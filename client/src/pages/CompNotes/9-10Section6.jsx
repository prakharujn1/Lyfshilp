import React, { useState, useEffect } from 'react';
import { 
  Zap, TrendingUp, Target, DollarSign, Users, Briefcase, 
  Shield, AlertTriangle, Eye, Brain, Lock, UserX, 
  ChevronRight, CheckCircle, XCircle, BarChart3, 
  HeartHandshake, Lightbulb, Cpu, Globe, ArrowRight,
  Clock, Smartphone, Car, Bot, Activity, MapPin,
  ShoppingCart, Plane, Home, Camera, FileText, Scale
} from 'lucide-react';

const Module6 = ({ topicRefs }) => {
  const [activeSection, setActiveSection] = useState('benefits');
  const [visibleCards, setVisibleCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Staggered animation for cards
    const timer = setTimeout(() => {
      setVisibleCards(prev => [...prev, 0]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visibleCards.length > 0 && visibleCards.length < 8) {
      const timer = setTimeout(() => {
        setVisibleCards(prev => [...prev, prev.length]);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [visibleCards]);

  const benefits = [
    {
      icon: Zap,
      title: "Efficiency and Productivity",
      subtitle: "24/7 Performance Without Breaks",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      examples: [
        { icon: Bot, title: "Customer Service", desc: "Chatbots handle basic queries instantly, reducing wait times from hours to seconds", metric: "Instant Response" },
        { icon: BarChart3, title: "Data Analysis", desc: "AI analyzes years of business data in minutes, helping companies make faster decisions", metric: "Minutes vs Years" },
        { icon: Cpu, title: "Manufacturing", desc: "AI-powered robots increase production speed and reduce errors in assembly lines", metric: "Zero Breaks" }
      ]
    },
    {
      icon: Target,
      title: "Improved Accuracy",
      subtitle: "Precision Beyond Human Capability",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      examples: [
        { icon: Activity, title: "Medical Diagnosis", desc: "AI detects certain cancers in medical scans with 95%+ accuracy, spotting issues doctors might miss", metric: "95%+ Accuracy" },
        { icon: Globe, title: "Weather Forecasting", desc: "AI has improved weather prediction accuracy, helping farmers and disaster preparedness teams", metric: "Better Predictions" },
        { icon: TrendingUp, title: "Financial Trading", desc: "AI reduces human error in trading decisions by analyzing market patterns objectively", metric: "Reduced Errors" }
      ]
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      subtitle: "Smart Optimization Saves Money",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      examples: [
        { icon: Car, title: "Uber/Ola Dynamic Pricing", desc: "AI optimizes pricing to balance supply and demand, reducing wait times and increasing earnings", metric: "Optimal Pricing" },
        { icon: Home, title: "Energy Management", desc: "Smart grids use AI to optimize electricity distribution, reducing waste and lowering costs", metric: "Less Waste" },
        { icon: Plane, title: "Predictive Maintenance", desc: "Airlines use AI to predict when aircraft parts need replacement, preventing costly breakdowns", metric: "Prevent Breakdowns" }
      ]
    },
    {
      icon: HeartHandshake,
      title: "Accessibility and Inclusion",
      subtitle: "Technology for Everyone",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      examples: [
        { icon: Smartphone, title: "Voice Control", desc: "People with limited mobility can control devices using voice commands through AI assistants", metric: "Voice Powered" },
        { icon: FileText, title: "Real-time Captioning", desc: "AI provides live captions for deaf and hard-of-hearing individuals during video calls", metric: "Live Captions" },
        { icon: MapPin, title: "Navigation for the Blind", desc: "Apps like Seeing AI describe surroundings and read text aloud for visually impaired users", metric: "Audio Navigation" }
      ]
    }
  ];

  const challenges = [
    {
      icon: Briefcase,
      title: "Job Displacement",
      subtitle: "Automation Impact on Employment",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      severity: "High",
      examples: [
        { icon: Cpu, title: "Manufacturing", desc: "Robots have replaced many assembly line workers", impact: "Job Loss" },
        { icon: Car, title: "Transportation", desc: "Self-driving vehicles may reduce demand for drivers", impact: "Future Risk" },
        { icon: Bot, title: "Customer Service", desc: "Chatbots are replacing human customer service representatives", impact: "Ongoing" }
      ],
      balance: "While AI eliminates some jobs, it also creates new ones in AI development, maintenance, and oversight."
    },
    {
      icon: Shield,
      title: "Privacy and Data Security",
      subtitle: "Personal Information at Risk",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      severity: "Critical",
      examples: [
        { icon: Users, title: "Social Media", desc: "Facebook's AI algorithms know your interests, relationships, and behaviors better than you might realize", impact: "Data Mining" },
        { icon: Home, title: "Smart Devices", desc: "Alexa and Google Home are always listening, potentially recording private conversations", impact: "Always Listening" },
        { icon: Camera, title: "Facial Recognition", desc: "Surveillance systems can track your movements in public spaces without your consent", impact: "Tracking" }
      ],
      balance: "GDPR in Europe and similar laws require companies to be transparent about data collection and allow users to control their information."
    },
    {
      icon: Scale,
      title: "Bias and Fairness",
      subtitle: "Unfair AI Decision Making",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      severity: "Medium",
      examples: [
        { icon: Users, title: "Hiring AI", desc: "Some AI recruitment tools showed bias against women because they were trained on historical hiring data", impact: "Gender Bias" },
        { icon: Scale, title: "Criminal Justice", desc: "AI systems used to predict recidivism showed racial bias", impact: "Racial Bias" },
        { icon: DollarSign, title: "Loan Approvals", desc: "AI credit scoring systems sometimes discriminated against minorities", impact: "Financial Bias" }
      ],
      balance: "Researchers are working on techniques to detect and reduce bias in AI systems."
    },
    {
      icon: Eye,
      title: "Lack of Transparency",
      subtitle: "Black Box Decision Making",
      color: "from-gray-500 to-slate-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      severity: "Medium",
      examples: [
        { icon: Activity, title: "Medical AI", desc: "If AI recommends a treatment, doctors and patients want to understand the reasoning", impact: "Trust Issues" },
        { icon: DollarSign, title: "Credit Decisions", desc: "When AI denies a loan, applicants have the right to know why", impact: "Unexplained" },
        { icon: Scale, title: "Criminal Justice", desc: "AI-assisted sentencing decisions need to be explainable and justifiable", impact: "Justice Concerns" }
      ]
    }
  ];

  const additionalChallenges = [
    {
      icon: UserX,
      title: "Dependence and Skill Loss",
      color: "from-amber-400 to-orange-500",
      examples: [
        "Navigation: Many people can no longer read maps or navigate without GPS",
        "Mental Math: Calculator dependence has reduced mental arithmetic skills", 
        "Writing: Predictive text and autocorrect might be affecting spelling and grammar abilities"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Security Vulnerabilities",
      color: "from-red-500 to-rose-600",
      examples: [
        "Deepfakes: AI-generated fake videos can spread misinformation",
        "Adversarial Attacks: Small changes to images can fool AI systems",
        "Data Poisoning: Attackers can corrupt AI training data to make systems behave incorrectly"
      ]
    }
  ];

  return (
    <div
      id="m-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-6"] = el;
        }
      }}
      className="mb-12"
    >
         <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Scale className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-400 rounded-full animate-bounce delay-300 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Benefits & Challenges
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                of Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Every powerful technology has two sides - incredible benefits and serious challenges. Let's explore both!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveSection('benefits')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'benefits' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Benefits of AI
            </button>
            <button
              onClick={() => setActiveSection('challenges')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'challenges' 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <AlertTriangle className="w-5 h-5" />
              Challenges & Concerns
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        {activeSection === 'benefits' && (
          <div className="space-y-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-4">
                <CheckCircle className="w-5 h-5" />
                The Bright Side of AI
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How AI Makes Our Lives Better
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AI is transforming industries and improving lives in remarkable ways. Here are the key benefits:
              </p>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${benefit.bgColor} ${benefit.borderColor} border-2 rounded-3xl p-8 sm:p-12`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-lg text-gray-600">{benefit.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {benefit.examples.map((example, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center`}>
                            <example.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{example.title}</h4>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{example.metric}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{example.desc}</p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ChevronRight className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Challenges Section */}
        {activeSection === 'challenges' && (
          <div className="space-y-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium mb-4">
                <AlertTriangle className="w-5 h-5" />
                Important Challenges to Address
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The Other Side of the Story
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With great power comes great responsibility. AI brings significant challenges we must address:
              </p>
            </div>

            {challenges.map((challenge, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${challenge.bgColor} ${challenge.borderColor} border-2 rounded-3xl p-8 sm:p-12`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <challenge.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{challenge.title}</h3>
                        <p className="text-lg text-gray-600">{challenge.subtitle}</p>
                      </div>
                    </div>
                    {challenge.severity && (
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                        challenge.severity === 'Critical' ? 'bg-red-200 text-red-800' :
                        challenge.severity === 'High' ? 'bg-orange-200 text-orange-800' :
                        'bg-yellow-200 text-yellow-800'
                      }`}>
                        {challenge.severity} Impact
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {challenge.examples.map((example, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-400">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center`}>
                            <example.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{example.title}</h4>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">{example.impact}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{example.desc}</p>
                      </div>
                    ))}
                  </div>

                  {challenge.balance && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-blue-900 mb-2">The Balance</h4>
                          <p className="text-blue-800 leading-relaxed">{challenge.balance}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Additional Challenges */}
            <div className="grid md:grid-cols-2 gap-8">
              {additionalChallenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center`}>
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {challenge.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm leading-relaxed">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI is neither purely good nor bad - it's a powerful tool that reflects how we choose to use it. 
              Understanding both benefits and challenges helps us make informed decisions about AI's role in our future.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-green-300 mb-3" />
                <h4 className="font-bold text-green-100 mb-2">Benefits are Real</h4>
                <p className="text-green-200 text-sm">AI improves efficiency, accuracy, and accessibility across many industries</p>
              </div>
              <div className="bg-red-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <AlertTriangle className="w-8 h-8 text-red-300 mb-3" />
                <h4 className="font-bold text-red-100 mb-2">Challenges Need Solutions</h4>
                <p className="text-red-200 text-sm">Privacy, bias, and job displacement require careful planning and regulation</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-white font-medium">Continue to Module 7</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Module6;