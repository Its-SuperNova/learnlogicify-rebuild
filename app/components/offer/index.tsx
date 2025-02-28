"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import confetti from "canvas-confetti";
import Link from "next/link";
import Image from "next/image";
import EnrollBtn from "./enrollBtn";

interface OfferProps {
  setOfferVisible: (isVisible: boolean) => void;
  className?: string; // Added className prop
}

const Offer: React.FC<OfferProps> = ({ setOfferVisible, className }) => {
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
    const timer = setTimeout(() => {
      setIsVisible(true);
      setOfferVisible(true);
    }, 3000);

    calculateTimeLeft();
    const countdownTimer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
      if (confettiInterval.current) {
        clearInterval(confettiInterval.current);
      }
    };
  }, [setOfferVisible]);

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
          className="absolute top-0 w-full h-[60px] z-[1000000000] bg-[#ffd700] flex items-center justify-between px-[20px] overflow-hidden font-normal"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
          />
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-[10px]">
              <Image
                src="/SVG/icons/giftbox.svg"
                alt="Gift Icon"
                className="w-[24px] h-[24px]"
                width={50}
                height={50}
                priority
              />
              <div className="text-[#333] text-[14px] font-semibold">
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
                {timeLeft.seconds}s
              </div>
            </div>
            <div className="flex-1 text-center text-[#333] text-[16px]">
              The Ultimate Webinar on Mastering the Git & Github
            </div>
            <div className="flex items-center">
              <Link href="/webinar/ultimate-webinar-on-mastering-git-&-github">
                <EnrollBtn
                  color="black"
                  label="Enroll"
                  onClick={(e) => console.log("Button clicked!", e)}
                />
              </Link>
              <div className="bg-black rounded-full p-[10px] transition-transform duration-200 ease-in-out transform hover:scale-[1.1] hover:bg-[#333]">
                <RxCross1
                  className="text-white text-[18px] cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Offer;
