import React from "react";
import { FaStar } from "react-icons/fa6";
import Overview from "../../../common/OverviewCard";
import Video from "../../../common/VideoSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const Hero = () => {
  return (
    <div className="w-full h-full pt-6">
      <div className="flex flex-col mb-8">
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
                Python
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="text-4xl font-semibold sm:text-3xl mt-2">
          <p>Complete Python Mastery</p>
        </div>
        <div className="flex items-center mt-2 ml-[3px]">
          <p className="font-extrabold text-[#7A47FF]">Sachin</p>
          <div className="ml-2 flex items-center">
            <FaStar color="#FFD600" />
          </div>
          <div className="flex ml-2 gap-1">
            <p className="font-medium">4.9</p>
            <p className="font-normal text-gray-500">(5.2k Ratings)</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-[1300px] w-full h-full gap-10 mb-12">
        <div className="w-full max-w-[400px] flex gap-10">
          <Overview />
        </div>
        <div className="w-full max-w-[848px] h-full p-0 lg:p-0">
          <Video src="course-intro.mp4" poster="/images/thumbnail/image.png" />
        </div>
      </div>
      <div className="opacity-1">
        <div className="opacity-1">
          <div className="flex flex-col gap-4 mb-8">
            <div className="text-2xl font-semibold">About This Course</div>
            <p className="text-lg leading-7">
              Complete Python Mastery is a live online training program designed
              to take you from a beginner to an advanced-level Python developer.
              This interactive course focuses on hands-on coding, real-world
              projects, and problem-solving skills essential for mastering
              Python.
            </p>
            <p className="text-lg leading-7">
              Unlike pre-recorded courses, this program offers live classes with
              real-time instructor guidance, Q&A sessions, and coding exercises
              to ensure an immersive learning experience.
            </p>
            <p className="text-lg leading-7">
              The curriculum covers core programming concepts, data structures,
              algorithms, object-oriented programming, and real-world
              applications like database management, automation, and web
              development. You will also work on 10+ industry-relevant projects
              to build practical expertise.
            </p>
            <p className="text-lg leading-7">Course Structure:</p>
            <p className="text-lg leading-7">
              - Weekdays: 1 Hour per Day - Weekends: 3 Hours per Day - Total
              Duration: 90 Hours of Live Training
            </p>
          </div>
        </div>
        <div className="opacity-1">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">
              Pre-requisites for this Course
            </div>
            <p className="text-lg leading-7">
              Complete Python Mastery is designed for absolute beginners, so no
              prior programming experience is required. However, a basic
              understanding of mathematics and logical thinking can help grasp
              programming concepts more efficiently.
            </p>
            <p className="text-lg leading-7">
              To make the most of this course, students are expected to:
            </p>
            <p className="text-lg leading-7">
              - Attend live classes regularly to actively participate in
              discussions and hands-on coding. - Complete weekly assignments and
              work on 10+ real-world projects to reinforce learning. - Utilize
              the LMS portal to access session recordings, coding exercises, and
              additional study materials for continuous learning.
            </p>
            <p className="text-lg leading-7">
              Whether you are a beginner exploring Python for the first time or
              someone looking to strengthen your programming skills, this course
              will guide you step-by-step toward becoming a proficient Python
              developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
