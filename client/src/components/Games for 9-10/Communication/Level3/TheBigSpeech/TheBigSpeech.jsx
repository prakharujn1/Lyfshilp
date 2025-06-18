import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function TheBigSpeech() {
  const [cause, setCause] = useState("");
  const [hook, setHook] = useState("");
  const [point1, setPoint1] = useState("");
  const [point2, setPoint2] = useState("");
  const [action, setAction] = useState("");
  const [recording, setRecording] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRef = useRef(null);
  const recRef = useRef(null);

  const startRecording = async () => {
    setRecording(null);
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    mediaRef.current = new MediaRecorder(stream);
    const chunks = [];
    mediaRef.current.ondataavailable = e => chunks.push(e.data);
    mediaRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setRecording(URL.createObjectURL(blob));
      stream.getTracks().forEach(t => t.stop());
      setIsRecording(false);
    };
    mediaRef.current.start();
    setTimeout(() => mediaRef.current.stop(), 120000); // 2 minutes max
  };

  const handleSubmit = () => {
    const partsFilled = cause && hook && point1 && point2 && action && recording;
    setFeedback(partsFilled
      ? {
          structure: "✅ Great structure!",
          clarity: "✅ Clear and focused.",
          tone: "✅ Tone feels passionate!",
          delivery: "⚡️ Nice energy on camera!",
        }
      : { warning: "Please complete all parts including recording before submitting." }
    );
  };

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-3xl shadow-2xl">
      <motion.h1 className="text-3xl font-extrabold text-center text-teal-700 mb-4" animate={{ scale: [1,1.02,1] }} transition={{ repeat: Infinity, duration: 4 }}>
        🎤 The Big Speech
      </motion.h1>

      {/* Cause Selection */}
      <label className="block mb-4 font-semibold text-teal-800">
        🌟 Choose your cause:
        <select value={cause} onChange={e => setCause(e.target.value)} className="ml-2 p-2 rounded-xl border-2 border-teal-300 bg-white shadow-inner">
          <option value="">Select...</option>
          <option value="Mental Health Week">Mental Health Week</option>
          <option value="Plastic-Free Campaign">Plastic-Free Campaign</option>
          <option value="Canteen Upgrade">Canteen Upgrade</option>
        </select>
      </label>

      {/* Structure Builder */}
      <div className="space-y-4 mb-6">
        <label className="block font-semibold text-teal-800">
          Hook (how to start):
          <select value={hook} onChange={e => setHook(e.target.value)} className="mt-1 w-full p-2 rounded-xl border-2 border-teal-300 bg-white">
            <option value="">Choose one...</option>
            <option value="Quote">Start with a quote</option>
            <option value="Story">Start with a story</option>
            <option value="Question">Start with a question</option>
          </select>
        </label>

        <label className="block font-semibold text-teal-800">Point 1:
          <input type="text" value={point1} onChange={e=>setPoint1(e.target.value)} className="block mt-1 w-full p-2 rounded-xl border-2 border-teal-300 bg-white" placeholder="Your first big idea"/>
        </label>

        <label className="block font-semibold text-teal-800">Point 2:
          <input type="text" value={point2} onChange={e=>setPoint2(e.target.value)} className="block mt-1 w-full p-2 rounded-xl border-2 border-teal-300 bg-white" placeholder="Your second big idea"/>
        </label>

        <label className="block font-semibold text-teal-800">Call to Action:
          <input type="text" value={action} onChange={e=>setAction(e.target.value)} className="block mt-1 w-full p-2 rounded-xl border-2 border-teal-300 bg-white" placeholder="What do you want listeners to do?"/>
        </label>
      </div>

      {/* Recording Section */}
      <div className="mb-6 text-center">
        <h2 className="font-bold text-teal-700 mb-2">🎥 Record your speech (max 2 mins)</h2>
        <button onClick={startRecording} disabled={isRecording} className="bg-purple-400 hover:bg-purple-500 text-white py-2 px-4 rounded-full shadow mb-4">
          {isRecording ? "🎬 Recording..." : "🎬 Start Recording"}
        </button>
        {recording && (
          <video src={recording} controls className="w-full rounded-2xl shadow-inner"/>
        )}
      </div>

      {/* Submit & Feedback */}
      <div className="text-center">
        <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full shadow text-lg">
          ✅ Submit Speech
        </button>
      </div>

      {feedback && (
        <motion.div className="mt-6 bg-white p-4 rounded-xl shadow-lg border-2 border-green-300">
          {feedback.warning ? (
            <p className="text-red-500 text-center">{feedback.warning}</p>
          ) : (
            <div className="space-y-2 text-teal-800">
              <p>{feedback.structure}</p>
              <p>{feedback.clarity}</p>
              <p>{feedback.tone}</p>
              <p>{feedback.delivery}</p>
              <button onClick={() => {
                setCause(""); setHook(""); setPoint1("");
                setPoint2(""); setAction(""); setRecording(null);
                setFeedback(null);
              }} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
                🔁 Restart
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
