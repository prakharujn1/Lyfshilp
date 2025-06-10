import React from "react";

const BuildAi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-blue-700 text-center">
          🎨 Module 6: Let's Build an AI!
        </h1>

        <section className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">
            🤖 AI BLUEPRINT
          </h2>
          <p className="text-lg leading-relaxed">
            <strong>Bot Name:</strong> ________________________________{" "}
            <span className="text-gray-500">
              (Make it catchy and related to what it does)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Problem it solves:</strong> ________________________________{" "}
            <span className="text-gray-500">
              (What specific problem does your AI fix?)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Target users:</strong> ________________________________{" "}
            <span className="text-gray-500">
              (Who will use your AI? Kids, adults, teachers, etc.)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>What does it do?</strong> ________________________________{" "}
            <span className="text-gray-500">
              (Describe its main function in simple terms)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>How does it work?</strong> ________________________________{" "}
            <span className="text-gray-500">
              (What steps does it follow to solve the problem?)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>What data does it learn from?</strong>{" "}
            ________________________________{" "}
            <span className="text-gray-500">
              (What information does it need to get better?)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>What makes it smart?</strong>{" "}
            ________________________________{" "}
            <span className="text-gray-500">
              (What AI features does it use? Voice recognition, image detection,
              etc.)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>How do people interact with it?</strong>{" "}
            ________________________________{" "}
            <span className="text-gray-500">
              (Voice commands, touch screen, mobile app, etc.)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>What will it say/sound like?</strong>{" "}
            ________________________________{" "}
            <span className="text-gray-500">
              (Friendly, professional, funny, etc.)
            </span>
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Special features:</strong> ________________________________{" "}
            <span className="text-gray-500">
              (What makes your AI unique and cool?)
            </span>
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">
            🎨 Step 3: Draw Your AI
          </h2>
          <p className="text-lg">
            <strong>Draw your AI on paper or using a drawing app!</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Physical appearance: What does it look like?</li>
            <li>Interface design: How do people use and control it?</li>
            <li>
              Environment: Where does it work (home, school, street, etc.)?
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-100 space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-600">
            🧠 Step 4: Test Your Idea
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Would people actually use this?</li>
            <li>Is it better than existing solutions?</li>
            <li>Could it be built with today's technology?</li>
            <li>What could go wrong, and how would you fix it?</li>
          </ul>
        </section>

        <div className="text-center text-purple-700 text-xl font-semibold mt-8">
          🏅 Badge Earned:{" "}
          <span className="text-purple-900">🎨 AI Innovation Designer</span>
        </div>
      </div>
    </div>
  );
};

export default BuildAi;
