import React, { useState, useEffect } from "react";
import { useEnvirnoment } from "@/contexts/EnvirnomentContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const data = [
  {
    word: "Tree",
    answer: "Natural–Biotic",
    gif: "https://media.tenor.com/Bkag3r_Z4mQAAAAM/flowers-tree.gif",
  },
  {
    word: "River",
    answer: "Natural–Abiotic",
    gif: "https://media.tenor.com/Dma9UHEYfGwAAAAM/river-flowing.gif",
  },
  {
    word: "Cow",
    answer: "Natural–Biotic",
    gif: "https://media.tenor.com/SUMGftK_TbQAAAA1/treyreloaded-cow.webp",
  },
  {
    word: "Law",
    answer: "Social",
    gif: "https://media.tenor.com/m9SmnRjYSIYAAAAM/its-law-law.gif",
  },
  {
    word: "Oxygen",
    answer: "Natural–Abiotic",
    gif: "https://media.tenor.com/qMv-5ivbt-wAAAAM/karl-homer.gif",
  },
  {
    word: "Airplane",
    answer: "Human-Made",
    gif: "https://media.tenor.com/JkW0Io_XtF8AAAAM/oops-oopsie.gif",
  },
  {
    word: "School",
    answer: "Social",
    gif: "https://media.tenor.com/gkLuHHmXB7AAAAAM/happy-takagi-san.gif",
  },
  {
    word: "Bridge",
    answer: "Human-Made",
    gif: "https://media.tenor.com/EeWpVf323qQAAAAM/death-bridge.gif",
  },
  {
    word: "Sunlight",
    answer: "Natural–Abiotic",
    gif: "https://media.tenor.com/jkMJ-1UO1AwAAAAM/sunlight-blind.gif",
  },
  {
    word: "Family",
    answer: "Social",
    gif: "https://media.tenor.com/4NBaMC5kCNoAAAAM/family-picture-happy-family.gif",
  },
  {
    word: "Road",
    answer: "Human-Made",
    gif: "https://media.tenor.com/81H156nWZJ4AAAAM/janestree.gif",
  },
  {
    word: "Fish",
    answer: "Natural–Biotic",
    gif: "https://media.tenor.com/HpnpMOG9iCMAAAAM/swimming-fish.gif",
  },
];

const categories = [
  "Natural–Biotic",
  "Natural–Abiotic",
  "Human-Made",
  "Social",
];

const ClassifyIt = () => {
  const { completeEnvirnomentChallenge } = useEnvirnoment();

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  //for performance
  const { updateEnvirnomentPerformance } = usePerformance();
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (showResult && score >= 16) {
      completeEnvirnomentChallenge(0, 0); // Mark Challenge 1, Task 1 as completed
    }
  }, [showResult, score]);

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, started]);

  const handleStart = () => {
    if (!started) {
      setStarted(true);
      setCurrentIndex(0);
      setScore(0);
      setTimeLeft(180);
      setShowResult(false);
    } else {
      setStarted(false);
    }
  };

  const handleAnswer = (selected) => {
    const isCorrect = data[currentIndex].answer === selected;
    const newScore = isCorrect ? score + 2 : score;

    if (currentIndex < data.length - 1) {
      setScore(newScore);
      setCurrentIndex((prev) => prev + 1);
    } else {
      const endTime = Date.now();
      const totalTimeSec = Math.floor((endTime - startTime) / 1000);
      const avgResponseTimeSec = totalTimeSec / data.length;
      const scaledScore = Number(((newScore / 24) * 10).toFixed(2));

      updateEnvirnomentPerformance({
        score: scaledScore,
        accuracy: (newScore / 24) * 100,
        avgResponseTimeSec,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: true,
      });

      setScore(newScore);
      setShowResult(true);
    }
  };

  const getResultGif = () => {
    const correctAnswers = score / 2;
    if (correctAnswers >= 10)
      return "https://media.tenor.com/5SduoDHxcckAAAAm/incredible-hunter-engel.webp";
    if (correctAnswers >= 8)
      return "https://media.tenor.com/oSisjPetzfoAAAAM/bayless-mister-bayless.gif";
    if (correctAnswers >= 6)
      return "https://media.tenor.com/fXwSEyXzcrcAAAAM/you-can-do-better-than-that-michael-rapaport.gif";
    return "https://media.tenor.com/YQNFjwBDZkMAAAAM/oh-poor-thing-sunny.gif";
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {!started ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            🎮 Challenge 1: Classify It!
          </h1>
          <p className="mb-4 text-gray-700">
            You’ll be given a list of 12 words. Your job is to{" "}
            <span className="font-semibold">choose the correct option</span> for
            each word.
            <br />
            <br />
            🟢 <strong>Natural–Biotic</strong>: Living natural elements
            <br />
            🔵 <strong>Natural–Abiotic</strong>: Non-living natural elements
            <br />
            🟠 <strong>Human-Made</strong>: Built by humans
            <br />
            🟣 <strong>Social</strong>: Related to society, rules, or
            institutions
            <br />
            <br />⏳ You’ll get <strong>3 minutes</strong> to play.
            <br />✅ <strong>+2 points</strong> for every correct answer.
          </p>
          <img
            src="https://media.tenor.com/ixWxoNa83roAAAAM/let%27s-start-over-shall-we-vax%27ildan.gif"
            alt="Start Game GIF"
            className="mx-auto w-64 rounded-xl mb-4"
          />
          <button
            onClick={handleStart}
            className="px-6 py-3 text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            🚀 Start Game
          </button>
        </div>
      ) : showResult ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">⏱️ Time's Up or All Done!</h2>
          <p className="text-xl mb-4">Your Score: {score} / 24</p>
          <img
            src={getResultGif()}
            alt="Result Feedback"
            className="mx-auto w-64 rounded-xl mb-4"
          />
          <button
            onClick={handleStart}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg mb-2">Time Left: {timeLeft}s</h2>
          <div className="text-xl font-semibold mb-4">
            Choose the correct option for:{" "}
            <span className="text-blue-700">{data[currentIndex].word}</span>
          </div>
          <img
            src={data[currentIndex].gif}
            alt={data[currentIndex].word}
            className="mx-auto w-64 rounded-xl mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleAnswer(cat)}
                className="p-4 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassifyIt;
