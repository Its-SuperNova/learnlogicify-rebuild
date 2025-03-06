"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import { motion } from "framer-motion";
import { buttonReveal } from "../../../common/Animations/animation";
import Rounded from "../../../common/buttons/roundButton";
import Link from "next/link";
import Image from "next/image";

const AboutPortal = () => {
  const { ref: titleRef, inView: isTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: descRef, inView: isDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: isButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Your Gateway to Advanced Learning"];
  const description =
    "Explore our cutting-edge portal designed to elevate your tech skills. With expert-led tutorials, hands-on modules, and personalized learning paths, our platform empowers you to master the latest industry tools and technologies. Unlock your potential and accelerate your career with ease.";

  return (
    <div className="flex flex-wrap flex-row-reverse mb-[100px] h-[600px]">
      <div className="bg-[#E2D8FF] max-w-[620px] w-full md:w-2/5 p-[70px] md:p-[90px] flex flex-col justify-center gap-[20px]">
        <div ref={titleRef}>
          <SlideUpWord
            title={title}
            isInView={isTitleInView}
            className="text-[50px] md:text-[40px] lg:text-[30px] leading-[60px] md:leading-[50px] lg:leading-[35px] font-semibold text-left"
          />
        </div>
        <div ref={descRef}>
          <FadeTransition
            description={description}
            isInView={isDescInView}
            className="text-[20px] md:text-[18px] lg:text-[16px] leading-[30px] md:leading-[28px] lg:leading-[24px] font-normal text-left"
          />
        </div>
        <div
          ref={buttonRef}
          className="mt-[20px] flex justify-start transition-transform duration-300"
        >
          <motion.div
            variants={buttonReveal}
            initial="initial"
            animate={isButtonInView ? "open" : "initial"}
          >
            <Link href="/portal">
              <Rounded className="w-[200px] md:w-[140px] lg:w-[140px] h-[50px] md:h-[40px] text-center">
                <p>About Portal</p>
              </Rounded>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#b89cff] flex-grow w-full md:w-2/5">
        <Image
          src="/images/services/course offerings.png"
          alt="About Portal Illustration"
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPortal;
