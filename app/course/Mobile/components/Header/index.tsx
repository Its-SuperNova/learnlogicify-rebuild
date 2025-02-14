"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HamburgerMenu from "../../../components/hamburger";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
interface HeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleAvailability: () => void;
  isAvailableOnly: boolean;
}
const Header: React.FC<HeaderProps> = ({
  toggleAvailability,
  isAvailableOnly,
}) => {
  return (
    <header className="py-2 w-full border-b border-gray-300">
      <div className="container w-full px-2 flex mb-1 justify-between">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src="/SVG/logo/logo-icon.svg"
                alt="Logo"
                width={50}
                height={50}
                className="h-10 w-10"
              />
            </Link>
          </div>
        </div>
        <div className="relative z-[1]  hidden  mg:flex gap-[12px] justify-end items-center border border-gray-300 h-9 px-3 rounded-md  max-md:mr-[65px]">
          <p className="text-gray-700 text-sm">Available Courses</p>
          <Switch
            checked={isAvailableOnly}
            onCheckedChange={toggleAvailability}
          />
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
