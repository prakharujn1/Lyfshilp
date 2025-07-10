import React, { useState, useEffect } from "react";
import { useEnvirnoment } from "@/contexts/EnvirnomentContext";

const questions = [
  {
    question:
      "The layer that includes soil, rocks, and land where we build houses and grow food",
    answer: "Lithosphere",
  },
  {
    question:
      "The part of Earth that holds all the air and gases like oxygen and carbon dioxide",
    answer: "Atmosphere",
  },
  {
    question:
      "All water bodies – including oceans, rivers, glaciers, and lakes",
    answer: "Hydrosphere",
  },
  {
    question:
      "The zone of life — where animals, plants, and humans interact with air, water, and land",
    answer: "Biosphere",
  },
  {
    question:
      "This zone plays a key role in the water cycle and supports aquatic life",
    answer: "Hydrosphere",
  },
  {
    question:
      "This zone is directly affected by air pollution and climate change",
    answer: "Atmosphere",
  },
];

const options = [
  {
    label: "Lithosphere",
    gif: "https://media.tenor.com/0NZFSGN5PdMAAAAM/lithosphere-zeo.gif",
  },
  {
    label: "Atmosphere",
    gif: "https://media.tenor.com/fqTGOMjw2fkAAAAm/benjammins-shooting-star.webp",
  },
  {
    label: "Hydrosphere",
    gif: "https://media.tenor.com/MTznNmjf4hwAAAAM/camping-outdoors.gif",
  },
  {
    label: "Biosphere",
    gif: "https://media.tenor.com/bdOAB3OIOqQAAAAM/biosphere-the-biosphere.gif",
  },
];

const PickZone = () => {
  const { completeEnvirnomentChallenge } = useEnvirnoment();
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
  if (showResult && score >= 5) {
    completeEnvirnomentChallenge(0, 1); // Mark Challenge 2, Task 1 as completed
  }
}, [showResult, score]);


  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, started]);

  const handleStart = () => {
    if (!started) {
      setStarted(true);
      setCurrent(0);
      setScore(0);
      setTimeLeft(120);
      setShowResult(false);
    } else {
      setStarted(false); // Go back to intro screen
    }
  };

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResultGif = () => {
    if (score >= 5) {
      return "https://media.tenor.com/5SduoDHxcckAAAAm/incredible-hunter-engel.webp";
    } else if (score === 4) {
      return "https://media.tenor.com/oSisjPetzfoAAAAM/bayless-mister-bayless.gif";
    } else if (score === 3) {
      return "https://media.tenor.com/fXwSEyXzcrcAAAAM/you-can-do-better-than-that-michael-rapaport.gif";
    } else {
      return "https://media.tenor.com/YQNFjwBDZkMAAAAM/oh-poor-thing-sunny.gif";
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      {!started ? (
        <div>
          <img
            src="https://media.tenor.com/ixWxoNa83roAAAAM/let%27s-start-over-shall-we-vax%27ildan.gif"
            alt="Let's start"
            className="mx-auto w-48 mb-4 rounded-xl"
          />
          <h2 className="text-2xl font-bold mb-4">
            🔹 Challenge 2: Pick the Zone
          </h2>
          <p className="mb-2">
            🧠 Match each environment description to its correct zone.
          </p>
          <p className="mb-2">✅ +1 point per correct match</p>
          <p className="mb-4">⏱️ You have 2 minutes to complete all 6!</p>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
          >
            Start Game
          </button>
        </div>
      ) : showResult ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">🎉 Game Over!</h2>
          <p className="text-xl mb-2">Your Score: {score} / 6</p>
          <img
            src={getResultGif()}
            alt="result"
            className="mx-auto mt-4 rounded-xl"
          />
          <button
            onClick={handleStart}
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg mb-2">⏱️ Time Left: {timeLeft}s</h2>
          <p className="text-lg mb-4 font-semibold">
            {questions[current].question}
          </p>
          <div className="grid grid-cols-1 gap-4">
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt.label)}
                className="flex items-center gap-4 bg-blue-100 hover:bg-blue-200 p-3 rounded-lg"
              >
                <img
                  src={opt.gif}
                  alt={opt.label}
                  className="w-16 h-16 rounded-xl"
                />
                <span className="text-sm font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PickZone;
