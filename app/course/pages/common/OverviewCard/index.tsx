import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { PiSidebarFill, PiCertificate } from "react-icons/pi";
import { MdOutlineAccessTimeFilled, MdOutlineLiveTv } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { TbCube } from "react-icons/tb";
import Link from "next/link";

interface OverviewProps {
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
}

const Overview: React.FC<OverviewProps> = ({
  courseIcon,
  level,
  liveClasses,
  weekdays,
  weekends,
  totalHours,
  topicsCount,
  problemsCount,
  projectsCount,
  portalAccess,
  sessionRecordings,
  certificate,
  originalPrice,
  discountedPrice,
  discountPercentage,
}) => {
  return (
    <div className="w-full lg:w-[400px] border border-gray-300 rounded-2xl p-3 flex flex-col">
      <div className="w-full h-auto rounded-2xl bg-[#E2D8FC] px-3 py-7">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold ml-2">Course Overview</div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            {courseIcon}
          </div>
        </div>
        <div className="pt-2 pl-5 flex md:gap-8 flex-col md:flex-row lg:flex-col lg:gap-0 text-md">
          <div className="flex text-sm md:text-md flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-700">
              <BiSolidBarChartAlt2 size={22} />
              <p>{level}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineLiveTv size={22} />
              <p>{liveClasses}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoMdTime size={22} />
              <p>{weekdays}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoMdTime size={22} />
              <p>{weekends}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineAccessTimeFilled size={22} />
              <p>{totalHours}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaBook size={18} />
              <p>{topicsCount}</p>
            </div>
          </div>
          <div className="flex text-sm md:text-md flex-col gap-2 mt-2 md:mt-0 lg:mt-2">
            <div className="flex items-center gap-2 text-gray-700">
              <IoExtensionPuzzleSharp size={22} />
              <p>{problemsCount}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TbCube size={22} />
              <p>{projectsCount}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <PiSidebarFill size={22} />
              <p>{portalAccess}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineLiveTv size={22} />
              <p>{sessionRecordings}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <PiCertificate size={22} />
              <p>{certificate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 mt-2 w-full flex items-center justify-between px-2">
        <div>
          <div className="w-[54px] text-[10px] flex items-center justify-center text-white bg-[#A259FF] rounded-sm mb-0.5 font-medium">
            {discountPercentage}% OFF
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold">₹{discountedPrice}</div>
            <div className="text-gray-500 text-sm">
              <s>₹{originalPrice}</s>
            </div>
          </div>
        </div>
        <div className="flex">
          <Link href="/">
            <div className="px-6 py-2 bg-black text-white rounded-full font-medium flex items-center justify-center border border-black">
              Enquire
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;



