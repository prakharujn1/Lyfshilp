import React from "react";

const WeightSliders = ({ weights, setWeights }) => {
  const labels = [
    "📨 Sender Reputation",
    "✍️ Spelling Errors",
    "⚠️ Urgent Words",
    "🔗 Link Count",
    "📎 Attachment Type",
    "⏰ Time Sent"
  ];

  const updateWeight = (index, value) => {
    const newWeights = [...weights];
    newWeights[index] = parseFloat(value);
    setWeights(newWeights);
  };

  return (
    <div className="space-y-4">
      {weights.map((weight, i) => (
        <div key={i}>
          <label className="block font-semibold mb-1 text-purple-700">
            {labels[i]}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={weight}
            onChange={(e) => updateWeight(i, e.target.value)}
            className="w-full"
          />
          <p className="text-sm text-gray-600">
            Weight: {weight.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeightSliders;
