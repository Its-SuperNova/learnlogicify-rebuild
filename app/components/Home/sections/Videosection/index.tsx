"use client"; // Ensure client-side rendering

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "../../VideoSection"; // Adjust path as necessary

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null); // Ref for the container

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768 && videoRef.current) {
      gsap.to(videoRef.current, {
        width: "70%",
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top+=0px center",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="h-full max-w-[1500px] px-6 md:px-[80px] lg:px-[100px] py- md:py-[50px] flex items-center justify-center flex-col bg-white ">
        <div
          className="h-full w-full rounded-[40px] object-cover "
          ref={videoRef}
        >
          <Video
            src="/course-intro.mp4"
            poster="/images/thumbnail/image.png"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
