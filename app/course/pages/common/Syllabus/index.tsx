"use client";
import React, { useState, useRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"; 
import { FaBoxOpen, FaBrain, FaBug, FaBuilding, FaCalculator, FaCamera, FaChartLine, FaChartPie, FaCheckCircle, FaClipboardCheck, FaClock, FaCloud, FaCloudDownloadAlt, FaCloudUploadAlt, FaCode, FaCodeBranch, FaCogs, FaColumns, FaCss3Alt, FaCubes, FaDatabase, FaEdit, FaEnvelope, FaExclamationTriangle, FaEye, FaFileArchive, FaFilm, FaFilter, FaFlask, FaFont, FaGamepad, FaGlobe, FaHtml5, FaImages, FaJava, FaJs, FaJsSquare, FaKey, FaLanguage, FaLink, FaLock, FaNetworkWired, FaNodeJs, FaPaintBrush, FaPalette, FaPlay, FaProjectDiagram, FaPython, FaQuestion, FaReact, FaRegFolderOpen, FaRegObjectGroup, FaRoad, FaRobot, FaRoute, FaServer, FaSyncAlt, FaTasks, FaTools, FaTrash, FaTree, FaUserShield, FaUserTag, FaVial, FaWpforms } from "react-icons/fa";
import { IoCubeOutline, IoLogoPython } from "react-icons/io5";
import { PiMathOperationsBold } from "react-icons/pi";
import { RiDashboardHorizontalFill, RiDatabase2Fill, RiDatabase2Line, RiLoopLeftFill, RiSpyLine, RiTableFill } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import { AiOutlineExclamationCircle, AiOutlineFileAdd, AiOutlineSafety } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdOutlineCalculate } from "react-icons/md";
import { TbBinaryTree2 } from "react-icons/tb";
import { IoMdApps } from "react-icons/io";
import { BsBraces, BsGraphUp, BsLink45Deg, BsShieldLock } from "react-icons/bs";
import { VscRegex } from "react-icons/vsc";
import { RiBracketsLine } from "react-icons/ri";
import { TbListNumbers } from "react-icons/tb";
import { GoDatabase } from "react-icons/go";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { SiGo, SiMongodb, SiMysql, SiRuby } from "react-icons/si";
import { GiBookshelf, GiFiles, GiNetworkBars, GiOrganigram } from "react-icons/gi";
// **STEP 1: Define Icon Mapping**
const iconMap: Record<string, React.ElementType> = {
  FaCode,
  FaPython,
  IoCubeOutline,
  PiMathOperationsBold,
  FaQuestion,
  RiLoopLeftFill,
  TbMathFunction,
  FaRegFolderOpen,
  AiOutlineExclamationCircle,
  MdOutlineCalculate,
  TbBinaryTree2,
  IoMdApps,
  BsBraces,
  VscRegex,
  RiBracketsLine,
  TbListNumbers,
  GoDatabase,
  MdOutlineLibraryBooks,
  FaProjectDiagram,
  HiMiniComputerDesktop,
  FaJava,
  FaNetworkWired,
  SiGo,
  SiRuby,
  FaTree,
  FaDatabase,
  RiTableFill,
  SiMysql,
  BsLink45Deg,
  RiDatabase2Line,
  AiOutlineFileAdd,
  FaUserShield,
  GiOrganigram,
  GiBookshelf,
  FaSyncAlt,
  FaFileArchive,
  SiMongodb,
  BsShieldLock,
  BsGraphUp,
  GiNetworkBars,
  GiFiles,
  RiDatabase2Fill,
  FaJs,
  FaJsSquare,
  FaTools,
  FaBug,
  RiSpyLine,
  AiOutlineSafety,
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaColumns,
  FaFont,
  FaImages,
  FaRegObjectGroup,
  FaFilm,
  FaClipboardCheck,
  FaReact,
  RiDashboardHorizontalFill,
  FaCogs,
  FaPaintBrush,
  FaWpforms,
  FaGamepad,
  FaRoute,
  FaCloudDownloadAlt,
  FaPlay,
  FaVial,
  FaServer,
  FaLock,
  FaFlask,
  FaRoad,
  FaPalette,
  FaCloudUploadAlt,
  FaKey,
  FaEnvelope,
  FaChartLine,
  FaTasks,
  FaEye,
  FaEdit,
  FaTrash,
  FaUserTag,
  FaFilter,
  FaChartPie,
  FaNodeJs,
  FaCubes,
  FaBoxOpen,
  FaClock,
  FaCheckCircle,
  FaLink,
  FaCodeBranch,
  FaExclamationTriangle,
  FaBrain,
  FaCalculator,
  FaLanguage,
  FaCamera,
  FaRobot,
  FaCloud,
};

interface SyllabusModule {
  icon: string; // icon name as a string
  title: string;
  subtitle: string;
  topics: string[];
}

const Syllabus = ({ syllabusData }: { syllabusData: SyllabusModule[] }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Course Syllabus</h2>
        <div className="flex items-center gap-4 text-gray-500">
          <span>{syllabusData.length} Modules</span>
          <div className="h-5 w-px bg-gray-500"></div>
          <span>
            {syllabusData.reduce(
              (acc, module) => acc + module.topics.length,
              0
            )}{" "}
            Topics
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:gap-5 w-full">
        {syllabusData.map((module, index) => {
          const isExpanded = expandedIndex === index;
          const IconComponent = iconMap[module.icon]; // Get icon component from mapping

          return (
            <div
              key={index}
              className={`border border-gray-300 rounded-xl md:rounded-2xl p-2 md:p-3 transition duration-300 ${
                isExpanded ? "border-blue-500" : "hover:border-blue-500"
              }`}
            >
              <div
                className="flex items-center gap-3 md:gap-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="p-3 md:p-4 flex items-center justify-center bg-blue-200 text-blue-600 rounded-lg md:rounded-xl">
                  {IconComponent && <IconComponent size={30} />}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm md:text-lg font-medium text-blue-700">
                      {module.title}
                    </h3>
                    <p className="text-md md:text-xl font-semibold">
                      {module.subtitle}
                    </p>
                  </div>
                  <div className="text-blue-600 mr-1">
                    {isExpanded ? (
                      <FaAngleUp size={20} />
                    ) : (
                      <FaAngleDown size={20} />
                    )}
                  </div>
                </div>
              </div>

              <div
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded
                    ? "max-h-[1600px]  opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <div className="p-4 rounded-lg shadow-sm">
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="text-gray-700 text-sm md:text-lg flex gap-2 items-center"
                      >
                        <BiMessageSquareDots color="blue" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Syllabus;
