import React from "react";

const Mod4 = ({ topicRefs }) => {
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
      <div className="px-4 py-8 md:px-16 bg-orange-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-700 mb-2">
          🤝 Fixing Conflicts the Smart Way
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Everyone has arguments sometimes—but with calm words and
          understanding, we can solve them like pros.
        </p>
      </div>

      {/* Conflict Resolution */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://www.wellable.co/blog/wp-content/uploads/2023/08/7-Effective-Conflict-Resolution-Techniques-In-The-Workplace-2.png"
          alt="Conflict resolution"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            🧠 What is Conflict Resolution?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Conflict resolution is the skill of solving disagreements
            peacefully. Instead of shouting or walking away, you talk it out so
            both sides feel heard.
          </p>
          <p className="text-base md:text-lg italic">Example:</p>
          <p className="text-base md:text-lg font-medium mt-2 text-orange-800">
            You and your friend both want the window seat. Instead of fighting,
            say:
            <br />
            <span className="italic">
              “How about I take it now, and you sit there on the way back?”
            </span>
          </p>
        </div>
      </div>

      {/* Compromise */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_499778666_332077.jpg"
          alt="Compromise"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            ⚖️ What is Compromise?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Compromise means both people give a little so everyone feels it's
            fair. You meet in the middle, like teamwork!
          </p>
          <p className="text-base md:text-lg italic">Example:</p>
          <p className="text-base md:text-lg font-medium mt-2 text-orange-800">
            You want to play cricket, your friend wants football. You agree to
            play cricket today and football tomorrow.
          </p>
        </div>
      </div>

      {/* Calm Word Swaps */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://www.shutterstock.com/image-vector/mindfulness-meditation-awareness-tag-cloud-600nw-1155109390.jpg"
          alt="Calm words"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">
            🗯️ What are Calm Word Swaps?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Sometimes we say things in anger that can hurt others. Instead, try
            replacing harsh words with calm, respectful ones. It shows maturity
            and care.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg mt-3 text-orange-800">
            <li>❌ “You never listen!”</li>
            <li>✅ “I feel unheard sometimes.”</li>
            <li>❌ “You always mess things up!”</li>
            <li>
              ✅ “I feel frustrated when things go wrong. Can we try again?”
            </li>
          </ul>
        </div>
      </div>

      {/* Try This Activity */}
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-md shadow">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-yellow-800">
          🎯 Try This:
        </h2>
        <p className="text-base md:text-lg text-yellow-900">
          Next time you feel angry, pause and take a deep breath. Then use calm
          words to explain how you feel.
        </p>
        <div className="bg-white shadow-md p-4 mt-3 rounded-md border border-yellow-300 text-yellow-900 text-base md:text-lg">
          “I feel [your feeling] when [what happened]. Can we talk about it
          calmly?”
        </div>
        <p className="text-sm mt-2 italic text-yellow-800">
          Example: “I feel hurt when I’m left out. Can we make a plan together
          next time?”
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Mod4;
