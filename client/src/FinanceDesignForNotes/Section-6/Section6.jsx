import SpendingIntro from "./SpendingIntro";
import SpendingWantsVsNeeds from "./SpendingWantsVsNeeds";
import SpendingTips from "./SpendingTips";
import SpendingBadHabits from "./SpendingBadHabits";
import SpendingExample from "./SpendingExample";
import SpendingQuestions from "./SpendingQuestions";
import SpendingReflection from "./SpendingReflection";

const Section6 = ({ topicRefs }) => {
  return (
    <div
      id="6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["6"] = el;
        }
      }}
      className="mb-10"
    >
      <div>
      <h1 className="text-2xl font-bold mb-4">Section 6: Spending Habits</h1>
      <SpendingIntro  />
      <SpendingExample  />
      <SpendingWantsVsNeeds  />
      <SpendingQuestions  />
      <SpendingTips  />
      <SpendingBadHabits  />
      <SpendingReflection  />
    </div>
    </div>
    
  );
};

export default Section6;
