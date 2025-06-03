export default function StockMarketAndGambling({ topicRefs }) {
  return (
    <div
      id="4-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4-6"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="bg-yellow-50 max-w-3xl shadow-2xl p-6 rounded-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-3">
        🧪 Is the Stock Market Like Gambling?
      </h2>

      <div className="bg-red-100 p-4 rounded-xl shadow-sm">
        <ul className="space-y-1 text-xl text-gray-700">
          <li>🔸 No, if you learn and research.</li>
          <li>🔸 Yes, if you guess randomly.</li>
        </ul>
      </div>

      <div className="bg-blue-100 p-4 rounded-xl shadow-sm space-y-2">
        <p className="font-semibold text-xl">That’s why we learn about:</p>
        <ul className="list-disc pl-6 space-y-1 text-xl text-gray-700">
          <li>Company health</li>
          <li>Industry trends</li>
          <li>Risks and returns</li>
        </ul>
        <p className="text-xl">
          So we <strong>invest</strong>, not gamble.
        </p>
      </div>
    </div>
    </div>
    
  );
}
