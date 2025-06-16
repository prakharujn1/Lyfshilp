import React, { useState } from "react";
import { motion } from "framer-motion";

const TargetingStage = ({ onComplete }) => {
  const [age, setAge] = useState("13–18");
  const [interest, setInterest] = useState("Skincare");
  const [location, setLocation] = useState("Tier 1 cities");
  const [platform, setPlatform] = useState("Reels");
  const [duration, setDuration] = useState(3);
  const [timing, setTiming] = useState("Morning");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => onComplete(), 2000);
  };

  return (
    <motion.div
      className="bg-blue-50 p-6 rounded-xl shadow-xl space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-center text-blue-700">
        🎯 Level 2: Targeting & Budget Simulator
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-bold text-indigo-600 mb-2">🎯 Set Audience</h3>

          <label className="block mb-2 text-sm font-semibold">Age Group</label>
          <select value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 border rounded-lg">
            <option>13–18</option>
            <option>19–25</option>
            <option>26–35</option>
          </select>

          <label className="block mt-4 mb-2 text-sm font-semibold">Interest</label>
          <select value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full p-2 border rounded-lg">
            <option>Skincare</option>
            <option>Eco-friendly</option>
            <option>Influencer fans</option>
          </select>

          <label className="block mt-4 mb-2 text-sm font-semibold">Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded-lg">
            <option>Tier 1 cities</option>
            <option>Tier 2 towns</option>
            <option>Pan-India</option>
          </select>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-bold text-green-600 mb-2">💸 Budget Planner</h3>

          <label className="block mb-2 text-sm font-semibold">Platform Focus</label>
          <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full p-2 border rounded-lg">
            <option>Reels</option>
            <option>Feed</option>
            <option>Stories</option>
          </select>

          <label className="block mt-4 mb-2 text-sm font-semibold">Duration</label>
          <select value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full p-2 border rounded-lg">
            <option value={3}>3 Days</option>
            <option value={5}>5 Days</option>
            <option value={7}>7 Days</option>
          </select>

          <label className="block mt-4 mb-2 text-sm font-semibold">Timing</label>
          <select value={timing} onChange={(e) => setTiming(e.target.value)} className="w-full p-2 border rounded-lg">
            <option>Morning</option>
            <option>Evening</option>
            <option>All Day</option>
          </select>
        </div>
      </div>

      <div className="text-center mt-6">
        <motion.button
          onClick={handleSubmit}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          🚀 Run Simulation
        </motion.button>

        {submitted && (
          <p className="mt-3 text-green-700 font-semibold">
            📊 Generating Reach & ROI Forecast...
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TargetingStage;
