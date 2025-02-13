import React from "react";
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa6";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import HamburgerMenu from "../hamburger";
interface HeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleAvailability: () => void;
  isAvailableOnly: boolean;
}

const Header: React.FC<HeaderProps> = ({
  isCollapsed,
  toggleSidebar,
  toggleMobileSidebar,
  toggleAvailability,
  isAvailableOnly,
}) => {
  return (
    <div className="bg-white p-2 mb-3 rounded-md h-auto flex justify-between items-center transition-all max-md:mb-0">
      {/* Left Section */}
      <div className="flex justify-left gap-3 items-center">
        {/* Always Visible Collapse Button */}
        <button
          className="h-9 w-9 bg-[#e5e5ff] rounded-md border-none cursor-pointer flex justify-center items-center text-blue-600"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <TbLayoutSidebarLeftExpand size={20} />
          ) : (
            <TbLayoutSidebarLeftCollapse size={20} />
          )}
        </button>

        <div className="text-[20px] font-semibold max-sm:hidden">
          <h1>
            Discover our Courses <span className="text-[24px]">&#127919;</span>
          </h1>
        </div>
      </div>

      {/* Middle Section (Logo) */}
      <div className="hidden max-[670px]:flex h-[55px]">
        <Image
          src="/SVG/logo/logo-icon.svg"
          alt="Logo Icon"
          width={30}
          height={30}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="relative z-[1]  hidden  mg:flex gap-[12px] justify-end items-center border border-gray-300 h-9 px-3 rounded-md max-[670px]:hidden max-md:mr-[65px]">
          <p className="text-gray-700 text-sm">Available Courses</p>
          <Switch
            checked={isAvailableOnly}
            onCheckedChange={toggleAvailability}
          />
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
