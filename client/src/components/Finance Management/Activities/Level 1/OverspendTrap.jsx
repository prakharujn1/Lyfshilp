import axios from "axios";
import { useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

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
    } catch (e) {
      console.error("Error generating feedback", e);
      setError("Error generating feedback. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Overspend Trap</h2>
      <p className="mb-4">{problem}</p>

      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className={`block p-3 rounded border cursor-pointer ${
              selectedOption === option
                ? "bg-blue-100 border-blue-600"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="decision"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center my-6">
              <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-600 text-2xl">Loading feedback...</p>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className={`text-2xl ${
                selectedOption
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              } rounded-2xl p-4 text-sky-800 bg-fuchsia-400 hover:bg-fuchsia-700`}
            >
              Click for Feedback
            </button>
          )}
        </div>
        {error && <p>{error}</p>}
      </div>

      {feedback && (
        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded">
          <strong>Feedback:</strong>
          <p className="mt-2 whitespace-pre-line">{feedback}</p>
        </div>
      )}
    </div>
  );
}
