import Hero from "../FinanceDesign/Hero";
import CourseOverview from "../FinanceDesign/CourseOverview";
import Curriculum from "../FinanceDesign/Curriculum";
import FAQ from "../FinanceDesign/FAQ";
import { useRef } from "react";

const Finance = () => {
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
      <FAQ />
    </div>
  );
};

export default Finance;
