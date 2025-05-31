// src/components/AnimatedCharacter.js
import React from "react";
import Lottie from "lottie-react";
import characterAnimationHappy from "./HappyAvatarLottie.json"; // Adjust the path
import characterAnimationSad from "./SadAvatarLottie.json"; // Adjust the path

const Avatar = ({ type }) => {
  const charAnimat =
    type == "Happy" ? characterAnimationHappy : characterAnimationSad;

  return (
    <div>
      <Lottie animationData={charAnimat} loop={true} />
    </div>
  );
};

export default Avatar;
