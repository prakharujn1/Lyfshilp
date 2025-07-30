import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCommunication } from "@/contexts/CommunicationContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const APIKEY = import.meta.env.VITE_API_KEY;

const FeedbackLoop = () => {
    const { completeCommunicationChallenge } = useCommunication();
    const [step, setStep] = useState(1);
    const [hasStarted, setHasStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(480); // 8 minutes
    const [finalMessage, setFinalMessage] = useState("");
    const [selectedTones, setSelectedTones] = useState([]);
    const [gameDone, setGameDone] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [evaluating, setEvaluating] = useState(false);
    //for performance
    const { updatePerformance } = usePerformance();
    const [startTime,setStartTime] = useState(Date.now());


    useEffect(() => {
        if (hasStarted && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
        if (timeLeft === 0) setStep(3);
    }, [hasStarted, timeLeft]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleRestart = () => {
        setStep(1);
        setFinalMessage("");
        setSelectedTones([]);
        setHasStarted(false);
        setTimeLeft(480);
        setGameDone(false);
        setFeedback("");
        setStartTime(Date.now());
    };

    const toggleTone = (tone) => {
        setSelectedTones((prev) =>
            prev.includes(tone) ? [] : [tone]
        );
    };

    const handleToneSubmit = () => {
        if (selectedTones.includes("Balanced") || selectedTones.includes("Constructive")) {
            setStep(3);
            setFeedback("");
        } else {
            setFeedback("❌ Try to use a different tone.");
        }
    };

    const submitFinal = async () => {
        if (!finalMessage.trim()) {
            setFeedback("⚠️ Please write your message before submitting.");
            return;
        }

        setEvaluating(true);
        setFeedback("⏳ AI is evaluating your feedback...");

        const prompt = `You are a communication coach evaluating a student's feedback to a teammate whose presentation lacked structure.

Evaluate if the feedback message includes all 3 of the following:
1. Praise – at least one specific positive observation.
2. Suggestion – at least one respectful improvement point.
3. Tone – overall tone must be constructive and balanced.

Return only a valid JSON object:
{
  "praise": true/false,
  "suggestion": true/false,
  "tone": true/false
}

❗Do not include any markdown, explanation, extra text, or commentary. Only return the JSON object.

Here is the student's feedback message:
"${finalMessage}"`;

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${APIKEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                    }),
                }
            );

            const data = await res.json();
            let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
            rawText = rawText.trim();

            // Remove markdown if AI still includes code block
            if (rawText.startsWith("```")) {
                rawText = rawText.replace(/```(?:json)?|```/g, "").trim();
            }

            const result = JSON.parse(rawText);
            const { praise, suggestion, tone } = result;
            const rawScore = [praise, suggestion, tone].filter(Boolean).length;
            const score = (rawScore / 3) * 10; // scale to 10
            const accuracy = (rawScore / 3) * 100; // scale to 100

            if (score === 3) {
                setFeedback("✅ You gave feedback like a leader—honest, helpful, and respectful.");
                setGameDone(true);
                completeCommunicationChallenge(2, 2); // ✅ Challenge complete

                const timeTaken = Math.floor((Date.now() - startTime) / 1000);

                updatePerformance({
                    moduleName: "Communication",
                    topicName: "emotionalIntelligence",
                    avgResponseTimeSec: timeTaken,
                    studyTimeMinutes: Math.ceil(timeTaken / 60),
                    completed: true,
                    score,       // out of 10
                    accuracy,    // out of 100
                });
            }
            else if (!praise) {
                setFeedback("🧠 Include at least one specific praise point before suggesting changes. Revise your message and try again.");
            } else if (!suggestion) {
                setFeedback("📌 Add a clear suggestion to help your peer improve. Revise your message and try again.");
            } else if (!tone) {
                setFeedback("⚠️ Make sure your tone is balanced and constructive. Revise your message and try again.");
            }
        } catch (error) {
            console.error("Gemini API error:", error);
            setFeedback("❌ Error evaluating feedback. Please try again.");
        } finally {
            setEvaluating(false);
        }
    };
    const tones = ["Constructive", "Harsh/Blunt", "Overly Soft", "Balanced"];


    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 p-6 text-gray-800 font-sans">
            <div className="max-w-5xl mx-auto rounded-[3rem] p-1 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 shadow-2xl">
                <div className="bg-white/50 backdrop-blur-md rounded-[3rem] px-6 sm:px-12 py-10 sm:py-14 border border-white/30">

                    <motion.h1
                        className="relative text-6xl sm:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 drop-shadow-[0_0_25px_rgba(255,180,255,0.6)] pb-5 mb-5 tracking-tight"
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 1, -1, 0], y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <span className="inline-block animate-pulse-slow"> Feedback Loop</span>

                        {/* Sparkle effect */}
                        <span className="absolute -top-4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full blur-sm animate-ping" />
                        <span className="absolute -bottom-2 right-1/4 w-3 h-3 bg-pink-400 rounded-full blur-[2px] animate-pulse" />
                    </motion.h1>
                    {hasStarted && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative text-center text-xl sm:text-2xl font-semibold text-indigo-700 mb-8 bg-white/20 backdrop-blur-md  py-3 rounded-full shadow-lg border border-white/30 flex justify-center"
                        >
                            <motion.span
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="inline-block mr-2"
                            >
                                ⏳
                            </motion.span>
                            <span className="text-gray-800">Time Left : </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 font-extrabold tracking-wide animate-pulse">
                                {" "}{formatTime(timeLeft)}
                            </span>
                        </motion.div>
                    )}


                    {!hasStarted && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative text-center space-y-8 max-w-4xl mx-auto p-10 sm:p-14 bg-white/30 backdrop-blur-xl rounded-[3rem] shadow-[0_0_60px_rgba(255,200,250,0.4)] border border-white/20"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="text-2xl sm:text-3xl font-bold text-pink-600 drop-shadow-lg"
                            >
                                Give Constructive Feedback
                            </motion.div>

                            <p className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed">
                                🎯 <strong className="text-purple-700">Task Brief:</strong> You're part of a design team. Your teammate’s presentation lacked structure. They’ve asked for your honest feedback — and you’ll receive feedback in return too. Make it <span className="underline decoration-pink-400 decoration-wavy">specific</span>, <span className="underline decoration-purple-400 decoration-wavy">respectful</span>, and <span className="underline decoration-indigo-400 decoration-wavy">helpful</span>.
                            </p>

                            <p className="text-indigo-800 text-lg font-semibold">
                                ⏱️ Estimated time: <span className="text-pink-700 font-bold">8 minutes</span>
                            </p>

                            <motion.button
                                onClick={() => setHasStarted(true)}
                                whileTap={{ scale: 0.92 }}
                                whileHover={{ scale: 1.1 }}
                                className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 animate-pulse text-white py-3 px-12 rounded-full font-extrabold text-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                🚀 Begin the Journey
                            </motion.button>
                        </motion.div>
                    )}

                    {hasStarted && step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative text-center mt-12 space-y-8 bg-white/30 backdrop-blur-xl border-[3px] border-purple-400 rounded-[3rem] p-10 sm:p-14 shadow-[0_0_40px_rgba(200,150,255,0.4)] max-w-3xl mx-auto"
                        >
                            {/* Decorative floating sparkle */}
                            <motion.div
                                className="absolute -top-3 -right-3 w-5 h-5 bg-yellow-300 rounded-full blur-md"
                                animate={{ y: [0, -6, 0], opacity: [1, 0.6, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 animate-pulse tracking-tight drop-shadow-md">
                                ✍️ Give Feedback
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-700 font-medium">
                                Share 3–4 lines of <span className="text-purple-600 font-semibold">specific</span>, <span className="text-pink-500 font-semibold">respectful</span>, and <span className="text-yellow-600 font-semibold">constructive</span> feedback.
                            </p>

                            <p className="text-md sm:text-lg text-gray-700 font-medium">
                                ✅ Your feedback should include:
                                <br />
                                <span className="text-green-600">• Praise</span> – one clear positive point,{" "}
                                <span className="text-yellow-600">• Suggestion</span> – one respectful improvement,{" "}
                                <span className="text-purple-600">• Tone</span> – keep it constructive & balanced.
                            </p>

                            <textarea
                                rows={5}
                                className="w-full rounded-2xl p-5 text-gray-800 bg-white/70 border-2 border-pink-300 focus:ring-4 focus:ring-purple-200 outline-none shadow-inner transition-all duration-200 placeholder:text-gray-500 placeholder:italic"
                                placeholder="E.g., Your visuals were great! One suggestion would be to structure your points more clearly."
                                value={finalMessage}
                                onChange={(e) => setFinalMessage(e.target.value)}
                            />

                            <motion.button
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setStep(2)}
                                disabled={finalMessage.trim().length < 20}
                                className={`px-8 py-3 text-xl font-bold text-white rounded-full shadow-xl transition-all duration-300 ${finalMessage.trim().length < 20
                                    ? "bg-green-300 cursor-not-allowed opacity-50"
                                    : "bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 hover:from-green-500 hover:to-green-600"
                                    }`}
                            >
                                ➡️ Next
                            </motion.button>


                        </motion.div>
                    )}


                    {hasStarted && step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center mt-12 space-y-8 bg-white/30 backdrop-blur-xl border-[3px] border-pink-400 rounded-[3rem] p-10 sm:p-14 shadow-[0_0_40px_rgba(255,150,200,0.3)] max-w-4xl mx-auto"
                        >
                            <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-pulse drop-shadow">
                                🎭 Choose Your Tone
                            </h2>

                            <p className="text-lg sm:text-xl text-gray-700 font-medium">
                                Pick the tone that best matches your feedback style 🎤
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {tones.map((tone) => (
                                    <motion.button
                                        key={tone}
                                        whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0] }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => toggleTone(tone)}
                                        className={`px-6 py-2 rounded-full font-semibold tracking-wide shadow-md transition-all duration-300 text-lg ${selectedTones.includes(tone)
                                            ? "bg-gradient-to-r from-green-400 to-green-500 text-white border-2 border-green-700"
                                            : "bg-yellow-100 hover:bg-yellow-200 border border-yellow-400 text-yellow-900"
                                            }`}
                                    >
                                        ✨ {tone}
                                    </motion.button>
                                ))}
                            </div>

                            {feedback && (
                                <p className="text-sm text-red-600 animate-pulse mt-2">{feedback}</p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleToneSubmit}
                                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-3 rounded-full font-extrabold text-lg shadow-xl transition-all duration-300"
                            >
                                ✅ Submit Tone
                            </motion.button>
                        </motion.div>
                    )}


                    {hasStarted && step === 3 && !gameDone && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative text-center mt-12 space-y-8 bg-white/30 backdrop-blur-xl border-[3px] border-indigo-300 rounded-[3rem] p-10 sm:p-14 shadow-[0_0_50px_rgba(150,150,255,0.3)] max-w-3xl mx-auto"
                        >
                            {/* Floating sparkles */}
                            <motion.span
                                className="absolute -top-3 left-1/3 w-4 h-4 bg-purple-300 rounded-full blur-md"
                                animate={{ y: [0, -8, 0], opacity: [0.8, 0.3, 0.8] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            />
                            <motion.span
                                className="absolute -bottom-3 right-1/4 w-3 h-3 bg-pink-400 rounded-full blur-sm"
                                animate={{ y: [0, 6, 0], opacity: [0.9, 0.4, 0.9] }}
                                transition={{ repeat: Infinity, duration: 2.5 }}
                            />

                            <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 animate-pulse drop-shadow-md">
                                🧠 Final Evaluation
                            </h2>

                            <p className="text-xl font-medium text-gray-800">
                                Let’s find out how impactful your feedback was!
                            </p>

                            <p className="text-sm sm:text-base font-semibold text-red-700 bg-red-100 border border-red-300 px-4 py-2 rounded-xl shadow-sm animate-pulse">
                                🔍 <span className="text-red-800 font-bold">AI Feedback:</span> {feedback}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <motion.button
                                    onClick={submitFinal}
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.07 }}
                                    disabled={evaluating}
                                    className={`px-10 py-3 rounded-full text-lg font-bold text-white shadow-xl transition-all duration-300 ${evaluating
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:from-green-500 hover:to-teal-600"
                                        }`}
                                >
                                    {evaluating ? "⏳ Evaluating..." : "🚀 Submit Feedback"}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.07 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleRestart}
                                    className="bg-gradient-to-r from-pink-500 via-pink-600 to-red-500 text-white px-10 py-3 rounded-full font-bold text-lg shadow-xl transition-all duration-300"
                                >
                                    Try Again
                                </motion.button>
                            </div>
                        </motion.div>
                    )}


                    {gameDone && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative text-center mt-14 space-y-8 bg-white/30 backdrop-blur-xl border-[3px] border-green-300 rounded-[3rem] p-10 sm:p-14 shadow-[0_0_60px_rgba(150,255,150,0.3)] max-w-3xl mx-auto"
                        >
                            {/* Confetti sparkles */}
                            <motion.span
                                className="absolute -top-3 left-1/3 w-4 h-4 bg-yellow-300 rounded-full blur-md"
                                animate={{ y: [0, -8, 0], opacity: [0.8, 0.3, 0.8] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            />
                            <motion.span
                                className="absolute -bottom-3 right-1/4 w-3 h-3 bg-green-400 rounded-full blur-sm"
                                animate={{ y: [0, 6, 0], opacity: [0.9, 0.4, 0.9] }}
                                transition={{ repeat: Infinity, duration: 2.5 }}
                            />

                            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-400 to-yellow-400 animate-pulse drop-shadow-lg tracking-tight">
                                🎉 Game Complete!
                            </h2>

                            <p className="text-xl sm:text-2xl font-medium text-gray-800">
                                {feedback}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRestart}
                                className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 text-white px-10 py-3 rounded-full font-extrabold text-lg shadow-xl transition-all duration-300"
                            >
                                🔄 Play Again
                            </motion.button>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};


export default FeedbackLoop;
