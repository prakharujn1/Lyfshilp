export default function CreditExample({ topicRefs }) {
  return (
    <div
      id="3-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3-3"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="w-[90%] mx-auto">
    <div className="bg-yellow-50 max-w-3xl p-5 shadow-2xl rounded-lg mx-auto">
      <h2 className="text-2xl max-w-2xl font-bold mb-2">💡 Real-Life Example</h2>
      <p className="mt-5 text-xl">
        You borrow ₹500 from your older cousin to buy a new cricket bat. He
        says, “Pay me back ₹550 next month.” That extra ₹50? That’s{" "}
        <strong>interest</strong> — the cost of borrowing.
      </p>
    </div>
    </div>
    </div>
    
  );
}
