import React from "react";
import { TrendingUp, PiggyBank } from "lucide-react";

const InvestingIntro = ({ topicRefs }) => {
  return (
   <div
      id="5-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5-1"] = el;
        }
      }}
      className="mb-10"
    >
      <section id="investing-intro" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">
          📈 The Value of Investing Early
        </h2>
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          📘 What Does “Investing Early” Mean?
        </h2>
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
          <p className="text-gray-700 text-lg mb-4">
            Investing means putting your money into something (like stocks, mutual funds, or savings) so it can grow over time.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            When you start early, your money gets more time to grow, which means you can end up with a lot more in the future — even if you invest smaller amounts.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <PiggyBank className="text-green-600 h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Save Early</h4>
                <p className="text-gray-700">
                  Starting from a young age gives your savings more time to multiply.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="text-blue-600 h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Watch It Grow</h4>
                <p className="text-gray-700">
                  The power of compounding helps your interest earn interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default InvestingIntro;
