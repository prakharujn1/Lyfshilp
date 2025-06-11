import React from "react";

const TypesAndUseOfAi = ({ topicRefs }) => {
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
      <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen px-4 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-8 text-center">
          🤖 Module 3: Types and Uses of AI
        </h1>

        {/* Narrow AI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
            🤖 Narrow AI (Today's AI - The Specialist)
          </h2>
          <p className="text-lg">
            Narrow AI is super smart at doing *one* thing — like a doctor who
            only treats heart problems.
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-lg">
            <li>
              <strong>Google Translate:</strong> Translates languages only
            </li>
            <li>
              <strong>Shazam:</strong> Identifies songs
            </li>
            <li>
              <strong>Chess AI:</strong> Beats world champions at chess
            </li>
            <li>
              <strong>Weather Apps:</strong> Predict weather but can’t suggest
              movies
            </li>
          </ul>
          <p className="mt-4 text-lg italic">
            Like someone who's great at piano 🎹 but can't cook 🍳 — Narrow AI
            is excellent at just one skill.
          </p>
        </section>

        {/* General AI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
            🧠 General AI (Future AI - The Multi-Talented Human)
          </h2>
          <p className="text-lg">
            General AI is still in the future — it would think, learn, and do
            everything a human can.
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-lg">
            <li>One AI to drive, do homework, play games, and cook dinner</li>
            <li>Like a smart best friend who's good at everything</li>
            <li>Still being developed — doesn't exist yet!</li>
          </ul>
          <p className="mt-4 text-lg">
            Our brain does SO much — recognize faces, laugh at jokes, solve
            problems — building an AI like that is tough!
          </p>
        </section>

        {/* Machine Learning */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
            📚 Machine Learning (The Learning Branch of AI)
          </h2>
          <p className="text-lg mb-4">
            Machine Learning is a type of AI that *learns from examples* — like
            how you learn by seeing lots of dog photos.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Email Spam Detection:
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>AI studies emails labeled "spam" or "not spam"</li>
              <li>It learns that "FREE MONEY" often means spam</li>
              <li>Now it checks your emails to keep your inbox clean</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Music Recommendation (Spotify):
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>AI studies what people listen to</li>
              <li>
                It learns if you like Taylor Swift, you might like Olivia
                Rodrigo
              </li>
              <li>It gets smarter the more you use it</li>
            </ul>
          </div>
        </section>

        {/* Fun Uses of AI */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
            🎮 Fun Uses of AI
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">AI in Games:</h3>
            <ul className="list-disc ml-6 space-y-1 text-lg">
              <li>
                <strong>FIFA Soccer:</strong> AI learns your playing style
              </li>
              <li>
                <strong>Minecraft:</strong> AI zombies can find you even when
                you hide
              </li>
              <li>
                <strong>Chess.com:</strong> AI gets harder as you improve
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">AI Digital Pets:</h3>
            <ul className="list-disc ml-6 space-y-1 text-lg">
              <li>
                <strong>Talking Tom:</strong> Learns and responds to your voice
              </li>
              <li>
                <strong>Simulation Games:</strong> AI pets remember if you fed
                them
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">AI in Smart Cars:</h3>
            <ul className="list-disc ml-6 space-y-1 text-lg">
              <li>
                <strong>Lane Keeping:</strong> AI keeps your car in the lane
              </li>
              <li>
                <strong>Collision Avoidance:</strong> AI brakes to avoid crashes
              </li>
              <li>
                <strong>Parking Help:</strong> AI parks perfectly, even in tight
                spots
              </li>
            </ul>
          </div>
        </section>

        {/* Summary Table */}
        <section className="overflow-x-auto">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
            📝 Summary Table
          </h2>

          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-sm md:text-base">
            <thead className="bg-yellow-100">
              <tr>
                <th className="px-4 py-2 border">AI Type</th>
                <th className="px-4 py-2 border">Special Skill</th>
                <th className="px-4 py-2 border">Real Example</th>
                <th className="px-4 py-2 border">What Makes It Special</th>
                <th className="px-4 py-2 border">How You Use It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Narrow AI</td>
                <td className="px-4 py-2 border">One specific task</td>
                <td className="px-4 py-2 border">Instagram face filters</td>
                <td className="px-4 py-2 border">Great at faces only</td>
                <td className="px-4 py-2 border">Open camera, apply filter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">General AI</td>
                <td className="px-4 py-2 border">Think like humans</td>
                <td className="px-4 py-2 border">Not available yet</td>
                <td className="px-4 py-2 border">
                  Would understand everything
                </td>
                <td className="px-4 py-2 border">Future technology</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Machine Learning</td>
                <td className="px-4 py-2 border">Learns from examples</td>
                <td className="px-4 py-2 border">TikTok’s "For You" page</td>
                <td className="px-4 py-2 border">Learns your taste</td>
                <td className="px-4 py-2 border">More use = smarter AI</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
    </div>
    
  );
};

export default TypesAndUseOfAi;
