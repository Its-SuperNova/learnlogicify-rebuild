import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CertificateProps {
  imageUrl: string;
  title: string;
  description: string;
  certificateLink: string;
}

const Certificate: React.FC<CertificateProps> = ({
  imageUrl,
  title,
  description,
  certificateLink,
}) => {
  return (
    <div className="w-full h-full border border-gray-300 md:rounded-2xl rounded-xl p-4 md:p-6 flex flex-col lxx:flex-row gap-6 md:gap-10">
      <div className="w-full lxx:w-[600px] h-full">
        <Image
          className="w-full h-full rounded-xl md:rounded-2xl"
          src={imageUrl}
          alt="Certificate of the course"
          width={600}
          height={400}
        />
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="text-xl md:text-2xl font-bold text-start">
          <h1>{title}</h1>
        </div>
        <div className="text-sm md:text-[16px] md:leading-6 text-gray-600 leading-5">
          <p>{description}</p>
        </div>
        <div>
          <Link href={certificateLink} passHref>
            <div className="bg-purple-700 hover:bg-purple-800 text-white text-md rounded-lg flex items-center justify-center cursor-pointer w-36 mt-2 z-1 h-10">
              View Certificate
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
