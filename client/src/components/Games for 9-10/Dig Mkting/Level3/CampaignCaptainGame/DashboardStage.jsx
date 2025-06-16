// DashboardStage.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const funnelStages = {
  Awareness: ["Reach", "Impressions"],
  Engagement: ["Likes", "Comments", "Saves"],
  Conversion: ["Clicks", "CTR"],
};

const allMetrics = ["Reach", "Impressions", "Likes", "Comments", "Saves", "Clicks", "CTR"];

export default function DashboardStage({ onRestart }) {
  const [assigned, setAssigned] = useState({ Awareness: [], Engagement: [], Conversion: [] });
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [optimization, setOptimization] = useState("");
  const [summary, setSummary] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleAssign = (stage) => {
    if (!selectedMetric) return;
    setAssigned((prev) => {
      const updated = { ...prev };
      for (const key in updated) {
        updated[key] = updated[key].filter((m) => m !== selectedMetric);
      }
      updated[stage].push(selectedMetric);
      return updated;
    });
    setSelectedMetric(null);
  };

  const handleSubmit = () => setShowResults(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-pink-50 p-6 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-pink-700 text-center">📊 Stage 3: Campaign Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-bold mb-2">📌 Metrics</h3>
          <div className="space-y-2">
            {allMetrics.map((metric) => (
              <button
                key={metric}
                className={`block w-full text-left px-3 py-1 rounded cursor-pointer transition font-medium ${
                  selectedMetric === metric ? "bg-pink-300 text-white" : "hover:bg-pink-100"
                }`}
                onClick={() => setSelectedMetric(metric)}
              >
                {metric}
              </button>
            ))}
          </div>
        </div>

        {Object.keys(funnelStages).map((stage) => (
          <div key={stage} className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold text-purple-600">{stage}</h3>
            <div className="min-h-[80px] mt-2 space-y-1">
              {assigned[stage].map((m) => (
                <div key={m} className="bg-purple-100 px-3 py-1 rounded">
                  {m}
                </div>
              ))}
            </div>
            <button
              onClick={() => handleAssign(stage)}
              className="mt-2 text-xs text-blue-500 underline"
            >
              ➕ Assign Here
            </button>
          </div>
        ))}
      </div>

      <div className="pt-6">
        <h3 className="font-semibold">✨ Optimize Your Campaign</h3>
        <select
          className="w-full p-2 rounded border mt-2"
          value={optimization}
          onChange={(e) => setOptimization(e.target.value)}
        >
          <option value="">-- Choose Change --</option>
          <option>Caption Rewrite</option>
          <option>New CTA</option>
          <option>Visual Tweak</option>
          <option>Change Format</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mt-4">📝 Campaign Summary</h3>
        <textarea
          className="w-full p-2 rounded border mt-2"
          rows={3}
          placeholder="In 1-2 lines, explain how you’d improve this ad in the next round."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <div className="text-center pt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          ✅ Submit Campaign
        </button>
      </div>

      {showResults && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-50 p-4 mt-6 rounded-xl border border-green-200"
        >
          <h4 className="font-bold text-green-700 text-lg text-center">🎉 Results Summary</h4>
          <p className="text-sm text-center mt-2">
            Metrics mapped correctly: ✅
            <br /> Optimization impact: 📈 CTR improved to 3.4%
          </p>
          <p className="text-center mt-2 text-purple-700 font-semibold">
            🏆 You’re an Instagram Ad Pro!
          </p>
          <div className="text-center mt-4">
            <button
              onClick={onRestart}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              🔁 Play Again
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
