import React from "react";
import { MdOutlineAttachEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="w-full h-[100px] bg-[#00556c] md:px-[80px] px-[20px] flex items-center justify-between">
      <div className="w-[30%] flex items-center gap-[8px] text-[white]">
        <MdOutlineAttachEmail className="text-[35px]" />
        <span className="text-xl font-semibold">Sign up to Newsletter</span>
      </div>
      <div className="w-[30%] flex justify-center">
        <p className="font-semibold text-white">
          ...and receive $25 coupon for first shopping.
        </p>
      </div>
      <div className="w-[40%] flex items-center justify-center">
        <div className="relative w-full h-[40px] bg-[white] flex items-center rounded-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="absolute w-full pl-[30px] pr-[230px] focus:outline-none h-full rounded-full"
          />
          <button className="w-[150px] bg-[black] h-[35px] rounded-full text-[white] absolute right-[3px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
