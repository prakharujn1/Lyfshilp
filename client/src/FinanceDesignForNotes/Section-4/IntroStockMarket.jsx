export default function IntroStockMarket({ topicRefs }) {
  return (
    <div
      id="4-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4-2"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="w-[90%] mx-auto">
      <div className="bg-yellow-50 max-w-2xl shadow-2xl p-4 rounded-lg mx-auto">
        <h2 className="text-2xl font-bold mb-2">🧠 What Is the Stock Market?</h2>
        <p className="text-xl">
          The stock market is like a big shop where people buy and sell pieces
          of companies. These pieces are called stocks or shares. When you buy a
          share, you own a small part of a company — like being a mini-owner!
        </p>
      </div>
    </div>
    </div>
    
  );
}
