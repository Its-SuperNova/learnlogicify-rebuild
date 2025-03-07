"use client";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import FadeTransition from "../../../common/Animations/textFade";
import Link from "next/link";
import Body from "./coursebody";
import Button from "./btn";
export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Explore Our Popular Courses"];
  const description =
    "Explore some of the top courses we provide, designed to kickstart your tech journey. Whether you are looking to master problem-solving, coding essentials, or industry-specific skills, we have got you covered.";

  return (
    <div
      ref={descriptionRef}
      className="flex justify-center items-center bg-white py-10 px-5 md:px-20 mb-12"
    >
      <div className="max-w-6xl flex flex-col items-start gap-5">
        <SlideUpWord
          title={title}
          isInView={isInView}
          className="text-4xl leading-[45px] md:text-[60px] text-left md:leading-[65px]"
        />
        <div className="flex flex-col gap-8">
          <div className="font-light text-[rgb(31,41,55)]  text-lg md:text-[20px] leading-[28px]">
            <FadeTransition
              description={description}
              isInView={isInView}
              className="text-left font-normal pr-45 z-10"
            />
          </div>
          <Body />
          <div className="flex w-full justify-center items-center">
            <Link href="/course">
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
