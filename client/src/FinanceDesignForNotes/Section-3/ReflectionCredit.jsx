import React, { useState } from "react";
import { HelpCircle, CheckCircle, AlertCircle } from "lucide-react";

const ReflectionCredit = ({ topicRefs }) => {
  const [showTip, setShowTip] = useState(false);
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (question, value) => {
    setResponses({
      ...responses,
      [question]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="3-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3-7"] = el;
        }
      }}
      className="mb-10"
    >
      <section id="reflection" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Reflection Prompt
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start mb-8">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <HelpCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ask an adult:</h3>
                <p className="text-gray-700">
                  Have you ever used a credit card? What was your experience?
                </p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What did they use the credit card for?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Groceries, travel, emergencies, etc."
                    value={responses["usage"] || ""}
                    onChange={(e) => handleInputChange("usage", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Have they ever missed a payment?
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="missedPayment"
                        value="yes"
                        checked={responses["missedPayment"] === "yes"}
                        onChange={() =>
                          handleInputChange("missedPayment", "yes")
                        }
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="missedPayment"
                        value="no"
                        checked={responses["missedPayment"] === "no"}
                        onChange={() =>
                          handleInputChange("missedPayment", "no")
                        }
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What was the consequence of missing a payment?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Late fees, interest, credit score impact..."
                    value={responses["consequence"] || ""}
                    onChange={(e) =>
                      handleInputChange("consequence", e.target.value)
                    }
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's one thing you learned from their experience?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Be responsible with credit, always pay on time..."
                    value={responses["lesson"] || ""}
                    onChange={(e) =>
                      handleInputChange("lesson", e.target.value)
                    }
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Reflection
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-green-800">
                      Reflection Submitted!
                    </h3>
                    <p className="text-gray-700">
                      Thank you for completing this reflection. Learning from
                      others' credit card experiences can help you build good
                      financial habits early on.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={() => setShowTip(!showTip)}
                className="text-blue-600 hover:text-blue-800 flex items-center font-medium"
              >
                {showTip ? "Hide tip" : "Show tip"}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={showTip ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  ></path>
                </svg>
              </button>

              {showTip && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <p className="text-gray-700">
                      Credit cards can be helpful tools when used responsibly.
                      They can build your credit score but may also lead to debt
                      if bills are not paid on time. Always learn how interest
                      and fees work.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default ReflectionCredit;
