import React, { useState, useEffect } from "react";

const BossLevelTask = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [months, setMonths] = useState(3);
  const [income, setIncome] = useState("");
  const [plan, setPlan] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  // Load saved progress from localStorage (simulate goal progress)
  useEffect(() => {
    const savedProgress = localStorage.getItem("savingProgress");
    if (savedProgress) {
      setProgress(Number(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("savingProgress", progress);
  }, [progress]);

  const isValidInput = () => {
    if (!product.trim()) return "Please enter product name.";
    if (price <= 0) return "Please enter valid product price.";
    if (months <= 0 || months > 24)
      return "Choose saving duration between 1 and 24 months.";
    if (income <= 0) return "Please enter valid monthly income.";
    return "";
  };

  const handleSubmit = () => {
    const validationError = isValidInput();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    const monthlySaving = price / months;
    const suggestedMaxSaving = income * 0.15;

    // Create plan details with suggestion
    const newPlan = [];
    for (let i = 1; i <= months; i++) {
      newPlan.push(`Month ${i}: Save ₹${monthlySaving.toFixed(2)}`);
    }

    // Show warning if monthly saving > 15% income
    if (monthlySaving > suggestedMaxSaving) {
      newPlan.push(
        `⚠️ This plan requires saving more than 15% of your income. Consider increasing duration or lowering price.`
      );
    } else {
      newPlan.push(`✅ Your saving plan is realistic based on your income.`);
    }

    setPlan(newPlan);
    setSubmitted(true);
    setProgress(0); // reset progress for new plan
  };

  // Simulate monthly progress increment
  const incrementProgress = () => {
    if (progress < months) {
      setProgress(progress + 1);
    }
  };

  const progressPercent = months ? Math.min((progress / months) * 100, 100) : 0;

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Boss-Level Task: My Purchase Plan
      </h2>

      <input
        type="text"
        placeholder="Product Name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      <input
        type="number"
        placeholder="Product Price (INR)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
        min={1}
      />

      <input
        type="number"
        placeholder="Monthly Income (INR)"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
        min={1}
      />

      <input
        type="number"
        placeholder="Saving Duration (months, max 24)"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
        min={1}
        max={24}
      />

      {error && (
        <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        Create Saving Plan
      </button>

      {submitted && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-center">
            Plan for <span className="text-purple-700">{product}</span> (₹
            {Number(price).toFixed(2)}):
          </h3>

          <ul className="list-disc list-inside mb-4">
            {plan.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-4">
            <h4 className="font-semibold mb-1">Progress Tracker</h4>
            <div className="w-full bg-gray-300 rounded h-6">
              <div
                className="bg-purple-600 h-6 rounded transition-all"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="text-center mt-1">
              Saved {progress} of {months} months ({progressPercent.toFixed(1)}%)
            </p>
            <button
              onClick={incrementProgress}
              disabled={progress >= months}
              className={`mt-3 w-full py-2 rounded text-white ${
                progress < months
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {progress < months ? "Mark Month as Saved" : "Goal Completed 🎉"}
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Tip: Look for discounts, EMI plans, or increase saving duration for
            easier budgeting!
          </p>
        </div>
      )}
    </div>
  );
};

export default BossLevelTask;
