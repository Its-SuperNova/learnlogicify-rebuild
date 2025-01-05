"use client";

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import Offer from "../offer";
import Header from "../common/HeaderDark";
import HeroPage from "./sections/HeroSection";
import Description from "./sections/Description";
import VideoSection from "./sections/Videosection";
import GetToKnow from "./sections/GetToKnow";
import Courses from "./sections/Courses";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonial";
import Faq from "./sections/Faq";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPortal = dynamic(() => import("./sections/AboutPortal"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const [offerVisible, setOfferVisible] = useState<boolean>(false); // Manage Offer visibility
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();

      // Set initial stroke state
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        strokeLinecap: "round",
      });

      // Animate the path on scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: pathRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <>
      <Offer setOfferVisible={setOfferVisible} />
      <main
        className={styles.main}
        style={{
          paddingTop: offerVisible ? "70px" : "0px", // Adjust padding dynamically
          transition: "padding-top 0.6s ease-in-out", // Smooth transition
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
        <Faq />
      </main>
    </>
  );
};

export default HomePage;
