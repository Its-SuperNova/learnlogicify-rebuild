"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import CountUp from "../countup";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

interface StatsCardProps {
  count: number;
  title: string;
  animationData: any;
}

const StatsCard: React.FC<StatsCardProps> = ({
  count,
  title,
  animationData,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div
      className="w-full h-auto rounded-lg bg-[#f0f6ff] flex flex-row p-4 gap-4 transition-transform duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      <div className="w-[70px] h-full bg-white rounded-lg shadow-md flex items-center justify-center">
        <Lottie
          options={defaultOptions}
          isStopped={!isHovered}
          isPaused={!isHovered}
          height={50}
          width={50}
        />
      </div>
      <div className="flex flex-col justify-around items-start">
        {inView ? (
          <CountUp
            from={0}
            to={count}
            separator=","
            direction="up"
            duration={1}
            className="text-3xl mg:text-4xl  font-bold text-[#5096ff] text-left mt-1"
          />
          
        ) : (
          <span className="text-4xl font-bold text-[#5096ff] text-left mt-1">
            0
          </span>
        )}
        <p className="text-[16px] mg:text-lg text-[#001638] font-medium text-left mb-1">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
