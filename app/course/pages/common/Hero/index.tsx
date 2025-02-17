import React from "react";
import { FaStar } from "react-icons/fa6";
import Overview from "../OverviewCard";
import Video from "../VideoSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface HeroProps {
  courseTitle: string;
  instructor: string;
  rating: number;
  reviews: string;
  courseIcon: React.ReactNode;
  level: string;
  liveClasses: string;
  weekdays: string;
  weekends: string;
  totalHours: string;
  topicsCount: string;
  problemsCount: string;
  projectsCount: string;
  portalAccess: string;
  sessionRecordings: string;
  certificate: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  courseIntroVideo: string;
  videoPoster: string;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="w-full h-full flex flex-col gap-6 pt-4">
      <div className="flex flex-col">
        <Breadcrumb className="ml-[3px] font-medium">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/course">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">
                {props.courseTitle}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="text-2xl md:text-4xl font-semibold sm:text-3xl mt-2">
          <p>{props.courseTitle}</p>
        </div>
        <div className="flex text-sm items-center mt-1 md:mt-2 ml-[3px]">
          <p className="font-extrabold text-[#7A47FF]">{props.instructor}</p>
          <div className="ml-2 flex items-center">
            <FaStar color="#FFD600" />
          </div>
          <div className="flex ml-2 gap-1">
            <p className="font-medium">{props.rating}</p>
            <p className="font-normal text-gray-500">({props.reviews})</p>
          </div>
        </div>
      </div>
      <div className="flex gap-8 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[400px]">
          <Overview
            courseIcon={props.courseIcon}
            level={props.level}
            liveClasses={props.liveClasses}
            weekdays={props.weekdays}
            weekends={props.weekends}
            totalHours={props.totalHours}
            topicsCount={props.topicsCount}
            problemsCount={props.problemsCount}
            projectsCount={props.projectsCount}
            portalAccess={props.portalAccess}
            sessionRecordings={props.sessionRecordings}
            certificate={props.certificate}
            originalPrice={props.originalPrice}
            discountedPrice={props.discountedPrice}
            discountPercentage={props.discountPercentage}
          />
        </div>
        <div className="flex-1">
          <Video src={props.courseIntroVideo} poster={props.videoPoster} />
        </div>
      </div>
      <div className="opacity-1 mt-4">
        <div className="opacity-1">
          <div className="flex flex-col gap-4 mb-8">
            <div className="text-2xl font-semibold">About This Course</div>
            <p className="text-md leading-6 md:text-lg md:leading-7">
              Complete Python Mastery is a live online training program designed
              to take you from a beginner to an advanced-level Python developer.
              This interactive course focuses on hands-on coding, real-world
              projects, and problem-solving skills essential for mastering
              Python.
            </p>
            <p className="text-md leading-6 md:text-lg md:leading-7">
              Unlike pre-recorded courses, this program offers live classes with
              real-time instructor guidance, Q&A sessions, and coding exercises
              to ensure an immersive learning experience.
            </p>
            <p className="text-md leading-6 md:text-lg md:leading-7">
              The curriculum covers core programming concepts, data structures,
              algorithms, object-oriented programming, and real-world
              applications like database management, automation, and web
              development. You will also work on 10+ industry-relevant projects
              to build practical expertise.
            </p>
            <p className="text-md leading-6 md:text-lg md:leading-7">
              Course Structure:
            </p>
            <p className="text-md leading-6 md:text-lg md:leading-7">
              - Weekdays: 1 Hour per Day - Weekends: 3 Hours per Day - Total
              Duration: 90 Hours of Live Training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
