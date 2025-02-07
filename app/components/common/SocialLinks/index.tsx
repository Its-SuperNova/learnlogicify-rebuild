import React from "react";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  alt: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => {
  return (
    <Link
      href={href}
      className="inline-block  rounded-full transition-colors duration-300 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      <div className="mt-[30px] flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[rgb(50,51,53)] text-[#dcdcdc] transition-colors duration-300 ease-in-out hover:bg-[#a600ff] hover:text-white">
        {icon}
      </div>
    </Link>
  );
};

export default SocialLink;
