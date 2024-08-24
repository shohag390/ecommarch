import React from "react";
import { categories } from "../assets/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Categories = () => {
  return (
    <div className="md:px-[80px] px-[20px] md:py-[50px] py-[30px]">
      <div className="pb-[20px]">
        <h4 className="text-xl font-semibold">
          <span className="text-[#00718f]">Popular</span> Categories
        </h4>
      </div>
      <div>
        <Swiper
          navigation={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div>
            {categories?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="border-2 cursor-pointer p-[8px] rounded-lg flex flex-col items-center justify-center gap-[10px]"
              >
                <div>
                  <img
                    className="w-[200px] h-[150px] rounded-md"
                    src={item?.image}
                    alt="image"
                  />
                </div>
                <h4 className="font-semibold text-[#00718f]">{item?.name}</h4>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
