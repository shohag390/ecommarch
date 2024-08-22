import React from "react";
import Routing from "../Router/Routing";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routing />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
