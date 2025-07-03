import React, { useState, useEffect } from 'react';
import { Shield, Eye, Users, Heart, Scale, AlertTriangle, CheckCircle, ArrowRight, Lightbulb, Target, Brain, Zap, Filter } from 'lucide-react';

const Module7EthicsBiasInclusiveLeadership = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentBiasType, setCurrentBiasType] = useState(0);
  const [selectedInclusionStrategy, setSelectedInclusionStrategy] = useState(null);
  const [moralCourageScenario, setMoralCourageScenario] = useState(null);
  const [fairnessAuditStep, setFairnessAuditStep] = useState(0);
  const [biasChecklistIndex, setBiasChecklistIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBiasType(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const biasTypes = [
    {
      name: "Unconscious Bias",
      icon: <Brain className="w-8 h-8" />,
      description: "Automatic judgments we make without realizing it",
      examples: ["Assuming leadership qualities based on appearance", "Expecting certain behaviors from different groups", "Making snap decisions about people's abilities"],
      impact: "Can lead to unfair treatment and missed opportunities for team members",
      solution: "Increase self-awareness and use structured decision-making processes",
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Confirmation Bias",
      icon: <Eye className="w-8 h-8" />,
      description: "Looking for information that confirms what we already believe",
      examples: ["Only noticing when someone meets your expectations", "Dismissing feedback that challenges your views", "Seeking opinions from people who agree with you"],
      impact: "Prevents learning and growth, reinforces stereotypes",
      solution: "Actively seek diverse perspectives and challenge your own assumptions",
      color: "from-emerald-600 to-green-700"
    },
    {
      name: "Favoritism",
      icon: <Heart className="w-8 h-8" />,
      description: "Giving unfair advantages to people we like or who are similar to us",
      examples: ["Always choosing the same people for good opportunities", "Being more lenient with friends", "Giving better feedback to people you connect with"],
      impact: "Creates inequality and damages team trust and morale",
      solution: "Use fair, transparent processes and rotate opportunities",
      color: "from-green-700 to-emerald-800"
    },
    {
      name: "Groupthink",
      icon: <Users className="w-8 h-8" />,
      description: "When groups make poor decisions to avoid conflict or maintain harmony",
      examples: ["Everyone agreeing to avoid arguments", "Not speaking up when you see problems", "Pressuring others to go along with the majority"],
      impact: "Leads to poor decisions and suppresses innovation",
      solution: "Encourage dissenting opinions and create psychological safety",
      color: "from-emerald-700 to-green-800"
    }
  ];

  const inclusionStrategies = [
    {
      strategy: "Create Psychological Safety",
      icon: <Shield className="w-6 h-6" />,
      description: "Make sure everyone feels safe to speak up, make mistakes, and be themselves",
      tactics: ["Respond positively to questions", "Admit your own mistakes", "Thank people for bringing up problems", "Show curiosity about different perspectives"],
      example: "When someone disagrees with your idea, say 'That's an interesting perspective. Tell me more about your thinking.'",
      color: "from-green-500 to-emerald-600"
    },
    {
      strategy: "Amplify All Voices",
      icon: <Users className="w-6 h-6" />,
      description: "Ensure everyone has equal opportunity to contribute and be heard",
      tactics: ["Use round-robin discussions", "Ask quieter members for input", "Summarize and credit ideas", "Create multiple ways to participate"],
      example: "Before we decide, let's hear from everyone. Sarah, what's your take on this?",
      color: "from-emerald-500 to-green-600"
    },
    {
      strategy: "Address Microaggressions",
      icon: <Eye className="w-6 h-6" />,
      description: "Notice and respond to small actions that exclude or diminish others",
      tactics: ["Learn to recognize subtle exclusion", "Interrupt respectfully", "Follow up privately", "Create accountability"],
      example: "I noticed you were interrupted. What were you going to say?",
      color: "from-green-600 to-emerald-700"
    },
    {
      strategy: "Celebrate Differences",
      icon: <Heart className="w-6 h-6" />,
      description: "Value diverse perspectives and experiences as strengths",
      tactics: ["Highlight different approaches", "Share diverse success stories", "Learn about team members' backgrounds", "Connect differences to outcomes"],
      example: "Maria's experience with customer service gives us insights the rest of us wouldn't have thought of.",
      color: "from-emerald-600 to-green-700"
    }
  ];

  const moralCourageScenarios = [
    {
      title: "The Popular but Problematic Decision",
      situation: "Your team wants to implement a solution that would benefit most members but would unfairly burden two quieter team members who haven't spoken up.",
      challenge: "Everyone seems excited except those being affected",
      moralDilemma: "Do you speak up for the minority when the majority is happy?",
      courageousAction: "Pause the decision and privately check with affected members, then bring their concerns to the group",
      outcome: "Short-term discomfort but long-term trust and better solutions",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "The Casual Discrimination",
      situation: "During a team meeting, someone makes a comment that stereotypes a particular group. Everyone laughs, but you notice one team member looks uncomfortable.",
      challenge: "Addressing it might make you unpopular",
      moralDilemma: "Do you call out behavior that others seem to accept?",
      courageousAction: "Address it in the moment with curiosity rather than accusation: 'I'm not sure everyone found that funny. Can we be more mindful?'",
      outcome: "Establishes standards and makes the environment safer for everyone",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "The Unfair Advantage",
      situation: "You discover that some team members have access to resources or information that others don't, giving them an unfair advantage in projects.",
      challenge: "You might benefit from the current system",
      moralDilemma: "Do you rock the boat when you might lose your advantage?",
      courageousAction: "Bring the issue to leadership and propose ways to ensure equal access for everyone",
      outcome: "Creates a fairer system and builds trust across the team",
      color: "from-green-600 to-emerald-700"
    }
  ];

  const fairnessAuditSteps = [
    {
      step: "Review Decision-Making Processes",
      icon: <Scale className="w-6 h-6" />,
      description: "Examine how choices are made in your team or organization",
      questions: ["Who gets to participate in decisions?", "Are criteria clear and consistent?", "Do we document our reasoning?", "How do we handle disagreements?"],
      actions: ["Map your decision-making process", "Identify who's involved at each step", "Look for patterns in who speaks up", "Check if quieter voices are heard"]
    },
    {
      step: "Analyze Opportunity Distribution",
      icon: <Target className="w-6 h-6" />,
      description: "Look at how opportunities and resources are shared",
      questions: ["Who gets the good assignments?", "How are learning opportunities distributed?", "Are leadership roles rotating?", "Do we have equal access to resources?"],
      actions: ["Track who gets what opportunities", "Look for patterns over time", "Ask team members about their experience", "Identify any systemic barriers"]
    },
    {
      step: "Examine Communication Patterns",
      icon: <Users className="w-6 h-6" />,
      description: "Study how information flows and who participates",
      questions: ["Who talks most in meetings?", "Whose ideas get built upon?", "How do we share important information?", "Are all communication styles welcomed?"],
      actions: ["Observe meeting dynamics", "Track speaking time", "Notice whose ideas get credit", "Check if information reaches everyone equally"]
    },
    {
      step: "Create Action Plans",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Develop specific steps to address any inequities found",
      questions: ["What specific changes will we make?", "How will we measure progress?", "Who will be accountable?", "When will we review again?"],
      actions: ["Set specific, measurable goals", "Assign responsibility for changes", "Create regular check-in schedule", "Plan for ongoing monitoring"]
    }
  ];

  const biasInterrupters = [
    {
      situation: "Making team selections",
      biasRisk: "Choosing people similar to yourself",
      interrupter: "Use blind resume reviews or diverse selection panels",
      result: "More diverse, qualified teams"
    },
    {
      situation: "Giving feedback",
      biasRisk: "Being harsher with some people than others",
      interrupter: "Use the same feedback framework for everyone",
      result: "Consistent, fair development opportunities"
    },
    {
      situation: "Recognizing achievements",
      biasRisk: "Only noticing certain types of contributions",
      interrupter: "Actively look for different styles of success",
      result: "Everyone feels valued for their unique strengths"
    },
    {
      situation: "Assigning responsibilities",
      biasRisk: "Making assumptions about who can handle what",
      interrupter: "Ask people what they want to work on",
      result: "People get opportunities to grow and surprise you"
    }
  ];

  return (
    <div
      id="s-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-7"] = el;
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
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ethics, Bias & Inclusive Leadership
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Lead Fair. Lead for All.
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
            <div className="text-6xl mb-6">⚖️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real leadership doesn't avoid bias — it actively works against it
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                This module trains you to <strong className="text-green-600">recognize hidden bias</strong>, 
                take <strong className="text-emerald-600"> inclusive decisions</strong>, and 
                <strong className="text-green-700"> stand up for what's fair</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Leadership means amplifying voices, not just tolerating them. 
              Fairness is not passive — it's courageous.
            </p>
          </div>
        </div>

        {/* Bias Recognition */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Spot Hidden Biases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how stereotypes and favoritism creep into decisions
            </p>
          </div>

          {/* Featured Bias Type (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Bias Type Spotlight</div>
              <div className={`bg-gradient-to-r ${biasTypes[currentBiasType].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {biasTypes[currentBiasType].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{biasTypes[currentBiasType].name}</h3>
                    <p className="text-xl opacity-90">{biasTypes[currentBiasType].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Common Examples:</h4>
                    <div className="space-y-2">
                      {biasTypes[currentBiasType].examples.map((example, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Impact:</h4>
                    <p className="text-sm mb-4">{biasTypes[currentBiasType].impact}</p>
                    <h4 className="font-bold mb-2">Solution:</h4>
                    <p className="text-sm">{biasTypes[currentBiasType].solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Bias Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biasTypes.map((bias, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentBiasType === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentBiasType(index)}
              >
                <div className={`bg-gradient-to-r ${bias.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {bias.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{bias.name}</h3>
                <p className="text-sm text-gray-600">{bias.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusive Leadership Strategies */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Lead with Inclusion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create space where every voice feels heard and respected
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {inclusionStrategies.map((strategy, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedInclusionStrategy === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedInclusionStrategy(selectedInclusionStrategy === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${strategy.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {strategy.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{strategy.strategy}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                
                {selectedInclusionStrategy === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Practical Tactics:</h4>
                      <div className="space-y-2">
                        {strategy.tactics.map((tactic, tacticIndex) => (
                          <div key={tacticIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{tactic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Example in Action:</h4>
                      <p className="text-xs text-gray-700 italic">"{strategy.example}"</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedInclusionStrategy === index ? 'Click to collapse' : 'Click to explore tactics'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moral Courage Scenarios */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Practice Moral Courage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stand firm even when fairness is unpopular
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {moralCourageScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  moralCourageScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setMoralCourageScenario(moralCourageScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{scenario.situation}</p>
                
                {moralCourageScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-2">The Challenge:</h4>
                      <p className="text-yellow-700 text-sm">{scenario.challenge}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-400">
                      <h4 className="font-bold text-purple-800 mb-2">Moral Dilemma:</h4>
                      <p className="text-purple-700 text-sm">{scenario.moralDilemma}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-2">Courageous Action:</h4>
                      <p className="text-green-700 text-sm mb-2">{scenario.courageousAction}</p>
                      <h4 className="font-bold text-green-800 mb-2">Likely Outcome:</h4>
                      <p className="text-green-700 text-sm">{scenario.outcome}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {moralCourageScenario === index ? 'Click to collapse' : 'Click to explore courage'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bias Interrupters */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Bias Interrupters in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical tools to catch and correct bias in real-time
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {biasInterrupters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setBiasChecklistIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      biasChecklistIndex === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {biasInterrupters[biasChecklistIndex].situation}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-3">⚠️ Bias Risk:</h4>
                  <p className="text-red-700">{biasInterrupters[biasChecklistIndex].biasRisk}</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-400">
                  <h4 className="font-bold text-blue-800 mb-3">🛡️ Interrupter:</h4>
                  <p className="text-blue-700">{biasInterrupters[biasChecklistIndex].interrupter}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400">
                  <h4 className="font-bold text-green-800 mb-3">✅ Result:</h4>
                  <p className="text-green-700">{biasInterrupters[biasChecklistIndex].result}</p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setBiasChecklistIndex(Math.max(0, biasChecklistIndex - 1))}
                  disabled={biasChecklistIndex === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setBiasChecklistIndex(Math.min(3, biasChecklistIndex + 1))}
                  disabled={biasChecklistIndex === 3}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fairness Audit Process */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Run a Fairness Audit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Test your leadership moves for equity and empathy
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {fairnessAuditSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFairnessAuditStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      fairnessAuditStep === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {fairnessAuditSteps[fairnessAuditStep].icon}
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">Step {fairnessAuditStep + 1} of 4</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {fairnessAuditSteps[fairnessAuditStep].step}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {fairnessAuditSteps[fairnessAuditStep].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Key Questions:</h4>
                  <div className="space-y-3">
                    {fairnessAuditSteps[fairnessAuditStep].questions.map((question, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Action Steps:</h4>
                  <div className="space-y-3">
                    {fairnessAuditSteps[fairnessAuditStep].actions.map((action, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setFairnessAuditStep(Math.max(0, fairnessAuditStep - 1))}
                  disabled={fairnessAuditStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setFairnessAuditStep(Math.min(3, fairnessAuditStep + 1))}
                  disabled={fairnessAuditStep === 3}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Inclusive Leadership Checklist */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Daily Inclusive Leadership Checklist
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple daily practices to build more inclusive leadership habits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Before Meetings",
                icon: <Users className="w-6 h-6" />,
                checklist: ["Who's missing from this conversation?", "How will quiet voices be heard?", "Are diverse perspectives represented?", "What assumptions am I making?"],
                color: "from-green-500 to-emerald-600"
              },
              {
                category: "During Discussions",
                icon: <Eye className="w-6 h-6" />,
                checklist: ["Am I listening to understand?", "Whose ideas am I building on?", "Who hasn't spoken yet?", "Are we considering all viewpoints?"],
                color: "from-emerald-500 to-green-600"
              },
              {
                category: "Making Decisions",
                icon: <Scale className="w-6 h-6" />,
                checklist: ["What voices influenced this choice?", "Who will be most affected?", "Is this fair to everyone?", "What did I miss or overlook?"],
                color: "from-green-600 to-emerald-700"
              },
              {
                category: "Follow-Up Actions",
                icon: <CheckCircle className="w-6 h-6" />,
                checklist: ["How will I share credit?", "What feedback will I seek?", "How will I measure impact?", "What will I do differently next time?"],
                color: "from-emerald-600 to-green-700"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${category.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.checklist.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-900 ${
            visibleSections.includes(7) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              Inclusive leadership isn't about being perfect — it's about being intentional. 
              Every small action to include, amplify, and stand up for others creates ripples 
              that make your entire community stronger and more innovative.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                <span className="font-bold text-green-600">Recognize Bias</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Include All Voices</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Act with Courage</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Create Equity</span>
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

export default Module7EthicsBiasInclusiveLeadership;