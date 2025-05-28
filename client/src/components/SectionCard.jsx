// components/SectionCard.jsx
import { useNavigate } from "react-router-dom";

const SectionCard = ({ title, path }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-6 border rounded-xl shadow hover:shadow-lg cursor-pointer transition-all"
      onClick={() => navigate(path)}
    >
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-500">Explore {title}</p>
    </div>
  );
};

export default SectionCard;
