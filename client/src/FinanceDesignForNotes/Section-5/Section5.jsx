import InvestingIntro from "./InvestingIntro";
import InvestingWhyTimeMatters from "./InvestingWhyTimeMatters";
import InvestingCompoundInterest from "./InvestingCompoundInterest";
import InvestingExample from "./InvestingExample";
import InvestingTable from "./InvestingTable";
import InvestingTip from "./InvestingTip";
import InvestingReflection from "./InvestingReflection";

const Section5 = ({ topicRefs }) => {
  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-10"
    >
      <div>
      <h1 className="text-2xl font-bold mb-4">Section 5: Investing</h1>
      <InvestingIntro  />
      <InvestingExample  />
      <InvestingCompoundInterest  />
      <InvestingTable />
      <InvestingWhyTimeMatters  />
      <InvestingTip  />
      <InvestingReflection  />
    </div>
    </div>
    
  );
};

export default Section5;
