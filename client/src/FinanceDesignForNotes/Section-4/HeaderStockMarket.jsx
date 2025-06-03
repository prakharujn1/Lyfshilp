export default function HeaderStockMarket({ topicRefs }) {
  return (
    <div
      id="4-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4-1"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="w-[90%] p-5 mx-auto">
      <div className="bg-yellow-50  shadow-2xl p-6 rounded-2xl mx-auto space-y-4">
        <h2 className="text-3xl text-center font-bold mb-3">
          Understanding the Stock Market
        </h2>

        <div className="bg-blue-200 p-4 rounded-xl shadow-sm">
          <p className="font-medium mb-4 text-xl">
            In this section, you will learn -{" "}
          </p>
          <ul className="list-disc pl-3 text-xl space-y-2 ">
            <li>What Is the Stock Market?</li>
            <li>Where Do You Buy Shares?</li>
            <li>Why Do Share Prices Go Up or Down?</li>
            <li>Is the Stock Market Like Gambling?</li>
            <li>Key Terms</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
}
