import React from "react";
import { Brain, PiggyBank } from "lucide-react";
import SectionContainer from "./SectionContainer";

const IntroSection = ({ topicRefs }) => {
  return (
    <div
      id="2-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2-2"] = el;
        }
      }}
      className="mb-10"
    >
      <SectionContainer className="bg-white">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <Brain className="text-blue-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">
              What is a Budget?
            </h2>
          </div>
          <p className="text-lg text-gray-700">
            A budget is a plan for your money.
          </p>
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700">
              Think of your money like your lunchbox: If you eat all your food
              in the first hour of school, what will you eat later?
            </p>
          </div>
          <p className="text-lg text-gray-700">
            A budget makes sure your money lasts the whole month, just like your
            food needs to last the whole day.
          </p>
        </div>

        <div className="space-y-6 animate-fade-in animation-delay-200">
          <div className="flex items-center gap-3">
            <PiggyBank className="text-blue-500" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">
              Why Should You Budget?
            </h2>
          </div>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-2">
              <span className="inline-block w-5 h-5 mt-1 rounded-full bg-yellow-400 flex-shrink-0"></span>
              <span>So you don't go broke in the second week of the month</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-5 h-5 mt-1 rounded-full bg-yellow-400 flex-shrink-0"></span>
              <span>To make sure you have enough for the things you need</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-5 h-5 mt-1 rounded-full bg-yellow-400 flex-shrink-0"></span>
              <span>
                To save for the things you want (like a phone or game)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
    </div>
    
  );
};

export default IntroSection;
