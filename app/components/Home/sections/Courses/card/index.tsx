"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Styles from "./styles.module.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

type CardProps = {
  image?: string;
  title: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ image, title, link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentCardRef = cardRef.current; // Capture the current ref value in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // Reveal when 50% of the card is visible
      }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []); // The dependency array remains empty

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
    <Link href={link} passHref>
      <motion.div
        ref={cardRef}
        className={Styles.main}
        variants={cardVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"} // Trigger animation based on visibility
      >
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
          <IoArrowForwardCircleOutline size={30} />
          <p>{title}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
