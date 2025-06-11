import React from "react";
import { Clock4 } from "lucide-react";

const InvestingWhyTimeMatters = () => {
  return (
    <div
      
      className="mb-10"
    >
      <section id="investing-time" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-green-500">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Clock4 className="text-green-600 h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                ⌛ Why Time Matters More Than Amount
              </h3>
              <p className="text-gray-700 mt-2">
                The earlier you start saving, the more time your money has to grow.
                Even small monthly savings can outperform larger savings started later.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full bg-white rounded-xl border">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-3 px-4 text-left">Start Age</th>
                  <th className="py-3 px-4 text-left">Monthly Save</th>
                  <th className="py-3 px-4 text-left">Total Invested</th>
                  <th className="py-3 px-4 text-left">Value at Age 40</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4">15</td>
                  <td className="py-3 px-4">₹500</td>
                  <td className="py-3 px-4">₹60,000</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">₹1,00,000+</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4">25</td>
                  <td className="py-3 px-4">₹1,000</td>
                  <td className="py-3 px-4">₹1,20,000</td>
                  <td className="py-3 px-4 text-red-500 font-medium">₹90,000–₹95,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 mt-6 text-center">
            ✅ Starting early gives compounding more years to work its magic.
          </p>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default InvestingWhyTimeMatters;
