import React from "react";

const identityElements = [
  {
    icon: "🖼️",
    title: "Logo",
    description:
      "A logo is a special symbol that helps people recognize your brand instantly. Think of it like your brand’s face!",
    example:
      "🐦 Twitter’s blue bird or 🍎 Apple’s apple – you know them even without the name!",
  },
  {
    icon: "🎨",
    title: "Colors",
    description:
      "Colors give a brand its feel. Bright colors = fun, soft colors = calm, dark colors = serious.",
    example:
      "🟥 YouTube is red (bold and energetic), while 🟦 Facebook is blue (calm and trustworthy).",
  },
  {
    icon: "🔊",
    title: "Tone of Voice",
    description:
      "This is how your brand talks — funny, smart, cool, or serious. It helps people connect with it.",
    example: "Duolingo 🦉 is silly and fun. Apple 🍏 sounds smart and clean.",
  },
  {
    icon: "✍️",
    title: "Font Style",
    description:
      "Fonts can feel playful, techy, or formal. It’s like your product’s handwriting!",
    example: "Comic Sans feels fun 🤹, while Roboto feels modern 🤖.",
  },
  {
    icon: "📢",
    title: "Tagline / Slogan",
    description:
      "A short and catchy phrase that tells people what your brand is about.",
    example: "McDonald’s 🍔 says 'I’m Lovin’ It', Nike 👟 says 'Just Do It'.",
  },
];

const Section3dm = ({ topicRefs }) => {
  return (
    <div
      id="3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-600 mb-6">
        Brand Identity – Give Your Product a Personality
      </h2>

      <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
        A brand is{" "}
        <span className="text-rose-500 font-semibold">not just a name</span> —
        it’s the *vibe* or *feeling* people get when they see or hear about it.
        It’s like your product’s personality. Think about how you dress, talk,
        or express yourself — that’s your identity. Brands do that too!
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {identityElements.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-rose-300 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-semibold text-rose-700 mb-2">
              {item.title}
            </h3>
            <p className="text-md text-gray-700 mb-1">{item.description}</p>
            <p className="text-sm text-pink-500 italic mt-1">{item.example}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-2xl shadow-inner border-l-4 border-blue-300">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          🤖 Example Time!
        </h3>
        <p className="text-md text-gray-700">
          Let’s say you’ve created a <strong>robot pet</strong> 🐾. You want it
          to stand out from all the other robot toys.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
          <li>
            <strong>Funny & Playful 🤪</strong> – Bright yellow, silly face
            logo, slogan like "Your LOL Buddy!"
          </li>
          <li>
            <strong>Smart & Techy 🧠</strong> – Blue and silver colors, robot
            font, slogan like "Think. Move. Play."
          </li>
          <li>
            <strong>Cute & Cuddly 🧸</strong> – Pastel colors, round shapes,
            slogan like "Your Huggable Helper!"
          </li>
        </ul>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400 shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🧠 Why Brand Identity Matters
          </h3>
          <p className="text-md text-gray-700">
            90% of shoppers say they stay loyal to brands they feel connected
            to. A good brand identity helps people *remember*, *trust*, and even
            *love* your product!
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400 shadow-md">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">
            💬 Fun Fact
          </h3>
          <p className="text-md text-gray-700">
            The average person sees over <strong>5,000 ads</strong> every day 😲
            — brands need a unique identity to stand out in the crowd!
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl md:text-2xl font-semibold text-purple-700">
          🖌️ Imagine: If your digital product was a person — what would they be
          like?
        </p>
        <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
          Would they be loud and fun? Smart and helpful? Chill and cool? That’s
          the heart of brand identity.
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Section3dm;
