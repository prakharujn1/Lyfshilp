import React, { useState, useEffect } from 'react';
import { Users, Target, CheckCircle, UserCheck, Settings, Trophy, ArrowRight, Star, Lightbulb, Puzzle, Crown, Shield, Zap } from 'lucide-react';

const Module6TeamLeadership = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentConcept, setCurrentConcept] = useState(0);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [delegationStep, setDelegationStep] = useState(0);
  const [teamAssignments, setTeamAssignments] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConcept((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const keyConcepts = [
    {
      title: "Talent Mapping Matrix",
      description: "Understanding each team member's unique strengths and skills",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      details: "Map out what each person does best and where they can contribute most effectively."
    },
    {
      title: "ABCDE of Delegation",
      description: "A systematic approach to assigning tasks effectively",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      details: "Always Be Clear, Define Expectations, and Empower your team members."
    },
    {
      title: "Trust Equation",
      description: "Building trust through reliability and clear communication",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      details: "Trust = Competence + Reliability + Communication + Follow-through"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex",
      avatar: "👨‍💻",
      skills: ["Coding", "Problem Solving", "Attention to Detail"],
      strengths: "Technical Excellence",
      personality: "Analytical, Focused",
      bestFor: ["Development", "Quality Assurance", "Technical Research"]
    },
    {
      id: 2,
      name: "Maya",
      avatar: "👩‍🎨",
      skills: ["Design", "Creativity", "Visual Communication"],
      strengths: "Creative Vision",
      personality: "Artistic, Innovative",
      bestFor: ["Design", "Presentations", "Creative Solutions"]
    },
    {
      id: 3,
      name: "Jordan",
      avatar: "👨‍💼",
      skills: ["Communication", "Organization", "Leadership"],
      strengths: "Team Coordination",
      personality: "Outgoing, Organized",
      bestFor: ["Project Management", "Client Relations", "Team Coordination"]
    },
    {
      id: 4,
      name: "Sam",
      avatar: "👩‍🔬",
      skills: ["Research", "Analysis", "Documentation"],
      strengths: "Detail-Oriented Research",
      personality: "Methodical, Thorough",
      bestFor: ["Research", "Documentation", "Data Analysis"]
    }
  ];

  const projectRoles = [
    { id: "leader", title: "Project Leader", description: "Coordinates team and manages timeline" },
    { id: "designer", title: "Lead Designer", description: "Creates visual elements and user interface" },
    { id: "developer", title: "Lead Developer", description: "Handles technical implementation" },
    { id: "researcher", title: "Research Lead", description: "Gathers information and analyzes data" }
  ];

  const delegationSteps = [
    "Assign", "Brief", "Check", "Delegate", "Evaluate"
  ];

  const handleTeamAssignment = (memberId, roleId) => {
    setTeamAssignments(prev => ({
      ...prev,
      [roleId]: memberId
    }));
  };

  const getAssignmentFeedback = () => {
    const assignments = Object.entries(teamAssignments);
    if (assignments.length < 4) return "Complete all assignments to see feedback!";
    
    let score = 0;
    if (teamAssignments.leader === 3) score++; // Jordan for leadership
    if (teamAssignments.designer === 2) score++; // Maya for design
    if (teamAssignments.developer === 1) score++; // Alex for development
    if (teamAssignments.researcher === 4) score++; // Sam for research
    
    if (score === 4) return "🎉 Perfect match! You've assigned everyone to their strongest roles!";
    if (score >= 2) return "👍 Good assignments! Some roles could be optimized for better team performance.";
    return "🤔 Consider reassigning based on each member's strengths and skills.";
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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Team Leadership & Delegation
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of building high-performing teams and effective delegation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Users className="w-6 h-6" />, 
                text: "Building a high-functioning team", 
                color: "bg-green-100 text-green-700",
                description: "Learn to create teams that work together seamlessly" 
              },
              { 
                icon: <UserCheck className="w-6 h-6" />, 
                text: "Assigning roles based on strengths", 
                color: "bg-emerald-100 text-emerald-700",
                description: "Match the right people to the right tasks" 
              },
              { 
                icon: <Settings className="w-6 h-6" />, 
                text: "Managing accountability without micromanaging", 
                color: "bg-green-100 text-green-700",
                description: "Create trust while maintaining standards" 
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {objective.icon}
                  <p className="font-bold text-lg">{objective.text}</p>
                </div>
                <p className="text-sm opacity-80">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Deep Dive
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Being in charge doesn't mean doing everything — it means ensuring the 
                <strong className="text-green-700"> right people</strong> do the 
                <strong className="text-emerald-700"> right things</strong> with the 
                <strong className="text-green-700"> right support</strong>.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Crown className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Leadership Principle:</h3>
                </div>
                <p className="text-gray-600">
                  A great leader multiplies the capabilities of their team, rather than trying to do everything alone.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Leadership Formula</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Right People</span>
                      <span className="text-2xl">👥</span>
                    </div>
                  </div>
                  <div className="text-2xl text-green-600">+</div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Right Tasks</span>
                      <span className="text-2xl">✅</span>
                    </div>
                  </div>
                  <div className="text-2xl text-green-600">+</div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-600">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Right Support</span>
                      <span className="text-2xl">🛠️</span>
                    </div>
                  </div>
                  <div className="text-2xl text-green-600">=</div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-2 border-green-500">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-bold">Team Success</span>
                      <span className="text-2xl">🏆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Concepts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master these three fundamental concepts to become an effective team leader
            </p>
          </div>
          
          {/* Featured Concept (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${keyConcepts[currentConcept].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {keyConcepts[currentConcept].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{keyConcepts[currentConcept].title}</h3>
                    <p className="text-xl opacity-90">{keyConcepts[currentConcept].description}</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-lg">{keyConcepts[currentConcept].details}</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Key Concepts Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {keyConcepts.map((concept, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentConcept === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentConcept(index)}
              >
                <div className={`bg-gradient-to-r ${concept.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {concept.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                  {concept.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Team Architect Challenge */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Trophy className="w-10 h-10 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Team Architect Mission
              </h2>
            </div>
            <div className="bg-green-600 text-white rounded-full px-6 py-2 inline-block">
              🏗️ Team Strategist Badge
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Team Members */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Meet Your Project Team
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                      selectedTeamMember === member.id ? 'border-green-500 ring-4 ring-green-200' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedTeamMember(selectedTeamMember === member.id ? null : member.id)}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{member.avatar}</div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h4>
                      <p className="text-sm text-green-600 font-medium mb-3">{member.strengths}</p>
                      <p className="text-xs text-gray-500 mb-3">{member.personality}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700">Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map((skill, idx) => (
                            <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Assignment */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Assign Team Members to Project Roles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {projectRoles.map((role) => (
                  <div key={role.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{role.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-center text-gray-700">Assign to:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {teamMembers.map((member) => (
                          <button
                            key={member.id}
                            onClick={() => handleTeamAssignment(member.id, role.id)}
                            className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                              teamAssignments[role.id] === member.id
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                            }`}
                          >
                            {member.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-3">Assignment Feedback</h4>
                <p className="text-lg text-gray-700">{getAssignmentFeedback()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ABCDE Delegation Method */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The ABCDE of Delegation
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to effective task delegation
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {delegationSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 ${
                  delegationStep === index 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white scale-105' 
                    : 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200'
                }`}
                onMouseEnter={() => setDelegationStep(index)}
              >
                <div className={`text-3xl font-bold mb-2 ${delegationStep === index ? 'text-white' : 'text-green-600'}`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${delegationStep === index ? 'text-white' : 'text-gray-800'}`}>
                  {step}
                </h3>
                <div className={`text-sm ${delegationStep === index ? 'text-green-100' : 'text-gray-600'}`}>
                  {index === 0 && "Choose the right person for the task"}
                  {index === 1 && "Explain the task clearly and expectations"}
                  {index === 2 && "Verify understanding and answer questions"}
                  {index === 3 && "Give authority and resources needed"}
                  {index === 4 && "Review progress and provide feedback"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Equation Visual */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Shield className="w-10 h-10 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Trust Equation
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Building trust is the foundation of effective delegation
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-gray-800">Competence</h4>
                <p className="text-sm text-gray-600">Skills & Knowledge</p>
              </div>
              <div className="text-2xl text-green-600 text-center">+</div>
              <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-gray-800">Reliability</h4>
                <p className="text-sm text-gray-600">Consistent Performance</p>
              </div>
              <div className="text-2xl text-green-600 text-center">+</div>
            </div>
            <div className="grid md:grid-cols-4 gap-4 items-center mt-4">
              <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-gray-800">Communication</h4>
                <p className="text-sm text-gray-600">Clear & Open</p>
              </div>
              <div className="text-2xl text-green-600 text-center">+</div>
              <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-gray-800">Follow-through</h4>
                <p className="text-sm text-gray-600">Completing Commitments</p>
              </div>
              <div className="text-2xl text-green-600 text-center">=</div>
            </div>
            <div className="mt-6 text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 max-w-sm mx-auto">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-2xl font-bold">TRUST</h3>
                <p className="text-green-100">The foundation of great teams</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-6">
              Great leaders don't do everything themselves. They empower their team members 
              to do their best work by matching strengths to tasks and providing the right support.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Right People</strong> + 
                <strong className="text-emerald-600"> Right Tasks</strong> + 
                <strong className="text-green-600"> Right Support</strong> = 
                <strong className="text-emerald-600"> Team Success! 🏆</strong>
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

export default Module6TeamLeadership;