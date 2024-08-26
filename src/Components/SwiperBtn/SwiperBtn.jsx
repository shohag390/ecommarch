import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperBtn = ({ title }) => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between section-header pb-[20px]">
      <h2 className="text-[23px] text-[#1e3d59] font-bold">{title}</h2>
      <div className="flex items-center gap-[10px]">
        <div
          className="h-[30px] w-[30px] bg-[#1e3d59] hover:bg-[#ff6e40] flex items-center justify-center rounded-full text-white"
          onClick={() => swiper.slidePrev()}
        >
          <button className="arrow-button" type="button">
            <IoIosArrowBack />
          </button>
        </div>

        <div
          className="h-[30px] w-[30px] bg-[#1e3d59] hover:bg-[#ff6e40] flex items-center justify-center rounded-full text-white"
          onClick={() => swiper.slideNext()}
        >
          <button className="arrow-button" type="button">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperBtn;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
