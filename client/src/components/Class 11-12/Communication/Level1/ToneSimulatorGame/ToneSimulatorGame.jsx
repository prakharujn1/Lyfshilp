import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCommunication } from "@/contexts/CommunicationContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const ToneSimulatorGame = () => {
    const { completeCommunicationChallenge } = useCommunication();
    const [step, setStep] = useState(0);
    const [response, setResponse] = useState("");
    const [feedback, setFeedback] = useState("");
    const [timeLeft, setTimeLeft] = useState(6 * 60);
    const [timeUp, setTimeUp] = useState(false);
    //for performance
    const { updateCommunicationPerformance } = usePerformance();
    const [startTime] = useState(Date.now());

    useEffect(() => {
        let timer;
        if (step > 0 && step < 4 && !timeUp) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setTimeUp(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [step, timeUp]);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    const handleStart = () => {
        setStep(1);
        setTimeUp(false);
        setTimeLeft(6 * 60);
        setFeedback("");
        setResponse("");
    };

    const handleRestart = () => {
        setStep(0);
        setTimeLeft(6 * 60);
        setTimeUp(false);
        setFeedback("");
        setResponse("");
    }; const handleScenario1 = (choice) => {
        if (choice === "B") {
            setFeedback("✅ Correct! Tone: Empathetic");
            setTimeout(() => {
                setFeedback("");
                setStep(2);
            }, 2000);
        } else {
            setFeedback("❌ Incorrect tone. Try again.");
            setTimeout(() => setFeedback(""), 1000);
        }
    };

    const handleScenario2 = () => {
        const cleaned = response.toLowerCase();

        const requiredKeywords = ["submit", "deadline", "report"];
        const respectfulSalutations = ["sir", "ma'am", "madam"];
        const politeStarters = ["noted", "sure", "i will", "i'll", "certainly", "of course"];

        const hasKeyword = requiredKeywords.some(kw => cleaned.includes(kw));
        const hasSalutation = respectfulSalutations.some(kw => cleaned.includes(kw));
        const hasPoliteStart = politeStarters.some(kw => cleaned.includes(kw));

        if (hasKeyword && hasSalutation && hasPoliteStart) {
            setFeedback("✅ Correct! Tone: Formal and Professional");
            setTimeout(() => {
                setFeedback("");
                setStep(3);
            }, 2000);
        } else {
            setFeedback("❌ Try again with a more formal tone and include proper polite language.");
            setTimeout(() => setFeedback(""), 1500);
        }
    };

    const handleScenario3 = (choice) => {
        if (choice === "B") {
            setFeedback("✅ Correct! Tone: Assertive and Respectful");
            setTimeout(() => {
                setFeedback("");
                setStep(4);
                completeCommunicationChallenge(0, 2);

                // ✅ Performance tracking
                const endTime = Date.now();
                const studyTimeMinutes = Math.max(1, Math.round((endTime - startTime) / 60000));
                const accuracy = 100;
                const finalScore = 10;

                updateCommunicationPerformance({
                    completed: true,
                    studyTimeMinutes,
                    score: finalScore,
                    accuracy,
                });
            }, 2000);
        } else {
            setFeedback("❌ Incorrect tone. Try again.");
            setTimeout(() => setFeedback(""), 1000);
        }
    };



    if (timeUp) {
        return (
            <div className="text-center space-y-4 p-6">
                <h2 className="text-3xl font-bold text-red-600">⏰ Time's Up!</h2>
                <p>Please try again to complete the challenge.</p>
                <button
                    onClick={handleRestart}
                    className="bg-red-500 text-white px-6 py-2 rounded-full"
                >
                    🔁 Restart
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-3xl shadow-2xl border border-purple-300 text-center space-y-4">
            <motion.h1
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: [1, 1.03, 1],
                    rotate: [0, 1, -1, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.3, 0.7, 1],
                }}
                className="text-center"
            >
                <span className="block text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
                    🎤 Choose Your Voice
                </span>
                <motion.span
                    className="block text-base sm:text-lg font-medium text-purple-500 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.8, 1] }}
                    transition={{ delay: 0.6, duration: 2, repeat: Infinity }}
                >
                    A Tone-Switching Challenge
                </motion.span>
            </motion.h1>


            <motion.div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-purple-400 bg-white shadow-md animate-fade-in-down"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <span className="text-purple-700 font-semibold text-sm tracking-wide">⏳ Time Left:</span>
                <span
                    className={`text-lg font-bold font-mono tracking-wider ${timeLeft < 60 ? "text-red-500 animate-pulse" : "text-green-600"
                        }`}
                >
                    {formatTime(timeLeft)}
                </span>
                <div
                    className={`w-3 h-3 rounded-full ${timeLeft < 60 ? "bg-red-500 animate-ping" : "bg-green-500 animate-pulse"
                        }`}
                ></div>
            </motion.div>


            {
                step === 0 && (
                    <motion.div
                        className="text-center space-y-6 py-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >


                        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            🗣️ <span className="font-semibold text-purple-600">Objective:</span> Learn how to adapt your tone based on who you’re speaking to.
                        </p>

                        <div className="bg-white p-4 rounded-3xl shadow-inner border-4 border-purple-200 text-left max-w-xl mx-auto text-gray-700 space-y-3">
                            <p className="font-semibold text-purple-700 text-lg">📋 Instructions:</p>
                            <ul className="list-disc pl-6 space-y-2 text-base">
                                <li>You’ll face 3 real-life scenarios: with a <strong>friend</strong>, a <strong>principal</strong>, and a <strong>peer in conflict</strong>.</li>
                                <li>Select or write a response that matches the right <strong>tone</strong> (casual, formal, assertive).</li>
                                <li>You must choose the <strong>correct tone</strong> to move to the next step.</li>
                                <li>You have <span className="text-pink-600 font-bold">7 minutes</span> to complete the challenge!</li>
                            </ul>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button
                                onClick={handleStart}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg transform transition hover:scale-105"
                            >
                                ▶️ Start Challenge
                            </button>
                        </motion.div>
                    </motion.div>
                )
            }


            {
                step === 1 && (
                    <motion.div
                        className="space-y-6 p-6 bg-gradient-to-br from-yellow-50 via-white to-sky-50 rounded-3xl shadow-2xl border-4 border-yellow-300"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-4xl font-extrabold text-sky-700 tracking-wide drop-shadow-sm text-center"
                            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            👫 Scenario 1: <span className="text-yellow-500">Friend</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-800 italic bg-sky-100 px-4 py-3 rounded-xl shadow-inner text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-sky-700 font-bold">Friend says:</span> “I’m so done with school. Nothing makes sense anymore.”
                        </motion.p>

                        <div className="space-y-4">
                            {[
                                {
                                    key: "A",
                                    text: "Yeah, I know right? LOL sameee.",
                                    tone: "😅 Over-casual",
                                    bg: "bg-green-50 border-green-300",
                                },
                                {
                                    key: "B",
                                    text: "That sounds rough. Want to talk about it?",
                                    tone: "💚 Empathetic",
                                    bg: "bg-green-50 border-green-300",
                                },
                                {
                                    key: "C",
                                    text: "Well, school’s important. Maybe don’t complain?",
                                    tone: "⚠️ Dismissive",
                                    bg: "bg-green-50 border-green-300",
                                },
                            ].map(({ key, text, tone, bg }) => (
                                <motion.button
                                    key={key}
                                    onClick={() => handleScenario1(key)}
                                    whileHover={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`w-full ${bg} border-2 px-6 py-4 rounded-2xl shadow-md text-left transition-all duration-300`}
                                >
                                    <div className="text-lg font-bold text-sky-700">Option {key}</div>
                                    <div className="text-gray-800 text-md">“{text}”</div>
                                    <div className="text-sm text-gray-500 mt-1 italic">{tone}</div>
                                </motion.button>
                            ))}
                        </div>

                        {feedback && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-lg font-semibold text-sky-700 mt-4"
                            >
                                {feedback}
                            </motion.div>
                        )}
                        <button
                            onClick={handleRestart}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
                        >
                            🔁 Restart Challenge
                        </button>
                    </motion.div>
                )
            }




            {
                step === 2 && (
                    <motion.div
                        className="space-y-6 bg-white rounded-3xl shadow-xl border-4 border-blue-200 p-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-2xl sm:text-3xl font-extrabold text-blue-700 text-center"
                            animate={{ scale: [1, 1.05, 1], color: ["#3b82f6", "#2563eb", "#3b82f6"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🎓 Scenario 2: Principal
                        </motion.h2>

                        <p className="text-center text-lg text-gray-700">
                            <strong className="text-blue-600">Principal says:</strong> “Please submit the final project report by 6 PM today.”
                        </p>

                        <motion.textarea
                            rows={3}
                            className="w-full p-4 border-2 border-blue-300 rounded-2xl shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-200 bg-gradient-to-br from-white to-blue-50 text-gray-800 placeholder-blue-400 font-medium"
                            placeholder="✍️ Write a formal one-line reply..."
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            whileFocus={{ scale: 1.01 }}
                        />

                        <motion.button
                            onClick={handleScenario2}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ✅ Submit
                        </motion.button>

                        <motion.p
                            className="text-center text-lg font-semibold text-blue-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {feedback}
                        </motion.p>
                        <button
                            onClick={handleRestart}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
                        >
                            🔁 Restart Challenge
                        </button>
                    </motion.div>
                )
            }


            {
                step === 3 && (
                    <motion.div
                        className="space-y-6 bg-white rounded-3xl shadow-xl border-4 border-pink-200 p-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-2xl sm:text-3xl font-extrabold text-pink-700 text-center"
                            animate={{ scale: [1, 1.05, 1], color: ["#db2777", "#ec4899", "#db2777"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🤝 Scenario 3: Peer in Conflict
                        </motion.h2>

                        <p className="text-center text-lg text-gray-700">
                            <strong className="text-pink-600">Peer says:</strong> “You took all the credit for the project in front of the teacher.”
                        </p>

                        <div className="space-y-3">
                            <motion.button
                                onClick={() => handleScenario3("A")}
                                whileHover={{ scale: 1.02 }}
                                className="w-full bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 px-4 py-2 rounded-xl text-left font-medium shadow-sm"
                            >
                                A. “Excuse me? That’s not what happened.”
                            </motion.button>

                            <motion.button
                                onClick={() => handleScenario3("B")}
                                whileHover={{ scale: 1.02 }}
                                className="w-full bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 px-4 py-2 rounded-xl text-left font-medium shadow-md"
                            >
                                B. “I’m sorry it came across that way. Let’s talk after class.”
                            </motion.button>

                            <motion.button
                                onClick={() => handleScenario3("C")}
                                whileHover={{ scale: 1.02 }}
                                className="w-full bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 px-4 py-2 rounded-xl text-left font-medium shadow-sm"
                            >
                                C. “Why are you always so dramatic?”
                            </motion.button>
                        </div>

                        <motion.p
                            className="text-center text-lg font-semibold text-pink-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {feedback}
                        </motion.p>
                        <button
                            onClick={handleRestart}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full"
                        >
                            🔁 Restart Challenge
                        </button>
                    </motion.div>
                )
            }

            {step === 4 && (
                <motion.div
                    className="text-center space-y-6 py-10 px-6 bg-gradient-to-br from-green-50 via-white to-purple-50 rounded-3xl shadow-2xl border border-green-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 animate-text-glow"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🌟 Well Done!
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        🎯 You showed strong communication awareness by choosing the right tone for each situation. That’s real leadership!
                    </motion.p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <button
                            onClick={handleRestart}
                            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg transition-transform"
                        >
                            🔁 Restart Challenge
                        </button>
                    </motion.div>
                </motion.div>
            )}

        </div >
    );
};

export default ToneSimulatorGame;
