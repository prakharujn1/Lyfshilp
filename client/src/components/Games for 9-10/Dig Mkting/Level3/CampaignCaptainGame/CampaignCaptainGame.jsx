import React, { useState } from "react";
import { motion } from "framer-motion";
import AdCreationStage from "./AdCreationStage";
import TargetingStage from "./TargetingStage";
import DashboardStage from "./DashboardStage";

export default function CampaignCaptainGame() {
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState({ ad: 0, targeting: 0, dashboard: 0 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-6">
      <motion.h1
        className="text-4xl font-extrabold text-center text-purple-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🧩 LEVEL 3: Campaign Captain – Instagram Ad Lab 💡
      </motion.h1>

      {stage === 1 && (
        <AdCreationStage onNext={() => setStage(2)} setScore={setScore} score={score} />
      )}
      {stage === 2 && (
        <TargetingStage onNext={() => setStage(3)} setScore={setScore} score={score} />
      )}
      {stage === 3 && (
        <DashboardStage onFinish={() => alert("🎉 Game Completed!")} setScore={setScore} score={score} />
      )}

      <div className="mt-10 text-center text-sm text-gray-600">
        <p>🌟 Progress: Stage {stage} of 3</p>
      </div>
    </div>
  );
}
