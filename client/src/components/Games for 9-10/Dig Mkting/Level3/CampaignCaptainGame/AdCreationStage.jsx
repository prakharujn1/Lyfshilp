import React, { useState } from "react";
import { motion } from "framer-motion";

const adFormats = [
  { name: "Reel", icon: "🌀", tip: "Reels are great for engagement!" },
  { name: "Story", icon: "📸", tip: "Stories grab quick attention." },
  { name: "Carousel", icon: "📚", tip: "Carousels help tell a longer story." },
];

const visuals = [
  { id: "foam", label: "Foam Splash", emoji: "🫧" },
  { id: "before", label: "Before & After", emoji: "📊" },
  { id: "unbox", label: "Unboxing Glow", emoji: "🎁" },
  { id: "glow10", label: "Glow in 10", emoji: "⏱️" },
];

const ctas = ["Shop Now", "Glow Up Today", "Tap to Try", "Learn More"];

export default function AdCreationStage({ onComplete }) {
  const [format, setFormat] = useState(null);
  const [visual, setVisual] = useState(null);
  const [caption, setCaption] = useState("");
  const [cta, setCta] = useState(null);

  const isComplete = format && visual && caption && cta;

  return (
    <motion.div
      className="bg-pink-50 p-6 rounded-xl shadow-xl space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-center text-pink-700">
        🎨 Ad Creation Studio
      </h2>

      {/* Format Selector */}
      <div>
        <h3 className="font-semibold text-lg text-purple-700 mb-2">1️⃣ Choose Ad Format</h3>
        <div className="flex gap-4 justify-center">
          {adFormats.map((f) => (
            <motion.button
              key={f.name}
              onClick={() => setFormat(f.name)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-bold shadow border-2 transition-all duration-200 ${
                format === f.name
                  ? "bg-yellow-200 border-yellow-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {f.icon} {f.name}
            </motion.button>
          ))}
        </div>
        {format && (
          <p className="text-sm mt-2 text-center text-gray-600 italic">
            💡 {adFormats.find((f) => f.name === format).tip}
          </p>
        )}
      </div>

      {/* Visual Selector */}
      <div>
        <h3 className="font-semibold text-lg text-purple-700 mb-2">2️⃣ Pick Your Visual</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {visuals.map((v) => (
            <motion.div
              key={v.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setVisual(v)}
              className={`cursor-pointer text-center border-2 rounded-xl p-3 text-xl transition shadow ${
                visual?.id === v.id
                  ? "bg-green-100 border-green-500"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-4xl mb-2">{v.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{v.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Caption Input */}
      <div>
        <h3 className="font-semibold text-lg text-purple-700 mb-2">3️⃣ Write Your Caption</h3>
        <textarea
          maxLength={120}
          rows={2}
          placeholder="💬 Write a short, catchy caption using emojis & slang!"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full border-2 border-purple-300 rounded-lg p-3 shadow-inner text-sm"
        />
        <p className="text-xs text-gray-500 mt-1 text-right">{caption.length}/120</p>
      </div>

      {/* CTA Selector */}
      <div>
        <h3 className="font-semibold text-lg text-purple-700 mb-2">4️⃣ Select a Call to Action</h3>
        <div className="flex gap-3 flex-wrap justify-center">
          {ctas.map((c) => (
            <motion.button
              key={c}
              onClick={() => setCta(c)}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-2 rounded-full border-2 font-semibold text-sm shadow transition ${
                cta === c
                  ? "bg-indigo-200 border-indigo-500 text-indigo-800"
                  : "bg-white border-gray-300"
              }`}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Live Preview */}
      <div className="mt-4 border-t pt-4">
        <h4 className="font-bold text-md text-pink-600 mb-2">📱 Insta Ad Preview</h4>
        <div className="border rounded-xl p-4 bg-white shadow-md">
          <p className="font-semibold text-pink-700 text-lg">GlowPop</p>
          <p className="text-sm mb-2">{visual?.emoji} {visual?.label}</p>
          <p className="text-sm text-gray-700 italic">{caption || "(Your caption will appear here...)"}</p>
          <p className="text-xs text-indigo-700 mt-2">👉 {cta}</p>
        </div>
      </div>

      {/* Next Button */}
      <div className="text-center">
        <button
          className="mt-4 px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-50"
          disabled={!isComplete}
          onClick={onComplete}
        >
          🚀 Launch Targeting Lab
        </button>
      </div>
    </motion.div>
  );
}
