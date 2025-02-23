"use client";
import React from "react";
import Card from "./card";
import { teamMembers } from "../data/teamData";
import Image from "next/image";

const OurTeam = () => {
  return (
    <main className="p-[50px] bg-white flex flex-col gap-[40px] items-center max-[460px]:p-[30px]">
      {/* Header Section */}
      <section className="flex flex-col items-center text-center">
        <h2 className="text-[24px] font-medium -mb-2 max-[768px]:text-[18px]">
          Our Team
        </h2>
        <h1 className="text-[44px] font-semibold max-[768px]:text-[32px]">
          Meet Our{" "}
          <span
            className="font-semibold bg-gradient-to-r from-[#ab2ff8] to-[#fc059f] 
          bg-clip-text text-transparent animate-gradient"
          >
            Leaders
          </span>
        </h1>
        <p className="text-[20px] font-light max-[768px]:text-[18px]">
          Meet the talented individuals behind our success
        </p>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-[repeat(3,255px)] gap-[30px] justify-center w-full max-[1180px]:grid-cols-[repeat(2,255px)] max-[1180px]:gap-x-[80px] max-[700px]:grid-cols-[repeat(1,255px)]">
        {teamMembers.map((member, index) => (
          <Card key={index} member={member} />
        ))}
      </section>

      {/* Description Section */}
      <section className="max-w-[1100px]">
        <p className="text-[18px] font-light leading-[24px] mb-[10px] text-gray-500 text-center max-[768px]:text-left">
          Our dynamic team at LearnLogicify Technologies is a fusion of talented
          individuals, each bringing a wealth of knowledge and experience from
          diverse backgrounds. Together, we share a deep commitment to
          excellence, innovation, and delivering high-quality education. We work
          hand in hand to create and offer exceptional training programs and
          courses, tailored to meet the evolving needs of our students. Get to
          know the passionate professionals who fuel our mission, driving our
          vision of delivering top-notch learning experiences forward, and
          ensuring that every student thrives in their journey with us.
        </p>
      </section>

      {/* Image Section */}
      <section className="relative flex justify-center items-center">
        <Image
          className="w-[950px] max-w-full h-auto rounded-[50px] max-[768px]:rounded-[40px]"
          src="/images/team/team.png"
          alt="Our Team"
          width={500}
          height={500}
          priority
        />
        <div
          className="absolute top-[20px] left-1/2 transform -translate-x-1/2 
          text-[62px] font-bold text-white py-[10px] px-[20px] rounded-[10px] text-center
          max-[1024px]:text-[48px] max-[1024px]:top-[15px] max-[1024px]:py-[8px] max-[1024px]:px-[16px]
          max-[768px]:text-[38px] max-[768px]:top-[15px] max-[768px]:py-[8px] max-[768px]:px-[16px]
          max-[568px]:text-[28px] max-[568px]:top-[14px] max-[568px]:py-[6px] max-[568px]:px-[12px]
          max-[460px]:text-[24px] max-[460px]:top-[10px] max-[460px]:py-[4px] max-[460px]:px-[8px]"
        >
          #TogetherWeGrow
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
