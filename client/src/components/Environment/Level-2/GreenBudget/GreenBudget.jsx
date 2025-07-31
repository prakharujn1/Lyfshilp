import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useEnvirnoment } from "@/contexts/EnvirnomentContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const questions = [
  {
    id: 1,
    scenario:
      "Your school wants to reduce its environmental footprint. Pick 3 items.",
    items: [
      { name: "Solar light", cost: 250 },
      { name: "Compost bin", cost: 150 },
      { name: "Poster printouts", cost: 100 },
      { name: "Plastic dustbins", cost: 100 },
      { name: "Cloth banners", cost: 150 },
      { name: "Packaged water bottles", cost: 100 },
    ],
    correctCombos: [
      {
        combo: ["Solar light", "Compost bin", "Poster printouts"],
        score: 5,
        feedback: "+5 → Perfect eco-wise picks! Well done.",
      },
      {
        combo: ["Cloth banners", "Compost bin", "Poster printouts"],
        score: 5,
        feedback: "+5 → Perfect eco-wise picks! Well done.",
      },
    ],
  },
  {
    id: 2,
    scenario: "Design a 'green corner' for your classroom.",
    items: [
      { name: "Indoor plant set", cost: 150 }, // corrected cost
      { name: "Educational eco-posters", cost: 100 },
      { name: "Plastic plant holders", cost: 100 },
      { name: "LED study lamp", cost: 250 },
      { name: "Disposable cups", cost: 100 },
    ],
    correctCombos: [
      {
        combo: [
          "LED study lamp",
          "Educational eco-posters",
          "Indoor plant set",
        ],
        score: 5,
        feedback: "+5 → Great mix of energy-saving, education & greenery!",
      },
      {
        combo: [
          "Indoor plant set",
          "Educational eco-posters",
          "Plastic plant holders",
        ],
        score: 2,
        feedback: "+2 → Good attempt but plastic used — can be improved!",
      },
    ],
  },
  {
    id: 3,
    scenario: "Reduce waste at your school canteen.",
    items: [
      { name: "Steel utensils", cost: 200 },
      { name: "Paper straws", cost: 100 },
      { name: "Plastic cutlery", cost: 100 },
      { name: "Compost bin", cost: 150 },
      { name: "Promotional balloons", cost: 100 },
    ],
    correctCombos: [
      {
        combo: ["Steel utensils", "Compost bin", "Paper straws"],
        score: 5,
        feedback: "+5 → Perfect zero-waste picks!",
      },
    ],
  },
];

