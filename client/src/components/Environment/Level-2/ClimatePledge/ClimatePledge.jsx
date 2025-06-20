import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const introGif =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHFwbnNuZmo0Z3prNDFiczgwdjYwdTFnbWg3dGdweHI5dGE3bzlnYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT39Db8zIOODTppk08/giphy.webp";

const ClimatePledge = () => {
  const [pledge, setPledge] = useState({
    school: "",
    home: "",
    energy: "",
    waste: "",
    awareness: "",
  });
  const [feedback, setFeedback] = useState({
    school: "",
    home: "",
    energy: "",
    waste: "",
    awareness: "",
  });
  const [verifyMessage, setVerifyMessage] = useState({
    school: "",
    home: "",
    energy: "",
    waste: "",
    awareness: "",
  });
  const [score, setScore] = useState(null);
  const [bonus, setBonus] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [submitted, setSubmitted] = useState(false);
  const [view, setView] = useState("intro"); // "intro", "game", "result"

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (view === "game" && timeLeft > 0 && !submitted) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, submitted, view]);

  const handleChange = (e) => {
    setPledge({ ...pledge, [e.target.name]: e.target.value });
    setVerifyMessage({ ...verifyMessage, [e.target.name]: "" }); // Clear Gemini message when editing
  };

  const checkCreativity = (text) => {
    const keywords = [
      "make",
      "plan",
      "share",
      "lead",
      "team",
      "clean",
      "grow",
      "paint",
      "poster",
      "group",
      "project",
      "idea",
      "help",
      "teach",
      "invite",
      "talk",
    ];
    return keywords.some((k) => text.toLowerCase().includes(k));
  };

  const verifySingleWithGemini = async (text, isBonus) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const prompt = `You are a friendly teacher for students in Class 6–8.
  
  A student wrote this action plan: "${text}"
  
  Check:
  1️⃣ Is it clear and specific?
  2️⃣ Is it realistic and doable today?
  ${isBonus ? "3️⃣ Does it show creativity or initiative?" : ""}
  
  🎓 Reply in 1–2 short sentences with simple words & emojis:
  - If it's good, say: "Good job! ..."
  - If it needs changes, say: "Needs improvement: ..."
  
  Be short and supportive!`;

    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ Gemini could not check this time."
      );
    } catch (error) {
      console.error(error);
      return "⚠️ Gemini check failed.";
    }
  };

  const handleSubmit = async () => {
    let baseScore = 0;
    const newFeedback = {};
    let goodCount = 0;
    let hasCreative = false;

    // For each pledge point: verify with Gemini & decide correctness
    for (const [key, value] of Object.entries(pledge)) {
      if (!value.trim()) {
        newFeedback[key] = "⚠️ Please write something!";
        continue;
      }

      // Call Gemini for this point:
      const geminiFeedback = await verifySingleWithGemini(value, bonus);

      newFeedback[key] = geminiFeedback;

      if (geminiFeedback.toLowerCase().includes("good job")) {
        baseScore += 1;
        goodCount += 1;
      }

      // Creative check (only if bonus is ticked)
      if (bonus && checkCreativity(value)) {
        hasCreative = true;
      }
    }

    // Bonus: only if at least 3 points are actually GOOD and user checked bonus
    if (bonus && hasCreative && goodCount >= 3) {
      baseScore += 2;
    }

    setFeedback(newFeedback);
    setScore(baseScore);
    setSubmitted(true);
    setView("result");
  };

  const handlePlayAgain = () => {
    setPledge({
      school: "",
      home: "",
      energy: "",
      waste: "",
      awareness: "",
    });
    setFeedback({
      school: "",
      home: "",
      energy: "",
      waste: "",
      awareness: "",
    });
    setVerifyMessage({
      school: "",
      home: "",
      energy: "",
      waste: "",
      awareness: "",
    });
    setScore(null);
    setBonus(false);
    setTimeLeft(300);
    setSubmitted(false);
    setView("intro");
  };

  const verifyActionWithGemini = async (field) => {
    const text = pledge[field];
    const apiKey = import.meta.env.VITE_API_KEY;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    // Build the bonus part dynamically
    const bonusPart = bonus
      ? `4️⃣ Also, check if it is creative or something new that helps others too!`
      : "";

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `You are a super friendly teacher for students in Class 6–8. 
  A student wrote this action plan: "${text}"
  
  ✅ Please check if it meets these:
  1️⃣ Is it clear and specific?  
  2️⃣ Is it realistic and doable today?  
  3️⃣ Is it something the student can control?  
  ${bonusPart}
  
  🎓 Then give your feedback in **very simple words with emojis**, like a supportive teacher talking to a 12-year-old:
  - If it's good, start with: "✅ Good job! ..." and explain why it's good.
  - If it needs changes, start with: "⚠️ Needs improvement: ..." and explain what to fix in an easy way.
  
  Keep your answer short, friendly, and use 1-2 emojis!`,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        console.error("API error:", response.status, response.statusText);
        setVerifyMessage((prev) => ({
          ...prev,
          [field]: "⚠️ Gemini could not verify right now. Please try again.",
        }));
        return;
      }

      const data = await response.json();
      const geminiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      setVerifyMessage((prev) => ({ ...prev, [field]: geminiReply }));
    } catch (error) {
      console.error("Error:", error);
      setVerifyMessage((prev) => ({
        ...prev,
        [field]: "⚠️ Oops! Something went wrong. Try again later.",
      }));
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getResultGif = () => {
    if (score === 7)
      return "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnBsOTFpengzNmh0MGVsMm02NnRvZW9uM3puNHI3YWJkcHB6djJ3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgEGu4jVsamVXdm/giphy.webp";
    if (score >= 5)
      return "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThzeTF0djRiNjVhY2dqYWt3a2Nid2ljZDA0dHl6ODVwemRyM25zNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BL9ecwY9Jb9ge5WXoC/giphy.webp";
    if (score >= 3)
      return "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM1eXo3cmt0c29pcnF6bzBzcnB3Zjg3dHdvZGZsMTB2MnlnYW0zYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/I3JYewlC9EJLrSSGY9/giphy.webp";
    return "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE5ZGM1bG5pYm9uODBpaXppMm13eGIzampsNmhlc21ldDIwNDBjNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YAYDKkNMvUbVmJcYee/giphy.webp";
  };

  const getResultMessage = () => {
    if (score === 7) return "🌟 Amazing! You nailed it!";
    if (score >= 5) return "👍 Great job! Keep it up!";
    if (score >= 3) return "⚡ Good start! Keep working on it!";
    return "❗ Give it another shot!";
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-green-50 rounded-lg shadow text-center">
      {view === "intro" && (
        <>
          <h1 className="text-3xl font-bold mb-4">
            🌍 Challenge 3: Climate Pledge
          </h1>
          <img
            src={introGif}
            alt="Intro"
            className="mx-auto mb-4 rounded shadow-md"
            style={{ maxHeight: "250px" }}
          />
          <p className="mb-4">
            Format: Personal Action Plan <br />
            🎯 Goal: Think local, act global — small steps, big impact.
          </p>
          <button
            onClick={() => setView("game")}
            className="px-6 py-3 bg-green-600 text-white rounded"
          >
            Start Game
          </button>
        </>
      )}

      {view === "game" && (
        <>
          <h2 className="text-2xl font-bold mb-2">
            📝 Create Your 5-Point Climate Pledge
          </h2>
          <p className="mb-4">
            Task: Fill in each pledge point clearly. +1 per clear answer, +2
            bonus if creative!
          </p>

          <div className="mb-4 text-right text-red-600 font-bold">
            ⏳ Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
          </div>

          <div className="space-y-4 text-left">
            {["school", "home", "energy", "waste", "awareness"].map((field) => (
              <div key={field}>
                <label className="block font-semibold">
                  {field === "school"
                    ? "1️⃣ One change at school:"
                    : field === "home"
                    ? "2️⃣ One change at home:"
                    : field === "energy"
                    ? "3️⃣ One energy-saving habit:"
                    : field === "waste"
                    ? "4️⃣ One waste-reducing habit:"
                    : "5️⃣ One awareness action:"}
                </label>
                <input
                  type="text"
                  name={field}
                  value={pledge[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder={
                    field === "school"
                      ? "E.g., Organize a tree planting event"
                      : field === "home"
                      ? "E.g., Start composting food waste"
                      : field === "energy"
                      ? "E.g., Switch off lights when not in use"
                      : field === "waste"
                      ? "E.g., Carry reusable bags for shopping"
                      : "E.g., Share climate facts on school bulletin"
                  }
                />
                {feedback[field] && (
                  <p
                    className={`mt-1 text-sm ${
                      feedback[field].includes("✅")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {feedback[field]}
                  </p>
                )}
                <button
                  onClick={() => verifyActionWithGemini(field)}
                  className="mt-2 px-3 py-1 bg-purple-600 text-white rounded"
                >
                  Verify
                </button>
                {verifyMessage[field] && (
                  <p className="mt-1 text-sm text-blue-600">
                    {verifyMessage[field]}
                  </p>
                )}
              </div>
            ))}

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                checked={bonus}
                onChange={(e) => setBonus(e.target.checked)}
                id="bonus"
                className="mr-2"
              />
              <label htmlFor="bonus" className="font-semibold">
                ✅ Check if your actions are creative or school-implementable
                (+2 bonus)
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded"
          >
            Submit Pledge
          </button>
        </>
      )}

      {view === "result" && (
        <>
          {score === 7 && <Confetti width={width} height={height} />}
          <h2 className="text-2xl font-bold mb-2">{getResultMessage()}</h2>
          <p className="text-lg mb-2">
            Your Score:{" "}
            <strong>
              {score} / {bonus ? 7 : 5}
            </strong>
          </p>
          <img
            src={getResultGif()}
            alt="Result GIF"
            className="mx-auto mb-4 rounded shadow-md"
            style={{ maxHeight: "250px" }}
          />
          <p className="mb-4">
            Thank you for taking action to help our planet! Every pledge makes a
            difference 🌱
          </p>
          <button
            onClick={handlePlayAgain}
            className="px-6 py-3 bg-blue-600 text-white rounded"
          >
            Create Another Pledge
          </button>
        </>
      )}
    </div>
  );
};

export default ClimatePledge;
