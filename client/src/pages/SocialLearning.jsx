import Hero from "../SocialLearningDesign/Hero";
import CourseOverview from "../SocialLearningDesign/CourseOverview";
import Curriculum from "../SocialLearningDesign/Curriculum";
import { useRef } from "react";

const SocialLearning = () => {
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

export default SocialLearning;
