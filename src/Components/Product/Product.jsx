import React from "react";
import "./Product.css";
import Fade from "react-reveal/Fade";

const Product = (props) => {
  return (
    <Fade left>
      <div className="card">
        <div className="card-left">
          <img src={props.img} alt="" />
        </div>
        <div className="card-right">
          <h2>{props.bText}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Product;
