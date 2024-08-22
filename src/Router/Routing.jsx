import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Components/Cart/Cart";
import Contacts from "../Components/Contacts/Contacts";
import Login from "../Components/Login/Login";
import ProductDtls from "../Components/ProductDtls/ProductDtls";
import Products from "../Components/Products/Products";
import Signup from "../Components/Signup/Signup";
import Wishlist from "../Components/Wishlist/Wishlist";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDtls />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
