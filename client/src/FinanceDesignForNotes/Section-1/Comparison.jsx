import React from "react";
import { comparisonItems } from "../../utilities/constants";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Digital Wallet vs Bank Account
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-3 text-center py-4 bg-blue-600 text-white font-semibold">
              <div>Feature</div>
              <div>Digital Wallet (Paytm, GPay)</div>
              <div>Bank Account</div>
            </div>

            {comparisonItems.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 py-4 px-4 ${
                  index % 2 === 0 ? "bg-white" : "bg-blue-50"
                } hover:bg-blue-100 transition-colors`}
              >
                <div className="font-medium">{item.feature}</div>
                <div className="text-center">
                  {item.digitalWallet.supported ? (
                    <span className="inline-flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-1" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-red-500">
                      <XCircle className="h-5 w-5 mr-1" />
                    </span>
                  )}
                </div>
                <div className="text-center">
                  {item.bankAccount.supported ? (
                    <span className="inline-flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 mr-1" />
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-red-500">
                      <XCircle className="h-5 w-5 mr-1" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Tip: Use Both Wisely
                </h3>
                <p className="text-gray-700">
                  Always link your digital wallet to a bank for safety and easy
                  money transfers. Don't keep large amounts in digital wallets
                  as they don't offer the same protections as banks.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-blue-700">
                Best Uses for Digital Wallets
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Quick payments for small purchases
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Splitting bills with friends
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Paying for transportation (auto, bus tickets)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Taking advantage of cashback offers
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-green-700">
                Best Uses for Bank Accounts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Storing most of your money safely
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Earning interest on savings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Setting up automatic bill payments
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Making large purchases or transfers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
