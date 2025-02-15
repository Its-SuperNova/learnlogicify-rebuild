"use client";
import React, { useState, useRef } from "react";

interface VideoProps {
  src: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

const Video: React.FC<VideoProps> = ({
  src,
  controls = true,
  loop = false,
  muted = false,
  poster,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl w-full pt-[56.25%]">
      {!isPlaying && (
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${poster})` }}
        >
          <button
            className="text-5xl text-black bg-white border-none rounded-full w-20 h-20 flex justify-center items-center pl-1 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white md:text-4xl md:w-16 md:h-16 sm:text-3xl sm:w-14 sm:h-14 xs:text-2xl xs:w-12 xs:h-12"
            onClick={handlePlay}
          >
            &#9658;
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        controls={controls}
        loop={loop}
        muted={muted}
        className="absolute top-0 left-0 w-full h-full"
        style={{ display: isPlaying ? "block" : "none" }} // Control visibility with inline styles
      />
    </div>
  );
};

export default Video;
