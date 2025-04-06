"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/app/components/common/Animations/slideUpWord";
import FadeTransition from "@/app/components/common/Animations/textFade";
import { motion } from "framer-motion";
import {
  gridSlideUp,
  gridFadeIn,
  buttonReveal,
} from "../../../common/Animations/animation";
import Rounded from "../../../common/buttons/roundButton";
import Link from "next/link";

export default function GetToKnow() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: gridRef, inView: isGridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: isButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Get to Know About Us"];
  const description =
    "At LearnLogicify Technologies, we are dedicated to empowering individuals to achieve success in the tech industry through innovative and accessible learning solutions. Our platform bridges the gap between theoretical knowledge and real-world application, offering expertly crafted courses, hands-on projects, and tailored assessments.";

  return (
      <div
        ref={descriptionRef}
        className="px-6 md:px-[80px] lg:px-[200px] py-[40px] mb-[30px]  h-full flex justify-center items-center bg-white "
      >
        <div className="max-w-[1200px] flex flex-col items-start gap-2 md:gap-5">
          <SlideUpWord
            title={title}
            isInView={isInView}
            className="text-[28px] md:text-5xl md:leading-[52px] font-medium leading-[30px] md:font-normal lg:text-6xl lg:leading-[65px] lg:mb-5 text-left z-10"
          />
          <div className="font-light text-[rgb(31,41,55)]  text-lg md:text-[20px] leading-[28px]">
            <FadeTransition
              description={description}
              isInView={isInView}
              className="text-left font-normal pr-45 z-10"
            />
          </div>
          <div
            ref={gridRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[50px] mt-5 md:mt-[50px] z-10"
          >
            <motion.div
              className="text-left border-t border-gray-400 pt-5"
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              <motion.h2
                variants={gridSlideUp}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
                className="text-[22px] font-semibold"
              >
                Comprehensive Learning
              </motion.h2>
              <motion.p
                variants={gridFadeIn}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
                className="text-[16px] font-light  text-[rgb(31,41,55)] mt-2.5"
              >
                We provide a wide range of learning materials, from video
                tutorials to interactive modules, ensuring that every aspect of
                your education is covered.
              </motion.p>
            </motion.div>

            <motion.div
              className="text-left border-t border-gray-400 pt-5"
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              <motion.h2
                variants={gridSlideUp}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
                className="text-[22px] font-semibold"
              >
                Expert Guidance
              </motion.h2>
              <motion.p
                variants={gridFadeIn}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
                className="text-[16px] text-[rgb(31,41,55)]  font-light mt-2.5"
              >
                Learn from industry professionals with practical insights and
                experience, helping you gain real-world knowledge and skills.
              </motion.p>
            </motion.div>

            <motion.div
              className="text-left border-t border-gray-400 pt-5"
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              <motion.h2
                variants={gridSlideUp}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
                className="text-[22px] font-semibold"
              >
                Career Focused
              </motion.h2>
              <motion.p
                variants={gridFadeIn}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
                className="text-[16px] text-[rgb(31,41,55)]  font-light mt-2.5"
              >
                Our programs equip you with the certifications and skills needed
                to thrive in the tech world and build a strong career
                foundation.
              </motion.p>
            </motion.div>
          </div>

          <div
            ref={buttonRef}
            className="flex flex-col md:flex-row gap-5 justify-between items-center mt-7 w-full max-w-[600px]"
          >
            <motion.div
              variants={buttonReveal}
              initial="initial"
              animate={isButtonInView ? "open" : "initial"}
              className="w-full"
            >
              <Link href="/course">
                <Rounded className="w-full rounded-sm md:max-w-[300px] h-[50px] z-[9999]">
                  <p>View Courses</p>
                </Rounded>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonReveal}
              initial="initial"
              animate={isButtonInView ? "open" : "initial"}
              className="w-full"
            >
              <Link href="/contact">
                <motion.button className="w-full md:max-w-[300px] h-[50px] font-medium rounded-[25px] border-[1.5px] border-black bg-white text-black cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white">
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
  );
}
