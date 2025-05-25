import React, { useState } from "react";
import axios from "axios";
import BankCard from "./BankCard";

const API_KEY = import.meta.env.VITE_API_KEY;

const banks = [
  {
    id: "A",
    name: "Bank A",
    fee: "₹0/month",
    interest: "3% interest",
    digital: "Basic digital features",
  },
  {
    id: "B",
    name: "Bank B",
    fee: "₹50/month",
    interest: "2.5%",
    digital: "Full digital banking, and free UPI + cashback",
  },
  {
    id: "C",
    name: "Bank C",
    fee: "₹0/month",
    interest: "1% interest",
    digital: "No digital access, Offline services only",
  },
];

const upiOptions = ["Google Pay", "PhonePe", "Paytm", "BHIM"];

const parentAdviceOptions = [
  "Choose digital bank",
  "Avoid fees",
  "Stick to traditional bank",
  "No advice",
];

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

export default function PickABank() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [upiApp, setUpiApp] = useState("");
  const [parentAdvice, setParentAdvice] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  const generateGeminiPrompt = () => {
    if (!selectedBank || !reason.trim()) return;

    const bank = banks.find((b) => b === selectedBank);
    return `You are a helpful banking advisor AI. 

The user selected Bank: ${bank?.name} with features:
- Monthly fee: "${bank?.fee}"
- Interest: "${bank?.interest}"
- Digital Access: "${bank?.digital}"

The parents gave the following advice: "${parentAdvice}".

The user chose this bank because: "${reason}"

Please review the choice and provide thoughtful feedback on whether this is a good fit for a student just starting banking, considering digital wallet usage and parental advice. Be friendly and encouraging. For the bank, use only the information given to you. Do not ask for more information.

### FINAL INSTRUCTION ###
Return ONLY raw JSON (no backticks, no markdown, no explanations), in the below format.
{
   feedback : "Your feedback"
}
`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let x = notAllowed();
    if (!selectedBank || !upiApp || reason.trim() === "") return;
    setSubmitted(true);
    setLoadingFeedback(true);
    setFeedback("");

    try {
      const prompt = generateGeminiPrompt();

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
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
    } catch (error) {
      console.error("Error fetching Gemini feedback:", error);
      setFeedback("Failed to get feedback from AI. Please try again later.");
    } finally {
      setLoadingFeedback(false);
    }
  };

  const notAllowed = () => {
    // console.log(selectedBank, parentAdvice, reason);
    if (!selectedBank || !parentAdvice || !reason) {
      return true;
    }

    return false;
  };

  console.log(selectedBank);

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 text-blue-900">
        🎉 You’ve turned 18. Welcome to banking!
      </h1>
      <h2 className="text-xl font-semibold mb-6 text-blue-800">
        🏦 Pick Your Bank Simulator
      </h2>

      {!submitted && (
        <>
          <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
            {banks?.map((bank) => (
              <BankCard key={bank.id} bank={bank} onSelect={setSelectedBank} />
            ))}
          </div>

          {selectedBank && (
            <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Which UPI/digital wallet do you use?
                </label>
                <div className="flex flex-wrap gap-2">
                  {upiOptions.map((upi) => (
                    <label key={upi} className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        value={upi}
                        checked={upiApp === upi}
                        onChange={(e) => {
                          if (e.target.checked) setUpiApp(upi);
                          else {
                            setUpiApp("");
                          }
                        }}
                      />
                      <span>{upi}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Did your parents give you any advice?
                </label>
                <div className="flex flex-wrap gap-2">
                  {parentAdviceOptions.map((advice) => (
                    <label key={advice} className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        value={advice}
                        checked={parentAdvice === advice}
                        onChange={(e) => {
                          if (e.target.checked) setParentAdvice(advice);
                          else {
                            setParentAdvice("");
                          }
                        }}
                      />
                      <span>{advice}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Why did you choose this bank?
                </label>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Give your reason..."
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={notAllowed()}
                className={`bg-blue-600 text-white py-2 px-4 rounded ${
                  notAllowed() ? `cursor-not-allowed` : `cursor-pointer`
                } hover:bg-blue-700`}
              >
                Submit for Feedback
              </button>
            </form>
          )}
        </>
      )}

      {submitted && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md max-w-xl w-full">
          <h2 className="text-xl font-bold mb-2 text-green-700">
            ✅ Your Submission
          </h2>
          <p>
            <strong>Selected Bank:</strong> {selectedBank.name}
          </p>
          <p>
            <strong>UPI App:</strong> {upiApp}
          </p>
          <p>
            <strong>Parent Advice:</strong> {parentAdvice}
          </p>
          <p>
            <strong>Your Reason:</strong> {reason}
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Feedback:
            </h3>
            {loadingFeedback ? (
              <p className="italic text-gray-500">Generating feedback...</p>
            ) : (
              <p className="whitespace-pre-line">{feedback}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
