import React from "react";
import { products } from "../../assets/data/product";

const Products = () => {
  return (
    <div className="md:px-[80px] px-[20px]">
      <div></div>
      <div className="pb-[10px] pt-[40px]">
        <h4 className="text-2xl font-bold text-[#00718f]">All Product</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
        {products.map((item) => (
          <div key={item?.id} className="border-2 p-[13px] card rounded-xl">
            <div className="card_image">
              {item?.image?.map((imageItem, index) => (
                <div
                  key={index}
                  className="h-[300px] w-full relative rounded-xl"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full rounded-xl card_image_one"
                    src={imageItem?.urlOne}
                    alt=""
                  />
                  <img
                    className="absolute top-0 left-0 w-full h-full rounded-lg card_image_two"
                    src={imageItem?.urlTwo}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div>
              <p>{item?.category}</p>
              <h4>{item?.name}</h4>
              <p className="font-bold text-[20px] text-[#00718f]">
                ${item?.price}{" "}
                <span className="line-through text-[#aba7a7] text-[15px] font-normal">
                  ${item?.afterPrice}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
