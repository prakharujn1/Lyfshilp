import React from "react";
import { MessageSquareHeart } from "lucide-react";
import SectionContainer from "../SectionContainer";

const SpendingReflection = ({ topicRefs }) => (
  <div
      id="6-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["6-7"] = el;
        }
      }}
      className="mb-10"
    >
    <SectionContainer>
    <div className="flex items-center gap-3 mb-6">
      <MessageSquareHeart className="text-pink-500" size={28} />
      <h2 className="text-2xl font-bold text-gray-800">Reflection Prompt</h2>
    </div>
    <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 rounded-r-lg max-w-2xl mx-auto">
      <p className="text-lg font-medium text-gray-800 mb-2">Think of something you bought recently.</p>
      <p className="text-gray-700">
        Was it a need or a want? <br />
        Do you still feel happy about it now?
      </p>
    </div>
  </SectionContainer>
  </div>
  
);

export default SpendingReflection;
