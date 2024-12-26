// File: c:/Ashwin/projects/Learnlogicify/learnlogicify/app/pages/example.tsx
"use client";
import React from "react";
import {FlipWords} from "@/components/ui/flip-words"

const ExamplePage = () => {
  const words = ["Artificial Intelligence", "Machine Learning", "Data Science"];

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <FlipWords
        words={words}
        duration={5000}
        className="text-2xl font-bold text-black"
      />
    </div>
  );
};

export default ExamplePage;
