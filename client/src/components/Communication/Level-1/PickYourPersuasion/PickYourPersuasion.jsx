import React from "react";
import PersuasionChallenge from "./PersuasionChallenge";

const persuasionData = {
  scenario: "Convince your school to allow an extra sports period.",
  openings: [
    "I believe an extra sports period would benefit all students.",
    "We should have more fun. Period.",
    "If we don’t get this, we’ll protest!",
  ],
  correctOpening:
    "I believe an extra sports period would benefit all students.",
  reasons: [
    "It improves focus and fitness.",
    "We can burn energy in a healthy way.",
    "It’s more fun than math.",
  ],
  correctReasons: [
    "It improves focus and fitness.",
    "We can burn energy in a healthy way.",
  ],
  slogans: ["Sweat Today, Succeed Tomorrow!", "Brain Boost = Sports Dose"],
  correctSlogan: "Sweat Today, Succeed Tomorrow!",
};

const PickYourPersuasion = () => {
  return (
    <div className="py-8 px-4 bg-gradient-to-br from-purple-100 to-blue-100 min-h-screen space-y-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        🗣️ Pick Your Persuasion!
      </h1>
      <PersuasionChallenge data={persuasionData} />
    </div>
  );
};

export default PickYourPersuasion;
