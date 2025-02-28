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

  useEffect(() => {
    const updateOffsetMultiplier = () => {
      if (window.innerWidth < 730) {
        setOffsetMultiplier(0.1);
      } else {
        setOffsetMultiplier(0.2);
      }
    };
    updateOffsetMultiplier();

    window.addEventListener("resize", updateOffsetMultiplier);
    return () => {
      window.removeEventListener("resize", updateOffsetMultiplier);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * offsetMultiplier;
        buttonElement.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetMultiplier]); // Include offsetMultiplier as a dependency

  const title = ["One Platform,", "endless opportunities."];
  const description =
    "At LearnLogicify Technologies, we are committed to accelerating tech careers by providing a comprehensive, cutting-edge learning platform. Whether you're a beginner or an advanced learner, our courses cover essential skills in web development, AI, and other emerging technologies";

  return (
    <div className="flex justify-center">
      <div
        ref={descriptionRef}
        className="relative bg-white w-full flex h-full max-w-[1200px]"
      >
        <div className="max-w-screen-xl flex flex-col items-start gap-5">
          <SlideUpWord
            title={title}
            isInView={isInView}
            className="text-[28px] font-medium leading-[30px] md:font-normal md:text-6xl md:leading-[65px] md:mb-5 text-left z-10"
          />
          <div className="max-w-[900px] md:font-normal font-light text-gray-600 md:text-black  text-lg md:text-[20px]">
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

        <div className="hidden absolute mg:top-8 right-36 w-[180px] h-[180px] mg:flex items-center justify-center z-10 rounded-full">
          <div ref={buttonParallaxRef}>
            <Link href={"/company/about"}>
              <Rounded className="w-[120px] lx:w-[150px] lx:h-[150px] h-[120px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer p-0">
                <p className="m-0  lx:text-lg font-medium z-10">About Us</p>
              </Rounded>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
