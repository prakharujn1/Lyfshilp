import React from "react";

export default function BankCard({ bank, onSelect, selected }) {
  return (
    <div className={` ${selected ? "bg-red-100 border-2 border-blue-400" : "bg-white"} rounded-2xl shadow-lg p-6 hover:scale-105 transition cursor-pointer`}>
      <h2 className="text-2xl font-semibold mb-2">{bank.name}</h2>
      <ul className="text-gray-700 text-xl mb-4">
        <li>💰 {bank.fee}</li>
        <li>📈 {bank.interest}</li>
        <li>📱 {bank.digital}</li>
      </ul>
      <button
        className="bg-blue-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => onSelect(bank)}
      >
        Choose {bank.name}
      </button>
    </div>
  );
}
