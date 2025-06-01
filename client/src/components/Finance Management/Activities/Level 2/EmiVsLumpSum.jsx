import axios from "axios";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

const EmiVsLumpSum = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [reason, setReason] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  const lumpSumTotal = 4000 * 3; // ₹12,000
  const emiTotal = 4500 + 3000 * 3; // ₹13,500

  const data = [
    { name: "Lump Sum", cost: lumpSumTotal, extra: 0 },
    { name: "EMI", cost: emiTotal, extra: 1500 },
  ];

  const handleSubmit = async () => {
    if (selectedOption && reason.trim()) {
      setShowResult(true);
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIKEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `The user had to buy a phone of ₹12000. He had two options : 
                  Option A and B. Option A was the lumpsum option. In A, he had to save 4000 for 3 months and then buy the phone, using lumpsum payment. Option B was the EMI option. In option B, he had to pay 4500 upfront and then pay 3000 per month for three months. Of course this included interest as extra payment. The user chose option "${selectedOption}".
                  His reason was "${reason}". Evaluate his choices. Give feedback regarding the differnce between his choice and the other choice. If his choice is option B, criticize showing the issues of instant gratification, impulsive buying and the extra interest and if it is option A, appreciate accordingly. Your last sentence should give the verdict, like good choice or bad choice. Maximum length 40 words.

### FINAL INSTRUCTION ###
Return ONLY raw JSON (no backticks, no markdown, no explanations).
Example format:
{
feedback : "Your feedback"
}
`,
                },
              ],
            },
          ],
        }
      );

      const aiReply = response.data.candidates[0].content.parts[0].text;
      console.log(aiReply);
      const parsed = parsePossiblyStringifiedJSON(aiReply);
      console.log(parsed);
      setFeedback(parsed.feedback);
    } catch (err) {
      setError("Error fetching feedback. Try again later");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setSelectedOption(null);
    setReason("");
    setShowResult(false);
    setFeedback("");
    setLoading(false);
  };

  const notAllowed = () => {
    if (selectedOption && reason.trim()) {
      return false;
    }
    return true;
  };

  return (
    <div className="w-[95%] max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <div
        className="bg-gradient-to-br from-yellow-50 to-pink-100 rounded-3xl shadow-2xl p-6 sm:p-10 border border-yellow-200"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-purple-800 mb-10 tracking-wide drop-shadow">
          📱 EMI vs Lump Sum
        </h1>

        {!showResult && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <button
              className={`p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 ${
                selectedOption === "A"
                  ? "bg-green-200 border-2 border-green-600"
                  : "bg-green-100 hover:bg-green-50"
              }`}
              onClick={() => setSelectedOption("A")}
            >
              <h2 className="text-2xl font-bold text-green-800 mb-3">
                Option A: Lump Sum
              </h2>
              <p className="text-gray-700 text-xl font-medium">
                Save ₹4,000/month for 3 months. Then buy the phone in one shot.
              </p>
              <p className="mt-3 text-green-700 text-xl font-bold">
                Total: ₹{lumpSumTotal}
              </p>
            </button>

            <button
              className={`p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300 ${
                selectedOption === "B"
                  ? "bg-blue-200 border-2 border-blue-600"
                  : "bg-blue-100 hover:bg-blue-50"
              }`}
              onClick={() => setSelectedOption("B")}
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-3">
                Option B: EMI
              </h2>
              <p className="text-gray-700 font-medium text-xl">
                Pay ₹4,500 upfront + ₹3,000/month for 3 months (includes
                interest).
              </p>
              <p className="mt-3 text-blue-700 text-xl font-bold">
                Total: ₹{emiTotal}
              </p>
            </button>
          </div>
        )}

        {!showResult && (
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md mb-10">
            <label className="mb-4 px-4 py-2 text-xl bg-purple-100 text-yellow-900 rounded-full font-bold inline-block">
              💬 Why did you choose this option?
            </label>
            <textarea
              className="w-full h-28 p-4 font-medium text-xl rounded-xl border bg-purple-100 text-purple-900 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Type your reason here..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              disabled={notAllowed()}
              className={`mt-6 px-6 py-3 font-bold text-xl text-yellow-900 rounded-full shadow transition-all ${
                notAllowed()
                  ? "bg-yellow-300 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
              }`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}

        {showResult && (
          <div className="space-y-10">
            <div className="bg-red-100 rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-purple-700 mb-6">
                📊 Cost Comparison Chart
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data}
                  margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                >
                  
                  <XAxis
                    dataKey="name"
                    stroke="#4f46e5"
                    tick={{ fontSize: 14, fontFamily: "'Comic Neue', cursive" }}
                  />
                  <YAxis
                    stroke="#4f46e5"
                    tick={{ fontSize: 14, fontFamily: "'Comic Neue', cursive" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff7ed",
                      borderRadius: 12,
                      border: "1px solid #fbbf24",
                    }}
                    labelStyle={{ color: "#4b5563", fontWeight: "bold" }}
                  />
                  <Bar
                    dataKey="cost"
                    stackId="a"
                    fill="#facc15"
                    radius={[0, 0, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={1000}
                  />
                  {/* Extra EMI (highlighted part) */}
                  <Bar
                    dataKey="extra"
                    stackId="a"
                    fill="#f87171" // red highlight
                    radius={[0, 0, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-xl shadow-sm">
              <h4 className="text-2xl  font-semibold text-green-800 mb-2">
                {loading ? "Loading feedback..." : "Your Feedback"}
              </h4>
              {error && <p className="text-red-500">{error}</p>}
              {feedback && (
                <p className="text-gray-700 text-xl font-medium">{feedback}</p>
              )}
            </div>

            <div className="text-center">
              <button
                className="bg-red-500 px-7 py-5 text-xl text-white font-semibold rounded-full shadow hover:bg-red-600 transition-all"
                onClick={handleRestart}
              >
                🔁 Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiVsLumpSum;
