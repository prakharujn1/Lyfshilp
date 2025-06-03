export default function KeyTermsStock({ topicRefs }) {
  const words = ["Share/Stock", "Investor", "Profit", "Loss", "Dividend"];
  const meaning = [
    "A small part of a company you can buy",
    "Someone who puts money into shares",
    "When your share price goes up and you sell",
    "When you sell a share for less than you paid",
    "A reward companies give to shareholders from profits",
  ];

  return (
    <div
      id="4-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4-7"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="bg-blue-200 shadow p-4 rounded-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">📈 Key Terms to Know:</h2>
      <div className="grid grid-cols-2 mt-5  space-x-2">
        <div className="bg-green-200 p-2 rounded-lg">
          <div className="text-center text-2xl">
            <strong>Word</strong>
          </div>
          {words.map((item) => (
            <div className="mt-4 mx-auto text-center text-xl">{item}</div>
          ))}
        </div>
        <div className="bg-red-200 p-2 rounded-lg">
          <div className="text-center text-2xl">
            <strong>What It Means</strong>
          </div>
          {meaning.map((item) => (
            <div className="mt-4 text-xl text-center">{item}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
      
      </div>
    </div>
    </div>
    
  );
}
