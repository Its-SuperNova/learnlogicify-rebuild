"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/app/components/common/Animations/slideUpWord";
import styles from "./styles.module.css";

export default function Index() {
  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const buttonParallaxRef = useRef<HTMLDivElement>(null);
  const [offsetMultiplier, setOffsetMultiplier] = useState(0.2); // Default for larger screens

  useEffect(() => {
    // Update the offsetMultiplier based on window size
    const updateOffsetMultiplier = () => {
      if (window.innerWidth < 730) {
        setOffsetMultiplier(0.1); // Mild parallax effect on mobile
      } else {
        setOffsetMultiplier(0.2); // Original effect for larger screens
      }
    };

    // Initial check
    updateOffsetMultiplier();

    // Event listener for window resize
    window.addEventListener("resize", updateOffsetMultiplier);
    return () => {
      window.removeEventListener("resize", updateOffsetMultiplier);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonParallaxRef.current;
      if (buttonElement) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * offsetMultiplier;
        buttonElement.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetMultiplier]);
  const title = ["Featured Courses"];
  
  return (
    <div ref={descriptionRef} className={styles.description}>
        <SlideUpWord
          title={title}
          isInView={isInView}
          className={styles.title}
        />
    </div>
  );
}
