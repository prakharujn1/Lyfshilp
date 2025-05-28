import Introduction from "../../FinanceDesignForNotes/Section-1/Introduction";
import BankingBasics from "../../FinanceDesignForNotes/Section-1/BankingBasics";
import AccountTypes from "../../FinanceDesignForNotes/Section-1/AccountTypes";
import DigitalTools from "../../FinanceDesignForNotes/Section-1/DigitalTools";
import Comparison from "../../FinanceDesignForNotes/Section-1/Comparison";
import Example from "../../FinanceDesignForNotes/Section-1/Example";
import Reflection from "../../FinanceDesignForNotes/Section-1/Reflection";

const Section1 = () => {
  return (
    <div className="space-y-6 p-6">
      <Introduction />
      <BankingBasics />
      <AccountTypes />
      <DigitalTools />
      <Comparison />
      <Example />
      <Reflection />
    </div>
  );
};

export default Section1;
