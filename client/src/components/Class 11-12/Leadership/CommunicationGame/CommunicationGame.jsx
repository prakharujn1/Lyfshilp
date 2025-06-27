import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, ThumbsUp, ThumbsDown, Users, Smile, Handshake } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "🗣️ Team Disagreement",
    description: "Two teammates have opposing views. How do you respond as a leader?",
    options: [
      "Respect both views and propose a compromise",
      "Ignore the conflict and move on",
      "Take sides to move faster"
    ],
    correct: 0
  },
  {
    id: 2,
    title: "🎓 Class Debate",
    description: "You’re losing a debate. How do you react?",
    options: [
      "Raise your voice to dominate",
      "Calmly clarify your points and invite dialogue",
      "Dismiss the other person’s views"
    ],
    correct: 1
  },
  {
    id: 3,
    title: "📱 Miscommunication",
    description: "A friend misunderstood your tone in a message.",
    options: [
      "Send another message explaining clearly and kindly",
      "Ignore them until they get over it",
      "Blame them for misunderstanding"
    ],
    correct: 0
  }
];

const CommunicationGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (i) => {
    if (i === scenarios[current].correct) setScore(score + 1);
    const next = current + 1;
    if (next < scenarios.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-lime-100 p-8 text-gray-800 font-sans">
      <motion.div
        className="max-w-4xl mx-auto rounded-3xl p-8 bg-white shadow-2xl border-4 border-yellow-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {!finished ? (
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-purple-600 animate-bounce">
              🎙️ Communication Combat Zone
            </h2>
            <p className="text-lg text-gray-700 font-medium">
              Challenge {current + 1} of {scenarios.length}
            </p>
            <motion.div
              key={scenarios[current].id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-orange-100 to-yellow-50 p-6 rounded-xl shadow-md border border-yellow-200"
            >
              <h3 className="text-2xl font-bold text-orange-600">
                {scenarios[current].title}
              </h3>
              <p className="text-md mt-2 text-gray-700">
                {scenarios[current].description}
              </p>
              <div className="mt-4 space-y-3">
                {scenarios[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="block w-full bg-white hover:bg-green-100 text-left border-2 border-green-300 rounded-xl p-3 transition duration-200 font-semibold text-md"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-5xl font-extrabold text-pink-500 animate-pulse mb-4">
              🎉 Great Job!
            </h2>
            <p className="text-xl font-semibold text-lime-600 mb-4">
              You scored {score} out of {scenarios.length}!
            </p>
            <p className="text-lg text-gray-700 mb-2">
              You’ve earned the badge:
            </p>
            <h3 className="text-4xl font-bold text-yellow-600 animate-bounce">
              🏅 Dialogue Commander
            </h3>
            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
              }}
              className="mt-6 px-6 py-3 rounded-full bg-pink-400 hover:bg-pink-500 text-white font-bold text-lg transition transform hover:scale-105"
            >
              🔁 Play Again
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CommunicationGame;
