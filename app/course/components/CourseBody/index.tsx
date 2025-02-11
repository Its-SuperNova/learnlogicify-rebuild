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
        <h2 className="text-xl font-semibold text-gray-800">All Courses</h2>

        {/* Right - Search Bar */}
        <div className="relative w-[250px]">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full bg-gray-200 text-gray-800 p-1 pl-8 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IoIosSearch
            className="absolute left-2 top-2 text-[#9CA3AF]"
            size={18}
          />
        </div>
      </div>

      {/* Course List */}
      <AllCourses
        selectedLanguage={selectedLanguage}
        selectedTopic={selectedTopic}
        selectedLevel={selectedLevel}
        selectedLearningTrack={selectedLearningTrack} // ✅ Pass Learning Track
        isAvailableOnly={isAvailableOnly}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default CourseMain;
