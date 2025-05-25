import React, { useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";

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

const BudgetActivity = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [strategies, setStrategies] = useState("");
  const [feedback, setFeedback] = useState("");
  const [remark, setRemark] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);

  const prompt = `
You are a financial advisor.
A student created this one-month budget:

Income: ₹${income}
Expected Expenses: ${expenses}
Saving Strategies: ${strategies}

Please give helpful feedback focusing on whether the student is making smart choices and if the saving strategies are strong. Also comment on whether it shows discipline and planning. If the choices are bad, give criticism and a poor remark. If the choices are good, give helpful suggestions for improvemnt and encouraging remark. 

### FINAL INSTRUCTION ###
Return ONLY raw JSON (no backticks, no markdown, no explanations).
Example format:
{
  feedback : "Your feedback",
  remark : ""
}

Remark can have one of these values : "Excellent", "Very good", "Great", "Smart", "Impressive", "Not bad", "Poor budgeting", "Spendthrift" 
`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowConfetti(false);
    setFeedback("");
    setRemark("");

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
      setRemark(parsed.remark);

      if (/Excellent|Very good|Great/i.test(parsed.remark)) {
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      }
    } catch (err) {
      console.error("Error:", err);
      setFeedback("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-xl rounded-xl border border-green-100">
      {showConfetti && (
        <>
          <Confetti />
          <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-400 via-lime-400 to-emerald-500 text-white py-5 px-6 text-center font-bold shadow-xl transition-transform duration-500 translate-y-0 z-50 text-lg tracking-wide animate-pulse drop-shadow-xl">
            🎉🎉 <span className="text-2xl">Congratulations!</span> You've
            earned the <span>Smart Budgeter</span> badge! 🏅
          </div>
        </>
      )}

      <h2 className="text-2xl font-extrabold mb-6 text-center text-green-700">
        💰 Monthly Budget Activity
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="number"
          placeholder="Monthly income (₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full p-3 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          required
        />
        <textarea
          placeholder="Expected expenses (e.g., food, travel, etc.)"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />
        <textarea
          placeholder="Your 3 saving strategies"
          value={strategies}
          onChange={(e) => setStrategies(e.target.value)}
          className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "🚀 Submit for feedback"}
        </button>
      </form>

      {feedback && (
        <div className="mt-8 p-5 border-2 border-gray-300 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
          <h3 className="font-bold text-lg mb-2 text-indigo-600">✨Feedback</h3>
          <p className="text-gray-800">
            <strong>Remark:</strong> {remark}
          </p>
          <p className="text-gray-800">
            <strong>Description:</strong> {feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetActivity;
