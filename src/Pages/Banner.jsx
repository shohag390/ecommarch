import { useRef, useState } from "react";
import banner_one from "../assets/Image/bg-image/slider-1.png";
import banner_two from "../assets/Image/bg-image/slider-2.png";
import banner_three from "../assets/Image/bg-image/slider-3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[80vh] w-full bg-[#f5f0e1] md:px-[80px] px-[20px]">
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#f5f0e1]">
          <div className="h-[80vh] w-full flex items-center px-[80px]">
            <div className="w-[50%]">
              <h4 className="text-xl font-bold pb-[15px]">Trade-in offer</h4>
              <h1 className="text-4xl font-bold pb-[10px]">
                Supper Value deals
              </h1>
              <h1 className="text-5xl font-bold text-[#1e3d59] pb-[15px]">
                All on products
              </h1>
              <p className="font-bold text-gray-500 pb-[30px]">
                Save more with coupons & up to 70% off
              </p>
              <Link className="banner_btn px-[60px] py-[10px] font-bold text-[#1e3d59]">
                Shop Now
              </Link>
            </div>
            <div className="w-[50%]">
              <img src={banner_one} alt="image" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#f5f0e1]">
          <div className="h-[80vh] w-full flex items-center px-[80px]">
            <div className="w-[50%]">
              <h4 className="text-xl font-bold pb-[15px]">Hot promotions</h4>
              <h1 className="text-4xl font-bold pb-[10px]">Fashion Trending</h1>
              <h1 className="text-5xl font-bold text-[#1e3d59] pb-[15px]">
                Great Collection
              </h1>
              <p className="font-bold text-gray-500 pb-[30px]">
                Save more with coupons & up to 20% off
              </p>
              <Link className="banner_btn px-[60px] py-[10px] font-bold text-[#1e3d59]">
                Shop Now
              </Link>
            </div>
            <div className="w-[50%]">
              <img src={banner_three} alt="image" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
