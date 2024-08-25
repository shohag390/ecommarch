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
        !navbar
          ? "border-b-[1px] border-[#1e3d59]"
          : "border-b-[1px] box_shadow"
      }`}
    >
      <div className="md:h-[4vh] w-[100%] bg-[#1e3d59] flex items-center justify-between md:px-[80px] px-[20px]">
        <div className="flex items-center md:gap-[20px] gap-[10px]">
          <Link className="text-[#f5f0e1] text-[14px] hover:text-[#ff6e40] duration-500">
            Become a Seller
          </Link>
          <Link className="text-[#f5f0e1] text-[14px] hover:text-[#ff6e40] duration-500">
            Help & Support
          </Link>
        </div>
        <div className="flex items-center md:gap-[10px] gap-[5px]">
          <div>
            <FaFacebookF className="text-[#f5f0e1] hover:text-[#ff6e40] duration-500" />
          </div>
          <div>
            <AiFillInstagram className="text-[#f5f0e1] hover:text-[#ff6e40] duration-500" />
          </div>
          <div>
            <FaXTwitter className="text-[#f5f0e1] hover:text-[#ff6e40] duration-500" />
          </div>
          <div>
            <SlSocialPintarest className="text-[#f5f0e1] hover:text-[#ff6e40] duration-500" />
          </div>
        </div>
      </div>
      <div className="bg-[#f5f0e1] md:h-[9vh] h-[7vh] md:px-[80px] px-[20px] flex items-center justify-between">
        <Link to={"/home"} className="flex items-center gap-[3px]">
          <img
            className="md:h-[55px] h-[40px] md:w-[55px] w-[40px] "
            src={logo}
            alt=""
          />
          <span className="md:text-xl text-[16px] font-bold text-[#1e3d59]">
            Shop
          </span>
        </Link>
        <ul className="md:flex md:items-center md:gap-[30px] hidden">
          {navLink?.map((link, index) => (
            <li key={index}>
              <NavLink
                className={(navclass) =>
                  navclass.isActive
                    ? "text-[#ff6e40] font-bold"
                    : "font-bold text-[#1e3d59] hover:text-[#ff6e40]"
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
                <FaRegHeart className="h-full w-full absolute text-[#1e3d59]" />
                <div className="h-[10px] w-[10px] absolute top-[-4px] right-[-3px] bg-[#ff6e40] rounded-full"></div>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="relative md:h-[30px] h-[28px] md:w-[30px] w-[28px]">
                <MdOutlineShoppingCart className="h-full w-full absolute text-[#1e3d59]" />
                <div className="h-[10px] w-[10px] absolute top-[-4px] right-[-3px] bg-[#ff6e40] rounded-full"></div>
              </div>
            </Link>
            <Link
              to={"/login"}
              className="py-[6px] md:block hidden font-bold hover:bg-[#ff6e40] px-[30px] bg-[#1e3d59] duration-500 text-[white] rounded-md"
            >
              LOGIN
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <IoMenu className="text-[25px] text-[#1e3d59]" />
              ) : (
                <IoClose className="text-[25px] text-[#1e3d59]" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={`md:hidden py-[30px] w-full flex px-[20px] gap-[20px] justify-center flex-col duration-500 ${
            !isOpen
              ? "absolute top-[9vh] w-[100%] h-[91vh] left-[-1000px]"
              : "absolute top-[9vh] bg-[#f5f0e1] w-[100%] h-[91vh] left-0"
          }`}
        >
          {navLink?.map((link, index) => (
            <li key={index} className="">
              <NavLink
                className={(navclass) =>
                  navclass?.isActive
                    ? "text-[white] rounded-md py-[8px] border-[1px] border-[#ff6e40] font-bold w-[100%] flex items-center justify-center bg-[#ff6e40]"
                    : "text-[#1e3d59] rounded-md py-[8px] border-[1px] border-[#1e3d59] font-bold w-[100%] flex items-center justify-center"
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
                  ? "text-[white] rounded-md py-[8px] border-[1px] border-[#ff6e40] font-bold w-[100%] flex items-center justify-center bg-[#ff6e40]"
                  : "text-[#1e3d59] rounded-md py-[8px] border-[1px] border-[#1e3d59] font-bold w-[100%] flex items-center justify-center"
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

// HeaderText-Color :#1e3d59
// BgColor-Color :#1e3d59
// ParagraphText: #f5f0e1
// Button-Color :#1e3d59
// HoverButton-Color :#ff6e40
//md:py-[50px]
//md:px-[80px] px-[20px]
