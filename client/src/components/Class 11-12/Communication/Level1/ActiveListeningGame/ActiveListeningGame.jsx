import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";
import { useCommunication } from "@/contexts/CommunicationContext";

const APIKEY = import.meta.env.VITE_API_KEY;

const emotionOptions = [
    "Angry",
    "Embarrassed",
    "Anxious",
    "Frustrated",
    "Disappointed",
    "Confident",
];

const correctEmotions = ["Anxious", "Frustrated", "Disappointed"];
const concernKeywords = [
    "overwhelmed",
    "missed",
    "vendor",
    "help",
    "support",
    "reorganize",
    "redistribute",
    "tasks",
    "team",
    "logistics",
    "too much",
    "need assistance",
];

export default function ActiveListeningGame() {
    const { completeCommunicationChallenge } = useCommunication();
    const [step, setStep] = useState(1);
    const [concerns, setConcerns] = useState("");
    const [selectedEmotions, setSelectedEmotions] = useState([]);
    const [response, setResponse] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [timeLeft, setTimeLeft] = useState(7 * 60); // 7 minutes in seconds
    const [timeUp, setTimeUp] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    // Timer countdown effect
    useEffect(() => {
  if (step === 1 && gameStarted && !timeUp) {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }
}, [step, gameStarted, timeUp]);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };


    const toggleEmotion = (emotion) => {
        setSelectedEmotions((prev) =>
            prev.includes(emotion)
                ? prev.filter((e) => e !== emotion)
                : prev.length < 3
                    ? [...prev, emotion]
                    : prev
        );
    };

    const handleNextFromAudio = () => setStep(2);

    const handleQ1Submit = () => {
        const text = concerns.toLowerCase();
        const matches = concernKeywords.filter((word) => text.includes(word));
        if (matches.length >= 2) {
            setFeedback(null);
            setStep(3);
        } else {
            setFeedback("⚠️ Try to include at least two specific concerns Riya expressed.");
        }
    };

    const handleQ2Submit = () => {
        const isAllCorrect =
            selectedEmotions.length === 3 &&
            selectedEmotions.every((e) => correctEmotions.includes(e));
        if (isAllCorrect) {
            setFeedback("🎯 Great job listening actively!");
            setStep(4);
        } else {
            setFeedback("⚠️ Please select exactly 3 emotions that best reflect Riya’s feelings.");
        }
    };

    const handleSubmit = async () => {
        if (!response.trim()) {
            setFeedback("⚠️ Please enter your response before submitting.");
            return;
        }

        setFeedback("⏳ Evaluating with Gemini...");
        setLoading(true);

        const prompt = `You are evaluating a student’s short written response to their teammate Riya, who feels overwhelmed and is asking for help managing school event tasks.

The response should demonstrate:
1. Empathy – acknowledging Riya’s feelings (e.g., “Thanks for being honest”, “I understand it’s been a lot”)
2. Supportive action – suggesting help or collaboration (e.g., “Let’s reorganize things”, “I’ll help with the vendor coordination”)
3. A non-judgmental tone – avoiding blame or criticism

Return only a valid JSON object in this format:
{
  "empathy": true/false,
  "action": true/false,
  "nonBlamingTone": true/false
}

Rules:
- Do NOT include markdown, explanation, or anything outside the JSON.
- Only return a plain JSON object. No extra text.

Here is the student’s response:
"${response}"`;

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIKEY}`,
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
            if (rawText.startsWith("```")) {
                rawText = rawText.replace(/```(?:json)?|```/g, "").trim();
            }

            const result = JSON.parse(rawText);
            const { empathy, action, nonBlamingTone } = result;
            const score = [empathy, action, nonBlamingTone].filter(Boolean).length;

            if (score === 3) {
                setFeedback("🎉 Great job listening actively!");
                completeCommunicationChallenge(0,1);
                setShowConfetti(true);
                setStep(5);
            } else if (!empathy) {
                setFeedback("🧠 Try to reword your reply with more empathy and support.");
            } else if (!action) {
                setFeedback("✅ You captured the emotions correctly, but try offering a clearer action step.");
            } else {
                setFeedback("🧠 Try to reword your reply with more empathy and support.");
            }
        } catch (error) {
            console.error(error);
            setFeedback("❌ Something went wrong while evaluating your response.");
        } finally {
            setLoading(false);
        }
    };

    const handleRestart = () => {
        setStep(1);
        setConcerns("");
        setSelectedEmotions([]);
        setResponse("");
        setFeedback(null);
        setShowConfetti(false);
        setLoading(false);
        setTimeLeft(7 * 60);
        setTimeUp(false);
    };
    if (timeUp) {
        return (
            <motion.div
                className="text-center p-6 bg-red-50 rounded-2xl shadow-xl space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 className="text-3xl font-bold text-red-600">⏰ Time's Up!</h2>
                <p className="text-lg text-gray-700 font-medium">
                    Don’t worry — you can try again and support Riya with your best response! 💪
                </p>
                <Button
                    onClick={handleRestart}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                >
                    🔁 Try Again
                </Button>
            </motion.div>
        )
    }

    return (
        <div className="relative min-h-screen px-6 py-10 bg-gradient-to-br from-white via-blue-100 to-blue-200 text-gray-800 overflow-hidden font-sans">
            <div className="absolute w-40 h-40 bg-white opacity-30 rounded-full animate-pulse top-10 left-10"></div>
            <div className="absolute w-60 h-60 bg-white opacity-20 rounded-full animate-pulse top-20 right-20"></div>
            <div className="absolute w-32 h-32 bg-white opacity-25 rounded-full animate-pulse bottom-10 left-1/3"></div>
            {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}
            <div className="relative max-w-4xl mx-auto bg-white border-4 border-blue-300 rounded-[2rem] shadow-2xl p-8">


                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-8"
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl font-extrabold text-purple-700 drop-shadow mb-4"
                        animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        🎧 Listen Like a Leader
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        You’re managing a school event. Your teammate <span className="font-semibold text-purple-600">Riya</span> has sent a voice message. <br className="hidden sm:block" />
                        Listen closely and respond like a <span className="text-pink-500 font-semibold">supportive leader</span>.
                    </motion.p>



                    <motion.div
                        className="mt-4 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-150" />
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300" />
                    </motion.div>

                    <motion.div
                        className="text-center text-lg sm:text-xl font-semibold mb-5 mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 via-white to-pink-100 shadow-md border border-purple-200">
                            <span className="text-purple-700">⏳ Time Left:</span>{" "}
                            <span
                                className={`ml-2 font-extrabold tracking-wide text-transparent bg-clip-text ${timeLeft < 60
                                    ? "bg-gradient-to-r from-red-500 to-red-700 animate-pulse"
                                    : "bg-gradient-to-r from-green-400 to-green-600"
                                    }`}
                            >
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </motion.div>
                </motion.div>


                <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-6">
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center space-y-6"
                        >
                            {!gameStarted ? (
                                <motion.div
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-3xl font-extrabold text-purple-700">🎯 Active Listening Challenge</h2>
                                    <p className="text-lg text-gray-600">Click to begin and support your teammate Riya with care!</p>
                                    <Button
                                        onClick={() => setGameStarted(true)}
                                        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all hover:scale-105"
                                    >
                                        ▶️ Start Game
                                    </Button>
                                </motion.div>
                            ) : (
                                <>
                                    <motion.div
                                        className="relative p-6 bg-white rounded-3xl shadow-2xl border-4 border-purple-200"
                                        initial={{ scale: 0.95 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.2, type: "spring" }}
                                    >
                                        <h3 className="text-2xl font-bold text-purple-700 mb-4 animate-pulse">
                                            🎙️ Incoming Voice Note From Riya
                                        </h3>
                                        <motion.div
                                            className="relative rounded-xl overflow-hidden ring-4 ring-pink-200"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <audio
                                                controls
                                                className="w-full bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-xl shadow-inner"
                                            >
                                                <source src="./voices/level1_challenge2.mp3" type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <Button
                                            onClick={handleNextFromAudio}
                                            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
                                        >
                                            ✅ Ready for the Next Step
                                        </Button>
                                    </motion.div>
                                </>
                            )}
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <motion.h2
                                className="text-2xl sm:text-3xl font-extrabold text-purple-700 text-center"
                                animate={{ scale: [1, 1.05, 1], color: ["#7c3aed", "#9333ea", "#7c3aed"] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                            >
                                📝 Q1: What are the key concerns Riya is expressing?
                            </motion.h2>

                            <motion.textarea
                                className="w-full p-4 border-2 border-purple-300 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-200 bg-gradient-to-br from-white to-purple-50 text-gray-800 placeholder-purple-400 font-medium"
                                rows={4}
                                maxLength={300}
                                placeholder="✨ Write up to 3 sentences capturing what’s worrying Riya..."
                                value={concerns}
                                onChange={(e) => setConcerns(e.target.value)}
                                whileFocus={{ scale: 1.01 }}
                            />

                            <div className="flex justify-center gap-4">
                                <motion.button
                                    onClick={handleQ1Submit}
                                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-2 rounded-full text-lg font-bold shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    ✅ Next
                                </motion.button>

                                <motion.button
                                    onClick={handleRestart}
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    🔁 Listen Again
                                </motion.button>
                            </div>
                        </motion.div>
                    )}


                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <motion.h2
                                className="text-2xl sm:text-3xl font-extrabold text-purple-700 text-center"
                                animate={{ scale: [1, 1.05, 1], color: ["#9333ea", "#a855f7", "#9333ea"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🧠 Q2: What emotions is Riya expressing?
                            </motion.h2>

                            <p className="text-center text-sm text-gray-600 mb-4 italic">
                                (Choose exactly <span className="font-semibold text-purple-500">3 emotions</span> you think Riya is feeling)
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {emotionOptions.map((emotion) => (
                                    <motion.button
                                        key={emotion}
                                        onClick={() => toggleEmotion(emotion)}
                                        whileHover={{ scale: 1.1 }}
                                        className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 shadow-sm 
            ${selectedEmotions.includes(emotion)
                                                ? "bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-lg"
                                                : "bg-white text-purple-700 border-purple-200 hover:bg-purple-50"
                                            }`}
                                    >
                                        {emotion}
                                    </motion.button>
                                ))}
                            </div>

                            <div className="text-center space-x-4 mt-6">
                                <motion.button
                                    onClick={handleQ2Submit}
                                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-2 rounded-full text-lg font-bold shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    ✅ Next
                                </motion.button>

                                <motion.button
                                    onClick={handleRestart}
                                    className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    🔁 Listen Again
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <motion.h2
                                className="text-2xl sm:text-3xl font-extrabold text-purple-700 text-center"
                                animate={{ scale: [1, 1.05, 1], color: ["#9333ea", "#a855f7", "#9333ea"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💬 Q3: Show Your Leadership Voice
                            </motion.h2>

                            <p className="text-center text-xl sm:text-2xl text-purple-800 font-semibold mb-3 leading-relaxed">
                                💬 Show Riya you <span className="text-pink-600 underline underline-offset-4 font-bold">understand</span> her feelings — and offer a way to help her move forward with confidence.
                            </p>
                            <p className="text-center text-base text-gray-600 italic mb-2">
                                ✍️ Keep your response thoughtful and within 4 lines.
                            </p>

                            <motion.textarea
                                className="w-full p-4 border-2 border-purple-200 focus:border-purple-400 rounded-2xl shadow-inner text-gray-700 focus:outline-none transition duration-300 bg-gradient-to-br from-white via-purple-50 to-pink-50 placeholder:text-purple-300 font-medium"
                                rows={4}
                                maxLength={400}
                                placeholder="Respond in 3–4 thoughtful lines..."
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                                whileFocus={{ scale: 1.02 }}
                            />

                            <div className="text-center space-x-4">
                                <motion.button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-2 rounded-full text-lg font-bold shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {loading ? "⏳ Evaluating..." : "🚀 Submit"}
                                </motion.button>

                                <motion.button
                                    onClick={handleRestart}
                                    className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    🔁 Listen Again
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                    {step === 5 && (
                        <motion.div
                            className="text-center space-y-6 py-8 bg-gradient-to-br from-green-50 via-white to-pink-50 rounded-3xl  "
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                        >
                            <motion.h2
                                className="text-4xl font-extrabold text-green-600 tracking-wide"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                🌟 You did it!
                            </motion.h2>

                            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
                                Your response showed <span className="text-pink-500 font-semibold underline underline-offset-4">real empathy</span>,
                                <span className="text-purple-500 font-semibold"> strong support</span>, and
                                <span className="text-blue-500 font-semibold"> thoughtful leadership</span>. Riya would feel truly
                                <span className="text-green-600 font-bold"> cared for</span>. 💖
                            </p>

                            <motion.div
                                className="flex justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={handleRestart}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg shadow-lg"
                                >
                                    🔁 Restart Challenge
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}


                    {feedback && step !== 5 && (
                        <motion.div
                            className="text-center text-lg font-semibold text-purple-700 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {feedback}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
