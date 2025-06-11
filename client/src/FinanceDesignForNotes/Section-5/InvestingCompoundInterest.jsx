import React from "react";
import { ArrowDownCircle, Snowflake } from "lucide-react";

const InvestingCompoundInterest = () => {
  return (
    <div
      
      className="mb-10"
    >
      <section id="investing-compound" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          🔄 What is Compound Interest?
        </h2>

        <div className="bg-blue-50 p-6 rounded-xl shadow-md space-y-6">
          <div className="flex items-start">
            <ArrowDownCircle className="text-blue-500 w-6 h-6 mt-1 mr-3" />
            <p className="text-gray-700">
              You earn interest on your money →
            </p>
          </div>

          <div className="flex items-start">
            <ArrowDownCircle className="text-blue-500 w-6 h-6 mt-1 mr-3" />
            <p className="text-gray-700">
              Then you earn interest on that interest too →
            </p>
          </div>

          <div className="flex items-start">
            <ArrowDownCircle className="text-blue-500 w-6 h-6 mt-1 mr-3" />
            <p className="text-gray-700">
              And it keeps growing like a snowball! ❄️
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200 flex items-start">
            <Snowflake className="w-6 h-6 text-blue-500 mr-3" />
            <p className="text-blue-800 font-medium">
              Compound interest = interest on interest + time = massive growth!
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default InvestingCompoundInterest;
