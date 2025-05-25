import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How is this finance course different from others?",
      answer:
        "Our finance curriculum is designed with a practical, real-world focus that bridges theory and application. We emphasize hands-on learning through interactive tools, case studies, and personalized coaching. Unlike many programs that focus solely on theory, we provide actionable strategies you can implement immediately to improve your financial situation.",
    },
    {
      question: "Do I need any prior finance knowledge to take these courses?",
      answer:
        "No prior finance knowledge is required. Our courses are designed with progressive difficulty levels, starting with fundamental concepts suitable for complete beginners. We carefully explain financial terminology and concepts from the ground up, ensuring everyone can follow along regardless of their background.",
    },
    {
      question: "How long does it take to complete the program?",
      answer:
        "The full program typically takes 4-6 months to complete when studying 5-7 hours per week. However, we offer flexible learning paths to accommodate different schedules. You can access all course materials at your own pace, and your enrollment grants you lifetime access to all updates and additions to the curriculum.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes, you will receive a digital certificate upon completion of each course and the full program. Our certificates are recognized in the financial industry and can be added to your resume and LinkedIn profile. Many students have used our certifications to advance their careers or negotiate salary increases.",
    },
    {
      question: "Can I get personalized financial advice through this program?",
      answer:
        "While our courses provide comprehensive financial education, they do not constitute personalized financial advice. However, program participants do have access to monthly Q&A sessions with our instructors where you can ask questions about applying the concepts to your specific situation. For individualized advice, we recommend consulting with a financial advisor.",
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer:
        "We offer a 30-day money-back guarantee for all our courses. If you're not completely satisfied with the program, simply contact our support team within 30 days of purchase for a full refund, no questions asked. We're confident in the quality of our education and stand behind our curriculum.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-3">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our financial education
            programs and learning approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none bg-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-medium text-navy-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
