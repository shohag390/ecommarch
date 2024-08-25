import React from "react";
import one from "../assets/Image/bg-image/feature-1.png";
import two from "../assets/Image/bg-image/feature-2.png";
import three from "../assets/Image/bg-image/feature-3.png";
import four from "../assets/Image/bg-image/feature-4.png";
import five from "../assets/Image/bg-image/feature-5.png";
import six from "../assets/Image/bg-image/feature-6.png";

const featureItem = [
  {
    image: one,
    name: "Free Shipping",
    color: "#FDDDE4",
  },
  {
    image: two,
    name: "Online Order",
    color: "#D1E8F2",
  },
  {
    image: three,
    name: "Save Money",
    color: "#CDEBBC",
  },
  {
    image: four,
    name: "Promotins",
    color: "#CDD4F8",
  },
  {
    image: five,
    name: "Happy Sell",
    color: "#F6DBF6",
  },
  {
    image: six,
    name: "24/7 Support",
    color: "#FFF2E5",
  },
];

const Feature = () => {
  return (
    <div className="md:px-[80px] w-full md:py-[50px] px-[20px] grid md:grid-cols-6 md:gap-[20px] bg-[#f5f0e1]">
      {featureItem?.map((feature, index) => (
        <div
          className="flex feature_card flex-col items-center justify-center gap-[20px] border-[1px] h-[200px] rounded-md px-[20px] bg-white w-full"
          key={index}
        >
          <img
            className="h-[100px] w-[100px] duration-500"
            src={feature?.image}
            alt="image"
          />
          <h4
            className="py-[4px] w-[100%] text-center rounded-md text-[#00718f] font-bold"
            style={{
              backgroundColor: `${feature?.color}`,
            }}
          >
            {feature?.name}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Feature;

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
