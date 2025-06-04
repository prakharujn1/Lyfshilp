import React from "react";

const contentTypes = [
  {
    icon: "💬",
    title: "Captions",
    example: '"This pet robot can out-dance YOU! 💃🤖 #ChallengeIt"',
    tip: "Keep it short, funny, and powerful. Make people stop scrolling!",
  },
  {
    icon: "📸",
    title: "Posts",
    example: "A cool photo of your robot dancing on a desk!",
    tip: "Bright colors + clean layout = Insta-worthy.",
  },
  {
    icon: "🎬",
    title: "Reels/Shorts",
    example: "15-sec video of your robot doing moonwalk 🕺",
    tip: "Start with action! Grab attention in the first 3 seconds.",
  },
  {
    icon: "😂",
    title: "Memes",
    example:
      '"When your robot is the only one who knows the dance steps!" with a funny image',
    tip: "Relatable + LOL = shareable.",
  },
  {
    icon: "❓",
    title: "Quizzes & Polls",
    example:
      '"Which robot skill do YOU want: dancing 💃, coding 💻, or cleaning 🧼?"',
    tip: "Ask questions so your fans can interact!",
  },
];

const Section4dm = ({ topicRefs }) => {
  return (
    <div
      id="4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6">
        Content Creation – Make It Catchy and Cool
      </h2>

      <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
        So, your product is ready? Awesome! 🎉 Now it’s time to{" "}
        <strong>show it off to the world</strong> using fun, creative content.
        Think of it like putting your idea on a stage!
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {contentTypes.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-orange-300 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              {item.title}
            </h3>
            <p className="text-md text-gray-700">
              <strong>Example:</strong> {item.example}
            </p>
            <p className="text-sm text-orange-500 italic mt-2">{item.tip}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 p-6 rounded-2xl shadow-inner border-l-4 border-yellow-400">
        <h3 className="text-xl font-semibold text-yellow-700 mb-2">
          ✨ Pro Tips to Make Content POP
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Keep it short</strong> – Attention spans are tiny 🧠⚡
          </li>
          <li>
            <strong>Use emojis</strong> 🎉 – They add personality and fun!
          </li>
          <li>
            <strong>Ask questions</strong> – Like “Would you try this?” to get
            people talking
          </li>
          <li>
            <strong>Fun hashtags</strong> – Use things like #RoboBuddy or
            #NextGenToy to create a trend
          </li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl md:text-2xl font-semibold text-purple-700">
          🎨 Challenge Time: Can YOU create a meme or reel about your dream
          gadget?
        </p>
        <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
          If you were promoting it on Instagram or YouTube Shorts — what would
          your content look like?
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Section4dm;
