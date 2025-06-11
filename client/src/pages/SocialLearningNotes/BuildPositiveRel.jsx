import React from "react";

const BuildPositiveRel = ({ topicRefs }) => {
  return (
    <div
      id="2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
        🤝 Module 2: Building Positive Relationships
      </h1>
      <p className="text-center text-gray-700 text-lg mb-8">
        Let's learn how to be awesome friends and understand others better!
      </p>

      {/* Section 1: What Makes a Good Friend */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-pink-700">
          👯‍♀️ 1. What Makes a Good Friend?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Listens to you</li>
          <li>Shares and cares</li>
          <li>Stands up for you</li>
          <li>Makes you feel safe and happy</li>
        </ul>
        <p className="text-gray-700">
          <strong>Example:</strong> If your friend forgets your birthday but
          says sorry and makes a card the next day, that’s a friend who cares!
        </p>
      </section>

      {/* Section 2: Communication */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          💬 2. Communication: Talking and Listening
        </h2>
        <p className="text-gray-700">
          Good communication is like a bridge — it connects two people!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-green-800">
              🔊 Tips for Talking
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Use kind words</li>
              <li>Say what you feel, not just what you think</li>
              <li>Look at the person you’re speaking to</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-yellow-800">
              📢 Tips for Listening
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Don’t interrupt</li>
              <li>Try to understand, not just reply</li>
              <li>Nod or say “I understand”</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700">
          <strong>Example:</strong> Your friend says, “I’m upset I wasn’t
          invited.” A good listener might say, “I hear you. That must feel bad.”
        </p>
      </section>

      {/* Section 3: Peer Pressure & Boundaries */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-600">
          ⚠️ 3. Peer Pressure and Boundaries
        </h2>
        <p className="text-gray-700">
          Peer pressure means doing something just because your friends say so.
          But not all ideas are good!
        </p>
        <p className="text-gray-700">
          Boundaries are like invisible fences. They protect your feelings and
          comfort.
        </p>
        <p className="text-gray-700">
          <strong>Example:</strong> If friends want to copy homework, you can
          say, “No, I don’t think that’s right.” That’s setting a boundary!
        </p>
      </section>

      {/* Section 4: Kindness and Empathy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-700">
          🤝 4. Kindness and Empathy
        </h2>
        <p className="text-gray-700">
          Kindness is doing something nice just because you care.
        </p>
        <p className="text-gray-700">
          Empathy is imagining how someone else feels.
        </p>
        <p className="text-gray-700">
          <strong>Example:</strong> If you see someone sitting alone, you could
          say, “Want to join us?” That shows both kindness and empathy!
        </p>
      </section>

      {/* Reflection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-indigo-800">
          🧬 Mini Reflection
        </h2>
        <div className="bg-indigo-50 p-4 rounded-xl shadow space-y-2">
          <p>💭 What makes you feel cared for by a friend?</p>
          <p>
            👂 What is one thing you can do this week to be a better listener?
          </p>
          <p>🛡️ When was a time you stood up for your own boundary?</p>
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default BuildPositiveRel;
