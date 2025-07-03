import React, { useState, useEffect } from 'react';
import { Users, Target, CheckCircle, Star, Settings, ArrowRight, Eye, Heart, Brain, Zap, Clock, Shield, UserCheck, Award, TrendingUp } from 'lucide-react';

const Module6TeamLeadershipDelegation = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentTeamStage, setCurrentTeamStage] = useState(0);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [delegationStep, setDelegationStep] = useState(0);
  const [teamScenario, setTeamScenario] = useState(null);
  const [trustLevel, setTrustLevel] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamStage(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const teamStages = [
    {
      stage: "Forming",
      icon: <Users className="w-8 h-8" />,
      description: "Team members get to know each other and understand the project",
      characteristics: ["Polite and positive", "Uncertain about roles", "Looking for guidance", "Testing boundaries"],
      leaderRole: "Be directive and provide clear structure and goals",
      color: "from-green-600 to-emerald-700"
    },
    {
      stage: "Storming",
      icon: <Zap className="w-8 h-8" />,
      description: "Conflicts arise as team members push boundaries and compete for position",
      characteristics: ["Disagreements emerge", "Challenging authority", "Competing for influence", "Frustration with progress"],
      leaderRole: "Coach and support while maintaining direction",
      color: "from-orange-500 to-red-600"
    },
    {
      stage: "Norming",
      icon: <Settings className="w-8 h-8" />,
      description: "Team develops working relationships and agrees on how to work together",
      characteristics: ["Increased cooperation", "Establishing norms", "Building trust", "Sharing responsibilities"],
      leaderRole: "Facilitate and encourage collaboration",
      color: "from-blue-500 to-blue-600"
    },
    {
      stage: "Performing",
      icon: <Award className="w-8 h-8" />,
      description: "Team works efficiently toward goals with minimal supervision needed",
      characteristics: ["High performance", "Self-managing", "Strong relationships", "Focused on results"],
      leaderRole: "Delegate and provide resources as needed",
      color: "from-green-700 to-emerald-800"
    }
  ];

  const teamMemberTypes = [
    {
      type: "The Achiever",
      icon: <Target className="w-6 h-6" />,
      strengths: ["Goal-oriented", "Reliable", "High standards", "Results-focused"],
      challenges: ["May be impatient", "Can be perfectionist", "Might overwhelm others"],
      delegationStyle: "Give them important, visible projects with clear success metrics",
      color: "from-green-500 to-emerald-600"
    },
    {
      type: "The Collaborator",
      icon: <Heart className="w-6 h-6" />,
      strengths: ["Team player", "Great communicator", "Supportive", "Builds relationships"],
      challenges: ["May avoid conflict", "Can be indecisive", "Might take on too much"],
      delegationStyle: "Assign tasks that involve coordination and relationship building",
      color: "from-emerald-500 to-green-600"
    },
    {
      type: "The Innovator",
      icon: <Brain className="w-6 h-6" />,
      strengths: ["Creative thinker", "Problem solver", "Adaptable", "Sees big picture"],
      challenges: ["May lose focus", "Can be disorganized", "Might resist routine"],
      delegationStyle: "Delegate creative and strategic thinking tasks with flexible deadlines",
      color: "from-green-600 to-emerald-700"
    }
  ];

  const delegationSteps = [
    {
      step: "Choose the Right Person",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Match the task to the person's skills, interests, and development needs",
      questions: ["Who has the right skills?", "Who would benefit from this experience?", "Who has the capacity?", "Who is interested in this type of work?"]
    },
    {
      step: "Set Clear Expectations",
      icon: <Target className="w-6 h-6" />,
      description: "Clearly communicate what success looks like and when it's needed",
      questions: ["What exactly needs to be done?", "When is the deadline?", "What does quality look like?", "What resources are available?"]
    },
    {
      step: "Provide Resources and Support",
      icon: <Settings className="w-6 h-6" />,
      description: "Ensure they have what they need to succeed",
      questions: ["What tools do they need?", "Who can help them?", "What information is required?", "What's their budget/authority?"]
    },
    {
      step: "Monitor Progress",
      icon: <Clock className="w-6 h-6" />,
      description: "Check in regularly without micromanaging",
      questions: ["How often should we check in?", "What milestones matter?", "How will they update me?", "When should I be concerned?"]
    }
  ];

  const teamScenarios = [
    {
      title: "The Overwhelmed High Performer",
      situation: "Your best team member is taking on too much work and showing signs of burnout, but they keep volunteering for more tasks.",
      challenge: "Balance their enthusiasm with their wellbeing",
      approach: "Have a private conversation about workload, redistribute tasks, teach them to say no",
      outcome: "Better work-life balance, opportunity for others to grow, sustained high performance",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "The Resistant Team Member",
      situation: "One team member consistently pushes back on decisions and seems to undermine team unity during meetings.",
      challenge: "Address resistance while maintaining team cohesion",
      approach: "One-on-one discussion to understand concerns, involve them in solution finding, set clear boundaries",
      outcome: "Better understanding of underlying issues, improved team dynamics, clearer expectations",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "The Skill Gap Challenge",
      situation: "Your team needs to complete a project that requires skills none of you currently have at an expert level.",
      challenge: "Bridge the skill gap while meeting deadlines",
      approach: "Identify team members most interested in learning, provide training resources, consider external support",
      outcome: "New skills developed, team capability increased, project completed successfully",
      color: "from-green-600 to-emerald-700"
    }
  ];

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
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
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
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Build Teams. Share Power.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Core Message */}
        <div 
          className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transform transition-all duration-700 ${
            visibleSections.includes(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center space-y-6">
            <div className="text-6xl mb-6">🤝</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Being a leader doesn't mean doing everything
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                It means getting the <strong className="text-green-600">best from everyone</strong>, 
                <strong className="text-emerald-600"> sharing power</strong>, and 
                <strong className="text-green-700"> building trust through effective delegation</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              This module focuses on forming strong teams, assigning roles, and managing accountability without micromanaging. 
              You'll learn how to build trust, empower others, and step back when needed. Effective delegation turns effort into synergy.
            </p>
          </div>
        </div>

        {/* Team Development Stages */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Understanding Team Development Stages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every team goes through predictable stages - knowing where you are helps you lead better
            </p>
          </div>

          {/* Featured Team Stage (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Team Stage Spotlight</div>
              <div className={`bg-gradient-to-r ${teamStages[currentTeamStage].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {teamStages[currentTeamStage].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{teamStages[currentTeamStage].stage}</h3>
                    <p className="text-xl opacity-90">{teamStages[currentTeamStage].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Team Characteristics:</h4>
                    <div className="space-y-2">
                      {teamStages[currentTeamStage].characteristics.map((char, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Your Role as Leader:</h4>
                    <p className="text-sm">{teamStages[currentTeamStage].leaderRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Team Stages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStages.map((stage, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTeamStage === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentTeamStage(index)}
              >
                <div className={`bg-gradient-to-r ${stage.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {stage.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{stage.stage}</h3>
                <p className="text-sm text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Member Types */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Map Team Strengths
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Match tasks with people's skills and motivation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMemberTypes.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedTeamMember === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedTeamMember(selectedTeamMember === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${member.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{member.type}</h3>
                
                {selectedTeamMember === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Strengths:</h4>
                      <div className="space-y-1">
                        {member.strengths.map((strength, strengthIndex) => (
                          <div key={strengthIndex} className="text-xs text-gray-700">• {strength}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Challenges:</h4>
                      <div className="space-y-1">
                        {member.challenges.map((challenge, challengeIndex) => (
                          <div key={challengeIndex} className="text-xs text-gray-700">• {challenge}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Delegation Style:</h4>
                      <p className="text-xs text-gray-700">{member.delegationStyle}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedTeamMember === index ? 'Click to collapse' : 'Click to explore'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delegation Process */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Delegate Effectively
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use the 4-step delegation process to assign, support, and review tasks
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {delegationSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setDelegationStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      delegationStep === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {delegationSteps[delegationStep].icon}
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">Step {delegationStep + 1} of 4</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {delegationSteps[delegationStep].step}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {delegationSteps[delegationStep].description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">Key Questions:</h4>
                <div className="space-y-3">
                  {delegationSteps[delegationStep].questions.map((question, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setDelegationStep(Math.max(0, delegationStep - 1))}
                  disabled={delegationStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setDelegationStep(Math.min(3, delegationStep + 1))}
                  disabled={delegationStep === 3}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Building */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Build Trust and Ownership
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              Make team members feel <strong className="text-green-600">responsible</strong>, not just 
              <strong className="text-emerald-600"> responsible for</strong>. Trust is the foundation of effective delegation.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="font-bold text-gray-800 mb-6">Trust Building Actions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { action: "Follow Through", description: "Always do what you say you'll do" },
                  { action: "Admit Mistakes", description: "Own up to errors and focus on solutions" },
                  { action: "Give Credit", description: "Recognize team members' contributions publicly" },
                  { action: "Ask for Input", description: "Seek others' opinions and consider them" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-800 mb-2">{item.action}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Leadership Scenarios */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Practice Team Leadership Scenarios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn to handle common team challenges with confidence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  teamScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setTeamScenario(teamScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{scenario.situation}</p>
                
                {teamScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-2">Challenge:</h4>
                      <p className="text-yellow-700 text-sm">{scenario.challenge}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-2">Recommended Approach:</h4>
                      <p className="text-green-700 text-sm mb-2">{scenario.approach}</p>
                      <h4 className="font-bold text-green-800 mb-2">Expected Outcome:</h4>
                      <p className="text-green-700 text-sm">{scenario.outcome}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {teamScenario === index ? 'Click to collapse' : 'Click to explore solution'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">👥</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              Great team leaders don't create followers — they develop other leaders. 
              When you empower others to succeed, everyone wins, and the impact multiplies far beyond what you could achieve alone.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                <span className="font-bold text-green-600">Build Trust</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Delegate Effectively</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Empower Others</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Create Leaders</span>
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
    </div>

    
  );
};

export default Module6TeamLeadershipDelegation;