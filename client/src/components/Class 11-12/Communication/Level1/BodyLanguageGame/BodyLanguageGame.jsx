import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const candidates = [
  {
    id: "a",
    name: "Candidate A",
    image: "/candidate-a.png",
    description: "Slouched posture, avoiding eye contact, fidgeting",
    correctLabels: ["Nervous or unsure", "Disinterested"],
  },
  {
    id: "b",
    name: "Candidate B",
    image: "/candidate-b.png",
    description: "Upright, smiling slightly, steady gaze",
    correctLabels: ["Engaged and confident", "Friendly and warm"],
  },
  {
    id: "c",
    name: "Candidate C",
    image: "/candidate-c.png",
    description: "Leaning too forward, very animated hand gestures, loud voice",
    correctLabels: ["Overpowering or aggressive", "Engaged and confident"],
  },
];

const labelOptions = [
  "Nervous or unsure",
  "Engaged and confident",
  "Overpowering or aggressive",
  "Disinterested",
  "Friendly and warm",
];

export default function BodyLanguageGame() {
  const [selections, setSelections] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({});

  const handleDrop = (candidateId, label) => {
    setSelections((prev) => {
      const current = prev[candidateId] || [];
      if (current.includes(label) || current.length >= 2) return prev;
      return {
        ...prev,
        [candidateId]: [...current, label],
      };
    });
  };

  const checkAnswers = () => {
    const res = {};
    candidates.forEach(({ id, correctLabels }) => {
      const userLabels = selections[id] || [];
      const correct = userLabels.filter((l) => correctLabels.includes(l));
      res[id] = {
        correct: correct.length === 2,
        explanation: correctLabels.map(
          (lbl) => `\u2139️ ${lbl}: ${explanation(lbl)}`
        ),
      };
    });
    setResult(res);
    setSubmitted(true);
  };

  const explanation = (label) => {
    switch (label) {
      case "Nervous or unsure":
        return "Avoiding eye contact and fidgeting suggest nervousness.";
      case "Engaged and confident":
        return "Steady gaze and upright posture reflect confidence.";
      case "Overpowering or aggressive":
        return "Leaning too close and animated gestures may feel intimidating.";
      case "Disinterested":
        return "Slouched posture can indicate lack of interest.";
      case "Friendly and warm":
        return "Smiling slightly and open gestures feel welcoming.";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">
        🎯 Decode the Signal
      </h1>
      <p className="text-lg text-center mb-6">
        Drag the labels below to describe the candidates' body language.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {candidates.map((c) => (
          <motion.div
            key={c.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-xl p-4 text-center border border-purple-200"
          >
            <img
              src={c.image}
              alt={c.name}
              className="rounded-xl w-full h-40 object-cover mb-2"
            />
            <h2 className="text-xl font-bold text-pink-600">{c.name}</h2>
            <p className="text-sm mb-2 italic">{c.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {(selections[c.id] || []).map((label) => (
                <span
                  key={label}
                  className="bg-purple-200 text-purple-900 text-sm px-2 py-1 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
            {submitted && (
              <div className="mt-2 text-sm">
                {result[c.id].correct ? (
                  <p className="text-green-600 font-bold">✅ Correct!</p>
                ) : (
                  <p className="text-red-600 font-bold">❌ Try Again</p>
                )}
                <ul className="mt-1 text-left list-disc list-inside text-xs">
                  {result[c.id].explanation.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <h3 className="text-center text-lg mt-6 font-bold text-purple-700">
        🧩 Labels:
      </h3>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {labelOptions.map((label) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            key={label}
            className="bg-pink-200 text-pink-900 px-3 py-1 rounded-full shadow-md text-sm hover:bg-pink-300"
            onClick={() => {
              const candidateId = prompt("Enter candidate ID (a, b, c)");
              if (candidateId && ["a", "b", "c"].includes(candidateId)) {
                handleDrop(candidateId, label);
              }
            }}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
          onClick={checkAnswers}
        >
          🚀 Submit
        </Button>
      </div>
    </div>
  );
}
