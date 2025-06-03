import React from "react";
import { AlertOctagon } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingBadHabits = ({ topicRefs }) => (
  <div
      id="6-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["6-6"] = el;
        }
      }}
      className="mb-10"
    >
    <SectionContainer>
    <div className="flex items-center gap-3 mb-6">
      <AlertOctagon className="text-red-500" size={28} />
      <h2 className="text-2xl font-bold text-gray-800">Bad Spending Habits (To Avoid)</h2>
    </div>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>🚫 Spending all your pocket money on Day 1</li>
      <li>🚫 Buying things just to “fit in”</li>
      <li>🚫 Ignoring better deals or prices</li>
      <li>🚫 Using credit to buy what you can’t afford</li>
      <li>🚫 Not checking how much money is left</li>
    </ul>
  </SectionContainer>
  </div>
  
);

export default SpendingBadHabits;
