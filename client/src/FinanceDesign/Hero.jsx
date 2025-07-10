import React from "react";

const Hero = () => {
  return (
    <section
      className="text-white py-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #3F9400 0%, #2C6601 100%)",
      }}
    >
      {/* Vector background on the right side */}
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
          <nav className="text-sm text-white/80 mb-2">
            <span className="mr-1">🏠 Home</span> &gt;
            <span className="mx-1">Courses</span> &gt;
            <span className="mx-1">Finance</span> &gt;
            <span className="font-semibold text-white"> Gaming Lessons</span>
          </nav>

          <p className="uppercase tracking-wider text-sm font-semibold text-white">
            Finance Fundamentals: Levels 1️⃣ 2️⃣ 3️⃣
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Master Your <span className="text-white">Financial Future</span>
          </h1>

          <p className="text-white text-lg mt-2">
            Comprehensive financial education designed for real-world success.
            Learn to save, invest, and build wealth with confidence.
          </p>
        </div>

        {/* Right Section with glow behind children image */}
        <div className="relative w-full max-w-sm md:max-w-md mt-10 md:mt-0 z-20">
          {/* Soft white glow behind image */}
          <div className="absolute inset-0 z-0 blur-2xl opacity-30 scale-110 bg-white rounded-full pointer-events-none" />

          {/* Children Image */}
          <img
            src="/imageForDesign/chidrenImage.png"
            alt="Kids playing financial game"
            className="w-full relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
