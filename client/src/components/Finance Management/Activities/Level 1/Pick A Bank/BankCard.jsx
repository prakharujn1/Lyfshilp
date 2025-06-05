import React from "react";

export default function BankCard({ bank, onSelect, selected }) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between ${
        selected ? "bg-red-100 border-2 border-blue-400" : "bg-white"
      } rounded-2xl shadow-lg p-4 md:p-6 hover:scale-105 transition cursor-pointer`}
    >
      <div>
        <h2 className="text-lg md:text-2xl font-semibold mb-2">{bank.name}</h2>
        <ul className="text-gray-700 text-base md:text-xl mb-4 space-y-1">
          <li>💰 {bank.fee}</li>
          <li>📈 {bank.interest}</li>
          <li>📱 {bank.digital}</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-auto">
        <button
          className="flex-1 bg-blue-500 text-white text-lg md:text-xl px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => onSelect(bank)}
        >
          Choose {bank.name}
        </button>

      </div>
    </div>
  );
}
