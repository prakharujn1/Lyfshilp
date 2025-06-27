import React, { useState } from "react";
import { motion } from "framer-motion";

const scenarios = [
    {
        title: "Friend vs. Team",
        description:
            "Your best friend asks you to lie about their contribution to a group project. The project deadline is tight, and your team is relying on everyone doing their part.",
        options: [
            "Do it for your friend. Loyalty first.",
            "Talk to the friend and resolve it privately.",
            "Raise it with the team for transparency.",
        ],
    },
    {
        title: "Deadline Conflict",
        description:
            "You’re leading a team. A member’s delay will push the deadline. Do you escalate or cover quietly?",
        options: [
            "Fix it yourself silently.",
            "Talk to the team and find a workaround.",
            "Inform your mentor transparently.",
        ],
    },
];

const flashcards = [
    {
        statement: "Everyone else would cover for their friend.",
        flaw: "Bandwagon fallacy",
    },
    {
        statement: "If we escalate, the mentor will lose trust.",
        flaw: "Appeal to fear",
    },
];

const fallacyOptions = [
    "Bandwagon fallacy",
    "Appeal to authority",
    "Appeal to fear",
    "False dilemma",
];


export default function StrategicFrameworkGame() {
    const [step, setStep] = useState(1);
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [justification, setJustification] = useState("");
    const [badge, setBadge] = useState(false);
    const [feedback, setFeedback] = useState("");

    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleFlip = () => setFlipped(!flipped);

    const handleNext = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        if (index + 1 < flashcards.length) {
            setIndex(index + 1);
            setFlipped(false);
        } else {
            setShowResult(true);
            onComplete();
        }
    };


    const handleJustificationSubmit = async () => {
        if (justification.length < 10) return;
        setBadge(true);
        const res = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Give short, constructive AI feedback (max 2 lines) for the following justification: "${justification}". Focus on clarity, fairness, and strategic thinking.`,
                                },
                            ],
                        },
                    ],
                }),
            }
        );
        const data = await res.json();
        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text || "No feedback available.";
        setFeedback(reply);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 p-6 font-sans">
            <motion.div
                className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
                    🧠 Strategic Dilemma Decoder
                </h1>

                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Real-Life Scenario</h2>
                        <select
                            className="border p-2 rounded-lg mb-4 w-full"
                            value={scenarioIndex}
                            onChange={(e) => setScenarioIndex(Number(e.target.value))}
                        >
                            {scenarios.map((s, i) => (
                                <option value={i} key={i}>
                                    {s.title}
                                </option>
                            ))}
                        </select>
                        <p className="mb-4 text-gray-700">{scenarios[scenarioIndex].description}</p>
                        <div className="space-y-3">
                            {scenarios[scenarioIndex].options.map((opt, idx) => (
                                <label
                                    key={idx}
                                    className={`block border p-4 rounded-xl cursor-pointer ${selectedOption === idx ? "bg-blue-100 border-blue-500" : ""
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        className="mr-2"
                                        name="option"
                                        onChange={() => setSelectedOption(idx)}
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                        <button
                            onClick={() => setStep(2)}
                            disabled={selectedOption === null}
                            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full disabled:opacity-40"
                        >
                            Next: Flashcards
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">🧠 Logical Fallacy Flashcards</h2>
                        <div className="text-center mt-4">
                            {!showResult ? (
                                <motion.div
                                    className="bg-yellow-50 p-6 rounded-3xl border shadow-xl max-w-xl mx-auto"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h2 className="text-lg font-bold mb-2">Flashcard {index + 1}</h2>
                                    <div
                                        className={`transition-transform duration-500 p-4 text-lg bg-white rounded-xl shadow ${flipped ? "rotate-y-180" : ""
                                            }`}
                                    >
                                        {!flipped ? (
                                            <>
                                                <p className="italic">"{flashcards[index].statement}"</p>
                                                <button
                                                    onClick={handleFlip}
                                                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-full"
                                                >
                                                    Flip for Flaw
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-green-700 font-semibold">Flaw: {flashcards[index].flaw}</p>
                                                <p className="text-sm mt-2 text-gray-600">{flashcards[index].explanation}</p>
                                                <div className="mt-4 space-y-2">
                                                    {fallacyOptions.map((option, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => handleNext(option === flashcards[index].flaw)}
                                                            className="block w-full border px-4 py-2 rounded-xl bg-white hover:bg-blue-50"
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold text-green-600 mb-2">🎉 Great job!</h2>
                                    <p className="text-lg">You scored {score} / {flashcards.length}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {step === 3 && !badge && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">⚖️ Justify Your Final Decision</h2>
                        <textarea
                            className="w-full border rounded-xl p-4 mb-4"
                            rows={5}
                            placeholder="Explain how your decision balances logic and ethics..."
                            value={justification}
                            onChange={(e) => setJustification(e.target.value)}
                        ></textarea>
                        <button
                            onClick={handleJustificationSubmit}
                            className="bg-green-600 text-white px-6 py-2 rounded-full"
                        >
                            Submit Justification
                        </button>
                    </div>
                )}

                {badge && (
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl font-bold text-green-700">🎖️ Badge Earned</h2>
                        <p className="text-lg">You are a 🧠 Logic Leader — strategic, fair, and thoughtful.</p>
                        {feedback && <p className="italic text-gray-700">💬 AI Feedback: {feedback}</p>}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
