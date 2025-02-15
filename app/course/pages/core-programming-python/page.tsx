"use client";
import React from "react";
import Hero from "./components/Hero";
import Header from "@/app/components/common/HeaderDark";
import Syllabus from "./components/Syllabus";
import CertificateSection from "../common/CertificateSection";
import CertificateProcess from "./components/CertificationProcess";
import Footer from "@/app/components/common/Footer";
import dynamic from "next/dynamic";

const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  {
    ssr: false,
  }
);

const CoursePage = () => {
  return (
    <>
      <ScrollHandler />
      <Header />
      <div className="flex flex-col justify-center items-center pb-24">
        <div className="px-5 max-w-[1500px] flex flex-col gap-16 lg:px-[100px]">
          <Hero />
          <Syllabus />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
