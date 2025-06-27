import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, RefreshCcw } from "lucide-react";

const emojiOptions = ["😄", "🙂", "😐", "😟", "😢"];

const EQGame = () => {
  const [moodTracker, setMoodTracker] = useState(["", "", ""]);
  const [reflection, setReflection] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [stage, setStage] = useState(1);

  const strategies = ["Pause", "Rethink", "Reframe", "Deep Breathing"];

  const handleMoodChange = (index, emoji) => {
    const updated = [...moodTracker];
    updated[index] = emoji;
    setMoodTracker(updated);
  };

  const restartGame = () => {
    setMoodTracker(["", "", ""]);
    setReflection("");
    setSelectedStrategy("");
    setStage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 shadow-xl">
        {stage === 1 && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-pink-600">💓 EQ Tracker Mission</h1>
            <p className="text-lg text-gray-700">Track your mood for 3 days using emoji sliders.</p>

            {moodTracker.map((mood, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-semibold">Day {i + 1}</span>
                <div className="flex gap-2">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleMoodChange(i, emoji)}
                      className={`text-2xl ${mood === emoji ? "scale-125" : "opacity-70"}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600"
              onClick={() => setStage(2)}
              disabled={moodTracker.includes("")}
            >
              Reflect ➡️
            </button>
          </div>
        )}

        {stage === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-600">💭 Emotional Reflection</h2>
            <p>Describe a recent emotionally intense moment and how you handled it.</p>
            <textarea
              className="w-full p-3 border rounded-xl"
              rows="4"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="E.g., I was very anxious before a presentation..."
            />
            <button
              className="bg-purple-500 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-600"
              onClick={() => setStage(3)}
              disabled={!reflection.trim()}
            >
              EQ Strategy ➡️
            </button>
          </div>
        )}

        {stage === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-600">🎯 Match to EQ Strategy</h2>
            <p>Which strategy best matches the moment you described?</p>
            <div className="grid grid-cols-2 gap-4">
              {strategies.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStrategy(s)}
                  className={`p-3 rounded-xl font-semibold border-2 ${selectedStrategy === s ? "border-indigo-500 bg-indigo-100" : "border-gray-300"}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              className="bg-indigo-500 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-600"
              onClick={() => setStage(4)}
              disabled={!selectedStrategy}
            >
              Finish & Earn Badge 💓
            </button>
          </div>
        )}

        {stage === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <CheckCircle className="text-green-500 mx-auto w-16 h-16" />
            <h2 className="text-3xl font-bold text-green-600">🏅 Resilience Master</h2>
            <p className="text-lg">You've completed the EQ Tracker Mission!</p>
            <button
              onClick={restartGame}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 flex items-center gap-2 mx-auto"
            >
              <RefreshCcw className="w-5 h-5" /> Restart Game
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EQGame;
