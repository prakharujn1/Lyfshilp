import Hero from "../LawDesign/Hero";
import CourseOverview from "../LawDesign/CourseOverview";
import Curriculum from "../LawDesign/Curriculum";
import { useRef } from "react";

const Law = () => {
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

export default Law;
