import React, { useState, useEffect } from 'react';
import { Lightbulb, Target, Users, TrendingUp, Zap, CheckCircle, AlertCircle, ArrowRight, Rocket, Cog, BarChart3, Clock, Star, ChevronRight, PlayCircle, RefreshCw, Award, Trophy, Send, Presentation, ThumbsUp, DollarSign, Calendar, User } from 'lucide-react';

const Module8ChangeInnovation = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentInnovationStep, setCurrentInnovationStep] = useState(0);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [challengeStep, setChallengeStep] = useState('problem');
  const [pilotProgress, setPilotProgress] = useState(0);
    const [pitchScore, setPitchScore] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInnovationStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setPilotProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(progressInterval);
  }, []);

  const innovationCycle = [
    {
      step: "Problem",
      icon: <AlertCircle className="w-8 h-8" />,
      description: "Identify real issues worth solving",
      color: "from-green-400 to-emerald-500",
      example: "Students waste food in cafeteria"
    },
    {
      step: "Prototype",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Design creative solutions",
      color: "from-emerald-400 to-green-500",
      example: "Food sharing app concept"
    },
    {
      step: "Pilot",
      icon: <PlayCircle className="w-8 h-8" />,
      description: "Test your idea small-scale",
      color: "from-green-500 to-teal-500",
      example: "Try with one class for a week"
    },
    {
      step: "Feedback",
      icon: <RefreshCw className="w-8 h-8" />,
      description: "Learn from results and improve",
      color: "from-teal-500 to-green-600",
      example: "Students love it, teachers need training"
    },
    {
      step: "Scale",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Expand successful solutions",
      color: "from-green-600 to-emerald-600",
      example: "Roll out to entire school"
    }
  ];

   const schoolProblems = [
    {
      id: 1,
      title: "Food Waste",
      description: "Students throw away untouched food daily",
      impact: "High",
      difficulty: "Medium",
      icon: "🍽️",
      solutions: ["Food sharing app", "Portion size adjustment", "Donation program"]
    },
    {
      id: 2,
      title: "Classroom Boredom",
      description: "Students feel disengaged during lessons",
      impact: "High",
      difficulty: "High",
      icon: "😴",
      solutions: ["Interactive learning games", "Peer teaching sessions", "Real-world project connections"]
    },
    {
      id: 3,
      title: "Bullying",
      description: "Some students feel unsafe or excluded",
      impact: "Critical",
      difficulty: "High",
      icon: "🛡️",
      solutions: ["Anonymous reporting system", "Peer mediation program", "Kindness campaigns"]
    },
    {
      id: 4,
      title: "Plastic Waste",
      description: "Too many single-use items in school",
      impact: "Medium",
      difficulty: "Low",
      icon: "♻️",
      solutions: ["Reusable bottle program", "Plastic-free lunch initiative", "Recycling education"]
    }
  ];

    const challengeSteps = [
    { id: 'problem', title: 'Pick a Problem', icon: <AlertCircle className="w-6 h-6" /> },
    { id: 'design', title: 'Design Solution', icon: <Lightbulb className="w-6 h-6" /> },
    { id: 'pilot', title: 'Build Pilot Plan', icon: <Cog className="w-6 h-6" /> },
    { id: 'pitch', title: 'Pitch to Board', icon: <Presentation className="w-6 h-6" /> },
    { id: 'results', title: 'Get Results', icon: <Trophy className="w-6 h-6" /> }
  ];

  const resistanceCurve = [
    { phase: "Denial", emotion: "😤", description: "This won't work here" },
    { phase: "Resistance", emotion: "😬", description: "We've always done it this way" },
    { phase: "Exploration", emotion: "🤔", description: "Maybe we should try..." },
    { phase: "Commitment", emotion: "😊", description: "This is actually helpful!" }
  ];

  const metrics = [
    { name: "Participation Rate", value: 78, color: "bg-green-500" },
    { name: "Problem Solved", value: 85, color: "bg-emerald-500" },
    { name: "User Satisfaction", value: 92, color: "bg-teal-500" },
    { name: "Cost Effectiveness", value: 65, color: "bg-green-600" }
  ];

  const calculatePitchScore = () => {
    const innovation = Math.floor(Math.random() * 30) + 70; // 70-100
    const impact = Math.floor(Math.random() * 25) + 75; // 75-100
    const feasibility = Math.floor(Math.random() * 20) + 80; // 80-100
    const total = Math.round((innovation + impact + feasibility) / 3);
    
    setPitchScore({ innovation, impact, feasibility, total });
    setShowFeedback(true);
  };

  return (
    <div
      id="m-8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-8"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-transparent to-emerald-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-bounce">
                <Rocket className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Leading Change & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Transform ideas into reality through smart leadership and innovative thinking
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-4 mr-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <AlertCircle className="w-8 h-8" />, 
                text: "Identifying problems worth solving", 
                color: "bg-green-100 text-green-700",
                detail: "Learn to spot real issues that matter to your community"
              },
              { 
                icon: <Lightbulb className="w-8 h-8" />, 
                text: "Designing testable change ideas", 
                color: "bg-emerald-100 text-emerald-700",
                detail: "Create solutions you can actually test and improve"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                text: "Leading through resistance and doubt", 
                color: "bg-teal-100 text-teal-700",
                detail: "Navigate challenges and bring people along on the journey"
              }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-lg ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {objective.icon}
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-2">{objective.text}</p>
                    <p className="text-sm opacity-80">{objective.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-full p-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Deep Dive
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-10 border-l-6 border-green-500">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Change leadership isn't about dreaming up big things — it's about{' '}
                <strong className="text-green-700 text-2xl">piloting smart ideas</strong>, 
                facing friction, and improving based on feedback.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-800">Start Small</h3>
                  </div>
                  <p className="text-gray-600">Test ideas with small groups before going big</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-800">Learn Fast</h3>
                  </div>
                  <p className="text-gray-600">Use feedback to improve your approach quickly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-8xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Innovation Mindset</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 font-semibold">Think → Test → Learn</p>
                      <ArrowRight className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 font-semibold">Fail Fast → Improve Faster</p>
                      <RefreshCw className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Cycle */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Innovation Cycle
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-6 border-green-500 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700">
                Follow this <strong className="text-green-700">5-step process</strong> to turn problems into solutions
              </p>
            </div>
          </div>
          
          {/* Featured Innovation Step (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <div className="text-lg text-gray-600 mb-6">Currently Exploring</div>
              <div className={`bg-gradient-to-r ${innovationCycle[currentInnovationStep].color} text-white rounded-3xl p-10 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-700`}>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-7xl">
                    {innovationCycle[currentInnovationStep].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-4xl font-bold mb-4">{innovationCycle[currentInnovationStep].step}</h3>
                    <p className="text-xl opacity-90 mb-4">{innovationCycle[currentInnovationStep].description}</p>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-lg">
                        <strong>Example:</strong> {innovationCycle[currentInnovationStep].example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Innovation Steps */}
          <div className="grid md:grid-cols-5 gap-6">
            {innovationCycle.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-3 border-green-200 rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-500 cursor-pointer relative ${
                  currentInnovationStep === index ? 'ring-6 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                onClick={() => setCurrentInnovationStep(index)}
              >
                <div className={`bg-gradient-to-r ${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.step}</h3>
                <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                
                {index < innovationCycle.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <ChevronRight className="w-6 h-6 text-green-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Problem Selection */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-10 md:p-14 border-l-6 border-green-500">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose a School Problem to Solve
            </h2>
            <p className="text-xl text-gray-600">
              Click on a problem below to see how the innovation cycle would work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {schoolProblems.map((problem) => (
              <div
                key={problem.id}
                className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 ${
                  selectedProblem?.id === problem.id ? 'border-green-500 ring-4 ring-green-200' : 'border-gray-200 hover:border-green-300'
                }`}
                onClick={() => setSelectedProblem(problem)}
              >
                <div className="text-4xl mb-4 text-center">{problem.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{problem.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    problem.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                    problem.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {problem.impact} Impact
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    problem.difficulty === 'High' ? 'bg-red-100 text-red-700' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {selectedProblem && (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Innovation Plan for: {selectedProblem.title}
              </h3>
              
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "Problem", content: selectedProblem.description },
                  { step: "Prototype", content: "Design a solution (app, system, campaign)" },
                  { step: "Pilot", content: "Test with 1-2 classes for 2 weeks" },
                  { step: "Feedback", content: "Survey students and teachers" },
                  { step: "Scale", content: "Implement school-wide if successful" }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-700 mb-2">{item.step}</h4>
                    <p className="text-sm text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Change Resistance Curve */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Understanding Resistance to Change
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-6 border-green-500 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700">
                People naturally resist change. As a leader, you need to understand and work through this process.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100">
            <div className="grid md:grid-cols-4 gap-8">
              {resistanceCurve.map((phase, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 ${
                    visibleCards.includes(index + 6) ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 6) * 200}ms` }}
                >
                  <div className="text-6xl mb-4">{phase.emotion}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{phase.phase}</h3>
                  <p className="text-gray-600 italic">"{phase.description}"</p>
                  
                  {index < resistanceCurve.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-green-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Leader's Tip</h3>
              <p className="text-lg text-gray-700">
                Expect resistance and plan for it. Listen to concerns, address fears, and celebrate small wins to help people move through the curve faster.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics for Measuring Impact */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Measuring Your Impact
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-6 border-green-500 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700">
                Track these key metrics to know if your change is working
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">{metric.name}</h3>
                      <span className="text-2xl font-bold text-green-600">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${metric.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Success Indicators</h3>
                <div className="space-y-4">
                  {[
                    { icon: <CheckCircle className="w-6 h-6 text-green-600" />, text: "People are using your solution" },
                    { icon: <TrendingUp className="w-6 h-6 text-emerald-600" />, text: "The problem is getting smaller" },
                    { icon: <Users className="w-6 h-6 text-teal-600" />, text: "Others want to copy your idea" },
                    { icon: <Star className="w-6 h-6 text-green-700" />, text: "You're getting positive feedback" }
                  ].map((indicator, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {indicator.icon}
                      <p className="text-gray-700">{indicator.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pilot Progress Simulation */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-10 md:p-14 border-l-6 border-green-500">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">📊</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pilot Progress Tracker
            </h2>
            <p className="text-xl text-gray-600">
              Watch how a pilot project progresses over time
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Food Waste Reduction Pilot</h3>
              <div className="text-3xl font-bold text-green-600">{pilotProgress}%</div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-6 mb-8">
              <div 
                className="h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ease-out flex items-center justify-end pr-3"
                style={{ width: `${pilotProgress}%` }}
              >
                {pilotProgress > 20 && (
                  <span className="text-white text-sm font-semibold">
                    {pilotProgress === 100 ? 'Complete!' : 'In Progress...'}
                  </span>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { milestone: "Week 1", status: pilotProgress >= 25 ? 'complete' : 'pending', description: "Launched food sharing app" },
                { milestone: "Week 2", status: pilotProgress >= 50 ? 'complete' : 'pending', description: "50 students signed up" },
                { milestone: "Week 3", status: pilotProgress >= 75 ? 'complete' : 'pending', description: "Food waste down 30%" },
                { milestone: "Week 4", status: pilotProgress >= 100 ? 'complete' : 'pending', description: "Teachers on board" }
              ].map((milestone, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${
                  milestone.status === 'complete' ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-2 mb-2">
                    {milestone.status === 'complete' ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-400" />
                    )}
                    <h4 className="font-semibold text-gray-800">{milestone.milestone}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Key Takeaway */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-10 md:p-14 border-l-6 border-green-500">
        <div className="text-center">
          <div className="text-7xl mb-8">🌟</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Remember This
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            <strong className="text-green-700">Great leaders don't just dream big</strong> — they start small, 
            test their ideas, learn from feedback, and scale what works.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Think Smart</h3>
              <p className="text-gray-600">Start with real problems that matter to people</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-500">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Test Fast</h3>
              <p className="text-gray-600">Pilot your ideas before going big</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scale Smart</h3>
              <p className="text-gray-600">Use data and feedback to improve</p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge 8: Innovation Launchpad */}
      <div className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Challenge 8: Innovation Launchpad
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 mb-4">
              <strong className="text-green-700">Format:</strong> Idea Builder + Launch Simulator
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Award className="w-8 h-8 text-green-600" />
              <p className="text-lg text-gray-600">
                <strong>Badge Earned:</strong> ⚡ Change Pioneer
              </p>
            </div>
          </div>
        </div>

        {/* Challenge Progress */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {challengeSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  challengeStep === step.id 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : challengeSteps.findIndex(s => s.id === challengeStep) > index
                    ? 'bg-green-100 border-green-500 text-green-600'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
                }`}>
                  {step.icon}
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-semibold ${
                    challengeStep === step.id ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < challengeSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Pick a Problem */}
        {challengeStep === 'problem' && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Choose Your Challenge</h3>
              <p className="text-lg text-gray-600 mb-8">
                Select a school problem you want to solve with your innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {schoolProblems.map((problem) => (
                <div
                  key={problem.id}
                  className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                    selectedProblem?.id === problem.id 
                      ? 'border-green-500 ring-4 ring-green-200 scale-105' 
                      : 'border-green-200 hover:border-green-400 hover:scale-102'
                  }`}
                  onClick={() => setSelectedProblem(problem)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{problem.icon}</div>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        problem.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                        problem.impact === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {problem.impact}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        problem.difficulty === 'High' ? 'bg-red-100 text-red-700' :
                        problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {problem.difficulty}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{problem.title}</h4>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                  
                  {selectedProblem?.id === problem.id && (
                    <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-700 mb-2">Possible Solutions:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {problem.solutions.map((solution, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {selectedProblem && (
              <div className="text-center">
                <button
                  onClick={() => setChallengeStep('design')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Design Your Solution →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Design Solution */}
        {challengeStep === 'design' && selectedProblem && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Design Your Change Idea</h3>
              <p className="text-lg text-gray-600 mb-8">
                Create a solution for: <strong className="text-green-700">{selectedProblem.title}</strong>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Your Innovation Ideas</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {selectedProblem.solutions.map((solution, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl mb-4">
                      {index === 0 ? '📱' : index === 1 ? '🤝' : '🎯'}
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">{solution}</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      {index === 0 ? 'Technology-based solution' : 
                       index === 1 ? 'Community-driven approach' : 
                       'Systematic change program'}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600 font-semibold">Feasible</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setChallengeStep('pilot')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Build Pilot Plan →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Build Pilot Plan */}
        {challengeStep === 'pilot' && selectedProblem && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Create Your Pilot Plan</h3>
              <p className="text-lg text-gray-600 mb-8">
                Plan how you'll test your solution before scaling
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-800">Timeline</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Week 1</span>
                      <span className="text-sm font-semibold text-green-600">Setup & Launch</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Week 2-3</span>
                      <span className="text-sm font-semibold text-green-600">Testing & Data</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Week 4</span>
                      <span className="text-sm font-semibold text-green-600">Review & Improve</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-gray-800">Metrics</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Participation Rate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Problem Reduction</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">User Satisfaction</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-teal-600" />
                    <h4 className="font-bold text-gray-800">Resources</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">2-3 Team Members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Low Budget ($50-100)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">5-10 hours/week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setChallengeStep('pitch')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Practice Your Pitch →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Pitch to Board */}
        {challengeStep === 'pitch' && selectedProblem && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Present to the School Board</h3>
              <p className="text-lg text-gray-600 mb-8">
                Simulate pitching your solution to decision-makers
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Your Pitch Summary</h4>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{selectedProblem.icon}</div>
                    <div>
                      <h5 className="font-bold text-gray-800">Problem: {selectedProblem.title}</h5>
                      <p className="text-gray-600">{selectedProblem.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💡</div>
                    <div>
                      <h5 className="font-bold text-gray-800">Solution: {selectedProblem.solutions[0]}</h5>
                      <p className="text-gray-600">A innovative approach to reduce the problem by 50%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h5 className="font-bold text-gray-800">Pilot Plan: 4-week trial</h5>
                      <p className="text-gray-600">Low-cost, measurable results with clear metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => {
                  calculatePitchScore();
                  setChallengeStep('results');
                }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Your Pitch →
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Results */}
        {challengeStep === 'results' && pitchScore && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 5: Your Innovation Score</h3>
              <p className="text-lg text-gray-600 mb-8">
                Here's how the School Board evaluated your pitch
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-6 border-green-500">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-2">{pitchScore.innovation}</div>
                  <div className="text-sm text-gray-600">Innovation</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{pitchScore.impact}</div>
                  <div className="text-sm text-gray-600">Impact</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-3xl font-bold text-teal-600 mb-2">{pitchScore.feasibility}</div>
                  <div className="text-sm text-gray-600">Feasibility</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md border-2 border-green-500">
                  <div className="text-4xl font-bold text-green-700 mb-2">{pitchScore.total}</div>
                  <div className="text-sm text-gray-600">Total Score</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <ThumbsUp className="w-6 h-6 text-green-600 mr-2" />
                  Board Feedback
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong className="text-green-700">Excellent work!</strong> Your solution addresses a real problem 
                    with a practical approach.
                  </p>
                  <p className="text-gray-700">
                    <strong>Strengths:</strong> Clear problem identification, realistic timeline, measurable outcomes.
                  </p>
                  <p className="text-gray-700">
                    <strong>Next steps:</strong> You're approved for the pilot program! Start implementing your solution.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 max-w-md mx-auto">
                <Trophy className="w-16 h-16 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2">Badge Earned!</h4>
                <p className="text-lg">⚡ Change Pioneer</p>
                <p className="text-sm opacity-90 mt-2">
                  You've successfully designed and pitched an innovative solution!
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => {
                  setChallengeStep('problem');
                  setSelectedProblem(null);
                  setPitchScore(null);
                  setShowFeedback(false);
                }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Try Another Challenge
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Module8ChangeInnovation;