import React from "react";
import { PieChart } from "lucide-react";
import SectionContainer from "./SectionContainer";

const BudgetRule = ({ topicRefs }) => {
  const categories = [
    {
      percentage: "50%",
      category: "Needs",
      example: "Food, data, books",
      color: "bg-blue-500",
    },
    {
      percentage: "30%",
      category: "Wants",
      example: "Pizza, games, parties",
      color: "bg-yellow-400",
    },
    {
      percentage: "20%",
      category: "Savings",
      example: "Gadgets, emergencies",
      color: "bg-green-500",
    },
  ];

  return (
    <div
      id="2-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2-5"] = el;
        }
      }}
      className="mb-10"
    >
      <SectionContainer className="bg-blue-50">
      <div className="flex items-center gap-3 mb-8">
        <PieChart className="text-blue-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">
          The 50-30-20 Rule (Easy Version)
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:translate-y-[-8px] transition-transform duration-300"
          >
            <div className={`${item.color} h-2`}></div>
            <div className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-800">
                  {item.percentage}
                </span>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                {item.category}
              </h3>
              <p className="text-center text-gray-600">{item.example}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
    </div>
    
  );
};

export default BudgetRule;
