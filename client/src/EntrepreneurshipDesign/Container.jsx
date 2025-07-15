import React, { useState } from "react";
import CTA from "./CTA";
import CTA2 from "./CTA2";
import CTA3 from "./CTA3";
import LevelsDisplay from "./LevelsDisplay";
import { useAuth } from "@/contexts/AuthContext";
import SkillsYouWillLearn from "./SkillsYouWillLearn";
import GameInfo from "./GameInfo";

const features = [
  {
    title: "3 Comprehensive Levels",
    description:
      "Explore entrepreneurship step-by-step — from problem spotting and idea generation to launching real-world solutions — through interactive, game-based journeys across 3 skill tiers.",
    image: "/imageForDesign/level.png",
    bg: "bg-[#BFF080]",
  },
  {
    title: "Practical Exercises",
    description:
      "Pitch business ideas, map customer journeys, and tackle startup challenges with hands-on simulations, design thinking tasks, and strategy puzzles.",
    image: "/imageForDesign/practical.png",
    bg: "bg-[#FFE1C6]",
  },
  {
    title: "Expert Guidance",
    description:
      "Learn from successful founders through in-game mentorship, venture walkthroughs, and personalized feedback to build your entrepreneurial mindset.",
    image: "/imageForDesign/expert.png",
    bg: "bg-[#F9CFFF]",
  },
  {
    title: "Lifetime Access",
    description:
      "Build entrepreneurial skills at your own pace with lifetime access to all modules, updated tools, and real-world startup case studies.",
    image: "/imageForDesign/lifetime.png",
    bg: "bg-[#C8E7FF]",
  },
];

const modulesfor6to8 = [
  {
    title: "LEVEL 1: Innovator Explorer",
    description:
      "Mission: Discover how entrepreneurs identify and solve real-world problems using creativity and purpose",
    challenges: [
      {
        title: "Innovation Explorer (Discovery Game)",
        description:
          "Objective: Spot daily problems and brainstorm bold solutions.",
        duration: "45 min",
        path: "/innovation-explorer",
      },
      {
        title: "AI Startup Builder (Venture Creator)",
        description:
          "Objective: Design a meaningful AI business that solves a real need.",
        duration: "45 min",
        path: "/ai-startup-builder",
      },
    ],
  },
  {
    title: "LEVEL 2: Ethical Pitch Champion",
    description:
      "Mission: Make responsible choices while building AI ventures that are fair, safe, and inclusive",
    challenges: [
      {
        title: "Ethics & Impact (Decision Game)",
        description:
          "Objective: Explore fairness, bias, and safety in AI solutions.",
        duration: "50 min",
        path: "/ethics-and-impact",
      },
      {
        title: "Pitch Champion (Presentation Challenge)",
        description:
          "Objective: Create and deliver a powerful pitch for your AI venture.",
        duration: "50 min",
        path: "/pitch-champion",
      },
    ],
  },
  {
    title: "LEVEL 3: MVP Strategist",
    description:
      "Mission: Understand your users, test your ideas, and improve your product like a real startup founder",
    challenges: [
      {
        title: "User Persona Detective (Empathy Game)",
        description:
          "Objective: Create user profiles and explore their needs and goals.",
        duration: "50 min",
        path: "/user-persona-detective",
      },
      {
        title: "MVP Test (Startup Simulation)",
        description:
          "Objective: Test your idea, gather feedback, and make it better.",
        duration: "50 min",
        path: "/mvp-test",
      },
    ],
  },
];

const modulesfor9to10 = [
  {
    title: "LEVEL 1: Digital Explorer",
    description: "Focus: Strategy, audience personas & social media planning",
    challenges: [
      {
        title: "Persona Puzzle — Simulation Edition",
        description:
          "Objective: Match personas, run campaign flow, and write a creative reel for GlowPop.",
        duration: "12–15 min",
        path: "/digital-explorer",
      },
      {
        title: "Platform Picker – Strategy Lab",
        description:
          "Objective: Align campaign goals with platforms and choose effective content strategies.",
        duration: "12–15 min",
        path: "/carousel-campaign",
      },
      {
        title: "Audience Decoder – Targeting Tactics",
        description:
          "Objective: Segment audiences, build a targeting strategy, and craft short ad copy.",
        duration: "12–15 min",
        path: "/brand-voice",
      },
    ],
  },
  {
    title: "LEVEL 2: Content Commander",
    description: "Focus: Content creation, storytelling & brand voice",
    challenges: [
      {
        title: "Reel Architect – Build to Hook",
        description:
          "Objective: Build a 15-sec Reel with correct sequence, visuals and captions.",
        duration: "15–18 min",
        path: "/reel-architect",
      },
      {
        title: "Storyboard Sprint – Carousel Campaign",
        description:
          "Objective: Create an Instagram carousel campaign and match tone to brand.",
        duration: "15–18 min",
        path: "/StoryboardSprintGame",
      },
      {
        title: "Brand Voice Challenge – AI Chat Sim",
        description:
          "Objective: Respond to customers on different platforms and maintain brand voice.",
        duration: "15–18 min",
        path: "/BrandVoiceChallengeGame",
      },
    ],
  },
  {
    title: "LEVEL 3: Campaign Captain – Instagram Ad Lab",
    description:
      "Focus: Build ad creatives, set targeting & budget, analyze and optimize performance",
    challenges: [
      {
        title: "Campaign Captain – Instagram Ad Lab",
        description:
          "Objective: End-to-end campaign simulation: ad creation, targeting, budgeting, and dashboard optimization.",
        duration: "18–20 min",
        path: "/CampaignCaptainGame",
      },
    ],
  },
];

