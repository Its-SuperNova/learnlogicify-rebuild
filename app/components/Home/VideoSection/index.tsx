"use client";
import React, { useState, useRef, forwardRef } from "react";

// Define the props interface for the Video component
interface VideoProps {
  src: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

// Use forwardRef to allow ref to be passed to the video element
const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, controls = true, loop = false, muted = false, poster }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null); // Local ref

    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };

    // Combine local ref with forwarded ref if needed
    const combinedRef = ref || videoRef;

    return (
      <div className="relative overflow-hidden rounded-[50px] w-full pt-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        {!isPlaying && (
          <div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${poster})` }}
          >
            <button
              className="text-4xl text-black bg-white border-none rounded-full w-20 h-20 flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
              onClick={handlePlay}
            >
              &#9658;
            </button>
          </div>
        )}
        <video
          ref={combinedRef} // Use the combined ref
          src={src}
          controls={controls}
          loop={loop}
          muted={muted}
          className="absolute top-0 left-0 w-full h-full"
          style={{ display: isPlaying ? "block" : "none" }} // Control visibility with inline styles
        />
      </div>
    );
  }
);

// Set a display name for better debugging
Video.displayName = "Video";

export default Video;
