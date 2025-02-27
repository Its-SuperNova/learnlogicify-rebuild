"use client";
import React from "react";
import Hero from "./components/HeroSection";
import Header from "@/app/components/common/HeaderDark";
import OurVision from "./components/OurVision";
import OurServices from "./components/OurServices";
import Footer from "@/app/components/common/Footer";
import Desc from "./components/desc";
import dynamic from "next/dynamic";

const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  { ssr: false }
);

const AboutPage: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <div className="bg-[#F0F1FA] overflow-hidden">
        <Header />
        <div className="p-5  ss:px-[50px] md:px-[80px] lg:px-[100px] md:mb-[100px]  flex flex-col justify-center items-center lg:gap-[60px]">
          <OurVision />
          <OurServices />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
