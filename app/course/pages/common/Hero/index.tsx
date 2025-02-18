import React from "react";
import { FaStar } from "react-icons/fa6";
import Overview from "../OverviewCard";
import Video from "../VideoSection";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
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
  courseIcon: string;
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
  aboutData: {
    description: string[];
    structure: string[];
  };
  prerequisites?: { text: string; link?: string; linkText?: string }[];
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
          <Overview {...props} />
        </div>
        <div className="flex-1">
          <Video src={props.courseIntroVideo} poster={props.videoPoster} />
        </div>
      </div>

      {/* About This Course Section */}
      <div className="mt-4">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold">About This Course</div>
          {props.aboutData.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-md leading-6 md:text-lg md:leading-7"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">Course Structure</h1>
            <div className="flex flex-col gap-2">
              {props.aboutData.structure.map((point, index) => (
                <div key={index} className="flex items-center gap-1">
                  <IoCaretForwardCircleOutline
                    size={20}
                    className="text-blue-500"
                  />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {props.prerequisites && props.prerequisites.length > 0 && (
        <div className="mt-6">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">Pre-requirements</div>
            <div className="flex flex-col gap-2">
              {props.prerequisites.map((requirement, index) => (
                <div
                  key={index}
                  className="text-md leading-6 md:text-lg md:leading-7"
                >
                  {requirement.link ? (
                    <p>
                      {requirement.text}{" "}
                      <a
                        href={requirement.link}
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        {requirement.linkText || "Learn More"}{" "}
                      </a>
                    </p>
                  ) : (
                    <p>{requirement.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
