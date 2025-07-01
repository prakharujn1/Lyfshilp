import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Target, Lightbulb, CheckCircle, X, ArrowRight, Shield, Heart, Brain, Handshake, AlertCircle, Mail, Briefcase, TrendingUp } from 'lucide-react';

const Module4Communication = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentPersuasionTool, setCurrentPersuasionTool] = useState(0);
  const [currentConflictStyle, setCurrentConflictStyle] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPersuasionTool((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConflictStyle((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const persuasionTools = [
    {
      name: "Ethos",
      subtitle: "Credibility",
      description: "Build trust through expertise and reliability",
      example: "I've worked hard on this idea and done my research.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Pathos",
      subtitle: "Emotion",
      description: "Connect through feelings and personal values",
      example: "Imagine how many people this can help.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Logos",
      subtitle: "Logic",
      description: "Use facts, data, and reasoning",
      example: "Studies show that this method is 40% more effective.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-600 to-teal-600"
    }
  ];

  const conflictStyles = [
    {
      name: "Competing",
      description: "I'm right",
      traits: "High assertiveness, Low cooperation",
      icon: <Target className="w-6 h-6" />,
      color: "bg-red-100 border-red-300"
    },
    {
      name: "Avoiding",
      description: "I'll ignore this",
      traits: "Low assertiveness, Low cooperation",
      icon: <X className="w-6 h-6" />,
      color: "bg-gray-100 border-gray-300"
    },
    {
      name: "Accommodating",
      description: "You win",
      traits: "Low assertiveness, High cooperation",
      icon: <Handshake className="w-6 h-6" />,
      color: "bg-blue-100 border-blue-300"
    },
    {
      name: "Compromising",
      description: "Let's split the difference",
      traits: "Moderate assertiveness and cooperation",
      icon: <ArrowRight className="w-6 h-6" />,
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      name: "Collaborating",
      description: "Let's solve this together",
      traits: "High assertiveness, High cooperation (IDEAL)",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 border-green-300"
    }
  ];

  const handleAnswerSelect = (answer, isCorrect) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
    }, 3000);
  };

  return (
    <div
      id="s-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-4"] = el;
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
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Communication Mastery
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of persuasion, conflict resolution, and professional communication
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
              What You Will Master
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, text: "Persuasion & Influence", color: "bg-green-100 text-green-600" },
              { icon: <Handshake className="w-6 h-6" />, text: "Conflict Resolution", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Briefcase className="w-6 h-6" />, text: "Professional Communication", color: "bg-teal-100 text-teal-600" }
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
                  <p className="font-semibold text-lg">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Persuasion & Influence */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🎯 Mastering Persuasion & Influence
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Persuasion isn't just for politicians or advertisers. It's a skill that helps you get approval for your ideas, 
                win competitions, or even convince your parents to let you take a trip!
              </p>
            </div>
          </div>

          {/* Aristotle's Triad - Interactive Display */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Aristotle's Persuasion Tools
              </h3>
              <p className="text-gray-600">The three pillars of effective persuasion</p>
            </div>

            {/* Featured Tool */}
            <div className="mb-12">
              <div className={`bg-gradient-to-r ${persuasionTools[currentPersuasionTool].color} text-white rounded-3xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                      {persuasionTools[currentPersuasionTool].icon}
                    </div>
                    <h4 className="text-4xl font-bold mb-2">{persuasionTools[currentPersuasionTool].name}</h4>
                    <p className="text-xl opacity-90 mb-4">{persuasionTools[currentPersuasionTool].subtitle}</p>
                    <p className="text-lg mb-6">{persuasionTools[currentPersuasionTool].description}</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-sm italic">"{persuasionTools[currentPersuasionTool].example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Tools Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {persuasionTools.map((tool, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                    currentPersuasionTool === index ? 'ring-4 ring-green-300 scale-105' : ''
                  }`}
                  onClick={() => setCurrentPersuasionTool(index)}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-3 inline-block mb-4">
                    {tool.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Persuasive Message Structure */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Structure of a Persuasive Message
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Hook", description: "Start with a question, quote, or surprising fact", icon: <Lightbulb className="w-6 h-6" /> },
                { step: "2", title: "Message", description: "State your idea with reasons", icon: <MessageCircle className="w-6 h-6" /> },
                { step: "3", title: "Close", description: "Call to action or final strong point", icon: <Target className="w-6 h-6" /> }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="text-green-600">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Speech Example */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                📢 Campaign Speech Example
              </h3>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="prose prose-lg max-w-none">
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-green-400 pl-6 mb-6">
                  "Did you know that over 50% of students skip breakfast? This affects memory and focus. 
                  I'm proposing a 'Morning Bites' club with free breakfast bars. 
                  Let's take one small step for better mornings and bigger achievements!"
                </blockquote>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-green-100 rounded-lg p-4">
                  <h5 className="font-bold text-green-800 mb-2">Hook</h5>
                  <p className="text-sm text-green-700">"Did you know that over 50% of students skip breakfast?"</p>
                </div>
                <div className="bg-emerald-100 rounded-lg p-4">
                  <h5 className="font-bold text-emerald-800 mb-2">Message</h5>
                  <p className="text-sm text-emerald-700">"This affects memory and focus. I'm proposing a 'Morning Bites' club..."</p>
                </div>
                <div className="bg-teal-100 rounded-lg p-4">
                  <h5 className="font-bold text-teal-800 mb-2">Close</h5>
                  <p className="text-sm text-teal-700">"Let's take one small step for better mornings..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 4: Conflict Resolution */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🤝 Conflict Resolution & Difficult Conversations
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                You can't avoid conflict—but you can learn to handle it like a leader. 
                Whether you disagree with a teacher, a teammate, or a friend, your response shows emotional maturity.
              </p>
            </div>
          </div>

          {/* Conflict Styles */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Thomas-Kilmann Conflict Styles
              </h3>
              <p className="text-gray-600">Understanding different approaches to conflict</p>
            </div>

            {/* Featured Style */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                    {conflictStyles[currentConflictStyle].icon}
                  </div>
                  <h4 className="text-4xl font-bold mb-2">{conflictStyles[currentConflictStyle].name}</h4>
                  <p className="text-xl opacity-90 mb-4">"{conflictStyles[currentConflictStyle].description}"</p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm">{conflictStyles[currentConflictStyle].traits}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* All Styles Grid */}
            <div className="grid md:grid-cols-5 gap-4">
              {conflictStyles.map((style, index) => (
                <div
                  key={index}
                  className={`${style.color} border-2 rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                    currentConflictStyle === index ? 'ring-4 ring-green-300 scale-105' : ''
                  }`}
                  onClick={() => setCurrentConflictStyle(index)}
                >
                  <div className="mb-3">
                    {style.icon}
                  </div>
                  <h4 className="text-sm font-bold mb-2">{style.name}</h4>
                  <p className="text-xs text-gray-600">"{style.description}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* NVC Formula */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Non-Violent Communication (NVC) Formula
              </h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Observation", description: "State facts without judgment", example: "In yesterday's meeting..." },
                { step: "2", title: "Feeling", description: "Express your emotions", example: "...I felt excluded..." },
                { step: "3", title: "Need", description: "Identify what you value", example: "...because I value teamwork." },
                { step: "4", title: "Request", description: "Ask for specific action", example: "Can we rotate speaking roles next time?" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">{item.title}</h4>
                  <p className="text-gray-600 text-center mb-3">{item.description}</p>
                  <div className="bg-green-100 rounded-lg p-3">
                    <p className="text-sm text-green-800 italic text-center">"{item.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Comparison */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Better Communication Example
              </h3>
              <p className="text-gray-600">Scenario: A teammate is not doing their part</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <h4 className="text-lg font-bold text-red-800">Bad Approach</h4>
                </div>
                <blockquote className="text-red-700 italic">
                  "You're lazy."
                </blockquote>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-bold text-green-800">Better Approach</h4>
                </div>
                <blockquote className="text-green-700 italic">
                  "I've noticed delays in your tasks, and it's affecting our deadline. 
                  Can we figure out how to split work better?"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Part 5: Professional Communication */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              💼 Workplace & Professional Communication
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Good communication sets you apart, especially in the professional world 
                where clarity, tone, and etiquette are everything.
              </p>
            </div>
          </div>

          {/* Key Workplace Skills */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Key Workplace Skills
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: <Mail className="w-8 h-8" />, title: "Email Writing", description: "Proper subject lines, greetings, structure", color: "from-green-500 to-emerald-500" },
                { icon: <Users className="w-8 h-8" />, title: "Meeting Participation", description: "Short, clear, respectful points", color: "from-emerald-500 to-green-500" },
                { icon: <TrendingUp className="w-8 h-8" />, title: "Self-Presentation", description: "Elevator pitch in 30 seconds", color: "from-green-600 to-teal-600" },
                { icon: <AlertCircle className="w-8 h-8" />, title: "Professional Questioning", description: "Asking questions professionally", color: "from-teal-600 to-green-600" }
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${skill.color} text-white rounded-2xl p-6 transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold">{skill.title}</h4>
                  </div>
                  <p className="text-white/90">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Structure Example */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                📧 Professional Email Structure
              </h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-600 mb-2">Subject:</p>
                  <p className="font-semibold text-gray-800">Follow-up on Internship Application</p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>Hi [Name],</p>
                  <p>I hope you're well. I wanted to follow up on the status of my application for the [role]. 
                     I'm very excited about this opportunity and happy to provide more information if needed.</p>
                  <p>Warm regards,<br />[Your Name]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Elevator Pitch Example */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                🚀 Elevator Pitch Example
              </h3>
              <p className="text-gray-600">30-second self-introduction</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <blockquote className="text-lg text-gray-700 italic text-center">
                "I'm a Class 12 student passionate about psychology and communication. 
                I've led two school campaigns and created content for a mental health club. 
                I'm looking to learn more through real-world experience in this space."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🌟 Key Takeaways
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-green-600 mb-2">Persuasion</h4>
                <p className="text-gray-600">Use Ethos, Pathos, and Logos to influence ethically</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-emerald-600 mb-2">Conflict Resolution</h4>
                <p className="text-gray-600">Collaborate and use NVC for better outcomes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-teal-600 mb-2">Professional Skills</h4>
                <p className="text-gray-600">Master emails, meetings, and self-presentation</p>
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

export default Module4Communication;