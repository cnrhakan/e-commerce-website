import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../redux/productsSlice";
import "../css/productsList.css";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const { inputValue } = useSelector((store) => store.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

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
  );
}

export default ProductsList;
