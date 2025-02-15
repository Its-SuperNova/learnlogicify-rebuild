import React from "react";
import Link from "next/link";
import Image from "next/image";

const Certificate = () => {
  return (
    <div className="w-full h-full border border-gray-300 md:rounded-2xl rounded-xl p-4 md:p-6  flex flex-col lxx:flex-row gap-6 md:gap-10">
      <div className="w-full lxx:w-[600px] h-full ">
        <Image
          className="w-full h-full rounded-xl md:rounded-2xl"
          src="/images/certificate/c-1.png"
          alt="Certificate of the course"
          width={600}
          height={400}
        />
      </div>
      <div className="flex flex-col w-full gap-3 ">
        <div className="text-xl md:text-2xl font-bold text-start">
          <h1>Certificate of the Course</h1>
        </div>
        <div className="text-sm  md:text-[16px] md:leading-6  text-gray-600 leading-5 ">
          <p>
            Upon successfully completing the course, you will be awarded the
            prestigious Certificate of Excellence from LearnLogicify
            Technologies. This certificate is a testament to your dedication and
            mastery of the subject, showcasing your commitment to continuous
            learning and your ability to apply advanced skills. It will be a
            valuable addition to your professional portfolio, helping you stand
            out to potential employers and opening doors to new career
            opportunities.
          </p>
        </div>
        <div>
          <Link href="/images/certificate/c-1.png" passHref>
            <div className="bg-purple-700 hover:bg-purple-800 text-white text-md  rounded-lg flex items-center justify-center cursor-pointer w-36 mt-2 z-1 h-10 ">
              View Certificate
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
