import React, { useState } from "react";
import { HelpCircle, CheckCircle, AlertCircle } from "lucide-react";

const Reflection = ({ topicRefs }) => {
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
      id="1-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1-7"] = el;
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
                <h3 className="font-semibold text-lg mb-2">
                  Ask someone at home:
                </h3>
                <p className="text-gray-700">
                  When did they open their first bank account? Was it online or
                  in person? Did they get a debit card?
                </p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    When did they open their first bank account?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter their response here..."
                    value={responses["when"] || ""}
                    onChange={(e) => handleInputChange("when", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Was it opened online or in person?
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="method"
                        value="online"
                        checked={responses["method"] === "online"}
                        onChange={() => handleInputChange("method", "online")}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2">Online</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="method"
                        value="in-person"
                        checked={responses["method"] === "in-person"}
                        onChange={() =>
                          handleInputChange("method", "in-person")
                        }
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2">In Person</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Did they get a debit card?
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="debitCard"
                        value="yes"
                        checked={responses["debitCard"] === "yes"}
                        onChange={() => handleInputChange("debitCard", "yes")}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="debitCard"
                        value="no"
                        checked={responses["debitCard"] === "no"}
                        onChange={() => handleInputChange("debitCard", "no")}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's one thing you learned from their experience?
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Share what you learned..."
                    value={responses["learned"] || ""}
                    onChange={(e) =>
                      handleInputChange("learned", e.target.value)
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
                      Thank you for completing this reflection activity.
                      Discussing banking experiences with family members or
                      friends can provide valuable insights into how banking has
                      evolved over time.
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
                      Banking has changed significantly over the years. Many
                      older adults opened their first account in person at a
                      branch, while today most new accounts can be opened online
                      in minutes. Compare their experience with how you might
                      open an account today!
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

export default Reflection;
