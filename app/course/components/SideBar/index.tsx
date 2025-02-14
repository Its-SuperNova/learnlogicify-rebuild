"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DropdownFilter from "./dropdown";
import SearchBox from "./searchbox";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { FaGear, FaChalkboardUser } from "react-icons/fa6";
import { MdOutlineCategory, MdComputer } from "react-icons/md";

interface SidebarProps {
  onFilterChange: (filters: {
    language: string;
    topic: string;
    level: string;
    learningTrack: string;
  }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    language: "All",
    topic: "All",
    level: "All",
    learningTrack: "All",
  });

  // ✅ Handle Filter Updates
  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prevFilters) => ({
      language: newFilters.language ?? prevFilters.language,
      topic: newFilters.topic ?? prevFilters.topic,
      level: newFilters.level ?? prevFilters.level,
      learningTrack: newFilters.learningTrack ?? prevFilters.learningTrack,
    }));
  };

  // ✅ Toggle Dropdown Expansion
  const handleToggle = (section: string) => {
    setExpandedSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section)
        : [...prevSections, section]
    );
  };

  // ✅ Sync Filters to Parent Component
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div className="h-500px md:h-screen flex flex-col gap-2">
      {/* Sidebar Header */}
      <div className="w-full h-[55px] bg-darkGray rounded-lg p-2 flex items-center">
        <div className="w-11">
          <Image
            src="SVG/logo/logo-icon.svg"
            alt="Learnlogicify icon"
            width={30}
            height={30}
          />
        </div>
        <div className="text-md border-l-2 border-gray-400 pl-3 font-medium">
          <p>Catalog</p>
        </div>
      </div>

      {/* Search Box */}
      <SearchBox
        setFilters={setFilters}
        setExpandedSections={setExpandedSections}
      />

      {/* 🔹 Learning Tracks Dropdown */}
      <DropdownFilter
        title="Learning Tracks"
        isExpanded={expandedSections.includes("Learning Tracks")}
        onToggle={() => handleToggle("Learning Tracks")}
        selectedItem={filters.learningTrack}
        setSelectedItem={(newTrack) =>
          setFilters({
            language: "All",
            topic: "All",
            level: "All",
            learningTrack: newTrack,
          })
        }
        options={[
          {
            name: "Technical",
            key: "technical",
            icon: <MdComputer size={18} />,
          },
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
        ]}
      />

      {/* 🔹 Languages Dropdown */}
      <DropdownFilter
        title="Languages"
        isExpanded={expandedSections.includes("Languages")}
        onToggle={() => handleToggle("Languages")}
        selectedItem={filters.language}
        setSelectedItem={(newLanguage) =>
          setFilters({
            language: newLanguage,
            topic: "All",
            level: "All",
            learningTrack: "All",
          })
        }
        options={[
          { name: "Python", key: "python", icon: <FaPython size={18} /> },
          { name: "C", key: "c", icon: <SiCplusplus size={18} /> },
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
          { name: "SQL", key: "sql", icon: <FaDatabase size={18} /> },
          { name: "MongoDB", key: "mongodb", icon: <FaDatabase size={18} /> },
        ]}
      />

      {/* 🔹 Topics Dropdown */}
      <DropdownFilter
        title="Topics"
        isExpanded={expandedSections.includes("Topics")}
        onToggle={() => handleToggle("Topics")}
        selectedItem={filters.topic}
        setSelectedItem={(newTopic) =>
          setFilters({
            language: "All",
            topic: newTopic,
            level: "All",
            learningTrack: "All",
          })
        }
        options={[
          {
            name: "Problem Solving",
            key: "problem-solving",
            icon: <IoExtensionPuzzle size={18} />,
          },
          {
            name: "Data Structures",
            key: "data-structures",
            icon: <SlGraph size={18} />,
          },
          { name: "Algorithms", key: "algorithms", icon: <FaGear size={18} /> },
          { name: "DBMS", key: "dbms", icon: <FaDatabase size={18} /> },
          { name: "OOP", key: "oop", icon: <FaGear size={18} /> },
          { name: "Operating Systems", key: "os", icon: <FaGear size={18} /> },
          { name: "Networking", key: "networking", icon: <FaGear size={18} /> },
          {
            name: "Web Development",
            key: "web-development",
            icon: <IoLogoHtml5 size={18} />,
          },
          {
            name: "AI & Data Science",
            key: "ai-data-science",
            icon: <FaBrain size={18} />,
          },
        ]}
      />

      {/* 🔹 Levels Dropdown */}
      <DropdownFilter
        title="Level"
        isExpanded={expandedSections.includes("Level")}
        onToggle={() => handleToggle("Level")}
        selectedItem={filters.level}
        setSelectedItem={(newLevel) =>
          setFilters({
            language: "All",
            topic: "All",
            level: newLevel,
            learningTrack: "All",
          })
        }
        options={[
          { name: "Beginner", key: "beginner", icon: <FaPython size={18} /> },
          {
            name: "Intermediate",
            key: "intermediate",
            icon: <SiCplusplus size={18} />,
          },
          { name: "Advanced", key: "advanced", icon: <FaJava size={18} /> },
        ]}
      />
    </div>
  );
};

export default Sidebar;
