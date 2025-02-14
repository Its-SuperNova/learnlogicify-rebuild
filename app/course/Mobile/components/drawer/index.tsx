"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Sidebar from "../../../components/SideBar"; // Importing Sidebar
import { FaFilter } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io"; // Clear Icon

interface MobileFilterDrawerProps {
  onFilterChange: (filters: {
    language: string;
    topic: string;
    level: string;
    learningTrack: string;
  }) => void;
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
  onFilterChange,
}) => {
  const [open, setOpen] = useState(false);

  // ✅ Function to Close Drawer
  const closeDrawer = () => setOpen(false);

  // ✅ Function to Clear Filters
  const clearFilters = () => {
    onFilterChange({
      language: "All",
      topic: "All",
      level: "All",
      learningTrack: "All",
    });
  };

  return (
    <>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger className="bg-blue-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg">
            <FaFilter size={16} />
            Filters
          </DrawerTrigger>

          <DrawerContent className="p-4 bg-black">
            <DrawerHeader className="flex items-center justify-between">
              <DrawerTitle className="text-lg text-white">
                Filter Courses
              </DrawerTitle>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
              >
                <IoMdCloseCircle size={20} /> Clear
              </button>
            </DrawerHeader>

            <div className="text-white">
              <Sidebar onFilterChange={onFilterChange} />
            </div>

            <div className="flex gap-2 mt-4">
              <DrawerClose asChild>
                <button className="w-1/2 text-black border border-gray-400 rounded-md py-2">
                  Close
                </button>
              </DrawerClose>

              <button
                onClick={closeDrawer}
                className="w-1/2 bg-blue-600 text-white rounded-md py-2"
              >
                Submit
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default MobileFilterDrawer;
