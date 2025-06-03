import React from "react";
import { ShieldCheck, ArrowUpDown, PiggyBank, CreditCard } from "lucide-react";

const BankingBasics = ({ topicRefs }) => {
  return (
    <div
      id="1-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1-2"] = el;
        }
      }}
      className="mb-10"
    >
      <section id="what-is-bank" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What is a Bank?
          </h2>

          <div className="mb-16">
            <p className="text-lg text-gray-700 mb-6">
              Imagine you have ₹500. You don't want to lose it or spend it all
              at once. So what do you do? You put it in a bank. Why? Because
              banks are like safe houses for your money.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-xl flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Keeps your money safe
                  </h3>
                  <p className="text-gray-700">
                    Banks have secure systems and insurance to protect your
                    deposits.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <ArrowUpDown className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Lets you access your money
                  </h3>
                  <p className="text-gray-700">
                    You can withdraw your money whenever you need it.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <PiggyBank className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Gives you interest
                  </h3>
                  <p className="text-gray-700">
                    Banks pay you extra money for keeping your money with them.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Helps you pay for things
                  </h3>
                  <p className="text-gray-700">
                    Banks provide cards and apps that let you pay without using
                    cash.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              What Happens When You Put Money in a Bank?
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">
                  1
                </div>
                <p className="text-gray-700">You deposit it (put it in).</p>
              </li>

              <li className="flex items-start">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">
                  2
                </div>
                <p className="text-gray-700">
                  The bank uses this money to give loans to others (like your
                  parents or shopkeepers).
                </p>
              </li>

              <li className="flex items-start">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">
                  3
                </div>
                <p className="text-gray-700">
                  They charge interest on loans and pay you interest for saving.
                </p>
              </li>

              <li className="flex items-start">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">
                  4
                </div>
                <p className="text-gray-700">So both sides win!</p>
              </li>
            </ul>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-blue-700 font-medium">
                This is how banks work: they take deposits from people who want
                to save, and lend that money to people who need loans. The
                difference between the interest they pay savers and the interest
                they charge borrowers is how banks make money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default BankingBasics;