const modulesfor11to12 = [
  {
    title: "LEVEL 1: Idea Innovator",
    description:
      "Theme: Spot real problems, generate AI solutions, and build your first business pitch.",
    challenges: [
      {
        title: "Problem-to-Solution Relay",
        description:
          "Objective: Spot 3 real-life problems, suggest AI-powered solutions, and write a mini business pitch.",
        duration: "45–50 min",
        path: "/problem-solution-game",
      },
    ],
  },
  {
    title: "LEVEL 2: Startup Strategist",
    description:
      "Theme: Simulate your own AI startup — define your product, pricing, positioning, and pitch like a pro.",
    challenges: [
      {
        title: "Startup Simulation Sprint",
        description:
          "Objective: Define your product, revenue model, positioning, and create a strong value proposition.",
        duration: "50–55 min",
        path: "/startup-simulation-game",
      },
    ],
  },
  {
    title: "LEVEL 3: Responsible Founder",
    description:
      "Theme: Make smart, ethical choices for your AI startup and protect your users through thoughtful design.",
    challenges: [
      {
        title: "Ethics Firewall",
        description:
          "Objective: Spot red flags in a startup scenario and build an ethical response matrix.",
        duration: "45–50 min",
        path: "/ethics-firewall-game",
      },
    ],
  },
  {
    title: "LEVEL 4: Market Commander",
    description:
      "Theme: Compete in a virtual market — manage pricing, branding, and customer satisfaction to grow your startup.",
    challenges: [
      {
        title: "Simulated Market War",
        description:
          "Objective: Balance pricing, marketing, and service to outperform rivals over 3 simulated rounds.",
        duration: "60 min",
        path: "/SimulatedMarketGame",
      },
      {
        title: "Pitch Arena Pro",
        description:
          "Objective: Build a 4-slide pitch deck and deliver a confident 90-second pitch for the virtual boardroom.",
        duration: "55–60 min",
        path: "/PitchArenaPro",
      },
    ],
  },
];

const tabs = ["Overview Of Game", "Levels", "Skills you will Learn"];

const Container = () => {
  const [activeTab, setActiveTab] = useState("Overview Of Game");
  const { user, role } = useAuth();

  let modules = [];

  if (role === "admin") {
    modules = [
      { group: "Class 6 to 8", levels: modulesfor6to8 },
      { group: "Class 9 to 10", levels: modulesfor9to10 },
      { group: "Class 11 to 12", levels: modulesfor11to12 },
    ];
  } else if (!user) {
    modules = modulesfor6to8;
  } else {
    const userClass = user.userClass;
    if (["6th", "7th", "8th"].includes(userClass)) {
      modules = modulesfor6to8;
    } else if (["9th", "10th"].includes(userClass)) {
      modules = modulesfor9to10;
    } else if (["11th", "12th"].includes(userClass)) {
      modules = modulesfor11to12;
    }
  }

  const renderTabContent = () => {
    if (activeTab === "Overview Of Game") {
      return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-visible shadow-md bg-white border border-gray-100 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
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
      if (role === "admin") {
        return (
          <>
            {modules.map((group, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold mb-4 text-green-700">
                  {group.group}
                </h2>
                <LevelsDisplay modules={group.levels} />
              </div>
            ))}
            <CTA2 />
          </>
        );
      } else {
        return (
          <>
            <LevelsDisplay modules={modules} />
            <CTA2 />
          </>
        );
      }
    }

    if (activeTab === "Skills you will Learn") {
      return (
        <>
          <SkillsYouWillLearn />
          <CTA3 />
        </>
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
