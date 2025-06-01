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
  const overspendWarning =
    totalSpent + price > limit
      ? `⚠️ Buying this will exceed your ₹${limit} budget!`
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
    <div
      className="w-full bg-gray-200 rounded-full h-5 mb-4 border border-gray-300"
      style={{ fontFamily: "'Comic Neue', cursive" }}
    >
      <div
        className="bg-gradient-to-r from-blue-400 to-green-400 h-5 rounded-full transition-all duration-500 ease-out"
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
    [...sortedItems.needNow].reduce((sum, item) => sum + item.price, 0);

  const handleSort = (category) => {
    const item = items[currentIndex];
    const currentSpent = getTotalSpent();
    const feedback = getFeedback(
      item,
      category,
      currentSpent,
      Number(expenseLimit)
    );

    setSortedItems((prev) => ({
      ...prev,
      [category]: [...prev[category], item],
    }));
    setFeedbackLog((prev) => [...prev, { ...item, category, feedback }]);
    setLastFeedback(feedback);

    setTimeout(() => {
      setLastFeedback("");
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
  };

  if (!limitSet) {
    return (
      <div
        className="max-w-md mx-auto mt-10 p-8 bg-yellow-100 border-4 border-yellow-400 rounded-3xl text-center shadow-xl"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-purple-800 animate-bounce">
          💸 Budget Game Start!
        </h2>
        <p className="mb-4 text-md font-medium">
          Enter your monthly budget to begin:
        </p>
        <input
          type="number"
          placeholder="e.g. 3000"
          className="w-full p-3 rounded-lg border-2 border-yellow-400 text-lg mb-4"
          value={expenseLimit}
          onChange={(e) => setExpenseLimit(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-pink-400 to-red-500 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
          onClick={() => expenseLimit > 0 && setLimitSet(true)}
        >
          🚀 Start Sorting!
        </button>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto p-5">
      <div
        className="p-6 max-w-2xl mx-auto bg-gradient-to-br from-orange-200 to-purple-200 rounded-3xl shadow-xl border-2 border-purple-300"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">
          🎯 Budget Sorting Game
        </h2>
        <p className="text-center text-2xl text-gray-700 mb-2">
          💰 Monthly Limit: ₹{expenseLimit}
        </p>

        {currentIndex < items.length ? (
          <>
            <ProgressBar current={currentIndex} total={items.length} />

            <div className="mb-6 p-4 bg-blue-100 rounded-xl border-l-8 border-blue-400">
              <p className="text-xl font-semibold text-blue-800">
                🛍️ Item: {items[currentIndex].name}
              </p>
              <p className="text-lg font-semibold text-blue-700">
                Price: ₹{items[currentIndex].price}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={() => handleSort("needNow")}
                className="flex-1 bg-green-500 text-white py-2 px-4 rounded-xl text-lg hover:bg-green-600"
              >
                ✅ Need Now
              </button>
              <button
                onClick={() => handleSort("wantLater")}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-xl text-lg hover:bg-blue-600"
              >
                ⏳ Want Later
              </button>
              <button
                onClick={() => handleSort("skipIt")}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-xl text-lg hover:bg-red-600"
              >
                ❌ Skip It
              </button>
            </div>

            {lastFeedback && (
              <div className="bg-yellow-200 text-yellow-900 p-4 rounded-xl text-center font-medium animate-pulse">
                {lastFeedback}
              </div>
            )}
          </>
        ) : (
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-700">
                🎉 Game Over! Summary Time
              </h3>
              <p className="text-gray-600 font-semibold text-xl">
                Here’s what you decided:
              </p>
            </div>

            <div className="text-center font-medium mb-4 text-xl">
              <p>
                🧾 <strong>Total Spent:</strong> ₹{getTotalSpent()} / ₹
                {expenseLimit}
              </p>
              {getTotalSpent() > Number(expenseLimit) ? (
                <p className="text-red-600 font-bold">❌ You overspent!</p>
              ) : (
                <p className="text-green-600 font-bold">
                  ✅ Budget Maintained!
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {Object.entries(sortedItems).map(([key, list]) => (
                <div
                  key={key}
                  className="bg-purple-50 p-4 rounded-xl shadow text-center border-t-4 border-purple-300"
                >
                  <h4 className="text-purple-700 font-bold text-2xl mb-3 uppercase">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h4>
                  {list.length ? (
                    <ul className="text-xl space-y-1">
                      {list.map((item, idx) => (
                        <li key={idx}>
                          • {item.name} — ₹{item.price}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-xl">No items</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-red-200 border border-purple-200 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                💬 Feedback Recap
              </h4>
              <div className="space-y-4">
                {feedbackLog.map((entry, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 p-4 rounded-xl border-l-4 border-purple-400"
                  >
                    <div className="flex justify-between font-semibold text-xl">
                      <span>{entry.name}</span>
                      <span className="text-green-600">₹{entry.price}</span>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">
                      📌 <strong>Category:</strong>{" "}
                      {entry.category.replace(/([A-Z])/g, " $1").toUpperCase()}
                    </p>
                    <p className="mt-2 text-lg text-gray-700">
                      💡 {entry.feedback}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge3;
