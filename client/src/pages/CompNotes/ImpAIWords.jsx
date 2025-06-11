import React from "react";

const ImpAIWords = ({ topicRefs }) => {
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
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen px-4 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 text-center">
          📘 Module 5: AI Words You Should Know
        </h1>

        {/* Vocabulary Table */}
        <section className="overflow-x-auto mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            📝 Enhanced Vocabulary Table
          </h2>

          <table className="min-w-full text-sm md:text-base bg-white shadow border border-gray-300 rounded-lg">
            <thead className="bg-blue-100 text-left">
              <tr>
                <th className="px-4 py-2 border">Word</th>
                <th className="px-4 py-2 border">Simple Meaning</th>
                <th className="px-4 py-2 border">Detailed Explanation</th>
                <th className="px-4 py-2 border">Real Example</th>
                <th className="px-4 py-2 border">How You See It</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  word: "Data",
                  simple: "Information AI learns from",
                  detail:
                    "Like textbooks for AI - pictures, text, numbers that teach AI how to work",
                  example:
                    "1 million cat photos to teach AI what cats look like",
                  see: "When you upload photos to Google Photos",
                },
                {
                  word: "Algorithm",
                  simple: "Step-by-step instructions for AI",
                  detail:
                    "Like a recipe that tells AI exactly what to do with information",
                  example:
                    "Instagram's algorithm decides which posts to show you",
                  see: "The order of posts on Instagram feed",
                },
                {
                  word: "Training",
                  simple: "How AI learns and gets better",
                  detail:
                    "Like studying for an exam - AI practices with examples",
                  example: "Spam detection AI studying millions of spam emails",
                  see: "Gmail filtering spam more accurately",
                },
                {
                  word: "Chatbot",
                  simple: "AI that talks like a human",
                  detail: "Program that can talk via text or voice",
                  example: "Customer service chat on websites",
                  see: "Instant replies when you ask questions online",
                },
                {
                  word: "Robot",
                  simple: "A machine that can move and work",
                  detail:
                    "Physical machine that uses AI to do tasks in the real world",
                  example: "Roomba vacuum cleaner",
                  see: "Cleans your room automatically",
                },
                {
                  word: "Neural Network",
                  simple: "AI brain structure",
                  detail:
                    "System inspired by the human brain with connected parts",
                  example: "Face recognition in photos",
                  see: "Facebook suggests tagging your friends",
                },
                {
                  word: "Big Data",
                  simple: "Huge amounts of information",
                  detail: "So much data that regular computers can't handle it",
                  example: "All YouTube videos watched in one day",
                  see: "YouTube processing billions of hours of video",
                },
                {
                  word: "Cloud Computing",
                  simple: "Using internet computers",
                  detail:
                    "Storing and processing data online, not just your device",
                  example: "Google Drive storing your files",
                  see: "Access your photos from any device",
                },
              ].map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-2 border font-medium">{item.word}</td>
                  <td className="px-4 py-2 border">{item.simple}</td>
                  <td className="px-4 py-2 border">{item.detail}</td>
                  <td className="px-4 py-2 border">{item.example}</td>
                  <td className="px-4 py-2 border">{item.see}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Vocabulary in Action */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-6">
            🎯 Vocabulary in Action - Real Scenarios
          </h2>

          <div className="space-y-6 text-lg">
            <div className="bg-green-100 p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">
                📸 Scenario 1: Taking a Photo
              </h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Data:</strong> Your photo becomes millions of pixels
                </li>
                <li>
                  <strong>Algorithm:</strong> Adjusts brightness and focus
                </li>
                <li>
                  <strong>Training:</strong> Learned from millions of photos
                </li>
                <li>
                  <strong>Result:</strong> A great photo, auto-enhanced
                </li>
              </ul>
            </div>

            <div className="bg-yellow-100 p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">
                🗣️ Scenario 2: Asking Siri a Question
              </h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Data:</strong> Your voice becomes audio data
                </li>
                <li>
                  <strong>Algorithm:</strong> Turns voice into text
                </li>
                <li>
                  <strong>Training:</strong> Based on millions of voice samples
                </li>
                <li>
                  <strong>Chatbot:</strong> Siri answers your question
                </li>
                <li>
                  <strong>Cloud Computing:</strong> Uses Apple’s servers
                </li>
                <li>
                  <strong>Result:</strong> You get a smart answer fast
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">
                🎥 Scenario 3: Watching YouTube
              </h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <strong>Big Data:</strong> YouTube tracks billions of videos
                </li>
                <li>
                  <strong>Algorithm:</strong> Picks videos based on your likes
                </li>
                <li>
                  <strong>Training:</strong> Learns from millions of viewers
                </li>
                <li>
                  <strong>Result:</strong> You see fun videos you love
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    
  );
};

export default ImpAIWords;
