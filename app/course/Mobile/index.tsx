import React, { useState } from "react";
import Courses from "./components/AllCourses";
import { IoIosSearch } from "react-icons/io";

interface CourseMainProps {
  selectedLanguage: string;
  selectedTopic: string;
  selectedLevel: string;
  selectedLearningTrack: string; // ✅ Added Learning Track
  isAvailableOnly: boolean;
  isCollapsed: boolean;
}
const CourseMobile: React.FC<CourseMainProps> = ({
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
    <div>
      <div className="flex flex-col gap-2 mt-5 mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 p-2">
          Explore Our Course Library
        </h2>
        <div className="relative w-full px-2  ">
          <input
            type="text"
            placeholder="Search courses"
            className="w-full text-sm bg-[#ecf6ff] text-gray-800 py-2 px-3  pl-8 rounded-lg outline-none focus:ring-1 focus:ring-blue-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IoIosSearch
            className="absolute left-4 mg:left-2.5 top-[9.5px] text-[#9CA3AF]"
            size={18}
          />
        </div>
      </div>
      <Courses
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

export default CourseMobile;
