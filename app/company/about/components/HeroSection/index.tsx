"use client"
import React from "react";
import Iris from "@/components/ui/iris-bg";
import Btn from "@/components/ui/learnlogicBtn";
import { useInView } from "react-intersection-observer";
import BlurText from "@/components/ui/blurtext";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  buttonReveal,
} from "@/app/components/common/Animations/animation";
import Rounded from "@/app/components/common/buttons/roundButton";
const Hero = () => {
  const { ref: buttonRef, inView: isButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div className="h-screen  items-center w-full flex flex-col gap-10">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div>
          <Btn />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-[30px]  md:text-[50px] text-center text-black flex flex-col lg:gap-3 lg:flex-row items-center  ">
            <BlurText
              text="Where Learning Meets"
              delay={150}
              animateBy="words"
              direction="top"
            />
            <BlurText
              text="Innovation"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>
          <div className="text-[14px] w-full font-extralight md:max-w-[700px] text-center">
            At LearnLogicify Technologies, we shape the next generation of tech
            leaders through hands-on coding education and real-world projects.
            Our mission is to inspire creativity, foster collaboration, and
            build confidence in every student.
          </div>
          <div
            ref={buttonRef}
            className="flex gap-5 justify-center items-center mt-4 w-full max-w-[600px] text-[12px]"
          >
            <motion.div
              variants={buttonReveal} // Button reveal animation for "View Courses"
              initial="initial"
              animate={isButtonInView ? "open" : "initial"}
            >
              <Link href={"/course"}>
                <Rounded className="w-[100%] px-[20px] py-[10px] text-[14px] md:text-[16px] md:w-[200px]  z-[9999]">
                  <p>View Courses</p>
                </Rounded>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonReveal} // Button reveal animation for "Contact Us"
              initial="initial"
              animate={isButtonInView ? "open" : "initial"}
            >
              <Link href={"/contact"}>
                <motion.button className="w-[100%] px-[20px] py-[10px] text-[14px] md:w-[200px] md:text-[16px] font-medium rounded-[25px]  bg-white text-black cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#455ce9] hover:text-white hover:border-none">
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[150px] md:h-[300px]    rounded-[16px] md:rounded-[30px]  overflow-hidden">
        <Iris
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[1.9] w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
