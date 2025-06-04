import React from "react";

const metrics = [
  {
    term: "Reach",
    emoji: "👀",
    meaning: "How many people saw your ad",
    color: "bg-blue-100 border-blue-400",
  },
  {
    term: "Clicks",
    emoji: "🖱️",
    meaning: "How many people tapped or clicked on it",
    color: "bg-green-100 border-green-400",
  },
  {
    term: "CTR",
    emoji: "📊",
    meaning: "Click-through-rate: % of viewers who clicked",
    color: "bg-yellow-100 border-yellow-400",
  },
  {
    term: "Sales",
    emoji: "💰",
    meaning: "How many people actually bought your product",
    color: "bg-purple-100 border-purple-400",
  },
];

const questions = [
  "🎯 What is the purpose of identifying a target audience in a digital marketing campaign?",
  "🖼️ Name three different types of digital ads and explain where each type is commonly seen.",
  "🎨 Why is it important for a brand to have a clear brand identity when creating digital marketing content?",
  "💸 How does budgeting affect the choice of platforms and the reach of a digital marketing campaign?",
  "📈 What are some key metrics you can use to measure the success of an online ad campaign?",
];

const Section8dm = ({ topicRefs }) => {
  return (
    <div
      id="8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["8"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
        Analytics – See What’s Working 📈
      </h2>

      <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto">
        After your ad goes live... it's{" "}
        <span className="font-semibold">detective time! 🕵️‍♀️</span>
        <br />
        You get data that shows what’s hot 🔥 and what’s not.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border-l-4 shadow-md hover:scale-105 transition ${metric.color}`}
          >
            <div className="text-4xl mb-2">{metric.emoji}</div>
            <h3 className="text-xl font-semibold text-blue-800">
              {metric.term}
            </h3>
            <p className="text-md text-gray-700 mt-2">{metric.meaning}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400 shadow-inner">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          🔍 What Analytics Tell You
        </h3>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
          <li>
            <strong>What people liked</strong> – Did more people click on your
            meme ad or your video ad?
          </li>
          <li>
            <strong>Where you reached the most</strong> – Did Instagram give
            more views than YouTube?
          </li>
          <li>
            <strong>What to improve next time</strong> – Maybe change your
            caption or post at a different time?
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-rose-600 mb-4 text-center">
          📚 Conceptual Reflection Questions
        </h3>
        <p className="text-center text-gray-700 mb-6">
          Let’s test your brain power 🧠! Think through these to become a true
          digital marketing champ 💪
        </p>
        <ul className="space-y-4 max-w-3xl mx-auto">
          {questions.map((q, idx) => (
            <li
              key={idx}
              className="p-4 bg-rose-50 border-l-4 border-rose-400 rounded-lg shadow-sm hover:bg-rose-100 transition"
            >
              {q}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default Section8dm;
