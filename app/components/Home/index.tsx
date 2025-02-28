"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const AboutPortal = dynamic(() => import("./sections/AboutPortal"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const [offerVisible, setOfferVisible] = useState(false); // Track if the offer is visible

  return (
    <>
      {/* Show Offer on larger screens */}
      <Offer className="hidden md:block" setOfferVisible={setOfferVisible} />
      {/* Animate both main content and offer together */}
      <motion.main
        className="relative flex flex-col bg-white overflow-hidden transition-all duration-600 ease-in-out"
        initial={{ paddingTop: "0px" }}
        animate={{
          paddingTop: offerVisible ? "60px" : "0px", // Add padding when offer is visible
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      >
        <Header />
        <HeroPage />
        <Description />
        <VideoSection />
        <GetToKnow />
        <AboutPortal />
        <Courses />
        <Stats />
        <Testimonials />
        <Banner />
      </motion.main>
    </>
  );
};

export default HomePage;
