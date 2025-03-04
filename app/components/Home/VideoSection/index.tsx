"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const Play = dynamic(() => import("./play"), { ssr: false });

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden">
      {!isPlaying && poster && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer rounded-[40px] overflow-hidden"
          onClick={handlePlay}
        >
          <img
            src={poster}
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-[40px]"
          />
          <div className="absolute p-2">
            <Play />
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        controls={controls}
        loop={loop}
        muted={muted}
        poster={poster}
        className="w-full rounded-[40px]"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Video;
