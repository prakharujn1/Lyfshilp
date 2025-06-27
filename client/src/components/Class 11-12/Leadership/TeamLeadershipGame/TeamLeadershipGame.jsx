import React, { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Users, ClipboardList, ThumbsUp, Hourglass, Smile } from "lucide-react";

const teammates = [
  { id: 1, name: "🎨 Aria", skill: "Design", motivation: 8 },
  { id: 2, name: "🧠 Ben", skill: "Strategy", motivation: 7 },
  { id: 3, name: "⚙️ Casey", skill: "Tech", motivation: 9 },
  { id: 4, name: "📣 Dana", skill: "Marketing", motivation: 6 },
];

const tasks = [
  { id: 1, name: "Launch Page", required: "Design" },
  { id: 2, name: "Growth Plan", required: "Strategy" },
  { id: 3, name: "App Debug", required: "Tech" },
  { id: 4, name: "Campaign Post", required: "Marketing" },
];

const TeamLeadershipGame = () => {
  const [assignments, setAssignments] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const assignTeammate = (taskId, teammateId) => {
    setAssignments({ ...assignments, [taskId]: teammateId });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getResult = (task) => {
    const teammateId = assignments[task.id];
    const mate = teammates.find((t) => t.id === teammateId);
    if (!mate) return { quality: "❌", speed: "❌", morale: "😕" };

    const quality = mate.skill === task.required ? "✅" : "⚠️";
    const speed = mate.motivation >= 7 ? "⚡" : "🐢";
    const morale = mate.skill === task.required ? "😄" : "😬";
    return { quality, speed, morale };
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center font-extrabold text-violet-700 mb-6 drop-shadow"
      >
        🏗️ Team Architect Simulation
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-4 rounded-3xl shadow-lg border-2 border-yellow-300">
          <h2 className="text-2xl font-bold mb-3 text-pink-600">👩‍💻 Virtual Teammates</h2>
          <ul className="space-y-3">
            {teammates.map((t) => (
              <li
                key={t.id}
                className="p-3 rounded-xl bg-gradient-to-r from-pink-200 to-purple-200 shadow-md"
              >
                <strong>{t.name}</strong> – <span className="text-sm">Skill: {t.skill} | Motivation: {t.motivation}/10</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-lg border-2 border-lime-300">
          <h2 className="text-2xl font-bold mb-3 text-green-600">🧩 Assign Tasks</h2>
          {tasks.map((task) => (
            <div key={task.id} className="mb-4">
              <label className="block font-semibold text-gray-700 mb-1">
                📝 {task.name} – Needs: {task.required}
              </label>
              <select
                onChange={(e) => assignTeammate(task.id, parseInt(e.target.value))}
                value={assignments[task.id] || ""}
                className="w-full p-2 rounded-lg border-2 border-purple-300"
              >
                <option value="">Select teammate</option>
                {teammates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              {submitted && (
                <div className="mt-2 text-sm text-gray-700 flex gap-4">
                  <span>Quality: {getResult(task).quality}</span>
                  <span>Speed: {getResult(task).speed}</span>
                  <span>Morale: {getResult(task).morale}</span>
                </div>
              )}
            </div>
          ))}
          {!submitted && (
            <button
              onClick={handleSubmit}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-green-600"
            >
              🚀 Submit Delegation
            </button>
          )}
        </div>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 bg-gradient-to-br from-pink-100 to-yellow-50 p-6 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-purple-600 mb-2">🏁 Results</h2>
          <p className="text-lg text-gray-800 mb-4">
            Great job delegating! See how your choices affected the team's performance.
          </p>
          <div className="text-4xl animate-bounce">🏗️ Badge Earned: <span className="text-yellow-600 font-extrabold">Team Strategist</span></div>
        </motion.div>
      )}
    </div>
  );
};

export default TeamLeadershipGame;
