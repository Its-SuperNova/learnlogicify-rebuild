"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/hooks/smoothscroll"; // Locomotive Scroll Hook
import Head from "next/head";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor component
import { usePathname } from "next/navigation"; // Import the usePathname hook

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
        {isCoursePage ? children : <SmoothScroll>{children}</SmoothScroll>}
      </body>
    </html>
  );
}
