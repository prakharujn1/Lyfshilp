import React from "react";
import Lottie from "lottie-react";
import Money from "../assets/money.json"
const MoneyAnimation = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie
                animationData={Money}
                loop={true}
                style={{ width: 240, height: 240 }} // Adjust size here
            />
        </div>
    );
};
export default MoneyAnimation;