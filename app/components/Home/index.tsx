"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
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
  return (
    <>
      <motion.main className="relative flex flex-col bg-white overflow-hidden">
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
