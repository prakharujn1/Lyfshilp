import React, { useState, useEffect } from 'react';
import { MessageCircle, Ear, Users, Shield, Volume2, Heart, Target, ArrowRight, CheckCircle, AlertTriangle, Zap, Eye, HandHeart } from 'lucide-react';

const Module3CommunicationConflict = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentCommunicationStyle, setCurrentCommunicationStyle] = useState(0);
  const [selectedConflictScenario, setSelectedConflictScenario] = useState(null);
  const [listeningStep, setListeningStep] = useState(0);
  const [selectedAudience, setSelectedAudience] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommunicationStyle(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const communicationStyles = [
    {
      name: "Assertive",
      icon: <Shield className="w-8 h-8" />,
      description: "Clear, confident, and respectful communication",
      characteristics: ["Direct but kind", "Stands up for beliefs", "Respects others' opinions", "Uses 'I' statements"],
      example: "I understand your point, but I believe we should consider this alternative approach.",
      color: "from-green-600 to-emerald-700",
      situation: "When you need to express your opinion firmly but respectfully"
    },
    {
      name: "Passive",
      icon: <Heart className="w-8 h-8" />,
      description: "Avoiding conflict, but sometimes at your own expense",
      characteristics: ["Avoids confrontation", "Puts others first", "May not express needs", "Seeks harmony"],
      example: "Whatever you think is best... I don't really mind.",
      color: "from-blue-500 to-blue-600",
      situation: "When preserving relationships is more important than your position"
    },
    {
      name: "Aggressive",
      icon: <Zap className="w-8 h-8" />,
      description: "Forceful approach that may damage relationships",
      characteristics: ["Dominates conversations", "Interrupts others", "Focuses on winning", "May hurt feelings"],
      example: "That's a terrible idea! We're doing it my way.",
      color: "from-red-500 to-red-600",
      situation: "Rarely appropriate - should be avoided in most leadership contexts"
    }
  ];

  const conflictScenarios = [
    {
      title: "Team Disagreement",
      situation: "Two team members have completely different ideas for the project direction, and both are passionate about their approach.",
      tension: "High emotions, personal investment in ideas",
      stakeholders: ["Team member A", "Team member B", "Rest of the team", "Project success"],
      steps: [
        "Listen to both sides completely",
        "Identify common goals",
        "Find compromise or hybrid solution",
        "Set clear next steps"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Miscommunication Crisis",
      situation: "A group project is behind schedule because team members understood their roles differently, leading to duplicated work and missed deadlines.",
      tension: "Frustration, blame, time pressure",
      stakeholders: ["Confused team members", "Project timeline", "Grade/outcome"],
      steps: [
        "Call emergency team meeting",
        "Clarify roles and responsibilities",
        "Create written action plan",
        "Establish check-in schedule"
      ],
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Personal vs Team Conflict",
      situation: "You need to address a friend's behavior that's negatively affecting the team's performance and morale.",
      tension: "Personal friendship vs team leadership",
      stakeholders: ["Your friend", "Team members", "Team performance", "Your relationship"],
      steps: [
        "Have private conversation first",
        "Focus on behavior, not personality",
        "Explain impact on team",
        "Work together on solution"
      ],
      color: "from-green-600 to-emerald-700"
    }
  ];

  const listeningSteps = [
    {
      step: "Give Full Attention",
      icon: <Eye className="w-6 h-6" />,
      description: "Put away distractions and focus completely on the speaker",
      tips: ["Make eye contact", "Put phone away", "Face the speaker", "Show you're present"]
    },
    {
      step: "Listen to Understand",
      icon: <Heart className="w-6 h-6" />,
      description: "Try to truly understand their perspective, not just wait for your turn",
      tips: ["Don't plan your response", "Listen for emotions", "Consider their viewpoint", "Suspend judgment"]
    },
    {
      step: "Reflect Back",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Summarize what you heard to confirm understanding",
      tips: ["'What I hear you saying is...'", "'It sounds like you feel...'", "'Am I understanding correctly?'", "Check for accuracy"]
    },
    {
      step: "Ask Clarifying Questions",
      icon: <Target className="w-6 h-6" />,
      description: "Dig deeper to fully understand the issue",
      tips: ["'Can you tell me more about...'", "'What would help you feel...'", "'When did this start?'", "Stay curious"]
    },
    {
      step: "Validate Emotions",
      icon: <HandHeart className="w-6 h-6" />,
      description: "Acknowledge their feelings even if you disagree with their position",
      tips: ["'I can see why you'd feel that way'", "'That must be frustrating'", "'Your feelings are valid'", "Separate emotions from solutions"]
    }
  ];

  const audienceTypes = [
    {
      type: "Formal Setting",
      description: "Presentations, meetings with authority figures, official events",
      tone: "Professional and structured",
      language: "Clear, respectful, well-organized",
      examples: ["Teacher conferences", "Scholarship interviews", "Student council meetings"],
      tips: ["Use proper titles", "Organize thoughts beforehand", "Speak clearly and confidently"],
      color: "from-green-600 to-emerald-700"
    },
    {
      type: "Friendly Setting",
      description: "Casual conversations with peers, team discussions, social events",
      tone: "Warm and approachable",
      language: "Conversational, inclusive, encouraging",
      examples: ["Study group discussions", "Club meetings", "Peer collaboration"],
      tips: ["Use inclusive language", "Be approachable", "Encourage participation"],
      color: "from-emerald-500 to-green-600"
    },
    {
      type: "Firm Setting",
      description: "Addressing problems, setting boundaries, making tough decisions",
      tone: "Direct but respectful",
      language: "Clear expectations, firm boundaries, solution-focused",
      examples: ["Addressing team conflicts", "Setting project deadlines", "Confronting issues"],
      tips: ["Be direct but kind", "Focus on behavior not person", "Offer solutions"],
      color: "from-green-700 to-emerald-800"
    }
  ];

  return (
    <div
      id="s-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-3"] = el;
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
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Persuasive Communication & Conflict Resolution
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Speak to Lead. Listen to Win.
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
            <div className="text-6xl mb-6">🗣️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leadership communication isn't just about talking
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                It's about <strong className="text-green-600">influence</strong>, 
                <strong className="text-emerald-600"> clarity</strong>, and 
                <strong className="text-green-700"> control in tough situations</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Whether you're managing group tension or persuading an audience, your words shape your leadership. 
              The goal: influence without manipulation, assert without aggression.
            </p>
          </div>
        </div>

        {/* Communication Styles */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Master Assertive Communication
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn to say what matters with clarity and respect
            </p>
          </div>

          {/* Featured Communication Style (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Communication Style Spotlight</div>
              <div className={`bg-gradient-to-r ${communicationStyles[currentCommunicationStyle].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {communicationStyles[currentCommunicationStyle].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{communicationStyles[currentCommunicationStyle].name}</h3>
                    <p className="text-xl opacity-90">{communicationStyles[currentCommunicationStyle].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Characteristics:</h4>
                    <div className="space-y-2">
                      {communicationStyles[currentCommunicationStyle].characteristics.map((char, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Example:</h4>
                    <p className="text-sm italic mb-4">"{communicationStyles[currentCommunicationStyle].example}"</p>
                    <h4 className="font-bold mb-2">When to Use:</h4>
                    <p className="text-sm">{communicationStyles[currentCommunicationStyle].situation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Communication Styles Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {communicationStyles.map((style, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentCommunicationStyle === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${index === 0 ? 'border-green-400 bg-gradient-to-br from-green-100 to-emerald-100' : ''}`}
                onClick={() => setCurrentCommunicationStyle(index)}
              >
                <div className={`bg-gradient-to-r ${style.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {style.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{style.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{style.description}</p>
                {index === 0 && (
                  <div className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Listening Process */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Power of Active Listening
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Great leaders listen more than they speak
            </p>
          </div>

          {/* Interactive Listening Steps */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {listeningSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setListeningStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      listeningStep === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {listeningSteps[listeningStep].icon}
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">Step {listeningStep + 1} of 5</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {listeningSteps[listeningStep].step}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {listeningSteps[listeningStep].description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">How to Do It:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {listeningSteps[listeningStep].tips.map((tip, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setListeningStep(Math.max(0, listeningStep - 1))}
                  disabled={listeningStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setListeningStep(Math.min(4, listeningStep + 1))}
                  disabled={listeningStep === 4}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Conflict Resolution Scenarios */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Resolve Conflicts with Confidence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use calm logic to turn tension into teamwork
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {conflictScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedConflictScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedConflictScenario(selectedConflictScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{scenario.situation}</p>
                
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="font-bold text-red-800 text-sm">Tension Level:</span>
                  </div>
                  <p className="text-red-700 text-sm">{scenario.tension}</p>
                </div>
                
                {selectedConflictScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Key Stakeholders:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {scenario.stakeholders.map((stakeholder, stakeholderIndex) => (
                          <div key={stakeholderIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{stakeholder}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Resolution Steps:</h4>
                      <div className="space-y-2">
                        {scenario.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold text-blue-800">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedConflictScenario === index ? 'Click to collapse' : 'Click to explore solution'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Adaptation */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Adapt to Your Audience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Know when to be formal, friendly, or firm — and why it matters
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audienceTypes.map((audience, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedAudience === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedAudience(selectedAudience === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${audience.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{audience.type}</h3>
                <p className="text-gray-600 mb-4">{audience.description}</p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-bold text-gray-800">Tone:</span>
                      <p className="text-gray-700">{audience.tone}</p>
                    </div>
                    <div>
                      <span className="font-bold text-gray-800">Language:</span>
                      <p className="text-gray-700">{audience.language}</p>
                    </div>
                  </div>
                </div>
                
                {selectedAudience === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Examples:</h4>
                      <div className="space-y-1">
                        {audience.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700 text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Key Tips:</h4>
                      <div className="space-y-1">
                        {audience.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedAudience === index ? 'Click to collapse' : 'Click to see examples'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Influence Ethics */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Influence Ethically
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Speak with <strong className="text-green-600">impact</strong> while staying true to your 
                  <strong className="text-emerald-600"> values</strong>. Great leaders influence through 
                  <strong className="text-green-700"> authenticity</strong>, not manipulation.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-green-600" />
                    <span>Ethical Influence Principles:</span>
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span><strong>Honesty:</strong> Always tell the truth, even when it's difficult</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span><strong>Respect:</strong> Value others' perspectives and autonomy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-700" />
                      </div>
                      <span><strong>Transparency:</strong> Be open about your intentions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-700" />
                      </div>
                      <span><strong>Mutual benefit:</strong> Seek win-win solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Influence vs Manipulation</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3 mb-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="font-bold text-gray-800">Ethical Influence</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Based on facts and logic</li>
                        <li>• Respects others' choice</li>
                        <li>• Benefits everyone involved</li>
                        <li>• Builds trust and relationships</li>
                      </ul>
                    </div>
                    <div className="text-2xl text-gray-400">vs</div>
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-400">
                      <div className="flex items-center space-x-3 mb-2">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                        <h4 className="font-bold text-gray-800">Manipulation</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Uses emotions unfairly</li>
                        <li>• Forces or tricks people</li>
                        <li>• Benefits only the manipulator</li>
                        <li>• Damages trust and relationships</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Framework */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The CLEAR Communication Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple method to ensure your message gets through
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  letter: "C",
                  word: "Clear",
                  description: "Simple, direct language",
                  example: "Instead of 'perhaps we might consider' say 'I suggest we'",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  letter: "L",
                  word: "Logical",
                  description: "Organized thoughts and reasons",
                  example: "First, second, third... because, therefore, as a result",
                  color: "from-emerald-500 to-green-600"
                },
                {
                  letter: "E",
                  word: "Empathetic",
                  description: "Consider others' feelings",
                  example: "'I understand this might be challenging, and here's how we can help'",
                  color: "from-green-600 to-emerald-700"
                },
                {
                  letter: "A",
                  word: "Actionable",
                  description: "Specific next steps",
                  example: "'By Friday, please complete X and send it to Y'",
                  color: "from-emerald-600 to-green-700"
                },
                {
                  letter: "R",
                  word: "Respectful",
                  description: "Honor others' perspectives",
                  example: "'I value your input and would like to add this perspective'",
                  color: "from-green-700 to-emerald-800"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-gradient-to-r ${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}>
                    {item.letter}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.word}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700 italic">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-900 ${
            visibleSections.includes(7) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">💬</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              Great communication isn't about having the loudest voice — it's about having the clearest message, 
              the strongest listening skills, and the deepest respect for others.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                <span className="font-bold text-green-600">Listen First</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Speak Clearly</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Act Respectfully</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Build Trust</span>
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

export default Module3CommunicationConflict;