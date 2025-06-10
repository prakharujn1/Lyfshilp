// Updated ListenUp with drag-and-drop support for emotions and behaviors
import React, { useState, useRef } from "react";

const audioData = [
  {
    src: "/audio1.mp3",
    emotions: ["😐", "😊", "😟"],
    correctEmotion: ["😐"],
    behaviors: ["Paying attention", "Not paying attention", "Interrupting"],
    correctBehavior: "Not paying attention",
    mcq: {
      question: "What did the speaker mean?",
      options: [
        "B wasn’t listening carefully",
        "They were excited",
        "They changed their mind",
      ],
      correct: "B wasn’t listening carefully",
    },
  },
  {
    src: "/audio2.mp3",
    emotions: ["😟", "😊", "😐"],
    correctEmotion: ["😟"],
    behaviors: ["Stern but listening", "Interrupting", "Not paying attention"],
    correctBehavior: "Stern but listening",
    mcq: {
      question: "What did the speaker mean?",
      options: [
        "She admitted it and offered a solution",
        "She got angry",
        "She refused to take responsibility",
      ],
      correct: "She admitted it and offered a solution",
    },
  },
  {
    src: "/audio3.mp3",
    emotions: ["😡", "😤", "😊"],
    correctEmotion: ["😡", "😤"],
    behaviors: ["Interrupting", "Paying attention", "Stern but listening"],
    correctBehavior: "Interrupting",
    mcq: {
      question: "What did the speaker mean?",
      options: [
        "Rohan could have acknowledged Nisha’s point",
        "They agreed on the idea",
        "Nisha didn’t listen at all",
      ],
      correct: "Rohan could have acknowledged Nisha’s point",
    },
  },
];

const Draggable = ({ text, type }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("text", text);
  };
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="cursor-move px-3 py-1 border rounded-full bg-white shadow text-sm text-center"
    >
      {text}
    </div>
  );
};

const DropZone = ({ onDrop, label, acceptedType, droppedItem }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type");
    const text = e.dataTransfer.getData("text");
    if (type === acceptedType) {
      onDrop(text);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="h-20 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50"
    >
      {droppedItem ? (
        <span className="text-lg">{droppedItem}</span>
      ) : (
        <span className="text-gray-400">Drop {label} here</span>
      )}
    </div>
  );
};

const AudioChallenge = ({ data, index }) => {
  const [droppedEmotion, setDroppedEmotion] = useState(null);
  const [droppedBehavior, setDroppedBehavior] = useState(null);
  const [selectedMCQ, setSelectedMCQ] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef(null);

  const isCorrect =
    submitted &&
    (Array.isArray(data.correctEmotion)
      ? data.correctEmotion.includes(droppedEmotion)
      : droppedEmotion === data.correctEmotion[0]) &&
    droppedBehavior === data.correctBehavior &&
    selectedMCQ === data.mcq.correct;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-xl w-full mx-auto">
      <audio ref={audioRef} controls className="w-full">
        <source src={data.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
      >
        🔁 Replay
      </button>

      <div>
        <p className="font-semibold mb-2">🎭 Drag emotion emoji to speaker:</p>
        <div className="flex gap-3 mb-2">
          {data.emotions.map((emo) => (
            <Draggable key={emo} text={emo} type="emotion" />
          ))}
        </div>
        <DropZone
          label="emotion emoji"
          acceptedType="emotion"
          onDrop={setDroppedEmotion}
          droppedItem={droppedEmotion}
        />
      </div>

      <div>
        <p className="font-semibold mb-2">
          👂 Drag listener behavior from toolbox:
        </p>
        <div className="flex gap-2 flex-wrap mb-2">
          {data.behaviors.map((b) => (
            <Draggable key={b} text={b} type="behavior" />
          ))}
        </div>
        <DropZone
          label="behavior"
          acceptedType="behavior"
          onDrop={setDroppedBehavior}
          droppedItem={droppedBehavior}
        />
      </div>

      <div>
        <p className="font-semibold mb-1">🧠 What did the speaker mean?</p>
        <div className="space-y-2">
          {data.mcq.options.map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="radio"
                name={`mcq-${index}`}
                checked={selectedMCQ === opt}
                onChange={() => setSelectedMCQ(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => setSubmitted(true)}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-3"
      >
        ✅ Submit
      </button>

      {submitted && (
        <>
          <div
            className={`mt-4 p-3 rounded-lg text-white font-semibold text-center ${
              isCorrect ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {isCorrect
              ? "🎉 Correct! Great listening!"
              : "❌ Oops! Try reviewing it again."}
          </div>

          <div className="mt-4 flex justify-center">
            <img
              src={
                isCorrect
                  ? "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2R0NnVtcm5zdnpndmpvMW14dWxpcnZydG9uejRxd2l4Z24zODhxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iDIV2HpWFYpFzZYHXL/giphy.gif"
                  : "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAwZW1kNnhucjd3cDN0em5pcXliYWsycHFrMzVoMGQ4ZnBhbmpvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UktQablEplChufziPL/giphy.gif"
              }
              alt={isCorrect ? "Correct answer" : "Wrong answer"}
              className="w-64 h-auto rounded-lg shadow-md transition-opacity duration-700"
            />
          </div>
        </>
      )}
    </div>
  );
};

const ListenUp = () => {
  return (
    <div className="py-8 px-4 bg-gray-50 min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        🎧 Listen Up! Challenge
      </h1>
      {audioData.map((clip, index) => (
        <AudioChallenge key={index} data={clip} index={index} />
      ))}
    </div>
  );
};

export default ListenUp;
