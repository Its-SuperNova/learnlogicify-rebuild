import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.dropdown}>
        <Link href={"/Company/About"}>Company</Link>
        <div className={styles.dropdownContent}>
          <li>
            <Link href="/Company/About">About Us</Link>
          </li>
          <li>
            <Link href="/Company/Team">Team</Link>
          </li>
          <li>
            <Link href="/Company/Portal">LMS Portal</Link>
          </li>
        </div>
      </div>
      <div>
        <Link href={"/courses"}>Courses</Link>
      </div>
      <div>
        <Link href={"/Services"}>Services</Link>
      </div>
      <div>
        <Link href={"/Contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
