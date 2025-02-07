"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/hooks/smoothscroll";
import CustomCursor from "./components/CustomCursor";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  const isCoursePage = pathname === "/course";

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && <Preloader />}
        {isCoursePage ? (
          <div className={isLoading ? "opacity-0" : "opacity-100"}>
            {children}
          </div>
        ) : (
          <SmoothScroll>
            <div className={isLoading ? "opacity-0" : "opacity-100"}>
              {children}
            </div>
            <CustomCursor />
          </SmoothScroll>
        )}
      </body>
    </html>
  );
}
