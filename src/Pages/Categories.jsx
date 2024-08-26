import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SwiperBtn from "../Components/SwiperBtn/SwiperBtn";
import { categories } from "../assets/data/categories";

const Categories = () => {
  return (
    <div className="md:py-[50px] bg-[#f5f0e1] md:px-[80px] container">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: "review-swiper-button-next",
          prevEl: "review-swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className=""
      >
        <SwiperBtn title="Popular Categories" />
        <div>
          {categories?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="p-[10px] flex items-center bg-[white] rounded-[30px] justify-center flex-col gap-[8px]"
            >
              <img
                className="rounded-[20px] h-[160px] w-full"
                src={item?.image}
                alt=""
              />
              <h4 className="font-bold text-[#1e3d59] pb-[6px]">
                {item?.name}
              </h4>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Categories;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
