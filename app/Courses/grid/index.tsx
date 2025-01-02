"use client";

import React from "react";
import { motion } from "framer-motion";
import Styles from "./styles.module.css";
import Card from "../card";

const CardGrid = () => {
  const cardData = [
    { image: "/images/courseCover/ai.jpg", title: "AI Essentials & Beyond" },
    { image: "/images/courseCover/ml.png", title: "Machine Learning Mastery" },
    {
      image: "/images/courseCover/web.png",
      title: "Full-Stack Web Development",
    },
    { image: "/images/courseCover/app.png", title: "Next-Gen App Development" },
    { image: "/images/courseCover/DS.png", title: "Data Science Accelerator" },
    { image: "/images/courseCover/c++.png", title: "C++ Fundamentals" },
    { image: "/images/courseCover/java.png", title: "Java Programming" },
    { image: "/images/courseCover/py.png", title: "Python Programming" },
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
          <Card image={data.image} title={data.title} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;
