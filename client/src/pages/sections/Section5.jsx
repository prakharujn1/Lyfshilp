import InvestingIntro from "../../FinanceDesignForNotes/Section-5/InvestingIntro.jsx";
import InvestingExample from "../../FinanceDesignForNotes/Section-5/InvestingExample.jsx";
import InvestingReflection from "../../FinanceDesignForNotes/Section-5/InvestingReflection.jsx";
import InvestingTable from "../../FinanceDesignForNotes/Section-5/InvestingTable.jsx";
import InvestingTip from "../../FinanceDesignForNotes/Section-5/InvestingTip.jsx";
import InvestingWhyTimeMatters from "../../FinanceDesignForNotes/Section-5/InvestingWhyTimeMatters.jsx";
import InvestingCompoundInterest from "../../FinanceDesignForNotes/Section-5/InvestingCompoundInterest.jsx";

const Section1 = () => {
  return (
    <div className="space-y-6 p-6">
      <InvestingIntro />
      <InvestingExample />
      <InvestingCompoundInterest />
      <InvestingTable />
      <InvestingWhyTimeMatters />
      <InvestingTip />
      <InvestingReflection />
    </div>
  );
};

export default Section1;
