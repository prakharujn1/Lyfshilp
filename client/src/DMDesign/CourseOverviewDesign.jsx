import React from "react";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";

const CourseOverviewDesign = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Digital Marketing Reimagined with Lyfshilp
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive digital marketing curriculum is crafted to
            transform your understanding of online marketing and equip you with
            practical skills to drive lasting brand growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">
              Why Learn Digital Marketing with Us?
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Real-World Marketing Skills",
                  description:
                    "Our curriculum blends strategy with hands-on tools used by top marketers across the industry.",
                },
                {
                  icon: Users,
                  title: "Collaborative Learning Community",
                  description:
                    "Engage with fellow learners, marketers, and mentors to stay updated and inspired.",
                },
                {
                  icon: CheckCircle,
                  title: "Structured Learning Paths",
                  description:
                    "Follow step-by-step modules covering the full digital marketing funnel—from SEO to paid ads.",
                },
                {
                  icon: Award,
                  title: "Industry-Recognized Certification",
                  description:
                    "Earn certifications that demonstrate your marketing expertise to clients and employers.",
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
                "Core principles of digital marketing, SEO, and content strategy",
                "Running high-ROI social media campaigns across platforms",
                "Mastering paid advertising (Google Ads, Meta Ads, etc.)",
                "Building effective email marketing and automation workflows",
                "Analyzing data with tools like Google Analytics and Hotjar",
                "Creating high-converting landing pages and funnels",
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

export default CourseOverviewDesign;
