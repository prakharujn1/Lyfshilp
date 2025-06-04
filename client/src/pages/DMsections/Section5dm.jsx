import React from "react";

const platforms = [
  {
    icon: "📸",
    name: "Instagram",
    bestFor: "Reels, images, stories",
    users: "Teens, young adults",
    color: "bg-pink-100 border-pink-400",
  },
  {
    icon: "📺",
    name: "YouTube",
    bestFor: "Longer videos, shorts",
    users: "Everyone!",
    color: "bg-red-100 border-red-400",
  },
  {
    icon: "🔍",
    name: "Google",
    bestFor: "Search ads, website links",
    users: "Adults, serious buyers",
    color: "bg-yellow-100 border-yellow-400",
  },
  {
    icon: "🎮",
    name: "Games/Apps",
    bestFor: "Pop-up or in-level ads",
    users: "Kids, gamers",
    color: "bg-purple-100 border-purple-400",
  },
  {
    icon: "📘",
    name: "Facebook",
    bestFor: "Longer posts, groups",
    users: "Parents, adults",
    color: "bg-blue-100 border-blue-400",
  },
];

const Section5dm = ({ topicRefs }) => {
  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-600 mb-6">
        Digital Platforms – Where Will You Show It?
      </h2>

      <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto">
        Every platform is like a stage 🎭 and your ad is the performance. Choose
        wisely so the right audience sees your awesome content! 🚀
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {platforms.map((item, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border-l-4 shadow-md transition hover:scale-105 ${item.color}`}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-sky-700">{item.name}</h3>
            <p className="text-md text-gray-700 mt-2">
              <strong>Best For:</strong> {item.bestFor}
            </p>
            <p className="text-md text-gray-700">
              <strong>Who Uses It:</strong> {item.users}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 p-6 rounded-2xl border-l-4 border-green-400 shadow-inner">
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          📌 Pro Tip
        </h3>
        <p className="text-md text-gray-700">
          Don’t post everywhere 👀 — pick a platform that matches your product
          *and* audience.
          <br /> Example: A toy robot? Try Instagram Reels or mobile game ads!
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl md:text-2xl font-semibold text-purple-700">
          🎯 Think: Where would YOUR ad get the most love?
        </p>
        <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
          Is it TikTok? Insta? A quiz inside a mobile game? Choose your vibe!
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Section5dm;
