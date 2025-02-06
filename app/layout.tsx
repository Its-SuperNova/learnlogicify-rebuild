"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/hooks/smoothscroll";
import CustomCursor from "./components/CustomCursor";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Preloader from "./components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);
  // useEffect(() => {
  //   const handleStart = () => setIsLoading(true); // Show preloader on navigation start
  //   const handleComplete = () => setTimeout(() => setIsLoading(false), 0); // Hide preloader

  //   handleStart();
  //   const startTime = Date.now();

  //   const simulateLoading = setTimeout(() => {
  //     const elapsedTime = Date.now() - startTime;
  //     const remainingTime = Math.max(0, 3000 - elapsedTime); // Ensure preloader lasts 3s
  //     setTimeout(() => handleComplete(), remainingTime);
  //   }, 800);

  //   return () => clearTimeout(simulateLoading); // Cleanup on unmount
  // }, [pathname]);

  const isCoursePage = pathname === "/CoursePage";

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && <Preloader />} 
        <SmoothScroll>
          <div className={isLoading ? "opacity-0" : "opacity-100"}>
            {children}
          </div>
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
