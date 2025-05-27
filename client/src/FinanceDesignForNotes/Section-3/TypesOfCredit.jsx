export default function TypesOfCredit() {
  const creditType = ["Loan", "Credit Card", "EMI", "BNPL (Buy Now Pay Later)"];
  const desc = [
    "Money borrowed for something big — like college or a car",
    "A card that lets you spend now and repay later",
    "“Equated Monthly Installment” — paying for something in small chunks monthly",
    "Apps let you buy stuff now and pay next month",
  ];

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">💳 Common Types of Credit:</h2>
      <div className="grid grid-cols-2 mt-5  space-x-2">
        <div className="bg-green-200 p-2 rounded-lg">
          <div className="text-center">
            <strong>Type</strong>
          </div>
          {creditType.map((item) => (
            <div className="mt-4 text-center">{item}</div>
          ))}
        </div>
        <div className="bg-red-200 p-2 rounded-lg">
          <div className="text-center">
            <strong>What It Means</strong>
          </div>
          {desc.map((item) => (
            <div className="mt-4">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
