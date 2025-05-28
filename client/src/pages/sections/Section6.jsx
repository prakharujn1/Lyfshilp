import SpendingBadHabits from "../../FinanceDesignForNotes/Section-6/SpendingBadHabits.jsx";
import SpendingExample from "../../FinanceDesignForNotes/Section-6/SpendingExample.jsx";
import SpendingIntro from "../../FinanceDesignForNotes/Section-6/SpendingIntro.jsx";
import SpendingQuestions from "../../FinanceDesignForNotes/Section-6/SpendingQuestions.jsx";
import SpendingReflection from "../../FinanceDesignForNotes/Section-6/SpendingReflection.jsx";
import SpendingTips from "../../FinanceDesignForNotes/Section-6/SpendingTips.jsx";
import SpendingWantsVsNeeds from "../../FinanceDesignForNotes/Section-6/SpendingWantsVsNeeds.jsx";

const Section1 = () => {
  return (
    <div className="space-y-6 p-6">
      <SpendingIntro />
      <SpendingExample />
      <SpendingWantsVsNeeds />
      <SpendingQuestions />
      <SpendingTips />
      <SpendingBadHabits />
      <SpendingReflection />
    </div>
  );
};

export default Section1;
