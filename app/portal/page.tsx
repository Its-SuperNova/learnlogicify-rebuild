"use client";
import React from "react";
import AboutPortal from "./AboutPortal";
import Different from "./Different";
import AboutPortalInterface from "./AboutPortalInterface";
import Header from "@/app/components/common/HeaderDark";
import Footer from "@/app/components/common/Footer";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  { ssr: false }
);


const LMSPortal: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <main className={styles.main}>
        <Header />
        <AboutPortal />
        <Different />
        <AboutPortalInterface />
        <Footer />
      </main>
    </>
  );
};

export default LMSPortal;
