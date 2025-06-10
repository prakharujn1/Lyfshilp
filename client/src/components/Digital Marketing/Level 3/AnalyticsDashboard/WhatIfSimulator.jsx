import { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation

export function WhatIfSimulator({ onSimulate }) {
  // Predefined options for the amount to shift
  const amountOptions = [50, 100, 200, 500, 1000];
  const [amount, setAmount] = useState(amountOptions[0]); // Default to the first option
  
  // Note: Your initialData in AnalyticsDashboard uses full platform names.
  // Ensure the 'toPlatform' values here match exactly for simulation to work.
  const platformOptions = [
    "YouTube Shorts", // Changed from "YouTube"
    "Instagram Stories", // Changed from "Instagram"
    "Google Search Ads", // Changed from "Google"
  ];
  const [toPlatform, setToPlatform] = useState(platformOptions[0]); // Default to the first platform

  const handleSimulate = () => {
    // Ensure amount is a number before passing
    onSimulate(toPlatform, Number(amount));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-6 p-6 bg-blue-50 rounded-2xl shadow-xl border border-blue-200"
    >
      <h3 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
        🚀 What-If Simulator
      </h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="text-gray-700 font-medium">
           Invest ₹
          <select
            value={amount}
            onChange={e => setAmount(Number(e.target.value))} // Convert value to number
            className="border border-blue-300 rounded-lg py-2 px-3 mx-2 bg-white text-blue-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          >
            {amountOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          to
          <select
            value={toPlatform}
            onChange={e => setToPlatform(e.target.value)}
            className="border border-blue-300 rounded-lg py-2 px-3 mx-2 bg-white text-blue-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
          >
            {platformOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={handleSimulate}
          className="ml-0 sm:ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 font-semibold"
        >
          Simulate
        </button>
      </div>
    </motion.div>
  );
}
