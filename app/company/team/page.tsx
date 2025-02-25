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
      <div className="overflow-hidden">
        <Header />
        <main className="px-5 pt-3 pb-0">
          <OurTeam />
          <JoinUs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Team;
