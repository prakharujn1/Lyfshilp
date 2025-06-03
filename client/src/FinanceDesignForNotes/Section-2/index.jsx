import IntroSection from "./IntroSection";
import Header from "./Header";
import BudgetRule from "./BudgetRule";
import BudgetFormula from "./BudgetFormula";
import BudgetTools from "./BudgetTools";
import ExampleBudget from "./ExampleBudget";
import Scenario from "./Scenario";
import Reflection2 from "./Reflection2";

const Section2 = ({ topicRefs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Section 2: Budgeting</h1>
      <IntroSection topicRefs={topicRefs} />
      <Header topicRefs={topicRefs} />
      <BudgetRule topicRefs={topicRefs} />
      <BudgetFormula topicRefs={topicRefs} />
      <BudgetTools topicRefs={topicRefs} />
      <ExampleBudget topicRefs={topicRefs} />
      <Scenario topicRefs={topicRefs} />
      <Reflection2 topicRefs={topicRefs} />
    </div>
  );
};

export default Section2;
