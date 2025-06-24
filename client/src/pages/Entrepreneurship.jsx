import Hero from "../EntrepreneurshipDesign/Hero";
import CourseOverview from "../EntrepreneurshipDesign/CourseOverview"
import Curriculum from "../EntrepreneurshipDesign/Curriculum";
import { useRef } from "react";

const Entrepreneurship = () => {
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

export default Entrepreneurship;
