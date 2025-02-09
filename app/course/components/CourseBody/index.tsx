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
  const [activeTab, setActiveTab] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const renderGridContent = () => {
    switch (activeTab) {
      case "All Courses":
        return (
          <AllCourses
            selectedLanguage={selectedLanguage}
            selectedTopic={selectedTopic}
            selectedLevel={selectedLevel}
            isAvailableOnly={isAvailableOnly}
            searchTerm={searchTerm}
          />
        );
      case "Technical":
        return <AllBootCamps />;
      case "Aptitude":
        return <CompanySpecific />;
      case "Placement Preparation":
        return <CompanySpecific />;
      case "Competitive Programming":
        return <CompanySpecific />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`p-3 w-full transition-[margin-left] duration-300 ease-in-out rounded-md ${
        isCollapsed ? "ml-0" : "ml-[your-value]"
      }`}
    >
      <div className="flex justify-between items-center mb-5 border-b border-gray-300 pb-4">
        {/* Tab Section */}
        <div className="flex gap-3 border border-gray-300 p-2 h-auto text-sm rounded-full">
          {[
            "All Courses",
            "Technical",
            "Aptitude",
            "Placement Preparation",
            "Competitive Programming",
          ].map((tabName) => (
            <div
              key={tabName}
              className={`px-4 py-2 cursor-pointer rounded-full transition-colors ${
                activeTab === tabName
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-black border-gray-300"
              }`}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </div>
          ))}
        </div>
      </div>
      {renderGridContent()}
    </div>
  );
};

export default CourseMain;
