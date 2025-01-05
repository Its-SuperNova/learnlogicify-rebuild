"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion for animations
import styles from "./styles.module.css";
import { RxCross1 } from "react-icons/rx";
import confetti from "canvas-confetti";
import Link from "next/link"; // Import Link from Next.js

interface OfferProps {
  setOfferVisible: (isVisible: boolean) => void; // Prop to notify parent
}

const Offer: React.FC<OfferProps> = ({ setOfferVisible }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Show the offer after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setOfferVisible(true);
    }, 3000);

    // Start countdown calculation
    calculateTimeLeft();
    const countdownTimer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
      if (confettiInterval.current) {
        clearInterval(confettiInterval.current);
      }
    };
  }, []);

  const calculateTimeLeft = (): void => {
    const webinarDate = new Date("2025-01-23T20:00:00").getTime();
    const now = new Date().getTime();
    const difference = webinarDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const startInfiniteConfetti = (): void => {
    if (canvasRef.current) {
      const canvas = confetti.create(canvasRef.current, { resize: true });

      confettiInterval.current = setInterval(() => {
        canvas({
          particleCount: 50,
          spread: 80,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
          colors: [
            "#ffec3d",
            "#ffd700",
            "#fff",
            "#ff5733",
            "#33ff57",
            "#3375ff",
          ],
        });
      }, 300);
    }
  };

  useEffect(() => {
    if (isVisible && canvasRef.current) {
      startInfiniteConfetti();
    }
  }, [isVisible]);

  const handleClose = (): void => {
    setIsVisible(false);
    setOfferVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.offer}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <canvas ref={canvasRef} className={styles.confettiCanvas}></canvas>
          <div className={styles.leftSection}>
            <img
              src="/SVG/icons/giftbox.svg"
              alt="Gift Icon"
              className={styles.giftIcon}
            />
            <div className={styles.timer}>
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
              {timeLeft.seconds}s
            </div>
          </div>
          <div className={styles.message}>
            The Ultimate Webinar on Mastering the Git & Github
          </div>
          <Link href="/webinar/ultimate-webinar-on-mastering-git-&-github">
            <button className={styles.enrollButton}>Enroll Now</button>
          </Link>
          <RxCross1 className={styles.crossIcon} onClick={handleClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Offer;
