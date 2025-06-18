import React from "react";
import Lottie from "lottie-react";
import Speech from "../assets/speech.json"
const SpeakingAnimation = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie
                animationData={Speech}
                loop={true}
                style={{ width: 240, height: 240 }} // Adjust size here
            />
        </div>
    );
};
export default SpeakingAnimation;