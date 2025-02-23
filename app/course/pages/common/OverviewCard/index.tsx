import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import {
  FaBook,
  FaBrain,
  FaChartLine,
  FaCode,
  FaCogs,
  FaDatabase,
  FaFlask,
  FaHtml5,
  FaJava,
  FaJs,
  FaJsSquare,
  FaNetworkWired,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoExtensionPuzzleSharp, IoLogoPython } from "react-icons/io5";
import { PiSidebarFill, PiCertificate } from "react-icons/pi";
import { MdOutlineAccessTimeFilled, MdOutlineLiveTv } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { TbCube } from "react-icons/tb";
import Link from "next/link";
import { SiGo, SiMongodb, SiRuby } from "react-icons/si";

interface OverviewProps {
  courseIcon: string;
  level?: string;
  liveClasses?: string;
  weekdays?: string;
  weekends?: string;
  totalHours?: string;
  topicsCount?: string;
  problemsCount?: string;
  projectsCount?: string;
  portalAccess?: string;
  sessionRecordings?: string;
  certificate?: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
}
const iconMap: Record<string, React.ElementType> = {
  FaCode,
  IoLogoPython,
  FaJava,
  SiRuby,
  FaPython,
  SiGo,
  FaDatabase,
  SiMongodb,
  FaJs,
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaFlask,
  RiNextjsFill,
  FaNodeJs,
  FaBrain,
  FaChartLine,
  FaNetworkWired,
  FaServer,
  FaCogs,
};

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
  const IconComponent = iconMap[courseIcon];

  const details = [
    { icon: BiSolidBarChartAlt2, value: level },
    { icon: MdOutlineLiveTv, value: liveClasses },
    { icon: IoMdTime, value: weekdays },
    { icon: IoMdTime, value: weekends },
    { icon: MdOutlineAccessTimeFilled, value: totalHours },
    { icon: FaBook, value: topicsCount },
    { icon: IoExtensionPuzzleSharp, value: problemsCount },
    { icon: TbCube, value: projectsCount },
    { icon: PiSidebarFill, value: portalAccess },
    { icon: MdOutlineLiveTv, value: sessionRecordings },
    { icon: PiCertificate, value: certificate },
  ];

  return (
    <div className="w-full lg:w-[400px] border border-gray-300 rounded-2xl p-3 flex flex-col">
      <div className="w-full h-auto rounded-2xl bg-[#E2D8FC] px-3 py-7">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold ml-2">Course Overview</div>
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            {IconComponent && <IconComponent size={25} />}
          </div>
        </div>
        <div className="pt-2 pl-5 flex gap-2 flex-col md:flex-row lg:flex-col  text-md">
          {details
            .filter((detail) => detail.value)
            .map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700 text-sm md:text-md"
              >
                <detail.icon size={22} />
                <p>{detail.value}</p>
              </div>
            ))}
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
