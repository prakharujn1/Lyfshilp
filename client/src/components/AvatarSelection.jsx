import React from "react";
import { Check } from "lucide-react";

/**
 * @param {{ selectedStyle: string, onSelectStyle: (style: string) => void, gender: string }} props
 */
const AvatarSelection = ({ selectedStyle, onSelectStyle, gender }) => {
  // For demo purposes, we'll use different style options based on gender
  // In a real app, you would have actual avatar images here
  const styles =
    gender === "Boy"
      ? ["Casual", "Sporty", "Formal", "Fantasy"]
      : gender === "Girl"
      ? ["Casual", "Elegant", "Sporty", "Fantasy"]
      : ["Casual", "Formal", "Sporty", "Neutral"];

  // Map of styles to image URLs (using Pexels placeholder images)
  const styleImages = {
    Casual:
      "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=300",
    Sporty:
      "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=300",
    Formal:
      "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=300",
    Fantasy:
      "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=300",
    Elegant:
      "https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=300",
    Neutral:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {styles.map((style) => (
        <div
          key={style}
          onClick={() => onSelectStyle(style)}
          className={`
            cursor-pointer rounded-lg overflow-hidden border-2 
            transition-all duration-200 transform hover:scale-105
            ${
              selectedStyle === style
                ? "border-indigo-500 shadow-md"
                : "border-gray-200 hover:shadow-md"
            }
          `}
        >
          <div className="relative">
            <img
              src={styleImages[style]}
              alt={style}
              className="w-full h-32 object-cover"
            />
            {selectedStyle === style && (
              <div className="absolute top-2 right-2 bg-indigo-500 rounded-full p-1">
                <Check size={16} className="text-white" />
              </div>
            )}
          </div>
          <div
            className={`p-2 text-center ${
              selectedStyle === style ? "bg-indigo-50" : "bg-gray-50"
            }`}
          >
            <p
              className={`font-medium ${
                selectedStyle === style ? "text-indigo-700" : "text-gray-700"
              }`}
            >
              {style}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarSelection;
