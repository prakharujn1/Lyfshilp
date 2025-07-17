import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useComputers } from "@/contexts/ComputersContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const symptoms = ["fever", "cough", "chestPain", "breathing", "fatigue"];
const coughTypes = ["none", "dry", "wet"];
const fatigueLevels = ["low", "medium", "high"];

function generatePatients(n) {
  const diagnoses = ["Flu", "Common Cold", "Pneumonia", "Allergies"];
  const data = [];

  for (let i = 0; i < n; i++) {
    const patient = {
      fever: Math.random() < 0.5,
      cough: coughTypes[Math.floor(Math.random() * 3)],
      chestPain: Math.random() < 0.5,
      breathing: Math.random() < 0.5,
      fatigue: fatigueLevels[Math.floor(Math.random() * 3)],
    };

    let diagnosis = "Common Cold";
    if (patient.fever && patient.chestPain && patient.breathing) diagnosis = "Pneumonia";
    else if (patient.fever && patient.fatigue !== "low") diagnosis = "Flu";
    else if (!patient.fever && patient.cough === "none") diagnosis = "Allergies";

    data.push({ ...patient, diagnosis });
  }
  return data;
}

function entropy(subset) {
  const counts = {};
  subset.forEach(p => {
    counts[p.diagnosis] = (counts[p.diagnosis] || 0) + 1;
  });
  const total = subset.length;
  return -Object.values(counts).reduce((sum, count) => {
    const p = count / total;
    return sum + p * Math.log2(p);
  }, 0);
}

function informationGain(data, symptom) {
  const totalEntropy = entropy(data);
  const values = [...new Set(data.map(p => p[symptom]))];
  const weightedEntropy = values.reduce((sum, value) => {
    const subset = data.filter(p => p[symptom] === value);
    return sum + (subset.length / data.length) * entropy(subset);
  }, 0);
  return (totalEntropy - weightedEntropy).toFixed(3);
}

