import React, { useState, useEffect } from 'react';
import { Crown, Target, Zap, Clock, Brain, Battery, Shield, CheckCircle, TrendingUp, Smartphone, Bell, Calendar, Trophy, Star, Lightbulb, Timer, Users } from 'lucide-react';

const Module4SelfLeadership = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [energyData, setEnergyData] = useState([]);
  const [currentDay, setCurrentDay] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [pomodoroPhase, setPomodoroPhase] = useState('work'); // work, break
  const [focusTime, setFocusTime] = useState('');
  const [habitReplacement, setHabitReplacement] = useState({
    reactive: '',
    proactive: ''
  });
  const [successManifesto, setSuccessManifesto] = useState(['', '', '']);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (pomodoroActive && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(prev => prev - 1);
      }, 1000);
    } else if (pomodoroActive && pomodoroTime === 0) {
      // Switch phases when timer reaches 0
      setPomodoroPhase(prev => prev === 'work' ? 'break' : 'work');
      setPomodoroTime(pomodoroPhase === 'work' ? 5 * 60 : 25 * 60); // 5 min break or 25 min work
    }
    return () => clearInterval(interval);
  }, [pomodoroActive, pomodoroTime, pomodoroPhase]);

  const disciplineVsWillpower = [
    {
      type: "Discipline",
      description: "Planned and systematic",
      characteristics: ["Creates routines", "Builds systems", "Sustainable long-term"],
      example: "Morning routine: 6 AM wake up, exercise, study",
      color: "from-green-500 to-emerald-500",
      icon: <Crown className="w-8 h-8 text-white" />
    },
    {
      type: "Willpower",
      description: "Emotional and reactive",
      characteristics: ["Relies on motivation", "Inconsistent", "Gets depleted"],
      example: "I'll study hard when I feel motivated",
      color: "from-green-400 to-green-600",
      icon: <Zap className="w-8 h-8 text-white" />
    }
  ];

  const dailyExamples = [
    {
      habit: "Morning routines",
      description: "Start your day with intention",
      icon: <Clock className="w-6 h-6 text-green-600" />
    },
    {
      habit: "Study blocks without apps",
      description: "Deep work with no distractions",
      icon: <Brain className="w-6 h-6 text-green-600" />
    },
    {
      habit: "Delayed gratification",
      description: "Choose long-term benefits over instant pleasure",
      icon: <Trophy className="w-6 h-6 text-green-600" />
    }
  ];

  const focusStrategies = [
    {
      name: "Pomodoro Technique",
      description: "25 min focused work + 5 min break",
      effectiveness: "High",
      icon: <Timer className="w-8 h-8 text-green-600" />
    },
    {
      name: "Notification Blockers",
      description: "Eliminate digital distractions",
      effectiveness: "Very High",
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      name: "Digital Detox Windows",
      description: "Scheduled phone-free periods",
      effectiveness: "High",
      icon: <Smartphone className="w-8 h-8 text-green-600" />
    }
  ];

  const energyTimeBlocks = [
    '6-9 AM', '9-12 PM', '12-3 PM', '3-6 PM', '6-9 PM', '9-12 AM'
  ];

  const handleEnergyTracking = (timeIndex, energyLevel) => {
    const newData = [...energyData];
    const dayData = newData[currentDay] || Array(6).fill(3);
    dayData[timeIndex] = energyLevel;
    newData[currentDay] = dayData;
    setEnergyData(newData);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getEnergyColor = (level) => {
    if (level <= 2) return "bg-red-500";
    if (level <= 3) return "bg-amber-500";
    return "bg-green-500";
  };

  const handleManifestoChange = (index, value) => {
    const newManifesto = [...successManifesto];
    newManifesto[index] = value;
    setSuccessManifesto(newManifesto);
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
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Crown className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Self-Leadership & High-Performance Habits
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master yourself to lead others - Build systems for sustainable excellence
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Lead Yourself First
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Self-leadership is the foundation of all other leadership. Learn to master your habits, 
              energy, and focus to create sustainable high performance.
            </p>
          </div>
        </div>

        {/* Section 1: Self-Discipline vs Willpower */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Self-Discipline vs Willpower
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discipline is planned. Willpower is emotional. Sustainable success comes from systems, not will.
            </p>
          </div>

          {/* Discipline vs Willpower Comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            {disciplineVsWillpower.map((type, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  selectedHabit === index ? 'ring-4 ring-green-300' : ''
                }`}
                onClick={() => setSelectedHabit(selectedHabit === index ? null : index)}
              >
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${type.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{type.type}</h3>
                  <p className="text-gray-600 mt-2">{type.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-800 mb-3">Characteristics:</h4>
                    <ul className="space-y-2">
                      {type.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedHabit === index && (
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border-l-4 border-emerald-400 animate-fade-in">
                      <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                        Example
                      </div>
                      <p className="text-gray-700 italic">"{type.example}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Daily Examples */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Daily Examples of Discipline
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {dailyExamples.map((example, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-sm">
                      {example.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{example.habit}</h4>
                    <p className="text-gray-600 text-sm">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7-Day Challenge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <Trophy className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                7-Day Habit Replacement Challenge
              </h3>
              <p className="text-gray-700 mt-4">
                Replace one reactive habit with a proactive routine
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Reactive Habit to Replace</h4>
                </div>
                <textarea
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="e.g., Doomscrolling on social media when bored"
                  value={habitReplacement.reactive}
                  onChange={(e) => setHabitReplacement(prev => ({ ...prev, reactive: e.target.value }))}
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Proactive Routine</h4>
                </div>
                <textarea
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="e.g., 10-minute mindfulness practice or reading"
                  value={habitReplacement.proactive}
                  onChange={(e) => setHabitReplacement(prev => ({ ...prev, proactive: e.target.value }))}
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-green-600 text-white rounded-2xl p-4 max-w-md mx-auto">
                <h4 className="font-bold mb-2">7-Day Commitment</h4>
                <p className="text-green-100 text-sm">Track your progress for one week and notice the difference!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Productivity and Energy Cycles */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Productivity and Energy Cycles
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Work smarter by aligning tasks with your peak energy zones — not just the clock.
            </p>
          </div>

          {/* Energy Tracking Activity */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Battery className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Track Your Energy Levels
              </h3>
              <p className="text-gray-700 mt-4">
                Rate your energy levels throughout the day (1-5 scale) for one week
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Day Selector */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 flex space-x-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDay(index)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        currentDay === index
                          ? 'bg-green-500 text-white'
                          : 'text-gray-600 hover:bg-white'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Energy Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {energyTimeBlocks.map((timeBlock, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <div className="text-center mb-3">
                      <h4 className="font-bold text-gray-800 text-sm">{timeBlock}</h4>
                    </div>
                    
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <button
                          key={level}
                          onClick={() => handleEnergyTracking(index, level)}
                          className={`w-6 h-6 rounded-full transition-all duration-300 ${
                            energyData[currentDay]?.[index] === level
                              ? getEnergyColor(level)
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                          title={`Energy Level ${level}`}
                        >
                          <span className="sr-only">Level {level}</span>
                        </button>
                      ))}
                    </div>
                    
                    {energyData[currentDay]?.[index] && (
                      <div className="text-center mt-2">
                        <span className="text-xs text-gray-600">
                          Level {energyData[currentDay][index]}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-4">
                <div className="flex justify-center space-x-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                    <span>Low Energy (1-2)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
                    <span>Medium Energy (3)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <span>High Energy (4-5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Focus in the Attention Economy */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Focus in the Attention Economy
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Attention is currency. Learn to defend it.
            </p>
          </div>

          {/* Focus Strategies */}
          <div className="grid md:grid-cols-3 gap-8">
            {focusStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{strategy.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 font-medium">{strategy.description}</p>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-center text-sm font-semibold ${
                    strategy.effectiveness === 'Very High' 
                      ? 'bg-green-200 text-green-800' 
                      : 'bg-emerald-200 text-emerald-800'
                  }`}>
                    Effectiveness: {strategy.effectiveness}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Pomodoro Timer */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Timer className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Try the Pomodoro Technique
              </h3>
              <p className="text-gray-700 mt-4">
                25 minutes of focused work followed by a 5-minute break
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r ${
                  pomodoroPhase === 'work' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-blue-600'
                } rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-6 transition-all duration-500`}>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">{formatTime(pomodoroTime)}</div>
                    <div className="text-sm">{pomodoroPhase === 'work' ? 'Work Time' : 'Break Time'}</div>
                  </div>
                </div>
                
                <div className="space-x-4">
                  <button
                    onClick={() => setPomodoroActive(!pomodoroActive)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      pomodoroActive 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                  >
                    {pomodoroActive ? 'Pause' : 'Start'} Timer
                  </button>
                  
                  <button
                    onClick={() => {
                      setPomodoroActive(false);
                      setPomodoroTime(25 * 60);
                      setPomodoroPhase('work');
                    }}
                    className="px-6 py-3 rounded-full font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Reflection */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Focus Self-Assessment
              </h3>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-4">How many minutes do you really stay focused before reaching for your phone?</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {['<5 min', '5-15 min', '15-30 min', '30+ min'].map((range, index) => (
                    <button
                      key={index}
                      onClick={() => setFocusTime(range)}
                      className={`p-3 rounded-lg font-semibold transition-all duration-300 ${
                        focusTime === range
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-green-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                
                {focusTime && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700">
                      <strong>Your focus time: {focusTime}</strong>
                      {focusTime === '<5 min' && " - Consider starting with 10-minute focused sessions and gradually increase."}
                      {focusTime === '5-15 min' && " - Good starting point! Try extending to 20-25 minute sessions."}
                      {focusTime === '15-30 min' && " - Excellent! You're ready for full Pomodoro sessions."}
                      {focusTime === '30+ min' && " - Outstanding focus! You can handle extended deep work sessions."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Ambition with Integrity */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Ambition with Integrity
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Be ambitious — but aligned with your values. Not all success is healthy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Reflection Questions</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-green-700 mb-2">What am I chasing — and why?</h4>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="3"
                      placeholder="Reflect on your ambitions and motivations..."
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <h4 className="font-bold text-emerald-700 mb-2">Whose definition of success am I following?</h4>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="3"
                      placeholder="Consider if your goals are truly your own..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold text-gray-800">Success with Integrity</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-800 mb-2">Aligned Success</h4>
                    <p className="text-gray-700 text-sm">Achievement that honors your values</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border-l-4 border-amber-400">
                    <h4 className="font-bold text-gray-800 mb-2">Warning Signs</h4>
                    <p className="text-gray-700 text-sm">Success at the cost of relationships or health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success with Integrity Manifesto */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Your "Success with Integrity" Manifesto
              </h3>
              <p className="text-gray-700 mt-4">
                Write your guiding principles in 3 lines
              </p>
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {[1, 2, 3].map((num, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {num}
                    </div>
                    <h4 className="font-bold text-gray-800">Principle #{num}</h4>
                  </div>
                  <textarea
                    className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    rows="2"
                    placeholder={`Example: "I will pursue excellence while maintaining balance and treating others with respect."`}
                    value={successManifesto[index]}
                    onChange={(e) => handleManifestoChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Module Completion
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Congratulations! You've learned the foundations of self-leadership and high-performance habits. 
              Remember: discipline builds the systems that make excellence inevitable.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Discipline</strong> + 
                <strong className="text-emerald-600"> Systems</strong> + 
                <strong className="text-teal-600"> Integrity</strong> = 
                <strong className="text-green-700"> Sustainable Excellence 👑</strong>
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
    </div>
    
  );
};

export default Module4SelfLeadership;