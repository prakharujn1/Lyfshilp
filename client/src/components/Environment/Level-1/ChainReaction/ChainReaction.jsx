import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEnvirnoment } from "@/contexts/EnvirnomentContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance


const puzzles = [
  {
    cause: "Cutting down forests",
    correctOrder: [
      "Loss of tree cover",
      "Soil erosion",
      "Crop failure and desertification",
    ],
    gif: "https://media.tenor.com/tXfMQNcuTJUAAAAM/cutting-trees-david-attenborough.gif",
  },
  {
    cause: "Dumping industrial waste into rivers",
    correctOrder: [
      "Water pollution",
      "Death of aquatic life",
      "Unsafe drinking water and health hazards",
    ],
    gif: "https://media.tenor.com/j8YtPmnfWJQAAAAM/sewage-dump-waste.gif",
  },
  {
    cause: "Burning fossil fuels in vehicles and factories",
    correctOrder: [
      "Air pollution",
      "Greenhouse gas buildup",
      "Global warming and climate change",
    ],
    gif: "https://media.tenor.com/lqH6tWZJ3LAAAAAM/stop-finding-fossil-fuels-rising-temperatures.gif",
  },
  {
    cause: "Excessive use of plastic",
    correctOrder: [
      "Waste accumulation in landfills",
      "Soil and water contamination",
      "Harm to animals and marine life",
    ],
    gif: "https://media.tenor.com/vrH8ZqK1fPQAAAA1/every-year-we-consume-1-trillion-one-time-use-plastic-bags.-they%27re-choking-life-on-land-air-%26-water.-paper-bags-take-an-average-of-one-month-to-decompose.-the-choice-is-unrivalled..webp",
  },
  {
    cause: "Overgrazing by cattle",
    correctOrder: [
      "Vegetation loss",
      "Soil degradation",
      "Reduced land fertility and productivity",
    ],
    gif: "https://media.tenor.com/5RHDXtEpJOMAAAAM/gates-open-moo.gif",
  },
];

function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-yellow-100 p-3 mb-2 rounded shadow cursor-move"
    >
      {id}
    </li>
  );
}

const ChainReaction = () => {
  const { completeEnvirnomentChallenge } = useEnvirnoment();

  const [showStart, setShowStart] = useState(true);
  const [current, setCurrent] = useState(0);
  const [userOrder, setUserOrder] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  //for performance
  const { updateEnvirnomentPerformance } = usePerformance();
  const [startTime] = useState(Date.now());

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    if (showResult && score >= 20) {
      completeEnvirnomentChallenge(0, 2); // Mark Challenge 3, Task 1 as completed
    }
  }, [showResult, score]);

  useEffect(() => {
    if (!showStart && !showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleSubmit();
    }
  }, [timeLeft, showStart, showResult]);

  const startGame = () => {
    setUserOrder(shuffle([...puzzles[0].correctOrder]));
    setCurrent(0);
    setScore(0);
    setTimeLeft(60);
    setShowStart(false);
    setShowResult(false);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = userOrder.indexOf(active.id);
      const newIndex = userOrder.indexOf(over.id);
      setUserOrder((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleSubmit = () => {
    const isCorrect = userOrder.every(
      (item, index) =>
        item.trim().toLowerCase() ===
        puzzles[current].correctOrder[index].trim().toLowerCase()
    );
    if (isCorrect) setScore((prev) => prev + 5);

    if (current < puzzles.length - 1) {
      const next = current + 1;
      setCurrent(next);
      setUserOrder(shuffle([...puzzles[next].correctOrder]));
      setTimeLeft(60);
    } else {
      const endTime = Date.now();
      const totalTimeSec = Math.floor((endTime - startTime) / 1000);
      const avgResponseTimeSec = totalTimeSec / puzzles.length;

      const scaledScore = Number(((score / 25) * 10).toFixed(2));

      updateEnvirnomentPerformance({
        score: scaledScore,
        accuracy: (score / 25) * 100,
        avgResponseTimeSec,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: true,
      });

      setShowResult(true);
    }
  };


  const getResultFeedback = (score) => {
    if (score === 25) {
      return {
        gif: "https://media.tenor.com/5SduoDHxcckAAAAm/incredible-hunter-engel.webp",
        message: "💥 Incredible! You're a cause-effect master!",
      };
    } else if (score >= 20) {
      return {
        gif: "https://media.tenor.com/oSisjPetzfoAAAAM/bayless-mister-bayless.gif",
        message: "🔥 Great job! Just a few steps away from perfection.",
      };
    } else if (score >= 15) {
      return {
        gif: "https://media.tenor.com/fXwSEyXzcrcAAAAM/you-can-do-better-than-that-michael-rapaport.gif",
        message: "👍 You did okay — but there's room for improvement!",
      };
    } else {
      return {
        gif: "https://media.tenor.com/YQNFjwBDZkMAAAAM/oh-poor-thing-sunny.gif",
        message: "😅 Keep practicing — you'll get better!",
      };
    }
  };

  const result = getResultFeedback(score);

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      {showStart ? (
        <div>
          <img
            src="https://media.tenor.com/hd94i1zIz-8AAAAM/diana-ross-chain-reaction.gif"
            alt="Chain Reaction Intro"
            className="mx-auto rounded-lg w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">
            🔹 Challenge 3: Chain Reaction
          </h2>
          <p className="mb-1">
            Match each cause with its chain of effects in correct order.
          </p>
          <p className="mb-1">✅ +5 points per correct sequence</p>
          <p className="mb-4">⏱️ You have 1 minute to complete each puzzle!</p>
          <button
            onClick={startGame}
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Start Game
          </button>
        </div>
      ) : !showResult ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            🔹 Challenge 3: Chain Reaction
          </h2>
          <p className="mb-2 text-lg">
            🧩 Arrange the effects of the cause logically.
          </p>
          <p className="mb-4">🔥 Score: +5 for each correct sequence</p>
          <h3 className="text-xl font-semibold mb-2">
            Cause: {puzzles[current].cause}
          </h3>
          <img
            src={puzzles[current].gif}
            alt="Cause GIF"
            className="mx-auto mb-4 rounded-lg w-full max-w-sm h-auto object-contain"
          />
          <p className="text-sm mb-4 text-gray-600">
            ⏱️ Time left: {timeLeft}s
          </p>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={userOrder}
              strategy={verticalListSortingStrategy}
            >
              <ul className="mb-4">
                {userOrder.map((item) => (
                  <SortableItem key={item} id={item} />
                ))}
              </ul>
            </SortableContext>
          </DndContext>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">🎉 Game Over!</h2>
          <p className="text-xl mb-2">Total Score: {score} / 25</p>
          <p className="mb-4 italic">{result.message}</p>
          <img
            src={result.gif}
            alt="Result GIF"
            className="mx-auto mb-4 rounded-lg w-full max-w-xs h-auto object-contain"
          />
          <button
            onClick={() => setShowStart(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default ChainReaction;
