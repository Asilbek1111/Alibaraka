import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
// import {Routes, Route} from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.alibaraka.com/api/categories/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Fade left>
          <Link to={`products/categories=${product.id}`}>
            <div className="card" onClick={() => window.scrollTo({ top: 0 })}>
              <div className="card-left">
                <img className="product_img" src={product.image} alt="" />
              </div>
              <div className="card-right">
                <h2>{product.name_uz}</h2>
                <p>{product.text_uz}</p>
              </div>
            </div>
          </Link>
        </Fade>
      ))}

      {/* <Routes>
        <Route path={`/product/categories=${id}`} />
      </Routes> */}
    </>
  );
};

export default Product;
