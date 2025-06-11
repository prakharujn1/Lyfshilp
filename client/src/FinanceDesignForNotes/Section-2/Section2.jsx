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
    <div
      id="2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2"] = el;
        }
      }}
      className="mb-10"
    >
      <div>
      <h1 className="text-2xl font-bold mb-4">Section 2: Budgeting</h1>
      <Header  />
      <IntroSection  />
      <BudgetFormula  />
      <ExampleBudget  />
      <BudgetRule  />
      <BudgetTools  />
      <Scenario  />
      <Reflection2  />
    </div>
    </div>
    
  );
};

export default Section2;
