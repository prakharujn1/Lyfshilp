import React, { useState, useEffect } from "react";

const cardData = {
    intro: [
        { id: 1, text: "Clubs like these already exist in top international schools.", type: "Ethos" },
        { id: 2, text: "This initiative could boost student confidence and creativity.", type: "Pathos" },
        { id: 3, text: "We’ve surveyed 120 students, and 90% showed interest.", type: "Logos" },
        { id: 4, text: "Our faculty mentor has agreed to guide the club.", type: "Ethos" },
        { id: 5, text: "Let’s build something we’re proud to leave behind.", type: "Pathos" },
    ],
    body: [
        { id: 6, text: "Many successful alumni attribute their growth to similar clubs.", type: "Ethos" },
        { id: 7, text: "This club can serve as a platform for creative expression.", type: "Pathos" },
        { id: 8, text: "70% of students voted in favor in a school poll.", type: "Logos" },
        { id: 9, text: "We already have three teachers willing to mentor.", type: "Ethos" },
        { id: 10, text: "This could help students build strong portfolios.", type: "Pathos" },
        { id: 11, text: "It aligns with NEP 2020’s emphasis on experiential learning.", type: "Logos" },
    ],
    conclusion: [
        { id: 12, text: "Together, we can build something meaningful.", type: "Pathos" },
        { id: 13, text: "The principal’s approval will unlock incredible opportunities.", type: "Ethos" },
        { id: 14, text: "Let’s innovate like top institutions worldwide.", type: "Ethos" },
        { id: 15, text: "90% participation shows strong demand.", type: "Logos" },
    ],
};

