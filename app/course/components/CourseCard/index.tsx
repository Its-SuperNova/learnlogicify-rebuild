import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";

interface Props {
  url: string;
  Level: string;
  icon: IconType;
  title: string;
  topics: number;
  videos: number;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
  available: boolean;
}

const Card = (props: Props) => {
  const {
    url,
    Level,
    icon: Icon,
    title,
    topics,
    videos,
    desc,
    offer,
    price,
    originalPrice,
    bannerColor,
    available,
  } = props;

  return (
    <div className="h-auto w-full  p-2 border border-gray-300 rounded-[17px] flex flex-col items-center pb-0 transition-all duration-300 relative hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      {/* Banner */}
      <div
        className="h-full w-full rounded-[20px] p-4 flex flex-col justify-start"
        style={{ backgroundColor: bannerColor }}
      >
        {/* Header */}
        <div className="flex flex-row items-center justify-between">
          {/* Level Badge */}
          <div className="bg-white inline-block px-4 py-0.5 text-xs font-medium rounded-full">
            <p>{Level}</p>
          </div>
          {/* Icon */}
          <div className="w-10 h-10 bg-white rounded-lg flex justify-center items-center">
            <Icon size={25} />
          </div>
        </div>

        {/* Title */}
        <div className="text-xl font-bold mt-2.5 pl-1.5 leading-[30px]">
          {title}
        </div>

        {/* Stats Section */}
        <div className="flex flex-row items-center gap-1 pl-1.5 pt-1.5">
          <div className="text-[11px] text-gray-500 flex flex-row items-center justify-center gap-0.5">
            <FaRegRectangleList size={14} />
            <span>{topics} Topics</span>
          </div>
          <span className="text-gray-400 text-sm font-medium">|</span>
          <div className="text-[11px] text-gray-500 flex flex-row items-center justify-center gap-0.5">
            <MdSlowMotionVideo size={15} />
            <span>{videos} Videos</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-3 text-[13px] pl-1.5 text-gray-600">{desc}</div>
      </div>

      {/* Pricing Section */}
      <div className="h-[110px] w-full flex flex-row items-center justify-between px-3">
        {available ? (
          <>
            <div>
              <div className="w-[52px] h-[15px] text-[10px] flex items-center justify-center text-white bg-purple-600 rounded-md">
                {offer}
              </div>
              <div className="flex flex-row items-center gap-2 mt-1">
                <div className="font-bold text-lg">{price}</div>
                <div className="text-sm text-gray-400 line-through">
                  {originalPrice}
                </div>
              </div>
            </div>
            <Link href={url}>
              <div className="w-[78px] h-[35px] bg-black text-white rounded-full flex items-center justify-center font-medium cursor-pointer hover:bg-gray-900">
                Buy
              </div>
            </Link>
          </>
        ) : (
          <div className="w-full h-[35px] bg-purple-600 rounded-lg text-white flex items-center justify-center font-medium">
            Coming Soon
          </div>
        )}
      </div>

      {/* Clickable Overlay */}
      {available && (
        <Link href={url}>
          <div className="absolute top-0 left-0 w-full h-full "></div>
        </Link>
      )}
    </div>
  );
};

export default Card;
