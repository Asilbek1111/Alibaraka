import React from "react";
import "./Trust.css";
import Flag from "../../Images/flag.png";
import SimpleAccordion from "../Accordion/Accordion";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Trust = () => {
  return (
    <div className="trust">
      <div className="t-left">
        <Fade left>
          <img className="flag" src={Flag} alt="" />
        </Fade>
      </div>
      <div className="t-right">
        <div className="inner">
          <h1 className="heading">See why we are trusted the world over</h1>
          <p className="para">
            The first rule of any technology used in a business is that
            automation applied to an efficient operation will magnify the
            efficiency.
          </p>
          <Flip left>
            <SimpleAccordion />
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default Trust;
