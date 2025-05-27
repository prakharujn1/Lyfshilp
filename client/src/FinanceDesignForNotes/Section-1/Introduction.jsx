import React from "react";
import { Ban as Bank, ShieldCheck, Coins, CreditCard } from "lucide-react";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Banking <span className="text-blue-600">Basics</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how money and banking work is an essential life skill.
            Let's explore the fundamentals together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Bank className="text-blue-600 h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">What is a Bank?</h3>
            <p className="text-gray-600">
              Learn what banks do, why they exist, and how they help keep your
              money safe while making it grow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <ShieldCheck className="text-green-600 h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Account Types</h3>
            <p className="text-gray-600">
              Discover different types of bank accounts and which ones are best
              for different financial goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Coins className="text-amber-600 h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital Banking</h3>
            <p className="text-gray-600">
              Explore the modern tools that make banking easier and faster than
              ever before.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <CreditCard className="text-purple-600 h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real Examples</h3>
            <p className="text-gray-600">
              See practical examples of how to manage your money with different
              banking tools.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#what-is-bank"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
          >
            Start Learning
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
