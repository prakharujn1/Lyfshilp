import React, { useState } from "react";

const toneExamples = [
  {
    phrase: "Really?",
    tones: [
      { type: "Curious", emoji: "🤔", color: "from-blue-400 to-cyan-400", example: "Said with a questioning voice when learning something new" },
      { type: "Excited", emoji: "😃", color: "from-yellow-400 to-orange-400", example: "Said with enthusiasm when surprised positively" },
      { type: "Sarcastic", emoji: "🙄", color: "from-red-400 to-pink-400", example: "Said with a flat tone to show disbelief" }
    ]
  }
];

const bodyLanguageTypes = [
  {
    type: "Positive",
    icon: "😊",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    behaviors: [
      { action: "Smiling", impact: "Makes others feel welcome" },
      { action: "Nodding", impact: "Shows you're listening" },
      { action: "Open posture", impact: "Appears friendly and approachable" }
    ]
  },
  {
    type: "Negative",
    icon: "😤",
    color: "from-red-400 to-pink-400",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    behaviors: [
      { action: "Eye-rolling", impact: "Shows disrespect or annoyance" },
      { action: "Crossed arms", impact: "Appears defensive or closed off" },
      { action: "Avoiding eye contact", impact: "Seems uninterested or rude" }
    ]
  }
];

const digitalDosAndDonts = [
  {
    category: "Don'ts",
    color: "from-red-400 to-pink-400",
    bgColor: "bg-red-50",
    icon: "❌",
    examples: [
      { text: "WHAT DO YOU WANT?", reason: "All caps = shouting" },
      { text: "K.", reason: "Seems cold or dismissive" },
      { text: "Fine", reason: "May appear angry or annoyed" }
    ]
  },
  {
    category: "Do's",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-50",
    icon: "✅",
    examples: [
      { text: "Hi Riya, how are you?", reason: "Friendly greeting" },
      { text: "Thanks for the help! 😊", reason: "Positive tone with emoji" },
      { text: "I understand your point", reason: "Shows respect and empathy" }
    ]
  }
];

const netiquetteTips = [
  {
    tip: "Begin with a greeting",
    example: "Hi Riya, or Hello Sir",
    icon: "👋",
    color: "from-purple-400 to-indigo-400"
  },
  {
    tip: "Use punctuation and emojis thoughtfully",
    example: "Thanks for the help! 😊",
    icon: "😊",
    color: "from-yellow-400 to-orange-400"
  },
  {
    tip: "Avoid spamming or odd-hour messages",
    example: "Send messages at appropriate times",
    icon: "⏰",
    color: "from-blue-400 to-cyan-400"
  },
  {
    tip: "Re-read before sending",
    example: "Check for clarity and tone",
    icon: "🔍",
    color: "from-green-400 to-emerald-400"
  }
];