const DropZone = ({ title, cards, onDrop, section }) => {
    const allowDrop = (e) => e.preventDefault();

    const handleDrop = (e) => {
        const cardId = e.dataTransfer.getData("cardId");
        onDrop(parseInt(cardId), section);
    };

    return (
        <div className="border-4 border-dashed border-purple-300 rounded-xl p-4 min-h-[160px] bg-purple-50 shadow-inner"
            onDrop={handleDrop} onDragOver={allowDrop}>
            <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
            <ul className="space-y-2">
                {cards.map((card) => (
                    <li key={card.id} className="bg-white border border-purple-200 shadow-md rounded-lg px-4 py-2">
                        {card.text} <span className="text-xs italic text-gray-400">({card.type})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DraggableCard = ({ card }) => {
    const dragStart = (e) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    return (
        <div
            draggable
            onDragStart={dragStart}
            className="cursor-grab bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50"
        >
            {card.text}
        </div>
    );
};

export default function PersuasionGame() {
    const [selectedCards, setSelectedCards] = useState({ intro: [], body: [], conclusion: [] });
    const [submitted, setSubmitted] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(480); // 8 minutes

    useEffect(() => {
        if (!hasStarted) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [hasStarted]);


    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const handleStart = () => setHasStarted(true);


    const handleRestart = () => {
        setSelectedCards({ intro: [], body: [], conclusion: [] });
        setSubmitted(false);
        setIsSuccess(false);
        setFeedback("");
        setTimeLeft(480);
        setHasStarted(false);
    };
    const handleDrop = (cardId, section) => {
        const allCards = [...cardData.intro, ...cardData.body, ...cardData.conclusion];
        const card = allCards.find((c) => c.id === cardId);
        if (card && selectedCards[section].length < (section === "conclusion" ? 2 : 3)) {
            setSelectedCards((prev) => ({
                ...prev,
                [section]: [...prev[section], card],
            }));
        }
    };


    const getCardTypeCount = (cards) => {
        const counts = { Ethos: 0, Pathos: 0, Logos: 0 };
        cards.forEach((card) => counts[card.type]++);
        return counts;
    };


    const handleSubmit = () => {
        const intro = getCardTypeCount(selectedCards.intro);
        const body = getCardTypeCount(selectedCards.body);
        const conclusion = getCardTypeCount(selectedCards.conclusion);

        const isBalanced =
            Object.values(intro).filter(Boolean).length >= 2 &&
            Object.values(body).filter(Boolean).length >= 2 &&
            Object.values(conclusion).filter(Boolean).length >= 2;

        setSubmitted(true);
        if (isBalanced) {
            setIsSuccess(true);
            setFeedback("✅ Great balance of Ethos, Pathos, and Logos in your pitch!");
        } else {
            setFeedback("🧠 Try balancing emotion with logic and credibility to strengthen your pitch.");
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center p-10 max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-green-600 mb-4 animate-bounce">🎉 Well Done!</h2>
                <p className="text-lg text-gray-700 mb-6">
                    You've crafted a powerful and persuasive pitch with a great mix of
                    <span className="text-blue-600 font-bold"> Logos</span>,
                    <span className="text-green-600 font-bold"> Pathos</span>, and
                    <span className="text-purple-600 font-bold"> Ethos</span>!
                </p>
                <button
                    onClick={handleRestart}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg"
                >
                    🔁 Play Again
                </button>
            </div>
        );
    }

    if (timeLeft === 0 && hasStarted && !isSuccess) {
        return (
            <div className="min-h-screen  flex items-center justify-center px-4 py-10 text-white text-center">
                <div className="max-w-3xl bg-gradient-to-br from-purple-800 via-indigo-900 to-black p-10 rounded-3xl shadow-2xl border border-purple-400 animate-fade-in-up">
                    <h1 className="text-5xl font-extrabold text-yellow-300 text-center mb-6 animate-bounce transition duration-500 drop-shadow-md">
                        🎨 Persuade with Purpose!
                    </h1>
                    <h2 className="text-5xl font-extrabold text-red-400 mb-6 animate-bounce">⏰ Time’s Up!</h2>
                    <p className="text-xl text-purple-200 mb-8">
                        Oops! Your 7 minutes are over. But don’t worry — you can always try again and craft a stronger pitch! 🚀✨
                    </p>
                    <button
                        onClick={handleRestart}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
                    >
                        🔄 Try Again
                    </button>
                </div>
            </div>
        );
    }



    return (
        <div className="max-w-6xl mx-auto px-4 py-10 my-3 font-sans  relative overflow-hidden rounded-2xl shadow-2xl"
            style={{
                background: "linear-gradient(to bottom right, #2e1065, #6b21a8, #ec4899)",
                minHeight: "100vh",
            }}>            {/* Floating animated background elements */}
            <div className="absolute w-32 h-32 bg-pink-200 opacity-30 rounded-full top-10 left-5 animate-ping"></div>
            <div className="absolute w-40 h-40 bg-yellow-200 opacity-30 rounded-full bottom-10 right-10 animate-pulse"></div>

            <h1 className="text-5xl font-extrabold text-yellow-300 text-center mb-6 animate-bounce transition duration-500 drop-shadow-md">
                🎨 Persuade with Purpose!
            </h1>

            <div className="flex justify-center items-center mb-4 text-lg font-semibold text-white">
                ⏳ <span className="ml-2">Time Left:</span>
                <span
                    className={`ml-2 px-3 py-1 rounded-full font-mono transition duration-300 ${timeLeft < 60
                        ? "bg-red-400 text-white animate-pulse"
                        : "bg-green-400 text-white"
                        }`}
                >
                    {formatTime(timeLeft)}
                </span>
            </div>

            {!hasStarted ? (
                <div className="text-center space-y-6 animate-fade-in-up">
                    <p className="text-lg text-yellow-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
                        📣 Your class wants to propose a <strong className="text-pink-300">fun new club</strong> to the Principal.
                        Build your pitch using three powerful tools:
                        <br />
                        <span className="text-blue-300 font-bold">Ethos</span> (trust),{" "}
                        <span className="text-green-300 font-bold">Pathos</span> (feelings), and{" "}
                        <span className="text-yellow-300 font-bold">Logos</span> (logic)! 🧠❤️📊
                    </p>

                    <div className="bg-gradient-to-br from-purple-100 to-blue-50 border-4 border-purple-300 text-purple-800 p-6 rounded-3xl shadow-xl max-w-3xl mx-auto">
                        <p className="font-bold mb-3 text-xl">🎮 How to Play</p>
                        <ul className="text-left text-md space-y-2">
                            <li>🧩 Drag & drop cards into <b>Intro</b>, <b>Body</b>, and <b>Conclusion</b> zones</li>
                            <li>🎯 Pick:
                                <ul className="ml-6 list-disc list-inside">
                                    <li>3 cards for Introduction</li>
                                    <li>3 cards for Body</li>
                                    <li>2 cards for Conclusion</li>
                                </ul>
                            </li>
                            <li>🔍 Each card hides a secret strategy!</li>
                            <li>🎯 Try to mix <b>Ethos</b>, <b>Pathos</b>, and <b>Logos</b> 🎉</li>
                            <li>⏰ You’ll have <b>7 minutes</b> to complete the challenge!</li>
                        </ul>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-xl shadow-lg text-yellow-800 font-semibold">

                        💡 <strong>Tip:</strong> Drag cards carefully and build a persuasive pitch!
                    </div>

                    <button
                        onClick={handleStart}
                        className="mt-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 hover:scale-105 transition transform duration-300 text-white font-extrabold px-8 py-3 rounded-full shadow-lg text-xl"
                    >
                        🚀 Start Challenge
                    </button>
                </div>
            ) : (
                <div className="space-y-8 animate-fade-in-up ">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in">
                        <div className="rounded-2xl bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 p-4 shadow-2xl border-4 border-white animate-glow">
                            <p className="text-center text-purple-800 text-sm font-semibold mb-2 animate-bounce-slow">
                                🎈 Drag and drop your cards here!
                            </p>
                            <DropZone
                                title="🎯 Introduction (Pick 3 Cards)"
                                cards={selectedCards.intro}
                                onDrop={handleDrop}
                                section="intro"
                            />
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-green-100 via-blue-100 to-indigo-200 p-4 shadow-2xl border-4 border-white animate-glow">
                            <p className="text-center text-purple-800 text-sm font-semibold mb-2 animate-bounce-slow">
                                🎈 Drag and drop your cards here!
                            </p>
                            <DropZone
                                title="📚 Body (Pick 3 Cards)"
                                cards={selectedCards.body}
                                onDrop={handleDrop}
                                section="body"
                            />
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 p-4 shadow-2xl border-4 border-white animate-glow">
                            <p className="text-center text-purple-800 text-sm font-semibold mb-2 animate-bounce-slow">
                                🎈 Drag and drop your cards here!
                            </p>
                            <DropZone
                                title="🎬 Conclusion (Pick 2 Cards)"
                                cards={selectedCards.conclusion}
                                onDrop={handleDrop}
                                section="conclusion"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="text-yellow-200 bg-yellow-600/20 px-4 py-2 rounded-lg font-medium w-full sm:w-auto text-sm text-center shadow-md">
                            💡 Tip: Mix Ethos, Pathos, and Logos for a powerful pitch!
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold text-yellow-300 mb-4 drop-shadow-lg animate-pulse">🎴 Available Cards</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {[...cardData.intro, ...cardData.body, ...cardData.conclusion]
                                .filter((card) =>
                                    !Object.values(selectedCards).some((section) =>
                                        section.find((c) => c.id === card.id)
                                    )
                                )
                                .map((card) => (
                                    <div
                                        key={card.id}
                                        draggable
                                        onDragStart={(e) => e.dataTransfer.setData("cardId", card.id)}
                                        className="cursor-grab bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-200 p-4 rounded-xl shadow-xl border-2 border-white hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out text-gray-800 font-semibold text-sm sm:text-base animate-float"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">🃏</span>
                                            <span>{card.text}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>


                    <div className="text-center">
                        <button
                            onClick={handleSubmit}
                            className="mt-6 bg-gradient-to-r from-emerald-400 to-green-600 hover:scale-105 transition transform duration-300 text-white font-bold px-6 py-3 rounded-full shadow-lg text-lg"
                        >
                            ✅ Submit My Pitch
                        </button>
                        <button
                            onClick={handleRestart}
                            className="ml-4 bg-gradient-to-r from-rose-400 to-pink-500 hover:scale-105 transition transform duration-300 text-white font-bold px-6 py-3 rounded-full shadow-lg text-lg"
                        >
                            🔄 Start Over
                        </button>

                        {submitted && (
                            <p className="mt-4 text-xl text-yellow-200 font-semibold">{feedback}</p>
                        )}
                    </div>
                </div>

            )}
        </div>
    );
}