import React from "react";
import logo from "../../assets/Image/logo/logo.svg";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="h-[16vh] w-full md:px-[80px] px-[20px]">
      <div className="h-[10vh] flex items-center justify-between">
        <div className="">
          <img className="h-[30px]" src={logo} alt="logo" />
        </div>
        <div className="flex items-center">
          <input
            className="w-[400px] py-[6px] border-[#046963] border-[1px] rounded-l-md bg-transparent px-[20px]"
            placeholder="Search for items"
            type="text"
          />
          <button className="bg-[#088178] hover:bg-[#046963] hover:border-[#046963] rounded-r-md text-[white] py-[7px] px-[20px] border-[#088178]">
            Search
          </button>
        </div>
        <div className="flex items-center gap-[4px]">
          <BiSupport className="text-2xl font-bold" />
          <span className="font-bold">
            Hotline <span className="text-[#088178]">(224) 348-3467</span>{" "}
          </span>
        </div>
      </div>
      <div className=""></div>
    </header>
  );
};

export default Navbar;

// HeadingTextColor: #088178
// ButtonPrimeryColor: #088178
// ButtonHoverColor: #046963
