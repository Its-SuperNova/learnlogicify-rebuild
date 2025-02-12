"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBoxProps {
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  setExpandedSections: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  setFilters,
  setExpandedSections,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ Full List of Searchable Options from Sidebar
  const catalogOptions = [
    // 🔹 Languages
    { name: "Python", key: "python", type: "language" },
    { name: "C", key: "c", type: "language" },
    { name: "C++", key: "cpp", type: "language" },
    { name: "Java", key: "java", type: "language" },
    { name: "JavaScript", key: "javascript", type: "language" },
    { name: "HTML / CSS", key: "html-css", type: "language" },
    { name: "SQL", key: "sql", type: "language" },
    { name: "MongoDB", key: "mongodb", type: "language" },

    // 🔹 Topics
    { name: "Problem Solving", key: "problem-solving", type: "topic" },
    { name: "Data Structures", key: "data-structures", type: "topic" },
    { name: "Algorithms", key: "algorithms", type: "topic" },
    { name: "DBMS", key: "dbms", type: "topic" },
    { name: "OOP", key: "oop", type: "topic" },
    { name: "Operating Systems", key: "os", type: "topic" },
    { name: "Networking", key: "networking", type: "topic" },
    { name: "Web Development", key: "web-development", type: "topic" },
    { name: "AI & Data Science", key: "ai-data-science", type: "topic" },

    // 🔹 Levels
    { name: "Beginner", key: "beginner", type: "level" },
    { name: "Intermediate", key: "intermediate", type: "level" },
    { name: "Advanced", key: "advanced", type: "level" },

    // 🔹 Learning Tracks
    { name: "Technical", key: "technical", type: "learningTrack" },
    { name: "Aptitude", key: "aptitude", type: "learningTrack" },
    {
      name: "Placement Preparation",
      key: "placement-prep",
      type: "learningTrack",
    },
    {
      name: "Competitive Programming",
      key: "competitive-programming",
      type: "learningTrack",
    },
  ];

  useEffect(() => {
    setFilteredOptions(
      catalogOptions.filter((option) =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // ✅ Handle Search Option Click & Ensure Only One Selection at a Time
  const handleTagClick = (key: string, type: string) => {
    setFilters({
      language: type === "language" ? key : "All",
      topic: type === "topic" ? key : "All",
      level: type === "level" ? key : "All",
      learningTrack: type === "learningTrack" ? key : "All",
    });

    // ✅ Expand only the relevant dropdown
    setExpandedSections([
      type === "language"
        ? "Languages"
        : type === "topic"
        ? "Topics"
        : type === "level"
        ? "Level"
        : "Learning Tracks",
    ]);

    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Icon Trigger */}
      <div
        className="flex items-center gap-2 bg-[#313131] text-gray-300 p-2.5 rounded-lg cursor-text"
        style={{
          boxShadow:
            "inset 2px 2px 5px rgba(0,0,0,0.4), inset -2px -2px 5px rgba(20,200,200,0.1)",
        }}
        onClick={() => setIsOpen(true)}
      >
        <IoIosSearch size={18} />
        <span className="text-sm">Search</span>
      </div>

      {/* Popup Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-[#1e1e1e] h-[350px] text-white w-[90%] max-w-md p-5 rounded-lg"
          >
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search catalog..."
              className="w-full bg-[#333] text-white p-2 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Search Suggestions with Custom Scrollbar */}
            <div className="mt-3 max-h-[250px] overflow-y-auto custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.key}
                    className="p-2 hover:bg-[#444] cursor-pointer rounded-md"
                    onClick={() => handleTagClick(option.key, option.type)}
                  >
                    {option.name}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No results found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
