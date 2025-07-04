import React, { useState, useEffect } from 'react';
import { Brain, Eye, Target, BookOpen, Lightbulb, Heart, Compass, CheckCircle, Users, Zap, Star, Search } from 'lucide-react';

const Module1InnerAwareness = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedReflection, setSelectedReflection] = useState(null);
  const [thoughtLog, setThoughtLog] = useState({
    trigger: '',
    consequences: '',
    improvement: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const reflectionQuestions = [
    {
      icon: <Brain className="w-6 h-6" />,
      question: "How do your emotions affect your productivity and decision-making?",
      category: "Emotional Impact"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      question: "Have you ever misjudged someone because of your own emotional state?",
      category: "Perception"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      question: "How do you typically handle emotional overload?",
      category: "Coping Strategies"
    }
  ];

  const blindSpotExamples = [
    {
      title: "Over-committing to avoid rejection",
      description: "Taking on too many responsibilities to please others",
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      title: "Deflecting criticism due to fear of failure",
      description: "Avoiding feedback that could help you grow",
      icon: <Search className="w-8 h-8 text-green-600" />
    }
  ];

  const identityRoles = [
    { role: "Student", emoji: "📚", energizing: true },
    { role: "Sibling", emoji: "👫", energizing: true },
    { role: "Friend", emoji: "🤝", energizing: false },
    { role: "Leader", emoji: "👑", energizing: true }
  ];

  return (
    <div
      id="s-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-1"] = el;
        }
      }}
      className="mb-10"
    >
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mastering Inner Awareness
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              "Know Thyself, Lead Thyself" - Discover how your inner world shapes your life outcomes
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <Compass className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Inner Journey Begins Here
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Let's dive deeper into how our inner world shapes our life outcomes — from decision-making to relationships and leadership.
            </p>
          </div>
        </div>

        {/* Section 1: Emotional Intelligence */}
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Emotional Intelligence in Action
                </h2>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Emotional intelligence (EQ) is not just about understanding your emotions — 
                  it's about <strong className="text-green-600">using them constructively</strong>.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-gray-800">Think Deeper</h3>
                </div>
                
                <div className="space-y-4">
                  {reflectionQuestions.map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400 cursor-pointer transition-all duration-300 hover:shadow-md ${
                        selectedReflection === index ? 'ring-2 ring-green-300 scale-105' : ''
                      }`}
                      onClick={() => setSelectedReflection(selectedReflection === index ? null : index)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-green-600 mt-1">{item.icon}</div>
                        <div>
                          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">
                            {item.category}
                          </div>
                          <p className="text-gray-700 font-medium">{item.question}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reflection Exercise */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Reflection Exercise
              </h3>
              <p className="text-gray-600 mt-4">
                Reflect on a recent emotional reaction (positive or negative)
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "What triggered it?", key: "trigger", icon: <Zap className="w-6 h-6" /> },
                { title: "What were the consequences?", key: "consequences", icon: <Target className="w-6 h-6" /> },
                { title: "What would you do differently?", key: "improvement", icon: <Lightbulb className="w-6 h-6" /> }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-green-600">{item.icon}</div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                  </div>
                  <textarea
                    className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    rows="4"
                    placeholder={`Reflect on ${item.title.toLowerCase()}`}
                    value={thoughtLog[item.key]}
                    onChange={(e) => setThoughtLog(prev => ({ ...prev, [item.key]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Metacognition */}
        <div className="space-y-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <Brain className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Metacognition: Thinking About Thinking
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Metacognition is the awareness of your own thought processes. 
                High-performing individuals often pause to question their thinking patterns.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "When do your thoughts spiral unnecessarily?",
                icon: <Brain className="w-8 h-8 text-green-600" />,
                description: "Identify patterns of overthinking"
              },
              {
                title: "Are your beliefs based on evidence, or assumption?",
                icon: <Eye className="w-8 h-8 text-green-600" />,
                description: "Question the foundation of your thoughts"
              },
              {
                title: "Do your thoughts empower or limit you?",
                icon: <Zap className="w-8 h-8 text-green-600" />,
                description: "Evaluate the impact of your mindset"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Thought Log Activity */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                5-Day Thought Log Challenge
              </h3>
              <p className="text-gray-700 mt-4">
                Each day, identify one automatic thought, analyze its source, and replace it with a more intentional alternative.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="grid grid-cols-5 gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={day} className="text-center">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                      {day}
                    </div>
                    <div className="text-xs text-gray-600">Day {day}</div>
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-600">
                <p className="font-medium">Track → Analyze → Replace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Purpose-Driven Identity */}
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Purpose-Driven Identity
                </h2>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Your identity isn't just who you are — it's 
                  <strong className="text-green-600"> who you choose to become</strong>.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 font-medium">What roles do I play in life?</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <p className="text-gray-700 font-medium">Which roles energize me? Which feel performative?</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <p className="text-gray-700 font-medium">What kind of person do I aspire to be?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Roles</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {identityRoles.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        item.energizing 
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300' 
                          : 'bg-gray-50 border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <h4 className="font-bold text-gray-800">{item.role}</h4>
                        <div className={`text-xs mt-2 px-2 py-1 rounded ${
                          item.energizing ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {item.energizing ? 'Energizing' : 'Performative'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* North Star Statement */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <Star className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Personal North Star Statement
              </h3>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-xl font-medium mb-4">
                  "I am someone who chooses to _______ in order to _______."
                </p>
                <p className="text-green-100 text-sm">
                  Fill in the blanks to create your guiding statement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Shadow Work and Blind Spots */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Shadow Work and Blind Spots
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Even our best intentions can be shaped by unseen insecurities or fears. 
              Recognizing blind spots helps us evolve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blindSpotExamples.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Journal Prompt */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Journal Prompt
              </h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Write about one uncomfortable truth you've recently discovered about yourself. 
                  How can acknowledging it help you grow?
                </p>
                <textarea
                  className="w-full mt-6 p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="6"
                  placeholder="Reflect on your growth opportunity..."
                />
              </div>
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
              Congratulations! You've taken the first step in mastering inner awareness. 
              Remember: self-knowledge is the foundation of all leadership.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Know Thyself</strong> + 
                <strong className="text-emerald-600"> Lead Thyself</strong> = 
                <strong className="text-teal-600"> Transform Your World 🌟</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    
  );
};

export default Module1InnerAwareness;