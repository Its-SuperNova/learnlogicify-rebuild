"use client";
import { Suspense } from "react";
import HomePage from "./components/Home";
import Footer from "./components/common/Footer";
import dynamic from "next/dynamic";
import Preloader from "./components/Preloader";
import Head from "next/head"; // Import the Head component

const ScrollHandler = dynamic(() => import("./components/Home/ScrollHandler"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Learnlogicfy Technologies</title>{" "}
      </Head>
      <section>
        <ScrollHandler />
        <HomePage />
        <Footer />
      </section>
    </>
  );
};

export default Home;