export default function GreenBudgetGame() {
  const { completeEnvirnomentChallenge } = useEnvirnoment();

  const [step, setStep] = useState("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState([]);
  const [warning, setWarning] = useState("");
  const [score, setScore] = useState(0);
  const [scenarioScore, setScenarioScore] = useState(null);
  const [scenarioFeedback, setScenarioFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(180);

  const [gifUrl, setGifUrl] = useState("");
  const { width, height } = useWindowSize();

  //for performance
  const { updatePerformance } = usePerformance();
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (step === "end" && score >= 12) {
      completeEnvirnomentChallenge(1, 0); // Mark Challenge 4, Task 1 as completed
    }
  }, [step, score]);

  useEffect(() => {
    if (step === "end") {
      const endTime = Date.now();
      const totalTimeSec = Math.floor((endTime - startTime) / 1000);
      const avgResponseTimeSec = totalTimeSec / questions.length;
      const scaledScore = Number(((score / 15) * 10).toFixed(2));

      updatePerformance({
        moduleName: "Environment",
        topicName: "ecoDecisionMaker",
        score: scaledScore,
        accuracy: (score / 15) * 100,
        avgResponseTimeSec,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: score >= 12, // mark as completed if score is good
      });
      setStartTime(Date.now());
    }
  }, [step]);


  useEffect(() => {
    if (step === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      setStep("end");
    }
  }, [timeLeft, step]);

  const startGame = () => {
    setStep("playing");
    setCurrentQ(0);
    setSelected([]);
    setScore(0);
    setScenarioScore(null);
    setScenarioFeedback("");
    setTimeLeft(180);
    setGifUrl("");
  };

  const toggleItem = (item) => {
    const alreadySelected = selected.find((i) => i.name === item.name);
    let newSelected = [];
    if (alreadySelected) {
      newSelected = selected.filter((i) => i.name !== item.name);
    } else {
      if (selected.length >= 3) {
        showWarning("You can only select 3 items!");
        return;
      }
      newSelected = [...selected, item];
    }
    const totalCost = newSelected.reduce((sum, i) => sum + i.cost, 0);
    if (totalCost > 500) {
      showWarning("Total cost must not exceed ₹500!");
      return;
    }
    setSelected(newSelected);
  };

  const showWarning = (msg) => {
    setWarning(msg);
    setTimeout(() => setWarning(""), 1500);
  };

  const checkScore = () => {
    const question = questions[currentQ];
    const selectedNames = selected.map((i) => i.name).sort();
    for (const { combo, score: qScore, feedback } of question.correctCombos) {
      if (combo.sort().join(",") === selectedNames.join(",")) {
        setScenarioScore(qScore);
        setScenarioFeedback(feedback);
        setScore((prev) => prev + qScore);
        if (qScore === 5) {
          setGifUrl(
            "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjMzZzdqazl3bjB1dTRxOXc1OHNmMHlxOWR3bHM1b20yNTB6cW9ieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8g8doOiC4thWcHRC4x/giphy.webp"
          );
        } else if (qScore === 2) {
          setGifUrl(
            "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2NoN3FlaTAzNmYzcWpveW5hMHJ1cGZwN3ptam1rbmIwaXllOW82aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xThuW2Vrx2ruC42Dcc/giphy.webp"
          );
        }
        return;
      }
    }
    setScenarioScore(0);
    setScenarioFeedback(
      "+0 → Oops! Try to pick more sustainable items next time."
    );
    setGifUrl("");
  };

  const nextQuestion = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected([]);
      setScenarioScore(null);
      setScenarioFeedback("");
      setGifUrl("");
    } else {
      setStep("end");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {step === "intro" && (
        <div>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZuNmNpaTl0MXo4MTczMWdxZ3c2MHZpeHlwamF4Zjk0OHRkc2lmZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PFbF4ISqwGZDkXYS7j/giphy.webp"
            alt="Intro Animation"
            className="mx-auto mb-4 w-48"
          />
          <h1 className="text-3xl font-bold mb-4">🌱 Green Budget Challenge</h1>
          <p className="mb-2">You have ₹500 and 3 minutes!</p>
          <p className="mb-2">
            Select 3 items for each scenario to support sustainability.
          </p>
          <p className="mb-4">
            Scoring: +5 = best, +2 = partly good, 0 = not eco-wise.
          </p>
          <button
            onClick={startGame}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Play Now
          </button>
        </div>
      )}

      {step === "playing" && (
        <div>
          <div className="flex justify-between mb-4">
            <span>⏳ Time Left: {timeLeft}s</span>
            <span>Score: {score} / 15</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">
            {questions[currentQ].scenario}
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {questions[currentQ].items.map((item) => (
              <button
                key={item.name}
                onClick={() => toggleItem(item)}
                className={`border p-2 rounded 
                ${selected.find((i) => i.name === item.name)
                    ? "bg-green-200"
                    : "bg-gray-100"
                  }
                `}
              >
                {item.name} (₹{item.cost})
              </button>
            ))}
          </div>
          <p>Total cost: ₹{selected.reduce((sum, i) => sum + i.cost, 0)}</p>
          {warning && (
            <p className="text-red-600 animate-bounce font-semibold">
              {warning}
            </p>
          )}
          {scenarioScore === null ? (
            <button
              onClick={checkScore}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              disabled={selected.length !== 3}
            >
              Submit
            </button>
          ) : (
            <div className="mt-4">
              <h3 className="text-lg font-bold">
                You scored {scenarioScore} / 5
              </h3>
              <p>{scenarioFeedback}</p>
              {gifUrl && (
                <img
                  src={gifUrl}
                  alt="Feedback GIF"
                  className="mx-auto mt-4 w-48"
                />
              )}
              <button
                onClick={nextQuestion}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {step === "end" && (
        <div>
          {score === 15 && <Confetti width={width} height={height} />}
          <h2 className="text-2xl font-bold mb-2">🏆 Game Over!</h2>
          <p className="mb-2">Your total score: {score} / 15</p>
          <img
            src={
              score === 15
                ? "https://media1.giphy.com/media/8g8doOiC4thWcHRC4x/giphy.webp"
                : score >= 12
                  ? "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2NoN3FlaTAzNmYzcWpveW5hMHJ1cGZwN3ptam1rbmIwaXllOW82aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5pUHtgG70JjO9YHZPD/giphy.webp"
                  : score >= 10
                    ? "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDVqMHc2M3NoMHd6bnJ5OWVvbWFlNmhzeHA2OWwxMGpybjVhcnUwMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H5s8aCSbI7NRyWC9Wu/giphy.webp"
                    : "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZndmZ2d2dyb2lyaDVwdWt3NnNtZDN3ZXo1YXRobGdweTBvc3hnZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VLzEYLMhEAlUydp4uW/giphy.webp"
            }
            alt="Final Result GIF"
            className="mx-auto mb-4 w-48"
          />
          <button
            onClick={() => {
              setStep("intro")
              setStartTime(Date.now());
            }
            }
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
