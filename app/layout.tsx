"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/hooks/smoothscroll"; // Locomotive Scroll Hook
import Head from "next/head";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor component
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader"; // Import the Preloader component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true); // Show the preloader on navigation start
    };

    const handleComplete = () => {
      // Ensure the preloader is visible for at least 3 seconds
      setTimeout(() => setIsLoading(false), 0);
    };

    handleStart();
    const startTime = Date.now();

    // Mimic navigation lifecycle
    const simulateLoading = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 3000 - elapsedTime); // Ensure at least 3 seconds
      setTimeout(() => handleComplete(), remainingTime);
    }, 800);

    return () => clearTimeout(simulateLoading); // Cleanup timer on unmount
  }, [pathname]);

  const isCoursePage = pathname === "/CoursePage";

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={inter.className}>
        <CustomCursor />
        {isLoading && <Preloader />} {/* Show preloader during navigation */}
        {!isLoading &&
          (isCoursePage ? children : <SmoothScroll>{children}</SmoothScroll>)}
      </body>
    </html>
  );
}
