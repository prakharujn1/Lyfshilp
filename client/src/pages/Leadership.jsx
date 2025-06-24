import Hero from "../LeadershipDesign/Hero";
import CourseOverview from "../LeadershipDesign/CourseOverview";
import Curriculum from "../LeadershipDesign/Curriculum";
import { useRef } from "react";

const Leadership = () => {
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

export default Leadership;
