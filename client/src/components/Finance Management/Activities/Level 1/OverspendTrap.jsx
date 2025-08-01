import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFinance } from "../../../../contexts/FinanceContext";
import { usePerformance } from "@/contexts/PerformanceContext"; // for performance

function parsePossiblyStringifiedJSON(text) {
  if (typeof text !== "string") return null;

  // Remove triple backticks and optional "json" after them
  text = text.trim();
  if (text.startsWith("```")) {
    text = text
      .replace(/^```(json)?/, "")
      .replace(/```$/, "")
      .trim();
  }

  // Remove single backticks
  if (text.startsWith("`") && text.endsWith("`")) {
    text = text.slice(1, -1).trim();
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    return null;
  }
}

const APIKEY = import.meta.env.VITE_API_KEY;

export default function OverspendTrap() {
  const { completeFinanceChallenge } = useFinance();
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const feedbackRef = useRef(null);

  //for Performance
  const { updatePerformance } = usePerformance();
  const [startTime, setStartTime] = useState(Date.now());

  const problem =
    "Your friend just spent ₹1,200 on concert tickets and now can not pay for school trip fees. What would you do?";

  const options = [
    "Lend them money",
    "Suggest selling something",
    "Help them budget next month",
    "Tell them to skip the trip",
  ];

  const prompt = `
You are a friendly and helpful evaluator.
A student's friend just spent ₹1,200 on concert tickets and now can not pay for school trip fees.
The student had the following options:
${options.map((opt, i) => `${i + 1}. ${opt}`).join("\n")}
The student chose: "${selectedOption}"

Please give feedback focusing on the consequences of impulsive spending, and how the chosen response helps or doesn't help address that. Keep it friendly and educational. Analyze the chosen option. Also keep a stress on impulsive buying. Do address the user in your conversation, so that it feels personalized. Maximum length 80 words.
The text can have bold words. Do not use asterisk to wrap a word.

### FINAL INSTRUCTION ###
Return ONLY raw JSON (no backticks, no markdown, no explanations).
Example format:
{
  feedback : "Your feedback"
}

`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIKEY}`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }
      );

      const aiReply = response.data.candidates[0].content.parts[0].text;
      console.log(aiReply);
      const parsed = parsePossiblyStringifiedJSON(aiReply);
      console.log(parsed);
      setFeedback(parsed.feedback);

      //for performance
      const totalTime = (Date.now() - startTime) / 1000; // in seconds
      const studyTimeMinutes = Math.ceil(totalTime / 60);
      updatePerformance({
        moduleName: "Finance",
        topicName: "budgetExpert",
        score: 10,
        accuracy: 100,
        avgResponseTimeSec: totalTime,
        studyTimeMinutes,
        completed: true,

      });

      setStartTime(Date.now());
      completeFinanceChallenge(0, 2); //MARK CHALLENGE COMPLETED
    } catch (e) {
      console.error("Error generating feedback", e);
      setError("Error generating feedback. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (feedback) {
      setTimeout(() => {
        if (feedbackRef.current) {
          feedbackRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [feedback]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-white to-yellow-50 p-6 md:space-x-10 space-y-10 md:space-y-0">
      {/* Right: Overspend Trap Card */}
      <div className="max-w-xl w-full p-6 bg-gradient-to-br from-pink-100 to-yellow-100 shadow-2xl rounded-3xl">
        <h2 className="text-3xl font-extrabold mb-6 text-purple-700 font-sans text-center">
          🎯 Overspend Trap
        </h2>
        <p className="mb-6 text-lg text-gray-800 font-medium text-center">
          {problem}
        </p>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.label
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className={`block p-4 rounded-2xl border-2 text-lg font-semibold transition-all duration-200 shadow-md ${selectedOption === option
                ? "bg-green-200 border-green-500 text-green-900"
                : "bg-white border-gray-300 text-gray-700"
                }`}
            >
              <input
                type="radio"
                name="decision"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="mr-3 accent-purple-600 scale-125"
              />
              {option}
            </motion.label>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center my-6">
                <div className="w-12 h-12 border-4 border-t-pink-500 border-yellow-300 rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-700 text-xl font-semibold">
                  Thinking...
                </p>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={!selectedOption}
                className={`text-xl font-bold rounded-full px-6 py-3 transition-all duration-200 ${selectedOption
                  ? "bg-purple-500 hover:bg-purple-600 text-white shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Show Me the Feedback!
              </motion.button>
            )}
          </div>
          {error && <p className="text-red-600 text-center mt-3">{error}</p>}
        </div>

        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            ref={feedbackRef}
            className="mt-8 p-5 bg-blue-100 border-l-4 border-blue-500 text-blue-900 rounded-xl shadow-inner"
          >
            <strong className="text-lg">💡 Feedback:</strong>
            <p className="mt-2 text-base whitespace-pre-line">{feedback}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
