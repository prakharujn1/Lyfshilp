import Hero from "../ComputerDesign/Hero";
import CourseOverview from "../ComputerDesign/CourseOverview";
import Curriculum from "../ComputerDesign/Curriculum";
import { useRef } from "react";

const Computer = () => {
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

export default Computer;
