import React from "react";

const steps = [
  {
    emoji: "🎯",
    title: "Choose Your Audience",
    desc: "Figure out WHO will love your product. Tech-loving kids? Pet parents? Gamers?",
    bg: "bg-indigo-100 border-indigo-400",
  },
  {
    emoji: "🧠",
    title: "Plan Your Content",
    desc: "Write catchy captions, make fun videos, create cool hashtags like #RoboHero.",
    bg: "bg-yellow-100 border-yellow-400",
  },
  {
    emoji: "🏁",
    title: "Pick a Launch Time",
    desc: "Weekends? Festivals? Holidays? Choose when people are free and scrolling 📱.",
    bg: "bg-green-100 border-green-400",
  },
  {
    emoji: "💸",
    title: "Spend Your Budget",
    desc: "Use your money smartly. Maybe mix YouTube + Instagram to reach different fans!",
    bg: "bg-pink-100 border-pink-400",
  },
  {
    emoji: "📊",
    title: "Watch & Learn",
    desc: "Check what’s working and what’s not. More likes on reels? Great! Do more of that!",
    bg: "bg-blue-100 border-blue-400",
  },
];

const Section7dm = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-6">
        Campaign Strategy – The Big Picture
      </h2>

      <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto">
        Running a digital campaign is like putting on a grand performance 🎭.
        You need the right script, stage, and spotlight to make your product a
        star 🌟!
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border-l-4 shadow-md hover:scale-105 transition ${step.bg}`}
          >
            <div className="text-4xl mb-2">{step.emoji}</div>
            <h3 className="text-xl font-semibold text-purple-800">
              {step.title}
            </h3>
            <p className="text-md text-gray-700 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-400 shadow-inner text-center">
        <h3 className="text-xl font-semibold text-purple-700 mb-2">
          🎤 Final Act
        </h3>
        <p className="text-md text-gray-700 max-w-2xl mx-auto">
          With a clear plan, your product won’t just get noticed — it might just
          go viral! 🚀 Ready to launch your first campaign like a pro? 🎬✨
        </p>
      </div>
    </div>
  );
};

export default Section7dm;
