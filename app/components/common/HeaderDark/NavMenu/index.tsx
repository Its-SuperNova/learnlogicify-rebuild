import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.dropdown}>
        <Link href={"/"}>Company</Link>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/our-company/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/company/our-team">Team</Link>
          </li>
        </div>
      </div>
      <div>
        <Link href={"/course"}>Courses</Link>
      </div>
      <div>
        <Link href={"/portal"}>LMS Portal</Link>
      </div>
      <div>
        <Link href={"/contact-us"}>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
