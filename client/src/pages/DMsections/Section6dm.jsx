import React from "react";

const platforms = [
  {
    icon: "📺",
    name: "YouTube",
    cost: 50,
    audience: "Families and students",
    color: "bg-red-100 border-red-400",
  },
  {
    icon: "📸",
    name: "Instagram",
    cost: 40,
    audience: "Teenagers and young adults",
    color: "bg-pink-100 border-pink-400",
  },
  {
    icon: "🔍",
    name: "Google",
    cost: 60,
    audience: "People searching to buy",
    color: "bg-yellow-100 border-yellow-400",
  },
  {
    icon: "🎮",
    name: "Mobile Games",
    cost: 30,
    audience: "Kids, gamers",
    color: "bg-purple-100 border-purple-400",
  },
];

const Section6dm = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-6">
        Budgeting – Spend Smart, Not More
      </h2>

      <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
        Let’s say you have{" "}
        <span className="font-semibold text-green-700">₹1,000</span> to tell the
        world about your awesome robotic pet 🤖🐾.
        <br />
        How do you spend it smartly? Let’s break it down!
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {platforms.map((item, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border-l-4 shadow-md transition hover:scale-105 ${item.color}`}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-green-800">
              {item.name}
            </h3>
            <p className="text-md text-gray-700 mt-1">
              <strong>Cost per ad:</strong> ₹{item.cost}
            </p>
            <p className="text-md text-gray-700">
              <strong>Reaches:</strong> {item.audience}
            </p>
            <p className="text-sm text-gray-600 mt-2 italic">
              👉 With ₹1,000, you can run {Math.floor(1000 / item.cost)} ads
              here!
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400 shadow-inner">
        <h3 className="text-xl font-semibold text-orange-700 mb-2">
          💡 Smart Strategy
        </h3>
        <p className="text-md text-gray-700">
          A pro marketer doesn’t put all money in one basket 🧺! They{" "}
          <strong>mix platforms</strong>, watch what works, and adjust. 📊✨
        </p>
        <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
          <li>Try 10 ads on Instagram (₹400)</li>
          <li>5 on YouTube (₹250)</li>
          <li>6 in mobile games (₹180)</li>
          <li>See what works best!</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl md:text-2xl font-semibold text-purple-700">
          🎯 Challenge Time: You're the Boss!
        </p>
        <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
          You’ve got ₹1,000 💰 — How would YOU split it across these platforms
          to get the most views?
        </p>
      </div>
    </div>
  );
};

export default Section6dm;
