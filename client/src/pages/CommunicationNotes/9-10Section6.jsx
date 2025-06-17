import React, { useState, useEffect } from 'react';
import { Mic, Users, Mail, FileText, Star, CheckCircle, ArrowRight, Eye, Target, MessageSquare, Lightbulb, Trophy, BookOpen, Presentation, Send, User, Clock, Award } from 'lucide-react';

const Section6Communication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTab, setActiveTab] = useState('speaking');
  const [emailPreview, setEmailPreview] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const speakingTips = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Plan",
      description: "Have a clear beginning, middle, and end",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Practice",
      description: "Rehearse in front of a mirror or friend",
      color: "bg-green-500"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Project Confidence",
      description: "Stand straight, make eye contact, smile",
      color: "bg-purple-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Engage Your Audience",
      description: "Ask questions, use real-life examples",
      color: "bg-pink-500"
    }
  ];

  const speechStructure = [
    {
      phase: "Hook",
      description: "Start with a quote, question, or surprising fact",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      example: "\"Did you know that 75% of people fear public speaking more than death?\""
    },
    {
      phase: "Body",
      description: "Present your 2-3 main points clearly",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500",
      example: "Point 1: Problem, Point 2: Solution, Point 3: Benefits"
    },
    {
      phase: "Conclusion",
      description: "End with a strong message or call to action",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      example: "\"Remember, every expert was once a beginner. Start your journey today!\""
    }
  ];

  const emailComponents = [
    { component: "Subject Line", description: "Clear and specific", example: "Meeting Request: Project Discussion" },
    { component: "Greeting", description: "Polite and appropriate", example: "Dear Mr. Sharma," },
    { component: "Body", description: "Clear reason for writing", example: "I hope this email finds you well..." },
    { component: "Closing", description: "Professional sign-off", example: "Best regards, Anuj Kumar" }
  ];

  const goodEmail = `Dear Ma'am,

I'd like to inform you I will be absent due to illness. Please let me know how I can catch up.

Thank you.
Regards, XYZ.`;

  return (
    <div
      id="m-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-6"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Mic className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Public Speaking & Professional Communication
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of speaking confidently and writing professionally 🎤✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('speaking')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'speaking'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Mic className="w-5 h-5 inline mr-2" />
                Public Speaking
              </button>
              <button
                onClick={() => setActiveTab('writing')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'writing'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Professional Writing
              </button>
            </div>
          </div>
        </div>

        {/* Public Speaking Section */}
        {activeTab === 'speaking' && (
          <div className="space-y-16 animate-fade-in">
            
            {/* What is Public Speaking */}
            <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What is Public Speaking?
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Public speaking is the skill of speaking in front of a group. It's useful in 
                  <strong className="text-purple-600"> class presentations</strong>, 
                  <strong className="text-blue-600"> interviews</strong>, and 
                  <strong className="text-indigo-600"> leadership roles</strong>.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border-l-4 border-purple-400">
                  <p className="text-lg text-gray-700 font-medium">
                    💡 <strong>Fun Fact:</strong> Public speaking is consistently rated as one of the most valuable skills 
                    for career success!
                  </p>
                </div>
              </div>
            </div>

            {/* Speaking Tips Grid */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Master These 4 Essential Tips
                </h2>
                <p className="text-xl text-gray-600">
                  Follow these proven strategies to become a confident speaker
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {speakingTips.map((tip, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`${tip.color} rounded-full p-3 w-fit mb-4 text-white`}>
                      {tip.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Speech Structure */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
              <div className="text-center mb-12">
                <div className="text-4xl mb-4">🏗️</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Structure of a Great Speech
                </h2>
                <p className="text-lg text-gray-600">
                  Every memorable speech follows this proven framework
                </p>
              </div>

              <div className="space-y-8">
                {speechStructure.map((phase, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className={`bg-gradient-to-r ${phase.color} rounded-2xl p-4 text-white flex-shrink-0`}>
                        {phase.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{phase.phase}</h3>
                        <p className="text-lg text-gray-600 mb-4">{phase.description}</p>
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                          <p className="text-gray-700 italic">
                            <strong>Example:</strong> {phase.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Practice Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🎭</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Practice Scenario
                </h2>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🎯 Your Challenge: School Presentation
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="text-3xl mb-2">📋</div>
                    <h4 className="font-bold text-gray-800 mb-2">Topic</h4>
                    <p className="text-gray-600">Environmental Conservation</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="text-3xl mb-2">👥</div>
                    <h4 className="font-bold text-gray-800 mb-2">Audience</h4>
                    <p className="text-gray-600">30 classmates + teacher</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="text-3xl mb-2">⏰</div>
                    <h4 className="font-bold text-gray-800 mb-2">Duration</h4>
                    <p className="text-gray-600">5 minutes</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-gray-700 text-center">
                    <strong>Remember:</strong> Hook → Body (3 main points) → Strong conclusion with call to action!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Professional Writing Section */}
        {activeTab === 'writing' && (
          <div className="space-y-16 animate-fade-in">
            
            {/* Email Components */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Professional Email Structure
                </h2>
                <p className="text-xl text-gray-600">
                  Every professional email should include these essential components
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {emailComponents.map((component, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-fit mb-4 text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{component.component}</h3>
                    <p className="text-gray-600 mb-4">{component.description}</p>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                      <p className="text-sm text-gray-700 italic">{component.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Example */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Perfect Email Example</h3>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 font-mono text-sm">
                    <div className="whitespace-pre-line text-gray-700">{goodEmail}</div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Clear and respectful greeting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Specific reason stated</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Professional closing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    🚫 What NOT to Do
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-red-800 mb-2">❌ Bad Example:</h4>
                      <p className="text-red-700 font-mono text-sm">
                        "hey cant come 2 school 2day sick ttyl"
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-800">Issues:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">No proper greeting</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">Text speak and abbreviations</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">No professional closing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">Poor grammar and spelling</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-3">💡 Pro Tips:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
                      <span className="text-blue-700">Keep sentences short and clear</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
                      <span className="text-blue-700">Use headings or bullet points in reports</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-600 mt-1" />
                      <span className="text-blue-700">Always proofread before sending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Example */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-purple-400">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🏢</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Corporate Communication Example
                </h2>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Subject: Project Completion - Thank You Team</h3>
                      <p className="text-gray-600">From: Manager to Development Team</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Professional ✓
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p><strong>Dear Team,</strong></p>
                  <p>I hope this email finds you well.</p>
                  <p>I wanted to take a moment to thank each of you for your outstanding work on the recent project. Your dedication and collaborative efforts made this success possible.</p>
                  <p>The client has expressed their satisfaction, and we're already seeing positive results from the implementation.</p>
                  <p>Thank you once again for your commitment to excellence.</p>
                  <p><strong>Best regards,<br />Sarah Johnson<br />Project Manager</strong></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎓</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Key Takeaways
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <Mic className="w-6 h-6 mr-2 text-purple-500" />
                Public Speaking
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-full p-1 mt-2">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Practice makes perfect</strong> - rehearse your speech multiple times
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-full p-1 mt-2">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">
                    Structure your speech with a clear <strong>hook, body, and conclusion</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 rounded-full p-1 mt-2">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Confidence</strong> comes from preparation and practice
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-500" />
                Professional Writing
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full p-1 mt-2">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">
                    Always include <strong>proper greetings and closings</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full p-1 mt-2">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Proofread</strong> your messages before sending
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full p-1 mt-2">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">
                    Keep your writing <strong>clear, polite, and structured</strong>
                  </p>
                </div>
              </div>
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

export default Section6Communication;