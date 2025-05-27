import React from "react";
import { Wrench, Wallet, FileSpreadsheet, Smartphone } from "lucide-react";
import SectionContainer from "./SectionContainer";

const BudgetTools = () => {
  const tools = [
    {
      title: "Envelope Method",
      description: "Put money in different envelopes for different things",
      icon: <Wallet className="text-blue-500" size={24} />,
    },
    {
      title: "Google Sheets",
      description: "For those who like tracking with numbers",
      icon: <FileSpreadsheet className="text-green-500" size={24} />,
    },
    {
      title: "Apps",
      description: "Try Walnut, Spendee, or just your Notes app!",
      icon: <Smartphone className="text-purple-500" size={24} />,
    },
  ];

  return (
    <SectionContainer>
      <div className="flex items-center gap-3 mb-8">
        <Wrench className="text-blue-500" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Budgeting Tools</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 transition-colors duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default BudgetTools;
