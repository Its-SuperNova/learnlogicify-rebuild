"use client";

import React from "react";
import { motion } from "framer-motion";
import Styles from "./styles.module.css";
import Card from "../card";

const CardGrid = () => {
  const cardData = [
    {
      image: "/images/courseCover/ai.jpg",
      title: "AI Essentials & Beyond",
      link: "/courses/pages/ai-essentials",
    },
    {
      image: "/images/courseCover/ml.png",
      title: "Machine Learning Mastery",
      link: "/courses/pages/ml-mastery",
    },
    {
      image: "/images/courseCover/web.png",
      title: "Full-Stack Web Development",
      link: "/courses/pages/web-dev",
    },
    {
      image: "/images/courseCover/app.png",
      title: "Next-Gen App Development",
      link: "/courses/pages/app-dev",
    },
    {
      image: "/images/courseCover/DS.png",
      title: "Data Science Accelerator",
      link: "/courses/pages/data-science-accelerator",
    },
    {
      image: "/images/courseCover/c++.png",
      title: "C++ Fundamentals",
      link: "/courses/pages/core-programming-cpp",
    },
    {
      image: "/images/courseCover/java.png",
      title: "Java Programming",
      link: "/courses/pages/core-programming-java",
    },
    {
      image: "/images/courseCover/py.png",
      title: "Python Programming",
      link: "/courses/pages/core-programming-python",
    },
  ];

  return (
    <div className={Styles.grid}>
      {cardData.map((data, index) => (
        <motion.div
          key={index}
          className={Styles.row}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              delay: index % 2 === 0 ? 0 : 0.2, // Delay second card by 0.2 seconds
              ease: "easeOut",
            },
          }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Card image={data.image} title={data.title} link={data.link} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;
