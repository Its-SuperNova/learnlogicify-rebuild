import React from "react";
import { IoLogoPython } from "react-icons/io5";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { PiSidebarFill } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { TbCube } from "react-icons/tb";
import Link from "next/link";

const Overview = () => {
  return (
    <div className="w-full max-w-[400px] border border-gray-300 rounded-2xl p-3 flex flex-col">
      <div className="w-full h-full rounded-2xl bg-[#E2D8FC] p-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold ml-2">Course Overview</div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <IoLogoPython size={25} />
          </div>
        </div>
        <div className="pt-2 pl-5 flex flex-col gap-2 text-md">
          <div className="flex flex-col gap-2">
            <div className="flex items-center  text-gray-700">
              <BiSolidBarChartAlt2 size={22} />
              <p>Beginner</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineLiveTv size={22} />
              <p>Live Classes</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoMdTime size={22} />
              <p>Weekdays: 1 Hour/Day</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoMdTime size={22} />
              <p>Weekends: 3 Hours/Day</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineAccessTimeFilled size={22} />
              <p>Total: 90 Hours</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaBook size={18} />
              <p>20 Topics</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <IoExtensionPuzzleSharp size={22} />
              <p>200+ Problems</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TbCube size={22} />
              <p>10+ Projects using Python</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2 text-gray-700">
              <PiSidebarFill size={22} />
              <p>LMS Portal Access (6 Months)</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineLiveTv size={22} />
              <p>Session Recordings in LMS</p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <PiCertificate size={22} />
              <p>Certificate of Completion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 mt-2 w-full flex items-center justify-between px-2">
        <div>
          <div className="w-[52px] h-4 text-[10px] flex items-center justify-center text-white bg-[#A259FF] rounded-md font-medium">
            50% OFF
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">₹2499</div>
            <div className="text-gray-500 text-sm">
              <s>₹4999</s>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/">
            <div className="px-6 py-2 border border-black rounded-full font-medium flex items-center justify-center">
              Enquire
            </div>
          </Link>
          <Link href="/">
            <div className="px-6 py-2 bg-black text-white rounded-full font-medium flex items-center justify-center border border-black">
              Buy
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
