import CourseOverviewDesign from "@/DMDesign/CourseOverviewDesign";
import CurriculumDesign from "@/DMDesign/CurriculumDesign";
import HeroDesign from "@/DMDesign/HeroDesign";
import { useRef } from "react";

const Finance = () => {
  const curriculumRef = useRef(null);

  return (
    <div>
      <HeroDesign
        scrollToCurriculum={() =>
          curriculumRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <CourseOverviewDesign />
      <div ref={curriculumRef}>
        <CurriculumDesign />
      </div>
    </div>
  );
};

export default Finance;
