"use client";
import React from "react";
import Image from "next/image"; // Import the Image component
import styles from "./styles.module.css";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    designation: string;
    image: string;
    instagram: string;
    whatsapp: string;
    linkedin: string;
    backgroundColor: string;
    mail: string;
    bio: string;
  };
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoCloseOutline size={35} />
        </button>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image
              src={member.image}
              alt={`${member.name} Profile Image`}
              className={styles.profileImage}
              width={150} // Specify the width of the image
              height={150} // Specify the height of the image
              style={{ backgroundColor: member.backgroundColor }}
            />
            <div className={styles.socialIcons}>
              <Link
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconI}
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconL}
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconW}
              >
                <FaWhatsapp size={20} />
              </Link>
              <Link
                href={`mailto:${member.mail}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconG}
              >
                <SiGmail size={20} />
              </Link>
            </div>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.name}>{member.name}</h2>
            <p className={styles.role}>{member.designation}</p>
            <p>{member.bio}</p> {/* Display the bio content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
