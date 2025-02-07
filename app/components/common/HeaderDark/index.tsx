// header/index.tsx
"use client";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import Logo from "../../images/logo/darkLogoheader";
import AnimatedButton from "../buttons/login";
import Link from "next/link";
const Header = () => {
  return (
    <header className="h-[100px] w-full flex px-[80px] items-center justify-between max-md:px-[30px]">
      <div className="h-[100%] z-[9]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav className="flex flex-row justify-center h-[42px] w-[500px] z-[9999] max-lg:hidden">
        <NavMenu />
      </nav>
      <div className="h-full flex flex-row justify-end items-center p-0 max-md:pr-[20px]">
        <div className="max-md:hidden z-10">
          <Link href={"https://learnlogicify.com/login/index.php"}>
            <AnimatedButton />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
