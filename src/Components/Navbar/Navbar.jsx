import React from "react";
import "./Navbar.css";
import Frame from "../../Images/Frame.png";
import Telefon from "../../Images/Telefon.png";

const Navbar = () => {
  return (
    <div className="nav">
        <label className="ham"> &#9776;</label>
      <div className="logo">
        <img src={Frame} alt="" />
      </div>
      <ul className="nav-list">
        <li>Home</li>
        <li>Products</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>

      <div className="info">
        <img src={Telefon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
