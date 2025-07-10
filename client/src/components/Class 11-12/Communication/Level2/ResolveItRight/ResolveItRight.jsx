import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const APIKEY = import.meta.env.VITE_API_KEY;
import { useCommunication } from "@/contexts/CommunicationContext";

const sentenceStarters = [
    { text: "I feel like…", isCorrect: true },
    { text: "You always…", isCorrect: false },
    { text: "Let’s find a way…", isCorrect: true },
    { text: "I can’t believe…", isCorrect: false }
];
const sentenceEndings = [
    { text: "…this project means a lot to both of us.", isCorrect: true },
    { text: "…you’ve barely done anything.", isCorrect: false },
    { text: "…we can talk this through calmly.", isCorrect: true }
];
const tones = [
    { label: "Calm", isCorrect: true },
    { label: "Assertive", isCorrect: true },
    { label: "Sarcastic", isCorrect: false },
    { label: "Passive-aggressive", isCorrect: false }
];

export default function ResolveItRight() {
    const { completeCommunicationChallenge } = useCommunication();
    const [step, setStep] = useState(1);
    const [starter, setStarter] = useState(null);
    const [ending, setEnding] = useState(null);
    const [pairs, setPairs] = useState([]);
    const [selectedTones, setSelectedTones] = useState([]);
    const [finalMessage, setFinalMessage] = useState("");
    const [feedback, setFeedback] = useState("");
    const [evaluating, setEvaluating] = useState(false);
    const [gameDone, setGameDone] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [timeUp, setTimeUp] = useState(false);

    // Start & manage countdown
    useEffect(() => {
        if (!hasStarted) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setTimeUp(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup interval on unmount or restart
        return () => clearInterval(interval);
    }, [hasStarted]);


    const handleRestart = () => {
        setStep(1);
        setPairs([]);
        setStarter(null);
        setEnding(null);
        setSelectedTones([]);
        setFinalMessage("");
        setFeedback("");
        setGameDone(false);
        setHasStarted(false);
        setTimeLeft(600);
        setTimeUp(false);
    };
    const formatTime = (s) => {
        const m = Math.floor(s / 60).toString().padStart(2, '0');
        const sec = (s % 60).toString().padStart(2, '0');
        return `${m}:${sec}`;
    };


    const toggleTone = (t) => {
        setSelectedTones(prev =>
            prev.includes(t.label) ? prev.filter(x => x !== t.label) : [...prev, t.label]
        );
    };

    const submitFinal = async () => {
        if (!finalMessage.trim()) return;
        setEvaluating(true);

        const prompt = `
You are an evaluator for a student's conflict resolution message. Decide if it shows positive intent and a willingness to resolve.

Message:
"""${finalMessage}"""

✅ Return ONLY a valid JSON like:
{ "success": true }
or
{ "success": false }

❌ Do NOT include any markdown, description, explanation, or extra characters.
Just the JSON.
`;

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIKEY}`,
                {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
                }
            );

            const data = await res.json();
            let raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
            console.log("Gemini raw response:", raw);

            // ✅ Extract JSON using regex
            const jsonMatch = raw.match(/{[^}]*true[^}]*}|{[^}]*false[^}]*}/);
            if (!jsonMatch) throw new Error("No valid JSON found");

            const result = JSON.parse(jsonMatch[0]);

            const passed = result.success;
            setFeedback(
                passed
                    ? "🔁 Great! You acknowledged emotions and focused on a solution."
                    : "🔁 Try avoiding blaming language. Use ‘I’ statements instead."
            );

            if (passed) {
                setGameDone(true);
                completeCommunicationChallenge(1,2); // ✅ Notify context on success
            }

        } catch (e) {
            console.error("Gemini error:", e);
            setFeedback("❌ Error evaluating. Try again.");
        }

        setEvaluating(false);
    };

    const handlePair = () => {
        const correctPairs = [
            { starter: "I feel like…", ending: "…this project means a lot to both of us." },
            { starter: "Let’s find a way…", ending: "…we can talk this through calmly." },
            { starter: "I feel like…", ending: "…we can talk this through calmly." },
            { starter: "Let’s find a way…", ending: "…this project means a lot to both of us." },
        ];

        if (!starter || !ending) return;

        const newPair = { starter, ending };
        const newPairs = [...pairs, newPair];
        setPairs(newPairs);
        setStarter(null);
        setEnding(null);

        // ✅ Create a Set of unique correct pairs from user input
        const uniqueCorrectPairs = new Set(
            newPairs
                .filter(p =>
                    correctPairs.some(cp => cp.starter === p.starter.text && cp.ending === p.ending.text)
                )
                .map(p => `${p.starter.text}__${p.ending.text}`)
        );

        if (uniqueCorrectPairs.size >= 2) {
            setFeedback("✅ Great! You built respectful, assertive sentences.");
            setTimeout(() => {
                setFeedback("");
                setStep(2);
            }, 3000);
        } else {
            const isCurrentPairValid = correctPairs.some(
                cp => cp.starter === newPair.starter.text && cp.ending === newPair.ending.text
            );

            if (!isCurrentPairValid) {
                setFeedback("❌ This sentence is not respectful or assertive enough.");
                setTimeout(() => setFeedback(""), 3000);
            }
        }
    };


    const handleToneSubmit = () => {
        const validTones = ["Calm", "Assertive"];
        const isOnlyCalmAndAssertive =
            selectedTones.length === 2 &&
            validTones.every(t => selectedTones.includes(t));

        if (isOnlyCalmAndAssertive) {
            setFeedback("✅ Great tone selection!");
            setTimeout(() => {
                setFeedback("");
                setStep(3);
            }, 2000);
        } else {
            setFeedback("❌ Please revise your tone selection to continue.");
            setTimeout(() => setFeedback(""), 2000);
        }
    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 p-6 font-sans text-gray-800 relative overflow-hidden">

            <div className="absolute top-[-50px] left-[-60px] w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
            <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 bg-yellow-300 rounded-full filter blur-2xl opacity-20 animate-pulse-slow" />

            <div className="max-w-4xl mx-auto bg-pink-50/60 p-6 rounded-3xl shadow-xl space-y-6 backdrop-blur-md border border-pink-200">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto p-8 space-y-8 border-4 border-pink-300 rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-100 via-purple-50 to-blue-100"
                >
                    <motion.h1
                        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 drop-shadow-lg pb-3"
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 1.5, -1.5, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        🎮 <span className="inline-block">Resolve It Right</span>
                    </motion.h1>
                </motion.div>

                <div className="flex justify-center">
                    <div className="text-center text-xl font-bold text-indigo-700 bg-indigo-100 px-6 py-3 rounded-full shadow-md inline-block animate-pulse border-2 border-indigo-300">
                        ⏳ Time Left: <span className="text-pink-600 tracking-wide">{formatTime(timeLeft)}</span>
                    </div>
                </div>

                {!hasStarted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto p-10 space-y-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-4 border-purple-300 rounded-[2.5rem] shadow-[0_20px_60px_rgba(255,150,200,0.3)] text-center relative overflow-hidden"
                    >
                        {/* Glowing Animated Background Blobs */}
                        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-30 animate-pulse" />
                        <div className="absolute top-[50%] left-[50%] translate-x-1/2 translate-y-1/2 w-[200px] h-[200px] bg-yellow-200 rounded-full blur-[80px] opacity-20 animate-pulse-slow" />



                        {/* Scenario Box */}
                        <motion.p
                            className="text-lg text-gray-800 leading-relaxed italic bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-md backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            🧩 You and a peer are in conflict over project credit. You feel they haven’t contributed enough,
                            but they think you’re being controlling. Your challenge is to build a message that resolves this conflict thoughtfully.
                        </motion.p>

                        {/* Start Button */}
                        <motion.button
                            onClick={() => setHasStarted(true)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.07 }}
                            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white py-3 px-10 rounded-full font-bold text-lg shadow-xl transition-all duration-300 animate-bounce-slow"
                        >
                            🚀 Start Game
                        </motion.button>
                    </motion.div>
                )}


                {hasStarted && step === 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto text-center space-y-2 border border-purple-200"
                    >
                        <motion.h2
                            className="text-4xl font-extrabold text-purple-700 animate-bounce"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            🗨️ Build a Respectful Dialogue
                        </motion.h2>




                        <p className="text-lg text-gray-800 leading-relaxed">
                            🧠 <strong>How to Play:</strong> Start by selecting a <span className="text-blue-700 font-semibold">sentence starter</span> and then a matching <span className="text-purple-700 font-semibold">ending</span>.
                        </p>

                        <p className="text-md text-indigo-700 font-medium">
                            ➕ Once you've selected both, click <span className="underline">“Add Sentence to Dialogue”</span> to build your message.
                        </p>

                        <p className="text-sm text-gray-600 italic">
                            ✅ Create at least <strong>2 respectful and assertive sentences</strong> to move to the next level. Only thoughtful combinations will be accepted!
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Starters */}
                            <div>
                                <h3 className="text-xl font-bold text-indigo-600 mb-2">🔹 Sentence Starters</h3>
                                <div className="space-y-3">
                                    {sentenceStarters.map((s) => (
                                        <motion.button
                                            key={s.text}
                                            onClick={() => setStarter(s)}
                                            whileTap={{ scale: 0.97 }}
                                            whileHover={{ scale: 1.03 }}
                                            className={`block w-full p-3 rounded-xl transition font-medium shadow-md ${starter === s
                                                ? "bg-green-200 border-2 border-green-600"
                                                : "bg-blue-100 hover:bg-blue-200"
                                                }`}
                                        >
                                            {s.text}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Endings */}
                            <div>
                                <h3 className="text-xl font-bold text-indigo-600 mb-2">🔸 Sentence Endings</h3>
                                <div className="space-y-3">
                                    {sentenceEndings.map((e) => (
                                        <motion.button
                                            key={e.text}
                                            onClick={() => setEnding(e)}
                                            whileTap={{ scale: 0.97 }}
                                            whileHover={{ scale: 1.03 }}
                                            className={`block w-full p-3 rounded-xl transition font-medium shadow-md ${ending === e
                                                ? "bg-green-200 border-2 border-green-600"
                                                : "bg-blue-100 hover:bg-blue-200"
                                                }`}
                                        >
                                            {e.text}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {feedback && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-lg font-semibold text-purple-700 mt-4"
                            >
                                {feedback}
                            </motion.div>
                        )}

                        <motion.button
                            onClick={handlePair}
                            disabled={!starter || !ending}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full font-semibold shadow-lg transition"
                        >
                            ✨ Add Sentence to Dialogue
                        </motion.button>

                        <div className="text-center ">
                            <motion.button
                                onClick={handleRestart}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg transition"
                            >
                                🔄 Restart Game
                            </motion.button>
                        </div>

                        {/* Show Added Turns */}
                        <div className="mt-1">
                            <h4 className="text-lg font-bold text-gray-700 mb-2">🧩 Your Dialogue Turns</h4>
                            <ul className="space-y-2 text-left list-disc list-inside text-gray-800">
                                {pairs.map((p, i) => (
                                    <li key={i}>
                                        {p.starter.text.replace("…", "")}{" "}
                                        {p.ending.text.replace("…", "")}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}



                {step === 2 && (
                    <div className="bg-gradient-to-br from-purple-50 via-blue-100 to-yellow-50 p-6 rounded-2xl shadow-xl max-w-3xl mx-auto text-center space-y-2 animate-fade-in-up">
                        <motion.h2
                            className="text-4xl font-extrabold text-purple-700 animate-bounce"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            🎭 Choose the Right Tone
                        </motion.h2>

                        <p className="text-lg text-gray-800">
                            Select the <span className="font-semibold text-green-600">correct</span> tones  <span className="underline"></span>  <span className="underline"></span> to proceed.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            ❌ Selecting extra or incorrect tones will prevent progress.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            {tones.map(t => (
                                <button
                                    key={t.label}
                                    onClick={() => toggleTone(t)}
                                    className={`px-4 py-2 rounded-full font-medium border transition duration-300 ease-in-out transform ${selectedTones.includes(t.label)
                                        ? 'bg-green-300 scale-105'
                                        : 'bg-yellow-100 hover:bg-yellow-200 hover:scale-105'
                                        }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {feedback && (
                            <p className={`text-center mt-3 text-md font-semibold ${feedback.includes("Great") ? 'text-green-600' : 'text-red-500'
                                }`}>
                                {feedback}
                            </p>
                        )}

                        <button
                            onClick={handleToneSubmit}
                            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-md"
                        >
                            ✅ Submit Tones
                        </button>

                        <div className="text-center mt-6">
                            <button
                                onClick={handleRestart}
                                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg transition hover:scale-105"
                            >
                                🔄 Restart Game
                            </button>
                        </div>
                    </div>
                )}



                {step === 3 && !gameDone && (
                    <div className="bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50 p-6 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6 animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-indigo-700 text-center">💬 Craft Your Final Message</h2>
                        <p className="text-lg text-center text-gray-800">
                            🧠 Use empathy and assertiveness to resolve the conflict respectfully.
                        </p>
                        <p className="text-sm text-center text-gray-600 italic">
                            🔑 Tip: Acknowledge feelings, take responsibility if needed, and suggest a way forward.
                        </p>

                        <textarea
                            rows={5}
                            className="w-full p-4 rounded-xl border-2 border-indigo-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholder="Start typing your 3–4 line closing message here..."
                            value={finalMessage}
                            onChange={(e) => setFinalMessage(e.target.value)}
                        />

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={submitFinal}
                                disabled={evaluating}
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                            >
                                {evaluating ? "⏳ Evaluating..." : "✅ Submit Message"}
                            </button>

                            <button
                                onClick={handleRestart}
                                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
                            >
                                🔄 Restart Game
                            </button>
                        </div>

                        {feedback && (
                            <div className={`text-center mt-4 text-lg font-semibold animate-fade-in ${feedback.includes("Great") ? "text-green-600" : "text-red-500"}`}>
                                {feedback}
                            </div>
                        )}
                    </div>
                )}

                {gameDone && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mt-10 bg-gradient-to-br from-green-100 via-purple-50 to-yellow-100 p-6 rounded-3xl shadow-xl max-w-xl mx-auto space-y-6"
                    >
                        <h2 className="text-4xl font-extrabold text-green-600 animate-bounce">
                            🎉 You Did It!
                        </h2>

                        <p className="text-lg font-medium text-gray-800 animate-fade-in">
                            {feedback}
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4"
                        >
                            <button
                                onClick={handleRestart}
                                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg transition-all duration-300"
                            >
                                🔄 Play Again
                            </button>
                        </motion.div>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
