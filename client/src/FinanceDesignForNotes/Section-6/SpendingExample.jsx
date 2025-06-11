import React from "react";
import { Lightbulb } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingExample = () => (
  <div
      
      className="mb-10"
    >
    <SectionContainer className="bg-blue-50">
    <div className="flex items-center gap-3 mb-6">
      <Lightbulb className="text-yellow-500" size={28} />
      <h2 className="text-2xl font-bold text-gray-800">Real-Life Example</h2>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-4">
      <p className="text-gray-700">
        You have ₹500 for the week. You can either:
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Spend ₹400 on a gaming skin today and be broke by Wednesday</li>
        <li>
          OR Buy canteen lunch (₹75), a birthday gift (₹50), and still save ₹200 for next week
        </li>
      </ul>
      <p className="text-green-600 font-medium">Which one feels smarter by Friday?</p>
    </div>
  </SectionContainer>
  </div>
  
);

export default SpendingExample;
