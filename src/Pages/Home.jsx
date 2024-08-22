import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Product from "./Product";
import AddBannerOne from "./AddBanner/AddBannerOne";
import Categories from "./Categories";
import AddBannerTwo from "./AddBanner/AddBannerTwo";
import NewArrivals from "./NewArrivals";
import AddBannerThree from "./AddBanner/AddBannerThree";
import FeaturedBrands from "./FeaturedBrands";
import BestSell from "./BestSell";
import Blog from "./Blog";
import AddBannerFour from "./AddBanner/AddBannerFour";
import SellDtls from "./SellDtls";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Product />
      <AddBannerOne />
      <Categories />
      <AddBannerTwo />
      <NewArrivals />
      <AddBannerThree />
      <FeaturedBrands />
      <BestSell />
      <Blog />
      <AddBannerFour />
      <SellDtls />
      <Newsletter />
    </div>
  );
};

export default Home;
