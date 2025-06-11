import React from "react";

const SelfDiscipline = ({ topicRefs }) => {
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
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-4">
        🎯 Module 4: Self-Discipline and Setting Goals
      </h1>
      <p className="text-center text-gray-700 text-lg mb-8">
        Let’s learn how to stay focused, even when distractions pop up!
      </p>

      {/* Section 1: What Is Self-Discipline? */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-700">
          🔄 1. What Is Self-Discipline?
        </h2>
        <p className="text-gray-700">
          Self-discipline means doing what needs to be done, even when you don’t
          feel like it. It’s like having an invisible coach who reminds you to
          stay on track!
        </p>
        <div className="bg-red-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-red-800">
            🏅 Self-Discipline Looks Like:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Finishing homework before play</li>
            <li>Saying no to distractions</li>
            <li>Waking up on time</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Aarav really wants to play video games, but
          he finishes his science project first. That’s self-discipline!
        </p>
      </section>

      {/* Section 2: Building Good Habits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">
          🌟 2. How Do You Build Good Habits?
        </h2>
        <p className="text-gray-700">
          Habits are things you do again and again. Good habits make your life
          smoother.
        </p>
        <div className="bg-green-50 p-4 rounded-xl shadow space-y-1">
          <h3 className="font-semibold text-green-800">📅 Try This:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Set a small goal: “I’ll read 10 minutes daily”</li>
            <li>Choose a time and place</li>
            <li>Stick to it every day for 2 weeks!</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Maya keeps her bag ready every night. Now,
          mornings are stress-free!
        </p>
      </section>

      {/* Section 3: Setting SMART Goals */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          📊 3. Setting Goals: Big and Small
        </h2>
        <p className="text-gray-700">
          Goals are things you want to achieve. They give you direction, like a
          map.
        </p>
        <div className="bg-blue-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-blue-800">🌍 SMART Goals:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <strong>S</strong>pecific: What exactly do you want?
            </li>
            <li>
              <strong>M</strong>easurable: Can you track it?
            </li>
            <li>
              <strong>A</strong>chievable: Is it realistic?
            </li>
            <li>
              <strong>R</strong>elevant: Does it matter to you?
            </li>
            <li>
              <strong>T</strong>ime-bound: By when?
            </li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> “I want to improve in Math” becomes “I will
          practice 5 sums every day for 10 days.”
        </p>
      </section>

      {/* Section 4: Staying Motivated */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-700">
          ⛳️ 4. Staying Motivated
        </h2>
        <p className="text-gray-700">
          Motivation keeps you going! But it can go up and down.
        </p>
        <div className="bg-orange-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-orange-800">
            🚀 Tips to Stay On Track:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Reward yourself for effort</li>
            <li>Track progress (checklists, stars)</li>
            <li>Tell a friend or parent</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Every time Ali finishes his journal entry,
          he adds a sticker to his goal chart. He loves seeing it grow!
        </p>
      </section>

      {/* Mini Reflection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-indigo-800">
          🧠 Mini Reflection
        </h2>
        <div className="bg-indigo-50 p-4 rounded-xl shadow space-y-2">
          <p>🎯 What’s one goal you want to work on this month?</p>
          <p>📘 What habit would make your school day easier?</p>
          <p>💡 What helps you stay motivated when things get hard?</p>
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default SelfDiscipline;
