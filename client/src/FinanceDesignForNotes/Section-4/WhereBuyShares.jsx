export default function WhereBuyShares() {
  return (
    <div className="bg-yellow-50 max-w-3xl shadow-2xl p-4 rounded-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">🛍️ Where Do You Buy Shares?</h2>
      <div className="grid grid-cols-2 space-x-2">
        <div className="bg-red-200 p-3 rounded-lg text-xl">
          You don’t go to a real shop. You use a <strong>stock exchange</strong>{" "}
          — like a giant online market.
        </div>
        <div className="bg-blue-200 p-3 rounded-lg text-xl">
          In India, we have:
          <ul className="list-disc pl-3">
            <li>NSE: National Stock Exchange</li>
            <li>BSE: Bombay Stock Exchange</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-xl">
        <div className="bg-green-200 mx-auto p-3 mt-5 rounded-lg text-center">
          You also need a Demat account — like a bank account but for holding
          shares.
        </div>
      </div>
    </div>
  );
}
