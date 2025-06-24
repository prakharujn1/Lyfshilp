import Lottie from "lottie-react";
import thinking_emoji from "../assets/thinking_emoji.json"
const ThinkingEmoji = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie
                animationData={thinking_emoji}
                loop={true}
                style={{ width: 240, height: 240 }} // Adjust size here
            />
        </div>
    );
};
export default ThinkingEmoji;