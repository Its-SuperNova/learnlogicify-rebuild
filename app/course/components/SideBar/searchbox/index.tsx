"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBoxProps {
  catalogOptions: { name: string; key: string }[];
  onSearchSelect: (filters: {
    language?: string;
    topic?: string;
    level?: string;
    learningTrack?: string;
  }) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  catalogOptions,
  onSearchSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(catalogOptions);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(
      catalogOptions.filter((option) =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, catalogOptions]);

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

  const handleTagClick = (key: string) => {
    let filterType = "";

    // Determine the filter type based on the key
    if (
      [
        "python",
        "c",
        "cpp",
        "java",
        "javascript",
        "html-css",
        "sql",
        "mongodb",
      ].includes(key)
    ) {
      filterType = "language";
    } else if (
      [
        "problem-solving",
        "data-structures",
        "algorithms",
        "dbms",
        "oop",
        "os",
        "networking",
      ].includes(key)
    ) {
      filterType = "topic";
    } else if (["beginner", "intermediate", "advanced"].includes(key)) {
      filterType = "level";
    } else if (
      [
        "technical",
        "aptitude",
        "placement-prep",
        "competitive-programming",
      ].includes(key)
    ) {
      filterType = "learningTrack";
    }

    // Apply the filter based on the identified type
    if (filterType) {
      onSearchSelect({ [filterType]: key });
      setIsOpen(false);
    }
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-[#1e1e1e] h-[300px] text-white w-[90%] max-w-md p-5 rounded-lg shadow-lg relative"
          >
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search catalog..."
              className="w-full bg-[#333] text-white p-2 rounded-md outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Search Suggestions with Custom Scrollbar */}
            <div className="mt-3 max-h-[200px] overflow-y-auto custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.key}
                    className="p-2 hover:bg-[#444] cursor-pointer rounded-md"
                    onClick={() => handleTagClick(option.key)}
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
