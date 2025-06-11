import React from "react";
import { Receipt } from "lucide-react";
import SectionContainer from "./SectionContainer";

const ExampleBudget = () => {
  const budgetItems = [
    { type: "Canteen snacks", amount: "₹600" },
    { type: "Data top-up", amount: "₹200" },
    { type: "Birthday gift for friend", amount: "₹300" },
    { type: "Books for school", amount: "₹500" },
    { type: "Save for a smartwatch", amount: "₹400" },
  ];

  return (
    <div
      
      className="mb-10"
    >
      <SectionContainer>
      <div className="flex items-center gap-3 mb-6">
        <Receipt className="text-blue-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Example Budget</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-lg font-medium text-gray-700">
            You get ₹2,000 per month.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-3 text-left text-gray-700">Expense Type</th>
                <th className="py-3 text-right text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              {budgetItems.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150 ${
                    index === budgetItems.length - 1 ? "bg-blue-50" : ""
                  }`}
                >
                  <td className="py-3 text-left text-gray-800">{item.type}</td>
                  <td className="py-3 text-right font-medium text-gray-800">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-200 bg-gray-50">
                <td className="py-3 text-left font-bold text-gray-800">
                  Total:
                </td>
                <td className="py-3 text-right font-bold text-blue-600">
                  ₹2,000
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-4 text-center">
          <p className="text-green-600 font-medium">👉 All planned out!</p>
        </div>
      </div>
    </SectionContainer>
    </div>
    
  );
};

export default ExampleBudget;
