import React from "react";
import { BarChart2 } from "lucide-react";

const InvestingTable = ({ topicRefs }) => {
  return (
    <div
      id="5-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5-4"] = el;
        }
      }}
      className="mb-10"
    >
      <section id="investing-table" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-6">
          <BarChart2 className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-blue-800">
            📊 Simple vs Compound Interest Comparison
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse rounded-xl shadow-xl">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-3 px-4">Year</th>
                <th className="py-3 px-4">Simple Interest (10%)</th>
                <th className="py-3 px-4">Compound Interest (10%)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              <tr className="bg-white hover:bg-blue-100">
                <td className="py-3 px-4 font-medium">1</td>
                <td className="py-3 px-4">₹1,100</td>
                <td className="py-3 px-4">₹1,100</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="py-3 px-4 font-medium">2</td>
                <td className="py-3 px-4">₹1,200</td>
                <td className="py-3 px-4">₹1,210</td>
              </tr>
              <tr className="bg-white hover:bg-blue-100">
                <td className="py-3 px-4 font-medium">3</td>
                <td className="py-3 px-4">₹1,300</td>
                <td className="py-3 px-4">₹1,331</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="py-3 px-4 font-medium">4</td>
                <td className="py-3 px-4">₹1,400</td>
                <td className="py-3 px-4">₹1,464</td>
              </tr>
              <tr className="bg-white hover:bg-blue-100">
                <td className="py-3 px-4 font-medium">5</td>
                <td className="py-3 px-4">₹1,500</td>
                <td className="py-3 px-4">₹1,610</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-600 mt-6 italic">
          Compound interest doesn't just add — it multiplies. The longer it runs, the bigger the gap.
        </p>
      </div>
    </section>
    </div>
    
  );
};

export default InvestingTable;