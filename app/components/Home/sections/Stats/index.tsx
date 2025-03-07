"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../common/Animations/slideUpWord";
import Card from "./card";
import Avator from "./lottie/avator.json";

export default function ExplorePopularCourses() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["Our work in Numbers"];

  return (
    <div
      ref={descriptionRef}
      className="flex justify-center items-center bg-white py-10 px-5 md:px-20 lg:px-40 mb-12"
    >
      <div className="max-w-6xl flex flex-col items-start gap-5 w-full">
        <SlideUpWord
          title={title}
          isInView={isInView}
          className="text-4xl md:text-[60px] text-left leading-tight"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xlx:grid-cols-3 gap-5 mt-5 w-full">
          <Card count={3000} title="Active Learners" animationData={Avator} />
          <Card
            count={7000}
            title="Students Trained So Far"
            animationData={Avator}
          />
          <Card count={50} title="Courses Available" animationData={Avator} />
          <Card count={5} title="Experience" animationData={Avator} />
          <Card count={10} title="Trainers" animationData={Avator} />
          <Card count={15} title="Webinars Hosted" animationData={Avator} />
          
        </div>
      </div>
    </div>
  );
}
