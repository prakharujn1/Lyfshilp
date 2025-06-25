import React, { useState, useEffect } from 'react';
import { Brain, Heart, Eye, BookOpen, MessageCircle,  Target, Lightbulb, CheckCircle, ArrowRight, Zap, Sparkles } from 'lucide-react';

const Module1SelfUnderstanding = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [emotionTracking, setEmotionTracking] = useState({ day: 1, emotion: '', trigger: '', response: '' });
  const [selfTalkExample, setSelfTalkExample] = useState(0);
  const [completedActivities, setCompletedActivities] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5]);
    }, 300);
    
    const selfTalkTimer = setInterval(() => {
      setSelfTalkExample((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(selfTalkTimer);
    };
  }, []);

  const selfTalkExamples = [
    {
      negative: "I'm terrible at this",
      positive: "This is difficult, but I've handled tough things before",
      icon: <Zap className="w-5 h-5" />
    },
    {
      negative: "I always mess up",
      positive: "I made a mistake. What can I learn from it?",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      negative: "I can't do anything right",
      positive: "I'm learning and growing with each challenge",
      icon: <Target className="w-5 h-5" />
    }
  ];

  const emotionTriggers = [
    { trigger: "Heavy workload", response: "Take breaks, prioritize tasks", icon: "📚" },
    { trigger: "Social conflicts", response: "Communicate openly, seek understanding", icon: "👥" },
    { trigger: "Uncertainty about future", response: "Focus on what you can control", icon: "🔮" },
    { trigger: "Comparison with others", response: "Celebrate your unique journey", icon: "⭐" }
  ];

  const handleActivityComplete = (activityId) => {
    setCompletedActivities(prev => ({
      ...prev,
      [activityId]: true
    }));
  };

  return (
    <div
      id="m-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-1"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-pulse">
                <Brain className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Understanding Yourself Deeply
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Let's go beyond the surface to understand what truly drives our emotions and behaviors
            </p>
            <div className="flex justify-center space-x-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Self-Awareness</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Personal Growth</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mr-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Discover
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="w-8 h-8" />, title: "Emotions & Triggers", desc: "Understand what drives your feelings", color: "bg-green-100 text-green-600" },
              { icon: <Eye className="w-8 h-8" />, title: "Self-Awareness", desc: "Observe thoughts without judgment", color: "bg-emerald-100 text-emerald-600" },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Self-Talk Power", desc: "Transform your inner dialogue", color: "bg-green-100 text-green-600" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Personal Growth", desc: "Recognize and develop strengths", color: "bg-emerald-100 text-emerald-600" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleSections.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {objective.icon}
                  <h3 className="font-bold text-lg">{objective.title}</h3>
                  <p className="text-sm opacity-80">{objective.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: Emotions and Their Triggers */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Emotions and Their Triggers
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What Are Emotions?</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Emotions are <strong className="text-green-600">signals from the brain and body</strong> that something important is happening. Understanding <em>why</em> we feel a certain way helps us manage emotions instead of being controlled by them.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-800">Key Insight</h4>
                  </div>
                  <p className="text-gray-600">
                    When you understand your emotional triggers, you gain the power to respond rather than react.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Reflect on These Questions</h3>
                <div className="space-y-4">
                  {[
                    { question: "What usually triggers your frustration?", icon: "😤" },
                    { question: "What energizes you during the day?", icon: "⚡" },
                    { question: "How does your body react when you feel overwhelmed?", icon: "🌪️" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="text-gray-700 font-medium">{item.question}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Emotion Tracking Activity */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Interactive Exercise: Emotion Tracking
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Track your emotions for 3 days. Write what you felt, what triggered it, and how you responded.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">What I Felt</h4>
                  <p className="text-sm text-gray-600">Identify the emotion</p>
                </div>
                <div className="text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">What Triggered It</h4>
                  <p className="text-sm text-gray-600">Find the cause</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">How I Responded</h4>
                  <p className="text-sm text-gray-600">Reflect on actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Developing Self-Awareness */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Developing Self-Awareness
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What is Self-Awareness?</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Self-awareness means <strong className="text-emerald-600">observing your thoughts and feelings without judging them</strong>. It's the first step in personal growth.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    
                    <h4 className="text-lg font-bold text-gray-800">Think of it as...</h4>
                  </div>
                  <p className="text-gray-600">
                    Being your own gentle observer, noticing patterns without criticism.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Self-Check Questions</h3>
                <div className="space-y-4">
                  {[
                    { question: "What are your top 3 personal values?", icon: "💎" },
                    { question: "How do you usually react under pressure?", icon: "⚡" },
                    { question: "What environments bring out your best?", icon: "🌱" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border-l-4 border-emerald-400">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="text-gray-700 font-medium">{item.question}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Journal Activity */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📔</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Daily Reflection Activity
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Write a short journal entry each day this week reflecting on one moment that made you feel proud, upset, or uncertain — and why.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { emotion: "Proud", color: "bg-green-100 text-green-600", icon: "🌟" },
                  { emotion: "Upset", color: "bg-emerald-100 text-emerald-600", icon: "😔" },
                  { emotion: "Uncertain", color: "bg-green-100 text-green-600", icon: "🤔" }
                ].map((item, index) => (
                  <div key={index} className={`${item.color} rounded-xl p-6 text-center`}>
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{item.emotion}</h4>
                    <p className="text-sm opacity-80">Reflect on the 'why' behind this feeling</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: The Power of Self-Talk */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                The Power of Self-Talk
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Transform Your Inner Voice</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Self-talk influences <strong className="text-green-600">confidence, focus, and resilience</strong>. Recognizing and improving your inner dialogue helps you handle setbacks and stay motivated.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-800">Your Inner Coach</h4>
                  </div>
                  <p className="text-gray-600">
                    The way you talk to yourself shapes your reality and potential.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Self-Talk Transformation</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    {selfTalkExamples[selfTalkExample].icon}
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Instead of</span>
                  </div>
                  <p className="text-red-600 font-medium mb-3 line-through">"{selfTalkExamples[selfTalkExample].negative}"</p>
                  <div className="flex items-center space-x-3 mb-2">
                    <ArrowRight className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Try this</span>
                  </div>
                  <p className="text-green-600 font-semibold">"{selfTalkExamples[selfTalkExample].positive}"</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center space-x-2">
                    {selfTalkExamples.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selfTalkExample ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Activity */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Challenge: Reframe Your Thoughts
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Identify one recurring unhelpful thought. Reframe it with logic and kindness.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❌</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-4">Unhelpful Thought</h4>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700">Write down the negative thought pattern you want to change</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-4">Reframed Thought</h4>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700">Replace it with a logical, kind alternative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Your Identity and Growth */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Identity and Growth
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-l-4 border-emerald-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                You Are More Than Labels
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Your identity is shaped by your <strong className="text-emerald-600">beliefs, passions, culture, and choices</strong>. And it's always evolving.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  question: "What do you enjoy doing — even if you're not great at it yet?", 
                  icon: "🎨",
                  color: "bg-green-100 text-green-600"
                },
                { 
                  question: "Which parts of your personality do you want to develop more?", 
                  icon: "🔧",
                  color: "bg-emerald-100 text-emerald-600"
                },
                { 
                  question: "What parts of your identity feel most important to you right now?", 
                  icon: "⭐",
                  color: "bg-green-100 text-green-600"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className={`${item.color} rounded-lg p-4`}>
                      <p className="font-medium">{item.question}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Recognizing Your Strengths */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Recognizing Your Strengths
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Beyond Skills</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  True strengths aren't just skills — they include traits like <strong className="text-green-600">perseverance, empathy, curiosity, and leadership</strong>.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-800">Your Inner Strengths</h4>
                  </div>
                  <p className="text-gray-600">
                    Character traits that help you navigate life's challenges with resilience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Strength Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { strength: "Perseverance", icon: "🏃‍♂️", color: "bg-green-100 text-green-600" },
                  { strength: "Empathy", icon: "❤️", color: "bg-emerald-100 text-emerald-600" },
                  { strength: "Curiosity", icon: "🔍", color: "bg-green-100 text-green-600" },
                  { strength: "Leadership", icon: "👑", color: "bg-emerald-100 text-emerald-600" }
                ].map((item, index) => (
                  <div key={index} className={`${item.color} rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-semibold">{item.strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reflection Activity */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Strength Discovery Exercise
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Think of three situations where you handled something well. What inner strength did you use each time?
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: "Situation 1", 
                    subtitle: "Academic Challenge",
                    icon: "📚",
                    color: "bg-green-100 text-green-600",
                    strength: "Perseverance"
                  },
                  { 
                    title: "Situation 2", 
                    subtitle: "Social Conflict",
                    icon: "🤝",
                    color: "bg-emerald-100 text-emerald-600",
                    strength: "Empathy"
                  },
                  { 
                    title: "Situation 3", 
                    subtitle: "Personal Goal",
                    icon: "🎯",
                    color: "bg-green-100 text-green-600",
                    strength: "Leadership"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`${item.color} rounded-2xl p-6 mb-4 transform hover:scale-105 transition-all duration-300`}>
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm opacity-80 mb-3">{item.subtitle}</p>
                      <div className="bg-white/50 rounded-lg p-3">
                        <p className="font-semibold text-sm">Strength Used:</p>
                        <p className="font-bold">{item.strength}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => handleActivityComplete('strength-discovery')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    completedActivities['strength-discovery']
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                  }`}
                >
                  {completedActivities['strength-discovery'] ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Activity Completed!</span>
                    </div>
                  ) : (
                    'Complete Reflection'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Module Summary */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Module 1 Summary
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You've taken the first crucial step in your personal growth journey by understanding yourself more deeply.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { 
                title: "Emotion Awareness", 
                description: "You learned to identify triggers and responses",
                icon: "💡",
                color: "bg-green-50 border-green-200"
              },
              { 
                title: "Self-Reflection", 
                description: "You developed skills to observe without judgment",
                icon: "🪞",
                color: "bg-emerald-50 border-emerald-200"
              },
              { 
                title: "Positive Self-Talk", 
                description: "You practiced reframing negative thoughts",
                icon: "💬",
                color: "bg-green-50 border-green-200"
              },
              { 
                title: "Strength Recognition", 
                description: "You identified your unique inner strengths",
                icon: "⭐",
                color: "bg-emerald-50 border-emerald-200"
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className={`${achievement.color} rounded-2xl p-6 border-2 transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Remember This Key Insight</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              "Self-understanding is not a destination but a journey. The more you know yourself, 
              the better you can navigate relationships, challenges, and opportunities that come your way."
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Module 2?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Now that you understand yourself better, let's learn how to build meaningful relationships with others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Healthy Relationships", icon: "🤝" },
              { title: "Assertive Communication", icon: "💬" },
              { title: "Building Empathy", icon: "❤️" }
            ].map((preview, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{preview.icon}</div>
                <h3 className="font-semibold text-lg">{preview.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
              Continue to Module 2: Building Meaningful Relationships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module1SelfUnderstanding;