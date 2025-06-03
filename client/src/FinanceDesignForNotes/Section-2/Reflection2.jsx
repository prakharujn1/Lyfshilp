import React from "react";
import { HelpCircle } from "lucide-react";
import SectionContainer from "./SectionContainer";

const Reflection = ({ topicRefs }) => {
  return (
    <div
      id="2-8"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2-8"] = el;
        }
      }}
      className="mb-10"
    >
      <SectionContainer>
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="text-blue-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Reflection Prompt</h2>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg max-w-2xl mx-auto">
        <p className="text-lg font-medium text-gray-800 mb-2">Try this:</p>
        <p className="text-gray-700">
          Track your spending for the next 7 days. Where is most of your money
          going?
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="text-center">
              <div className="inline-block w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mb-2">
                1
              </div>
              <p className="text-sm text-gray-600">
                Write down everything you buy
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <div className="text-center">
              <div className="inline-block w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mb-2">
                2
              </div>
              <p className="text-sm text-gray-600">
                Add up all costs by category
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <div className="text-center">
              <div className="inline-block w-6 h-6 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-2">
                3
              </div>
              <p className="text-sm text-gray-600">
                Find where you can save more
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
    </div>
    
  );
};

export default Reflection;
