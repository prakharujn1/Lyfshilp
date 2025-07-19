import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="-mt-10 text-white py-12 md:py-12 pb-0 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #3F9400 0%, #2C6601 100%)",
      }}
    >
      {/* Vector background */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img
          src="/imageForDesign/Vector.png"
          alt="Vector background"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="max-w-xl space-y-4 mb-10 md:mb-0">
          <nav className="text-sm mt-10 -ml-2">
            <div className="bg-black/20 ml-1 mb-10 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2">
              <Link
                to="/"
                className="flex items-center gap-1 text-white hover:underline"
              >
                <img
                  src="/imageForDesign/home.png"
                  alt="Home Icon"
                  className="w-4 h-4"
                />
                <span>Home</span>
              </Link>
              <span className="text-white/60">&gt;</span>
              <Link to="/blogs">
                <span className="text-white">Blogs</span>
              </Link>
            </div>
          </nav>

          <h1 className="text-4xl sigmar-font font-bold leading-tight">
            Discover something new in
            <br />
            every blog
            <img
              src="/blogDesign/eyes.svg"
              alt="Eyes"
              className="inline-block w-8 h-8 ml-2"
            />
          </h1>

          <p className="text-white text-base md:text-lg mt-2 leading-relaxed max-w-xl">
            Fun facts, cool ideas, and easy reads on science, tech, and more —
            perfect for curious kids, teachers and parents learning together.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-sm md:max-w-md mt-10 md:mt-0 z-20 md:ml-8 md:self-end self-end mx-auto md:mx-0">
          {/* Glow effect */}
          <div className="absolute inset-0 z-0 blur-2xl opacity-30 scale-110 bg-white rounded-full pointer-events-none" />
          <img
            src="/blogDesign/kidsImage.svg"
            alt="Kids reading blogs"
            className="w-full relative z-10 transform translate-y-0 md:translate-y-12"
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
