import React from "react";
import Logo from "../../images/logo/darkLogo";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import {
  FaRegCopyright,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import SocialLink from "../SocialLinks";
import Link from "next/link";

interface FooterProps {
  className?: string; // Accepts className prop
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className="h-auto bg-black px-[100px] py-[30px] flex flex-col text-white font-light justify-between gap-[70px] max-md:px-[50px] max-md:py[30px] max-md:gap-[30px]">
      {/* Top Section - Main Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[30px] mt-[40px] w-full mb-[40px] max-md:grid-cols-[repeat(auto-fit,minmax(100%,1fr))]">
        {/* Section 1 - Company Info & Social Media */}
        <div className="max-w-[250px]">
          <Logo />
          <div>
            <p>
              Building futures with top-tier placement training and extensive
              programming courses.
            </p>
          </div>
          <div className="flex space-x-3">
            <SocialLink
              href="https://wa.me/yournumber"
              icon={<FaWhatsapp />}
              alt="WhatsApp"
            />
            <SocialLink
              href="https://www.instagram.com/yourprofile"
              icon={<FaInstagram />}
              alt="Instagram"
            />
            <SocialLink
              href="https://www.youtube.com/yourchannel"
              icon={<FaYoutube />}
              alt="YouTube"
            />
            <SocialLink
              href="https://www.linkedin.com/in/yourprofile"
              icon={<FaLinkedinIn />}
              alt="LinkedIn"
            />
          </div>
        </div>

        {/* Section 2 - Company Links */}
        <div className="pl-[40px] mt-[25px] min-w-[230px] max-md:mt-0 max-md:pt-[20px] max-md:pl-0 max-md:border-t max-md:border-gray-500">
          <h4 className="font-semibold mb-[10px] text-[21px]">Company</h4>
          <ul className="list-none p-0">
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/company/about">About us</Link>
            </li>
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/company/team">Team</Link>
            </li>
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/portal">Portal</Link>
            </li>
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/contact">Contact us</Link>
            </li>
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/course">Courses</Link>
            </li>
          </ul>
        </div>

        {/* Section 3 - Legal & Policies */}
        <div className="mt-[25px] min-w-[230px] border-r border-gray-500 pr-[15px] max-lg:border-none max-md:mt-0">
          <h4 className="font-semibold mb-[10px] text-[21px]">
            Legal & Policies
          </h4>
          <ul className="list-none p-0">
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/legal/privacy-policy">Terms & Conditions</Link>
            </li>
            <li className="relative pl-[15px] mb-[5px]">
              <Link href="/legal/terms-&-condition">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Section 4 - Contact Details */}
        <div className="mt-[25px] max-w-[310px] pl-[10px] max-md:mt-0 max-md:border-t max-md:border-gray-500 max-md:pt-[30px] max-md:max-w-full max-lg:pl-0">
          <div className="flex items-start gap-[10px] mb-[15px]">
            <IoMail size={20} className="mt-[1px]" />
            <span>help@learnlogicify.com</span>
          </div>
          <div className="flex items-start gap-[10px] mb-[15px]">
            <FaPhone size={19} className="mt-[1px]" />
            <span>+91 89250 84608</span>
          </div>
          <div className="flex items-start gap-[10px] mb-[15px]">
            <FaLocationDot size={20} className="mt-[1px]" />
            <span>
              LearnLogicify Technologies LLP,
              <br />
              Coimbatore, Tamilnadu - 641 602
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full h-[45px] bg-[#323335] rounded-[30px] flex flex-row items-center justify-center text-[#d3d3d3] font-light gap-[5px] max-md:h-[40px] max-md:text-[11px]">
        <div>
          <FaRegCopyright />
        </div>
        <p>
          2024{" "}
          <span className="font-semibold">
            <Link href="/">LearnLogicify</Link>
          </span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
