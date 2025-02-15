import React from "react";
import Link from "next/link";
import Image from "next/image";

const Certificate = () => {
  return (
    <div className="w-full h-full border border-gray-300 rounded-2xl p-6 flex flex-row gap-10">
      <div className="w-[850px] h-full ">
        <Image
          className="w-full h-full rounded-2xl"
          src="/images/certificate/c-1.png"
          alt="Certificate of the course"
          width={600}
          height={400}
        />
      </div>
      <div className="flex flex-col w-full gap-3 ">
        <div className="text-2xl font-bold text-start">
          Certificate of the Course
        </div>
        <div className="text-lg text-gray-600 leading-7 pr-10 lg:pr-0">
          Upon successfully completing the course, you will be awarded the
          prestigious Certificate of Excellence from LearnLogicify Technologies.
          This certificate is a testament to your dedication and mastery of the
          subject, showcasing your commitment to continuous learning and your
          ability to apply advanced skills. It will be a valuable addition to
          your professional portfolio, helping you stand out to potential
          employers and opening doors to new career opportunities.
        </div>
        <div>
          <Link href="/images/certificate/c-1.png" passHref>
            <div className="bg-purple-700 hover:bg-purple-800 text-white text-lg rounded-lg flex items-center justify-center cursor-pointer w-36 mt-2 z-1 h-10 md:text-base">
              View Certificate
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
