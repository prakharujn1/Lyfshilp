import React, { useState } from 'react';

const investmentOptions = [
  { name: 'Stocks', effect: -0.2 },
  { name: 'Gold', effect: 0.15 },
  { name: 'Mutual Funds', effect: 0.1 },
  { name: 'Fixed Deposit', effect: 0.04 },
  { name: 'Savings Account', effect: 0.03 }
];

export default function BossLevelPortfolio() {
  const [allocations, setAllocations] = useState(
    investmentOptions.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {})
  );
  const [submitted, setSubmitted] = useState(false);
  const [finalValues, setFinalValues] = useState({});
  const [totalInvested, setTotalInvested] = useState(0);

  const handleChange = (name, value) => {
    const val = parseInt(value) || 0;
    const updated = { ...allocations, [name]: val };
    const total = Object.values(updated).reduce((sum, v) => sum + v, 0);
    setAllocations(updated);
    setTotalInvested(total);
  };

  const simulateMarket = () => {
    const results = {};
    for (const item of investmentOptions) {
      const invested = allocations[item.name];
      results[item.name] = Math.round(invested * (1 + item.effect));
    }
    setFinalValues(results);
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-white max-w-2xl mx-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🏁 Boss-Level Task: Build Your Portfolio</h2>
      <p className="text-gray-600 mb-4">Distribute ₹10,000 across 3–5 options. Then simulate how they perform after 6 virtual months.</p>

      <div className="space-y-4 mb-6">
        {investmentOptions.map(option => (
          <div key={option.name} className="flex justify-between items-center">
            <label className="font-medium w-40">{option.name}</label>
            <input
              type="number"
              value={allocations[option.name]}
              onChange={e => handleChange(option.name, e.target.value)}
              className="border px-3 py-1 rounded w-40"
              min="0"
              max="10000"
              disabled={submitted}
            />
          </div>
        ))}
      </div>

      <p className={`mb-4 ${totalInvested !== 10000 ? 'text-red-500' : 'text-green-600'}`}>
        Total Allocated: ₹{totalInvested} / ₹10,000
      </p>

      <button
        onClick={simulateMarket}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={totalInvested !== 10000 || submitted}
      >
        Submit & Simulate
      </button>

      {submitted && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">📊 Results After 6 Virtual Months</h3>
          <ul className="space-y-2">
            {Object.entries(finalValues).map(([name, value]) => (
              <li key={name} className="flex justify-between px-4 py-2 border rounded bg-gray-50">
                <span>{name}</span>
                <span>₹ {value.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-semibold">
            Total Final Value: ₹
            {Object.values(finalValues).reduce((sum, v) => sum + v, 0).toFixed(2)}
          </div>

          <div className="mt-6">
            <h4 className="font-bold mb-2">✅ Reasons for My Choices</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Diversified across growth (stocks), stability (FD), and safety (gold, MF).</li>
              <li>Balanced risk and return by avoiding over-investment in volatile assets.</li>
              <li>Included a guaranteed return (FD) to hedge against market loss.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

