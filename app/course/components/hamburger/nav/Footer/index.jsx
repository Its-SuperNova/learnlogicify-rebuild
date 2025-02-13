import React from 'react';
import SocialLink from '@/app/components/common/SocialLinks'; // Adjust the path as needed
import { FaWhatsapp, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function index() {
return (
    <div className="flex justify-between max-w-[230px] ml-3px">
      <SocialLink href="https://wa.me" icon={<FaWhatsapp />} alt="WhatsApp" />
      <SocialLink href="https://www.youtube.com" icon={<FaYoutube />} alt="YouTube" />
      <SocialLink href="https://www.linkedin.com" icon={<FaLinkedin />} alt="LinkedIn" />
      <SocialLink href="https://www.instagram.com" icon={<FaInstagram />} alt="Instagram" />
    </div>
  );
}

