"use client";
import React, { useRef, useState } from "react";
import Play from "./play";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
  const [startPlay, setStartPlay] = useState(false);

  const handlePlay = () => {
    setStartPlay(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 500); // Delay to match animation duration
  };

  return (
    <div className="relative w-full rounded-[40px] overflow-hidden">
      <AnimatePresence>
        {!isPlaying && poster && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer rounded-[40px] overflow-hidden"
            onClick={handlePlay}
            initial={{ opacity: 1, scale: 1 }}
            animate={startPlay ? { opacity: 0, scale: 1.2 } : {}}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={poster}
              alt="Thumbnail"
              width={1920} // Use higher width for better quality
              height={1080} // Use higher height for better quality
              className="w-full h-full object-cover rounded-[40px]"
              quality={100}
            />
            <motion.div
              className="absolute p-2"
              initial={{ opacity: 1, scale: 1 }}
              animate={startPlay ? { opacity: 0, scale: 2 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Play />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <video
        ref={videoRef}
        src={src}
        controls={controls}
        loop={loop}
        muted={muted}
        poster={poster}
        className="w-full rounded-[40px]"
        onEnded={() => {
          setIsPlaying(false);
          setStartPlay(false);
        }}
      />
    </div>
  );
};

export default Video;
