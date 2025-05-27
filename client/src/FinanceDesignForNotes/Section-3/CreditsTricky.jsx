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
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">⚠️ Why Credit Can Be Tricky:</h2>
      <div className="grid grid-cols-2 mt-5  space-x-2">
        <div className="bg-green-200 p-2 rounded-lg">
          <div className="text-center">
            <strong>Smart Use</strong>
          </div>
          {smartUse.map((item) => (
            <div className="mt-4 mx-auto">{item}</div>
          ))}
        </div>
        <div className="bg-red-200 p-2 rounded-lg">
          <div className="text-center">
            <strong>Risky Use</strong>
          </div>
          {riskyUse.map((item) => (
            <div className="mt-4">{item}</div>
          ))}
        </div>
      </div>
      <p className="mt-5">
        🚨 If you keep borrowing and don’t pay back, it becomes debt. That’s
        when credit becomes dangerous.
      </p>
    </div>
  );
}
