import Introduction from "./Introduction";
import BankingBasics from "./BankingBasics";
import AccountTypes from "./AccountTypes";
import DigitalTools from "./DigitalTools";
import Comparison from "./Comparison";
import Example from "./Example";
import Reflection from "./Reflection";

const Section1 = ({ topicRefs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Section 1: Banking Basics</h1>
      <Introduction topicRefs={topicRefs} />
      <BankingBasics topicRefs={topicRefs} />
      <AccountTypes topicRefs={topicRefs} />
      <DigitalTools topicRefs={topicRefs} />
      <Comparison topicRefs={topicRefs} />
      <Example topicRefs={topicRefs} />
      <Reflection topicRefs={topicRefs} />
    </div>
  );
};

export default Section1;
