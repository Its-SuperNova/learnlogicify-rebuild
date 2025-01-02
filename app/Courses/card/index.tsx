"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Styles from "./styles.module.css";
import { FiArrowRightCircle } from "react-icons/fi";

type CardProps = {
  image?: string;
  title: string;
};

const Card: React.FC<CardProps> = ({ image, title }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: {
      opacity: 1,
      y: 0, // Fade in and slide up
      transition: {
        duration: 0.4, // Reveal each card quickly
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className={Styles.main} variants={cardVariants}>
      <motion.div
        className={Styles.banner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        {image ? (
          <div className={Styles.aspectRatio}>
            <Image
              src={image}
              alt={title}
              className={Styles.content}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <div
            className={Styles.aspectRatio}
            style={{ backgroundColor: "gray" }}
          ></div>
        )}
      </motion.div>
      <div className={Styles.stats}>
        <FiArrowRightCircle size={30} />
        <p>{title}</p>
      </div>
    </motion.div>
  );
};

export default Card;
