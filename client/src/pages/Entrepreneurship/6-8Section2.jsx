import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    emoji: "🚶‍♀️",
    title: "Step 1: Spot the Problem",
    desc: "Entrepreneurs observe their surroundings and find problems to solve.",
    example: "Students waiting too long in the canteen line.",
  },
  {
    emoji: "🧠",
    title: "Step 2: Understand the Customer’s Needs",
    desc: "Talk to real people to understand how the problem affects them.",
    example: "Ask students how canteen delays affect their break time.",
  },
  {
    emoji: "💡",
    title: "Step 3: Brainstorm Solutions",
    desc: "Get creative with methods like mind maps and group discussions.",
    example: "Maybe a pre-order app for canteen snacks?",
  },
  {
    emoji: "🔎",
    title: "Step 4: Research and Validation",
    desc: "Check if your idea is new and if people would actually use it.",
    example: "Survey friends and research online for similar apps.",
  },
  {
    emoji: "✅",
    title: "Step 5: Identify Product-Market Fit",
    desc: "Does your idea match what people really want?",
    example: "Friends say, 'I'd definitely use this!'",
  },
  {
    emoji: "✏️",
    title: "Step 6: Make a Simple Version (Prototype)",
    desc: "Draw, sketch, or build a basic version of your idea.",
    example: "Use Canva to design a simple app mockup.",
  },
  {
    emoji: "🔄",
    title: "Step 7: Feedback and Iteration",
    desc: "Show your idea, ask for feedback, and improve it.",
    example: "Friends suggest a faster login feature—great feedback!",
  },
  {
    emoji: "🚀",
    title: "Step 8: Launch Your Idea",
    desc: "Time to show your idea to the world in a small way.",
    example: "Display it in a school exhibition or online.",
  },
  {
    emoji: "🔁",
    title: "Step 9: Reflect and Grow",
    desc: "Think about what you learned and how to grow from it.",
    example: "Keep a journal about what worked and what didn’t.",
  },
];

const aiTools = [
  { stage: "Spotting Problems", tool: "ChatGPT, Google Trends" },
  { stage: "Designing Solutions", tool: "AI image generators" },
  { stage: "Planning", tool: "AI business plan tools" },
  { stage: "Prototyping", tool: "No-code tools" },
  { stage: "Testing", tool: "AI feedback analyzers" },
  { stage: "Launching", tool: "Canva AI, writing tools" },
  { stage: "Reflecting", tool: "AI journaling tools" },
];

const EntrepreneurshipModule2 = ({ topicRefs }) => {
  return (
    <div
      id="2"
      ref={(el) => {
        if (topicRefs?.current) topicRefs.current["2"] = el;
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-16 px-6 md:px-20 text-center relative">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛤️ The Entrepreneurial Process – Step by Step!
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 opacity-90 max-w-2xl mx-auto">
          Learn how ideas become real, helpful solutions!
        </p>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-blue-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="text-3xl">{step.emoji}</div>
              <h3 className="text-xl font-bold text-blue-800">{step.title}</h3>
            </div>
            <p className="text-gray-700">{step.desc}</p>
            <div className="mt-3 bg-blue-50 p-3 rounded-md text-sm text-blue-700">
              <strong>Example:</strong> {step.example}
            </div>
          </motion.div>
        ))}

        {/* AI Tools Section */}
        <motion.div
          className="bg-gradient-to-r from-indigo-50 to-purple-100 p-6 md:p-8 rounded-3xl border border-indigo-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">🤖 How AI Can Help at Every Step</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {aiTools.map((tool, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all border-l-4 border-indigo-400"
              >
                <p className="text-sm font-semibold text-indigo-700">
                  <span className="mr-2">🧠</span>
                  <strong>{tool.stage}</strong>
                </p>
                <p className="text-gray-700 text-sm mt-1">Tools: {tool.tool}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Motivation Box */}
        <motion.div
          className="text-center bg-yellow-100 p-6 rounded-3xl border border-yellow-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-semibold text-yellow-800">
            Every great entrepreneur starts small — your idea might be the next big thing! 🌟
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EntrepreneurshipModule2;
