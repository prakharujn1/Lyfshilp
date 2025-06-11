import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { accountTypes } from "../../utilities/constants.js";

const AccountTypes = () => {
  return (
    <div
      
      className="mb-10"
    >
      <section id="account-types" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Types of Bank Accounts
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-4 px-6 text-left rounded-tl-xl">
                    Account Type
                  </th>
                  <th className="py-4 px-6 text-left">What It's For</th>
                  <th className="py-4 px-6 text-left">Interest</th>
                  <th className="py-4 px-6 text-left rounded-tr-xl">
                    Can You Take Money Out Easily?
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountTypes.map((account, index) => (
                  <tr
                    key={account.type}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-blue-50"
                    } hover:bg-blue-100 transition-colors`}
                  >
                    <td className="py-4 px-6 font-medium">{account.type}</td>
                    <td className="py-4 px-6">{account.purpose}</td>
                    <td className="py-4 px-6">
                      {account.interest.hasInterest ? (
                        <span className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Yes{" "}
                          {account.interest.rate &&
                            `(${account.interest.rate})`}
                        </span>
                      ) : (
                        <span className="flex items-center text-red-500">
                          <XCircle className="h-4 w-4 mr-1" />
                          No
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {account.liquidity.canWithdraw ? (
                        <span className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {account.liquidity.details}
                        </span>
                      ) : (
                        <span className="flex items-center text-red-500">
                          <XCircle className="h-4 w-4 mr-1" />
                          {account.liquidity.details}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3">Savings Account</h3>
              <p className="text-gray-700 mb-4">
                Perfect for students and beginners. This is probably the first
                account you'll open.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Easy to open with minimal documentation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Helps develop saving habits
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Offers basic interest on your money
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <h3 className="font-semibold text-lg mb-3">Fixed Deposit (FD)</h3>
              <p className="text-gray-700 mb-4">
                Great for saving money you don't need immediately and earning
                higher interest.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Lock your money for a fixed period
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Higher interest rates than savings accounts
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Penalties for early withdrawal
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-3">Current Account</h3>
              <p className="text-gray-700 mb-4">
                Designed for businesses or individuals who make many
                transactions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  No transaction limits
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  No interest earned
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Often has minimum balance requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default AccountTypes;
