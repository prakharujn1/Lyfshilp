// src/components/AnimatedCharacter.js
import React from "react";
import Lottie from "lottie-react";
import characterAnimation from "./Animation.json"; // Adjust the path

const SmoothieAvatar = ({ classname}) => {
  const charAnimat = characterAnimation
  return (
    <div className={`${classname}`}>
      <Lottie animationData={charAnimat} loop={true} />
    </div>
  );
};

export default SmoothieAvatar;
