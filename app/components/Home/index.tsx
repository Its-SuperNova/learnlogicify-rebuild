"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Offer from "../offer";
import Header from "../common/HeaderDark";
import HeroPage from "./sections/HeroSection";
import Description from "./sections/Description";
import VideoSection from "./sections/Videosection";
import GetToKnow from "./sections/GetToKnow";
import Courses from "./sections/Courses";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonial";
import Banner from "@/app/components/common/WebinarBanner";

const AboutPortal = dynamic(() => import("./sections/AboutPortal"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const [offerVisible, setOfferVisible] = useState(false); // Track if the offer is visible
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Track if the screen is large

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // `lg` breakpoint is typically 1024px
    };

    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Show Offer on larger screens */}
      <Offer className="hidden md:block" setOfferVisible={setOfferVisible} />
      {/* Animate both main content and offer together */}
      <motion.main
        className="relative flex flex-col bg-white overflow-hidden transition-all duration-600 ease-in-out"
        initial={{ paddingTop: "0px" }}
        animate={{
          paddingTop: offerVisible && isLargeScreen ? "60px" : "0px", // Apply paddingTop only if large screen and offer is visible
          transition: { duration: 0.5, ease: "linear" },
        }}
      >
        <Header />
        <HeroPage />
        <Description />
        <VideoSection />
        <GetToKnow />
        <Courses />
        <Stats />
        <Testimonials />
        <Banner />
      </motion.main>
    </>
  );
};

export default HomePage;
