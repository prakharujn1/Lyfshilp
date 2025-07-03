import React, { useState, useEffect } from 'react';
import { Zap, Target, TrendingUp, Users, Lightbulb, ArrowRight, CheckCircle, Eye, Settings, AlertTriangle, Brain, Heart, Clock, Award } from 'lucide-react';

const Module8LeadingChangeInnovation = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentChangeStage, setCurrentChangeStage] = useState(0);
  const [selectedInnovationMethod, setSelectedInnovationMethod] = useState(null);
  const [resistanceScenario, setResistanceScenario] = useState(null);
  const [measurementStep, setMeasurementStep] = useState(0);
  const [changeProject, setChangeProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChangeStage(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const changeStages = [
    {
      stage: "Identify High-Impact Problems",
      icon: <Target className="w-8 h-8" />,
      description: "Spot issues that matter and are worth solving",
      process: ["Look for repeated complaints", "Find bottlenecks in workflows", "Notice what frustrates people", "Identify what wastes time or resources"],
      questions: ["What problems affect the most people?", "What has the biggest impact on success?", "What do people complain about most?", "Where do we waste the most time?"],
      example: "Students always forget assignment deadlines → Create a shared digital calendar system",
      color: "from-green-600 to-emerald-700"
    },
    {
      stage: "Prototype & Pilot Ideas",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Test small solutions before going big",
      process: ["Start with minimum viable solution", "Test with small group first", "Gather feedback quickly", "Iterate based on results"],
      questions: ["What's the simplest version we can try?", "Who should test this first?", "How will we collect feedback?", "What would success look like?"],
      example: "Test the calendar with one class for a week, adjust based on their feedback",
      color: "from-emerald-600 to-green-700"
    },
    {
      stage: "Measure Impact Smartly",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Use clear metrics to track success and improvement",
      process: ["Define success metrics upfront", "Track both quantity and quality", "Measure unintended consequences", "Regular progress check-ins"],
      questions: ["How will we know if it's working?", "What unexpected effects might occur?", "How often should we measure?", "Who will track the data?"],
      example: "Track: missed deadlines (decreased 80%), student stress levels, teacher workload",
      color: "from-green-700 to-emerald-800"
    },
    {
      stage: "Lead Through Resistance",
      icon: <Users className="w-8 h-8" />,
      description: "Turn pushback into buy-in using empathy and vision",
      process: ["Listen to concerns first", "Acknowledge valid points", "Show benefits clearly", "Involve resisters in solutions"],
      questions: ["Why are people resistant?", "What are their valid concerns?", "How can we address their fears?", "How can we get them involved?"],
      example: "Some teachers worried about extra work → Show how it saves time, train them, get their input",
      color: "from-emerald-700 to-green-800"
    }
  ];

  const innovationMethods = [
    {
      method: "Design Thinking",
      icon: <Brain className="w-6 h-6" />,
      description: "Human-centered approach to innovation",
      steps: ["Empathize with users", "Define the problem", "Ideate solutions", "Prototype quickly", "Test and iterate"],
      when: "When solving people-centered problems",
      example: "Redesigning study spaces by observing how students actually use them",
      color: "from-green-500 to-emerald-600"
    },
    {
      method: "Rapid Prototyping",
      icon: <Zap className="w-6 h-6" />,
      description: "Build and test ideas quickly and cheaply",
      steps: ["Create simple version", "Test with real users", "Learn from failures", "Improve rapidly", "Scale what works"],
      when: "When you need to test ideas fast",
      example: "Making a paper mockup of an app before coding it",
      color: "from-emerald-500 to-green-600"
    },
    {
      method: "Systems Thinking",
      icon: <Settings className="w-6 h-6" />,
      description: "Look at how everything connects and affects each other",
      steps: ["Map all stakeholders", "Identify connections", "Find leverage points", "Consider ripple effects", "Design holistic solutions"],
      when: "When dealing with complex, interconnected problems",
      example: "Improving school tardiness by looking at buses, breakfast, parking, and class schedules together",
      color: "from-green-600 to-emerald-700"
    },
    {
      method: "Lean Startup",
      icon: <Target className="w-6 h-6" />,
      description: "Build-measure-learn cycles for continuous improvement",
      steps: ["Build minimum viable product", "Measure user response", "Learn from data", "Pivot or persevere", "Scale successful solutions"],
      when: "When creating new projects or ventures",
      example: "Starting a tutoring program with just one subject, then expanding based on demand",
      color: "from-emerald-600 to-green-700"
    }
  ];

  const resistanceScenarios = [
    {
      title: "The 'We've Always Done It This Way' Resistance",
      situation: "You propose a new system for organizing team projects, but several members say the old way works fine and don't want to change.",
      resistanceType: "Tradition and comfort with status quo",
      emotions: "Fear of learning new things, attachment to familiar processes",
      approach: "Show respect for the old way while demonstrating clear benefits of the new",
      tactics: ["Acknowledge what works about current system", "Start with small, easy changes", "Let them help design the new process", "Celebrate early wins together"],
      outcome: "Gradual adoption with team feeling valued and involved",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "The 'Too Much Work' Pushback",
      situation: "Your innovation requires team members to learn new skills, and they're already feeling overwhelmed with current responsibilities.",
      resistanceType: "Resource and capacity concerns",
      emotions: "Stress, feeling overwhelmed, worry about additional burden",
      approach: "Address workload concerns and provide adequate support",
      tactics: ["Break training into small chunks", "Show how it will save time later", "Provide extra support during transition", "Temporarily reduce other responsibilities"],
      outcome: "Team feels supported and sees long-term benefits",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "The 'It Won't Work Here' Skepticism",
      situation: "Team members believe your innovation might work elsewhere but won't succeed in your specific context due to unique challenges.",
      resistanceType: "Skepticism about feasibility",
      emotions: "Doubt, previous disappointment with failed changes, cynicism",
      approach: "Address specific concerns with evidence and local adaptation",
      tactics: ["Research similar successful implementations", "Pilot test in low-risk environment", "Adapt solution to local context", "Share success stories from similar situations"],
      outcome: "Evidence-based confidence and customized solution",
      color: "from-green-600 to-emerald-700"
    }
  ];

  const measurementFramework = [
    {
      step: "Define Success Metrics",
      icon: <Target className="w-6 h-6" />,
      description: "Clearly identify what success looks like",
      components: ["Quantitative measures (numbers)", "Qualitative measures (experiences)", "Leading indicators (early signs)", "Lagging indicators (final results)"],
      example: "For tutoring program: attendance rates, grade improvements, student confidence surveys, teacher feedback"
    },
    {
      step: "Set Baseline Measurements",
      icon: <Eye className="w-6 h-6" />,
      description: "Establish where you're starting from",
      components: ["Current state data", "Historical trends", "Comparison benchmarks", "Stakeholder feedback"],
      example: "Current: 60% assignment completion, stress level 7/10, 30% seek help when struggling"
    },
    {
      step: "Track Progress Regularly",
      icon: <Clock className="w-6 h-6" />,
      description: "Monitor changes over time with consistent check-ins",
      components: ["Weekly quick metrics", "Monthly deep dives", "Stakeholder pulse checks", "Unexpected consequence monitoring"],
      example: "Weekly: completion rates, Monthly: detailed surveys, Quarterly: comprehensive review"
    },
    {
      step: "Adapt Based on Data",
      icon: <Settings className="w-6 h-6" />,
      description: "Use insights to improve and adjust your approach",
      components: ["Data analysis", "Stakeholder input", "Course corrections", "Success celebration"],
      example: "Data shows method works but timing is wrong → Adjust schedule, keep core approach"
    }
  ];

  const changeProjects = [
    {
      title: "Digital Study Group Platform",
      problem: "Students struggle to form effective study groups and share resources",
      solution: "Create online platform for study group formation and resource sharing",
      impact: "Higher engagement, better academic performance, stronger peer connections",
      resistance: "Tech comfort levels, time investment, privacy concerns",
      metrics: ["Study group participation rates", "Resource sharing frequency", "Academic performance correlation", "User satisfaction scores"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Peer Mentorship Program",
      problem: "New students feel lost and disconnected, experienced students want to help but don't know how",
      solution: "Structured mentorship program pairing experienced students with newcomers",
      impact: "Faster integration, reduced anxiety, leadership development for mentors",
      resistance: "Time commitments, matching concerns, training requirements",
      metrics: ["Mentor-mentee satisfaction", "New student retention", "Social connection surveys", "Academic performance of mentees"],
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Sustainable Campus Initiative",
      problem: "High waste, low environmental awareness, inefficient resource use",
      solution: "Comprehensive sustainability program with education and action components",
      impact: "Reduced environmental footprint, increased awareness, cost savings",
      resistance: "Behavior change difficulty, initial costs, convenience concerns",
      metrics: ["Waste reduction percentages", "Energy usage", "Participation in green initiatives", "Awareness survey results"],
      color: "from-green-600 to-emerald-700"
    }
  ];

  return (
    <div
      id="s-8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-8"] = el;
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
                <Zap className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Leading Change & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Make Change. Make It Stick.
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
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leaders don't wait for change — they build it
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                This module equips you to <strong className="text-green-600">identify real problems</strong>, 
                <strong className="text-emerald-600"> design impactful solutions</strong>, and 
                <strong className="text-green-700"> scale innovation with feedback</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              You'll learn how to launch pilot ideas, manage resistance, and lead iterative change. 
              The focus is not on big ideas, but smart ones that work.
            </p>
          </div>
        </div>

        {/* Change Leadership Process */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Change Leadership Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating lasting, positive change
            </p>
          </div>

          {/* Featured Change Stage (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">Change Stage Spotlight</div>
              <div className={`bg-gradient-to-r ${changeStages[currentChangeStage].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {changeStages[currentChangeStage].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{changeStages[currentChangeStage].stage}</h3>
                    <p className="text-xl opacity-90">{changeStages[currentChangeStage].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Key Questions:</h4>
                    <div className="space-y-2">
                      {changeStages[currentChangeStage].questions.map((question, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-sm">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Example:</h4>
                    <p className="text-sm leading-relaxed">{changeStages[currentChangeStage].example}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Change Stages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {changeStages.map((stage, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentChangeStage === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentChangeStage(index)}
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

        {/* Innovation Methods */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Innovation Methodologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven approaches to generate and test new ideas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovationMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedInnovationMethod === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedInnovationMethod(selectedInnovationMethod === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${method.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{method.method}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                {selectedInnovationMethod === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Process Steps:</h4>
                      <div className="space-y-2">
                        {method.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-xs font-bold text-green-800">
                              {stepIndex + 1}
                            </div>
                            <span className="text-xs text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">When to Use:</h4>
                      <p className="text-xs text-gray-700 mb-2">{method.when}</p>
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Example:</h4>
                      <p className="text-xs text-gray-700 italic">{method.example}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedInnovationMethod === index ? 'Click to collapse' : 'Click to explore method'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Managing Resistance */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Lead Through Resistance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Turn pushback into buy-in using empathy and vision
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {resistanceScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  resistanceScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setResistanceScenario(resistanceScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{scenario.situation}</p>
                
                {resistanceScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-400">
                      <h4 className="font-bold text-red-800 mb-2">Resistance Type:</h4>
                      <p className="text-red-700 text-sm mb-2">{scenario.resistanceType}</p>
                      <h4 className="font-bold text-red-800 mb-2">Underlying Emotions:</h4>
                      <p className="text-red-700 text-sm">{scenario.emotions}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Leadership Approach:</h4>
                      <p className="text-gray-700 text-sm mb-3">{scenario.approach}</p>
                      <h4 className="font-bold text-gray-800 mb-2">Specific Tactics:</h4>
                      <div className="space-y-1">
                        {scenario.tactics.map((tactic, tacticIndex) => (
                          <div key={tacticIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{tactic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 mb-2">Expected Outcome:</h4>
                      <p className="text-green-700 text-sm">{scenario.outcome}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {resistanceScenario === index ? 'Click to collapse' : 'Click to explore strategy'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Measurement Framework */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Measure Impact Smartly
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use clear metrics to track success and improvement
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {measurementFramework.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMeasurementStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      measurementStep === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {measurementFramework[measurementStep].icon}
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">Step {measurementStep + 1} of 4</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {measurementFramework[measurementStep].step}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {measurementFramework[measurementStep].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Key Components:</h4>
                  <div className="space-y-3">
                    {measurementFramework[measurementStep].components.map((component, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Example:</h4>
                  <p className="text-gray-700">{measurementFramework[measurementStep].example}</p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setMeasurementStep(Math.max(0, measurementStep - 1))}
                  disabled={measurementStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setMeasurementStep(Math.min(3, measurementStep + 1))}
                  disabled={measurementStep === 3}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Change Project Examples */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Real Change Project Examples
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from practical examples of successful change initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {changeProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  changeProject === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setChangeProject(changeProject === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${project.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4"><strong>Problem:</strong> {project.problem}</p>
                
                {changeProject === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-700 text-sm">{project.solution}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Expected Impact:</h4>
                      <p className="text-gray-700 text-sm">{project.impact}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Potential Resistance:</h4>
                      <p className="text-gray-700 text-sm">{project.resistance}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Success Metrics:</h4>
                      <div className="space-y-1">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-start space-x-2">
                            <TrendingUp className="w-3 h-3 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {changeProject === index ? 'Click to collapse' : 'Click to explore details'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Toolkit */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Innovation Toolkit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential tools and techniques for leading successful change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tool: "Problem Definition Canvas",
                icon: <Target className="w-6 h-6" />,
                purpose: "Clearly define the problem you're solving",
                usage: "Who, what, when, where, why framework",
                color: "from-green-500 to-emerald-600"
              },
              {
                tool: "Rapid Prototype Kit",
                icon: <Zap className="w-6 h-6" />,
                purpose: "Test ideas quickly and cheaply",
                usage: "Paper, digital mockups, small-scale tests",
                color: "from-emerald-500 to-green-600"
              },
              {
                tool: "Stakeholder Map",
                icon: <Users className="w-6 h-6" />,
                purpose: "Identify everyone affected by the change",
                usage: "Power/interest matrix, influence analysis",
                color: "from-green-600 to-emerald-700"
              },
              {
                tool: "Success Metrics Dashboard",
                icon: <TrendingUp className="w-6 h-6" />,
                purpose: "Track progress and impact",
                usage: "Leading/lagging indicators, regular reviews",
                color: "from-emerald-600 to-green-700"
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${tool.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {tool.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{tool.tool}</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700"><strong>Purpose:</strong> {tool.purpose}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3">
                    <p className="text-xs text-gray-700"><strong>How to use:</strong> {tool.usage}</p>
                  </div>
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
              The best changes start small, listen to feedback, and grow organically. 
              Don't aim for perfect solutions — aim for better ones that you can actually implement and improve over time.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                <span className="font-bold text-green-600">Identify Problems</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Prototype Solutions</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Measure Impact</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Scale Success</span>
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

export default Module8LeadingChangeInnovation;