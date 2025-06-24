import React from "react";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

const CourseOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Communication Education Reimagined with Lyfshilp
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive communication curriculum is designed to transform your
            relationship with money and empower you with practical skills for
            lifelong financial success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">
              Why Learn communication with Us?
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Practical, Real-World Focus",
                  description:
                    "Our curriculum bridges theory and practice with real-world applications and case studies.",
                },
                {
                  icon: Users,
                  title: "Community-Driven Learning",
                  description:
                    "Join a community of like-minded learners and financial experts to accelerate your growth.",
                },
                {
                  icon: CheckCircle,
                  title: "Step-by-Step Guidance",
                  description:
                    "Follow our structured learning paths from basic concepts to advanced financial strategies.",
                },
                {
                  icon: Award,
                  title: "Industry-Recognized Certification",
                  description:
                    "Earn certificates that showcase your financial knowledge and expertise to employers.",
                },
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600">
                      <item.icon size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-navy-800">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
            <h3 className="text-2xl font-bold text-navy-800 mb-6">
              What You'll Learn
            </h3>

            <div className="space-y-4">
              {[
                "Fundamental principles of personal finance and money management",
                "Investment strategies for different life stages and risk tolerances",
                "Debt management and credit optimization techniques",
                "Tax efficiency strategies to maximize your income",
                "Retirement planning and building passive income streams",
                "Entrepreneurial finance and business funding options",
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="ml-3 text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
