import React, { useEffect, useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useEnvirnoment } from "@/contexts/EnvirnomentContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const introGif =
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHFwbnNuZmo0Z3prNDFiczgwdjYwdTFnbWg3dGdweHI5dGE3bzlnYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT39Db8zIOODTppk08/giphy.webp";

const gif10 =
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnBsOTFpengzNmh0MGVsMm02NnRvZW9uM3puNHI3YWJkcHB6djJ3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgEGu4jVsamVXdm/giphy.webp";

const gif8 =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZThzeTF0djRiNjVhY2dqYWt3a2Nid2ljZDA0dHl6ODVwemRyM25zNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BL9ecwY9Jb9ge5WXoC/giphy.webp";

const gif6 =
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamM1eXo3cmt0c29pcnF6bzBzcnB3Zjg3dHdvZGZsMTB2MnlnYW0zYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/I3JYewlC9EJLrSSGY9/giphy.webp";

const gif4 =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjE5ZGM1bG5pYm9uODBpaXppMm13eGIzampsNmhlc21ldDIwNDBjNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YAYDKkNMvUbVmJcYee/giphy.webp";

const initialActions = [
  { id: "1", text: "Dumping industrial waste", match: "Aquatic animal death" },
  { id: "2", text: "Plastic usage", match: "Wildlife choking" },
  { id: "3", text: "Over-mining", match: "Soil infertility" },
  { id: "4", text: "Cutting forests", match: "Loss of biodiversity" },
  {
    id: "5",
    text: "Excessive pesticide use",
    match: "Water poisoning and food chain damage",
  },
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab",
  };
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

