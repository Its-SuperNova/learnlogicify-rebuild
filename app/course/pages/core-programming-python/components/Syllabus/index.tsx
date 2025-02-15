"use client";
import React, { useState, useRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { syllabusData } from "./data/syllabusData";
import { BiMessageSquareDots } from "react-icons/bi";

const Syllabus: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Course Syllabus</h2>
        <div className="flex items-center gap-4 text-gray-500">
          <span>{syllabusData.length} Modules</span>
          <div className="h-5 w-px bg-gray-500"></div>
          <span>
            {syllabusData.reduce(
              (acc, module) => acc + module.topics.length,
              0
            )}{" "}
            Topics
          </span>
        </div>
      </div>

      {/* Modules List */}
      <div className="mt-6 flex flex-col gap-4 md:gap-6 w-full">
        {syllabusData.map((module, index) => {
          const Icon = module.icon;
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`border border-gray-400 rounded-xl md:rounded-2xl p-2 md:p-3  transition duration-300 ${
                isExpanded ? "border-blue-500" : "hover:border-blue-500"
              }`}
            >
              {/* Module Header */}
              <div
                className="flex items-center gap-3 md:gap-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className=" p-3 md:p-4 flex items-center justify-center bg-blue-200 text-blue-600 rounded-lg md:rounded-xl">
                  {/* Small screen (below md) - Icon size 25 */}
                  <Icon className="block md:hidden" size={25} />

                  {/* Large screen (md and above) - Icon size 35 */}
                  <Icon className="hidden md:block" size={35} />
                </div>

                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm md:text-lg font-medium text-blue-700">
                      {module.title}
                    </h3>
                    <p className="text-md md:text-xl font-semibold">
                      {module.subtitle}
                    </p>
                  </div>
                  <div className="text-blue-600 mr-1">
                    {isExpanded ? (
                      <FaAngleUp size={20} />
                    ) : (
                      <FaAngleDown size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Dropdown Content */}
              <div
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded
                    ? "max-h-[500px] opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                {/* Topics List */}
                <div className="p-4 rounded-lg shadow-sm">
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="text-gray-700 text-sm md:text-lg flex gap-2 items-center"
                      >
                        <BiMessageSquareDots color="blue" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Syllabus;
