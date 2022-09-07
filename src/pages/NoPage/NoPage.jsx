import React from "react";
import logoBg from "../../assets/404.png";
import NavbarBootstrap from "../../components/Navbar/NavbarBootstrap";
import Footer from "../../components/Footer/Footer";
import "./NoPage.scss";

function NoPage() {
  return (
    <>
      <NavbarBootstrap />
      <img src={logoBg} alt="" className="logo" />
      <Footer />
    </>
  );
}

export default NoPage;
