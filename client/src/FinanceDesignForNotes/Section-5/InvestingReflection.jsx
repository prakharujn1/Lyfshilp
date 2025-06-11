import React from "react";
import { HelpCircle, MessageCircle } from "lucide-react";

const InvestingReflection = () => {
  return (
    <div
      
      className="mb-10"
    >
      <section id="investing-reflection" className="py-24 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-yellow-400">
          <div className="flex items-start mb-6">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <HelpCircle className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-700 mb-1">💭 Think Before You Spend</h3>
              <p className="text-gray-700">
                If you started saving ₹100 per month today, what would you cut back on?
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 space-y-4">
            <div className="flex items-start">
              <MessageCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
              <p className="text-gray-800">
                What would you spend less on? 🍫 Snacks? 🎮 Games? 🛒 Subscriptions?
              </p>
            </div>

            <div className="flex items-start">
              <MessageCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
              <p className="text-gray-800">
                Would you really miss it next week, or would you forget about it?
              </p>
            </div>

            <div className="flex items-start">
              <MessageCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
              <p className="text-gray-800">
                What could that ₹100 become if you saved it every month for 5 years?
              </p>
            </div>

            <p className="text-center text-sm text-gray-600 italic pt-4">
              Your habits today decide your peace tomorrow ✨
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default InvestingReflection;
