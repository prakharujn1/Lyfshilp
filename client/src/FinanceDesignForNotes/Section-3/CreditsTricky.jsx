export default function CreditsTricky() {
  const smartUse = [
    "Buying school laptop with 0% EMI",
    "Emergency hospital bill",
    "Paying full amount on time",
  ];
  const riskyUse = [
    "Shopping online every day and not paying bills",
    "Buying expensive clothes on credit for fun",
    "Paying only minimum due — and interest grows!",
  ];

  return (
    <div className="w-[90%] mx-auto">
    <div className="bg-yellow-50 shadow-lg mx-auto p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">⚠️ Why Credit Can Be Tricky:</h2>
      <div className="grid grid-cols-2 mt-5  space-x-2">
        <div className="bg-green-200 p-2 rounded-lg">
          <div className="text-center text-2xl">
            <strong>Smart Use</strong>
          </div>
          {smartUse.map((item) => (
            <div className="mt-4 text-center text-xl">{item}</div>
          ))}
        </div>
        <div className="bg-red-200 p-2 rounded-lg">
          <div className="text-center text-2xl">
            <strong>Risky Use</strong>
          </div>
          {riskyUse.map((item) => (
            <div className="mt-4 text-center text-xl">{item}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
      <p className="mt-5 bg-yellow-200 p-3 text-xl rounded-lg">
        🚨 If you keep borrowing and don’t pay back, it becomes debt. That’s
        when credit becomes <strong>dangerous.</strong>
      </p>
      </div>
    </div>
    </div>
  );
}
