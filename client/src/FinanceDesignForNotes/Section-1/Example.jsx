import React from "react";
import { Coins, Wallet } from "lucide-react";

const Example = ({ topicRefs }) => {
  return (
    <div
      id="1-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1-6"] = el;
        }
      }}
      className="mb-10"
    >
      <section id="example" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Real-Life Example
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-8">
              Let's say you get ₹1,000 for your birthday. How should you manage
              this money wisely?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Coins className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Put ₹800 in a Bank Account
                  </h3>
                </div>

                <p className="text-gray-700 mb-4">
                  This larger portion goes into your savings account for:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Long-term safety
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Earning interest
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Building savings habits
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Government protection
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Wallet className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Keep ₹200 in a Digital Wallet
                  </h3>
                </div>

                <p className="text-gray-700 mb-4">
                  This smaller portion stays in your digital wallet for:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Quick, small purchases
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Convenience
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Cashback offers
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Splitting bills with friends
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">
                Why This Split Works
              </h3>
              <p className="text-gray-700">
                By putting most of your money (80%) in a bank, you're keeping it
                safe and letting it grow. By keeping a smaller amount (20%) in a
                digital wallet, you have easy access for day-to-day spending.
                This is a balanced approach that gives you both security and
                convenience.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              The 80/20 Rule for Students
            </h3>
            <p className="mb-6">
              As a student, consider saving 80% of any money you receive and
              keeping 20% for spending. This simple rule helps you build savings
              while still enjoying some of your money now.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-blue-100 italic">
                "The habit of saving is itself an education; it fosters every
                virtue, teaches self-denial, cultivates the sense of order,
                trains to forethought, and so broadens the mind."
                <span className="block mt-2 font-medium">- T.T. Munger</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Example;
