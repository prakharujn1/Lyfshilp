import { motion } from "framer-motion";
import { PlayCircle, Leaf, Share2 } from "lucide-react";

const CampaignCard = () => {
    return (
        <motion.div
            className="w-[300px] h-[540px] rounded-3xl overflow-hidden shadow-xl border-4 border-dashed border-green-500 bg-gradient-to-b from-green-200 via-green-50 to-lime-100 relative flex flex-col justify-between p-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Floating Leaf Animation */}

            {/* Header Info */}
            <div className="flex justify-between items-center">
                <span className="bg-green-300 text-green-900 text-xs px-3 py-1 rounded-full font-semibold shadow">
                    ♻️ Greenly Campaign
                </span>
                
                <span className="text-green-600 text-xs">0:15</span>
            </div>

            {/* Caption Centered */}
            <div className="flex-1 flex flex-col justify-center items-center text-center px-2 space-y-3">
                <p className="text-lg font-bold text-green-800 leading-tight">
                    “Go green with every purchase. 🌿 Stay stylish, save the planet!”
                </p>
                {/* Weak CTA */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-300 shadow-inner hover:ring-2 hover:ring-green-400 transition"
                >
                    Click here
                </motion.button>
            </div>

            {/* Bottom Info Bar */}
            <div className="flex justify-between items-center text-sm text-green-700 font-semibold">
                <span>@greenly.official</span>
                <div className="flex items-center gap-3">
                    <PlayCircle className="w-5 h-5 text-green-600" />
                    <Share2 className="w-5 h-5 text-green-600" />
                </div>
            </div>
        </motion.div>
    );
};

export default CampaignCard;
