import React, { useState, useRef, useEffect } from "react";

const VideoAudioSyncIntro = (props) => {
  const [showMainSite, setShowMainSite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldShowIntro, setShouldShowIntro] = useState(true); // Start with true for demo
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // Track first visit using a static variable (for demo purposes)
  // In your real app, use sessionStorage or localStorage
  useEffect(() => {
    // For demo: Use a component-level flag
    // In your real app, replace with:
    // const hasVisited = sessionStorage.getItem("hasVisitedBefore");

    // Simulate first visit behavior
    const hasVisited = false; // Always show intro for first render

    if (!hasVisited) {
      // First visit - show intro
      setShouldShowIntro(true);
      // In real app: sessionStorage.setItem("hasVisitedBefore", "true");
    } else {
      // Not first visit - skip intro
      setShowMainSite(true);
      if (props.onIntroComplete) {
        props.onIntroComplete();
      }
    }
  }, [props]);

  // Function to start both video and audio
  const startPlayback = async () => {
    try {
      // Reset both to start
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1.0; // Ensure audio volume is at maximum
      }

      // Try to start video first
      await videoRef.current?.play();
      console.log("Video started successfully");

      // Then try audio
      await audioRef.current?.play();
      console.log("Audio started successfully");

      setIsPlaying(true);
    } catch (error) {
      console.error("Error starting playback:", error);
      console.log("Audio element state:", audioRef.current?.readyState);
      console.log("Audio src:", audioRef.current?.src);

      // Fallback: try to play video only
      try {
        await videoRef.current?.play();
        setIsPlaying(true);
        console.log("Video playing without audio");
      } catch (videoError) {
        console.error("Video playback failed:", videoError);
      }
    }
  };

  // Handle video end - notify parent component
  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowMainSite(true);
    // Call parent callback if provided
    if (props.onIntroComplete) {
      props.onIntroComplete();
    }
  };

  // Sync audio with video if they get out of sync
  const syncAudio = () => {
    if (videoRef.current && audioRef.current && isPlaying) {
      const videoTime = videoRef.current.currentTime;
      const audioTime = audioRef.current.currentTime;
      const timeDiff = Math.abs(videoTime - audioTime);

      // If they're more than 0.1 seconds apart, sync them
      if (timeDiff > 0.1) {
        audioRef.current.currentTime = videoTime;
      }
    }
  };

  // Check sync every 100ms while playing
  useEffect(() => {
    let syncInterval;
    if (isPlaying) {
      syncInterval = setInterval(syncAudio, 100);
    }
    return () => {
      if (syncInterval) {
        clearInterval(syncInterval);
      }
    };
  }, [isPlaying]);

  // Auto-start playback when component mounts (only if should show intro)
  useEffect(() => {
    if (shouldShowIntro) {
      // Small delay to ensure elements are loaded
      const timer = setTimeout(() => {
        startPlayback();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [shouldShowIntro]);

  // Don't render anything when intro is done or shouldn't show
  if (showMainSite || !shouldShowIntro) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted // Video is muted since we're using separate audio
        onEnded={handleVideoEnd}
        onTimeUpdate={syncAudio}
        preload="auto"
      >
        <source
          src="/animations/Edumaniax Flash Screen 3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Audio element (hidden) */}
      <audio
        ref={audioRef}
        preload="auto"
        style={{ display: "none" }}
        onLoadedData={() => console.log("Audio loaded successfully")}
        onError={(e) => console.error("Audio loading error:", e)}
        onCanPlay={() => console.log("Audio can play")}
      >
        <source src="/animations/introaudio.mp3" type="audio/mpeg" />
        <source src="/animations/introaudio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default VideoAudioSyncIntro;
