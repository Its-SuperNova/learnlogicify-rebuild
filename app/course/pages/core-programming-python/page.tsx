"use client";
import React from "react";
import Hero from "../common/Hero";
import Header from "@/app/components/common/HeaderDark";
import Syllabus from "../common/Syllabus";
import CertificateSection from "../common/CertificateSection";
import CertificateProcess from "../common/CertificationProcess";
import Footer from "@/app/components/common/Footer";
import dynamic from "next/dynamic";
import Faq from "../common/FAQ"
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
          <CertificateSection />
          <CertificateProcess />
          <Faq />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
