import React, { useState } from "react";
import AllCourses from "./AllCourses";
import { IoIosSearch } from "react-icons/io";

interface CourseMainProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  selectedLearningTrack: string; // ✅ Added Learning Track
  isAvailableOnly: boolean;
  isCollapsed: boolean;
}

const CourseMain: React.FC<CourseMainProps> = ({
  selectedLanguage,
  selectedTopic,
  selectedLevel,
  selectedLearningTrack, // ✅ Added Learning Track
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
      {/* Title & Search Bar */}
      <div className="flex justify-between items-center mb-5 border-b border-gray-300 pb-4">
        {/* Left - Title */}
        <h2 className="text-2xl font-semibold text-gray-800 p-2">
          Explore Our Course Library
        </h2>

        {/* Right - Search Bar */}
        <div className="relative w-[250px]">
          <input
            type="text"
            placeholder="Search courses"
            className="w-full text-sm bg-[#ecf6ff] text-gray-800 py-2 px-3  pl-8 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IoIosSearch
            className="absolute left-2.5 top-[9.5px] text-[#9CA3AF]"
            size={18}
          />
        </div>
      </div>

      {/* Course List */}
      <AllCourses
        selectedLanguage={selectedLanguage}
        selectedTopic={selectedTopic}
        selectedLevel={selectedLevel}
        selectedLearningTrack={selectedLearningTrack}
        isAvailableOnly={isAvailableOnly}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default CourseMain;
