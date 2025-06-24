import React, { useState } from "react";
import { motion } from "framer-motion";

const marketEvents = [
  {
    message: "A competitor enters with a cheaper product.",
    effect: { demand: -20, trust: 0 }
  },
  {
    message: "Your marketing goes viral for one week.",
    effect: { demand: 30, trust: 5 }
  },
  {
    message: "Customers start complaining about delivery delays.",
    effect: { demand: -10, trust: -20 }
  },
  {
    message: "A news article boosts eco-friendly product popularity.",
    effect: { demand: 20, trust: 10 }
  }
];

const supportCostMap = { Low: 0, Medium: 1000, High: 2000 };
const satisfactionMap = { Low: -10, Medium: 0, High: 10 };

const SimulatedMarketGame = () => {
  const [round, setRound] = useState(1);
  const [price, setPrice] = useState(150);
  const [marketing, setMarketing] = useState(1000);
  const [support, setSupport] = useState("Medium");
  const [event, setEvent] = useState(null);
  const [results, setResults] = useState([]);
  const [final, setFinal] = useState(false);

  const playRound = () => {
    const selectedEvent = marketEvents[Math.floor(Math.random() * marketEvents.length)];
    setEvent(selectedEvent);

    const baseDemand = 1000;
    const demandChange = selectedEvent.effect.demand + (300 - price) + marketing / 100;
    const satisfaction = 50 + satisfactionMap[support] + selectedEvent.effect.trust;
    const unitsSold = Math.max(Math.floor(baseDemand * (demandChange / 100)), 0);
    const revenue = unitsSold * price;
    const cost = unitsSold * 100 + marketing + supportCostMap[support];
    const profit = revenue - cost;

    const result = {
      round,
      event: selectedEvent.message,
      unitsSold,
      revenue,
      profit,
      satisfaction
    };

    setResults([...results, result]);

    if (round === 3) {
      setFinal(true);
    } else {
      setRound(round + 1);
    }
  };

  const restartGame = () => {
    setRound(1);
    setPrice(150);
    setMarketing(1000);
    setSupport("Medium");
    setEvent(null);
    setResults([]);
    setFinal(false);
  };

  const totalProfit = results.reduce((acc, r) => acc + r.profit, 0);
  const avgSatisfaction = Math.round(results.reduce((acc, r) => acc + r.satisfaction, 0) / results.length);

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🌍 Simulated Market War</h1>
      {!final ? (
        <>
          <p className="text-lg mb-2">🎯 Round {round}: Set your market strategy</p>
          <div className="space-y-4">
            <label>🏷️ Price (₹100–₹300): {price}</label>
            <input type="range" min="100" max="300" value={price} onChange={e => setPrice(+e.target.value)} className="w-full" />

            <label>📣 Marketing Spend (₹0–₹5000): {marketing}</label>
            <input type="range" min="0" max="5000" step="100" value={marketing} onChange={e => setMarketing(+e.target.value)} className="w-full" />

            <label>💬 Customer Support Level:</label>
            <div className="space-x-2">
              {['Low', 'Medium', 'High'].map(level => (
                <button
                  key={level}
                  onClick={() => setSupport(level)}
                  className={`px-4 py-2 rounded-full ${support === level ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                >{level}</button>
              ))}
            </div>
            <button onClick={playRound} className="bg-blue-500 text-white px-6 py-2 rounded-full">📊 Submit Strategy</button>
          </div>
          {event && (
            <motion.div className="mt-6 bg-yellow-100 p-4 rounded-xl border">
              <p className="font-semibold">📘 Market Event:</p>
              <p>{event.message}</p>
            </motion.div>
          )}
        </>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">🏁 Final Business Report</h2>
          <p>Total Profit: ₹{totalProfit}</p>
          <p>Avg. Customer Satisfaction: {avgSatisfaction}</p>
          <p>🎖️ Badge Earned: Strategy Master</p>
          <button onClick={restartGame} className="bg-pink-500 text-white px-6 py-2 rounded-full">🔁 Play Again</button>
        </div>
      )}
      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">📈 Outcome Reports</h3>
          {results.map((r, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-2 bg-white">
              <p>🔄 Round {r.round}</p>
              <p>📘 Event: {r.event}</p>
              <p>📦 Units Sold: {r.unitsSold}</p>
              <p>💵 Revenue: ₹{r.revenue}</p>
              <p>💰 Profit: ₹{r.profit}</p>
              <p>😊 Satisfaction: {r.satisfaction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimulatedMarketGame;
