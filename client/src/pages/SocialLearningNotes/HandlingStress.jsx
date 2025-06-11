import React from "react";

const HandlingStress = ({ topicRefs }) => {
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
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-red-800 mb-4">
        😌 Module 3: Handling Stress and Conflict
      </h1>
      <p className="text-center text-gray-700 text-lg mb-8">
        Let’s learn how to stay calm, even when things go wrong.
      </p>

      {/* Section 1: What Is Stress? */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-yellow-700">
          🧐 1. What Is Stress?
        </h2>
        <p className="text-gray-700">
          Stress is what we feel when things get too hard, scary, or fast.
          Everyone feels it sometimes — even superheroes!
        </p>
        <div className="bg-yellow-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-yellow-800">
            🧠 Common Stress Signs:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Sweaty hands</li>
            <li>Fast heartbeat</li>
            <li>Headache or stomachache</li>
            <li>Feeling worried or upset</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Before a test, your heart races and your
          hands feel shaky — that’s stress.
        </p>
      </section>

      {/* Section 2: Coping Strategies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">
          ℹ️ 2. What Helps Us Feel Better?
        </h2>
        <p className="text-gray-700">
          These are called coping strategies — simple things you do to feel
          better when stressed:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>🌬️ Deep breaths (In...2...3... Out...2...3...)</li>
          <li>🚶‍♂️ Go for a walk or stretch</li>
          <li>🗣️ Talk to a trusted friend or adult</li>
          <li>🎵 Listen to calming music</li>
          <li>📝 Write or draw your feelings</li>
        </ul>
        <p className="text-gray-700">
          <strong>Example:</strong> Zara feels angry after losing a game. She
          breathes deeply and drinks water instead of yelling.
        </p>
      </section>

      {/* Section 3: Solving Conflicts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          ⚖️ 3. Solving Conflicts Peacefully
        </h2>
        <p className="text-gray-700">
          Conflict is when two people disagree. It can happen with friends,
          classmates, or family.
        </p>
        <div className="bg-blue-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-blue-800">
            ✅ Steps to Solve Conflicts:
          </h3>
          <ul className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>Cool down first (take space)</li>
            <li>Say how you feel: “I felt hurt when...”</li>
            <li>Listen to the other person too</li>
            <li>Find a way that works for both</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Two friends want the same seat. Instead of
          fighting, they take turns sitting there each day.
        </p>
      </section>

      {/* Section 4: Circles of Stress */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple-700">
          🌐 4. Circle of Concern vs Circle of Influence
        </h2>
        <p className="text-gray-700">
          This is a powerful tool to manage stress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-red-700">🔴 Circle of Concern</h3>
            <p className="text-gray-700">
              Things you worry about but can’t control:
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>The weather</li>
              <li>What others say</li>
              <li>Getting sick</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              🔵 Circle of Influence
            </h3>
            <p className="text-gray-700">Things you *can* control:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Your attitude</li>
              <li>How you respond</li>
              <li>What you choose to do next</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> You’re worried your team might lose. You
          can’t control the outcome (Concern), but you can practice and stay
          positive (Influence).
        </p>
      </section>

      {/* Mini Reflection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-indigo-800">
          🧠 Mini Reflection
        </h2>
        <div className="bg-indigo-50 p-4 rounded-xl shadow space-y-2">
          <p>
            🧘 What are two things that help you feel better when you’re
            stressed?
          </p>
          <p>🤔 When was the last time you solved a conflict calmly?</p>
          <p>
            🌀 Can you name one thing in your Circle of Concern and one in your
            Circle of Influence?
          </p>
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default HandlingStress;
