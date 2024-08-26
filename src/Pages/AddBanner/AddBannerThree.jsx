import React from "react";
import Timer from "../../Components/Timer/Timer";

const endDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

const AddBannerThree = () => {
  return (
    <div className="md:pb-[50px] md:px-[80px] px-[20px] bg-[#f5f0e1] flex items-center justify-between gap-[20px]">
      <div className="addbanner_three_one h-[400px] box_shadow rounded-md w-full flex flex-col justify-center items-start pl-[40px]">
        <h4 className="text-[24px] font-semibold text-[#1e3d59]">
          Deal of the Day
        </h4>
        <p className="">Limited quantities.</p>
        <p className="text-[22px] w-[60%] pt-[10px] pb-[20px] leading-[24px]">
          Summer Collection New Morden Design
        </p>
        <p className="font-bold text-[20px] pb-[15px] text-[#ff6e40]">
          $139.00{" "}
          <span className="text-[gray] line-through font-semibold text-[18px]">
            $160.99
          </span>
        </p>
        <p>Hurry Up! Offer End In:</p>
        <Timer endDate={endDate} />
        <button className="py-[6px] px-[30px] bg-[#1e3d59] hover:bg-[#ff6e40] rounded-md text-[white] duration-500">
          Shop Now
        </button>
      </div>
      <div className="addbanner_three_two h-[400px] box_shadow rounded-md w-full flex flex-col justify-center items-start pl-[40px]">
        <h4 className="text-[24px] font-semibold text-[#1e3d59]">
          Men Clothing
        </h4>
        <p className="">Shirt & Bag.</p>
        <p className="text-[22px] w-[40%] pt-[10px] pb-[20px] leading-[24px]">
          Try something new on vacation
        </p>
        <p className="font-bold text-[20px] pb-[15px] text-[#ff6e40]">
          $178.00{" "}
          <span className="text-[gray] line-through font-semibold text-[18px]">
            $256.99
          </span>
        </p>
        <p>Hurry Up! Offer End In:</p>
        <Timer endDate={endDate} />
        <button className="py-[6px] px-[30px] bg-[#1e3d59] hover:bg-[#ff6e40] rounded-md text-[white] duration-500">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default AddBannerThree;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
// md:py-[50px]
// md:px-[80px] px-[20px]
