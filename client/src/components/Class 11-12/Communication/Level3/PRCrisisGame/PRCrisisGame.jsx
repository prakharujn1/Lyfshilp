import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from '@react-hook/window-size';
import { useCommunication } from "@/contexts/CommunicationContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

import { motion } from "framer-motion";

const KidButton = ({ text, icon, onClick, active }) => (
    <button
        onClick={onClick}
        className={`transition-all duration-300 ease-in-out rounded-full px-5 py-3 text-md font-bold flex items-center justify-center gap-2 shadow-md border-2 ${active
            ? "bg-green-200 border-green-600 scale-105"
            : "bg-white hover:bg-pink-100 border-pink-300"
            } hover:shadow-lg hover:scale-105`}
    >
        <span className="text-lg">{icon}</span> {text}
    </button>
);
const PRCrisisGame = () => {
    const { completeCommunicationChallenge } = useCommunication();
    const { width, height } = useWindowSize();
    const [step, setStep] = useState(0);
    const [statement, setStatement] = useState("");
    const [decisions, setDecisions] = useState({
        reaction: null,
        tone: null,
        closing: null,
    });
    const [feedback, setFeedback] = useState(null);
    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes
    const [gameDone, setGameDone] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    //for performance
    const { updateCommunicationPerformance } = usePerformance();
    const [startTime] = useState(Date.now());


    useEffect(() => {
        const { reaction, tone, closing } = decisions;

        if (reaction && tone && closing) {
            const passed =
                reaction === "ack" &&
                tone === "professional" &&
                closing === "apology";

            setFeedback(
                passed
                    ? "✅ Great job! You handled the PR crisis with empathy and accountability."
                    : "⚠️ Not quite. Try to acknowledge, stay professional, and offer a solution."
            );

            if (passed) {
                completeCommunicationChallenge(2, 1); // ✅ Call here
                setTimeout(() => {
                    setFeedback("");
                    setStep(2); // Move to next game step
                }, 2000);
            }
        }
    }, [decisions]);


    const handleDecision = (category, choice) => {
        setDecisions((prev) => ({ ...prev, [category]: choice }));
    };

    const handleStatementSubmit = () => {
        const lower = statement.toLowerCase();

        const acknowledgeWords = [
            "sorry", "apologize", "regret", "acknowledge", "recognize", "own", "take responsibility", "mistake", "accountable"
        ];
        const empathyWords = [
            "empathy", "understand", "feel", "aware", "sensitive", "respect", "inclusive", "concern", "care", "compassion", "valuing", "listening"
        ];
        const actionWords = [
            "step", "solution", "process", "review", "improve", "plan", "change", "will", "action", "actions", "strict",
            "address", "fix", "resolve", "ensure", "prevent", "revisit", "respond", "evaluate", "commit"
        ];

        const hasAcknowledgement = acknowledgeWords.some(word => lower.includes(word));
        const hasEmpathy = empathyWords.some(word => lower.includes(word));
        const hasAction = actionWords.some(word => lower.includes(word));

        const passed = hasAcknowledgement && hasEmpathy && hasAction;

        setFeedback(
            passed
                ? "✅ Great job! Your message shows responsibility, empathy, and next steps."
                : "⚠️ Try again. Make sure your message includes: acknowledgement, empathy, and a plan of action."
        );

        if (passed) {
            const correctCount = 3;
            const scaledScore = Math.round((correctCount / 3) * 10);
            const accuracy = Math.round((correctCount / 3) * 100);
            const timeTakenSec = Math.floor((Date.now() - startTime) / 1000);

            updateCommunicationPerformance({
                score: scaledScore,
                accuracy,
                avgResponseTimeSec: timeTakenSec,
                studyTimeMinutes: Math.ceil(timeTakenSec / 60),
                completed: true,
            });
        }

        setGameDone(passed);
    };



    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const restartGame = () => {
        setStep(0);
        setHasStarted(false);
        setDecisions({ reaction: "", tone: "", closing: "" });
        setStatement("");
        setFeedback("");
        setGameDone(false);
        setTimeLeft(10 * 60);
    };

    useEffect(() => {
        if (!hasStarted || gameDone) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalId); // use intervalId instead of timer
                    setGameDone(true);
                    setFeedback("⏰ Time’s up! Try again.");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [hasStarted, gameDone]);


    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 p-6 text-gray-800 font-sans">
            <div className="max-w-5xl mx-auto rounded-[3rem] p-1 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 shadow-2xl">
                <div className="bg-white/50 backdrop-blur-md rounded-[3rem] px-6 sm:px-12 py-10 sm:py-14 border border-white/30">
                    <motion.h1
                        className="relative text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 drop-shadow-[0_3px_6px_rgba(255,100,200,0.5)] mb-3 tracking-tight"
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 1.5, -1.5, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        🎭 <span className="inline-block animate-pulse-fast">Handle a PR Crisis</span>
                        {/* Sparkles ✨ */}
                        <span className="absolute top-4 left-1/4 text-yellow-300 text-xl animate-bounce">✨</span>
                        <span className="absolute top-2 right-1/3 text-pink-200 text-2xl animate-spin-slow">🌟</span>
                        <span className="absolute bottom-3 left-[60%] text-purple-200 text-xl animate-bounce">💫</span>
                    </motion.h1>

                    <div className="flex justify-center items-center gap-6 mb-2 flex-wrap">
                        <div className="text-center text-xl font-bold text-indigo-700 bg-indigo-100 px-6 py-3 rounded-full shadow-md inline-block animate-pulse border-2 border-indigo-300  ">
                            ⏳ Time Left: <span className="text-pink-600 tracking-wide">{formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    {step === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto p-10 space-y-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-4 border-purple-300 rounded-[2.5rem] shadow-2xl text-center"
                        >
                            <p className="text-lg text-gray-800 leading-relaxed italic bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-md">
                                🎯 A social media post from your student club has unintentionally offended some students.
                                You’re the student spokesperson. The Principal asks you to post a written response.
                            </p>
                            <motion.button
                                onClick={() => {
                                    setStep(1);
                                    setHasStarted(true);
                                    setTimeLeft(10 * 60);  // Reset timer to 10 minutes
                                    setGameDone(false);    // Reset game state
                                    setFeedback("");       // Clear old feedback
                                }}

                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.07 }}
                                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 px-10 rounded-full font-bold text-lg shadow-xl transition"
                            >
                                🚀 Start Scenario
                            </motion.button>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <div className="relative max-w-4xl mx-auto space-y-8 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 p-10 rounded-[2.5rem] shadow-2xl mt-10 border-[3px] border-pink-300 backdrop-blur-md overflow-hidden">

                            {/* Glowing background blobs */}
                            <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-pink-200 opacity-30 blur-3xl rounded-full animate-pulse-slow" />
                            <div className="absolute bottom-[-30px] right-[-30px] w-36 h-36 bg-yellow-200 opacity-30 blur-2xl rounded-full animate-pulse" />
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] bg-purple-200 rounded-full blur-[80px] opacity-20 animate-pulse-slow" />

                            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 animate-bounce">
                                🎨 Let's Fix the Oopsie!
                            </h2>

                            <p className="text-center text-lg font-medium text-purple-700 bg-white/70 p-4 rounded-2xl border-l-4 border-yellow-400 shadow-lg backdrop-blur-sm">
                                🚨 A club post made some students upset. You’re the student spokesperson! 💬
                                <br className="hidden sm:block" />
                                Choose the right reaction, tone, and message to fix it with kindness and care. 💌✨
                            </p>

                            {/* 🎮 Game Steps */}
                            <div className="space-y-8">

                                {/* Step 1 */}
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-600 mb-2">1️⃣ First reaction ?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <KidButton
                                            text="Acknowledge the issue"
                                            icon="🧸"
                                            active={decisions.reaction === "ack"}
                                            onClick={() => handleDecision("reaction", "ack")}
                                        />
                                        <KidButton
                                            text="Delete the post and go silent Delete & Hide"
                                            icon="🗑️"
                                            active={decisions.reaction === "silent"}
                                            onClick={() => handleDecision("reaction", "silent")}
                                        />
                                        <KidButton
                                            text="Say “Everyone’s too sensitive these days”"
                                            icon="💥"
                                            active={decisions.reaction === "blame"}
                                            onClick={() => handleDecision("reaction", "blame")}
                                        />
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-600 mb-2">2️⃣ How should it sound?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <KidButton
                                            text="Professional, understanding"
                                            icon="🌈"
                                            active={decisions.tone === "professional"}
                                            onClick={() => handleDecision("tone", "professional")}
                                        />
                                        <KidButton
                                            text="Dismissive"
                                            icon="🥶"
                                            active={decisions.tone === "dismissive"}
                                            onClick={() => handleDecision("tone", "dismissive")}
                                        />
                                        <KidButton
                                            text="Too casual"
                                            icon="😎"
                                            active={decisions.tone === "casual"}
                                            onClick={() => handleDecision("tone", "casual")}
                                        />
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-600 mb-2">3️⃣ Closing statement</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <KidButton
                                            text="Apologize and offer next steps"
                                            icon="🛠️"
                                            active={decisions.closing === "apology"}
                                            onClick={() => handleDecision("closing", "apology")}
                                        />
                                        <KidButton
                                            text="Defend intentions"
                                            icon="🛡️"
                                            active={decisions.closing === "defend"}
                                            onClick={() => handleDecision("closing", "defend")}
                                        />
                                        <KidButton
                                            text="Blame someone else"
                                            icon="👎"
                                            active={decisions.closing === "blame"}
                                            onClick={() => handleDecision("closing", "blame")}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 📝 Feedback */}
                            {feedback && (
                                <div className="text-center text-xl font-semibold text-pink-600 mt-6 animate-fade-in">
                                    {feedback}
                                </div>
                            )}
                            <div className="text-center mt-8">
                                <button
                                    onClick={restartGame}
                                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce"
                                >
                                    🔄 Restart
                                </button>
                            </div>
                        </div>
                    )}


                    {step === 2 && !gameDone && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-3xl mx-auto space-y-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8 rounded-[2.5rem] shadow-[0_20px_60px_rgba(255,150,200,0.3)] mt-6 backdrop-blur-md border border-indigo-300 relative overflow-hidden"
                        >
                            {/* Blobs for artistic background */}
                            <div className="absolute top-[-30px] left-[-40px] w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
                            <div className="absolute bottom-[-20px] right-[-30px] w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-20 animate-pulse" />

                            {/* Title */}
                            <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow">
                                📝 Craft Your Magical Message!
                            </h2>

                            <p className="text-md text-center text-gray-700 italic">
                                ✨ Your message should show ❤️ Empathy, 🙏 Responsibility & 💡 Solutions!
                            </p>

                            {/* Textarea */}
                            <textarea
                                rows={5}
                                className="w-full p-4 rounded-2xl border-2 border-indigo-300 bg-white/80 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 transition placeholder:text-indigo-300"
                                placeholder="🌟 Write your 4–5 line response here..."
                                value={statement}
                                onChange={(e) => setStatement(e.target.value)}
                            />

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleStatementSubmit}
                                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
                                >
                                    ✅ Submit Response
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={restartGame}
                                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
                                >
                                    🔄 Start Over
                                </motion.button>
                            </div>

                            {/* Feedback */}
                            {feedback && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`text-center mt-6 text-lg font-semibold ${feedback.includes("Great") ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {feedback}
                                </motion.div>
                            )}
                        </motion.div>
                    )}


                    {gameDone && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative text-center mt-10 bg-gradient-to-br from-green-100 via-pink-50 to-yellow-100 p-8 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-3xl mx-auto space-y-6 overflow-hidden mb-2"
                        >

                            <Confetti width={width} height={height} numberOfPieces={300} recycle={false} />
                            {/* Title */}
                            <motion.h2
                                initial={{ scale: 0.95 }}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-4xl pb-3 font-extrabold bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
                            >
                                🎉 Hooray, You Did It!
                            </motion.h2>

                            {/* Feedback */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl font-semibold text-purple-800 leading-relaxed"
                            >
                                {feedback}
                            </motion.p>

                            {/* Play Again Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={restartGame}
                                className="bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
                            >
                                🔄 Play Again!
                            </motion.button>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default PRCrisisGame;
