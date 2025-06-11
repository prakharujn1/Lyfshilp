import React from "react";
import { Split } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingWantsVsNeeds = () => (
  <div
      
      className="mb-10"
    >
    <SectionContainer>
    <div className="flex items-center gap-3 mb-6">
      <Split className="text-purple-500" size={28} />
      <h2 className="text-2xl font-bold text-gray-800">Want vs. Need: What’s the Difference?</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-green-50 p-4 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg text-green-700 mb-2">Needs (Essentials)</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>School supplies</li>
          <li>Food and snacks</li>
          <li>Bus pass or travel</li>
          <li>Phone data for school</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
        <h3 className="font-bold text-lg text-yellow-700 mb-2">Wants (Extras)</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Designer sneakers</li>
          <li>Extra pizza toppings</li>
          <li>Uber for short walk</li>
          <li>Unlimited streaming plan</li>
        </ul>
      </div>
    </div>
    <p className="mt-4 text-gray-700 font-medium">
      Smart spenders learn to: <br /> ✓ Buy what they need first <br /> ✓ Save for what they want later
    </p>
  </SectionContainer>
  </div>
);

export default SpendingWantsVsNeeds;
