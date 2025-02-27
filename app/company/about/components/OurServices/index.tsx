"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "../../../../components/common/Animations/slideUpWord";
import FadeTransition from "../../../../components/common/Animations/textFade";
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
  const { ref: coursetitleRef, inView: iscourseTitleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: coursedescRef, inView: iscourseDescInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
 const { ref: LiveclasstitleRef, inView: isLiveclassTitleInView } = useInView({
   triggerOnce: false,
   threshold: 0.1,
 });
 const { ref: LiveclassdescRef, inView: isLiveclassDescInView } = useInView({
   triggerOnce: false,
   threshold: 0.1,
 });
  const headertitle = ["Services We Provide"];
  const title = ["Campus Training"];
  const LMStitle = ["Advanced LMS for Better Learning"];
  const LiveClasstitle = ["Interactive Live Classes"];
  const subtitle = `Explore our specialized services crafted to deliver outstanding results, driven by expertise and dedication.`;
  const descriptionPart1 = `Our placement training programs are carefully tailored to meet the unique needs of colleges and universities. With a focus on holistic career preparation, we combine technical skills training, aptitude development, and soft skills enhancement to equip students for real-world challenges.`;
  const descriptionPart2 = `Led by professional trainers with extensive industry experience, our programs bring valuable insights that help students stand out. We ensure that each participant is thoroughly prepared to meet the demands of their future careers with confidence and competence`;
  const LMSDescription1 = `Our Learning Management System (LMS) is designed to enhance the learning experience with course-specific interactive modules. Each module includes problem-solving exercises to build skills and encourage critical thinking.`;
  const LMSDescription2 = `Students can track their progress through regular assessments and identify areas for improvement. With a user-friendly interface and structured content, our LMS empowers students to achieve their academic and career goals efficiently.`;
  const LiveClassDescription1 = `Our interactive live classes are designed to foster a sense of community and collaboration among students. With engaging content and hands-on activities, students can learn from each other and develop their skills in a safe and supportive environment.`;
  const LiveClassDescription2 = `Students can collaborate and share ideas, learn from each other, and build their skills in a supportive and inclusive environment. Our interactive live classes are designed to foster a sense of community and collaboration among students.`;

  return (
    <div className="flex flex-col gap-5 lg:gap-[60px] pb-[50px] w-full max-w-[1350px]">
      {/* Header */}
      <div className="flex flex-col mg:flex-row justify-between">
        {/* Header Title */}
        <div
          ref={headertitleRef}
          className="text-[45px] lg:text-[60px] leading-[55px] "
        >
          <SlideUpWord
            title={headertitle}
            isInView={isheaderTitleInView}
            className="inherit"
          />
        </div>
        {/* Subtitle */}
        <div ref={subtitleRef} className="text-md mg:w-[300px]">
          <FadeTransition description={subtitle} isInView={issubTitleInView} />
        </div>
      </div>

      <div className="flex flex-col gap-[70px] lx:gap-[100px]">
        {/* Campus Training Section */}
        <div className="flex flex-col gap-8 lg:gap-12 lx:flex-row">
          {/* Left Side Image */}
          <div className="w-full lx:max-w-[700px]">
            <div className="relative  flex w-full h-full rounded-[20px]">
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
          <div className="lx:max-w-[750px] w-full gap-1 lx:gap-3 flex flex-col justify-start ">
            <div ref={campustitleRef}>
              <SlideUpWord
                title={title}
                isInView={iscampusTitleInView}
                className="text-[30px] lx:text-[34px] lx:leading-[45px]  leading-[38px] text-left font-medium"
              />
            </div>
            <div
              ref={campusdescRef}
              className="flex flex-col gap-4 ml-[3px] lx:gap-6 text-lg lx:text-[20px] text-gray-800 font-light"
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
            <div className="flex justify-start mt-[20px]">
              <Link href="/courses">
                <Rounded className="z-[9999] w-[160px] h-[45px]">
                  <p>View Course</p>
                </Rounded>
              </Link>
            </div>
          </div>
        </div>

        {/* LMS Section */}
        <div className="flex flex-col gap-8 lx:gap-12 lx:flex-row-reverse">
          {/* Left Side Image */}
          <div className="w-full lx:max-w-[700px] lx:h-[430px]">
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
          <div className="lx:max-w-[750px] w-full gap-2 lx:gap-3 flex flex-col justify-start ">
            <div ref={coursetitleRef}>
              <SlideUpWord
                title={LMStitle}
                isInView={iscourseTitleInView}
                className="text-[30px] lx:text-[34px] lx:leading-[45px]  leading-[38px] text-left font-medium"
              />
            </div>
            <div
              ref={coursedescRef}
              className="flex flex-col gap-4  lx:gap-6 text-lg lx:text-[20px] text-gray-800 font-light"
            >
              <FadeTransition
                description={LMSDescription1}
                isInView={iscourseDescInView}
              />
              <FadeTransition
                description={LMSDescription2}
                isInView={iscourseDescInView}
              />
            </div>
            <div className="flex justify-start mt-[20px] lx:mt-[30px]">
              <Link href="/portal">
                <Rounded className="z-[9999] w-[160px] h-[45px]">
                  <p>About Portal</p>
                </Rounded>
              </Link>
            </div>
          </div>
        </div>

        {/* Live Online class Section */}
        <div className="flex flex-col gap-8 lx:gap-12 lx:flex-row">
          {/* Left Side Image */}
          <div className="w-full lx:max-w-[700px]">
            <div className="relative  flex w-full h-full rounded-[20px]">
              <Image
                src="/images/services/live-class.png"
                alt="Live class"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
          {/* Right Side Content */}
          <div className="lx:max-w-[750px] w-full gap-1 lx:gap-3 flex flex-col justify-start ">
            <div ref={LiveclasstitleRef}>
              <SlideUpWord
                title={LiveClasstitle}
                isInView={isLiveclassTitleInView}
                className="text-[30px] lx:text-[34px] lx:leading-[45px]  leading-[38px] text-left font-medium"
              />
            </div>
            <div
              ref={LiveclassdescRef}
              className="flex flex-col gap-4 ml-[3px] lg:gap-6 text-lg lx:text-[20px] text-gray-800 font-light"
            >
              <FadeTransition
                description={LiveClassDescription1}
                isInView={isLiveclassDescInView}
              />
              <FadeTransition
                description={LiveClassDescription2}
                isInView={isLiveclassDescInView}
              />
            </div>
            <div className="flex justify-start mt-[20px]">
              <Link href="/courses">
                <Rounded className="z-[9999] w-[160px] h-[45px]">
                  <p>View Course</p>
                </Rounded>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