function Droppable({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{
        background: isOver ? "#D1FAE5" : "#DBEAFE",
        padding: "12px",
        minHeight: "80px",
        marginBottom: "16px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
}

export default function MatchFallOut() {
  const { completeEnvirnomentChallenge } = useEnvirnoment();

  const [unassigned, setUnassigned] = useState(shuffle(initialActions));
  const [fallouts, setFallouts] = useState(
    shuffle(initialActions.map((a) => a.match))
  );
  const [slots, setSlots] = useState(Array(initialActions.length).fill(null));
  const [view, setView] = useState("intro");
  const [score, setScore] = useState(null);
  const { width, height } = useWindowSize();

  //for performance
  const { updatePerformance } = usePerformance();
 const [startTime,setStartTime] = useState(Date.now());

  useEffect(() => {
    if (view === "result" && score >= 8) {
      completeEnvirnomentChallenge(1, 1); // Mark Challenge 2, Task 1 as completed
    }
  }, [view, score]);

  useEffect(() => {
    if (view === "result") {
      const endTime = Date.now();
      const totalTimeSec = Math.floor((endTime - startTime) / 1000);
      const avgResponseTimeSec = totalTimeSec / 5;
      const scaledScore = Number(((score / 10) * 10).toFixed(2));

      updatePerformance({
        moduleName: "Environment",
        topicName: "ecoDecisionMaker",
        score: scaledScore,
        accuracy: (score / 10) * 100,
        avgResponseTimeSec,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: score >= 8, // Mark complete only if good score
       
      });
      setStartTime(Date.now());
    }
  }, [view]);


  const handleDragEnd = ({ active, over }) => {
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // From source to slot
    if (activeId.startsWith("action-") && overId.startsWith("slot-")) {
      const slotIdx = Number(overId.split("-")[1]);
      if (!slots[slotIdx]) {
        const dragged = unassigned.find((a) => a.id === activeId.split("-")[1]);
        const newSlots = [...slots];
        newSlots[slotIdx] = dragged;
        setSlots(newSlots);
        setUnassigned(unassigned.filter((a) => a.id !== dragged.id));
      }
    }

    // From slot back to source
    if (activeId.startsWith("slotitem-") && overId === "unassigned") {
      const slotIdx = Number(activeId.split("-")[1]);
      const dragged = slots[slotIdx];
      const newSlots = [...slots];
      newSlots[slotIdx] = null;
      setSlots(newSlots);
      setUnassigned([...unassigned, dragged]);
    }

    // Swap slots
    if (activeId.startsWith("slotitem-") && overId.startsWith("slot-")) {
      const sourceIdx = Number(activeId.split("-")[1]);
      const destIdx = Number(overId.split("-")[1]);
      const newSlots = [...slots];
      const temp = newSlots[sourceIdx];
      newSlots[sourceIdx] = newSlots[destIdx];
      newSlots[destIdx] = temp;
      setSlots(newSlots);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    slots.forEach((a, idx) => {
      if (a && a.match === fallouts[idx]) newScore += 2;
    });
    setScore(newScore);
    setView("result");
  };

  const handlePlayAgain = () => {
    setUnassigned(shuffle(initialActions));
    setFallouts(shuffle(initialActions.map((a) => a.match)));
    setSlots(Array(initialActions.length).fill(null));
    setScore(null);
    setView("intro");
    setStartTime(Date.now());
  };

  let resultGif = "";
  let resultMessage = "";

  if (score === 10) {
    resultGif = gif10;
    resultMessage = "🌟 Perfect! You're an environmental hero! 🎉";
  } else if (score === 8) {
    resultGif = gif8;
    resultMessage = "👏 Great job! Almost perfect!";
  } else if (score === 6) {
    resultGif = gif6;
    resultMessage = "😊 Good effort! Keep learning!";
  } else {
    resultGif = gif4;
    resultMessage = "😅 Keep trying! You can do better next time!";
  }

  return (
    <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-green-50">
      {view === "intro" && (
        <>
          <h1 className="text-3xl font-bold mb-4">
            🌍 Challenge 2: Match the Fallout
          </h1>
          <p className="mb-4">
            Drag each Human Action into a Fallout slot. +2 per correct match.
          </p>
          <img
            src={introGif}
            alt="Intro GIF"
            className="w-64 h-64 mb-4 rounded shadow"
          />
          <button
            onClick={() => setView("game")}
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded"
          >
            Start Game
          </button>
        </>
      )}

      {view === "game" && (
        <DndContext onDragEnd={handleDragEnd}>
          <h2 className="text-2xl font-bold mb-4">🕐 Match the Fallout</h2>
          <div className="grid grid-cols-2 gap-12 w-full max-w-5xl">
            <Droppable id="unassigned">
              <h3 className="font-semibold mb-2">🧑‍🔬 Human Actions</h3>
              {unassigned.map((a) => (
                <Draggable key={`action-${a.id}`} id={`action-${a.id}`}>
                  <div className="p-2 mb-2 bg-white border rounded shadow">
                    {a.text}
                  </div>
                </Draggable>
              ))}
            </Droppable>

            <div>
              <h3 className="font-semibold mb-2">
                🌿 Environmental Consequences
              </h3>
              {fallouts.map((f, idx) => (
                <Droppable id={`slot-${idx}`} key={idx}>
                  <p className="font-semibold mb-1">{f}</p>
                  {slots[idx] && (
                    <Draggable id={`slotitem-${idx}`}>
                      <div className="p-2 mt-2 bg-white border rounded shadow">
                        {slots[idx].text}
                      </div>
                    </Draggable>
                  )}
                </Droppable>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded"
          >
            Submit Answers
          </button>
        </DndContext>
      )}

      {view === "result" && (
        <>
          {score === 10 && <Confetti width={width} height={height} />}
          <h1 className="text-3xl font-bold mb-4">Your Score: {score} / 10</h1>
          <p className="mb-4 text-lg font-semibold">{resultMessage}</p>
          <img
            src={resultGif}
            alt="Result GIF"
            className="w-64 h-64 mb-4 rounded shadow"
          />
          <button
            onClick={handlePlayAgain}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded"
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
}
