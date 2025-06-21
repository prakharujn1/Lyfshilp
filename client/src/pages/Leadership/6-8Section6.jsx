import React, { useState, useEffect } from 'react';
import { Users, User, Target, Star, CheckSquare, Trophy, Handshake, Settings, UserCheck, ArrowRight, Lightbulb, Building, Award, Heart } from 'lucide-react';

const Module6Teamwork = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);
  const [activeTeamTip, setActiveTeamTip] = useState(0);
  const [userActivity, setUserActivity] = useState({
    noteKeeper: '',
    speaker: '',
    timeKeeper: '',
    researcher: '',
    coordinator: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % teamRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamTip((prev) => (prev + 1) % teamworkTips.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const teamRoles = [
    {
      title: "Note-Taker",
      description: "Captures important ideas and decisions",
      icon: <CheckSquare className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Good at writing", "Detail-oriented", "Organized"]
    },
    {
      title: "Speaker/Presenter",
      description: "Shares team's ideas with others",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      skills: ["Confident speaking", "Clear communication", "Engaging"]
    },
    {
      title: "Time-Keeper",
      description: "Keeps the team on schedule",
      icon: <Settings className="w-6 h-6" />,
      color: "from-teal-500 to-green-600",
      skills: ["Good with time", "Organized", "Responsible"]
    },
    {
      title: "Researcher",
      description: "Finds information and resources",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      skills: ["Curious mind", "Good at finding info", "Analytical"]
    },
    {
      title: "Team Coordinator",
      description: "Helps everyone work together",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-emerald-600 to-green-500",
      skills: ["Great with people", "Problem solver", "Patient"]
    }
  ];

  const teamworkTips = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Know each team member's strength",
      description: "Everyone has special talents - discover them!",
      example: "Sarah is great at art, Tom loves math"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Give everyone a role",
      description: "When everyone has a job, everyone feels important",
      example: "Make Alex the presenter, Maya the organizer"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Trust your teammates",
      description: "Believe in others and they'll believe in themselves",
      example: "Let others do their part without constant checking"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Celebrate team success",
      description: "Success belongs to everyone, not just individuals",
      example: "Say 'We did it!' instead of 'I did it!'"
    }
  ];

  const delegationSteps = [
    {
      step: "1",
      title: "Identify the Task",
      description: "Break down what needs to be done",
      icon: <Target className="w-5 h-5" />
    },
    {
      step: "2", 
      title: "Match Skills",
      description: "Find who's best suited for each part",
      icon: <User className="w-5 h-5" />
    },
    {
      step: "3",
      title: "Assign Clearly",
      description: "Explain exactly what you need",
      icon: <CheckSquare className="w-5 h-5" />
    },
    {
      step: "4",
      title: "Support & Check",
      description: "Help when needed, check progress",
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const handleActivityChange = (role, value) => {
    setUserActivity(prev => ({
      ...prev,
      [role]: value
    }));
  };

  return (
    <div
      id="6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["6"] = el;
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
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Teamwork & Delegation
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to build strong teams and share work smartly 🤝
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, text: "How to build a strong team", color: "bg-green-100 text-green-600" },
              { icon: <Settings className="w-6 h-6" />, text: "How to share work in a smart way", color: "bg-emerald-100 text-emerald-600" }
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

        {/* Core Concept */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Teamwork Matters
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Leaders don't do everything alone. They build teams and share tasks. 
                This is called <strong className="text-green-600">delegation</strong> — 
                giving people different jobs based on what they are good at.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Trophy className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Key Insight:</h3>
                </div>
                <p className="text-gray-600">
                  A team can achieve much more than any individual working alone!
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Building Strong Teams</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Everyone has unique strengths</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Sharing work makes it easier</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Success is sweeter together</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Team Roles Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Team Roles & Responsibilities
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Every team member has a special role to play
              </p>
            </div>
          </div>
          
          {/* Featured Role (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${teamRoles[currentRole].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-5xl">
                    {teamRoles[currentRole].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{teamRoles[currentRole].title}</h3>
                    <p className="text-xl opacity-90 mb-4">{teamRoles[currentRole].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm font-medium mb-2">Perfect for someone who is:</p>
                      <div className="flex flex-wrap gap-2">
                        {teamRoles[currentRole].skills.map((skill, idx) => (
                          <span key={idx} className="bg-white/30 px-2 py-1 rounded text-xs">
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

          {/* All Team Roles Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentRole === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 2) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
                onClick={() => setCurrentRole(index)}
              >
                <div className={`bg-gradient-to-r ${role.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  {role.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{role.title}</h3>
                <p className="text-xs text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Dynamic Teamwork Tips */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Tips for Great Teamwork
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Showing</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-4xl">
                    {teamworkTips[activeTeamTip].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">{teamworkTips[activeTeamTip].title}</h3>
                    <p className="text-lg opacity-90">{teamworkTips[activeTeamTip].description}</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Example:</strong> {teamworkTips[activeTeamTip].example}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              {teamworkTips.map((tip, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 text-center cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                    activeTeamTip === index ? 'ring-4 ring-green-300 scale-105' : ''
                  }`}
                  onClick={() => setActiveTeamTip(index)}
                >
                  <div className="text-green-600 mb-2 flex justify-center">
                    {tip.icon}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{tip.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Activity Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Your Turn to Practice!
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Team Role Assignment Activity</h3>
              <p className="text-lg text-gray-700 mb-6">
                Imagine you're leading a group project to create a presentation about your favorite subject. 
                Assign roles to 5 team members based on their strengths!
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { key: 'noteKeeper', role: 'Note-Keeper', description: 'Who should capture all the important ideas?' },
                { key: 'speaker', role: 'Speaker/Presenter', description: 'Who should present to the class?' },
                { key: 'timeKeeper', role: 'Time-Keeper', description: 'Who should keep everyone on schedule?' },
                { key: 'researcher', role: 'Researcher', description: 'Who should find information and facts?' },
                { key: 'coordinator', role: 'Team Coordinator', description: 'Who should help everyone work together?' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">{item.role}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Great leaders don't try to do everything alone. They build strong teams, 
              trust their teammates, and celebrate success together.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Teamwork</strong> + 
                <strong className="text-emerald-600"> Smart Delegation</strong> + 
                <strong className="text-teal-600"> Trust</strong> = 
                <strong className="text-green-700"> Amazing Results! 🌟</strong>
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

export default Module6Teamwork;