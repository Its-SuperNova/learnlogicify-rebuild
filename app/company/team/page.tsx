"use client";
import React from "react";
import OurTeam from "./OurTeam";
import JoinUs from "./JoinUs";
import Header from "@/app/components/common/HeaderDark";
import Footer from "@/app/components/common/Footer";
import dynamic from "next/dynamic";

const ScrollHandler = dynamic(
  () => import("@/app/components/Home/ScrollHandler"),
  {
    ssr: false,
  }
);

const Team: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <Header />
      <main className="container mx-auto px-4 py-10">
        <OurTeam />
      </main>
      <JoinUs />
      <Footer />
    </>
  );
};

export default Team;
