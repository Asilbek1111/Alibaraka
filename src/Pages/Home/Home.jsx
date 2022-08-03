import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Uchburchak from "../../Images/3bur.png";
import Vector1 from "../../Images/Vector1.png";
import Vector2 from "../../Images/Vector2.png";
import P2 from "../../Images/1p.PNG";
import Img1 from "../../Images/img1.png";
import Img2 from "../../Images/img2.png";
import Img3 from "../../Images/img3.png";
import Img4 from "../../Images/img4.png";
import Img5 from "../../Images/img5.png";
import Img6 from "../../Images/IMAGE.png";
import Archa from "../../Images/archa.png";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import Product from "../../Components/Product/Product";
import About from "../About/About";
import Hamkorlar from "../../Components/Hamkorlar/Hamkorlar";
import Trust from "../Trust/Trust";

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
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              // viewport={{ margin: "-40px" }}
              transition={{ repeat: Infinity, duration: 8, type: "spring" }}
              className="vector2"
              src={Vector2}
              alt=""
            />

            <div className="circle">
              <img src={Uchburchak} alt="" />
            </div>
          </div>
        </div>
      </header>
      <img className="p1" src={P2} alt="" />
      {/* <img className="p1" src={P2} alt="" /> */}
      {/* <img className="p2" src={P2} alt="" /> */}
      <div className="production">
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
        <Product
          img={Img1}
          bText="Asosiy Plyonka 
                  Turlari"
          text="Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <Product
          img={Img2}
          bText="Asosiy Zajim turlari"
          text="Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <Product
          img={Img6}
          bText="Tomchilab sug'orish tizimi"
          text="Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <Product
          img={Img3}
          bText="Issiqxonaning sovutish tizimi"
          text="Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <Product
          img={Img5}
          bText="Issiqxonaning isitish tizimi"
          text="Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
        <Product
          img={Img4}
          bText="Qo'shimcha aksessuarlar"
          text="Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
        />
      </div>

      <About />
      <Hamkorlar />
      <Trust />
    </div>
  );
};

export default Home;
