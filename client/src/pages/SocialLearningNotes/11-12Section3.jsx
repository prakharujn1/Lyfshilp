import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, AlertTriangle, CheckCircle, Heart, Timer, Target, TrendingUp, Battery, Thermometer, Activity, RefreshCw, Wind, Users } from 'lucide-react';

// Define TrendingDown component first
const TrendingDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 17 6-6 4 4 8-8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 9-8 8-4-4-6 6" />
  </svg>
);

const Module3EmotionalMastery = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [burnoutScores, setBurnoutScores] = useState({
    emotional: 3,
    motivation: 3,
    focus: 3,
    connection: 3
  });
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [breathingCount, setBreathingCount] = useState(4);
  const [stressResponse, setStressResponse] = useState('');
  const [lastHijack, setLastHijack] = useState('');
  const [growthStory, setGrowthStory] = useState('');
  const [resilienceFactors, setResilienceFactors] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingCount(prev => {
          if (prev === 1) {
            setBreathingPhase(current => {
              if (current === 'inhale') return 'hold1';
              if (current === 'hold1') return 'exhale';
              if (current === 'exhale') return 'hold2';
              return 'inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [breathingActive]);

  const regulationTechniques = [
    {
      name: "Label Your Emotion",
      description: "Name what you're feeling to reduce its intensity",
      example: "I notice I'm feeling anxious about this presentation",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Box Breathing",
      description: "4-4-4-4 method for immediate calm",
      example: "Inhale 4, Hold 4, Exhale 4, Hold 4",
      icon: <Wind className="w-8 h-8 text-white" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Emotional Distancing",
      description: "Step outside your situation mentally",
      example: "What would I advise a friend right now?",
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const warningSigns = [
    {
      sign: "Cynicism or detachment",
      description: "Feeling disconnected from people and activities you once enjoyed",
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />
    },
    {
      sign: "Decreased sense of accomplishment",
      description: "Nothing feels meaningful or worthwhile anymore",
      icon: <TrendingDown className="w-6 h-6 text-amber-600" />
    },
    {
      sign: "Emotional numbness",
      description: "Difficulty feeling joy, excitement, or even sadness",
      icon: <Heart className="w-6 h-6 text-amber-600" />
    }
  ];

  const handleBurnoutScore = (domain, score) => {
    setBurnoutScores(prev => ({ ...prev, [domain]: score }));
  };

  const getScoreColor = (score) => {
    if (score <= 2) return "text-red-600 bg-red-100";
    if (score <= 3) return "text-amber-600 bg-amber-100";
    return "text-green-600 bg-green-100";
  };

  const getBreathingPhaseText = () => {
    switch (breathingPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold1': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'hold2': return 'Hold';
      default: return 'Breathe In';
    }
  };

  const getBreathingColor = () => {
    switch (breathingPhase) {
      case 'inhale': return 'from-green-400 to-emerald-500';
      case 'hold1': return 'from-emerald-500 to-green-600';
      case 'exhale': return 'from-green-600 to-emerald-700';
      case 'hold2': return 'from-emerald-700 to-green-500';
      default: return 'from-green-400 to-emerald-500';
    }
  };

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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emotional Mastery Under Pressure
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              "Staying Grounded in Chaos" - Master your emotions when it matters most
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Master Your Mind Under Pressure
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Learn to stay centered when chaos strikes, transform stress into strength, and grow through life's most challenging moments.
            </p>
          </div>
        </div>

        {/* Section 1: The Neuroscience of Stress */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Neuroscience of Stress
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Understand how the brain's amygdala-hijack works — when fight-or-flight takes over, logical thinking shuts down.
            </p>
          </div>

          {/* Brain Hijack Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What Happens During Stress?</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 border-l-4 border-red-400">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-6 h-6 text-red-600" />
                      <div>
                        <h4 className="font-bold text-red-700">Amygdala Activated</h4>
                        <p className="text-red-600 text-sm">Danger detected, panic mode ON</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border-l-4 border-amber-400">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-6 h-6 text-amber-600" />
                      <div>
                        <h4 className="font-bold text-amber-700">Prefrontal Cortex Offline</h4>
                        <p className="text-amber-600 text-sm">Logical thinking shuts down</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <div>
                        <h4 className="font-bold text-green-700">Survival Mode Active</h4>
                        <p className="text-green-600 text-sm">Fight, flight, or freeze response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-gray-800">Reflection Questions</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-800 mb-3">Body Response</h4>
                    <p className="text-gray-700 mb-3">How does your body respond to perceived danger?</p>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="2"
                      placeholder="Racing heart, sweaty palms, tense muscles..."
                      value={stressResponse}
                      onChange={(e) => setStressResponse(e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <h4 className="font-bold text-gray-800 mb-3">Last Hijack</h4>
                    <p className="text-gray-700 mb-3">When was your last "amygdala hijack"?</p>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="2"
                      placeholder="Describe a recent moment when emotions took over..."
                      value={lastHijack}
                      onChange={(e) => setLastHijack(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Suggestion */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <Activity className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Knowledge Into Action
              </h3>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-xl font-medium mb-4">
                  Watch a 3-minute video on emotional hijacks and journal how brain science can help in moments of panic
                </p>
                <p className="text-green-100 text-sm">
                  Understanding the "why" behind your reactions is the first step to mastering them
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Emotional Regulation Strategies */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Emotional Regulation Strategies
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Self-soothing is a skill. Learn when to ride out emotions and when to reframe.
            </p>
          </div>

          {/* Regulation Techniques */}
          <div className="grid md:grid-cols-3 gap-8">
            {regulationTechniques.map((technique, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedTechnique === index ? 'ring-4 ring-green-300' : ''
                }`}
                onClick={() => setSelectedTechnique(selectedTechnique === index ? null : index)}
              >
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${technique.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {technique.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{technique.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 font-medium">{technique.description}</p>
                  </div>
                  
                  {selectedTechnique === index && (
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border-l-4 border-emerald-400 animate-fade-in">
                      <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                        Example
                      </div>
                      <p className="text-gray-700 italic">"{technique.example}"</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Box Breathing */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Wind className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Try Box Breathing Now
              </h3>
              <p className="text-gray-700 mt-4">
                Click the button below to start a guided breathing exercise
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r ${getBreathingColor()} rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 transition-all duration-1000 ${
                  breathingActive ? 'scale-110' : 'scale-100'
                }`}>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">{breathingCount}</div>
                    <div className="text-sm">{getBreathingPhaseText()}</div>
                  </div>
                </div>
                
                <button
                  onClick={() => setBreathingActive(!breathingActive)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    breathingActive 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {breathingActive ? 'Stop Breathing Exercise' : 'Start Breathing Exercise'}
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                <h4 className="font-bold text-gray-800 mb-2">How it works:</h4>
                <p className="text-gray-700 text-sm">
                  Inhale for 4 counts → Hold for 4 counts → Exhale for 4 counts → Hold for 4 counts → Repeat
                </p>
              </div>
            </div>
          </div>

          {/* Practice Challenge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <Timer className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                3-Day Practice Challenge
              </h3>
              <p className="text-gray-700 mt-4">
                Set a goal to try 2 different regulation techniques. Reflect on effectiveness.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((day) => (
                <div key={day} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                      {day}
                    </div>
                    <h4 className="font-bold text-gray-800">Day {day}</h4>
                  </div>
                  <textarea
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    rows="3"
                    placeholder="Which techniques did you try? How effective were they?"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Burnout and Emotional Fatigue */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Burnout and Emotional Fatigue
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Burnout isn't laziness — it's exhaustion from prolonged emotional demand.
            </p>
          </div>

          {/* Warning Signs */}
          <div className="grid md:grid-cols-3 gap-8">
            {warningSigns.map((sign, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {sign.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{sign.sign}</h3>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border-l-4 border-amber-400">
                  <p className="text-gray-700">{sign.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Burnout Audit */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Burnout Audit
              </h3>
              <p className="text-gray-700 mt-4">
                Score yourself 1-5 in each domain (1 = Very Low, 5 = Very High)
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { key: 'emotional', label: 'Emotional Energy', icon: <Heart className="w-6 h-6" /> },
                { key: 'motivation', label: 'Motivation', icon: <Zap className="w-6 h-6" /> },
                { key: 'focus', label: 'Focus', icon: <Target className="w-6 h-6" /> },
                { key: 'connection', label: 'Connection', icon: <Users className="w-6 h-6" /> }
              ].map((domain) => (
                <div key={domain.key} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="text-center mb-4">
                    <div className="text-green-600 mb-2">{domain.icon}</div>
                    <h4 className="font-bold text-gray-800">{domain.label}</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <button
                        key={score}
                        onClick={() => handleBurnoutScore(domain.key, score)}
                        className={`w-full p-2 rounded-lg transition-all duration-300 ${
                          burnoutScores[domain.key] === score
                            ? 'bg-green-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-green-100'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                  
                  <div className={`mt-4 p-2 rounded-lg text-center text-sm font-medium ${getScoreColor(burnoutScores[domain.key])}`}>
                    Score: {burnoutScores[domain.key]}/5
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-3">Your Burnout Assessment</h4>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Emotional</div>
                  <div>{burnoutScores.emotional}/5</div>
                </div>
                <div>
                  <div className="font-semibold">Motivation</div>
                  <div>{burnoutScores.motivation}/5</div>
                </div>
                <div>
                  <div className="font-semibold">Focus</div>
                  <div>{burnoutScores.focus}/5</div>
                </div>
                <div>
                  <div className="font-semibold">Connection</div>
                  <div>{burnoutScores.connection}/5</div>
                </div>
              </div>
              <div className="mt-4 text-green-100 text-sm">
                Total Score: {Object.values(burnoutScores).reduce((a, b) => a + b, 0)}/20
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Growth Through Discomfort */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Growth Through Discomfort
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Growth often comes from discomfort, not ease. Learn to embrace the challenge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Growth Mindset</h3>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-green-700 mb-2">Comfort Zone</h4>
                    <p className="text-gray-700 text-sm">Safe but limiting</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <h4 className="font-bold text-emerald-700 mb-2">Learning Zone</h4>
                    <p className="text-gray-700 text-sm">Challenging but manageable</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <h4 className="font-bold text-teal-700 mb-2">Growth Zone</h4>
                    <p className="text-gray-700 text-sm">Uncomfortable but transformative</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">💪</div>
                  <h3 className="text-2xl font-bold text-gray-800">Reflect on Growth</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-800 mb-3">Growth Story</h4>
                    <p className="text-gray-700 mb-3">What situation made you emotionally uncomfortable but ultimately helped you grow?</p>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="3"
                      placeholder="Describe a challenging experience that led to personal growth..."
                      value={growthStory}
                      onChange={(e) => setGrowthStory(e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <h4 className="font-bold text-gray-800 mb-3">Resilience Factors</h4>
                    <p className="text-gray-700 mb-3">What helped you stay resilient?</p>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="3"
                      placeholder="Support systems, mindset, strategies that helped you..."
                      value={resilienceFactors}
                      onChange={(e) => setResilienceFactors(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Principles */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Principles for Growth Through Discomfort
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Embrace the Challenge",
                  description: "See discomfort as a signal of growth, not failure",
                  icon: <Target className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Stay Present",
                  description: "Focus on what you can control in this moment",
                  icon: <Activity className="w-8 h-8 text-green-600" />
                },
                {
                  title: "Learn and Adapt",
                  description: "Extract lessons from every uncomfortable experience",
                  icon: <Brain className="w-8 h-8 text-green-600" />
                }
              ].map((principle, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    {principle.icon}
                    <h4 className="font-bold text-gray-800 mt-3">{principle.title}</h4>
                  </div>
                  <p className="text-gray-600 text-center">{principle.description}</p>
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
              Congratulations! You've learned to master your emotions under pressure. 
              Remember: true strength comes from staying grounded when everything around you is chaotic.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Awareness</strong> + 
                <strong className="text-emerald-600"> Regulation</strong> + 
                <strong className="text-teal-600"> Growth</strong> = 
                <strong className="text-green-700"> Emotional Mastery 🧠</strong>
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

export default Module3EmotionalMastery;