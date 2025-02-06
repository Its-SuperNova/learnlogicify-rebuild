"use client";
import { Suspense } from "react";
import HomePage from "./components/Home";
import Footer from "./components/common/Footer";
import dynamic from "next/dynamic";
import Preloader from "./components/Preloader";
const ScrollHandler = dynamic(() => import("./components/Home/ScrollHandler"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <section>
      <ScrollHandler />
      <HomePage />
      <Footer />
    </section>
  );
};

export default Home;
