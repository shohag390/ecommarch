import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperBtn = ({ title }) => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between bg-[white] section-header pb-[20px]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex items-center gap-[20px]">
        <div
          className="h-[30px] w-[30px] bg-[#00718f] flex items-center justify-center rounded-full text-white"
          onClick={() => swiper.slidePrev()}
        >
          <button className="arrow-button" type="button">
            <IoIosArrowBack />
          </button>
        </div>

        <div
          className="h-[30px] w-[30px] bg-[#00718f] flex items-center justify-center rounded-full text-white"
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
