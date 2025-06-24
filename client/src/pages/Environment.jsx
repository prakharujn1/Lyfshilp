import Hero from "../EnvironmentDesign/Hero";
import CourseOverview from "../EnvironmentDesign/CourseOverview";
import Curriculum from "../EnvironmentDesign/Curriculum";
import { useRef } from "react";

const Environment = () => {
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

export default Environment;
