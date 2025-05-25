import { useState } from "react";

const items = [
  { name: "School bag", price: 1200 },
  { name: "Spotify Premium", price: 119 },
  { name: "New jeans", price: 2000 },
  { name: "Birthday party", price: 3000 },
  { name: "Bus pass", price: 500 },
  { name: "Xbox controller", price: 4000 },
];

const getFeedback = (item, category, totalSpent, limit) => {
  const { name, price } = item;

  const overspendWarning = totalSpent + price > limit
    ? `⚠️ Buying this will exceed your ₹${limit} monthly budget!`
    : "";

  switch (category) {
    case "needNow":
      if (["Bus pass", "School bag"].includes(name)) {
        return `✅ Smart! ₹${price} on ${name} is a good investment. ${overspendWarning}`;
      } else {
        return `🤔 Consider if ${name} (₹${price}) is truly essential. ${overspendWarning}`;
      }

    case "wantLater":
      return `⏳ Waiting for ${name} shows patience. ${overspendWarning}`;

    case "skipIt":
      return `🙌 Skipping ${name} (₹${price}) saved money. Good choice!`;

    default:
      return "";
  }
};

const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const Challenge3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expenseLimit, setExpenseLimit] = useState("");
  const [limitSet, setLimitSet] = useState(false);

  const [sortedItems, setSortedItems] = useState({
    needNow: [],
    wantLater: [],
    skipIt: [],
  });

  const [feedbackLog, setFeedbackLog] = useState([]);
  const [lastFeedback, setLastFeedback] = useState("");

  const getTotalSpent = () =>
    [...sortedItems.needNow, ...sortedItems.wantLater].reduce(
      (sum, item) => sum + item.price,
      0
    );

  const handleSort = (category) => {
    const item = items[currentIndex];
    const currentSpent = getTotalSpent();
    const feedback = getFeedback(item, category, currentSpent, Number(expenseLimit));

    setSortedItems((prev) => ({
      ...prev,
      [category]: [...prev[category], item],
    }));

    setFeedbackLog((prev) => [
      ...prev,
      { ...item, category, feedback },
    ]);

    setLastFeedback(feedback);

    setTimeout(() => {
      setLastFeedback("");
      setCurrentIndex((prev) => prev + 1);
    }, 1800);
  };

  if (!limitSet) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Set Your Monthly Expense Limit 💰
        </h2>
        <input
          type="number"
          placeholder="e.g. 3000"
          className="w-full border p-2 mb-4 rounded"
          value={expenseLimit}
          onChange={(e) => setExpenseLimit(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={() => {
            if (expenseLimit > 0) setLimitSet(true);
          }}
        >
          Start Sorting ➡️
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Challenge 3: Wants vs Needs Sorting
      </h2>

      <p className="text-sm text-gray-600 text-center mb-2">
        Monthly Budget: ₹{expenseLimit}
      </p>

      {currentIndex < items.length ? (
        <>
          <ProgressBar current={currentIndex} total={items.length} />

          <div className="mb-4 p-4 bg-gray-100 rounded shadow-sm">
            <p className="text-lg font-semibold">
              🛒 Item: {items[currentIndex].name}
            </p>
            <p className="text-sm text-gray-600">
              💰 Price: ₹{items[currentIndex].price}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <button
              onClick={() => handleSort("needNow")}
              className="flex-1 bg-green-600 text-white py-2 px-3 rounded hover:bg-green-700"
            >
              ✅ Need Now
            </button>
            <button
              onClick={() => handleSort("wantLater")}
              className="flex-1 bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700"
            >
              ⏳ Want Later
            </button>
            <button
              onClick={() => handleSort("skipIt")}
              className="flex-1 bg-gray-600 text-white py-2 px-3 rounded hover:bg-gray-700"
            >
              ❌ Skip It
            </button>
          </div>

          {lastFeedback && (
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded shadow text-sm">
              {lastFeedback}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-green-700">🎉 Sorting Complete!</h3>
            <p className="text-sm text-gray-600">
              Here's your decision summary & spending report:
            </p>
          </div>

           <div className="mt-6 text-center font-medium">
            <p>
              🧾 <strong>Total Spent:</strong> ₹{getTotalSpent()} / ₹{expenseLimit}
            </p>
            {getTotalSpent() > Number(expenseLimit) ? (
              <p className="text-red-600 font-semibold mt-1">
                ❌ You overspent! Try skipping more non-essentials.
              </p>
            ) : (
              <p className="text-green-600 font-semibold mt-1">
                ✅ Well done! You stayed within your budget!
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["needNow", "wantLater", "skipIt"].map((cat) => (
              <div key={cat} className="bg-gray-50 p-4 rounded shadow">
                <h4 className="font-semibold text-center capitalize mb-2">
                  {cat.replace(/([A-Z])/g, " $1")}
                </h4>
                {sortedItems[cat].length > 0 ? (
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    {sortedItems[cat].map((item, i) => (
                      <li key={i}>
                        {item.name} — ₹{item.price}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-500 text-center">No items</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">💬 Feedback Summary</h4>
            <ul className="list-disc list-inside text-sm space-y-2">
              {feedbackLog.map((entry, idx) => (
                <li key={idx}>
                  <strong>{entry.name}</strong> (₹{entry.price}) → <em>{entry.category.replace(/([A-Z])/g, " $1")}</em>: {entry.feedback}
                </li>
              ))}
            </ul>
          </div>

         
        </>
      )}
    </div>
  );
};

export default Challenge3;
