import React from "react";

const Hero = () => {
  return (
    <section
      className="text-white py-12 md:py-12 pb-0 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #3F9400 0%, #2C6601 100%)",
      }}
    >
      {/* Vector background on the right side - now visible on all screens */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img
          src="/imageForDesign/Vector.png"
          alt="Vector background"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Section */}
        <div className="max-w-xl space-y-4">
          <nav className="text-sm mb-4">
            <div className="bg-black/20 mb-10 text-white px-3 py-2 rounded-lg flex items-center space-x-2 inline-flex">
              <span className="flex items-center gap-2">
                <img
                  src="/imageForDesign/home.png"
                  alt="Home Icon"
                  className="w-4 h-4"
                />
                Home
              </span>

              <span className="text-white/60">&gt;</span>
              <span>Courses</span>
              <span className="text-white/60">&gt;</span>
              <span>Finance</span>
              <span className="text-white/60">&gt;</span>
              <span className="font-semibold">Gaming Lessons</span>
            </div>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-white flex items-center gap-1">
            Finance Fundamentals: Levels
            <img
              src="/imageForDesign/1image.png"
              alt="Level 1"
              className="h-4 w-auto"
            />
            <img
              src="/imageForDesign/2image.png"
              alt="Level 2"
              className="h-4 w-auto"
            />
            <img
              src="/imageForDesign/3image.png"
              alt="Level 3"
              className="h-4 w-auto"
            />
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block md:inline sigmar-font">Master Your</span>{" "}
            <span className="text-white sigmar-font inline-flex items-center gap-1 flex-wrap">
              <span className="tracking-tight">Financial Future</span>
              <img
                src="/imageForDesign/Levelup-2-unscreen.gif"
                alt="Level up animation"
                className="h-[1.8em] md:h-[2em] w-auto inline-block -ml-4 md:-ml-5"
              />
            </span>
          </h1>

          <p className="text-white text-base md:text-lg mt-2 leading-relaxed">
            <span>
              Comprehensive financial education designed for real-world success.
              Learn to save, invest, and build wealth with confidence.
            </span>
          </p>
        </div>

        {/* Right Section with glow behind children image */}
        <div className="relative w-full max-w-sm md:max-w-md mt-10 md:mt-0 z-20 md:ml-8 md:self-end self-end mx-auto md:mx-0">
          {/* Soft white glow behind image */}
          <div className="absolute inset-0 z-0 blur-2xl opacity-30 scale-110 bg-white rounded-full pointer-events-none" />
          {/* Children Image */}
          <img
            src="/imageForDesign/chidrenImage.png"
            alt="Kids playing financial game"
            className="w-full relative z-10 transform translate-y-0 md:translate-y-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
