import React from "react";
import Player from "react-lottie-player";
import animationData from "../../json/Fried Egg.json"; // Adjust the path accordingly

const CourseNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full mt-[-30px]">
      <div className="w-full flex justify-center mb-5">
        <Player
          play
          loop
          animationData={animationData}
          className="w-full max-w-[500px] h-auto md:max-w-[350px] md:max-h-[350px] sm:max-w-[250px] sm:max-h-[250px] sm:mt-24"
        />
      </div>
      <h2 className="text-[26px] text-gray-400 text-center px-5 mt-[-50px] sm:text-[5vw] sm:mt-[-30px] xs:text-[4vw] xs:mt-[-20px]">
        We&apos;re cooking up the courses you need! <br />
        They&apos;ll be served hot and fresh soon.
      </h2>
    </div>
  );
};

export default CourseNotFound;
