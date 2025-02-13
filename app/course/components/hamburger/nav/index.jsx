"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, slide, scale } from "../anim";
import Link from "next/link";
import Curve from "./Curve";
import Footer from "./Footer";
import LightLogo from "@/app/components/images/logo/darkLogo";
import { Icon } from "@iconify/react";

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [companySubMenuOpen, setCompanySubMenuOpen] = useState(false);

  const toggleCompanySubMenu = () => {
    setCompanySubMenuOpen(!companySubMenuOpen);
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 h-screen w-[420px] bg-black text-white z-[99]"
    >
      <div className="h-full flex flex-col justify-between px-[50px] pt-0 pb-[50px] pl-[80px] box-border">
        
        {/* Navigation */}
        <div 
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className="flex flex-col text-[36px] font-light gap-[12px] mt-[80px]"  // 🔹 Applied `font-light`
        >

          {/* Logo Header */}
          <div className="border-b pb-3 border-gray-500 text-gray-400 uppercase text-[11px] mb-[40px]">
            <LightLogo />
          </div>

          {/* Links */}
          <motion.div className="relative flex items-center ml-[40px] font-light">
            <motion.div 
              variants={scale} 
              animate={selectedIndicator === "/" ? "open" : "closed"} 
              className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
            ></motion.div>
            <Link href="/" className="text-gray-300 hover:text-white transition-all duration-300">Home</Link>
          </motion.div>

          {/* Company Dropdown */}
          <motion.div 
            className="relative flex items-center ml-[40px] cursor-pointer font-light"
            onClick={toggleCompanySubMenu}
          >
            <motion.div 
              variants={scale} 
              animate={selectedIndicator.startsWith("/Company") ? "open" : "closed"} 
              className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
            ></motion.div>
            <div className="flex items-center justify-between w-full transition-all duration-1000 ease">
              <span className="text-gray-300 hover:text-white transition-all duration-300">Company</span>
              <Icon 
                icon="lucide:chevron-down" 
                width="24" 
                height="24" 
                className={`${companySubMenuOpen ? "rotate-180" : ""}`}
              />
            </div>
          </motion.div>

          {/* Company Submenu */}
          <AnimatePresence>
            {companySubMenuOpen && (
              <motion.div 
                className="flex flex-col gap-[8px] text-[24px] ml-[80px]" 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: "auto" }} 
                exit={{ opacity: 0, height: 0 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link href="/company/about" className="text-gray-400 hover:text-white transition-all duration-500">About Us</Link>
                <Link href="/company/team" className="text-gray-400 hover:text-white transition-all duration-500">Team</Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Other Links */}
          <motion.div className="relative flex items-center ml-[40px] font-light">
            <motion.div 
              variants={scale} 
              animate={selectedIndicator === "/courses" ? "open" : "closed"} 
              className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
            ></motion.div>
            <Link href="/courses" className="text-gray-300 hover:text-white transition-all duration-300">Courses</Link>
          </motion.div>

          <motion.div className="relative flex items-center ml-[40px] font-light">
            <motion.div 
              variants={scale} 
              animate={selectedIndicator === "/portal" ? "open" : "closed"} 
              className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
            ></motion.div>
            <Link href="/portal" className="text-gray-300 hover:text-white transition-all duration-300">Portal</Link>
          </motion.div>

          <motion.div className="relative flex items-center ml-[40px] font-light">
            <motion.div 
              variants={scale} 
              animate={selectedIndicator === "/contact" ? "open" : "closed"} 
              className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
            ></motion.div>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300">Contact</Link>
          </motion.div>

        </div>

        {/* Footer */}
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
