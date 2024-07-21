import { useState, useRef, useEffect } from 'react'; // Import useState, useRef, and useEffect hooks

import motivationgymvid from "../assets/motivation-gym-vid.mp4";

function VideoComponent() {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if video is playing
  const [showPlayButton, setShowPlayButton] = useState(true); // State to track if play button should be shown
  const videoRef = useRef(null); // Reference for the video element

  useEffect(() => {
    // Function to handle scroll event to pause video if scrolled away from it
    const handleScroll = () => {
      if (videoRef.current && isPlaying) {
        const videoTop = videoRef.current.getBoundingClientRect().top;
        const videoBottom = videoRef.current.getBoundingClientRect().bottom;

        // Check if video is in the viewport
        if (videoTop >= 0 && videoBottom <= window.innerHeight) {
          // Video is in view, do nothing
        } else {
          // Video is out of view, pause it
          videoRef.current.pause();
          setIsPlaying(false); // Update state
          setShowPlayButton(true); // Show play button
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]); // Listen for changes in isPlaying state

  // Function to handle video play/pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video
        setIsPlaying(true); // Update state
        setShowPlayButton(false); // Hide play button
      } else {
        videoRef.current.pause(); // Pause the video
        setIsPlaying(false); // Update state
        setShowPlayButton(true); // Show play button
      }
    }
  };

  // Function to handle click on video to toggle play/pause
  const handleVideoClick = () => {
    togglePlay();
  };

  // Function to handle click on play button to start video
  const startVideo = () => {
    togglePlay();
  };

  // Function to handle click on pause button to pause video
  const pauseVideo = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause(); // Pause the video
      setIsPlaying(false); // Update state
      setShowPlayButton(true); // Show play button
    }
  };

  // Function to handle mouse move over video to show play button initially
  const handleMouseMove = () => {
    if (!isPlaying) {
      setShowPlayButton(true);
    }
  };

  return (
    <div className="items-center text-center relative" onMouseMove={handleMouseMove}>
      <h1 className="text-3xl font-bold font-serif mt-20 text-white">Watch a Video</h1>
      <p className=" text-white">Tap play and immerse yourself in moments that speak louder than words—watch a video now!</p>
      <div className="relative w-full  mx-auto">
        <video controls ref={videoRef} className="w-full -mt-1" onClick={handleVideoClick}>
          <source src={motivationgymvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && showPlayButton && ( // Show play button only if video is paused and play icon is shown
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <button className="bg-black bg-opacity-50 text-white p-4 rounded-full shadow-lg" onClick={startVideo}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                <polygon points="6 3 20 12 6 21 6 3"/>
              </svg>
            </button>
          </div>
        )}
        {isPlaying && !showPlayButton && ( // Show pause button only if video is playing and pause icon is shown
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <button className="bg-black bg-opacity-50 text-white p-4 rounded-full shadow-lg" onClick={pauseVideo}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause">
                <rect x="14" y="4" width="4" height="16" rx="1"/>
                <rect x="6" y="4" width="4" height="16" rx="1"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoComponent;
