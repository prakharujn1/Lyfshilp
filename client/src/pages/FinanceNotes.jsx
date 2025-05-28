// pages/FinanceNotes.jsx
import SectionCard from "../components/SectionCard";

const sections = [
  { title: "Section 1: Banking Basics", path: "/finance/notes/section-1" },
  { title: "Section 2: Budgeting", path: "/finance/notes/section-2" },
  { title: "Section 3: Credit", path: "/finance/notes/section-3" },
  { title: "Section 4: Stock Market", path: "/finance/notes/section-4" },
  { title: "Section 5: Investing", path: "/finance/notes/section-5" },
  { title: "Section 6: Spending Habits", path: "/finance/notes/section-6" },
];

const FinanceNotes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {sections.map((section) => (
        <SectionCard key={section.path} {...section} />
      ))}
    </div>
  );
};

export default FinanceNotes;
