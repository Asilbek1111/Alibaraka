import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Uchburchak from "../../Images/3bur.png";
import Vector1 from "../../Images/Vector1.png";
import Vector2 from "../../Images/Vector2.png";
import P2 from "../../Images/1p.PNG";
import Archa from "../../Images/archa.png";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion/dist/es/index";
import Product from "../../Components/Product/Product";
import About from "../../Components/About/About";
import Hamkorlar from "../../Components/Hamkorlar/Hamkorlar";
import Trust from "../../Components/Trust/Trust";
import Stories from "../../Components/Stories/Stories";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AfterFooter from "../../Components/AfterFooter/AfterFooter";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <div className="home-wrapper">
          <div className="left">
            <h1>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
            <p>
              Here will be brief information about our company and some of
              advantages of our offers. Here will be brief information about our
              company.
            </p>
            <button>Explore</button>
          </div>
          <div className="right">
            <img className="vector1" src={Vector1} alt="" />
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="vector2"
              src={Vector2}
            />

            <div className="circle">
              <img src={Uchburchak} alt="" />
            </div>
          </div>
        </div>
      </header>
      <img className="p1" src={P2} alt="" />
      <div className="production" id="products">
        <div className="p-heading">
          <h1>Our production</h1>
          <p>
            "Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work
          </p>
        </div>
        <Fade top>
          <img className="archa" src={Archa} alt="" />
        </Fade>
        <Product />
      </div>

      <About />
      <Hamkorlar />
      <Trust />
      <Stories />
      <Contact />
      <Footer />
      <AfterFooter />
    </div>
  );
};

export default Home;
