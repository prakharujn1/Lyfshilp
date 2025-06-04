import DigitalMarketingNotes from "../DigitalMarketingNotes";
import Section1dm from "./Section1dm";
import Section2dm from "./Section2dm";
import Section3dm from "./Section3dm";
import Section4dm from "./Section4dm";
import Section5dm from "./Section5dm";
import Section6dm from "./Section6dm";
import Section7dm from "./Section7dm";
import Section8dm from "./Section8dm";



const DigitalMarketing = ({ topicRefs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Digital Marketing</h1>
      <Section1dm topicRefs={topicRefs} />
      <Section2dm topicRefs={topicRefs} />
      <Section3dm topicRefs={topicRefs} />
      <Section4dm topicRefs={topicRefs} />
      <Section5dm topicRefs={topicRefs} />
      <Section6dm topicRefs={topicRefs} />
      <Section7dm topicRefs={topicRefs} />
      <Section8dm topicRefs={topicRefs} />
    </div>
  );
};

export default DigitalMarketing;
