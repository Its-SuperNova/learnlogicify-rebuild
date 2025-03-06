"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/app/components/common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import Rounded from "../../../common/buttons/roundButton";
import Link from "next/link";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const buttonParallaxRef = useRef<HTMLDivElement>(null);
  const [offsetMultiplier, setOffsetMultiplier] = useState(0.2); // Default for larger screens

  // Combine scroll and resize event listeners into one useEffect
  useEffect(() => {
    const updateOffsetMultiplier = () => {
      setOffsetMultiplier(window.innerWidth < 730 ? 0.1 : 0.2);
    };

    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * offsetMultiplier;
        buttonElement.style.transform = `translateY(${offset}px)`;
      }
    };

    // Initial call to set the offset multiplier
    updateOffsetMultiplier();

    // Add event listeners for resize and scroll
    window.addEventListener("resize", updateOffsetMultiplier);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", updateOffsetMultiplier);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetMultiplier]); // Dependency on offsetMultiplier to trigger updates

  const title = ["One Platform,", "endless opportunities."];
  const description =
    "At LearnLogicify Technologies, we are committed to accelerating tech careers by providing a comprehensive, cutting-edge learning platform. Whether you're a beginner or an advanced learner, our courses cover essential skills in web development, AI, and other emerging technologies";

  return (
    <div className="flex justify-center px-6 py-[50px]  md:px-[80px] lg:p-[100px]">
      <div
        ref={descriptionRef}
        className="relative bg-white justify-around gap-5 w-full flex h-full max-w-[1200px]"
      >
        <div className="max-w-screen-xl flex flex-col items-start gap-3 md:gap-5">
          <SlideUpWord
            title={title}
            isInView={isInView}
            className="text-[28px] md:text-5xl md:leading-[52px] font-medium leading-[30px] md:font-normal lg:text-6xl lg:leading-[65px] lg:mb-5 text-left z-10"
          />
          <div className="max-w-[900px] font-light text-[rgb(31,41,55)]  text-lg md:text-[20px] leading-[28px]">
            <FadeTransition
              description={description}
              isInView={isInView}
              className="text-left font-normal pr-45 z-10"
            />
          </div>

          <Link href={"https://learnlogicify.com/login/index.php"}>
            <Rounded className="mt-3 md:mt-5 z-50 md:w-[180px] px-6 py-2 md:px-0 md:py-0 md:h-[50px] rounded-full">
              <p>Get Started</p>
            </Rounded>
          </Link>
        </div>

        <div className="hidden mg:top-8 right-36 w-[180px] h-[180px] mg:flex items-center justify-center z-10 rounded-full">
          <div ref={buttonParallaxRef}>
            <Link href={"/company/about"}>
              <Rounded className="w-[120px] lg:w-[150px] lg:h-[150px] h-[120px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer p-0">
                <p className="m-0 lx:text-lg font-medium z-10">About Us</p>
              </Rounded>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
