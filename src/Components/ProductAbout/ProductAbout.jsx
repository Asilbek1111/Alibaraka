import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductAbout.css";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Buy from "../PurchaseButtons/Buy";
import Cart from "../PurchaseButtons/Cart";

const ProductAbout = () => {
  const [pro, setProducts] = useState([]);
  var { productId } = useParams();
  useEffect(() => {
    fetch("https://api.alibaraka.com/api/product_by_category")
      .then((res) => res.json())
      .then((data) => setProducts(data..Last.find((e) => e.id == Number(productId))));
  }, [productId]);

  return (
    <div className="product-about">
      <Navbar />
      {/* <h1>Mahsulot</h1> */}
      <div className="big-wrapper">
        <div className="left">
          <h1>{pro.name_en}</h1>
          <h3>{pro.sub_description_uz}</h3>
          <h2>Kelishilgan narxda</h2>
          <div className="pro-btns">
           <Buy />
           <Cart />
          </div>
        </div>

        <div className="right">
          <img src={pro.image2} alt="" />
        </div>
      </div>

      <div className="des">
        <h1>Tavsif</h1>
        <p>{pro.description_uz}</p>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ProductAbout;
