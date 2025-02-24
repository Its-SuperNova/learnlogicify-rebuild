"use client";
import React from "react";
import Card from "./card";
import { teamMembers } from "../data/teamData";
import Image from "next/image";

const OurTeam = () => {
  return (
    <main className="bg-white flex flex-col gap-[40px] items-center">
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
      <section className="grid grid-cols-[1fr] ss:grid-cols-2 mg:grid-cols-3 gap-[30px] justify-center w-full max-w-[1100px]">
        {teamMembers.map((member, index) => (
          <Card key={index} member={member} />
        ))}
      </section>

      {/* Description Section */}
      <section className="max-w-[1100px]">
        <p className="text-md font-light leading-[24px] mb-[10px] md:text-lg md:text-center">
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
      <section className="relative flex justify-center items-center md:rounded-[50px]">
        <Image
          className="w-[950px] max-w-full h-auto rounded-3xl md:rounded-[50px]"
          src="/images/team/team.png"
          alt="Our Team"
          width={500}
          height={500}
          priority
        />
        <div
          className="absolute top-[20px] left-1/2 transform -translate-x-1/2 
          text-lg ss:text-[28px] ss:mt-5 md:text-[36px] md:mt-10 lx:text-[54px] lx:mt-[60px] font-bold text-white py-[10px] px-[20px] rounded-[10px] text-center
          "
        >
          #TogetherWeGrow
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
