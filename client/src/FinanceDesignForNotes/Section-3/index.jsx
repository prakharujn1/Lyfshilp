import HeaderCredits from "./HeaderCredits";
import WhatIsCredit from "./WhatIsCredit";
import TypesOfCredit from "./TypesOfCredit";
import CreditScore from "./CreditScore";
import CreditsTricky from "./CreditsTricky";
import CreditExample from "./CreditExample";
import ReflectionCredit from "./ReflectionCredit";

const Section3 = ({ topicRefs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Section 3: Credit</h1>
      <HeaderCredits topicRefs={topicRefs} />
      <WhatIsCredit topicRefs={topicRefs} />
      <TypesOfCredit topicRefs={topicRefs} />
      <CreditScore topicRefs={topicRefs} />
      <CreditsTricky topicRefs={topicRefs} />
      <CreditExample topicRefs={topicRefs} />
      <ReflectionCredit topicRefs={topicRefs} />
    </div>
  );
};

export default Section3;
