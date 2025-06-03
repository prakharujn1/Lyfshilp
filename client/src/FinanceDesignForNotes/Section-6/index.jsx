import SpendingIntro from "./SpendingIntro";
import SpendingWantsVsNeeds from "./SpendingWantsVsNeeds";
import SpendingTips from "./SpendingTips";
import SpendingBadHabits from "./SpendingBadHabits";
import SpendingExample from "./SpendingExample";
import SpendingQuestions from "./SpendingQuestions";
import SpendingReflection from "./SpendingReflection";

const Section6 = ({ topicRefs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Section 6: Spending Habits</h1>
      <SpendingIntro topicRefs={topicRefs} />
      <SpendingWantsVsNeeds topicRefs={topicRefs} />
      <SpendingTips topicRefs={topicRefs} />
      <SpendingBadHabits topicRefs={topicRefs} />
      <SpendingExample topicRefs={topicRefs} />
      <SpendingQuestions topicRefs={topicRefs} />
      <SpendingReflection topicRefs={topicRefs} />
    </div>
  );
};

export default Section6;
