import Introduction from "../FinanceDesignForNotes/Section-1/Introduction";
import BankingBasics from "../FinanceDesignForNotes/Section-1/BankingBasics";
import AccountTypes from "../FinanceDesignForNotes/Section-1/AccountTypes";
import DigitalTools from "../FinanceDesignForNotes/Section-1/DigitalTools";
import Comparison from "../FinanceDesignForNotes/Section-1/Comparison";
import Example from "../FinanceDesignForNotes/Section-1/Example";
import Reflection from "../FinanceDesignForNotes/Section-1/Reflection";

import Header from "../FinanceDesignForNotes/Section-2/Header";
import IntroSection from "../FinanceDesignForNotes/Section-2/IntroSection";
import BudgetFormula from "../FinanceDesignForNotes/Section-2/BudgetFormula";
import ExampleBudget from "../FinanceDesignForNotes/Section-2/ExampleBudget";
import BudgetRule from "../FinanceDesignForNotes/Section-2/BudgetRule";
import BudgetTools from "../FinanceDesignForNotes/Section-2/BudgetTools";
import Scenario from "../FinanceDesignForNotes/Section-2/Scenario";
import Reflection2 from "../FinanceDesignForNotes/Section-2/Reflection2";

const FinanceNotes = () => {
  return (
    <div>
      {/* Section-1 */}
      <main>
        <Introduction />
        <BankingBasics />
        <AccountTypes />
        <DigitalTools />
        <Comparison />
        <Example />
        <Reflection />
      </main>

      {/* Section-2 */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <IntroSection />
          <BudgetFormula />
          <ExampleBudget />
          <BudgetRule />
          <BudgetTools />
          <Scenario />
          <Reflection2 />
        </main>
      </div>
    </div>
  );
};

export default FinanceNotes;
