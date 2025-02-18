"use client";
import React, { useState, useRef } from "react";
import { FaAngleDown, FaAngleUp, FaCode, FaPython } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { PiMathOperationsBold } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa";
import { RiLoopLeftFill } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiMessageSquareDots } from "react-icons/bi";

interface SyllabusModule {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  topics: string[];
}

const syllabusData: SyllabusModule[] = [
  {
    icon: FaCode,
    title: "Module 1",
    subtitle: "Introduction to Computers",
    topics: [
      "Overview of computer systems",
      "The role of Programming Language",
      "Understanding binary and data representation",
      "Number Conversions",
    ],
  },
  {
    icon: FaPython,
    title: "Module 2",
    subtitle: "Introduction to Python",
    topics: [
      "Overview of Python",
      "Setting up the Python environment",
      "Writing and running your first Python program",
      "Understanding Python’s syntax and structure",
    ],
  },
  {
    icon: IoCubeOutline,
    title: "Module 3",
    subtitle: "Variables and Data Types",
    topics: [
      "Introduction to Variables",
      "Primitive Data Types",
      "Composite Data Types",
      "Type Conversion",
      "Mutable and Immutable Types",
    ],
  },
  {
    icon: PiMathOperationsBold,
    title: "Module 4",
    subtitle: "Operators and Expressions",
    topics: [
      "Arithmetic Operators",
      "Comparison Operators",
      "Logical Operators",
      "Bitwise Operators",
      "Expressions in Python",
    ],
  },
  {
    icon: FaQuestion,
    title: "Module 5",
    subtitle: "Conditional Statements",
    topics: [
      "The if Statement",
      "The else Statement",
      "The elif Statement",
      "Nested Conditionals",
      "Ternary Operators",
    ],
  },
  {
    icon: RiLoopLeftFill,
    title: "Module 6",
    subtitle: "Loops",
    topics: [
      "The for Loop",
      "The while Loop",
      "Nested Loops",
      "Loop Control Statements",
      "Iterators",
    ],
  },
  {
    icon: TbMathFunction,
    title: "Module 7",
    subtitle: "Functions",
    topics: [
      "Defining Functions",
      "Function Arguments",
      "Return Values",
      "Scope and Lifetime",
      "Lambda Functions",
    ],
  },
  {
    icon: FaRegFolderOpen,
    title: "Module 17",
    subtitle: "File Handling",
    topics: [
      "Introduction to File Handling",
      "Reading Files",
      "Writing to Files",
      "Working with CSV Files",
    ],
  },
  {
    icon: AiOutlineExclamationCircle,
    title: "Module 18",
    subtitle: "Exception Handling",
    topics: [
      "Introduction to Exception Handling",
      "Try and Except Blocks",
      "Handling Multiple Exceptions",
      "Creating Custom Exceptions",
    ],
  },
];

const Syllabus: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col">
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

      <div className="mt-6 flex flex-col gap-4 md:gap-5 w-full">
        {syllabusData.map((module, index) => {
          const Icon = module.icon;
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`border border-gray-300 rounded-xl md:rounded-2xl p-2 md:p-3 transition duration-300 ${
                isExpanded ? "border-blue-500" : "hover:border-blue-500"
              }`}
            >
              <div
                className="flex items-center gap-3 md:gap-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="p-3 md:p-4 flex items-center justify-center bg-blue-200 text-blue-600 rounded-lg md:rounded-xl">
                  <Icon className="block md:hidden" size={25} />
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
