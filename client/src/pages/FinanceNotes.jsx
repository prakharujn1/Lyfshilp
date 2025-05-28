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
import HeaderCredits from "../FinanceDesignForNotes/Section-3/HeaderCredits";
import WhatIsCredit from "../FinanceDesignForNotes/Section-3/WhatIsCredit";
import CreditExample from "../FinanceDesignForNotes/Section-3/CreditExample";
import TypesOfCredit from "../FinanceDesignForNotes/Section-3/TypesOfCredit";
import CreditsTricky from "../FinanceDesignForNotes/Section-3/CreditsTricky";
import CreditScore from "../FinanceDesignForNotes/Section-3/CreditScore";
import ReflectionCredit from "../FinanceDesignForNotes/Section-3/ReflectionCredit";
import HeaderStockMarket from "../FinanceDesignForNotes/Section-4/HeaderStockMarket";
import IntroStockMarket from "../FinanceDesignForNotes/Section-4/IntroStockMarket";
import StockLifeExample from "../FinanceDesignForNotes/Section-4/StockLifeExample";
import WhereBuyShares from "../FinanceDesignForNotes/Section-4/WhereBuyShares";
import PricesFluctuate from "../FinanceDesignForNotes/Section-4/PricesFluctuate";
import StockMarketAndGambling from "../FinanceDesignForNotes/Section-4/StockMarketAndGambling";
import KeyTermsStock from "../FinanceDesignForNotes/Section-4/KeyTermsStock";
import StocksReflection from "../FinanceDesignForNotes/Section-4/StocksReflection";
import InvestingIntro from "../FinanceDesignForNotes/Section-5/InvestingIntro";
import InvestingExample from "../FinanceDesignForNotes/Section-5/InvestingExample";
import InvestingReflection from "../FinanceDesignForNotes/Section-5/InvestingReflection";
import InvestingTable from "../FinanceDesignForNotes/Section-5/InvestingTable";
import InvestingTip from "../FinanceDesignForNotes/Section-5/InvestingTip";
import InvestingWhyTimeMatters from "../FinanceDesignForNotes/Section-5/InvestingWhyTimeMatters";
import InvestingCompoundInterest from "../FinanceDesignForNotes/Section-5/InvestingCompoundInterest";
import SpendingBadHabits from "../FinanceDesignForNotes/Section-6/SpendingBadHabits";
import SpendingExample from "../FinanceDesignForNotes/Section-6/SpendingExample";
import SpendingIntro from "../FinanceDesignForNotes/Section-6/SpendingIntro";
import SpendingQuestions from "../FinanceDesignForNotes/Section-6/SpendingQuestions";
import SpendingReflection from "../FinanceDesignForNotes/Section-6/SpendingReflection";
import SpendingTips from "../FinanceDesignForNotes/Section-6/SpendingTips";
import SpendingWantsVsNeeds from "../FinanceDesignForNotes/Section-6/SpendingWantsVsNeeds";



const FinanceNotes = () => {
  return (
    <div>
      {/* Section-1 */}
      <main className="border-b border-gray-300 mb-4 pb-4">
        <Introduction />
        <BankingBasics />
        <AccountTypes />
        <DigitalTools />
        <Comparison />
        <Example />
        <Reflection />
      </main>

      {/* Section-2 */}
      <div className="min-h-screen flex flex-col border-b border-gray-300 mb-4 pb-4">
        <Header />
        <main className="flex-grow ">
          <IntroSection />
          <BudgetFormula />
          <ExampleBudget />
          <BudgetRule />
          <BudgetTools />
          <Scenario />
          <Reflection2 />
        </main>
      </div>

      {/* Section 3*/}
      <div className="space-y-10 border-b border-gray-300 mb-4 pb-4">
        <HeaderCredits />
        <WhatIsCredit />
        <CreditExample />
        <TypesOfCredit />
        <CreditsTricky />
        <CreditScore />
        <ReflectionCredit />
      </div>

      {/* Section 4 */}
      <div className="space-y-10 border-b border-gray-300 mb-4 pb-4">
        <HeaderStockMarket />
        <IntroStockMarket />
        <StockLifeExample />
        <WhereBuyShares />
        <PricesFluctuate />
        <StockMarketAndGambling />
        <KeyTermsStock />
        <StocksReflection />
      </div>

    {/* Section 5 */}
    <div>
      
        <InvestingIntro/>
        <InvestingExample/>
        <InvestingCompoundInterest/>
        <InvestingTable/>
        <InvestingWhyTimeMatters/>
        <InvestingTip/>
        <InvestingReflection/>
    </div>

    {/* Section 5 */}
    <div>

      <SpendingIntro/>
      <SpendingExample/>
      <SpendingWantsVsNeeds/>
      <SpendingQuestions/>
      <SpendingTips/>
      <SpendingBadHabits/>
      <SpendingReflection/>
    </div>

    </div>
  );
};

export default FinanceNotes;
