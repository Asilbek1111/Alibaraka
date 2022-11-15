import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import Frame from "../../Images/Frame.png";
import Telefon from "../../Images/Telefon.png";
import { Link } from "react-scroll";
import { LangContext } from "../../Context/Lang";

const Navbar = () => {
  const {lang , setLang} = useContext(LangContext)
  useEffect(() => {
   console.log(lang)
  }, [lang]);
  return (
    <div className="nav" id="nav">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" className="ham">
        &#9776;
      </label>
      <ul className="menu">
        <li>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Products
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      <div className="logo">
        <img src={Frame} alt="" />
      </div>
      <ul className="nav-list">
        <li>
          <Link to="nav" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Products
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <select onChange={(e)=> setLang(e.target.value)}>
            <option value="uz">Uz</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
        </li>
      </ul>

      <div className="info">
        <img src={Telefon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
