import React from "react";

const AddBannerOne = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[40px]">
      <div className="w-full h-[280px] addbannerOne items-start flex flex-col justify-center px-[40px]">
        <p className="text-xl font-semibold text-[#00718f]">Repair Services</p>
        <h4 className="text-3xl font-bold pt-[10px]">We're an Apple</h4>
        <h4 className="text-3xl font-bold pb-[30px]">
          Authorised Service Provider
        </h4>
        <button className="bg-[#00718F] text-[white] py-[6px] px-[30px] font-semibold rounded-full hover:bg-[#00556c]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AddBannerOne;

// HeadingTextColor: #00718F
// ButtonPrimeryColor: #00718F
// ButtonHoverColor:#00556c
