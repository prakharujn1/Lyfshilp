import React from "react";

const difficultyMap = {
  0: {
    label: "Beginner",
    color: "bg-green-500",
    icon: "/imageForDesign/Beginner.png",
    role: "/imageForDesign/Explorer.png",
    mascot: "/imageForDesign/level-1.png",
  },
  1: {
    label: "Intermediate",
    color: "bg-yellow-400",
    icon: "/imageForDesign/Intermediate.png",
    role: "/imageForDesign/Builder.png",
    mascot: "/imageForDesign/level-2.png",
  },
  2: {
    label: "Advance",
    color: "bg-red-400",
    icon: "/imageForDesign/Advance.png",
    role: "/imageForDesign/Hero.png",
    mascot: "/imageForDesign/level-3.png",
  },
};

const LevelsDisplay = ({ modules }) => {
  return (
    <div className="space-y-6">
      {modules.map((module, index) => {
        const difficulty = difficultyMap[index] || difficultyMap[0];

        return (
          <div
            key={index}
            className={`rounded-xl border shadow-sm p-4 ${
              index === 0
                ? "border-green-400"
                : index === 1
                ? "border-yellow-400"
                : "border-red-400"
            }`}
          >
            <div className="flex items-start gap-4 mb-2">
              {/* Mascot Image */}
              <img
                src={difficulty.mascot}
                alt="Mascot"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
                <div className="flex gap-2 text-xs mt-1 text-gray-500 items-center">
                  <img src={difficulty.icon} alt="Difficulty" className="h-5" />
                  <img src={difficulty.role} alt="Role" className="h-5" />
                </div>
              </div>
            </div>

            <ul className="mt-4 space-y-3">
              {module.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="border rounded-md px-4 py-3 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={
                        index === 0 && i === 0
                          ? "/imageForDesign/play-button.png"
                          : "/imageForDesign/red-lock.png"
                      }
                      alt="icon"
                      className="w-6 h-6 mt-1"
                    />
                    <div>
                      <p className="font-medium">{`Challenge ${i + 1}: ${
                        challenge.title
                      }`}</p>
                      <p className="text-sm text-gray-600">
                        {challenge.description}
                      </p>
                    </div>
                  </div>

                  <button className="shrink-0">
                    <img
                      src={
                        index === 0 && i === 0
                          ? "/imageForDesign/start-now.png"
                          : "/imageForDesign/unlock-now-button.png"
                      }
                      alt="action"
                      className="w-[100px]"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default LevelsDisplay;
