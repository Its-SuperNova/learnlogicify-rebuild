"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import HamburgerMenu from "../../hamburger"; 
import styles from "./styles.module.css";
import ScrollToTop from "@/app/components/common/buttons/scrollToTop"; // 

const ScrollHandler: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section")?.clientHeight || 0;
      if (window.scrollY > heroSectionHeight / 2) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }

      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`${styles.hamburgerMenu} ${
          showHamburger ? styles.hamburgerMenuVisible : ""
        }`}
      >
        <HamburgerMenu />
      </div>

      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }} 
            exit={{ scale: 0 }} 
            transition={{
              duration: 0.3, 
              ease: "easeInOut", 
            }}
            className={styles.scrollToTopButton} 
          >
            <ScrollToTop/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollHandler;
