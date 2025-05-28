import React from "react";
import { Sparkles } from "lucide-react";

const InvestingTips = () => {
  return (
    <section id="investing-tips" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-green-50 p-6 md:p-8 rounded-xl shadow-md border-l-4 border-green-600">
          <div className="flex items-start mb-4">
            <div className="bg-white p-3 rounded-full shadow mr-4">
              <Sparkles className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800">
                🌟 Golden Rule of Saving
              </h3>
              <p className="text-gray-700 mt-2">
                Start small, start early. Even ₹100/month can become a lot over time thanks to compounding.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg border">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              ❄️ Think of Compounding Like a Snowball
            </h4>
            <p className="text-gray-700">
              When you roll a snowball down a hill, it gets bigger and bigger. Compound interest does the same thing with your money — your interest earns interest!
            </p>
          </div>

          <p className="text-blue-700 mt-6 italic text-center">
            "The earlier you start, the less you need to save later. Time is your best friend in investing."
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestingTips;