import React, { useState } from "react";
import toast from "react-hot-toast";
import CampaignCard from "./CampaignCard";
import { motion } from "framer-motion";
import { Wand2, Brain, Sparkle, Sparkles } from "lucide-react";
import { RotateCcw } from "lucide-react";

const metricData = {
  Awareness: ["Reach", "Impressions"],
  Engagement: ["Likes", "Comments", "Saves"],
  Conversion: ["Clicks", "CTR"],
};

const allMetrics = [
  "Impressions",
  "Likes",
  "Saves",
  "Clicks",
  "CTR",
  "Comments",
  "Reach",
];

const possibleOptimizations = [
  "Caption rewrite",
  "New CTA",
  "Visual tweak",
  "Change format",
];

const DashboardGame = ({ onNext, addScore,onRestart }) => {
  const [draggedMetric, setDraggedMetric] = useState(null);
  const [placements, setPlacements] = useState({
    Awareness: [],
    Engagement: [],
    Conversion: [],
  });
  const [optimization, setOptimization] = useState("");
  const [result, setResult] = useState(null);
  const [summary, setSummary] = useState("");

  const handleDrop = (stage) => {
    if (!draggedMetric) return;
    const correct = metricData[stage].includes(draggedMetric);
    if (correct) {
      setPlacements((prev) => ({
        ...prev,
        [stage]: [...prev[stage], draggedMetric],
      }));
      toast.success("✅ Snapped into place!");
    } else {
      let hint = "";
      switch (draggedMetric) {
        case "Saves":
          hint = "Saves show people loved your content. That’s Engagement!";
          break;
        case "Reach":
        case "Impressions":
          hint = "These show how many saw your post — Awareness!";
          break;
        case "Clicks":
        case "CTR":
          hint = "Clicks & CTR show action! They’re for Conversion.";
          break;
        case "Likes":
        case "Comments":
          hint = "These mean people liked it — Engagement!";
          break;
        default:
          hint = "Hmm... check what this metric really means!";
      }
      toast.error(`🔁 Oops! ${hint}`);
    }
    setDraggedMetric(null);
  };

  const runOptimization = () => {
    if (!optimization) return;
    if (optimization === "New CTA") {
      setResult("🎉 Awesome! CTR improved from 2% to 3.4% 🚀");
    } else {
      setResult("😕 Hmm... That didn’t help much.");
    }
  };

  const handleSubmitSummary = () => {
    if (!summary.trim()) {
      toast.error("✍️ Please write a brief summary first!");
      return;
    }
    toast.success("📬 Sent to teacher dashboard!");

  };

  const handleCompleteStage3 = () => {
    const allPlacedCorrectly = Object.keys(metricData).every((stage) =>
      metricData[stage].every((m) => placements[stage].includes(m))
    );

    const summaryValid = summary.trim().length >= 10;
    const optimizationCorrect = optimization === "New CTA";

    if (!allPlacedCorrectly) {
      toast.error("📊 Place all metrics in the correct funnel stage!");
      return;
    }

    if (!optimization) {
      toast.error("✨ Choose an optimization tweak!");
      return;
    }

    if (!summaryValid) {
      toast.error("📝 Write a campaign summary of at least 10 characters!");
      return;
    }

    // ✅ Award points
    let points = 0;
    if (allPlacedCorrectly) points += 2;
    if (optimizationCorrect) points += 2;
    if (summaryValid) points += 1;

    addScore(points);
    toast.success(`🎯 Stage 3 complete!  🌟`);
    onNext();
  };

  const allTasksComplete =
    Object.keys(metricData).every((stage) =>
      metricData[stage].every((m) => placements[stage].includes(m))
    ) &&
    optimization &&
    summary.trim().length >= 10;


  return (
    <div className="p-6 space-y-10 bg-gradient-to-br from-orange-50 via-yellow-100 to-lime-50   shadow-xl border-4 border-orange-200">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className="text-4xl animate-bounce">🧠</span>
          <motion.h2
            className="text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-lime-400 drop-shadow-xl"
            animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🎮 STAGE 3: <br />
            Campaign Playground & Optimisation!
          </motion.h2>
          <span className="text-4xl animate-bounce">🎯</span>
        </div>
        <p className="text-lg text-pink-600 font-semibold italic flex items-center justify-center gap-2 mt-2">
          🌟 Finish all <span className="underline decoration-wavy decoration-yellow-400">3 tasks</span> to complete the game & become a Instagram Ad Pro! 🏆
        </p>
      </motion.div>

      {/* 🎯 3.1 Fix the Dashboard */}
      <section className="bg-gradient-to-br from-yellow-50 via-pink-50 to-lime-100 p-6 rounded-[2rem] shadow-2xl border-4 border-dashed border-yellow-300 transition-all duration-500">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 drop-shadow animate-pulse">
            Task 1: Fix the Dashboard!
          </h3>
          <p className="text-md text-gray-800 font-medium mt-2">
            🧩 Drag each <span className="font-bold text-orange-600">colorful metric</span> to the right funnel stage bucket below!
          </p>
        </div>

        {/* Metric Chips */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {allMetrics.map((metric, index) => (
            <motion.div
              key={metric}
              draggable
              onDragStart={() => setDraggedMetric(metric)}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2 + (index % 3), repeat: Infinity, ease: "easeInOut" }}

              className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-200 via-pink-100 to-lime-100 border-2 border-dashed border-pink-300 text-pink-800 font-extrabold text-sm shadow-lg cursor-grab transition-all hover:bg-pink-200 hover:text-pink-900 hover:border-orange-400"
            >
              🎈 {metric}
            </motion.div>
          ))}
        </div>

        {/* Buckets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(metricData).map((stage, idx) => (
            <motion.div
              key={stage}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(stage)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-4 min-h-[160px] bg-white rounded-[1.5rem] border-4 border-dashed border-lime-400 shadow-inner"
            >
              <h4 className="text-xl font-bold text-green-600 text-center mb-3 tracking-wide animate-bounce">
                🪄 {stage}
              </h4>
              {placements[stage].map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm bg-lime-100 px-3 py-1 rounded-full text-center font-semibold text-lime-800 mb-2 shadow-sm"
                >
                  🎉 {m}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-50 via-pink-50 to-lime-100 p-6 rounded-[2rem] shadow-2xl border-4 border-dashed border-yellow-300 transition-all duration-500">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 drop-shadow animate-pulse">
            Task 2: Optimize the Campaign!
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Campaign Card */}
          <div className="md:w-[340px] flex justify-center">
            <CampaignCard />
          </div>



          {/* Instructions + Choices */}
          <div className="flex-1 space-y-6">
            {/* 📋 Instruction Box */}
            <div className="bg-gradient-to-br from-yellow-50 via-white to-pink-50 p-6 rounded-3xl border-4 border-dashed border-yellow-300 shadow-xl">
              <p className="text-2xl font-extrabold text-green-700 mb-2">
                🌱 Brand Spotlight: <span className="text-green-900">Greenly</span>
              </p>
              <p className="text-lg text-gray-800 mb-3 leading-relaxed">
                🎥 The campaign (shown on the left) is fun, eco-friendly, and super stylish —
                but it’s not getting enough clicks! 📉
              </p>
              <p className="text-lg font-semibold text-pink-700">
                💡 Can you spot what’s missing? Choose a magic tweak below to boost its performance! ✨👇
              </p>
            </div>

            <div className=" p-6  ">
              {/* 🎮 Magic Tweaks Title */}


              {/* 🎯 Animated Option Buttons */}
              <div className="flex flex-wrap justify-center gap-6">
                {possibleOptimizations.map((opt, index) => (
                  <motion.div
                    key={opt}
                    onClick={() => setOptimization(opt)}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
                    className={`px-8 py-4 rounded-full bg-gradient-to-r from-yellow-200 via-pink-100 to-lime-100 border-4 border-dashed text-lg font-extrabold shadow-xl cursor-pointer transition-all duration-300
        ${optimization === opt
                        ? "scale-110 ring-4 ring-orange-400 border-orange-300 text-pink-900 shadow-pink-300"
                        : "text-pink-800 border-pink-300"
                      }`}
                  >
                    ✨ {opt}
                  </motion.div>
                ))}
              </div>



              {/* 🚀 Action Button */}
              <motion.button
                onClick={runOptimization}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 block mx-auto px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-extrabold rounded-full shadow-xl transition-all"
              >
                🚀 Run Optimization
              </motion.button>

              {/* 📊 Result Feedback */}
              {result && (
                <motion.div
                  className="mt-5 p-4 bg-orange-100 rounded-2xl shadow-inner text-md font-bold text-gray-800 flex items-center gap-2 justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkle className="w-5 h-5 text-orange-500 animate-ping" />
                  {result}
                </motion.div>
              )}
            </div>

          </div>

        </div>
      </section>



      {/* 📝 3.3 Final Summary */}
      <section className="bg-gradient-to-br from-yellow-50 via-pink-50 to-lime-100 p-6 rounded-[2rem] shadow-2xl border-4 border-dashed border-yellow-300 transition-all duration-500">
        {/* Animated Heading */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 drop-shadow animate-pulse">
            Task 3: Final Campaign Summary
          </h3>
        </div>


        {/* Label */}
        <label className="block text-md font-semibold text-gray-800 mb-2 text-center">
          ✍️ In 1–2 lines, how would you improve this campaign next round?
        </label>

        {/* Glowing Textarea */}
        <motion.textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={3}
          whileFocus={{ scale: 1.02 }}
          className="w-full p-4 rounded-xl border-2 border-yellow-300 bg-white focus:outline-none focus:ring-4 focus:ring-pink-300 shadow-inner text-md font-medium text-gray-700 transition-all placeholder:italic placeholder:text-sm"
          placeholder="e.g., I'd use a stronger CTA like 'Shop Eco Now!' 💚"
        />

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmitSummary}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 py-3 px-5 bg-pink-400 hover:bg-pink-500 text-white font-bold text-md rounded-full shadow-lg transition-all"
        >
          Submit to teacher
        </motion.button>
      </section>
      <motion.button
        onClick={handleCompleteStage3}
        disabled={!allTasksComplete}
        whileHover={{ scale: allTasksComplete ? 1.05 : 1 }}
        whileTap={{ scale: allTasksComplete ? 0.95 : 1 }}
        className={`mt-6 block mx-auto px-8 py-4 text-lg font-extrabold rounded-full shadow-lg transition-all
    ${allTasksComplete
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"}
  `}
      >
        🎉 Finish Stage & View Score
      </motion.button>
      <motion.div
        className="mt-6 flex justify-center"
      >
        <button
          onClick={onRestart}
          className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
          Restart Game
        </button>
      </motion.div>
    </div>
  );
};

export default DashboardGame;
