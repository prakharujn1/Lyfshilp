import React from "react";
import { ThumbsUp } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingTips = () => (
  <div
      
      className="mb-10"
    >
    <SectionContainer className="bg-blue-50">
    <div className="flex items-center gap-3 mb-6">
      <ThumbsUp className="text-green-500" size={28} />
      <h2 className="text-2xl font-bold text-gray-800">Tips for Smart Spending</h2>
    </div>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>✅ Make a budget before the month/week starts</li>
      <li>✅ Track your expenses in a diary or app</li>
      <li>✅ Avoid buying just because your friends are</li>
      <li>✅ Look for discounts, sales, and cashback</li>
      <li>✅ Wait 24 hours before buying expensive things (cooling-off rule!)</li>
    </ul>
  </SectionContainer>
  </div>
  
);

export default SpendingTips;
