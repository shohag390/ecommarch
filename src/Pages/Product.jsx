import React, { useState } from "react";
import { Link } from "react-router-dom";
import Featured from "../Components/FilterProduct/Featured";
import Popular from "../Components/FilterProduct/Popular";
import Newadded from "../Components/FilterProduct/Newadded";

const Product = () => {
  const [product, setProduct] = useState("featured");

  return (
    <div className="md:px-[80px] px-[20px] bg-[#f5f0e1]">
      <div className="pb-[25px] flex items-center gap-[10px]">
        <button
          onClick={() => setProduct("featured")}
          className={`${
            product === "featured" && "bg-[#ff6e40]"
          } py-[5px] px-[30px] bg-[#1e3d59] font-bold rounded-md text-white`}
        >
          Featured
        </button>
        <button
          onClick={() => setProduct("popular")}
          className={`${
            product === "popular" && "bg-[#ff6e40]"
          } py-[5px] px-[30px] bg-[#1e3d59] font-bold rounded-md text-white`}
        >
          Popular
        </button>
        <button
          onClick={() => setProduct("newadded")}
          className={`${
            product === "newadded" && "bg-[#ff6e40]"
          } py-[5px] px-[30px] bg-[#1e3d59] font-bold rounded-md text-white`}
        >
          New added
        </button>
      </div>
      <div>
        {product === "featured" && <Featured />}
        {product === "popular" && <Popular />}
        {product === "newadded" && <Newadded />}
      </div>
    </div>
  );
};

export default Product;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
