import React from "react";
import { HelpCircle } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingQuestions = () => (
  <SectionContainer>
    <div className="flex items-center gap-3 mb-6">
      <HelpCircle className="text-blue-600" size={28} />
      <h2 className="text-2xl font-bold text-gray-800">Questions to Ask Before You Buy</h2>
    </div>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Do I really need this?</li>
      <li>Can I afford it?</li>
      <li>Will I still want this next week?</li>
      <li>Is this the best price or is there a cheaper option?</li>
      <li>What will I have to give up if I buy this now?</li>
    </ul>
  </SectionContainer>
);

export default SpendingQuestions;
