"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import AllCourses from "./AllCourses";
import AllBootCamps from "./AllBootcamps";
import CompanySpecific from "./CompanySpesific";

interface CourseMainProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  isAvailableOnly: boolean;
  isCollapsed: boolean;
}

const CourseMain: React.FC<CourseMainProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  isAvailableOnly,
  isCollapsed,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className={`p-3 w-full transition-[margin-left] duration-300 ease-in-out rounded-md ${
        isCollapsed ? "ml-0" : "ml-[your-value]"
      }`}
    >
      

      {/* Render Course Content */}
      <AllCourses
        selectedLanguage={selectedLanguage}
        selectedTopic={selectedTopic}
        selectedLevel={selectedLevel}
        isAvailableOnly={isAvailableOnly}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default CourseMain;
