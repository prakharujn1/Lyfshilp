import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const APIKEY = import.meta.env.VITE_API_KEY;

export default function LeadershipGame() {
  const [hasStarted, setHasStarted] = useState(false);
  const [step, setStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(8 * 60); // 8 minutes
  const [finalMessage, setFinalMessage] = useState("");
  const [selectedTones, setSelectedTones] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [gameDone, setGameDone] = useState(false);
  const [evaluating, setEvaluating] = useState(false);

  const tones = ["Assertive", "Aggressive", "Passive", "Motivating"];

  const toggleTone = (tone) => {
    setSelectedTones((prev) =>
      prev.includes(tone) ? prev.filter((t) => t !== tone) : [...prev, tone]
    );
  };

  useEffect(() => {
    if (!hasStarted || gameDone) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setGameDone(true);
          setFeedback("⏰ Time's up! Try again.");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [hasStarted, gameDone]);

  const formatTime = (secs) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleToneSubmit = () => {
    if (
      selectedTones.includes("Assertive") &&
      selectedTones.includes("Motivating") &&
      !selectedTones.includes("Aggressive") &&
      !selectedTones.includes("Passive")
    ) {
      setStep(3);
    } else {
      setFeedback("❌ Try again. Select the most appropriate tones.");
    }
  };

  const handleRestart = () => {
    setHasStarted(false);
    setStep(1);
    setFinalMessage("");
    setSelectedTones([]);
    setFeedback("");
    setGameDone(false);
    setTimeLeft(8 * 60);
  };

  const submitFinal = async () => {
    if (!finalMessage.trim()) {
      setFeedback("⚠️ Please write your message before submitting.");
      return;
    }

    setEvaluating(true);
    setFeedback("⏳ Evaluating your message with AI...");

    const prompt = `You are an evaluator assessing a student's leadership message to their school event team. 

The message must include:
1. Acknowledgement of delay/challenges (e.g., "I know it's been a hectic week...")
2. Clear direction or structure (e.g., "Here's what we need to finish by Friday...")
3. Motivation (e.g., "Let's make this fest unforgettable!")

Return only a valid JSON object in this exact format:
{
  "acknowledgement": true/false,
  "direction": true/false,
  "motivation": true/false
}

Do NOT include any explanation, markdown, or extra text.

Here is the student's message:
"${finalMessage}"`;

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${APIKEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await res.json();
      let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      rawText = rawText.trim();

      // Strip markdown if included
      if (rawText.startsWith("```")) {
        rawText = rawText.replace(/```(?:json)?|```/g, "").trim();
      }

      const result = JSON.parse(rawText);
      const { acknowledgement, direction, motivation } = result;
      const score = [acknowledgement, direction, motivation].filter(Boolean).length;

      if (score === 3) {
        setFeedback("✅ Well done—you inspired and directed at the same time!");
        setGameDone(true);
      } else if (!direction) {
        setFeedback("⚠️ Consider making the next steps more specific in your message!");
      } else if (!acknowledgement) {
        setFeedback("🧠 Acknowledge the delay or team's effort to show empathy in your message");
      } else if (!motivation) {
        setFeedback("💡 Add a motivational tone to rally your team in your message");
      }
    } catch (error) {
      console.error("Gemini API error:", error);
      setFeedback("❌ Something went wrong while evaluating your message.");
    } finally {
      setEvaluating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 p-6 text-gray-800 font-sans">
      {/* 🧠 Main Header */}


      {/* 🔲 Artistic Game Container */}
      <div className="max-w-5xl mx-auto rounded-[3rem] p-1 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 shadow-2xl">
        <div className="bg-white/50 backdrop-blur-md rounded-[3rem] px-6 sm:px-12 py-10 sm:py-14 border border-white/30">

          <motion.h1
            className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 drop-shadow-lg mb-6"
            animate={{ scale: [1, 1, 1], rotate: [0, 1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            🎮 Lead the Team
          </motion.h1>

          {/* ⏳ Timer + Restart */}
          {hasStarted && (
            <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
              <div className="text-lg sm:text-xl font-semibold text-indigo-700 bg-indigo-100 px-5 py-2 sm:px-7 sm:py-3 rounded-full shadow-md border-2 border-indigo-300 text-center">
                ⏳ Time Left:{" "}
                <span className="text-pink-600 tracking-wide font-bold">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          )}

          {/* 🚀 Start Screen */}
          {!hasStarted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative text-center space-y-8 max-w-3xl mx-auto p-6 sm:p-10 bg-white/50 backdrop-blur-md rounded-[2.5rem] shadow-2xl border-4 border-transparent bg-clip-padding border-gradient-to-br from-purple-300 via-pink-200 to-yellow-200"
            >
              {/* ✨ Glowing Aura */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 blur-2xl opacity-50 z-[-1]" />

              {/* 🧠 Challenge Box */}
              <div className="bg-yellow-50 border-l-8 border-yellow-400 p-5 rounded-2xl shadow-inner">
                <p className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed">
                  🎯 <strong>Challenge:</strong> You're the newly elected <span className="text-purple-700 font-bold">School Council Vice-Captain</span>.
                  Your team is behind on preparations for the <span className="text-pink-700 font-bold">Annual Fest</span>. Morale is low.
                  Send a message that's <strong>assertive</strong>, <strong>encouraging</strong>, and <strong>action-oriented</strong>.
                </p>
              </div>

              {/* 🕒 Duration Info */}
              <div className="inline-block bg-indigo-100 border-2 border-indigo-300 rounded-full px-5 py-2 text-indigo-700 font-semibold text-base sm:text-lg shadow-md animate-pulse">
                ⏱️ You have <span className="text-pink-600 font-bold">8 minutes</span> to complete the challenge
              </div>

              {/* 🚀 Start Button */}
              <motion.button
                onClick={() => setHasStarted(true)}
                whileTap={{ scale: 0.93 }}
                whileHover={{ scale: 1.08, backgroundColor: "#d946ef" }}
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-500 transition-all duration-300 text-white py-3 px-10 rounded-full font-extrabold text-xl shadow-xl tracking-wide"
              >
                🚀 Start Game
              </motion.button>
            </motion.div>
          )}


          {hasStarted && step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-4xl mx-auto mt-8 text-center p-8 sm:p-10 bg-white/50 backdrop-blur-md rounded-[2.5rem] shadow-2xl border-4 border-purple-300 space-y-6"
            >
              {/* ✨ Glowing Border Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 blur-2xl rounded-[2.5rem] opacity-40 z-[-1]" />

              {/* 📝 Header */}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 drop-shadow-lg">
                📢 Compose Your Broadcast
              </h2>

              {/* 🧾 Instructions */}
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                ✍️ Write a 5–6 line message to your team that <strong>boosts morale</strong> and <strong>sets direction</strong>.
              </p>
              <p className="text-sm sm:text-base text-gray-600 italic">
                ✅ Include all 3: <span className="text-purple-600 font-semibold">Acknowledgment</span>, <span className="text-indigo-600 font-semibold">Direction</span>, <span className="text-pink-600 font-semibold">Motivation</span>.
              </p>

              {/* 🧠 Textarea */}
              <textarea
                rows={6}
                className="w-full p-4 text-base rounded-xl border-2 border-indigo-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                placeholder="Start your motivational message here..."
                value={finalMessage}
                onChange={(e) => setFinalMessage(e.target.value)}
              />

              {/* 🚀 Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-8 rounded-full font-bold shadow-lg tracking-wide transition duration-300 ${finalMessage.trim().length < 20 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                onClick={() => setStep(2)}
                disabled={finalMessage.trim().length < 20}
              >
                🚀 Submit Message
              </motion.button>

              {/* 🔄 Restart Button */}
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm sm:text-base py-2 px-6 rounded-full shadow-md transition-all"
              >
                🔄 Restart
              </button>
            </motion.div>
          )}

          {hasStarted && step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-3xl mx-auto mt-10 p-8 sm:p-10 text-center bg-white/50 backdrop-blur-md border-4 border-indigo-300 rounded-[2.5rem] shadow-2xl space-y-6"
            >
              {/* Glowing Aura Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 opacity-40 blur-2xl rounded-[2.5rem] z-[-1]" />

              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 drop-shadow-lg">
                🎭 Select Communication Tones
              </h2>

              <p className="text-gray-700 text-lg">
                ✨ Choose the tones that best reflect your message's impact.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTone(t)}
                    className={`px-5 py-2 rounded-full font-semibold transition border shadow-md tracking-wide ${selectedTones.includes(t)
                        ? "bg-green-300 border-green-600 text-green-900"
                        : "bg-yellow-100 hover:bg-yellow-200 border-yellow-400 text-yellow-900"
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {feedback && (
                <p className="text-md font-semibold text-red-600 mt-2 animate-pulse">
                  {feedback}
                </p>
              )}

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleToneSubmit}
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-2 px-8 rounded-full font-bold shadow-lg transition-all mt-4"
              >
                ✅ Submit Tones
              </motion.button>

              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 px-6 rounded-full font-medium shadow-md transition mt-2"
              >
                🔄 Restart
              </button>
            </motion.div>
          )}


          {step === 3 && !gameDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-3xl mx-auto mt-10 p-8 sm:p-10 text-center bg-white/60 backdrop-blur-md border-4 border-pink-300 rounded-[2.5rem] shadow-2xl space-y-6"
            >
              {/* Decorative Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-yellow-300 to-purple-300 opacity-40 blur-2xl rounded-[2.5rem] z-[-1]" />

              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-500 drop-shadow-lg">
                📨 Final Review
              </h2>

              <p className="text-gray-700 text-lg">
                ✅ We'll check your message for <strong>three key elements</strong>:
              </p>
              <ul className="text-left text-gray-800 max-w-md mx-auto list-disc list-inside text-md leading-relaxed">
                <li>💬 <strong>Acknowledgement</strong> of team’s effort or challenges</li>
                <li>📋 <strong>Direction</strong> with clear next steps or goals</li>
                <li>🌟 <strong>Motivation</strong> that energizes and uplifts</li>
              </ul>

              {feedback && (
                <p className="text-md font-semibold text-red-600 mt-2 animate-pulse">
                  {feedback}
                </p>
              )}

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={submitFinal}
                disabled={evaluating}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-8 rounded-full font-bold shadow-lg transition-all"
              >
                {evaluating ? "⏳ Evaluating..." : "🚀 Submit Final Message"}
              </motion.button>

              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 px-6 rounded-full shadow-md font-medium transition"
              >
                🔄 Restart
              </button>
            </motion.div>
          )}


          {gameDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white/70 border-4 border-green-300 backdrop-blur-md p-8 sm:p-10 mt-12 rounded-[2.5rem] text-center shadow-2xl max-w-xl mx-auto space-y-6"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-green-300 via-yellow-300 to-pink-300 opacity-40 blur-2xl rounded-[2.5rem] z-[-1]" />

              {/* 🎉 Title */}
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 drop-shadow-lg">
                🎉 Game Complete
              </h2>

              {/* 📝 Feedback */}
              <p className="text-lg text-gray-800 font-medium">{feedback}</p>

              {/* 🔁 Restart Button */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 px-8 rounded-full font-semibold shadow-lg transition-all"
              >
                🔄 Play Again
              </motion.button>
            </motion.div>
          )}


        </div>
      </div>
    </div>
  );
};
