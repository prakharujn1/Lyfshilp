import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  MessageSquare, 
  Shield, 
  Eye, 
  ThumbsUp, 
  ThumbsDown, 
  Mail, 
  Linkedin, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Users,
  Globe,
  Lock,
  Heart,
  Star,
  Send,
  Image,
  Video,
  Camera
} from 'lucide-react';

const Module6DigitalCommunication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [selectedExample, setSelectedExample] = useState('good');
  const [interactiveAnswers, setInteractiveAnswers] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const digitalTips = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Keep it Clear",
      description: "Short, respectful messages work best",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Think Before You Post",
      description: "Your digital footprint lasts forever",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Professional",
      description: "Use proper photos and handles",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Be Kind Online",
      description: "Treat others with respect digitally",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Matters",
      description: "Check your privacy settings regularly",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build Networks",
      description: "Connect meaningfully with others",
      color: "from-teal-600 to-green-600"
    }
  ];

  const dosAndDonts = {
    dos: [
      { text: "Keep messages short and clear", icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
      { text: "Use professional photos", icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
      { text: "Respond politely to messages", icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
      { text: "Think before you post", icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
      { text: "Check your privacy settings", icon: <CheckCircle className="w-5 h-5 text-green-600" /> }
    ],
    donts: [
      { text: "Write in ALL CAPS", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Post emotional rants publicly", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Argue aggressively online", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Share personal information publicly", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Post without thinking", icon: <XCircle className="w-5 h-5 text-red-500" /> }
    ]
  };

  const messageExamples = {
    bad: {
      title: "❌ Poor Example",
      message: "HEY!!! I NEED HELP WITH MY PROJECT RIGHT NOW!!! CAN YOU HELP ME OR NOT???",
      issues: ["Using ALL CAPS", "Demanding tone", "No politeness", "Excessive punctuation"]
    },
    good: {
      title: "✅ Good Example",
      message: "Hi [Name], I really admire your work in [area]. I'm currently exploring similar interests and would love to ask a couple of questions if you have 10 minutes sometime. Thank you for your time!",
      strengths: ["Polite greeting", "Specific compliment", "Clear request", "Respectful of time", "Proper closing"]
    }
  };

  const handleInteractiveAnswer = (questionId, answer) => {
    setInteractiveAnswers(prev => ({
      ...prev,
      [questionId]: answer
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Digital & Social Media Communication
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of communicating responsibly and effectively in the digital world
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
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Shield className="w-6 h-6" />, 
                text: "How to communicate responsibly and smartly online", 
                color: "bg-green-100 text-green-600" 
              },
              { 
                icon: <AlertTriangle className="w-6 h-6" />, 
                text: "What not to post or say digitally", 
                color: "bg-emerald-100 text-emerald-600" 
              },
              { 
                icon: <Star className="w-6 h-6" />, 
                text: "How to use platforms to create opportunities", 
                color: "bg-teal-100 text-teal-600" 
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-sm md:text-base">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Digital Communication Matters */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Digital Communication Matters
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your digital tone matters as much as your spoken one. Most teens now prefer texting (35%) and digital communication over face-to-face interaction. 
                <strong className="text-green-600"> Recruiters, professors, and mentors</strong> often look at how you present yourself online.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Remember:</h3>
                </div>
                <p className="text-gray-600">
                  Almost 50% of under-19s lack basic digital skills - but you can be different by learning proper digital communication!
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Texting</p>
                    <p className="text-xs text-gray-500">35% prefer</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-4">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Social Media</p>
                    <p className="text-xs text-gray-500">16% prefer</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-4">
                    <Video className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Video Chat</p>
                    <p className="text-xs text-gray-500">10% prefer</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <p className="text-xs text-gray-500">Professional</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Teen Communication Preferences</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Communication Tips (Auto-rotating) */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Essential Digital Communication Tips
            </h2>
          </div>
          
          {/* Featured Tip (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${digitalTips[currentTip].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-4xl">{digitalTips[currentTip].icon}</div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{digitalTips[currentTip].title}</h3>
                    <p className="text-lg opacity-90">{digitalTips[currentTip].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Tips Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {digitalTips.map((tip, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTip === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentTip(index)}
              >
                <div className={`bg-gradient-to-r ${tip.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {tip.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dos and Don'ts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dos */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-400">
            <div className="flex items-center space-x-3 mb-6">
              <ThumbsUp className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">DO These Things</h3>
            </div>
            <div className="space-y-4">
              {dosAndDonts.dos.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {item.icon}
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 border-l-4 border-red-400">
            <div className="flex items-center space-x-3 mb-6">
              <ThumbsDown className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-800">DON'T Do These</h3>
            </div>
            <div className="space-y-4">
              {dosAndDonts.donts.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {item.icon}
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Examples */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Message Examples
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare these examples to see the difference between good and poor digital communication
            </p>
          </div>

          {/* Example Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedExample === 'bad' 
                    ? 'bg-red-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setSelectedExample('bad')}
              >
                Poor Example
              </button>
              <button
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedExample === 'good' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setSelectedExample('good')}
              >
                Good Example
              </button>
            </div>
          </div>

          {/* Example Display */}
          <div className={`max-w-4xl mx-auto rounded-3xl p-8 shadow-xl border-l-4 ${
            selectedExample === 'bad' 
              ? 'bg-gradient-to-r from-red-50 to-pink-50 border-red-400' 
              : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-400'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {messageExamples[selectedExample].title}
            </h3>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <div className="flex items-start space-x-3">
                <div className={`rounded-full p-2 ${
                  selectedExample === 'bad' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  <Mail className={`w-5 h-5 ${
                    selectedExample === 'bad' ? 'text-red-600' : 'text-green-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 italic text-lg leading-relaxed">
                    "{messageExamples[selectedExample].message}"
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {selectedExample === 'bad' ? (
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Issues with this message:
                  </h4>
                  <ul className="space-y-2">
                    {messageExamples.bad.issues.map((issue, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Strengths of this message:
                  </h4>
                  <ul className="space-y-2">
                    {messageExamples.good.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Activity */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Quick Check: Test Your Knowledge
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Which of these is the BEST way to ask for help from a teacher via email?
              </h3>
              <div className="space-y-3">
                {[
                  { id: 'q1a', text: "HELP ME NOW!!!", correct: false },
                  { id: 'q1b', text: "Hi [Teacher's name], I hope you're well. I'm struggling with [specific topic] and would appreciate some guidance. Could we schedule a brief meeting? Thank you!", correct: true },
                  { id: 'q1c', text: "hey can u help me with homework", correct: false }
                ].map((option, index) => (
                  <button
                    key={option.id}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                      interactiveAnswers.q1 === option.id
                        ? option.correct
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                    onClick={() => handleInteractiveAnswer('q1', option.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        interactiveAnswers.q1 === option.id
                          ? option.correct
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-gray-300'
                      }`}>
                        {interactiveAnswers.q1 === option.id && (
                          option.correct ? 
                            <CheckCircle className="w-4 h-4 text-white" /> :
                            <XCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
              {interactiveAnswers.q1 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800">
                    {interactiveAnswers.q1 === 'q1b' 
                      ? "Excellent! This message is polite, specific, and respectful of the teacher's time."
                      : "Not quite right. Remember to be polite, specific, and professional in your communication."
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                What should you avoid when posting on social media?
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { id: 'q2a', text: "Sharing personal information publicly", correct: true },
                  { id: 'q2b', text: "Using proper spelling and grammar", correct: false },
                  { id: 'q2c', text: "Posting angry rants about others", correct: true },
                  { id: 'q2d', text: "Being respectful to others", correct: false }
                ].map((option, index) => (
                  <button
                    key={option.id}
                    className={`text-left p-4 rounded-lg border transition-all duration-300 ${
                      interactiveAnswers.q2 === option.id
                        ? option.correct
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                    onClick={() => handleInteractiveAnswer('q2', option.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        interactiveAnswers.q2 === option.id
                          ? option.correct
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-gray-300'
                      }`}>
                        {interactiveAnswers.q2 === option.id && (
                          option.correct ? 
                            <CheckCircle className="w-4 h-4 text-white" /> :
                            <XCircle className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
              {interactiveAnswers.q2 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800">
                    {(['q2a', 'q2c'].includes(interactiveAnswers.q2))
                      ? "Correct! Both sharing personal information and posting angry rants should be avoided on social media."
                      : "That's actually something you SHOULD do, not avoid. Look for things that could be harmful or unprofessional."
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Platforms */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Professional Platforms & Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to use digital platforms to create opportunities and build your future
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LinkedIn Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Networks</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <h4 className="font-bold text-gray-800 mb-2">Building Your Profile</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Use a professional photo</li>
                    <li>• Write a clear, engaging headline</li>
                    <li>• Highlight your skills and interests</li>
                    <li>• Connect with classmates and teachers</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <h4 className="font-bold text-gray-800 mb-2">Networking Tips</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Send personalized connection requests</li>
                    <li>• Share educational content</li>
                    <li>• Engage thoughtfully with posts</li>
                    <li>• Join student groups and communities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Email Communication */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Professional Email</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <h4 className="font-bold text-gray-800 mb-2">Email Structure</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Clear, specific subject line</li>
                    <li>• Professional greeting</li>
                    <li>• Concise, well-organized body</li>
                    <li>• Polite closing and signature</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-4 border-l-4 border-teal-400">
                  <h4 className="font-bold text-gray-800 mb-2">Best Practices</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Proofread before sending</li>
                    <li>• Use professional email address</li>
                    <li>• Respond within 24-48 hours</li>
                    <li>• Keep it brief and focused</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Footprint Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Globe className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Your Digital Footprint Matters
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you post online creates a digital footprint that can last forever. Make sure yours represents the best version of yourself!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Think Before You Post</h3>
              <p className="text-sm text-gray-600">Would you be comfortable if your parents, teachers, or future employers saw this?</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Privacy Settings</h3>
              <p className="text-sm text-gray-600">Regularly check and update your privacy settings on all social media platforms.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Build Your Brand</h3>
              <p className="text-sm text-gray-600">Use social media to showcase your achievements, interests, and positive personality.</p>
            </div>
          </div>
        </div>

        {/* Platform-Specific Tips */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Platform-Specific Communication Tips
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Social Media Platforms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                Social Media Platforms
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Camera className="w-5 h-5 text-green-600 mr-2" />
                    Instagram & Snapchat
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Think before posting stories - they're not as private as you think</li>
                    <li>• Use appropriate captions and hashtags</li>
                    <li>• Be mindful of what's in the background of photos</li>
                    <li>• Avoid oversharing personal information</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-emerald-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Video className="w-5 h-5 text-emerald-600 mr-2" />
                    TikTok & YouTube
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Create positive, educational, or entertaining content</li>
                    <li>• Avoid participating in dangerous trends</li>
                    <li>• Be respectful in comments and interactions</li>
                    <li>• Consider the long-term impact of your content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Messaging Apps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <MessageSquare className="w-6 h-6 text-green-600 mr-3" />
                Messaging Apps
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-teal-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Send className="w-5 h-5 text-teal-600 mr-2" />
                    WhatsApp & Discord
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Use group chats responsibly - don't spam</li>
                    <li>• Respect others' time zones and availability</li>
                    <li>• Keep conversations appropriate and inclusive</li>
                    <li>• Don't share others' personal information</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-400">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-2" />
                    Text Messages
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Use proper spelling for important messages</li>
                    <li>• Don't text during inappropriate times (late night, class)</li>
                    <li>• Clarify tone when necessary - add emojis thoughtfully</li>
                    <li>• Respond within a reasonable timeframe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Citizenship */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🌍</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Being a Good Digital Citizen
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
              Digital citizenship means using technology responsibly and respectfully
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Be Kind</h3>
              <p className="text-sm text-gray-600">Treat others online the same way you'd treat them in person</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Stay Safe</h3>
              <p className="text-sm text-gray-600">Protect your personal information and report inappropriate behavior</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Think Critically</h3>
              <p className="text-sm text-gray-600">Verify information before sharing and avoid spreading misinformation</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Include Others</h3>
              <p className="text-sm text-gray-600">Make digital spaces welcoming and inclusive for everyone</p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-3">Remember</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Your digital communication reflects your character</li>
                  <li>• Think before you post - it might be there forever</li>
                  <li>• Be professional in all digital interactions</li>
                  <li>• Use technology to create positive opportunities</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-600 mb-3">Practice</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Review your social media profiles regularly</li>
                  <li>• Practice writing professional emails</li>
                  <li>• Build meaningful digital connections</li>
                  <li>• Stay updated on digital communication trends</li>
                </ul>
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

export default Module6DigitalCommunication;