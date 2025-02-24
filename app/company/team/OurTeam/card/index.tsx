"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"; // Adjust the path as needed
import { TeamMember } from "../../data/teamData";
import Social from "./social"

type CardProps = {
  member: TeamMember;
};

const Card: React.FC<CardProps> = ({ member }) => {
  // Local state only for the social icons toggle within the card.
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const toggleIcon = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSocialOpen(!isSocialOpen);
  };

  return (
    <Drawer>
      {/* Wrap the card in a DrawerTrigger */}
      <DrawerTrigger asChild>
        <div className="flex flex-col items-center">
          {/* Card Container */}
          <div
            className="group w-full h-auto ss:max-w-[300px] rounded-[20px] relative overflow-hidden transition-transform duration-300 ease-in-out cursor-pointer hover:-translate-y-[5px] hover:scale-[1.03]"
            style={{ backgroundColor: member.backgroundColor }}
          >
            {/* Profile Image */}
            <Image
              src={member.image}
              alt={`${member.name} Profile Image`}
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Designation Popup on Hover */}
            <div className="absolute bottom-[20px] left-[20px] right-[20px] bg-white p-[10px] rounded-[12px] text-[14px] flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.1)] opacity-0 translate-y-[10px] transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 z-10">
              <p>{member.designation}</p>
              <div className="text-[18px] text-black font-bold">
                <FaArrowRight />
              </div>
            </div>
            {/* Social Icons Toggle */}
            <div
              className={`absolute top-[10px] right-[10px] w-[45px] ${
                isSocialOpen
                  ? "h-[160px] rounded-[50px] flex flex-col items-center justify-start pt-[10px]"
                  : "h-[45px] rounded-full"
              } bg-white transition-all duration-1000 ease-in-out overflow-hidden z-20`}
              onClick={toggleIcon}
            >
              {/* Plus Icon */}
              <div
                className={`absolute top-[3px] left-1/2 transform -translate-x-1/2 transition-transform duration-[800ms] ease-in-out text-[25px] flex items-center justify-center ${
                  isSocialOpen ? "rotate-45" : ""
                }`}
              >
                +
              </div>
              {/* Social Media Icons */}
              <div
                className={`mt-[40px] flex flex-col gap-[15px] items-center transition-all duration-500 ${
                  isSocialOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] text-[#333] transition-colors duration-500 hover:text-[#0077ff]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] text-[#333] transition-colors duration-500 hover:text-[#0077ff]"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[20px] text-[#333] transition-colors duration-500 hover:text-[#0077ff]"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
          {/* Member Name */}
          <div className="mt-[15px] font-bold text-center text-[20px]">
            <p>{member.nickname}</p>
          </div>
        </div>
      </DrawerTrigger>

      {/* Drawer Content: Team Member Details */}
      <DrawerContent className="!bg-white border border-gray-200">
        <div className="p-8 grid grid-cols-[auto_1fr] gap-8">
          <div>
            <Image
              src={member.image}
              alt={`${member.name} Profile Image`}
              width={250}
              height={250}
              className="w-[300px] h-[300px] object-cover rounded-[30px]"
              style={{ backgroundColor: member.backgroundColor }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-2xl text-gray-800 font-semibold">
                {member.name}
              </h1>
              <p className="text-md text-gray-700 font-light">
                {member.designation}
              </p>
            </div>
            <p className="text-gray-800">{member.bio}</p>
            <Social />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <button className="w-full rounded-md bg-[#1E1E1E] px-4 py-2 text-white">
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Card;
