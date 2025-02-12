import React from "react";
import Player from "react-lottie-player";
import animationData from "../../json/coffee.json";

const CourseNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full flex justify-center mb-5">
        <Player
          play
          loop
          animationData={animationData}
          className="w-full max-w-[400px] h-auto sm:max-w-[350px] xs:max-w-[300px]"
        />
      </div>
      <h2 className="text-xl max-w-[700px] text-gray-600 text-center font-semibold px-4">
        ☕ Oops! No courses here—looks like they went for a coffee break! Be back soon! 🚀✨
      </h2>
    </div>
  );
};

export default CourseNotFound;
