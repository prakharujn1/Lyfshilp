import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Bot, Wand2 } from "lucide-react";
import AdPreview from "./AdPreview";
import { Pencil } from "lucide-react"; // Make sure this import is at the top
import { SmilePlus, Lightbulb, Link } from "lucide-react";
import { ArrowRight } from "lucide-react";



const adFormats = ["Instagram Reel", "Story", "Carousel"];
const visuals = ["Foam Splash", "Before & After", "Unboxing Glow", "Glow in 10"];
const ctas = ["Shop Now", "Glow Up Today", "Tap to Try", "Learn More"];

const AdCreationGame = ({ onNext, addScore }) => {
  const [format, setFormat] = useState(null);
  const [visual, setVisual] = useState(null);
  const [caption, setCaption] = useState("");
  const [cta, setCTA] = useState(null);

  const handleCompleteStage1 = () => {
    let points = 5;

    addScore(points);
    onNext();
  };

  return (
    <div className="p-6 space-y-8 bg-gradient-to-br from-pink-50 via-yellow-50 to-lime-50 rounded-3xl shadow-2xl">
      {/* 🎮 Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header Row */}
        <div className="flex justify-center items-center gap-5 mb-4">
          <motion.span
            className="text-5xl"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🧠
          </motion.span>

          <motion.h2
            className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-lime-400 drop-shadow-2xl"
            animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🎮 STAGE 1: <br /> AD CREATION STUDIO
          </motion.h2>

          <motion.span
            className="text-5xl"
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🎯
          </motion.span>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-pink-600 font-extrabold italic text-center animate-pulse flex flex-wrap justify-center items-center gap-2">
          🌟 Craft a <span className="bg-yellow-200 px-3 py-1 rounded-xl shadow text-pink-700 animate-bounce">GlowPop ✨</span>
          Insta Ad and unlock the next stage! 🚀🎨📲
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 🧩 Left Panel */}
        <motion.div
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Format Selector */}
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-dashed border-pink-200">
            <h2 className="text-lg font-bold text-pink-600 mb-3 flex items-center gap-2">
              <Wand2 className="w-6 h-6 text-pink-500 animate-bounce" />
              Choose a Format
            </h2>
            {adFormats.map(f => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`block w-full text-left px-4 py-2 mb-2 rounded-lg font-semibold transition-all ${format === f
                  ? "bg-pink-400 text-white"
                  : "bg-pink-100 hover:bg-pink-200"
                  }`}
              >
                📽️ {f}
              </button>
            ))}
          </div>

          {/* Visual Selector */}
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-dashed border-yellow-200">
            <h2 className="text-lg font-bold text-yellow-600 mb-3 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
              Pick a Visual
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {visuals.map(v => (
                <motion.div
                  key={v}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisual(v)}
                  className={`cursor-pointer p-2 rounded-lg text-center border ${visual === v
                    ? "border-yellow-400 bg-yellow-100"
                    : "border-gray-200 bg-white hover:bg-yellow-50"
                    }`}
                >
                  📸 {v}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Selector */}
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-dashed border-lime-200">
            <h2 className="text-lg font-bold text-lime-700 mb-3 flex items-center gap-2">
              <Bot className="w-6 h-6 text-lime-500 animate-pulse" />
              Choose CTA
            </h2>
            <div className="flex flex-wrap gap-2">
              {ctas.map(c => (
                <motion.button
                  key={c}
                  onClick={() => setCTA(c)}
                  whileHover={{ scale: 1.1 }}
                  className={`px-3 py-1 rounded-full font-semibold transition-all ${cta === c
                    ? "bg-lime-500 text-white"
                    : "bg-white border border-lime-300 hover:bg-lime-100"
                    }`}
                >
                  👉 {c}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 🎥 Center Preview */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AdPreview selectedVisual={visual} caption={caption} format={format} cta={cta} />
        </motion.div>

        {/* 🧠 Right Panel (Caption Input + AI Tips) */}
        <div className="flex flex-col gap-5 bg-white p-4 rounded-xl shadow-md border-2 border-dashed border-pink-200 ">

          {/* ✍️ Caption Input */}
          <div>
            <h2 className="text-lg font-bold text-pink-600 mb-3 flex items-center gap-2 animate-bounce">
              <Pencil className="w-5 h-5 text-pink-500" />
              Your Caption
            </h2>
            <textarea
              maxLength={120}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-dashed border-pink-300 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm shadow-inner resize-none placeholder-pink-400 font-medium"
              placeholder="✨ Type a fun & catchy caption here!"
            />
            <p className="text-xs text-right text-pink-500 mt-1">{caption.length}/120</p>
          </div>

          {/* 🤖 AI Coach Tips */}
          <motion.div
            className="bg-white rounded-xl p-4 shadow border-2 border-dashed border-blue-300 space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-bold text-blue-600 flex items-center gap-2 animate-bounce">
              <Bot className="w-5 h-5 text-blue-500" />
              AI Coach Tips
            </h2>
            <ul className="text-sm text-gray-700 pl-2 space-y-2">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 animate-bounce" />
                Use slang like “lit glow” for fun vibes
              </li>
              <li className="flex items-start gap-2">
                <SmilePlus className="w-4 h-4 text-pink-500 animate-bounce" />
                Add emojis to brighten up your caption
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-500 animate-bounce" />
                Mention a benefit
              </li>
              <li className="flex items-start gap-2">
                <Link className="w-4 h-4 text-green-500 animate-bounce" />
                Match your CTA to your caption tone
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
      {/* 🚀 Next Stage Button */}
      <div className="flex justify-center mt-10">
        <button
          disabled={!format || !visual || !caption.trim() || !cta}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-lg shadow-xl transition-all duration-300 ${format && visual && caption.trim() && cta
            ? "bg-gradient-to-r from-green-400 to-lime-500 hover:scale-105"
            : "bg-gray-300 cursor-not-allowed"
            }`}
          onClick={handleCompleteStage1}
        >
          Next Stage
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

export default AdCreationGame;
