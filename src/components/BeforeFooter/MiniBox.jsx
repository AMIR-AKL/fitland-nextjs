import React from "react";
import { IoHome } from "react-icons/io5";
import { GrPaypal } from "react-icons/gr";
import { FaTruckArrowRight } from "react-icons/fa6";

export default function MiniBox({ iconShow1, iconShow2, iconShow3, text }) {
  return (
    <div className="bg-gray-50 size-22 md:size-30 flex flex-col items-center justify-center gap-5 rounded-xl border border-sky-300">
      <IoHome className={`${iconShow1} size-4 md:size-6`} />
      <GrPaypal className={`${iconShow2} size-4 md:size-6`} />
      <FaTruckArrowRight className={`${iconShow3} size-4 md:size-6`} />
      <h4 className="text-xs md:text-sm font-iransans-medium tracking-tight">
        {text}
      </h4>
    </div>
  );
}
