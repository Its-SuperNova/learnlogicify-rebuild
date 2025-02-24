import React from "react";
import Image from "next/image";
import Button from "@/app/components/common/buttons/magic-button";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <div className="flex flex-col items-center justify-center gap-[25px] max-w-[1100px]">
        <h1 className="text-[25px] md:text-[36px]">
          We are looking for{" "}
          <span className="font-semibold bg-gradient-to-r from-[#ab2ff8] to-[#fc059f] bg-clip-text text-transparent animate-gradient">
            Talented
          </span>{" "}
          People
        </h1>
        <p className="text-md font-light md:text-lg md:text-center ">
          Join our team at LearnLogicify Technologies LLP! We’re seeking
          passionate individuals who are eager to innovate, educate, and make a
          difference in the tech industry. If you love working in a creative
          environment and want to grow your career, this is the place for you.
          Be part of a team that values knowledge, innovation, and positive
          change. Let’s shape the future together!
        </p>
        <Button
          buttonText="Join Us"
          width="180px"
          height="50px"
          fontSize="14px"
        />
      </div>
      <Image
        src="/images/banner/Frame 11.png"
        alt="Join Us Banner"
        className="w-full max-w-[1200px] rounded-[10px] mt-[20px] max-[768px]:max-w-[900px] max-[480px]:max-w-full"
        width={800}
        height={400}
      />
    </div>
  );
};

export default JoinUs;
