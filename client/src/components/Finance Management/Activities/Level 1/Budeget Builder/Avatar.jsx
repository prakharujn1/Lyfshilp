// src/components/AnimatedCharacter.js
import React from "react";
import Lottie from "lottie-react";
import characterAnimationHappy from "./lottieAnimationHappy.json"; // Adjust the path
import characterAnimationSad from "./lottieAnimationSad.json"; // Adjust the path

const Avatar = ({ style, type }) => {
  const charAnimat =
    type == "disappointing" ? characterAnimationSad : characterAnimationHappy;

  return (
    <div className={`${style}`}>
      <Lottie animationData={charAnimat} loop={true} />
    </div>
  );
};

export default Avatar;
