import React from "react";
import Link from "next/link";
import Button from "../button";

const Header = () => {
  return (
    <nav className="w-full flex flex-row px-[50px] items-center justify-between bg-transparent h-full rounded-[25px] pt-[1px]">
      <style jsx>{`
        .dropdownContent {
          opacity: 0;
          visibility: hidden;
          position: absolute;
          background-color: #ffffff;
          border-radius: 12px;
          width: max-content;
          box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
          float: left;
          top: 55px;
          transition: 0.5s ease-in;
          padding: 10px;
        }

        .dropdownContent li {
          color: rgb(0, 0, 0);
          display: block;
          text-align: left;
          transition: color 0.2s ease-in-out;
          position: relative;
          padding: 12px 16px;
          cursor: pointer;
        }

        .dropdownContent li:hover {
          color: blue;
        }

        .dropdown:hover .dropdownContent {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      <div className="relative inline-block dropdown">
        <Link href={"/"}>
          <Button text="Company" />
        </Link>
        <div className="dropdownContent">
          <li>
            <Link href="/company/about">About Us</Link>
          </li>
          <li>
            <Link href="/company/team">Team</Link>
          </li>
        </div>
      </div>
      <div>
        <Link href={"/course"}>
          <Button text="Courses" />
        </Link>
      </div>
      <div>
        <Link href={"/portal"}>
          <Button text="LMS Portal" />
        </Link>
      </div>
      <div>
        <Link href={"/contact"}>
          <Button text="Contact" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;