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
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="h-[87vh] w-full md:px-[80px] px-[20px]">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[87vh] w-full bg-white flex items-center">
          <div className="w-[50%]">
            <h4 className="text-xl font-bold pb-[15px]">Trade-in offer</h4>
            <h1 className="text-4xl font-bold pb-[10px]">Supper Value deals</h1>
            <h1 className="text-5xl font-bold text-[#00718f] pb-[15px]">
              All on products
            </h1>
            <p className="font-bold text-gray-500 pb-[30px]">
              Save more with coupons & up to 70% off
            </p>
            <Link className="banner_btn px-[60px] py-[10px] font-bold text-[#00718f]">
              Shop Now
            </Link>
          </div>
          <div className="w-[50%]">
            <img className="w-full h-full" src={banner_one} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[87vh] w-full bg-white flex items-center">
          <div className="w-[50%]">
            <h4 className="text-xl font-bold pb-[15px]">Upcoming Offer</h4>
            <h1 className="text-4xl font-bold pb-[10px]">Big Deals From</h1>
            <h1 className="text-5xl font-bold text-[#00718f] pb-[15px]">
              Manufacturer
            </h1>
            <p className="font-bold text-gray-500 pb-[30px]">
              Clothing, Shoes, Bags, Wallets...
            </p>
            <Link className="banner_btn px-[60px] py-[10px] font-bold text-[#00718f]">
              Discover Now
            </Link>
          </div>
          <div className="w-[50%]">
            <img className="w-full h-full" src={banner_two} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[87vh] w-full bg-white flex items-center">
          <div className="w-[50%]">
            <h4 className="text-xl font-bold pb-[15px]">Hot promotions</h4>
            <h1 className="text-4xl font-bold pb-[10px]">Fashion Trending</h1>
            <h1 className="text-5xl font-bold text-[#00718f] pb-[15px]">
              Great Collection
            </h1>
            <p className="font-bold text-gray-500 pb-[30px]">
              Save more with coupons & up to 20% off
            </p>
            <Link className="banner_btn px-[60px] py-[10px] font-bold text-[#00718f]">
              Shop Now
            </Link>
          </div>
          <div className="w-[50%]">
            <img className="w-full h-full" src={banner_three} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
