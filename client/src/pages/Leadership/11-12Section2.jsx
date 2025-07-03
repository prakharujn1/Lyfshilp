import React, { useState, useEffect } from 'react';
import { Brain, Target, Scale, Users, AlertTriangle, CheckCircle, Eye, Lightbulb, ArrowRight, Clock, Shield, Zap } from 'lucide-react';

const Module2StrategicThinking = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentFramework, setCurrentFramework] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [decisionStep, setDecisionStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFramework(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const frameworks = [
    {
      name: "5-Whys Method",
      icon: <Eye className="w-8 h-8" />,
      description: "Dig deep to find the root cause of any problem",
      steps: ["Ask 'Why?' to the problem", "Ask 'Why?' to that answer", "Continue 5 times", "Find the real root cause"],
      example: "Problem: Low team morale → Why? → Why? → Why? → Root: Lack of recognition",
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Impact Mapping",
      icon: <Target className="w-8 h-8" />,
      description: "Evaluate decisions based on their potential impact",
      steps: ["List all options", "Rate impact (1-10)", "Rate effort needed (1-10)", "Choose high impact, low effort"],
      example: "Study methods: Online courses (Impact: 8, Effort: 3) = Best choice",
      color: "from-emerald-600 to-green-700"
    },
    {
      name: "Pros vs Cons Analysis",
      icon: <Scale className="w-8 h-8" />,
      description: "Weigh the advantages and disadvantages systematically",
      steps: ["List all pros", "List all cons", "Weight by importance", "Calculate final score"],
      example: "Joining debate team: Pros (skills, confidence) vs Cons (time, pressure)",
      color: "from-green-700 to-emerald-800"
    }
  ];

  const scenarios = [
    {
      title: "Peer Pressure Dilemma",
      situation: "Your friends want you to skip class for a movie, but you have an important test tomorrow.",
      factors: ["Friendship", "Academic performance", "Future consequences"],
      ethicalQuestion: "Is short-term fun worth long-term academic impact?",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Project Leadership Challenge",
      situation: "You're leading a group project but one member isn't contributing equally.",
      factors: ["Team fairness", "Project quality", "Relationship management"],
      ethicalQuestion: "How do you balance individual accountability with team harmony?",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Resource Allocation",
      situation: "You have limited time and must choose between extra study hours or helping a struggling classmate.",
      factors: ["Personal goals", "Helping others", "Time management"],
      ethicalQuestion: "When should personal advancement take priority over helping others?",
      color: "from-green-600 to-emerald-700"
    }
  ];

  const decisionSteps = [
    {
      step: "Define the Problem",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Clearly identify what needs to be decided",
      questions: ["What exactly is the issue?", "Who is affected?", "What's at stake?"]
    },
    {
      step: "Gather Information",
      icon: <Eye className="w-6 h-6" />,
      description: "Collect relevant facts and data",
      questions: ["What do I know?", "What do I need to find out?", "Who can provide insights?"]
    },
    {
      step: "Generate Options",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Brainstorm all possible solutions",
      questions: ["What are all my choices?", "Are there creative alternatives?", "What would others do?"]
    },
    {
      step: "Evaluate Consequences",
      icon: <Scale className="w-6 h-6" />,
      description: "Consider the outcomes of each option",
      questions: ["What are the short-term effects?", "What are the long-term impacts?", "Who gets affected?"]
    },
    {
      step: "Make the Decision",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Choose the best option and act on it",
      questions: ["Which option aligns with my values?", "What can I commit to?", "How will I implement this?"]
    }
  ];

  const biases = [
    {
      name: "Confirmation Bias",
      description: "Only looking for information that confirms what you already believe",
      example: "Only reading news that supports your opinion",
      solution: "Actively seek opposing viewpoints"
    },
    {
      name: "Anchoring Bias",
      description: "Being too influenced by the first piece of information you hear",
      example: "Setting goals based on someone else's achievement",
      solution: "Consider multiple reference points"
    },
    {
      name: "Groupthink",
      description: "Going along with the group to avoid conflict",
      example: "Agreeing with a bad idea because everyone else does",
      solution: "Encourage diverse perspectives"
    }
  ];

  return (
    <div
      id="s-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-2"] = el;
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
              Strategic Thinking & Decision-Making
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Think Smart. Decide Bold.
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
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leaders are defined by the decisions they make
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Under <strong className="text-green-600">pressure</strong>, with 
                <strong className="text-emerald-600"> limited time</strong>, and 
                <strong className="text-green-700"> incomplete information</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Strategic thinking helps you go beyond instincts to evaluate options and predict outcomes. 
              Because great leadership isn't impulsive — it's intentional.
            </p>
          </div>
        </div>

        {/* Decision-Making Process */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Strategic Decision Process
            </h2>
            <p className="text-lg text-gray-600">
              Follow these steps to make better decisions consistently
            </p>
          </div>

          {/* Interactive Decision Steps */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {decisionSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setDecisionStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      decisionStep === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {decisionSteps[decisionStep].icon}
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">Step {decisionStep + 1} of 5</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {decisionSteps[decisionStep].step}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {decisionSteps[decisionStep].description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">Key Questions to Ask:</h4>
                <div className="space-y-3">
                  {decisionSteps[decisionStep].questions.map((question, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{question}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setDecisionStep(Math.max(0, decisionStep - 1))}
                  disabled={decisionStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setDecisionStep(Math.min(4, decisionStep + 1))}
                  disabled={decisionStep === 4}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decision-Making Frameworks */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Master Decision-Making Frameworks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use these proven tools to solve problems clearly and systematically
            </p>
          </div>

          {/* Featured Framework (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Currently Featuring</div>
              <div className={`bg-gradient-to-r ${frameworks[currentFramework].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {frameworks[currentFramework].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{frameworks[currentFramework].name}</h3>
                    <p className="text-xl opacity-90">{frameworks[currentFramework].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold mb-3">Steps:</h4>
                    <div className="space-y-2">
                      {frameworks[currentFramework].steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold mb-3">Example:</h4>
                    <p className="text-sm leading-relaxed">{frameworks[currentFramework].example}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Frameworks Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentFramework === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentFramework(index)}
              >
                <div className={`bg-gradient-to-r ${framework.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {framework.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{framework.name}</h3>
                <p className="text-sm text-gray-600">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Thinking & Bias Section */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Avoid Common Thinking Traps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognize these biases that can lead to poor decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {biases.map((bias, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{bias.name}</h3>
                <p className="text-gray-600 mb-4">{bias.description}</p>
                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-red-700"><strong>Example:</strong> {bias.example}</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                  <p className="text-sm text-green-700"><strong>Solution:</strong> {bias.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Scenarios */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Practice Real-Life Scenarios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Test your decision-making skills in challenging situations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedScenario(selectedScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{scenario.situation}</p>
                
                {selectedScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Key Factors to Consider:</h4>
                      <ul className="space-y-1">
                        {scenario.factors.map((factor, factorIndex) => (
                          <li key={factorIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700 text-sm">{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Ethical Question:</h4>
                      <p className="text-gray-700 text-sm italic">{scenario.ethicalQuestion}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedScenario === index ? 'Click to collapse' : 'Click to analyze'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethics & Balance Section */}
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
                  Balance Logic and Ethics
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Great decisions aren't just <strong className="text-green-600">smart</strong> — 
                  they're also <strong className="text-emerald-600">fair</strong> and 
                  <strong className="text-green-700">principled</strong>.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center space-x-2">
                    <Scale className="w-5 h-5 text-green-600" />
                    <span>The Three-Filter Test:</span>
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">1</span>
                      </div>
                      <span><strong>Is it legal?</strong> Does it follow rules and laws?</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-sm">2</span>
                      </div>
                      <span><strong>Is it ethical?</strong> Is it the right thing to do?</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-700 font-bold text-sm">3</span>
                      </div>
                      <span><strong>How will it look?</strong> Would I be proud if this became public?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Smart + Ethical = Great Leadership</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <Brain className="w-6 h-6 text-green-600" />
                        <div className="text-left">
                          <p className="font-medium text-gray-800">Logic & Analysis</p>
                          <p className="text-sm text-gray-600">Data-driven decisions</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl text-gray-400">+</div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-emerald-600" />
                        <div className="text-left">
                          <p className="font-medium text-gray-800">Ethics & Values</p>
                          <p className="text-sm text-gray-600">Principle-based choices</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl text-gray-400">=</div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-l-4 border-green-600">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-6 h-6 text-green-700" />
                        <div className="text-left">
                          <p className="font-medium text-gray-800">Exceptional Leadership</p>
                          <p className="text-sm text-gray-600">Decisions people respect</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              Strategic thinking isn't about having all the answers — it's about asking the right questions 
              and following a thoughtful process to reach sound decisions.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap">
                <span className="font-bold text-green-600">Clear Process</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Smart Tools</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Ethical Foundation</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Great Decisions</span>
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

export default Module2StrategicThinking;