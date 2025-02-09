"use client";
import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./components/SideBar"), { ssr: false });
const CollapsedSidebar = dynamic(
  () => import("./components/SidebarCollapsed"),
  { ssr: false }
);
const Header = dynamic(() => import("./components/Header"), { ssr: false });
const CourseBody = dynamic(() => import("./components/CourseBody"), {
  ssr: false,
});
const Mobile = dynamic(() => import("./Mobile"), { ssr: false });

const Course = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  const [filters, setFilters] = useState({
    language: "All",
    topic: "All",
    level: "All",
  });

  const [isAvailableOnly, setIsAvailableOnly] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible((prev) => !prev);
  };

  const toggleAvailability = () => {
    setIsAvailableOnly((prev) => !prev);
  };

  const handleFilterChange = useCallback(
    (newFilters: { language: string; topic: string; level: string }) => {
      setFilters((prevFilters) => {
        if (
          prevFilters.language === newFilters.language &&
          prevFilters.topic === newFilters.topic &&
          prevFilters.level === newFilters.level
        ) {
          return prevFilters;
        }
        return newFilters;
      });
    },
    []
  );

  return (
    <>
      <div className="flex bg-[#ececec] h-screen p-[10px] overflow-hidden">
        {/* Sidebar */}
        <div
          className={`bg-black text-white p-2.5 flex flex-col justify-start rounded-2xl transition-all duration-300 relative overflow-auto scrollbar-hide ${
            isCollapsed ? "w-[74px]" : "w-[270px]"
          } ${isMobileSidebarVisible ? "block" : "hidden md:block"}`}
        >
          

          {isCollapsed ? (
            <CollapsedSidebar onFilterChange={handleFilterChange} />
          ) : (
            <Sidebar onFilterChange={handleFilterChange} />
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col pl-[20px] pr-[10px] transition-all duration-300">
          <Header
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            toggleMobileSidebar={toggleMobileSidebar}
            toggleAvailability={toggleAvailability}
            isAvailableOnly={isAvailableOnly}
          />
          <div className="flex flex-wrap bg-white h-full w-full gap-5 overflow-auto scrollbar-hide rounded-2xl">
            <CourseBody
              selectedLanguage={filters.language}
              selectedTopic={filters.topic}
              selectedLevel={filters.level}
              isAvailableOnly={isAvailableOnly}
              isCollapsed={isCollapsed}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="hidden opacity-0 md:hidden">
          <Mobile />
        </div>
      </div>
    </>
  );
};

export default Course;
