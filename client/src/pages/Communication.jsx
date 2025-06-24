import Hero from "../CommunicationDesign/Hero";
import CourseOverview from "../CommunicationDesign/CourseOverview"
import Curriculum from "../CommunicationDesign/Curriculum";
import { useRef } from "react";

const Communication = () => {
  const curriculumRef = useRef(null);

  return (
    <div>
      <Hero
        scrollToCurriculum={() =>
          curriculumRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <CourseOverview />
      <div ref={curriculumRef}>
        <Curriculum /> 
      </div>
    </div>
  );
};

export default Communication;
