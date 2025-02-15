"use client";
import React, { useState, useRef, useEffect, useId } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { XIcon } from "lucide-react";

interface VideoProps {
  src: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

const Video: React.FC<VideoProps> = ({
  src,
  controls = true,
  loop = false,
  muted = false,
  poster,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const uniqueId = useId();

  const handlePlay = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Video Thumbnail */}
      <div className="relative h-full overflow-hidden rounded-2xl w-full pt-[56.25%]">
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${poster})` }}
          onClick={handlePlay}
        >
          <button className="text-xl text-black bg-white border-none rounded-full w-10 h-10 flex justify-center items-center pl-1 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white md:text-4xl md:w-16 md:h-16 sm:text-3xl sm:w-14 sm:h-14 xs:text-2xl xs:w-12 xs:h-12">
            &#9658;
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <MotionConfig transition={transition}>
        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* Background Blur Effect */}
              <motion.div
                className=" fixed inset-0 h-full w-full backdrop-blur-md bg-black/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsModalOpen(false)}
              />

              {/* Centered Video Popup */}
              <motion.div
                key="dialog"
                className="fixed inset-0 flex items-center justify-center p-2 z-10"
              >
                <motion.div
                  className="relative flex flex-col w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  layoutId={`dialog-${uniqueId}`}
                >
                  <motion.div className="w-full h-full">
                    <video
                      ref={videoRef}
                      src={src}
                      controls={controls}
                      loop={loop}
                      muted={muted}
                      autoPlay
                      className="w-full h-full object-cover rounded-md"
                    />
                  </motion.div>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-4 top-4 p-3 text-white bg-gray-700 hover:bg-gray-900 rounded-full transition-transform duration-200 active:scale-90"
                    type="button"
                    aria-label="Close dialog"
                  >
                    <XIcon size={24} />
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
};

export default Video;
