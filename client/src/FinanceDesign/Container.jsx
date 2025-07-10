import React, { useState } from "react";
import CTA from "./CTA";
import GameInfo from "./GameInfo";

const features = [
  {
    title: "3 Comprehensive Levels",
    description:
      "Students can play the fun games of different levels to learn about finance",
    image: "/imageForDesign/level.png",
    bg: "bg-[#BFF080]",
  },
  {
    title: "Practical Exercises",
    description:
      "Students can play the fun games of different levels to learn about finance",
    image: "/imageForDesign/practical.png",
    bg: "bg-[#FFE1C6]",
  },
  {
    title: "Expert Guidance",
    description:
      "Students can play the fun games of different levels to learn about finance",
    image: "/imageForDesign/expert.png",
    bg: "bg-[#F9CFFF]",
  },
  {
    title: "Lifetime Access",
    description:
      "Students can play the fun games of different levels to learn about finance",
    image: "/imageForDesign/lifetime.png",
    bg: "bg-[#C8E7FF]",
  },
];

const tabs = ["Overview Of Game", "Levels", "Skills you will Learn"];

const Container = () => {
  const [activeTab, setActiveTab] = useState("Overview Of Game");

  const renderTabContent = () => {
    if (activeTab === "Overview Of Game") {
      return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-visible shadow-md bg-white border border-gray-100 relative"
              >
                <div
                  className={`relative ${item.bg} h-32 flex justify-center items-end overflow-visible rounded-t-xl`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[200px] h-[250px] object-contain drop-shadow-xl absolute -top-14 z-10"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <GameInfo />
          <CTA />
        </>
      );
    }

    if (activeTab === "Levels") {
      return (
        <>
          <div className="text-center py-10 text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Levels</h2>
            <p>
              Here you'll explore the different levels of our finance games with
              increasing difficulty and deeper concepts.
            </p>
          </div>
          <CTA />
        </>
      );
    }

    if (activeTab === "Skills you will Learn") {
      return (
        <div className="text-center py-10 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Skills You Will Learn</h2>
          <p>
            Understand budgeting, saving, investing, decision-making, and
            financial planning through engaging gameplay.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-t-md font-semibold transition-all duration-150 ease-in-out ${
                activeTab === tab
                  ? "bg-white text-black border-b-2 border-green-600"
                  : "bg-gray-100 text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab-specific content */}
        {renderTabContent()}
      </div>
    </section>
  );
};

export default Container;
