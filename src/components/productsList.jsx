import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../redux/productsSlice";
import "../css/productsList.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808

function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
<<<<<<< HEAD
  const { inputValue } = useSelector((store) => store.products);
  const navigate = useNavigate();
=======
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

<<<<<<< HEAD
  const filteredProducts =
    inputValue === ""
      ? products
      : products.filter((product) =>
          product.title.toLowerCase().includes(inputValue.toLowerCase())
        );

  return (
    <>
      <div className="cards">
        <div className="cards-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <div className="card-image-div">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-title">
                <p>{product.title}</p>
              </div>
              <div className="card-price">
                <h4>{product.price} ₺</h4>
              </div>
              <div className="go-detail">
                <button
                  onClick={() => navigate(`/product-details/${product.id}`)}
                  className="go-detail-btn"
                >
                  Go detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
=======
  // products array'i boşsa loading göster
  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-image-div">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-title">
              <p>{product.title}</p>
            </div>
            <div className="card-price">
              <h3>{product.price} ₺</h3>
            </div>
            <div className="go-detail">
              <button className="go-detail-btn">Go detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808
  );
}

export default ProductsList;
