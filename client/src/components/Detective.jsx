import React from "react";
import Lottie from "lottie-react";
import Detective from "../assets/detective.json"
const DetectiveAnimation = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie
                animationData={Detective}
                loop={true}
                style={{ width: 240, height: 240 }} // Adjust size here
            />
        </div>
    );
};
export default DetectiveAnimation;