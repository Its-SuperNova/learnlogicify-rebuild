"use client";
import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import { RxCross1 } from "react-icons/rx";

// Dynamically import components with SSR disabled
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
      <div className={styles.container}>
        <div
          className={`${styles.sidebar} ${
            isCollapsed ? styles.collapsed : ""
          } ${isMobileSidebarVisible ? styles.mobileSidebarVisible : ""}`}
        >
          <button
            className={styles.closeMobileSidebar}
            onClick={toggleMobileSidebar}
          >
            <RxCross1 size={20} />
          </button>

          {isCollapsed ? (
            <CollapsedSidebar onFilterChange={handleFilterChange} />
          ) : (
            <Sidebar onFilterChange={handleFilterChange} />
          )}
        </div>

        <div className={styles.main}>
          <Header
            isCollapsed={isCollapsed}
            toggleSidebar={toggleSidebar}
            toggleMobileSidebar={toggleMobileSidebar}
            toggleAvailability={toggleAvailability}
            isAvailableOnly={isAvailableOnly}
          />
          <div className={styles.body}>
            <CourseBody
              selectedLanguage={filters.language}
              selectedTopic={filters.topic}
              selectedLevel={filters.level}
              isAvailableOnly={isAvailableOnly}
              isCollapsed={isCollapsed}
            />
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <Mobile />
      </div>
    </>
  );
};

export default Course;
