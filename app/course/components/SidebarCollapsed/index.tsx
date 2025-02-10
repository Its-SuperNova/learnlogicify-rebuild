"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaPython, FaJava, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { FaGear, FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineCategory, MdComputer } from "react-icons/md";

interface CollapseSidebarProps {
  onFilterChange: (filters: {
    language: string;
    topic: string;
    level: string;
    learningTrack: string;
  }) => void;
}

const CollapseSidebar: React.FC<CollapseSidebarProps> = ({
  onFilterChange,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<{
    language: string;
    topic: string;
    level: string;
    learningTrack: string;
  }>({
    language: "All",
    topic: "All",
    level: "All",
    learningTrack: "All",
  });

  // Function to handle selection
  const handleFilterClick = (
    category: "language" | "topic" | "level" | "learningTrack",
    key: string
  ) => {
    const newValue = selectedFilter[category] === key ? "All" : key;
    const updatedFilters = { ...selectedFilter, [category]: newValue };
    setSelectedFilter(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Data for each section
  const filterData = [
    {
      title: "Languages",
      category: "language" as const,
      options: [
        { name: "Python", key: "python", icon: <FaPython size={18} /> },
        {
          name: "C",
          key: "c",
          icon: (
            <Image
              src="SVG/icons/c-program.svg"
              alt="C"
              height={18}
              width={18}
            />
          ),
        },
        { name: "C++", key: "cpp", icon: <SiCplusplus size={18} /> },
        { name: "Java", key: "java", icon: <FaJava size={18} /> },
        {
          name: "JavaScript",
          key: "javascript",
          icon: <FaJsSquare size={18} />,
        },
        {
          name: "HTML / CSS",
          key: "html-css",
          icon: <IoLogoHtml5 size={18} />,
        },
      ],
    },
    {
      title: "Learning Tracks",
      category: "learningTrack" as const,
      options: [
        { name: "Technical", key: "technical", icon: <MdComputer size={18} /> },
        {
          name: "Aptitude",
          key: "aptitude",
          icon: <MdOutlineCategory size={18} />,
        },
        {
          name: "Placement Preparation",
          key: "placement-prep",
          icon: <FaChalkboardUser size={18} />,
        },
        {
          name: "Competitive Programming",
          key: "competitive-programming",
          icon: <SlGraph size={18} />,
        },
      ],
    },
    {
      title: "Topics",
      category: "topic" as const,
      options: [
        {
          name: "Problem Solving",
          key: "problem-solving",
          icon: <IoExtensionPuzzle size={18} />,
        },
        {
          name: "Data Structures",
          key: "data-structure",
          icon: <SlGraph size={18} />,
        },
        { name: "Algorithms", key: "algorithms", icon: <FaGear size={18} /> },
        { name: "DBMS", key: "dbms", icon: <FaDatabase size={18} /> },
      ],
    },
    {
      title: "Levels",
      category: "level" as const,
      options: [
        { name: "Beginner", key: "Beginner", icon: <FaPython size={18} /> },
        {
          name: "Intermediate",
          key: "Intermediate",
          icon: <SiCplusplus size={18} />,
        },
        { name: "Advanced", key: "Advanced", icon: <FaJava size={18} /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-center">
      {/* Logo */}
      <div className="w-full h-11 p-1 rounded-lg bg-darkGray flex items-center justify-center">
        <Image
          src="SVG/logo/logo-icon.svg"
          alt="Learnlogicify icon"
          height={30}
          width={30}
        />
      </div>

      {/* Map through filters */}
      {filterData.map(({ title, category, options }) => (
        <div
          key={category}
          className="bg-[#181818] w-full flex flex-col items-center p-1.5 rounded-lg gap-2"
        >
          <TooltipProvider>
            {options.map(({ name, key, icon }) => (
              <Tooltip key={key}>
                <TooltipTrigger asChild>
                  <div
                    className={`flex justify-center items-center w-full h-[33px] bg-[#313131] cursor-pointer transition-all duration-300 rounded-md ${
                      selectedFilter[category] === key
                        ? "bg-blue-500 text-white"
                        : "hover:bg-[#3c00ff]"
                    }`}
                    onClick={() => handleFilterClick(category, key)}
                    data-name={name}
                  >
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};

export default CollapseSidebar;
