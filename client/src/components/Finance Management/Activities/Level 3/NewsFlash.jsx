import React, { useState } from 'react';
import { FaChartLine, FaChartBar, FaCoins } from 'react-icons/fa';

const newsItems = [
  {
    title: "📉 Tech stocks crash after regulations",
    explanation: "Regulations cause panic in the tech sector, reducing stock value by 20%.",
    effect: { stocks: -0.2 },
    icon: <FaChartLine className="text-red-500 text-3xl" />
  },
  {
    title: "🏆 Gold hits all-time high",
    explanation: "Investors rush to gold as a safe asset, increasing value by 15%.",
    effect: { gold: 0.15 },
    icon: <FaCoins className="text-yellow-500 text-3xl" />
  },
  {
    title: "📈 Mutual funds outperform savings accounts",
    explanation: "Mutual funds show better returns than savings, value increases by 10%.",
    effect: { mutualFunds: 0.1 },
    icon: <FaChartBar className="text-green-600 text-5xl" />
  }
];

export default function NewsFlash() {
  const baseInvestment = { stocks: 1000, gold: 1000, mutualFunds: 1000 };

  const [investments, setInvestments] = useState(baseInvestment);
  const [highlighted, setHighlighted] = useState('');
  const [message, setMessage] = useState('');

  const applyEffect = (item) => {
    const effect = item.effect;
    const updated = { ...investments };

    for (const key in effect) {
      updated[key] = Math.round(investments[key] * (1 + effect[key]) * 100) / 100;
    }

    setInvestments(updated);
    setHighlighted(Object.keys(effect)[0]);
    setMessage(`News Applied: ${item.title}`);

    setTimeout(() => {
      setHighlighted('');
      setMessage('');
    }, 1500);
  };

  const resetInvestments = () => {
    setInvestments(baseInvestment);
    setMessage("Portfolio reset.");
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">⚡ News Flash! Market Events</h2>
      <p className="mb-4 text-gray-600">Click on any news to see its impact on your investments.</p>

      {/* News Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {newsItems.map((item, idx) => (
          <div
            key={idx}
            className={`cursor-pointer p-4 rounded-lg border transition-transform transform hover:scale-105 border-gray-300 hover:border-blue-500 hover:bg-blue-50`}
            onClick={() => applyEffect(item)}
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
            <p className="text-xs text-gray-500">{item.explanation}</p>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={resetInvestments}
          className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Reset Portfolio
        </button>
        {message && <span className="text-sm text-green-600">{message}</span>}
      </div>

      {/* Investments Display */}
      <div>
        <h3 className="text-lg font-semibold mb-2">💰 Your Investment Portfolio</h3>
        <ul className="space-y-1">
          {Object.entries(investments).map(([type, value]) => (
            <li
              key={type}
              className={`flex justify-between px-4 py-2 border rounded ${
                highlighted === type ? 'bg-green-100 transition duration-500 ease-out' : 'bg-gray-50'
              }`}
            >
              <span className="capitalize font-medium">{type}</span>
              <span>₹ {value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
