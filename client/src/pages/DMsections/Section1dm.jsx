import React from "react";

const adTypes = [
  {
    type: "🖼️ Banner Ads",
    look: "These are picture boxes or strips you see on the top, side, or bottom of a website. They usually have bright colors or catchy words to grab your attention.",
    where: "📍 Common on news websites, online games, and blogs.",
    emoji: "🧱",
    funFact:
      "They’re like online billboards! You’ve probably seen them while playing free online games.",
    example:
      "Imagine playing a car racing game and seeing an ad at the top for new Hot Wheels 🚗 — that’s a banner ad!",
  },
  {
    type: "🎬 Video Ads",
    look: "These are short videos (sometimes skippable) that play before, during, or after your videos.",
    where: "📺 Found on YouTube, mobile games, or streaming apps.",
    emoji: "🍿",
    funFact:
      "Some video ads are only 5 seconds, but some tell cool mini stories to make them fun to watch.",
    example:
      "You tap a funny cat video, but first — boom! — a snack ad pops up. That’s a video ad!",
  },
  {
    type: "📖 Story Ads",
    look: "These ads appear in between stories on social media apps. They last just a few seconds and feel like normal stories — but they’re actually ads.",
    where: "📱 On Instagram, Snapchat, Facebook, and TikTok Stories.",
    emoji: "📸",
    funFact:
      "They disappear fast, but the catchy ones stay in your mind. Like that ad with glowing sneakers? Yup — story ad!",
    example:
      "You’re tapping through Insta stories and suddenly see a cool ad for a phone case with glitter — that’s a story ad!",
  },
  {
    type: "🔍 Search Ads",
    look: "These show up at the top when you search something on Google. They look like normal results but are marked with ‘Ad’.",
    where: "💻 Google, Bing, and other search engines.",
    emoji: "💡",
    funFact:
      "Companies pay Google so that their website shows up first when you search certain words!",
    example:
      "You search 'cool school bags' and the first few links say ‘Ad’. That’s a search ad!",
  },
  {
    type: "👑 Influencer Ads",
    look: "These are when famous or popular creators talk about a product in their videos or posts. It feels personal, like a friend recommending something.",
    where: "📷 YouTube, Instagram, TikTok — anywhere influencers hang out!",
    emoji: "🎤",
    funFact:
      "Influencers often get paid or free stuff to share their thoughts. It's called a brand deal!",
    example:
      "Your fav gamer unboxes a new headset and says it’s awesome — that’s an influencer ad!",
  },
];

const Section1dm = ({ topicRefs }) => {
  return (
    <div
      id="1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-6">
        ✨ Types of Digital Ads – Not All Ads Look the Same!
      </h2>

      <p className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto">
        Ads are like mini-messages that brands send us through the internet. 🛰️
        But they’re not all the same — some pop up on videos, some are just
        pictures, and some even come from your fav creators! Let’s look at the
        different kinds of ads you’ll spot online:
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {adTypes.map((ad, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border border-pink-100 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-2">{ad.emoji}</div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {ad.type}
            </h3>
            <p className="text-md text-gray-700 mb-3">
              <strong>👀 What It Looks Like:</strong> {ad.look}
            </p>
            <p className="text-md text-gray-700 mb-3">
              <strong>🌍 Where You See It:</strong> {ad.where}
            </p>
            <p className="text-md text-gray-700 mb-3">
              <strong>💬 Real-Life Example:</strong> {ad.example}
            </p>
            <p className="text-sm text-blue-500 italic mt-1">{ad.funFact}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl md:text-2xl font-semibold text-purple-700">
          🧠 Think Time: Which ad would YOU remember the most?
        </p>
        <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
          Would it be the funny video before your game? Or that creator you
          follow talking about a new toy? 🎯
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Section1dm;