const Section4 = ({ topicRefs }) => {
  const [activeBodyLanguage, setActiveBodyLanguage] = useState(0);
  const [activeTone, setActiveTone] = useState(0);
  const [hoveredTip, setHoveredTip] = useState(null);

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
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
            📱 Section 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Tone, Body Language & Digital Etiquette
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Master the art of communication beyond just words! Learn how your tone, body language, 
            and digital behavior shape how others perceive you. 🎭✨
          </p>
        </div>

        {/* Tone of Voice Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                🎭 The Power of Tone
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tone is the emotion behind your words. The same phrase can mean completely different things!
              </p>
            </div>

            {/* Interactive Tone Example */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Try This Example:</h3>
                <div className="text-6xl font-bold text-purple-600 mb-4">"Really?"</div>
                <p className="text-gray-600">Click on different tones to see how the same word changes meaning!</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {toneExamples[0].tones.map((tone, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-300 rounded-2xl p-6 ${
                      activeTone === index 
                        ? 'shadow-xl scale-105 bg-white border-2 border-purple-300' 
                        : 'bg-gray-50 hover:bg-white hover:shadow-md'
                    }`}
                    onClick={() => setActiveTone(index)}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tone.emoji}</div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{tone.type}</h4>
                      {activeTone === index && (
                        <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                          <p className="text-sm text-gray-700 italic">{tone.example}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Body Language Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🤝 Non-Verbal Communication
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your body speaks even when you don't! Learn what your posture and gestures are saying.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {bodyLanguageTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveBodyLanguage(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeBodyLanguage === index
                    ? `bg-gradient-to-r ${type.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.icon} {type.type} Body Language
              </button>
            ))}
          </div>

          <div className={`${bodyLanguageTypes[activeBodyLanguage].bgColor} rounded-2xl p-8 transition-all duration-500`}>
            <h3 className={`text-2xl font-bold ${bodyLanguageTypes[activeBodyLanguage].textColor} mb-6 text-center`}>
              {bodyLanguageTypes[activeBodyLanguage].type} Body Language Examples
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {bodyLanguageTypes[activeBodyLanguage].behaviors.map((behavior, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-800 mb-2">{behavior.action}</h4>
                  <p className="text-gray-600 text-sm">{behavior.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Etiquette Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                💻 Digital Communication (Netiquette)
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When chatting or emailing, we can't see facial expressions. So we must be extra careful about how our words sound!
              </p>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {digitalDosAndDonts.map((category, categoryIndex) => (
                <div key={categoryIndex} className={`${category.bgColor} rounded-2xl p-6`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    {category.icon} {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.examples.map((example, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="font-mono text-lg mb-2 text-gray-800">"{example.text}"</div>
                        <div className="text-sm text-gray-600 italic">→ {example.reason}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Netiquette Tips */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            📝 Good Digital Practices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {netiquetteTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredTip(index)}
                onMouseLeave={() => setHoveredTip(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${tip.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{tip.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.tip}</h3>
                      <p className="text-gray-600 mb-3">Example: {tip.example}</p>
                      
                      {hoveredTip === index && (
                        <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg transition-all duration-300">
                          <p className="text-sm text-gray-700">
                            💡 This helps create positive digital interactions and shows respect for others.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Examples */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 mb-12 border border-orange-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            🌟 Real-Life Examples
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👥</span>
                <h3 className="text-xl font-bold text-gray-800">Everyday Life</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Situation:</strong> Your friend thinks you're mad because you texted "Whatever."
                </p>
                <p className="text-gray-700">
                  <strong>Problem:</strong> Short, blunt responses can seem rude in text.
                </p>
                <p className="text-green-600 font-semibold">
                  <strong>Better:</strong> "I understand, let's talk about it later 😊"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💼</span>
                <h3 className="text-xl font-bold text-gray-800">Professional Setting</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Situation:</strong> An employee sends an email with spelling errors and no greeting.
                </p>
                <p className="text-gray-700">
                  <strong>Problem:</strong> Looks unprofessional and careless.
                </p>
                <p className="text-green-600 font-semibold">
                  <strong>Better:</strong> "Dear Sir/Madam, [clear message], Regards, [Name]"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Says Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 mb-12 border-l-4 border-purple-400">
          <div className="flex items-start gap-4">
            <div className="bg-purple-400 rounded-full p-3 flex-shrink-0">
              <span className="text-2xl">👩‍🏫</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">💡 Teacher Says:</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">👉</span>
                  Your tone and body language often matter more than your actual words.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">👉</span>
                  In digital communication, be extra careful since people can't see your face or hear your voice.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">👉</span>
                  When in doubt, choose kindness and clarity over being quick or clever.
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">👉</span>
                  Practice good digital habits now – they'll serve you well in your career!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips Summary */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎯 Quick Tips Summary
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="font-bold text-gray-800 mb-2">Mind Your Tone</h3>
              <p className="text-sm text-gray-600">The same words can sound different based on how you say them</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-gray-800 mb-2">Body Language Matters</h3>
              <p className="text-sm text-gray-600">Your posture and gestures speak volumes</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold text-gray-800 mb-2">Digital Respect</h3>
              <p className="text-sm text-gray-600">Treat online spaces like real conversations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;