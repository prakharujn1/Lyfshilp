import React from "react";
import { TrendingUp, BarChart2, PieChart, DollarSign } from "lucide-react";

const HeroDesign = ({ scrollToCurriculum }) => {
  return (
    <div className="relative text-gray-100 overflow-hidden">
      {/* ...background pattern remains... */}

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-black">
              Master Your Digital Marketing
            </h1>
            <p className="text-3xl md:text-xl mb-8 text-black">
              Master digital marketing strategies for real-world impact. Learn
              to drive traffic, generate leads, and grow your brand with
              confidence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToCurriculum}
                className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1"
              >
                Start Learning Now
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-800 rounded-lg blur-xl opacity-60"></div>
              <div className="relative bg-gray-800 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                    Featured Course
                  </h3>
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Digital Marketing Masterclass
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Learn the proven strategies to grow your online presence and
                    achieve digital marketing success.
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      "3 comprehensive levels",
                      "Practical exercises & challenges",
                      "Expert instructor guidance",
                      "Lifetime access to updates",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1">
                          <span className="text-gray-900 text-xs">✓</span>
                        </div>
                        <p className="ml-3 text-sm text-gray-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            {
              icon: DollarSign,
              text: "5,000+ Students",
              desc: "Have completed our courses",
            },
            {
              icon: TrendingUp,
              text: "94% Success Rate",
              desc: "For financial goal achievement",
            },
            {
              icon: BarChart2,
              text: "25+ Expert Instructors",
              desc: "With real-world experience",
            },
            {
              icon: PieChart,
              text: "Lifetime Access",
              desc: "To all course materials",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-600/20 text-yellow-400 mb-3">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.text}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDesign;
