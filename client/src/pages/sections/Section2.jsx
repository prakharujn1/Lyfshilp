import Header from "../../FinanceDesignForNotes/Section-2/Header";
import IntroSection from "../../FinanceDesignForNotes/Section-2/IntroSection";
import BudgetFormula from "../../FinanceDesignForNotes/Section-2/BudgetFormula";
import ExampleBudget from "../../FinanceDesignForNotes/Section-2/ExampleBudget";
import BudgetRule from "../../FinanceDesignForNotes/Section-2/BudgetRule";
import BudgetTools from "../../FinanceDesignForNotes/Section-2/BudgetTools";
import Scenario from "../../FinanceDesignForNotes/Section-2/Scenario";
import Reflection2 from "../../FinanceDesignForNotes/Section-2/Reflection2";

const Section1 = () => {
  return (
    <div className="space-y-6 p-6">
      <Header />
      <IntroSection />
      <BudgetFormula />
      <ExampleBudget />
      <BudgetRule />
      <BudgetTools />
      <Scenario />
      <Reflection2 />
    </div>
  );
};

export default Section1;
