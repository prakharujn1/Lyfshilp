import React from "react";

const skills = [
  {
    title: "Money Basics & Finance Principles",
    description:
      "Learn how to budget, save, and build strong financial habits.",
  },
  {
    title: "Smart Investment Strategies",
    description: "Invest wisely based on age, goals, and risk appetite.",
  },
  {
    title: "Debt Control & Credit Hacks",
    description: "Master loan repayments and boost your credit score.",
  },
  {
    title: "Startup & Business Finance Tips",
    description: "Fund and manage your business like a pro.",
  },
  {
    title: "Retirement & Passive Income Plans",
    description: "Plan early for freedom and financial stability later.",
  },
  {
    title: "Tax-Saving Tactics",
    description: "Optimize your income with smart tax strategies.",
  },
];

const SkillsYouWillLearn = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      {/* ✅ Skills Cards Section */}
      <div className="grid md:grid-cols-2 gap-y-6 gap-x-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex rounded-2xl overflow-hidden shadow-sm border bg-white"
          >
            <div className="w-[80px] bg-[#C9FFA2] flex items-center justify-center">
              <img
                src="/imageForDesign/TickMark.png"
                alt="Tick Mark"
                className="w-16 h-16"
              />
            </div>
            <div className="p-5 flex-1">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Why Learn With Us Section - Only Images */}
      <section className="mt-18 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Feature Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imageForDesign/CommunityDriven.png"
                alt="Community Driven"
                className="rounded-xl w-full"
              />
              <img
                src="/imageForDesign/StepByStepGuidance.png"
                alt="Step by Step Guidance"
                className="rounded-xl w-full"
              />
              <img
                src="/imageForDesign/PracticalRealWorldFocus.png"
                alt="Practical Real World Focus"
                className="rounded-xl w-full"
              />
              <img
                src="/imageForDesign/IndustryLevelCertification.png"
                alt="Industry Level Certification"
                className="rounded-xl w-full"
              />
            </div>

            {/* Right - Heading + Video (unchanged layout) */}
            <div className="flex flex-col justify-start h-full">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Why learn with us?
                </h2>
                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Learn the proven system to build wealth and achieve financial
                  independence.
                </p>
              </div>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md h-[540px]">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  poster="/imageForDesign/video-poster.png"
                  controls
                >
                  <source src="/videos/why-learn.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsYouWillLearn;
