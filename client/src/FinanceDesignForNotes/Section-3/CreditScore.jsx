export default function CreditScore() {
  return (
    <div className="max-w-3xl p-3 shadow-2xl rounded-lg">
      <h2 className="text-xl max-w-2xl font-bold mb-2">
        🧾 Credit Score – Your Money Reputation
      </h2>
      <div className="max-w-2xl mt-5">
        <div
          className="p-2 shadow-lg rounded-lg
        "
        >
          Every time you borrow and pay back, the bank gives you a
          <strong> Credit Score</strong>.
        </div>
        <div className="bg-green-200 mt-2 p-2 shadow-lg rounded-lg">
          Good credit score = banks trust you and offer more credit.
        </div>
        <div className="bg-red-200 mt-2 p-2 shadow-lg rounded-lg">
          Bad score = they say “No thanks” when you need a loan later.
        </div>
      </div>
    </div>
  );
}
