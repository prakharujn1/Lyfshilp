import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const sdgs = [
  { id: 1, title: "No Poverty", icon: "🌍" },
  { id: 2, title: "Zero Hunger", icon: "🍽️" },
  { id: 3, title: "Good Health", icon: "🩺" },
  { id: 4, title: "Quality Education", icon: "📘" },
  { id: 5, title: "Gender Equality", icon: "🚺" },
  { id: 6, title: "Clean Water", icon: "💧" },
  { id: 7, title: "Affordable Energy", icon: "⚡" },
  { id: 8, title: "Decent Work", icon: "💼" },
  { id: 9, title: "Industry & Innovation", icon: "🏗️" },
  { id: 10, title: "Reduced Inequality", icon: "📉" },
  { id: 11, title: "Sustainable Cities", icon: "🏙️" },
  { id: 12, title: "Responsible Consumption", icon: "♻️" },
  { id: 13, title: "Climate Action", icon: "🌱" },
  { id: 14, title: "Life Below Water", icon: "🐟" },
  { id: 15, title: "Life on Land", icon: "🌳" },
  { id: 16, title: "Peace & Justice", icon: "🕊️" },
  { id: 17, title: "Partnerships", icon: "🤝" },
];

export default function SDGStartupQuest() {
  const [step, setStep] = useState(1);
  const [selectedSDGs, setSelectedSDGs] = useState([]);
  const [problem, setProblem] = useState("");
  const [change, setChange] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleSDG = (id) => {
    if (selectedSDGs.includes(id)) {
      setSelectedSDGs(selectedSDGs.filter((s) => s !== id));
    } else if (selectedSDGs.length < 2) {
      setSelectedSDGs([...selectedSDGs, id]);
    }
  };

  const selectedSDGData = sdgs.filter((sdg) => selectedSDGs.includes(sdg.id));

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-green-600">
        🌱 SDG Startup Quest
      </h1>

      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Step 1: Pick Relevant SDGs</h2>
          <p className="text-sm mb-3 text-gray-600">
            Tip: If your startup helps students learn online, choose SDG 4: Quality Education
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-96 overflow-y-auto mb-6">
            {sdgs.map((sdg) => (
              <label
                key={sdg.id}
                className={`p-3 rounded-xl border-2 cursor-pointer flex items-center gap-2 transition-all ${selectedSDGs.includes(sdg.id)
                  ? "bg-green-100 border-green-500"
                  : "bg-white border-gray-300"}`}
              >
                <input
                  type="checkbox"
                  checked={selectedSDGs.includes(sdg.id)}
                  onChange={() => toggleSDG(sdg.id)}
                />
                <span className="text-xl">{sdg.icon}</span> {sdg.title}
              </label>
            ))}
          </div>
          <button
            onClick={() => setStep(2)}
            disabled={selectedSDGs.length === 0}
            className="px-6 py-2 bg-green-600 text-white font-bold rounded-full disabled:opacity-40"
          >
            ➡️ Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Step 2: Describe Your Impact</h2>

          <div>
            <label className="block font-medium">Which problem are you addressing?</label>
            <textarea
              rows={3}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="e.g. Many rural students lack access to quality learning tools"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">What change will your startup make?</label>
            <textarea
              rows={3}
              value={change}
              onChange={(e) => setChange(e.target.value)}
              placeholder="e.g. We offer low-cost tablets with preloaded educational content"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Who will benefit from it?</label>
            <input
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
              placeholder="e.g. Students, farmers, low-income groups"
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            onClick={() => setStep(3)}
            className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-full"
          >
            ➡️ See Summary
          </button>
        </div>
      )}

      {step === 3 && !submitted && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Step 3: Impact Snapshot Summary</h2>

          <div className="p-4 border rounded bg-white">
            <h3 className="font-bold text-green-600">✅ Selected SDGs:</h3>
            <ul>
              {selectedSDGData.map((sdg) => (
                <li key={sdg.id}>
                  {sdg.icon} {sdg.title}
                </li>
              ))}
            </ul>

            <p className="mt-4">
              <strong>Problem:</strong> {problem}
            </p>
            <p>
              <strong>Change:</strong> {change}
            </p>
            <p>
              <strong>Beneficiaries:</strong> {beneficiary}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 bg-yellow-400 rounded-full font-semibold"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => setSubmitted(true)}
              className="px-6 py-2 bg-green-600 text-white font-bold rounded-full"
            >
              🎖️ Submit
            </button>
          </div>
        </div>
      )}

      {submitted && (
        <div className="text-center mt-12">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <h2 className="text-4xl font-bold text-green-700 mb-4">🌱 Changemaker Badge Unlocked!</h2>
          <p className="text-lg mb-6 text-gray-800">Congratulations! You've redesigned your startup for global good.</p>
          <p className="text-gray-600 italic mb-8">"The best way to predict the future is to create it." – Peter Drucker</p>
          <p className="font-bold text-indigo-700">🎓 You are now certified as an Advanced Youth Entrepreneur.</p>
        </div>
      )}
    </div>
  );
}
