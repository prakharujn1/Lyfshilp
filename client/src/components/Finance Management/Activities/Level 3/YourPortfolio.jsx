import React, { useState } from "react";

const options = [
  "Stocks",
  "Mutual Funds",
  "Cryptocurrency",
  "Gold", 
  "Fixed Deposits",
];

const reasonsList = [
  "Long-term growth",
  "Low risk",
  "High returns",
  "Diversification",
  "Tax benefits",
  "Liquidity",
  "Stable income",
  "Hedge against inflation",
  "Capital appreciation",
  "Emerging market potential",
  "Regular dividends",
  "Safe investment",
  "Easy management",
  "Growth in tech sector",
  "Support sustainable companies",
  "Speculative gain",
  "Favorable market conditions",
  "Inflation protection",
  "Currency hedge",
  "Personal interest",
];

function generateAIFeedback(results, selectedReasons) {
  const totalOptions = results.length;
  const investedAmounts = results.map((r) => r.invested);
  const totalInvested = investedAmounts.reduce((a, b) => a + b, 0);

  // 1. Diversification check
  const investedCount = results.filter((r) => r.invested > 0).length;
  let diversificationFeedback = "";
  if (investedCount < 3) {
    diversificationFeedback =
      "Your portfolio seems under-diversified. Consider spreading investments across more options.";
  } else {
    diversificationFeedback = "Good diversification across multiple investment options.";
  }

  // 2. Risk feedback based on Crypto % and reason mismatch
  const cryptoInvestment =
    results.find((r) => r.option === "Cryptocurrency")?.invested || 0;
  const cryptoPercent = (cryptoInvestment / totalInvested) * 100;
  let riskFeedback = "";
  if (cryptoPercent > 40) {
    riskFeedback = "High allocation in Cryptocurrency increases your portfolio risk.";
  } else {
    riskFeedback = "Your risk level appears balanced.";
  }

  // 3. Check reason-relevance mismatch (simple example)
  let reasonMismatch = false;
  if (selectedReasons.includes("Low risk") && cryptoPercent > 30) {
    reasonMismatch =
      true;
  }

  let reasonFeedback = reasonMismatch
    ? "Warning: You selected 'Low risk' as a reason but allocated a large portion to high-risk assets like Cryptocurrency."
    : "Your reasons align well with your investment choices.";

  return [diversificationFeedback, riskFeedback, reasonFeedback];
}

function YourPortfolio() {
  const [allocations, setAllocations] = useState(
    options.reduce((acc, opt) => {
      acc[opt] = 0;
      return acc;
    }, {})
  );
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simulate 6 months growth - just a mock, simple returns per option
  const returnsMap = {
    Stocks: 1.10, // 10% gain
    "Mutual Funds": 1.07,
    Cryptocurrency: 1.25,
    Gold: 1.05,
    "Fixed Deposits": 1.03,
  };

  const totalInvestment = 10000;

  const handleAllocationChange = (option, value) => {
    const val = Number(value);
    if (val < 0) return;
    setAllocations((prev) => ({ ...prev, [option]: val }));
  };

  const handleReasonToggle = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter((r) => r !== reason));
    } else if (selectedReasons.length < 3) {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const validateAndSubmit = () => {
    const total = Object.values(allocations).reduce((a, b) => a + b, 0);
    if (total !== totalInvestment) {
      setError(`Total allocation must be exactly ₹${totalInvestment}. Current total: ₹${total}`);
      return;
    }
    if (selectedReasons.length !== 3) {
      setError("Please select exactly 3 reasons.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  // Calculate simulated results after 6 months
  const simulatedResults = options.map((option) => {
    const invested = allocations[option];
    const growth = returnsMap[option] || 1;
    const valueAfter6Months = Math.round(invested * growth);
    return { option, invested, valueAfter6Months };
  });

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Build & Present Your Portfolio</h1>

      <p className="mb-4">
        Allocate ₹10,000 across 3–5 options below. Select exactly 3 reasons for your choices.
      </p>

      <h2 className="font-semibold mb-2">Allocate Amounts (₹)</h2>
      <div className="grid grid-cols-1 gap-3 mb-4">
        {options.map((option) => (
          <label key={option} className="flex justify-between items-center">
            <span>{option}</span>
            <input
              type="number"
              min={0}
              step={100}
              value={allocations[option]}
              onChange={(e) => handleAllocationChange(option, e.target.value)}
              className="border rounded px-2 py-1 w-24 text-right"
              disabled={submitted}
            />
          </label>
        ))}
      </div>

      <h2 className="font-semibold mb-2">Select 3 Reasons</h2>
      <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto mb-4">
        {reasonsList.map((reason) => (
          <label key={reason} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedReasons.includes(reason)}
              disabled={submitted && !selectedReasons.includes(reason)}
              onChange={() => handleReasonToggle(reason)}
            />
            <span className="text-sm">{reason}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}

      {!submitted ? (
        <button
          onClick={validateAndSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Portfolio
        </button>
      ) : (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">📊 Portfolio Results after 6 months</h2>
          <ul className="mb-4 space-y-2">
            {simulatedResults.map(({ option, invested, valueAfter6Months }) => (
              <li key={option} className="flex justify-between border-b border-gray-200 pb-1">
                <span>{option}:</span>
                <span>
                  Invested ₹{invested.toLocaleString("en-IN")} → Value ₹
                  {valueAfter6Months.toLocaleString("en-IN")}
                </span>
              </li>
            ))}
          </ul>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Selected Reasons:</h3>
            <ul className="list-disc list-inside space-y-1">
              {selectedReasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* AI Feedback Section */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
            <h3 className="font-semibold mb-2 text-blue-700">🤖 AI Feedback:</h3>
            {generateAIFeedback(simulatedResults, selectedReasons).map((feedback, i) => (
              <p key={i} className="mb-2 text-blue-800">
                {feedback}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default YourPortfolio;
