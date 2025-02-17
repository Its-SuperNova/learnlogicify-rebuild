"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const tabs = [
  {
    title: "What is the format of this course?",
    description:
      "Complete Python Mastery is a live online training program with interactive sessions. Classes are conducted in real-time with hands-on coding, Q&A sessions, and instructor-led discussions.",
    imageUrl:
      "https://images.unsplash.com/photo-1562813733-b31f71025d51?q=80&w=1200&auto=format",
  },
  {
    title: "What are the prerequisites for this course?",
    description:
      "This course is beginner-friendly and requires no prior programming experience. However, basic logical thinking and problem-solving skills will be helpful in understanding Python concepts.",
    imageUrl:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1200&auto=format",
  },
  {
    title: "Will I get access to recorded sessions?",
    description:
      "Yes! All live session recordings will be available in the LMS portal. You can revisit them anytime within the 6-month access period.",
    imageUrl:
      "https://images.unsplash.com/photo-1607734757857-52b42a2e7e2b?q=80&w=1200&auto=format",
  },
  {
    title: "What projects will I work on?",
    description:
      "You will work on 10+ real-world projects covering Python automation, web development, data analysis, and more to solidify your learning.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format",
  },
  {
    title: "How long is the course and schedule?",
    description:
      "The course spans 90 hours: 1-hour sessions on weekdays and 3-hour sessions on weekends. This ensures a balanced learning experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format",
  },
  {
    title: "Do I get a certificate upon completion?",
    description:
      "Yes! After successfully completing the course and assessment, you will receive a Certificate of Completion from LearnLogicify Technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1621632410097-c35be400ad10?q=80&w=1200&auto=format",
  },
  {
    title: "What kind of support will I receive?",
    description:
      "You will receive 24/7 LMS access, live Q&A sessions, community discussions, and mentor support for doubt resolution.",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format",
  },
  {
    title: "Is there a final assessment?",
    description:
      "Yes, you will take a final assessment to qualify for the certificate. It consists of coding challenges and a project submission.",
    imageUrl:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1200&auto=format",
  },
];

function index() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeItem, setActiveItem] = useState<
    | {
        title: string;
        description: string;
        imageUrl: string;
      }
    | undefined
  >(tabs[0]);

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <>
      <div className="container mx-auto pb-10 pt-2">
        <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
          FAQ
        </h1>
        <div className="h-fit border  rounded-lg p-2 ">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? "border-b" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-normal text-black flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? "rotate-45" : "rotate-0 "
                  } transition-transform ease-in-out w-5 h-5 text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`font-light text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default index;
