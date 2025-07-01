import React, { useState, useEffect } from 'react';
import { Heart, Brain, Eye, Users, Target, CheckCircle, AlertCircle, Lightbulb, Star, Activity, TrendingUp, MessageCircle, Shield, Zap } from 'lucide-react';

const Module4EmotionalIntelligence = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentEQComponent, setCurrentEQComponent] = useState(0);
  const [selectedMoodDay, setSelectedMoodDay] = useState(0);
  const [moodData, setMoodData] = useState([
    { day: 'Monday', mood: 3, emotion: 'Neutral', situation: 'Math test' },
    { day: 'Tuesday', mood: 5, emotion: 'Happy', situation: 'Helped friend' },
    { day: 'Wednesday', mood: 2, emotion: 'Stressed', situation: 'Group conflict' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEQComponent((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const eqComponents = [
    {
      title: "Self-Awareness",
      description: "Knowing your emotions and triggers",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      example: "I notice I get frustrated when interrupted"
    },
    {
      title: "Self-Regulation",
      description: "Managing your emotional responses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      example: "I take deep breaths when feeling angry"
    },
    {
      title: "Empathy",
      description: "Understanding others' feelings",
      icon: <Heart className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      example: "I can see my friend is upset about something"
    },
    {
      title: "Social Skills",
      description: "Building positive relationships",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      example: "I know how to resolve conflicts peacefully"
    }
  ];

  const selfAwarenessQuestions = [
    "What makes you feel happy?",
    "What situations stress you out?",
    "How do you react when things don't go as planned?",
    "What are your biggest strengths?",
    "What triggers your anger or frustration?"
  ];

  const emotionExamples = [
    {
      emotion: "Anger",
      trigger: "Being treated unfairly",
      physicalSign: "Clenched fists, tense jaw",
      response: "Take 3 deep breaths, count to 10"
    },
    {
      emotion: "Anxiety",
      trigger: "Big presentation coming up",
      physicalSign: "Rapid heartbeat, sweaty palms",
      response: "Practice, prepare, positive self-talk"
    },
    {
      emotion: "Sadness",
      trigger: "Conflict with a friend",
      physicalSign: "Heavy feeling, low energy",
      response: "Talk to someone, journal feelings"
    },
    {
      emotion: "Excitement",
      trigger: "Achieving a goal",
      physicalSign: "High energy, smiling",
      response: "Share with others, celebrate"
    }
  ];

  const moodEmojis = ['😰', '😟', '😐', '🙂', '😊'];

  const handleMoodChange = (dayIndex, newMood) => {
    const updatedMoodData = [...moodData];
    updatedMoodData[dayIndex].mood = newMood;
    const emotions = ['Very Sad', 'Sad', 'Neutral', 'Good', 'Very Happy'];
    updatedMoodData[dayIndex].emotion = emotions[newMood - 1];
    setMoodData(updatedMoodData);
  };

  return (
    <div
      id="m-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-4"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Emotional Intelligence & Self-Awareness
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master your emotions and understand others to become a more effective leader
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Eye className="w-6 h-6" />, text: "Recognize your emotions and triggers", color: "bg-green-100 text-green-600" },
              { icon: <Brain className="w-6 h-6" />, text: "Understand how emotions affect your decisions", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Heart className="w-6 h-6" />, text: "Develop empathy for others", color: "bg-teal-100 text-teal-600" },
              { icon: <Users className="w-6 h-6" />, text: "Build stronger relationships through emotional skills", color: "bg-green-100 text-green-700" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-lg">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is Emotional Intelligence */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is Emotional Intelligence?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-600">Emotional Intelligence (EQ)</strong> is your ability to understand and manage emotions - both your own and others'. It's like having a superpower that helps you navigate relationships and make better decisions.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Why It Matters:</h3>
                </div>
                <p className="text-gray-600">
                  Leaders with high EQ inspire trust, handle stress better, and create positive team environments.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🧠💚</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">EQ vs IQ</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <h4 className="font-bold text-green-600 mb-2">High EQ Leaders:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Stay calm under pressure</li>
                    <li>• Understand team emotions</li>
                    <li>• Resolve conflicts peacefully</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-600 mb-2">High IQ Only:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Good at solving problems</li>
                    <li>• May struggle with people</li>
                    <li>• Can be too logical</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Components of EQ */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Four Components of EQ
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                Think of EQ as a <strong className="text-green-600">toolkit</strong> with four essential tools
              </p>
            </div>
          </div>
          
          {/* Featured EQ Component (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${eqComponents[currentEQComponent].color} text-white rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-6xl">{eqComponents[currentEQComponent].icon}</div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{eqComponents[currentEQComponent].title}</h3>
                    <p className="text-xl opacity-90 mb-2">{eqComponents[currentEQComponent].description}</p>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="text-sm">Example: <strong>{eqComponents[currentEQComponent].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All EQ Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eqComponents.map((component, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentEQComponent === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentEQComponent(index)}
              >
                <div className={`bg-gradient-to-r ${component.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {component.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{component.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{component.description}</p>
                <div className="bg-white rounded-lg p-3 text-xs text-gray-700">
                  {component.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Awareness Deep Dive */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Building Self-Awareness
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Self-awareness is the foundation of emotional intelligence. It means understanding your emotions, recognizing your triggers, and knowing how you typically react in different situations.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Key Self-Awareness Questions:</h3>
                  <div className="space-y-3">
                    {selfAwarenessQuestions.map((question, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{question}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Activity className="w-6 h-6 text-green-600 mr-2" />
                  Emotion Recognition Guide
                </h3>
                <div className="space-y-4">
                  {emotionExamples.map((example, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-green-600">{example.emotion}</h4>
                        <div className="text-2xl">
                          {example.emotion === 'Anger' && '😠'}
                          {example.emotion === 'Anxiety' && '😰'}
                          {example.emotion === 'Sadness' && '😢'}
                          {example.emotion === 'Excitement' && '🤩'}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Trigger:</strong> {example.trigger}</p>
                        <p><strong>Physical Signs:</strong> {example.physicalSign}</p>
                        <p><strong>Healthy Response:</strong> {example.response}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Mood Tracker Demo */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                EQ Tracker Demo
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practice tracking your emotions. This is what the real EQ Tracker challenge would look like:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {moodData.map((day, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 text-lg">{day.day}</h3>
                    <p className="text-sm text-gray-600">{day.situation}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Mood Rating</p>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => handleMoodChange(index, rating)}
                          className={`text-2xl p-1 rounded-full transition-all ${
                            day.mood === rating ? 'bg-green-200 scale-125' : 'hover:bg-green-100'
                          }`}
                        >
                          {moodEmojis[rating - 1]}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Current Emotion</p>
                    <p className="font-bold text-green-600 text-lg">{day.emotion}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className={`w-full h-3 bg-gray-200 rounded-full overflow-hidden`}>
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                        style={{ width: `${(day.mood / 5) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{day.mood}/5</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-gray-800">EQ Tracker Benefits</h3>
            </div>
            <p className="text-gray-700">
              Regular mood tracking helps you identify patterns, understand your triggers, and develop better emotional responses over time.
            </p>
          </div>
        </div>

        {/* Key Strategies Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Self-Regulation Strategies
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Pause & Breathe", desc: "Take 3 deep breaths before reacting", icon: "🫁" },
                { title: "Count to 10", desc: "Give yourself time to think", icon: "🔢" },
                { title: "Reframe Thoughts", desc: "Look for the positive perspective", icon: "🔄" },
                { title: "Physical Activity", desc: "Walk, stretch, or exercise to release tension", icon: "🏃‍♂️" }
              ].map((strategy, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{strategy.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-800">{strategy.title}</h3>
                      <p className="text-gray-600 text-sm">{strategy.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Building Empathy
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Active Listening", desc: "Focus completely on what others are saying", icon: "👂" },
                { title: "Ask Questions", desc: "Show genuine interest in others' experiences", icon: "❓" },
                { title: "Read Body Language", desc: "Notice non-verbal cues and emotions", icon: "👀" },
                { title: "Perspective-Taking", desc: "Try to see situations from others' viewpoints", icon: "🔄" }
              ].map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-800">{skill.title}</h3>
                      <p className="text-gray-600 text-sm">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                The EQ Advantage
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Leaders with high emotional intelligence create stronger teams, make better decisions, and inspire others to achieve their best.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Self-Awareness</strong> + 
                <strong className="text-emerald-600"> Self-Regulation</strong> + 
                <strong className="text-teal-600"> Empathy</strong> + 
                <strong className="text-green-700"> Social Skills</strong> = 
                <strong className="text-green-800"> Exceptional Leadership! 🌟</strong>
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

export default Module4EmotionalIntelligence;