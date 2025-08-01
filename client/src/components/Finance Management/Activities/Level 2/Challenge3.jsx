import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { useFinance } from "../../../../contexts/FinanceContext";
import { usePerformance } from "@/contexts/PerformanceContext"; // for performance


// Lottie animations
import superheroAnimation from "../../../../lotties/superhero.json";
import thinkingAnimation from "../../../../lotties/thinking.json";

const items = [
  { name: "School bag", price: 1200 },
  { name: "Spotify Premium", price: 119 },
  { name: "New jeans", price: 2000 },
  { name: "Birthday party", price: 3000 },
  { name: "Bus pass", price: 500 },
  { name: "Xbox controller", price: 4000 },
];

const getFeedback = (item, category, totalSpent, limit) => {
  const overspendWarning =
    totalSpent + item.price > limit
      ? `⚠️ Buying this will exceed your ₹${limit} monthly budget!`
      : "";

  switch (category) {
    case "needNow":
      if (["Bus pass", "School bag"].includes(item.name)) {
        return `✅ Smart! ₹${item.price} on ${item.name} is a good investment. ${overspendWarning}`;
      } else {
        return `🤔 Consider if ${item.name} (₹${item.price}) is truly essential. ${overspendWarning}`;
      }
    case "wantLater":
      return `⏳ Waiting for ${item.name} shows patience. ${overspendWarning}`;
    case "skipIt":
      return `🙌 Skipping ${item.name} (₹${item.price}) saved money. Good choice!`;
    default:
      return "";
  }
};

const getLottieAnimation = (category) => {
  switch (category) {
    case "needNow":
      return superheroAnimation;
    case "wantLater":
      return thinkingAnimation;
    default:
      return null;
  }
};

const Challenge3 = () => {
  const { completeFinanceChallenge } = useFinance();
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [expenseLimit, setExpenseLimit] = useState("");
  const [sortedItems, setSortedItems] = useState({
    needNow: [],
    wantLater: [],
    skipIt: [],
  });
  const [feedbackLog, setFeedbackLog] = useState([]);
  const [lastFeedback, setLastFeedback] = useState("");
  const [currentAction, setCurrentAction] = useState("");

  const { updatePerformance } = usePerformance(); // for performance
 const [startTime,setStartTime] = useState(Date.now()); // for performance


  const getTotalSpent = () =>
    [...sortedItems.needNow].reduce((sum, item) => sum + item.price, 0);

  const handleStartGame = () => {
    if (Number(inputValue) > 0) setExpenseLimit(inputValue);
  };

  const handleSort = (category) => {
    const item = items[step];
    const total = getTotalSpent();
    const feedback = getFeedback(item, category, total, Number(expenseLimit));
    const lottieType = getLottieAnimation(category);

    setCurrentAction(category);

    setSortedItems((prev) => ({
      ...prev,
      [category]: [...prev[category], item],
    }));
    setFeedbackLog((prev) => [...prev, { ...item, category, feedback }]);
    setLastFeedback(feedback);

    setTimeout(() => {
      setLastFeedback("");
      setCurrentAction("");
      setStep((prev) => prev + 1);
    }, 2000);
  };

  if (!expenseLimit) {
    return (
      <motion.div
        className="max-w-md mx-auto mt-6 px-4 py-6 bg-white rounded-xl shadow-xl sm:max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-2">
          🎮 Budget Challenge
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Enter your monthly budget to begin:
        </p>
        <input
          type="number"
          placeholder="e.g. 5000"
          className="w-full border-2 p-2 rounded text-center mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleStartGame}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          🚀 Start Game
        </button>
      </motion.div>
    );
  }

  if (step >= items.length) {
    const overspent = getTotalSpent() > Number(expenseLimit);
    if (!overspent) {
      completeFinanceChallenge(1, 2); // mark challenge completed

      // for performance
      const totalTimeSec = (Date.now() - startTime) / 1000;
      updatePerformance({
        moduleName: "Finance",
        topicName: "bankingExpert",
        score: 10,
        accuracy: 100,
        avgResponseTimeSec: totalTimeSec / items.length,
        studyTimeMinutes: Math.ceil(totalTimeSec / 60),
        completed: true,
       
      });
      setStartTime(Date.now());
    }

    return (
      <motion.div
        className="max-w-full sm:max-w-3xl mx-auto mt-6 px-4 py-6 bg-white rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          🎉 Game Over
        </h2>
        <p className="text-center mb-2">
          🧾 Total Spent: ₹{getTotalSpent()} / ₹{expenseLimit}
        </p>
        <p
          className={`text-center font-bold ${overspent ? "text-red-500" : "text-green-500"
            }`}
        >
          {overspent
            ? "❌ You overspent. Try skipping more next time!"
            : "✅ Great job! You stayed within budget!"}
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["needNow", "wantLater", "skipIt"].map((cat) => (
            <div key={cat} className="bg-gray-100 p-4 rounded shadow">
              <h4 className="text-center font-bold text-blue-700 uppercase">
                {cat.replace(/([A-Z])/g, " $1")}
              </h4>
              {sortedItems[cat].length > 0 ? (
                <ul className="mt-2 list-disc pl-5 text-sm">
                  {sortedItems[cat].map((item, i) => (
                    <li key={i}>
                      {item.name} — ₹{item.price}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-xs text-gray-500 mt-2">
                  No items
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">💬 Feedback Summary</h3>
          <div className="space-y-4">
            {feedbackLog.map((entry, i) => (
              <div key={i} className="bg-white border rounded-lg p-4 shadow-sm">
                <p className="font-bold text-gray-800">
                  {entry.name} — ₹{entry.price}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Category:</span>{" "}
                  <span className="text-blue-700 uppercase">
                    {entry.category.replace(/([A-Z])/g, " $1")}
                  </span>
                </p>
                <p className="mt-1 text-gray-700">{entry.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  const currentItem = items[step];
  const currentLottie = getLottieAnimation(currentAction);

  return (
    <motion.div
      className="max-w-full sm:max-w-5xl mx-auto mt-6 px-4 py-6 bg-white rounded-xl shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Right side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🛍️ Budget Choice
          </h2>
          <p className="text-center text-sm mb-2 text-gray-600">
            Budget: ₹{expenseLimit}
          </p>

          <div className="flex justify-center mb-4 h-40">
            {currentLottie && (
              <Lottie animationData={currentLottie} loop={true} />
            )}
          </div>

          <div className="mb-4 bg-gray-100 p-4 rounded shadow text-center">
            <p className="text-lg font-semibold">🛒 Item: {currentItem.name}</p>
            <p className="text-sm text-gray-700">
              💰 Price: ₹{currentItem.price}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <button
              onClick={() => handleSort("needNow")}
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700 flex-1"
            >
              ✅ Need Now
            </button>
            <button
              onClick={() => handleSort("wantLater")}
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex-1"
            >
              ⏳ Want Later
            </button>
            <button
              onClick={() => handleSort("skipIt")}
              className="bg-gray-600 text-white py-2 rounded hover:bg-gray-700 flex-1"
            >
              ❌ Skip It
            </button>
          </div>

          <AnimatePresence>
            {lastFeedback && (
              <motion.div
                className="bg-yellow-100 text-yellow-800 p-3 rounded shadow text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {lastFeedback}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Challenge3;
