import React, { useContext } from "react";
import "./Product.css";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { LangContext } from "../../Context/Lang";
// import {Routes, Route} from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([]);
  const { lang, setLang } = useContext(LangContext);

  useEffect(() => {
    fetch("https://api.alibaraka.com/api/categories/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.length > 0 && (
        <ul id="product">
          {products
            .filter((e) => e.image)
            .map((product, i) => (
              <li key={i} id={product.id}>
                <Link
                  id={product.id}
                  to={`/categoryId=${product.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <Fade left>
                    <div className="card">
                      <div className="card-left">
                        <img
                          className="product_img"
                          src={product.image}
                          alt=""
                        />
                      </div>
                      <div className="card-right">
                        <h2>
                          {lang === "uz" ? product.name_uz : null}
                          {lang === "en" ? product.name_en : null}
                          {lang === "ru" ? product.name_ru : null}
                        </h2>
                        <p>
                          {lang === "uz" ? product.text_uz : null}
                          {lang === "en" ? product.text_en : null}
                          {lang === "ru" ? product.text_ru : null}
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Link>
              </li>
            ))}
        </ul>
      )}
      {/* {products.map((product) => (
        <Fade left>
          <Link
          to={`/categoryId=${product.id}`}>
            <div className="card">
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
      ))} */}

      {/* <Routes>
        <Route path={`/product/categories=${id}`} />
      </Routes> */}
    </>
  );
};

export default Product;
