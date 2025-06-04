import React, { useState } from "react";
import { LightbulbIcon } from "lucide-react";
import SectionContainer from "./SectionContainer";

const Scenario = ({ topicRefs }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id="2-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2-7"] = el;
        }
      }}
      className="mb-10"
    >
      <SectionContainer className="bg-blue-50">
      <div className="flex items-center gap-3 mb-6">
        <LightbulbIcon className="text-yellow-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Real-Life Scenario</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto">
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            You want a new mouse for ₹1,200.
          </h3>

          <div
            className={`space-y-4 overflow-hidden transition-all duration-500 ${
              expanded ? "max-h-96" : "max-h-24"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-gray-700">
                You save ₹300 every month for 4 months.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-gray-700">
                You didn't buy too many chips or waste money on games.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                🎉
              </div>
              <p className="text-gray-700">
                <strong>Result:</strong> You bought it without asking anyone for
                money!
              </p>
            </div>

            <div className="pt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full w-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Month 1: ₹300</span>
                <span>Month 4: ₹1,200</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-blue-500 hover:text-blue-700 font-medium flex items-center text-sm"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </SectionContainer>
    </div>
    
  );
};

export default Scenario;
