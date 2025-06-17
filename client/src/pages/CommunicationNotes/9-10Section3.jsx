import React from "react";
import { motion } from "framer-motion";

const persuasionPillars = [
  {
    title: "Ethos (Credibility)",
    icon: "🎓",
    question: "Why should people trust you?",
    description: "Build credibility through expertise and trustworthiness",
    examples: ["Share your experience", "Show credentials", "Be honest and reliable"],
    color: "from-blue-400 to-blue-600",
    bgColor: "from-blue-50 to-blue-100"
  },
  {
    title: "Pathos (Emotion)",
    icon: "❤️",
    question: "Why should they care emotionally?",
    description: "Connect with people's feelings and emotions",
    examples: ["Tell personal stories", "Use emotional language", "Show empathy"],
    color: "from-red-400 to-red-600",
    bgColor: "from-red-50 to-red-100"
  },
  {
    title: "Logos (Logic)",
    icon: "🧠",
    question: "What evidence supports your point?",
    description: "Use facts, data, and logical reasoning",
    examples: ["Provide statistics", "Use logical arguments", "Show cause and effect"],
    color: "from-green-400 to-green-600",
    bgColor: "from-green-50 to-green-100"
  }
];

const communicationStyles = [
  {
    type: "Assertive",
    icon: "💪",
    description: "Clearly stating your needs without being rude",
    example: "I feel uncomfortable when you interrupt me. Please let me finish.",
    color: "bg-green-100 border-green-400 text-green-800",
    status: "✅ Recommended"
  },
  {
    type: "Aggressive",
    icon: "😠",
    description: "Attacking others or being forceful",
    example: "You always interrupt! Stop it!",
    color: "bg-red-100 border-red-400 text-red-800",
    status: "❌ Avoid"
  },
  {
    type: "Passive",
    icon: "😔",
    description: "Not standing up for yourself",
    example: "It's okay, never mind...",
    color: "bg-yellow-100 border-yellow-400 text-yellow-800",
    status: "⚠️ Needs improvement"
  }
];

const persuasiveTips = [
  {
    tip: "Use stories or real-life examples",
    icon: "📚",
    description: "Stories make your message memorable and relatable",
    color: "bg-purple-100 border-purple-300"
  },
  {
    tip: "Keep your tone respectful",
    icon: "🤝",
    description: "Respect builds trust and opens minds to your ideas",
    color: "bg-blue-100 border-blue-300"
  },
  {
    tip: "Be confident but listen to others",
    icon: "👂",
    description: "Balance confidence with openness to feedback",
    color: "bg-green-100 border-green-300"
  }
];

const realLifeExamples = [
  {
    scenario: "Everyday Life",
    icon: "🏠",
    situation: "Convincing parents to extend curfew",
    approach: "I'll be with trusted friends and call every hour. I have finished my homework too.",
    why_it_works: "Uses logic (homework done) + builds trust (calling every hour) + shows responsibility",
    color: "from-orange-50 to-orange-100 border-orange-200"
  },
  {
    scenario: "Corporate World",
    icon: "🏢",
    situation: "Pitching an idea to your team",
    approach: "Show how your idea solves a problem and aligns with company goals",
    why_it_works: "Uses logic (problem-solving) + connects to bigger picture (company goals)",
    color: "from-indigo-50 to-indigo-100 border-indigo-200"
  }
];

const CommunicationSection3 = ({ topicRefs }) => {
  return (
    <div
      id="m-3"
      ref={(el) => {
        if (topicRefs?.current) topicRefs.current["m-3"] = el;
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-16 px-6 md:px-20 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🎤 Persuasive & Assertive Speaking
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn to express yourself confidently and convince others with respect and logic
          </motion.p>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* What is Persuasive Speaking */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              What is Persuasive Speaking? 🎯
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-orange-400">
              <p className="text-lg text-gray-700 leading-relaxed">
                Persuasive speaking is about <span className="font-semibold text-orange-600">convincing others</span> using 
                <span className="font-semibold text-red-600"> logic, emotion, and credibility</span>. 
                It's used in speeches, debates, negotiations, and everyday situations where you want someone to 
                <span className="font-semibold text-pink-600"> agree with your point of view</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars of Persuasion */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Three Pillars of Persuasion 🏛️
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {persuasionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`h-3 bg-gradient-to-r ${pillar.color}`}></div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pillar.title}</h3>
                    <p className="text-lg font-semibold text-orange-600">{pillar.question}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-center">{pillar.description}</p>
                  
                  <div className={`bg-gradient-to-r ${pillar.bgColor} p-4 rounded-2xl`}>
                    <h4 className="font-bold text-gray-800 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {pillar.examples.map((example, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Communication Styles Comparison */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Assertive vs Aggressive vs Passive 🎭
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {communicationStyles.map((style, index) => (
              <motion.div
                key={index}
                className={`${style.color} border-2 rounded-2xl p-6 shadow-lg`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{style.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{style.type}</h3>
                  <span className="text-sm font-semibold">{style.status}</span>
                </div>
                
                <p className="mb-4 text-center">{style.description}</p>
                
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Example:</h4>
                  <p className="italic">"{style.example}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real-Life Examples */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Real-Life Examples 🌟
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {realLifeExamples.map((example, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${example.color} border rounded-3xl p-8 shadow-lg`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{example.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{example.scenario}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Situation:</h4>
                    <p className="text-gray-700">{example.situation}</p>
                  </div>
                  
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Approach:</h4>
                    <p className="text-gray-700 italic">"{example.approach}"</p>
                  </div>
                  
                  <div className="bg-white/70 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Why it works:</h4>
                    <p className="text-gray-700">{example.why_it_works}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips for Persuasive Speaking */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Tips for Persuasive Speaking 💡
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {persuasiveTips.map((tip, index) => (
              <motion.div
                key={index}
                className={`${tip.color} border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl mb-4 block">{tip.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.tip}</h3>
                </div>
                <p className="text-gray-700 text-center text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Motivation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 md:p-12 border border-orange-200 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
              Your Voice Matters! 🎤
            </h2>
            <p className="text-lg text-orange-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Whether you're convincing friends, presenting in class, or negotiating with parents, 
              these skills will help you communicate with <span className="font-semibold">confidence and respect</span>. 
              Remember: the best speakers listen as much as they talk!
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-4xl">🌟</span>
              <span className="text-4xl">🎯</span>
              <span className="text-4xl">🚀</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunicationSection3;