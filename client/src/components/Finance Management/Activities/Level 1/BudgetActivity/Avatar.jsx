// src/components/AnimatedCharacter.js
import React from "react";
import Lottie from "lottie-react";
import characterAnimationHappy from "./HappyAvatarLottie.json"; // Adjust the path
import characterAnimationSad from "./SadAvatarLottie.json"; // Adjust the path

const Avatar = ({ type }) => {
  const charAnimat =
    type == "Happy" ? characterAnimationHappy : characterAnimationSad;

  return (
    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto">
      <Lottie animationData={charAnimat} loop={true} />
    </div>
  );
};

export default Avatar;
