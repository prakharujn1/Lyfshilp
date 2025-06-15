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
  };

  const handleSubmit = () => {
    let baseScore = 0;
    Object.values(pledge).forEach((p) => {
      if (p.trim().length > 5) baseScore += 1;
    });
    if (bonus) baseScore += 2;
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
    setScore(null);
    setBonus(false);
    setTimeLeft(300);
    setSubmitted(false);
    setView("intro");
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
            <div>
              <label className="block font-semibold">
                1️⃣ One change at school:
              </label>
              <input
                type="text"
                name="school"
                value={pledge.school}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., Organize a tree planting event"
              />
            </div>

            <div>
              <label className="block font-semibold">
                2️⃣ One change at home:
              </label>
              <input
                type="text"
                name="home"
                value={pledge.home}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., Start composting food waste"
              />
            </div>

            <div>
              <label className="block font-semibold">
                3️⃣ One energy-saving habit:
              </label>
              <input
                type="text"
                name="energy"
                value={pledge.energy}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., Switch off lights when not in use"
              />
            </div>

            <div>
              <label className="block font-semibold">
                4️⃣ One waste-reducing habit:
              </label>
              <input
                type="text"
                name="waste"
                value={pledge.waste}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., Carry reusable bags for shopping"
              />
            </div>

            <div>
              <label className="block font-semibold">
                5️⃣ One awareness action:
              </label>
              <input
                type="text"
                name="awareness"
                value={pledge.awareness}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="E.g., Share climate facts on school bulletin"
              />
            </div>

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
            Your Score: <strong>{score} / 7</strong>
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
