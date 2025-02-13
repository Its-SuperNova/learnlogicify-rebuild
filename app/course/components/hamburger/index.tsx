"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Nav from "./nav";
import Menubar from "./menuBar"; // ✅ Added Menubar

const HamburgerMenu: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the menu when the pathname changes
    setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className="z-[1000]">
        <div className="w-9 h-9 pr-[3px] rounded-md bg-black flex items-center justify-center cursor-pointer">
          <Menubar
            isActive={isActive}
            onToggle={() => setIsActive(!isActive)}
          />
        </div>
      </div>

      {/* ✅ Show Nav only when menu is active */}
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
