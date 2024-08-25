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
    <div className="md:py-[80px] md:px-[80px] container">
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
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
            spaceBetween: 10,
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
              className="border-[1px] p-[10px] flex items-center justify-center flex-col"
            >
              <img src={item?.image} alt="" />
              <h4>{item?.name}</h4>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Categories;

// HeadingTextColor: #00718F
// ButtonPrimeryColor: #00718F
// ButtonHoverColor:#00556c
// Section to section Destance : md: 80px
