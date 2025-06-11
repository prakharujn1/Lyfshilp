import HeaderCredits from "./HeaderCredits";
import WhatIsCredit from "./WhatIsCredit";
import TypesOfCredit from "./TypesOfCredit";
import CreditScore from "./CreditScore";
import CreditsTricky from "./CreditsTricky";
import CreditExample from "./CreditExample";
import ReflectionCredit from "./ReflectionCredit";

const Section3 = ({ topicRefs }) => {
  return (
    <div
      id="3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3"] = el;
        }
      }}
      className="mb-10"
    >
      <div>
      <h1 className="text-2xl font-bold mb-4">Section 3: Credit</h1>
      <HeaderCredits  />
      <WhatIsCredit  />
      <CreditExample  />
      <TypesOfCredit  />
      <CreditsTricky  />
      <CreditScore  />
      <ReflectionCredit  />
    </div>
    </div>
    
  );
};

export default Section3;
