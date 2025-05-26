import React, { useState } from 'react';
import { GiMoneyStack, GiReceiveMoney, GiChart } from 'react-icons/gi';
import { motion } from 'framer-motion';

const questions = [
  {
    text: "How would you feel if your money dropped by 20%?",
    icon: <GiMoneyStack className="text-4xl text-yellow-600" />,
    options: [
      { text: "😖 Very anxious", score: 1 },
      { text: "😟 A bit uneasy", score: 2 },
      { text: "😎 Fine, it happens", score: 3 }
    ]
  },
  {
    text: "Would you invest if there's no guarantee but high reward?",
    icon: <GiReceiveMoney className="text-4xl text-green-600" />,
    options: [
      { text: "🙅 No way", score: 1 },
      { text: "🤔 Maybe", score: 2 },
      { text: "🔥 Absolutely", score: 3 }
    ]
  },
  {
    text: "Do you prefer slow, steady growth?",
    icon: <GiChart className="text-4xl text-blue-600" />,
    options: [
      { text: "🐌 Yes", score: 1 },
      { text: "⚖️ Somewhat", score: 2 },
      { text: "💸 No, I want faster gains", score: 3 }
    ]
  }
];

function calculateRiskProfile(score) {
  if (score <= 4) {
    return {
      label: "🛡️ Cautious",
      color: "text-blue-700",
      img: "./cautions.png",
      desc: "You prefer safety and stability, even if returns are modest."
    };
  }
  if (score <= 6) {
    return {
      label: "⚖️ Balanced",
      color: "text-yellow-700",
      img: "./balanced.jpg",
      desc: "You’re open to moderate risks for balanced returns."
    };
  }
  return {
    label: "🔥 Aggressive",
    color: "text-red-700",
    img: "./aggressive.jpg",
    desc: "You’re comfortable taking high risks for higher potential gains."
  };
}

export default function RiskOMeter() {
  const [currentQ, setCurrentQ] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score) => {
    const newScore = totalScore + score;
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setTotalScore(newScore);
    } else {
      setTotalScore(newScore);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setTotalScore(0);
    setShowResult(false);
  };

  const progress = ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100;
  const riskProfile = calculateRiskProfile(totalScore);

  return (
    <div className="p-6 max-w-xl mx-auto border rounded-xl shadow-xl bg-gradient-to-br from-white via-blue-50 to-white">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-blue-800">🎯 Risk-O-Meter</h2>

      {/* Instructions */}
      {!showResult && (
        <p className="mb-6 text-center text-gray-700 font-medium">
          Please answer the following questions honestly to find out your investment risk profile.
        </p>
      )}

      {/* Progress bar */}
      <div className="w-full bg-gray-300 h-3 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-green-500 h-3"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Quiz or Result */}
      {showResult ? (
        <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xl font-medium text-gray-700">Your Risk Profile:</p>
          <p className={`text-3xl font-bold mt-2 ${riskProfile.color}`}>{riskProfile.label}</p>
          <img
            src={riskProfile.img}
            alt={riskProfile.label}
            className="w-40 h-40 mx-auto mt-4 rounded-lg shadow-md"
          />
          <p className="mt-2 text-gray-600">This reflects your tolerance toward investment risk.</p>
          <p className="mt-2 text-gray-800 italic">{riskProfile.desc}</p>
          <button
            onClick={handleRestart}
            className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
          >
            🔄 Retake Quiz
          </button>
        </motion.div>
      ) : (
        <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-4xl mb-3">{questions[currentQ].icon}</div>
          <p className="text-xl font-semibold mb-5 text-gray-800">{questions[currentQ].text}</p>
          <div className="grid gap-4">
            {questions[currentQ].options.map((opt, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(opt.score)}
                className="group relative w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 px-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-lg font-semibold">
                  <span className="text-2xl">{opt.text.split(" ")[0]}</span>
                  <span>{opt.text.split(" ").slice(1).join(" ")}</span>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-xl"></div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
