export default function TypesOfCredit() {
  const creditDetails = [
    {
      type: "Loan",
      desc: "Money borrowed for something big — like college or a car",
    },
    {
      type: "Credit Card",
      desc: "A card that lets you spend now and repay later",
    },
    {
      type: "EMI",
      desc: "“Equated Monthly Installment” — paying for something in small chunks monthly",
    },
    {
      type: "BNPL (Buy Now Pay Later)",
      desc: "Apps let you buy stuff now and pay next month",
    },
  ];

  return (
    <div
      
      className="mb-10"
    >
      <div className="w-[90%] mx-auto">
      <div className="bg-blue-50 shadow-lg p-4 rounded-lg mx-auto">
        <h2 className="text-xl font-bold mb-2">💳 Common Types of Credit:</h2>
        <div className="grid grid-cols-2 mt-5 space-x-2 font-semibold text-2xl text-center">
          <div>Type</div>
          <div>What It Means</div>
        </div>
        <div className="mt-4">
          {creditDetails.map(({ type, desc }, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-2 items-start mb-4"
            >
              <div className="bg-green-200 p-2 rounded-lg text-center text-xl">
                {type}
              </div>
              <div className="bg-red-200 p-2 rounded-lg text-xl">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
}
