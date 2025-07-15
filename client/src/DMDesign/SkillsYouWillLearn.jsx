import React, { useEffect, useRef } from "react";

const skills = [
  {
    title: "Marketing Strategy & Planning",
    description:
      "Learn to break down business goals, identify target audiences, and build effective marketing roadmaps.",
  },
  {
    title: "Digital Channels & Tools",
    description:
      "Explore how SEO, social media, email marketing, and paid ads work together to build strong digital campaigns.",
  },
  {
    title: "Creative Content Development",
    description:
      "Craft compelling messages, visuals, and stories that connect with audiences and drive engagement.",
  },
  {
    title: "Ethical & Responsible Marketing",
    description:
      "Understand data privacy, transparency, and inclusive practices in modern marketing.",
  },
  {
    title: "Analytics & Data-Driven Decisions",
    description:
      "Collect, interpret, and use marketing data to improve campaign performance and customer experience.",
  },
  {
    title: "Campaign Design & Communication",
    description:
      "Plan, launch, and pitch marketing ideas confidently—just like a rising digital strategist.",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto">
              {[
                {
                  title: "Community-Driven Learning",
                  desc: "Collaborate with peers and mentors to explore marketing strategies and build real campaigns in a supportive environment.",
                  bg: "#352A81",
                  img: "/imageForDesign/25.png",
                },
                {
                  title: "Step by Step Guidance",
                  desc: "Progressively build your digital marketing skills—from branding and content creation to SEO and paid ads.",
                  bg: "#E11D48",
                  img: "/imageForDesign/27.png",
                },
                {
                  title: "Practical, Real World Focus",
                  desc: "Apply marketing concepts to real-world business challenges through simulations, campaign design, and ethical case studies.",
                  bg: "#2542AA",
                  img: "/imageForDesign/26.png",
                },
                {
                  title: "Industry-Level Certification",
                  desc: "Earn certificates that showcase your marketing expertise and job-ready digital skills to schools and employers.",
                  bg: "#B81563",
                  img: "/imageForDesign/28.png",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="border border-gray-100 shadow-md rounded-xl overflow-visible transform transition-transform duration-300 hover:scale-105 hover:shadow-xl text-white"
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Image floating */}
                  <div className="relative h-28 flex justify-center items-end overflow-visible">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-[200px] h-[250px] object-contain absolute -top-8 z-10 drop-shadow-xl"
                    />
                  </div>

                  {/* Text content */}
                  <div className="pt-16 pb-4 px-3 text-center">
                    <h3 className="font-semibold text-base">{card.title}</h3>
                    <p className="text-sm mt-1 leading-snug">{card.desc}</p>
                  </div>
                </div>
              ))}
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
              <div className="mt-6 rounded-xl overflow-hidden shadow-md h-[220px] sm:h-[280px] md:h-[600px]">
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
