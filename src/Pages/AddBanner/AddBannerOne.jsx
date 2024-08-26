import React from "react";

const AddBannerOne = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:pt-[50px] pb-[5px] bg-[#f5f0e1]">
      <div className="w-full h-[280px] addbannerOne rounded-md items-start flex flex-col justify-center px-[40px]">
        <p className="text-xl font-semibold text-[#1e3d59]">Repair Services</p>
        <h4 className="text-3xl font-bold pt-[10px]">We're an Apple</h4>
        <h4 className="text-3xl font-bold pb-[30px]">
          Authorised Service Provider
        </h4>
        <button className="bg-[#1e3d59] duration-500 text-[white] py-[6px] px-[30px] font-bold rounded-md hover:bg-[#ff6e40]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AddBannerOne;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
