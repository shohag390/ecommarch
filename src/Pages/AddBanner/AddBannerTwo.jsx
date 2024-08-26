import React from "react";
import { Link } from "react-router-dom";

const AddBannerTwo = () => {
  return (
    <div className="pb-[50px] md:px-[80px] px-[20px] md:flex md:items-center md:justify-between md:gap-[20px] bg-[#f5f0e1]">
      <div className="bannerTwoOne flex flex-col items-start pl-[20px] justify-center h-[200px] w-full rounded-md">
        <p className="text-[gray] font-semibold">Smart Offer</p>
        <h4 className="text-[#1e3d59] font-semibold pb-[10px] w-[60%] text-2xl">
          Save 20% on Woman Bag
        </h4>
        <Link className="text-[white] py-[4px] px-[15px] hover:bg-[#ff6e40] duration-500 rounded-md bg-[#1e3d59]">
          Shop Now
        </Link>
      </div>
      <div className="bannerTwoTwo flex flex-col items-start pl-[20px] justify-center h-[200px] w-full rounded-md">
        <p className="text-[gray] font-semibold">Sale off</p>
        <h4 className="text-[#1e3d59] font-semibold pb-[10px] w-[60%] text-2xl">
          Great Summer Collection
        </h4>
        <Link className="text-[white] py-[4px] px-[15px] hover:bg-[#ff6e40] duration-500 rounded-md bg-[#1e3d59]">
          Shop Now
        </Link>
      </div>
      <div className="bannerTwoThree flex flex-col items-start pl-[20px] justify-center h-[200px] w-full rounded-md">
        <p className="text-[gray] font-semibold">New Arrivals</p>
        <h4 className="text-[#1e3d59] font-semibold pb-[10px] w-[60%] text-2xl">
          Shop Today’s Deals & Offers
        </h4>
        <Link className="text-[white] py-[4px] px-[15px] hover:bg-[#ff6e40] duration-500 rounded-md bg-[#1e3d59]">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default AddBannerTwo;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
