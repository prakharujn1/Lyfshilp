import React from "react";

const Mod3 = () => {
  return (
    <div className="px-4 py-8 md:px-16 bg-green-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-2">
          🗣️ Speak with Purpose
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Words can be magical. Let’s learn how to use them to share, support,
          and solve problems!
        </p>
      </div>

      {/* Section: Why Words Matter */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          💡 Why Do Words Matter?
        </h2>
        <p className="text-base md:text-lg mb-2">
          Every word you say can either lift someone up or bring them down.
          Words can show kindness, express ideas, solve conflicts, and even make
          change happen. So learning how to speak clearly and kindly is a super
          power! 🦸
        </p>
      </div>

      {/* What is Persuasion? */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://miro.medium.com/v2/resize:fit:728/1*bO_52rJTqtL0OZJU2HcHBA.png"
          alt="Persuasion"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            🧠 What is Persuasion?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Persuasion is when you try to change someone’s opinion, or convince
            them to see your point of view—without arguing or forcing.
          </p>
          <p className="text-base md:text-lg mb-2">
            Instead of demanding, you calmly explain your idea with good
            reasons.
          </p>
          <p className="text-base md:text-lg italic">
            Example: You want your school to allow an extra sports period. You
            could say:
          </p>
          <p className="text-base md:text-lg font-medium mt-2 text-green-800">
            “I believe more sports time will help students stay fit and focus
            better in class.”
          </p>
        </div>
      </div>

      {/* What is Assertiveness? */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://www.shutterstock.com/image-vector/assertiveness-concept-two-individuals-demonstrate-600nw-2396541983.jpg"
          alt="Assertiveness"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            🙋 What is Assertiveness?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Assertiveness means standing up for yourself in a calm, respectful
            way. It’s not shouting or being rude—it's about sharing your
            feelings and needs clearly.
          </p>
          <p className="text-base md:text-lg mb-2">
            When you’re assertive, you make sure others hear you—without hurting
            them.
          </p>
          <p className="text-base md:text-lg italic">
            Example: In a group project, if someone keeps ignoring your ideas,
            say:
          </p>
          <p className="text-base md:text-lg font-medium mt-2 text-green-800">
            “I feel frustrated when I’m not heard. I’d like to share my idea
            too.”
          </p>
        </div>
      </div>

      {/* Positive Communication */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://images.ctfassets.net/pxcfulgsd9e2/articleImage104069/042be687048e80b97a2500c59ef14461/The-importance-of-positive-self-talk-HN1458-iStock-694857876-Sized.png"
          alt="Positive Talk"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            🌈 What is Positive Communication?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Positive communication is using kind, helpful, and respectful words
            to encourage others. It makes people feel happy, heard, and safe.
          </p>
          <p className="text-base md:text-lg">
            Try saying things in a way that brings people closer—not pushes them
            away.
          </p>
          <p className="text-base md:text-lg italic mt-3">
            Example: Instead of saying...
          </p>
          <ul className="list-disc list-inside text-base md:text-lg mt-1 space-y-1">
            <li>❌ “You’re always late!” → (feels blaming & negative)</li>
            <li>
              ✅ “I appreciate it when you’re on time—it helps us stay
              organized.”
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
          Give someone a compliment today using this formula:
        </p>
        <div className="bg-white shadow-md p-4 mt-3 rounded-md border border-yellow-300 text-yellow-900 text-base md:text-lg">
          “Thank you for [what they did]. It really helped because [how it made
          you feel].”
        </div>
        <p className="text-sm mt-2 italic text-yellow-800">
          Example: “Thank you for helping me carry my books. It made me feel
          supported.”
        </p>
      </div>
    </div>
  );
};

export default Mod3;
