import React from "react";
import Lottie from "lottie-react";
import Dice from "../assets/dice.json"
const DiceAnimation = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie
                animationData={Dice}
                loop={true}
                style={{ width: 110, height: 110 }} // Adjust size here
            />
        </div>
    );
};
export default DiceAnimation;