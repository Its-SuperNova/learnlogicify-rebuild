"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  title: string;
  description: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeItem, setActiveItem] = useState<FAQItem | undefined>(faqs[0]);

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = faqs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <div className="container mx-auto pb-10 pt-2">
      <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">
        FAQ
      </h1>
      <div className="h-fit border rounded-lg p-2">
        {faqs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${
              index !== faqs.length - 1 ? "border-b" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <button className="p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-normal text-black flex gap-2">
              <Plus
                className={`${
                  activeIndex === index ? "rotate-45" : "rotate-0"
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
                  <p className="font-light text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]">
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
