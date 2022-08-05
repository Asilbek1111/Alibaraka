import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import Address from '../../Images/address.png'
import Logo2 from '../../Images/logo2.png'
import Bounce from "react-reveal/Bounce";



const Footer = () => {
  return (
    <div className="footer">
      <div className="f-wrapper">
        <Bounce bottom>
          <div className="add-div">
            <img className="logo2" src={Logo2} alt="" />
            <img src={Address} alt="" />
          </div>
          <ul>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Frequent questions</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Plyonka</Link>
            </li>
            <li>
              <Link to="/">Zajim</Link>
            </li>
            <li>
              <Link to="/">Isitish x Sovutish</Link>
            </li>
            <li>
              <Link to="/">Suv taqsimoti</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">10x</Link>
            </li>
            <li>
              <Link to="/">Gardening</Link>
            </li>
            <li>
              <Link to="/">Melon</Link>
            </li>
            <li>
              <Link to="/">Water Dist</Link>
            </li>
          </ul>
        </Bounce>
      </div>
    </div>
  );
};

export default Footer;
