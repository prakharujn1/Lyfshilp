import InvestingIntro from "./InvestingIntro";
import InvestingWhyTimeMatters from "./InvestingWhyTimeMatters";
import InvestingCompoundInterest from "./InvestingCompoundInterest";
import InvestingExample from "./InvestingExample";
import InvestingTable from "./InvestingTable";
import InvestingTip from "./InvestingTip";
import InvestingReflection from "./InvestingReflection";

const Section5 = ({ topicRefs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Section 5: Investing</h1>
      <InvestingIntro topicRefs={topicRefs} />
      <InvestingWhyTimeMatters topicRefs={topicRefs} />
      <InvestingCompoundInterest topicRefs={topicRefs} />
      <InvestingExample topicRefs={topicRefs} />
      <InvestingTable topicRefs={topicRefs} />
      <InvestingTip topicRefs={topicRefs} />
      <InvestingReflection topicRefs={topicRefs} />
    </div>
  );
};

export default Section5;
