import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";

const questions = [
  {
    text: "🎭 A teammate is taking credit for your work. What do you do?",
    options: [
      { text: "Ignore it, maybe it’ll stop.", bias: "Avoidance Bias", ethical: false },
      { text: "Talk to them directly and clarify your contribution.", ethical: true },
      { text: "Tell your manager they're cheating.", bias: "Assumption Bias", ethical: false },
    ],
  },
  {
    text: "🤝 Your team wants to rush a project that might harm users. What's your call?",
    options: [
      { text: "Go along with it to avoid conflict.", bias: "Groupthink", ethical: false },
      { text: "Pause and ask about the impact on users.", ethical: true },
      { text: "Let it pass; it’s not your job.", bias: "Diffusion of Responsibility", ethical: false },
    ],
  },
  {
    text: "🧠 You're stressed and make a snap decision that seems unfair. What now?",
    options: [
      { text: "Own up and revise your decision.", ethical: true },
      { text: "Justify it quickly to move on.", bias: "Confirmation Bias", ethical: false },
      { text: "Blame the situation.", bias: "Externalizing Bias", ethical: false },
    ],
  },
  {
    text: "🎨 Your idea was ignored because you're quiet in meetings. What do you do?",
    options: [
      { text: "Stay silent. Speaking up isn’t your style.", bias: "Self-Silencing", ethical: false },
      { text: "Follow up with your team and explain your point.", ethical: true },
      { text: "Complain to a friend but do nothing.", bias: "Avoidance Bias", ethical: false },
    ],
  },
  {
    text: "📢 You disagree with the team’s direction. How do you respond?",
    options: [
      { text: "Go with the flow to avoid being 'that person'.", bias: "Groupthink", ethical: false },
      { text: "Share your thoughts respectfully and suggest alternatives.", ethical: true },
      { text: "Let the team fail and say 'I told you so'.", bias: "Passive Aggression", ethical: false },
    ],
  },
];

const EthicsLabyrinth = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [showEnd, setShowEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const nextQuestion = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setChosen(null);
      setTimeLeft(25);
    } else {
      setShowEnd(true);
    }
  };

  const handleOptionClick = (option) => {
    if (option.ethical) setScore(score + 1);
    setChosen(option);
    setTimeout(() => nextQuestion(), 2000);
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setChosen(null);
    setTimeLeft(25);
    setShowEnd(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 p-6 font-sans">
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-3xl p-6 shadow-2xl border-4 border-yellow-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {currentQ === 0 && !chosen && (
          <motion.div
            className="bg-blue-50 border border-blue-300 p-4 rounded-2xl shadow-inner mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">🎮 How to Play:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-md">
              <li>⏳ You have <span className="font-bold text-pink-500">20 seconds</span> to answer each question.</li>
              <li>🧠 Pick the <span className="text-green-600 font-semibold">most ethical</span> choice for each situation.</li>
              <li>🚨 Watch out for <span className="text-red-600 font-semibold">bias alerts</span> on tricky decisions.</li>
              <li>🏅 Score a perfect 5 to earn the <span className="text-yellow-500 font-bold">"Justice Seeker" badge</span>.</li>
              <li>🔄 You can restart the game anytime if you wish to try again.</li>
            </ul>
          </motion.div>
        )}

        {!showEnd ? (
          <>
            <h1 className="text-4xl font-extrabold text-purple-600 mb-4 text-center animate-bounce">
              🧩 The Ethics Labyrinth
            </h1>
            <p className="text-center text-gray-700 text-md mb-2">
              💭 Think smart. Choose fair. Beat the bias traps!
            </p>

            <div className="text-center mb-4">
              <span className="inline-block bg-yellow-300 text-yellow-900 font-bold px-4 py-2 rounded-full shadow text-lg animate-pulse">
                ⏰ Time Left: {timeLeft}s
              </span>
            </div>

            <h2 className="text-xl font-semibold text-indigo-700 mb-3">
              {questions[currentQ].text}
            </h2>

            <div className="space-y-4">
              {questions[currentQ].options.map((option, idx) => (
                <motion.button
                  key={idx}
                  disabled={chosen !== null}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-md border-2 ${chosen === option
                      ? option.ethical
                        ? "bg-green-200 border-green-500"
                        : "bg-red-200 border-red-500"
                      : "bg-orange-100 border-orange-300"
                    }`}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 2 + idx }}
                >
                  {option.text}
                  {chosen === option && option.bias && (
                    <div className="text-sm text-red-600 mt-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Bias Alert: {option.bias}
                    </div>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mt-6 text-right text-sm text-gray-500">
              Question {currentQ + 1} of {questions.length}
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-4xl font-bold text-pink-600 mb-4 animate-bounce">
              🎉 Game Over!
            </h2>
            {score === questions.length ? (
              <>
                <p className="text-2xl text-green-700 mb-2">
                  You made all the right ethical choices!
                </p>
                <p className="text-lg text-gray-700 mb-3">Badge Earned:</p>
                <motion.h3
                  className="text-3xl font-extrabold text-yellow-500 animate-pulse"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  🧠 Justice Seeker
                </motion.h3>
              </>
            ) : (
              <>
                <p className="text-2xl text-red-600 mb-2">
                  You got {score} out of {questions.length} ethical decisions right.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Try again to earn the badge! 💪
                </p>
              </>
            )}
            <button
              onClick={restart}
              className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-all duration-300 mx-auto"
            >
              <RefreshCcw className="w-5 h-5" /> Restart
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EthicsLabyrinth;
