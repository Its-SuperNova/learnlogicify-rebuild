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
import { IoFilter } from "react-icons/io5";

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
      {/* Floating Filter Button */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger>
            <Button
              size="lg"
              className="bg-black text-white flex items-center gap-2 px-5"
            >
              <IoFilter size={30} />
              Filters
            </Button>
          </DrawerTrigger>

          {/* Drawer Content */}
          <DrawerContent className="p-4 bg-black">
            <DrawerHeader className="flex items-center justify-between">
              {/* Title */}
              <DrawerTitle className="text-lg text-white">
                Filter Courses
              </DrawerTitle>

              {/* Clear Filters Button */}
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
              >
                <IoMdCloseCircle size={20} /> Clear
              </button>
            </DrawerHeader>

            {/* ✅ Sidebar Filters inside Drawer */}
            <div className="text-white">
              <Sidebar onFilterChange={onFilterChange} />
            </div>

            {/* Action Buttons (Submit on Right, Close on Left) */}
            <div className="flex gap-2 mt-4">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-1/2 text-black border-gray-400 rounded-md"
                >
                  Close
                </Button>
              </DrawerClose>

              <Button
                onClick={closeDrawer}
                className="w-1/2 bg-blue-600 text-white rounded-md"
              >
                Submit
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default MobileFilterDrawer;
