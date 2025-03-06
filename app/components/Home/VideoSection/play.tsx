import { FaPlay } from "react-icons/fa";
const ButtonHover9 = () => {
  return (
    <>
      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full  bg-white  font-medium text-[24px]">
        <div className="inline-flex rounded-full translate-y-0 items-center justify-center p-7  bg-gradient-to-r text-black transition duration-500 group-hover:-translate-y-[150%]">
          <FaPlay />
        </div>
        <div className="absolute inline-flex p-7 w-full translate-y-[100%] items-center justify-center  transition  duration-500 group-hover:translate-y-0 text-white">
          <span className="absolute rounded-full h-full w-full translate-y-full  bg-black transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
          <span className="z-10">
            <FaPlay />
          </span>
        </div>
      </button>
    </>
  );
};

export default ButtonHover9;
