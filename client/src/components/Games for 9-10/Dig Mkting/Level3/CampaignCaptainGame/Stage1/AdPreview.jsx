import React from "react";

// Map visuals to video URLs
const visualMap = {
    "Foam Splash": "./foam.mp4",
    "Before & After": "./Before&After.mp4",
    "Unboxing Glow": "./Unboxing_Glow.mp4",
    "Glow in 10": "./Glow_in_10.mp4",
};

// Format-specific dimensions
const formatStyles = {
    "Instagram Reel": "w-[270px] h-[500px]",
    "Story": "w-[250px] h-[460px]",
    "Carousel": "w-[400px] h-[420px]",
};

const AdPreview = ({ selectedVisual, caption, format, cta }) => {
    const dimensions = formatStyles[format] || "w-[320px] h-[500px]";

    return (
        <div className="flex flex-col items-center gap-5 p-6 bg-gradient-to-br from-yellow-100 via-pink-50 to-rose-100 rounded-[2rem] shadow-2xl w-full max-w-[460px] mx-auto border-4 border-dashed border-pink-200 animate-in fade-in zoom-in duration-700">
            {/* Title */}
            <h3 className="text-3xl font-extrabold text-pink-600 drop-shadow-md animate-pulse">
                📱 Instagram Preview
            </h3>

            {/* Preview Container */}
            <div className="flex items-center justify-center min-h-[520px]">
                <div
                    className={`relative ${dimensions} rounded-3xl overflow-hidden shadow-xl bg-black border-[5px] border-pink-300 transition-all duration-700 ring-4 ring-yellow-200 `}
                >
                    {/* Background Visual */}
                    {selectedVisual ? (
                        <video
                            src={visualMap[selectedVisual]}
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-300 text-lg font-semibold">
                            🎬 Pick a visual from the left!
                        </div>
                    )}

                    {/* Caption & CTA */}

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-4">
                        {caption && (
                            <p className="text-blue-900 text-base md:text-lg font-extrabold bg-white bg-opacity-90 px-6 py-3 rounded-3xl max-w-[90%] break-words text-center shadow-xl tracking-wide leading-snug border-2 border-dashed border-blue-300  ">
                                {caption}
                            </p>
                        )}

                        {cta && (
                            <button className="text-sm md:text-md px-6 py-2 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 text-white font-bold rounded-full shadow-xl transition-all hover:scale-110 animate-pulse">
                                {cta}
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdPreview;
