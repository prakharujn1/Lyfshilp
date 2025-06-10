import React from "react";

const WhatCantAiDo = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen px-4 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center">
          🤖 Module 4: What AI Can and Can’t Do
        </h1>

        {/* What AI Can Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            ✅ Things AI Can Do (With Amazing Examples)
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              🗣️ Communication and Language:
            </h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>Siri can answer math questions and set reminders</li>
              <li>Google Translate reads menus using your camera</li>
              <li>Grammarly fixes grammar and suggests better words</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              🎬 Entertainment and Media:
            </h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>Netflix suggests superhero movies you’ll love</li>
              <li>AI composes music for YouTube videos</li>
              <li>AI makes new Minecraft worlds for you to explore</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">🏥 Healthcare and Safety:</h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>AI spots diseases in X-rays doctors might miss</li>
              <li>Smartwatches can detect falls and call for help</li>
              <li>AI tests medicine combinations to find cures</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">🏠 Daily Life Assistance:</h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>Google Maps predicts traffic and suggests faster routes</li>
              <li>Amazon recommends products before you ask</li>
              <li>Phones use AI to improve photo lighting and colors</li>
            </ul>
          </div>
        </section>

        {/* What AI Can't Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            ❌ Things AI Can't Do (And Why)
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">💔 Emotions and Feelings:</h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>AI can detect sadness but doesn’t *feel* sad</li>
              <li>When Siri says “I’m sorry,” it’s just a script</li>
              <li>Real emotions come from human biology</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              🎨 True Creativity and Imagination:
            </h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>AI poems mix patterns from thousands of others</li>
              <li>AI art copies human styles, not new ideas</li>
              <li>True creativity needs deep understanding</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              ⚖️ Understanding Values and Ethics:
            </h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>AI doesn’t understand right or wrong</li>
              <li>It might solve a problem unfairly</li>
              <li>Morals need empathy and life experience</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              🚧 Complex Real-World Situations:
            </h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>Self-driving cars struggle with unusual weather or roads</li>
              <li>AI may not know a rolling ball means a kid could follow</li>
              <li>The world has too many unexpected possibilities</li>
            </ul>
          </div>
        </section>

        {/* Summary Analogy */}
        <div className="text-lg bg-yellow-100 rounded-xl p-4 mb-10 shadow">
          🧠 <strong>Remember:</strong> AI is like a super-smart student who
          memorized every textbook but never experienced real life. It knows
          facts — but doesn’t understand what it means to *be* human.
        </div>

        {/* Enhanced Task Table */}
        <section className="overflow-x-auto">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            📝 Enhanced Task Table
          </h2>

          <table className="min-w-full border border-gray-300 bg-white shadow text-sm md:text-base rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 border">Task</th>
                <th className="px-4 py-2 border">Can AI Do It?</th>
                <th className="px-4 py-2 border">How Well?</th>
                <th className="px-4 py-2 border">Why or Why Not?</th>
                <th className="px-4 py-2 border">Real Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Write a poem</td>
                <td className="px-4 py-2 border">Yes, but...</td>
                <td className="px-4 py-2 border">Good technically</td>
                <td className="px-4 py-2 border">
                  Copies patterns, lacks feelings
                </td>
                <td className="px-4 py-2 border">
                  AI poems sound nice, not deep
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">Cook a meal</td>
                <td className="px-4 py-2 border">Partially</td>
                <td className="px-4 py-2 border">Getting better</td>
                <td className="px-4 py-2 border">Needs real-world senses</td>
                <td className="px-4 py-2 border">
                  Robot chefs exist, but limited
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Win at chess</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">Perfectly</td>
                <td className="px-4 py-2 border">
                  Calculates millions of moves
                </td>
                <td className="px-4 py-2 border">
                  AI beat world champ in 1997
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">Understand jokes</td>
                <td className="px-4 py-2 border">Sometimes</td>
                <td className="px-4 py-2 border">Hit or miss</td>
                <td className="px-4 py-2 border">Needs culture + emotion</td>
                <td className="px-4 py-2 border">Often misses sarcasm</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Drive a car</td>
                <td className="px-4 py-2 border">Yes, mostly</td>
                <td className="px-4 py-2 border">About 95% effective</td>
                <td className="px-4 py-2 border">Struggles with surprises</td>
                <td className="px-4 py-2 border">
                  Tesla Autopilot on highways
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">Feel lonely</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">Not at all</td>
                <td className="px-4 py-2 border">Needs consciousness</td>
                <td className="px-4 py-2 border">AI can detect, not feel</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default WhatCantAiDo;
