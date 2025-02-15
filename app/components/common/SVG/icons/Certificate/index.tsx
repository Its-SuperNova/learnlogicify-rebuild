import React from "react";
import Image from "next/image";
import logo from "@/public/SVG/icons/certificate.svg";
const Rocket = () => {
  return (
    <div className="h-[50px] w-[50px] md:w-[65px] md:h-[65px]">
      <Image src={logo} alt="Light Logo" />
    </div>
  );
};

export default Rocket;
