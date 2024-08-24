import { useState } from "react";
import logo from "../../assets/Image/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaFacebookF, FaRegHeart } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialPintarest } from "react-icons/sl";
import { MdOutlineShoppingCart } from "react-icons/md";

const navLink = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/products",
    display: "Product",
  },
  {
    path: "/contacts",
    display: "Contacts",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`sticky top-0 left-0 z-50 ${
        !navbar ? "border-b-[1px]" : "border-b-[1px] box_shadow"
      }`}
    >
      <div className="md:h-[4vh] h-[3vh] w-[100%] bg-[#00718F] flex items-center justify-between md:px-[80px] px-[20px]">
        <div className="flex items-center md:gap-[20px] gap-[10px]">
          <Link className="text-white text-[12px] hover:text-[tomato]">
            Become a Seller
          </Link>
          <Link className="text-white text-[12px] hover:text-[tomato]">
            Help & Support
          </Link>
        </div>
        <div className="flex items-center md:gap-[10px] gap-[5px]">
          <div>
            <FaFacebookF className="text-white" />
          </div>
          <div>
            <AiFillInstagram className="text-white" />
          </div>
          <div>
            <FaXTwitter className="text-white" />
          </div>
          <div>
            <SlSocialPintarest className="text-white" />
          </div>
        </div>
      </div>
      <div className="bg-[white] md:h-[9vh] h-[6vh] md:px-[80px] px-[20px] flex items-center justify-between">
        <Link to={"/home"} className="flex items-center gap-[3px]">
          <img
            className="md:h-[55px] h-[40px] md:w-[55px] w-[40px] "
            src={logo}
            alt=""
          />
          <span className="md:text-xl text-[16px] font-bold text-[#00718F]">
            Shop
          </span>
        </Link>
        <ul className="md:flex md:items-center md:gap-[30px] hidden">
          {navLink?.map((link) => (
            <li>
              <NavLink
                className={(navclass) =>
                  navclass.isActive
                    ? "text-[tomato] font-semibold"
                    : "font-semibold text-[#00718F]"
                }
                to={link?.path}
              >
                {link?.display}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <div className="flex items-center gap-[20px]">
            <Link to={"/wishlist"}>
              <div className="relative md:h-[26px] h-[24px] md:w-[26px] w-[24px]">
                <FaRegHeart className="h-full w-full absolute text-[#00718F]" />
                <div className="h-[10px] w-[10px] absolute top-[-4px] right-[-3px] bg-[tomato] rounded-full"></div>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="relative md:h-[30px] h-[28px] md:w-[30px] w-[28px]">
                <MdOutlineShoppingCart className="h-full w-full absolute text-[#00718F]" />
                <div className="h-[10px] w-[10px] absolute top-[-4px] right-[-3px] bg-[tomato] rounded-full"></div>
              </div>
            </Link>
            <Link
              to={"/login"}
              className="py-[6px] md:block hidden hover:bg-[#00556c] px-[30px] bg-[#00718F] duration-500 text-white rounded-full"
            >
              Login
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <IoMenu className="text-[25px]" />
              ) : (
                <IoClose className="text-[25px]" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={`md:hidden py-[30px] w-full flex px-[20px] gap-[20px] justify-center flex-col duration-500 ${
            !isOpen
              ? "absolute top-[9vh] w-[100%] h-[91vh] left-[-1000px]"
              : "absolute top-[9vh] bg-[white] w-[100%] h-[91vh] left-0"
          }`}
        >
          {navLink?.map((link) => (
            <li className="">
              <NavLink
                className={(navclass) =>
                  navclass?.isActive
                    ? "text-[white] rounded-full py-[8px] border-[1px] duration-500 border-[#00718f] font-bold w-[100%] flex items-center justify-center bg-[tomato]"
                    : "text-[#00718f] rounded-full py-[8px] border-[1px] border-[#00718f] font-bold w-[100%] flex items-center justify-center"
                }
                to={link?.path}
              >
                {link?.display}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to={"/login"}
              className={(navClass) =>
                navClass?.isActive
                  ? "text-[white] rounded-full py-[8px] border-[1px] duration-500 border-[#00718f] font-bold w-[100%] flex items-center justify-center bg-[tomato]"
                  : "text-[#00718f] rounded-full py-[8px] border-[1px] border-[#00718f] font-bold w-[100%] flex items-center justify-center"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

// HeadingTextColor: #00718F
// ButtonPrimeryColor: #00718F
// ButtonHoverColor:#00556c
