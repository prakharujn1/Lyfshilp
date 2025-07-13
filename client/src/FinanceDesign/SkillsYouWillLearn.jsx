import React, { useEffect, useRef } from "react";

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
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 } // Adjust visibility ratio if needed
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="py-12">
      {/* ✅ Skills Cards Section */}
      <div className="grid md:grid-cols-2 gap-y-6 gap-x-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex rounded-2xl overflow-hidden shadow-sm border bg-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
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

      {/* ✅ Why Learn With Us Section */}
      <section className="bg-[#F9FAFB] mt-18 py-20 w-screen relative left-1/2 -translate-x-1/2">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left - Feature Images */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {/* Card 1 */}
              <div className="bg-[#352A81] text-white p-5 rounded-xl">
                <div className="flex justify-center mb-3">
                  <img
                    src="/imageForDesign/CommunityDriven.png"
                    alt="Community Driven"
                    className="w-28 h-28"
                  />
                </div>
                <h3 className="text-lg font-semibold">
                  Community-Driven Learning
                </h3>
                <p className="text-sm mt-1">
                  Join a community of like-minded learners and financial experts
                  to accelerate your growth.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#E11D48] text-white p-5 rounded-xl">
                <div className="flex justify-center mb-3">
                  <img
                    src="/imageForDesign/StepByStepGuidance.png"
                    alt="Step by Step Guidance"
                    className="w-28 h-28"
                  />
                </div>
                <h3 className="text-lg font-semibold">Step by Step Guidance</h3>
                <p className="text-sm mt-1">
                  Follow our structured learning paths from basic concepts to
                  advanced financial strategies.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#2542AA] text-white p-5 rounded-xl">
                <div className="flex justify-center mb-3">
                  <img
                    src="/imageForDesign/PracticalRealWorldFocus.png"
                    alt="Practical Real World Focus"
                    className="w-28 h-28"
                  />
                </div>
                <h3 className="text-lg font-semibold">
                  Practical, Real World Focus
                </h3>
                <p className="text-sm mt-1">
                  Our curriculum bridges theory and practice with real-world
                  applications and case studies.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#B81563] text-white p-5 rounded-xl">
                <div className="flex justify-center mb-3">
                  <img
                    src="/imageForDesign/IndustryLevelCertification.png"
                    alt="Industry Level Certification"
                    className="w-28 h-28"
                  />
                </div>
                <h3 className="text-lg font-semibold">
                  Industry-Level Certification
                </h3>
                <p className="text-sm mt-1">
                  Earn certificates that showcase your financial knowledge and
                  expertise to employers.
                </p>
              </div>
            </div>

            {/* Right - Heading + Auto-scroll Video */}
            <div className="flex flex-col justify-start w-full max-w-[750px]">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Why learn with us?
                </h2>
                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Learn the proven system to build wealth and achieve financial
                  independence.
                </p>
              </div>
              <div className="mt-6 rounded-xl overflow-hidden shadow-md h-[220px] sm:h-[280px] md:h-[530px]">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-xl"
                  poster="/imageForDesign/video-poster.png"
                  muted
                  controls
                  controlsList="nofullscreen nodownload noplaybackrate"
                >
                  <source src="/Bb-Video.mp4" type="video/mp4" />
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
