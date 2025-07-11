import React, { useState, useRef, useEffect } from "react";

const VideoIntro = (props) => {
  const [showMainSite, setShowMainSite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);

  // Detect screen type and assign appropriate video
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const mobileVideo = "/animations/Edumaniax_Logo_Mobile_Video.mp4";
    const desktopVideo = "/animations/Edumaniax Flash Screen 3.mp4";

    setVideoSrc(isMobile ? mobileVideo : desktopVideo);
  }, []);

  useEffect(() => {
    const hasVisited = false;
    if (!hasVisited) {
      setShouldShowIntro(true);
    } else {
      setShowMainSite(true);
      props.onIntroComplete?.();
    }
  }, [props]);

  const startPlayback = async () => {
    try {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Video playback error:", error);
    }
  };

  useEffect(() => {
    if (shouldShowIntro) {
      const timer = setTimeout(() => {
        startPlayback();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [shouldShowIntro]);

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowMainSite(true);
    props.onIntroComplete?.();
  };

  if (showMainSite || !shouldShowIntro) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="absolute inset-0 w-full h-full">
        {videoSrc && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            onEnded={handleVideoEnd}
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoIntro;
