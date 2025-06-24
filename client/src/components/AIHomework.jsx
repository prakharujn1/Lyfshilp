import React from "react";
import Lottie from "lottie-react";
import AIHomework from "../assets/AIHomework.json"
const AIHomeworkAnimation = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie
                animationData={AIHomework}
                loop={true}
                style={{ width: 250, height: 250 }} // Adjust size here
            />
        </div>
    );
};
export default AIHomeworkAnimation;