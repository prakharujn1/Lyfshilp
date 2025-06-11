import React from "react";

const DecisionMaking = ({ topicRefs }) => {
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
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-4">
        ✅ Module 5: Decision Making and Responsibility
      </h1>
      <p className="text-center text-gray-700 text-lg mb-8">
        Let’s learn how to make smart choices and own our actions!
      </p>

      {/* Section 1: What Is a Decision? */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-700">
          🔢 1. What Is a Decision?
        </h2>
        <p className="text-gray-700">
          A decision is a choice you make. We make small ones every day (like
          what to wear!) and big ones too (like how to treat others).
        </p>
        <div className="bg-orange-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-orange-800">
            🤔 Think Before You Act:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>What will happen if I do this?</li>
            <li>Is this kind or helpful?</li>
            <li>Will I feel proud later?</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Ayaan sees someone being teased. He decides
          to stand beside them and tell a teacher. That’s a brave decision!
        </p>
      </section>

      {/* Section 2: Making Smart Choices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">
          🤞 2. How to Make Smart Choices
        </h2>
        <p className="text-gray-700">
          Good decisions usually come after thinking first — not rushing!
        </p>
        <div className="bg-green-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-green-800">🔄 Try This:</h3>
          <p className="text-gray-700 font-medium">
            STOP (Pause) → THINK (What are the choices?) → ACT (Choose the best
            one)
          </p>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Priya wants to skip her reading homework.
          She stops, thinks, and decides to finish it now so she can enjoy the
          weekend.
        </p>
      </section>

      {/* Section 3: What Is Responsibility? */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          ✊ 3. What Is Responsibility?
        </h2>
        <p className="text-gray-700">
          Being responsible means doing what you're supposed to do and owning up
          to your actions — good or bad.
        </p>
        <div className="bg-blue-50 p-4 rounded-xl shadow space-y-2">
          <h3 className="font-semibold text-blue-800">
            📝 Responsible Students:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Bring their materials</li>
            <li>Help others</li>
            <li>Admit when they make a mistake</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Kabir forgets to bring his notebook. He
          tells the teacher and promises to pack it the next day. That’s
          responsible!
        </p>
      </section>

      {/* Section 4: Taking Ownership */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-700">
          🤝 4. Taking Ownership
        </h2>
        <p className="text-gray-700">Owning your actions means:</p>
        <div className="bg-red-50 p-4 rounded-xl shadow space-y-2">
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Saying “I did it” (even if it went wrong)</li>
            <li>Apologizing if needed</li>
            <li>Learning from it for next time</li>
          </ul>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Meera breaks her brother’s toy by mistake.
          She says sorry and offers to fix it. That’s taking ownership!
        </p>
      </section>

      {/* Mini Reflection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-800">
          🧠 Mini Reflection
        </h2>
        <div className="bg-purple-50 p-4 rounded-xl shadow space-y-2">
          <p>💭 What was the last decision you made all by yourself?</p>
          <p>🎓 What does being responsible mean to you?</p>
          <p>🧹 Have you ever owned up to a mistake? What happened next?</p>
        </div>
      </section>
    </div>
    </div>
    
  );
};

export default DecisionMaking;
