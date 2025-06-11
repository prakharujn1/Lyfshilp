import React from "react";
import { Calculator } from "lucide-react";
import SectionContainer from "./SectionContainer";

const BudgetFormula = () => {
  return (
    <div
     
      className="mb-10"
    >
      <SectionContainer className="bg-blue-50">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-blue-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">
          Simple Budget Formula
        </h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="p-8 rounded-xl bg-white shadow-lg max-w-md w-full transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Money In</span>
            <span className="text-gray-400">−</span>
            <span className="text-red-500">Money Out</span>
            <span className="text-gray-400">=</span>
            <span className="text-green-500">Savings</span>
          </div>
          <div className="mt-6 text-center text-gray-600">
            <p className="italic">(Income − Expenses = What you can save)</p>
          </div>
        </div>
      </div>
    </SectionContainer>
    </div>
    
  );
};

export default BudgetFormula;
