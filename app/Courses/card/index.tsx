"use client";

import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Styles from "./styles.module.css";
import { FiArrowRightCircle } from "react-icons/fi";

type CardProps = {
  image?: string;
  title: string;
  isRightColumn: boolean; // Determines the animation path
};

const Card: React.FC<CardProps> = ({ image, title, isRightColumn }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className={Styles.main}
      initial={{
        opacity: 0,
        scale: 0.98, // Subtle scaling effect
        x: isRightColumn ? -20 : 20, // Path animation: Bottom-left (right column), Bottom-right (left column)
        y: 20,
      }}
      animate={controls}
      onViewportEnter={() =>
        controls.start({
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.4, // Faster reveal
            ease: [0.25, 0.8, 0.5, 1], // Smooth cubic bezier easing
          },
        })
      }
      onViewportLeave={() =>
        controls.start({
          opacity: 0,
          scale: 0.98,
          x: isRightColumn ? -20 : 20,
          y: 20,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        })
      }
      viewport={{ once: false, amount: 0.1 }} // Trigger earlier
    >
      <motion.div
        className={Styles.banner}
        initial={{ opacity: 0, y: 20 }} // Banner slides upward
        animate={controls}
        transition={{
          duration: 0.4, // Faster reveal for the banner
          delay: 0.1, // Slight delay to complement the card animation
          ease: [0.25, 0.8, 0.5, 1], // Smooth easing
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
