import Introduction from "./Introduction";
import BankingBasics from "./BankingBasics";
import AccountTypes from "./AccountTypes";
import DigitalTools from "./DigitalTools";
import Comparison from "./Comparison";
import Example from "./Example";
import Reflection from "./Reflection";

const Section1 = ({ topicRefs }) => {
  return (
    <div
      id="1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1"] = el;
        }
      }}
      className="mb-10"
    >
      <div>
      <h1 className="text-2xl font-bold mb-4">Section 1: Banking Basics</h1>
      <Introduction  />
      <BankingBasics  />
      <AccountTypes  />
      <DigitalTools  />
      <Comparison  />
      <Example  />
      <Reflection  />
    </div>

    </div>
    
  );
};

export default Section1;
