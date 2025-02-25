"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../../components/common/Animations/slideUpWord";
import FadeTransition from "../../../../components/common/Animations/textFade";
import { motion } from "framer-motion";
import { buttonReveal } from "../../../../components/common/Animations/animation";
import Rounded from "../../../../components/common/buttons/roundButton";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  // Intersection observers for different elements
  const { ref: headertitleRef, inView: isheaderTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: subtitleRef, inView: issubTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: campustitleRef, inView: iscampusTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: campusdescRef, inView: iscampusDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: campusbuttonRef, inView: iscampusButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursetitleRef, inView: iscourseTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursedescRef, inView: iscourseDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursebuttonRef, inView: iscourseButtonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const headertitle = ["Services We Provide"];
  const title = ["Campus Training"];
  const coursetitle = ["Advanced LMS for Better Learning"];
  const subtitle = `Explore our specialized services crafted to deliver outstanding results, driven by expertise and dedication.`;
  const descriptionPart1 = `Our placement training programs are carefully tailored to meet the unique needs of colleges and universities. With a focus on holistic career preparation, we combine technical skills training, aptitude development, and soft skills enhancement to equip students for real-world challenges.`;
  const descriptionPart2 = `Led by professional trainers with extensive industry experience, our programs bring valuable insights that help students stand out. We ensure that each participant is thoroughly prepared to meet the demands of their future careers with confidence and competence`;
  const CourseDescription1 = `Our Learning Management System (LMS) is designed to enhance the learning experience with course-specific interactive modules. Each module includes problem-solving exercises to build skills and encourage critical thinking.`;
  const CourseDescription2 = `Students can track their progress through regular assessments and identify areas for improvement. With a user-friendly interface and structured content, our LMS empowers students to achieve their academic and career goals efficiently.`;

  return (
    <div className="flex flex-col gap-5 pb-[50px] max-w-[1300px]">
      {/* Header */}
      <div className="flex flex-col lx:flex-row">
        {/* Header Title */}
        <div ref={headertitleRef} className="text-[45px] leading-[55px] ">
          <SlideUpWord
            title={headertitle}
            isInView={isheaderTitleInView}
            className="inherit"
          />
        </div>
        {/* Subtitle */}
        <div ref={subtitleRef} className="w-1/5 max-[960px]:w-full text-md">
          <FadeTransition description={subtitle} isInView={issubTitleInView} />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {/* Campus Training Section */}
        <div className="flex flex-col gap-5">
          {/* Left Side Image */}
          <div className="w-full">
            <div className="relative flex w-full h-full rounded-[20px]">
              <Image
                src="/images/services/campus-training.jpg"
                alt="About Portal Illustration"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
          {/* Right Side Content */}
          <div className="max-w-[750px] w-full flex flex-col justify-start gap-2 max-[1125px]:max-w-full">
            <div ref={campustitleRef}>
              <SlideUpWord
                title={title}
                isInView={iscampusTitleInView}
                className="text-[30px] md:text-[35px] leading-[38px] md:leading-[44px] text-left font-medium"
              />
            </div>
            <div
              ref={campusdescRef}
              className="flex flex-col gap-[20px] ml-[6px] text-lg md:text-[20px] text-gray-800 font-light"
            >
              <FadeTransition
                description={descriptionPart1}
                isInView={iscampusDescInView}
              />
              <FadeTransition
                description={descriptionPart2}
                isInView={iscampusDescInView}
              />
            </div>
            <div ref={campusbuttonRef} className="flex justify-start mt-[20px]">
              <motion.div
                variants={buttonReveal}
                initial="initial"
                animate={iscampusButtonInView ? "open" : "initial"}
              >
                <Link href="/courses">
                  <Rounded className="z-[9999] w-[160px] h-[45px]">
                    <p>View Course</p>
                  </Rounded>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Course Offering Section */}
        <div className="flex flex-col gap-5">
          {/* Left Side Image */}
          <div className="w-full">
            <div className="relative flex w-full h-full rounded-[20px]">
              <Image
                src="/images/services/course offerings.png"
                alt="About Portal Illustration"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
          {/* Right Side Content */}
          <div className="max-w-[750px] w-full flex flex-col justify-start gap-2">
            <div ref={coursetitleRef}>
              <SlideUpWord
                title={coursetitle}
                isInView={iscourseTitleInView}
                className="text-[30px] md:text-[35px] leading-[38px] md:leading-[44px] text-left font-medium"
              />
            </div>
            <div
              ref={coursedescRef}
              className="flex flex-col gap-[20px] ml-[6px]
            text-lg md:text-[20px] text-gray-800 font-light"
            >
              <FadeTransition
                description={CourseDescription1}
                isInView={iscourseDescInView}
              />
              <FadeTransition
                description={CourseDescription2}
                isInView={iscourseDescInView}
              />
            </div>
            <div ref={coursebuttonRef} className="flex justify-start mt-[20px]">
              <motion.div
                variants={buttonReveal}
                initial="initial"
                animate={iscourseButtonInView ? "open" : "initial"}
              >
                <Link href="/portal">
                  <Rounded className="z-[9999] w-[160px] h-[45px]">
                    <p>About Portal</p>
                  </Rounded>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
