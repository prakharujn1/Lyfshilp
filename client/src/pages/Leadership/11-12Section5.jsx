import React, { useState, useEffect } from 'react';
import { Brain, Scale, Shield, Search, Lightbulb, AlertTriangle, CheckCircle, Eye, Target, Users, ArrowRight, Zap, Filter, Clock, Heart } from 'lucide-react';

const Module5ProblemSolvingEthics = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentProblemStep, setCurrentProblemStep] = useState(0);
  const [selectedBias, setSelectedBias] = useState(null);
  const [ethicalScenario, setEthicalScenario] = useState(null);
  const [currentEthicalFilter, setCurrentEthicalFilter] = useState(0);
  const [solutionFinder, setSolutionFinder] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEthicalFilter(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const problemSolvingSteps = [
    {
      step: "Define the Problem",
      icon: <Target className="w-6 h-6" />,
      description: "Clearly identify what needs to be solved",
      questions: ["What exactly is wrong?", "Who is affected?", "When does this happen?", "Why is this a problem?"],
      tools: ["Problem statement template", "5W1H analysis", "Stakeholder mapping"],
      example: "Instead of 'bad teamwork' → 'Team members miss deadlines because responsibilities aren't clearly defined'"
    },
    {
      step: "Gather Information",
      icon: <Search className="w-6 h-6" />,
      description: "Collect relevant facts and different perspectives",
      questions: ["What data do I have?", "What's missing?", "Who else has dealt with this?", "What worked before?"],
      tools: ["Research methods", "Interviews", "Surveys", "Case studies"],
      example: "Survey team members, check past project timelines, research best practices for role clarity"
    },
    {
      step: "Generate Solutions",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Brainstorm multiple possible approaches",
      questions: ["What are all possible solutions?", "What would others do?", "What if we tried the opposite?", "How can we combine ideas?"],
      tools: ["Brainstorming", "Mind mapping", "SCAMPER method", "Reverse thinking"],
      example: "Create role matrix, implement check-in meetings, use project management tools, assign accountability partners"
    },
    {
      step: "Evaluate Options",
      icon: <Scale className="w-6 h-6" />,
      description: "Assess feasibility, impact, and alignment with values",
      questions: ["What are the pros/cons?", "What resources are needed?", "What could go wrong?", "Does this align with our values?"],
      tools: ["Decision matrix", "Cost-benefit analysis", "Risk assessment", "Ethical evaluation"],
      example: "Role matrix: Easy to implement, clear accountability. Check-ins: Time-consuming but builds communication"
    }
  ];

  const cognitiveBiases = [
    {
      name: "Confirmation Bias",
      icon: <Eye className="w-6 h-6" />,
      description: "Looking for information that confirms what you already believe",
      example: "Only asking friends who agree with you about a controversial decision",
      warning: "Leads to poor decisions based on incomplete information",
      solution: "Actively seek opposing viewpoints and challenge your assumptions",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Anchoring Bias",
      icon: <Target className="w-6 h-6" />,
      description: "Being overly influenced by the first piece of information you receive",
      example: "Setting your goal based on the first score you hear, not your actual potential",
      warning: "Limits creative thinking and optimal solutions",
      solution: "Consider multiple reference points and starting assumptions",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Groupthink",
      icon: <Users className="w-6 h-6" />,
      description: "Going along with the group to avoid conflict, even when you disagree",
      example: "Agreeing to a group decision you know is wrong to avoid being different",
      warning: "Suppresses innovation and can lead to poor group decisions",
      solution: "Encourage diverse perspectives and designate a devil's advocate",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const ethicalFilters = [
    {
      filter: "Fairness Test",
      icon: <Scale className="w-8 h-8" />,
      description: "Is this decision fair to everyone involved?",
      questions: ["Does this treat people equally?", "Are the benefits and burdens shared fairly?", "Would I want to be treated this way?"],
      example: "Giving extra credit only to students who can attend after-school sessions isn't fair to those with jobs or family responsibilities",
      color: "from-green-600 to-emerald-700"
    },
    {
      filter: "Impact Assessment",
      icon: <Target className="w-8 h-8" />,
      description: "What are the consequences for all stakeholders?",
      questions: ["Who benefits and who is harmed?", "What are the short and long-term effects?", "Are there unintended consequences?"],
      example: "Banning all social media in school might improve focus but could isolate students from important communication",
      color: "from-emerald-600 to-green-700"
    },
    {
      filter: "Intent Evaluation",
      icon: <Heart className="w-8 h-8" />,
      description: "Are the motives behind this decision ethical?",
      questions: ["What's the real reason for this choice?", "Am I being honest about my motivations?", "Would I be proud if my intentions were public?"],
      example: "Recommending a friend for a position they're not qualified for helps them but hurts the organization",
      color: "from-green-700 to-emerald-800"
    }
  ];

  const ethicalScenarios = [
    {
      title: "The Group Project Dilemma",
      situation: "One team member hasn't contributed to your group project, but they're dealing with serious family issues. The deadline is tomorrow.",
      stakeholders: ["Struggling team member", "Other team members", "Your grade", "Teacher expectations"],
      bestChoice: "Talk to them first, then approach teacher together for support",
      reasoning: "Combines fairness, positive impact, and good intent",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "The Leadership Position",
      situation: "You and your best friend are running for student council president. You discover information that could hurt their chances.",
      stakeholders: ["Your friend", "Yourself", "Student body", "Democratic process"],
      bestChoice: "Focus on your own platform and run a positive campaign",
      reasoning: "Maintains friendship, respects democratic process, and demonstrates ethical leadership",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "The Academic Advantage",
      situation: "You accidentally received next week's test questions in an email meant for teachers. Using them would guarantee a perfect score.",
      stakeholders: ["Yourself", "Classmates", "Teacher", "Academic integrity"],
      bestChoice: "Inform the teacher immediately and delete the email",
      reasoning: "Demonstrates integrity, protects fairness for all students, and builds trust",
      color: "from-green-600 to-emerald-700"
    }
  ];

  return (
    <div
      id="s-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-5"] = el;
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
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Problem Solving, Critical Thinking & Ethics
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Solve Right. Solve Smart.
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
            <div className="text-6xl mb-6">🧩</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Great leaders aren't just quick thinkers
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                They're <strong className="text-green-600">deep</strong>, 
                <strong className="text-emerald-600"> ethical</strong> problem-solvers who make decisions that 
                <strong className="text-green-700"> hold up under pressure and scrutiny</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              This module teaches you how to break down complex issues, avoid thinking traps, and choose fair solutions. 
              Smart thinking means asking not just "Can we?" but also "Should we?"
            </p>
          </div>
        </div>

        {/* Problem Solving Process */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Problem Solving Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Break down problems logically using structured tools
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {problemSolvingSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProblemStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentProblemStep === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {problemSolvingSteps[currentProblemStep].icon}
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">Step {currentProblemStep + 1} of 4</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {problemSolvingSteps[currentProblemStep].step}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {problemSolvingSteps[currentProblemStep].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Key Questions:</h4>
                  <div className="space-y-3">
                    {problemSolvingSteps[currentProblemStep].questions.map((question, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Useful Tools:</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      {problemSolvingSteps[currentProblemStep].tools.map((tool, index) => (
                        <div key={index}>• {tool}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">Example:</h4>
                    <p className="text-sm text-gray-700">{problemSolvingSteps[currentProblemStep].example}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentProblemStep(Math.max(0, currentProblemStep - 1))}
                  disabled={currentProblemStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentProblemStep(Math.min(3, currentProblemStep + 1))}
                  disabled={currentProblemStep === 3}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cognitive Biases */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Recognize Cognitive Biases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Avoid shortcuts that lead to bad decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cognitiveBiases.map((bias, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedBias === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedBias(selectedBias === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${bias.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {bias.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{bias.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{bias.description}</p>
                
                {selectedBias === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-red-800 mb-2 text-sm">Example:</h4>
                      <p className="text-red-700 text-xs">{bias.example}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-2 text-sm">Warning:</h4>
                      <p className="text-yellow-700 text-xs">{bias.warning}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-2 text-sm">Solution:</h4>
                      <p className="text-green-700 text-xs">{bias.solution}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedBias === index ? 'Click to collapse' : 'Click to learn more'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Filters */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Use Ethical Filters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evaluate actions through fairness, impact, and intent
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Ethical Filter Spotlight</div>
              <div className={`bg-gradient-to-r ${ethicalFilters[currentEthicalFilter].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {ethicalFilters[currentEthicalFilter].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{ethicalFilters[currentEthicalFilter].filter}</h3>
                    <p className="text-xl opacity-90">{ethicalFilters[currentEthicalFilter].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Key Questions:</h4>
                    <div className="space-y-2">
                      {ethicalFilters[currentEthicalFilter].questions.map((question, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Example:</h4>
                    <p className="text-sm leading-relaxed">{ethicalFilters[currentEthicalFilter].example}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ethicalFilters.map((filter, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentEthicalFilter === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentEthicalFilter(index)}
              >
                <div className={`bg-gradient-to-r ${filter.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {filter.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{filter.filter}</h3>
                <p className="text-sm text-gray-600">{filter.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Scenarios */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Practice Ethical Decision-Making
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Apply ethical filters to real-world leadership dilemmas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ethicalScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  ethicalScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setEthicalScenario(ethicalScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{scenario.situation}</p>
                
                {ethicalScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Stakeholders:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {scenario.stakeholders.map((stakeholder, stakeholderIndex) => (
                          <div key={stakeholderIndex} className="flex items-center space-x-2">
                            <Users className="w-3 h-3 text-blue-600" />
                            <span className="text-gray-700 text-xs">{stakeholder}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-2">Best Choice:</h4>
                      <p className="text-green-700 text-sm mb-2">{scenario.bestChoice}</p>
                      <h4 className="font-bold text-green-800 mb-2">Reasoning:</h4>
                      <p className="text-green-700 text-sm">{scenario.reasoning}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {ethicalScenario === index ? 'Click to collapse' : 'Click to analyze'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              The best solutions aren't always the fastest or easiest — they're the ones that solve the real problem 
              while staying true to your values and considering everyone affected.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                <span className="font-bold text-green-600">Define Clearly</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Think Critically</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Act Ethically</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Solve Effectively</span>
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

export default Module5ProblemSolvingEthics;