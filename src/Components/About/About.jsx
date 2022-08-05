import React from "react";
import "./About.css";
import TraktorImg from "../../Images/imageT.png";
import Dal1 from "../../Images/dal1.png";
import Dal2 from "../../Images/dal2.png";
import LightSpeed from "react-reveal/LightSpeed";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="a-left">
        <h1>LITTLE ABOUT OUR COMPANY</h1>
        <p>
          "Your work is going to fill a large part of your life, and the only
          way to be truly satisfied is to do what you believe is great work. And
          the only way to do great work is to love what you do."
        </p>
        <div className="a-btns">
          <button>More about</button>
          <button>Our YouTube</button>
        </div>
      </div>
      <div className="a-right">
        <LightSpeed left>
          <img className="dal1" src={Dal1} alt="" />
          <img className="dal2" src={Dal2} alt="" />
        </LightSpeed>
        <LightSpeed right>
          <img className="traktor" src={TraktorImg} alt="" />
        </LightSpeed>
      </div>
    </div>
  );
};

export default About;
