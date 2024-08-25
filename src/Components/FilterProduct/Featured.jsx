import React from "react";
import { products } from "../../assets/data/product";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";

const Featured = () => {
  const newaddedItem = products?.slice(5, 15);
  return (
    <div className="grid md:grid-cols-5 gap-[20px]">
      {newaddedItem.map((item) => (
        <div
          key={item?.id}
          className="w-full h-[350px] relative bg-[white] overflow-hidden duration-500 card rounded-[30px]"
        >
          <div className="absolute w-full h-full p-[13px] rounded-[30px]">
            <div className="card_image">
              {item?.image?.map((imageItem, index) => (
                <div
                  key={index}
                  className="h-[200px] w-full relative rounded-xl"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full rounded-[20px] card_image_one"
                    src={imageItem?.urlOne}
                    alt=""
                  />
                  <img
                    className="absolute top-0 left-0 w-full h-full rounded-[20px] card_image_two"
                    src={imageItem?.urlTwo}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[gray] pt-[10px]">{item?.category}</p>
              <h4 className="font-bold text-black pb-[6px]">{item?.name}</h4>
              <div>
                <Rating
                  initialRating={item?.rating}
                  readonly
                  fullSymbol={<AiFillStar className="text-[#ff6e40]" />}
                  emptySymbol={<AiFillStar className="text-[#1e3d59]" />}
                />
              </div>
              <p className="font-bold text-[20px] pb-[10px] text-[#00718f]">
                ${item?.price}{" "}
                <span className="line-through text-[#aba7a7] text-[15px] font-normal">
                  ${item?.afterPrice}
                </span>
              </p>
            </div>
          </div>
          <div className="absolute z-20 flex items-center justify-center w-full h-full bg-[#1e3d5941] hover_btn">
            <div className="flex items-center gap-[10px]">
              <button className="h-[40px] w-[40px] flex items-center justify-center hover:translate-y-[-4px] duration-500 hover:bg-[#ff6e40] hover:text-[white] text-[#1e3d59] bg-[#f5f0e1] rounded-full">
                <MdZoomOutMap />
              </button>
              <button className="h-[40px] w-[40px] flex items-center justify-center hover:translate-y-[-4px] duration-500 hover:bg-[#ff6e40] hover:text-[white] text-[#1e3d59] bg-[#f5f0e1] rounded-full">
                <FaHeart />
              </button>
              <button className="h-[40px] w-[40px] flex items-center justify-center hover:translate-y-[-4px] duration-500 hover:bg-[#ff6e40] hover:text-[white] text-[#1e3d59] bg-[#f5f0e1] rounded-full">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
