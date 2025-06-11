import React from "react";
import { BrainCircuit } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingIntro = () => (
  <div
      
      className="mb-10"
    >
    <SectionContainer className="bg-white">
      <div className="flex items-center gap-3 mb-6">
        <BrainCircuit className="text-green-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">What Are Smart Spending Habits?</h2>
      </div>
      <p className="text-lg text-gray-700 mb-4">
        Smart spending means using your money wisely, not just quickly. It’s not about never spending — it’s about thinking before spending and making your money go further.
      </p>
      <p className="text-lg text-gray-700">
        It helps you stay in control, avoid regrets, and save for what matters.
      </p>
    </SectionContainer>
  </div>
);

export default SpendingIntro;
