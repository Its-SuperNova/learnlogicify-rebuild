"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../../components/common/Animations/slideUpWord";
import FadeTransition from "../../../../components/common/Animations/textFade";
import Link from "next/link";
import Image from "next/image";

const OurVision = () => {
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

  const title = ["Our Vision"];
  const descriptionPart1 = `At LearnLogicify Technologies LLP, we envision a world where every individual, regardless of background, has the opportunity to reach their fullest potential and pursue their aspirations confidently. Our mission is to bridge the gap between traditional academic learning and practical, real-world applications.`;
  const descriptionPart2 = `By providing students with industry-relevant skills, hands-on experience, and a supportive learning environment, we empower them to navigate and excel in today's competitive job market. We are committed to equipping our learners with the tools, knowledge, and confidence necessary to thrive and make meaningful contributions to their chosen fields.`;

  return (
    <div className="flex flex-col gap-4 mb-10 lx:flex-row lx:gap-10 max-w-[1300px]">
      {/* Left Side: Image with overlay */}
      <div className="w-full lx:max-w-[600px]">
        <div className="relative flex w-full h-full rounded-[24px] group">
          <Image
            src="/images/team/sachin-x-1.jpg"
            alt="About Portal Illustration"
            width={600}
            height={500}
            className="w-full h-full object-cover rounded-[24px]"
          />
          <div className="absolute bottom-[20px] right-[20px] p-[15px] bg-white/90 rounded-[12px] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <div>
              <p className="text-[16px] font-bold text-[#333]">
                Sachin Nandha Sabarish J
              </p>
              <p className="text-[14px] text-[#555] mb-[10px]">
                Founder &amp; CEO
              </p>
            </div>
            <div className="flex w-full justify-end">
              <Link
                href="/about"
                className="text-[14px] text-[#0066cc] no-underline"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full flex flex-col justify-start  pb-[10px]">
        <div ref={titleRef}>
          <SlideUpWord
            title={title}
            isInView={isTitleInView}
            className="text-[40px] md:text-[50px]"
          />
        </div>
        <div
          ref={descRef}
          className="flex flex-col gap-4 text-lg md:text-[20px] text-gray-800 font-light"
        >
          <FadeTransition
            description={descriptionPart1}
            isInView={isDescInView}
          />
          <FadeTransition
            description={descriptionPart2}
            isInView={isDescInView}
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
