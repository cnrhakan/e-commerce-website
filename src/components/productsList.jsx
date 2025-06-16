import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../redux/productsSlice";
import "../css/productsList.css";

function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

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
  );
}

export default ProductsList;
