import React, { useState, useEffect } from 'react';
import { Heart, Brain, Shield, Users, TrendingUp, Zap, Eye, Smile, Frown, AlertCircle, CheckCircle, ArrowRight, Lightbulb, Target, RotateCcw, Ear } from 'lucide-react';

const Module4EmotionalIntelligence = ({ topicRefs }) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentEQComponent, setCurrentEQComponent] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [resilientThinking, setResilientThinking] = useState(0);
  const [empathyScenario, setEmpathyScenario] = useState(null);
  const [stressLevel, setStressLevel] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEQComponent(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const eqComponents = [
    {
      name: "Self-Awareness",
      icon: <Eye className="w-8 h-8" />,
      description: "Understanding your own emotions and their impact",
      skills: ["Recognize emotions as they happen", "Understand emotional triggers", "Know your strengths and weaknesses", "Be confident in your abilities"],
      example: "Noticing you feel frustrated during group work and understanding why",
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Self-Regulation",
      icon: <Shield className="w-8 h-8" />,
      description: "Managing emotions and controlling impulses",
      skills: ["Stay calm under pressure", "Think before reacting", "Adapt to change", "Manage stress effectively"],
      example: "Taking deep breaths when angry instead of saying something you'll regret",
      color: "from-emerald-600 to-green-700"
    },
    {
      name: "Motivation",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Being driven to achieve goals with positive attitude",
      skills: ["Stay optimistic", "Focus on goals", "Show initiative", "Persevere through challenges"],
      example: "Staying motivated to study even when the subject is difficult",
      color: "from-green-700 to-emerald-800"
    },
    {
      name: "Empathy",
      icon: <Heart className="w-8 h-8" />,
      description: "Understanding and sharing the feelings of others",
      skills: ["Read emotional cues", "Listen actively", "Show genuine concern", "Understand different perspectives"],
      example: "Recognizing when a friend is upset even if they haven't said anything",
      color: "from-emerald-700 to-green-800"
    }
  ];

  const emotions = [
    {
      name: "Happiness",
      emoji: "😊",
      triggers: ["Achievement", "Connection", "Fun activities", "Positive feedback"],
      physicalSigns: ["Smiling", "Relaxed posture", "High energy", "Clear thinking"],
      impact: "Boosts creativity, improves relationships, enhances performance",
      management: ["Share with others", "Savor the moment", "Use it to motivate", "Build on success"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Anger",
      emoji: "😠",
      triggers: ["Injustice", "Frustration", "Blocked goals", "Disrespect"],
      physicalSigns: ["Tense muscles", "Increased heart rate", "Clenched fists", "Hot feeling"],
      impact: "Can damage relationships, cloud judgment, reduce empathy",
      management: ["Count to 10", "Deep breathing", "Exercise", "Talk it out"],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Sadness",
      emoji: "😢",
      triggers: ["Loss", "Disappointment", "Rejection", "Loneliness"],
      physicalSigns: ["Crying", "Low energy", "Slumped posture", "Slow movement"],
      impact: "Helps process loss, signals need for support, can motivate change",
      management: ["Allow yourself to feel", "Seek support", "Practice self-care", "Find meaning"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Anxiety",
      emoji: "😰",
      triggers: ["Uncertainty", "Pressure", "New situations", "Fear of failure"],
      physicalSigns: ["Racing heart", "Sweating", "Restlessness", "Difficulty concentrating"],
      impact: "Can motivate preparation but may hinder performance if excessive",
      management: ["Preparation", "Relaxation techniques", "Positive self-talk", "Break tasks down"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const resilientThoughts = [
    {
      situation: "Failed an important test",
      negativeThought: "I'm terrible at this subject. I'll never improve.",
      resilientThought: "This test didn't go well, but I can learn from my mistakes and do better next time.",
      strategy: "Growth mindset",
      action: "Review what went wrong, make a study plan, ask for help"
    },
    {
      situation: "Rejected from a club or team",
      negativeThought: "I'm not good enough. Everyone else is better than me.",
      resilientThought: "This is disappointing, but it's one opportunity. I can improve my skills and try again.",
      strategy: "Reframing",
      action: "Seek feedback, practice skills, look for other opportunities"
    },
    {
      situation: "Friend stopped talking to you",
      negativeThought: "Everyone will leave me. I must have done something terrible.",
      resilientThought: "Friendships sometimes have challenges. I can try to understand what happened and work on it.",
      strategy: "Problem-solving",
      action: "Have an honest conversation, apologize if needed, learn from the experience"
    },
    {
      situation: "Made a mistake in front of everyone",
      negativeThought: "Everyone thinks I'm stupid. I'm so embarrassed I can't face them again.",
      resilientThought: "Everyone makes mistakes. This feels big now, but people will move on, and so can I.",
      strategy: "Perspective-taking",
      action: "Acknowledge the mistake, learn from it, move forward with confidence"
    }
  ];

  const empathyScenarios = [
    {
      title: "The Struggling Teammate",
      situation: "Your project partner seems distracted and their work quality has dropped. They've been quiet and seem stressed.",
      emotionalCues: ["Withdrawn behavior", "Decreased participation", "Looks tired", "Short responses"],
      empathicResponse: "I notice you seem overwhelmed lately. Is everything okay? How can I support you?",
      perspective: "They might be dealing with personal issues, academic pressure, or health problems",
      action: "Offer support, be patient, adjust expectations, check in regularly",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "The Excluded Classmate",
      situation: "You notice a classmate eating lunch alone every day. They seem shy and haven't made friends in your group.",
      emotionalCues: ["Sitting alone", "Avoiding eye contact", "Hesitant to speak", "Appears lonely"],
      empathicResponse: "Would you like to join us for lunch? We'd love to have you.",
      perspective: "They might feel left out, anxious about social situations, or unsure how to connect",
      action: "Include them in activities, introduce them to others, be patient and welcoming",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "The Competitive Friend",
      situation: "Your friend gets upset every time you succeed at something. They make sarcastic comments about your achievements.",
      emotionalCues: ["Sarcastic remarks", "Dismissive attitude", "Competitive behavior", "Jealous expressions"],
      empathicResponse: "I value our friendship. I wonder if you're feeling frustrated about something?",
      perspective: "They might feel insecure, compare themselves to you, or struggle with their own goals",
      action: "Celebrate their successes, be humble about yours, have an honest conversation",
      color: "from-green-600 to-emerald-700"
    }
  ];

  const stressManagementTechniques = [
    {
      technique: "Deep Breathing",
      description: "4-7-8 breathing pattern to calm your nervous system",
      steps: ["Inhale for 4 counts", "Hold for 7 counts", "Exhale for 8 counts", "Repeat 3-4 times"],
      when: "Before tests, presentations, or when feeling overwhelmed"
    },
    {
      technique: "Progressive Muscle Relaxation",
      description: "Tense and release muscle groups to reduce physical tension",
      steps: ["Start with toes", "Tense for 5 seconds", "Release and relax", "Move up through body"],
      when: "When physically tense or before sleep"
    },
    {
      technique: "Mindful Grounding",
      description: "5-4-3-2-1 technique to stay present",
      steps: ["5 things you can see", "4 things you can touch", "3 things you can hear", "2 things you can smell", "1 thing you can taste"],
      when: "During anxiety or panic moments"
    },
    {
      technique: "Positive Self-Talk",
      description: "Replace negative thoughts with supportive ones",
      steps: ["Notice negative thought", "Challenge its accuracy", "Replace with positive", "Repeat as needed"],
      when: "When facing self-doubt or criticism"
    }
  ];

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
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Emotional Intelligence & Resilience
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Lead with Heart. Bounce Back Stronger.
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
            <div className="text-6xl mb-6">🧠💚</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              EQ is what separates good leaders from great ones
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 max-w-5xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                It's the ability to stay <strong className="text-green-600">calm</strong>, manage 
                <strong className="text-emerald-600"> emotions</strong>, and lead with 
                <strong className="text-green-700"> empathy under pressure</strong>.
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              This module helps you build mental strength, understand emotional cues, and grow from setbacks. 
              Because leaders who last are leaders who feel — and still lead forward.
            </p>
          </div>
        </div>

        {/* Four Components of EQ */}
        <div 
          className={`space-y-12 transform transition-all duration-700 delay-200 ${
            visibleSections.includes(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              The Four Pillars of Emotional Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master these components to become an emotionally intelligent leader
            </p>
          </div>

          {/* Featured EQ Component (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-4">EQ Component Spotlight</div>
              <div className={`bg-gradient-to-r ${eqComponents[currentEQComponent].color} text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {eqComponents[currentEQComponent].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{eqComponents[currentEQComponent].name}</h3>
                    <p className="text-xl opacity-90">{eqComponents[currentEQComponent].description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Key Skills:</h4>
                    <div className="space-y-2">
                      {eqComponents[currentEQComponent].skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6">
                    <h4 className="font-bold mb-3">Real-Life Example:</h4>
                    <p className="text-sm leading-relaxed">{eqComponents[currentEQComponent].example}</p>
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
                className={`bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentEQComponent === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentEQComponent(index)}
              >
                <div className={`bg-gradient-to-r ${component.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {component.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{component.name}</h3>
                <p className="text-sm text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Understanding Emotions */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-400 ${
            visibleSections.includes(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Understand Your Emotions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how thoughts, feelings, and reactions connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emotions.map((emotion, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedEmotion === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedEmotion(selectedEmotion === index ? null : index)}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{emotion.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-800">{emotion.name}</h3>
                </div>
                
                {selectedEmotion === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Common Triggers:</h4>
                      <div className="space-y-1">
                        {emotion.triggers.map((trigger, triggerIndex) => (
                          <div key={triggerIndex} className="text-xs text-gray-700">• {trigger}</div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Physical Signs:</h4>
                      <div className="space-y-1">
                        {emotion.physicalSigns.map((sign, signIndex) => (
                          <div key={signIndex} className="text-xs text-gray-700">• {sign}</div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">Impact:</h4>
                      <p className="text-xs text-gray-700">{emotion.impact}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2 text-sm">How to Manage:</h4>
                      <div className="space-y-1">
                        {emotion.management.map((strategy, strategyIndex) => (
                          <div key={strategyIndex} className="text-xs text-gray-700">• {strategy}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {selectedEmotion === index ? 'Click to collapse' : 'Click to explore'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stress Management Interactive */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-500 ${
            visibleSections.includes(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-full p-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Build Self-Regulation Skills
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn techniques to stay <strong className="text-green-600">calm</strong> and 
                  <strong className="text-emerald-600"> focused</strong> under stress.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4">Interactive Stress Level</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">Low</span>
                      <div className="flex-1 relative">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={stressLevel}
                          onChange={(e) => setStressLevel(e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #10b981 0%, #10b981 ${stressLevel}%, #e5e7eb ${stressLevel}%, #e5e7eb 100%)`
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">High</span>
                    </div>
                    <div className="text-center">
                      <div className={`inline-block px-4 py-2 rounded-lg font-medium ${
                        stressLevel < 30 ? 'bg-green-200 text-green-800' :
                        stressLevel < 70 ? 'bg-yellow-200 text-yellow-800' :
                        'bg-red-200 text-red-800'
                      }`}>
                        Current Stress Level: {stressLevel}%
                      </div>
                    </div>
                    {stressLevel >= 70 && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm font-medium">High stress detected! Try these techniques:</p>
                        <ul className="text-red-700 text-sm mt-2 space-y-1">
                          <li>• Take 3 deep breaths</li>
                          <li>• Use the 5-4-3-2-1 grounding technique</li>
                          <li>• Take a short walk</li>
                          <li>• Practice positive self-talk</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Stress Management Toolkit</h3>
                <div className="space-y-4">
                  {stressManagementTechniques.map((technique, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                      <h4 className="font-bold text-gray-800 mb-2">{technique.technique}</h4>
                      <p className="text-sm text-gray-600 mb-3">{technique.description}</p>
                      <div className="text-xs text-gray-700">
                        <strong>When to use:</strong> {technique.when}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resilient Thinking */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-600 ${
            visibleSections.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Develop a Growth Mindset
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Turn failure into feedback and setbacks into comebacks
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {resilientThoughts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setResilientThinking(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      resilientThinking === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Situation: {resilientThoughts[resilientThinking].situation}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-400">
                  <div className="flex items-center space-x-2 mb-3">
                    <Frown className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-red-800">Fixed Mindset Thinking</h4>
                  </div>
                  <p className="text-red-700 italic mb-4">"{resilientThoughts[resilientThinking].negativeThought}"</p>
                  <div className="bg-red-100 rounded-lg p-3">
                    <p className="text-red-800 text-sm"><strong>Result:</strong> Gives up, avoids challenges, feels defeated</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400">
                  <div className="flex items-center space-x-2 mb-3">
                    <Smile className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-green-800">Growth Mindset Thinking</h4>
                  </div>
                  <p className="text-green-700 italic mb-4">"{resilientThoughts[resilientThinking].resilientThought}"</p>
                  <div className="space-y-2">
                    <div className="bg-green-100 rounded-lg p-3">
                      <p className="text-green-800 text-sm"><strong>Strategy:</strong> {resilientThoughts[resilientThinking].strategy}</p>
                    </div>
                    <div className="bg-emerald-100 rounded-lg p-3">
                      <p className="text-emerald-800 text-sm"><strong>Action:</strong> {resilientThoughts[resilientThinking].action}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setResilientThinking(Math.max(0, resilientThinking - 1))}
                  disabled={resilientThinking === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setResilientThinking(Math.min(3, resilientThinking + 1))}
                  disabled={resilientThinking === 3}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg disabled:opacity-50 hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Empathy in Action */}
        <div 
          className={`space-y-8 transform transition-all duration-700 delay-700 ${
            visibleSections.includes(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Show Empathy Like a Leader
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with others by listening and validating their emotions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {empathyScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  empathyScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setEmpathyScenario(empathyScenario === index ? null : index)}
              >
                <div className={`bg-gradient-to-r ${scenario.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{scenario.situation}</p>
                
                {empathyScenario === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Emotional Cues to Notice:</h4>
                      <div className="space-y-1">
                        {scenario.emotionalCues.map((cue, cueIndex) => (
                          <div key={cueIndex} className="flex items-center space-x-2">
                            <Eye className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-700 text-sm">{cue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Empathic Response:</h4>
                      <p className="text-green-700 italic text-sm">"{scenario.empathicResponse}"</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">Their Perspective:</h4>
                      <p className="text-gray-700 text-sm">{scenario.perspective}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-800 mb-2">How to Help:</h4>
                      <p className="text-gray-700 text-sm">{scenario.action}</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    {empathyScenario === index ? 'Click to collapse' : 'Click to practice empathy'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EQ Building Activities */}
        <div 
          className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 transform transition-all duration-700 delay-800 ${
            visibleSections.includes(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Daily EQ Building Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple practices to strengthen your emotional intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Emotion Check-ins",
                icon: <Heart className="w-6 h-6" />,
                description: "Ask yourself 'How am I feeling?' 3 times a day",
                frequency: "3x daily",
                benefit: "Increases self-awareness",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Gratitude Practice",
                icon: <Smile className="w-6 h-6" />,
                description: "Write down 3 things you're grateful for",
                frequency: "Daily",
                benefit: "Builds positive mindset",
                color: "from-emerald-500 to-green-600"
              },
              {
                title: "Active Listening",
                icon: <Ear className="w-6 h-6" />,
                description: "Really focus on one conversation per day",
                frequency: "Daily",
                benefit: "Improves empathy",
                color: "from-green-600 to-emerald-700"
              },
              {
                title: "Stress Reset",
                icon: <RotateCcw className="w-6 h-6" />,
                description: "Use one calming technique when stressed",
                frequency: "As needed",
                benefit: "Builds self-regulation",
                color: "from-emerald-600 to-green-700"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${activity.color} rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2">
                    <p className="text-xs text-gray-700"><strong>Frequency:</strong> {activity.frequency}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2">
                    <p className="text-xs text-gray-700"><strong>Benefit:</strong> {activity.benefit}</p>
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
            <div className="text-6xl mb-6">💚</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
              Emotional intelligence isn't about being perfect — it's about being aware, being resilient, 
              and caring enough about others to lead with both your head and your heart.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-lg flex-wrap gap-2">
                <span className="font-bold text-green-600">Self-Awareness</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-600">Self-Regulation</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-green-700">Empathy</span>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <span className="font-bold text-emerald-700">Resilient Leadership</span>
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

export default Module4EmotionalIntelligence;