function TreeDiagram({ path }) {
  return (
    <div className="text-left mt-4 bg-white rounded p-4 max-w-md mx-auto">
      <p className="font-bold mb-2 text-center">🌳 Visual Tree Diagram</p>
      <div className="pl-2 border-l-2 border-gray-400">
        {path.length === 0 ? (
          <p className="text-sm text-gray-500">(Start)</p>
        ) : (
          path.map((step, index) => (
            <div key={index} className="pl-4 relative">
              <div className="before:absolute before:-left-4 before:top-1/2 before:h-px before:w-4 before:bg-gray-400"></div>
              <p className="text-sm text-blue-800">↳ {step.symptom} = {String(step.value)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function MedicalDiagnosisAssistant() {
  const { completeComputersChallenge } = useComputers();
  const [trainingData, setTrainingData] = useState([]);
  const [testingData, setTestingData] = useState([]);
  const [accuracy, setAccuracy] = useState(null);
  const [treePath, setTreePath] = useState([]);
  const [started, setStarted] = useState(false);

  //for performance
  const { updateComputersPerformance } = usePerformance();
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const patients = generatePatients(100);
    setTrainingData(patients.slice(0, 80));
    setTestingData(patients.slice(80));
  }, []);

  const getMajorityDiagnosis = (patients) => {
    const counts = {};
    patients.forEach(p => {
      counts[p.diagnosis] = (counts[p.diagnosis] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  };

  const filterDataByPath = (data, path) => {
    return path.reduce((filtered, { symptom, value }) => {
      return filtered.filter(p => p[symptom] === value);
    }, data);
  };

  const addToTreePath = (symptom, value) => {
    const updatedPath = [...treePath, { symptom, value }];
    setTreePath(updatedPath);
  };

  const resetTreePath = () => setTreePath([]);

  const testDecisionTree = () => {
    let correct = 0;
    testingData.forEach(p => {
      let predicted = "Common Cold";
      if (p.fever && p.chestPain && p.breathing) predicted = "Pneumonia";
      else if (p.fever && p.fatigue !== "low") predicted = "Flu";
      else if (!p.fever && p.cough === "none") predicted = "Allergies";

      if (predicted === p.diagnosis) correct++;
    });

    const acc = ((correct / testingData.length) * 100).toFixed(2);
    setAccuracy(acc);

    // ✅ Score out of 10
    const scoreOutOf10 = parseFloat(((correct / testingData.length) * 10).toFixed(2));
    const avgResponseTimeSec = parseFloat(((Date.now() - startTime) / 1000 / testingData.length).toFixed(2));
    const studyTimeMinutes = parseFloat(((Date.now() - startTime) / 1000 / 60).toFixed(1));

    updateComputersPerformance({
      score: scoreOutOf10,
      accuracy: parseFloat(acc),
      avgResponseTimeSec,
      studyTimeMinutes,
      completed: acc >= 85, // completed if passed
    });

    // ✅ Trigger challenge completion if accuracy is high enough
    if (acc >= 85) {
      completeComputersChallenge(1, 0); // <-- here is the correct call
    }
  };

  const currentSubset = filterDataByPath(trainingData, treePath);
  const availableSymptoms = symptoms.filter(s => !treePath.find(tp => tp.symptom === s));

  const symptomGains = availableSymptoms.map(sym => ({
    symptom: sym,
    gain: parseFloat(informationGain(currentSubset, sym))
  })).sort((a, b) => b.gain - a.gain);
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 animate-fade-in p-8 text-center animate-fade-in">
        <motion.h1
          className="text-5xl sm:text-6xl text-center font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-3 pb-3 drop-shadow-2xl animate-bounce-slow"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 90 }}
        >
          🧬 Medical Diagnosis Assistant
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-800 max-w-4xl mx-auto mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🤖 You’re the smart assistant! Help diagnose 100 patients using symptoms like fever, cough & fatigue. Build a decision tree 🌳 and crack the case!
        </motion.p>

        <div className="flex flex-wrap justify-center items-start gap-8">
          {/* Symptom Table */}
          <div className="bg-white rounded-3xl p-6 shadow-xl w-[350px] sm:w-[400px] border-4 border-yellow-300">
            <h2 className="text-2xl font-bold mb-3 text-purple-700 flex items-center gap-2">
              📋 Symptom Table
            </h2>
            <table className="w-full text-md text-left border border-purple-200 rounded overflow-hidden">
              <thead>
                <tr className="bg-purple-100 text-purple-700 font-semibold">
                  <th className="p-2">🩺 Symptom</th>
                  <th className="p-2">🔢 Values</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2">Fever</td><td className="p-2">Yes / No</td></tr>
                <tr><td className="p-2">Cough</td><td className="p-2">Dry / Wet / None</td></tr>
                <tr><td className="p-2">Chest Pain</td><td className="p-2">Yes / No</td></tr>
                <tr><td className="p-2">Breathing Difficulty</td><td className="p-2">Yes / No</td></tr>
                <tr><td className="p-2">Fatigue</td><td className="p-2">Low / Medium / High</td></tr>
              </tbody>
            </table>
          </div>

          {/* Game Instructions */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-xl w-[350px] sm:w-[400px] border-4 border-yellow-300 text-left text-purple-800"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center gap-2">
              🎮 How to Play
            </h2>
            <ul className="space-y-3 text-md sm:text-lg font-medium">
              <li>👩‍⚕️ You are the smart AI assistant</li>
              <li>📚 Train on 80 patients</li>
              <li>🧪 Test your diagnosis on 20 new patients</li>
              <li>🔍 Use Info Gain to ask smart symptom questions</li>
              <li>🎯 Goal: Achieve 85%+ accuracy!</li>
            </ul>
          </motion.div>
        </div>

        {/* Start Button */}
        <motion.button
          onClick={() => setStarted(true)}
          className="mt-10 bg-purple-500 text-white px-10 py-4 rounded-full shadow-lg text-xl font-bold hover:bg-purple-600 transition-all animate-bounce border-4 border-white"
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
        >
          🚀 Let’s Begin!
        </motion.button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen animate-fade-in">
      <motion.h1
        className="text-5xl sm:text-6xl text-center font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-3 pb-3 drop-shadow-2xl animate-bounce-slow"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 90 }}
      >
        🧬 Medical Diagnosis Assistant
      </motion.h1>

      <p className="text-lg sm:text-xl text-center text-gray-700 font-medium mb-10">
        🤖 Build your Decision Tree to diagnose 100 patients based on symptoms like fever, cough & fatigue!
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 max-w-7xl mx-auto">

        {/* Right Column: Gameplay */}
        <div className="flex-1 space-y-6">

          {/* Tree Section */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-blue-200">
            <p className="text-lg font-bold text-purple-800 mb-2">🌲 Your Decision Tree</p>
            <TreeDiagram path={treePath} />

            <button
              onClick={resetTreePath}
              className="mt-4 px-4 py-2 bg-red-400 text-white rounded-full font-semibold hover:bg-red-500 transition"
            >
              🔁 Reset Tree
            </button>
          </div>

          {/* Info Gain */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-green-300">
            <p className="text-lg font-bold text-purple-800 mb-2">📊 Info Gain (Choose a Question):</p>
            <ul className="list-disc pl-5 space-y-1 text-purple-700 text-md">
              {symptomGains.map(({ symptom, gain }) => (
                <li key={symptom}>✨ {symptom.charAt(0).toUpperCase() + symptom.slice(1)}: {gain}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {availableSymptoms.map(sym =>
                [...new Set(currentSubset.map(p => p[sym]))].map(value => (
                  <button
                    key={`${sym}-${value}`}
                    onClick={() => addToTreePath(sym, value)}
                    className="px-4 py-2 rounded-full bg-white border-2 border-purple-400 text-purple-700 font-semibold hover:bg-purple-100 transition"
                  >
                    {sym} = {String(value)}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Current Node */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-orange-200 text-left">
            <p className="text-lg font-bold mb-2 text-purple-800">📍 Current Leaf Node:</p>
            {currentSubset.length > 0 ? (
              <>
                <p>🧪 Samples: {currentSubset.length}</p>
                <p>🏥 Majority Diagnosis: <strong>{getMajorityDiagnosis(currentSubset)}</strong></p>
              </>
            ) : <p>😕 No data in this path.</p>}
          </div>

          {/* Accuracy & Test Button */}
          <div className="text-center">
            <button
              onClick={testDecisionTree}
              className="mt-4 bg-green-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow hover:bg-green-600 transition-all"
            >
              🧪 Test Tree on Patients
            </button>

            {accuracy && (
              <motion.p
                className={`mt-4 text-xl font-bold ${accuracy >= 85 ? "text-green-700" : "text-red-600"
                  }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                🎯 Accuracy: {accuracy}% {accuracy >= 85 ? "✅ You did it!" : "❌ Try again!"}
              </motion.p>
            )}
          </div>
        </div>

        {/* Left Column: Hint Box */}
        <div className="lg:w-1/3 w-full space-y-6">
          <div className="bg-yellow-100 border-4 border-yellow-300 p-6 rounded-3xl shadow-lg animate-pulse-slow">
            <h2 className="text-2xl font-extrabold text-yellow-800 mb-4 flex items-center gap-2">
              💡 Tips to Win with High Accuracy!
            </h2>
            <ul className="text-md sm:text-lg text-yellow-900 space-y-4 leading-relaxed font-medium">
              <li>
                ✅ <strong>Pick the Symptom with Highest Info Gain First:</strong><br />
                📊 This splits data best and reduces confusion. Always start with the top info gain!
              </li>
              <li>
                ✅ <strong>Use Specific Value Branching:</strong><br />
                🌡️ For symptoms like <em>fatigue</em> or <em>cough</em>, create clear branches like "low", "medium", "high"!
              </li>
              <li>
                ✅ <strong>Build Deeper Trees:</strong><br />
                🌳 Go 3–5 layers deep. It helps catch tricky patient patterns!
              </li>
              <li>
                ✅ <strong>Avoid Overfitting:</strong><br />
                👀 If fewer than 5 samples remain, stop branching and use the majority diagnosis!
              </li>
              <li>
                ✅ <strong>Reset Tree & Explore New Paths:</strong><br />
                🔁 Not working out? Reset and test different symptom paths for better results!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}