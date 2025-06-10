import React from "react";

const WhatIsAi = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen px-4 py-10 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6 text-center">
          🧠 Module 1: What is Artificial Intelligence (AI)?
        </h1>

        {/* Section: What is AI */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            What is AI?
          </h2>
          <p className="text-lg leading-relaxed">
            Artificial Intelligence (AI) means making machines smart enough to
            think and act like humans. Just like how your brain helps you
            recognize your friend's face, remember your favorite song, or solve
            math problems, AI gives computers and robots a "digital brain" to do
            similar tasks.
          </p>
          <div className="mt-4 flex justify-center">
            <img
              src="https://www.asterhospitals.in/sites/default/files/styles/webp/public/2023-09/The%20Intersection%20of%20Neuroscience%20and%20AI%20Understanding%20the%20Human%20Brain_Blog%20Image.png.webp?itok=U2LurI98"
              alt="AI Brain"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
          <p className="mt-4 text-lg">
            If a regular computer is like a very fast calculator, then AI is
            like giving it the ability to learn, recognize patterns, and make
            its own decisions!
          </p>
        </div>

        {/* Section: Everyday Life */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            📱 Where Do We See AI in Everyday Life?
          </h2>
          <div className="space-y-4 text-lg">
            <div>
              <strong>On Your Phone:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Face Recognition:</strong> AI unlocks your phone by
                  recognizing your face.
                </li>
                <li>
                  <strong>Voice Assistants:</strong> “Hey Siri” or “OK Google”
                  use AI to understand and respond.
                </li>
                <li>
                  <strong>Autocorrect:</strong> Fixes your spelling using AI.
                </li>
                <li>
                  <strong>Camera:</strong> AI improves brightness and focuses on
                  your face automatically.
                </li>
              </ul>
            </div>
            <div>
              <strong>Entertainment Platforms:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>YouTube:</strong> Shows similar videos based on what
                  you like.
                </li>
                <li>
                  <strong>Netflix/Disney+:</strong> Recommends shows based on
                  your watch history.
                </li>
                <li>
                  <strong>Spotify:</strong> Suggests music based on your taste.
                </li>
              </ul>
            </div>
            <div>
              <strong>In Video Games:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Smart Enemies:</strong> Enemies that act differently
                  each time use AI.
                </li>
                <li>
                  <strong>Game Difficulty:</strong> Games change difficulty
                  using AI based on your skills.
                </li>
              </ul>
            </div>
            <div>
              <strong>Shopping Apps:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Suggestions:</strong> “Recommended for you” is based
                  on AI predictions.
                </li>
                <li>
                  <strong>Price Comparisons:</strong> AI helps find better deals
                  and prices.
                </li>
              </ul>
            </div>
            <div>
              <strong>Transportation:</strong>
              <ul className="list-disc ml-6">
                <li>
                  <strong>Tesla Cars:</strong> Drive and park themselves using
                  AI.
                </li>
                <li>
                  <strong>Google Maps:</strong> Uses AI to show traffic and
                  suggest routes.
                </li>
                <li>
                  <strong>Uber/Ola:</strong> Matches you with nearby drivers and
                  optimizes routes.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Detailed Example */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            🧩 Detailed Example: Robot Vacuum Cleaner
          </h2>
          <p className="text-lg">
            Imagine a robot vacuum cleaner like a Roomba:
          </p>
          <ul className="list-disc ml-6 mt-2 text-lg space-y-2">
            <li>It learns your house layout and avoids bumping into things.</li>
            <li>It changes cleaning power based on dirt types.</li>
            <li>It plans smart paths to clean efficiently.</li>
            <li>It returns to charging when battery is low.</li>
            <li>It avoids stairs and fragile items using sensors and AI.</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <img
              src="https://www.livemint.com/lm-img/img/2024/01/24/1600x900/best_robotic_vacuum_cleaner_1706094429597_1706094429964.jpg"
              alt="Robot Vacuum Cleaner"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Recap Table */}
        <div className="mb-10 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            📝 Recap Table
          </h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm md:text-base">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-4 py-2 border">Term</th>
                <th className="px-4 py-2 border">Meaning</th>
                <th className="px-4 py-2 border">Real Example</th>
                <th className="px-4 py-2 border">Why It's AI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Artificial Intelligence</td>
                <td className="px-4 py-2 border">
                  Machines doing tasks that need thinking and learning
                </td>
                <td className="px-4 py-2 border">
                  Siri understanding “Call Mom”
                </td>
                <td className="px-4 py-2 border">
                  It understands human language
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">Smart Device</td>
                <td className="px-4 py-2 border">
                  A machine that uses AI to work better
                </td>
                <td className="px-4 py-2 border">Amazon Alexa</td>
                <td className="px-4 py-2 border">It learns your preferences</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Pattern Recognition</td>
                <td className="px-4 py-2 border">
                  AI finding similarities in data
                </td>
                <td className="px-4 py-2 border">Instagram tagging friends</td>
                <td className="px-4 py-2 border">
                  It recognizes faces automatically
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhatIsAi;
