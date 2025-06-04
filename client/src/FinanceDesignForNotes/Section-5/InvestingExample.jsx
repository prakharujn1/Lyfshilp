import React from "react";

const InvestingRealExample = ({ topicRefs }) => {
  return (
    <div
      id="5-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5-2"] = el;
        }
      }}
      className="mb-10"
    >
      <section id="investing-example" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          💡 Real-Life Example
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 mb-4">
            Let’s say you:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Save ₹500 every month from age 15 to 25 (10 years)</li>
            <li>Your friend starts saving ₹1,000/month but from age 25 to 35</li>
            <li>At age 40, you still end up with more money – because of compound interest!</li>
          </ul>
          <p className="text-green-700 font-medium mt-6">
            Time wins over amount when it comes to investing! ⏳💰
          </p>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default InvestingRealExample;
