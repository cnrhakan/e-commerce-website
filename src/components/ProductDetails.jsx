import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { addToBasket } from "../redux/productsSlice";
import "../css/ProductDetails.css";
import Alert from "react-bootstrap/Alert";

function ProductDetails() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id == id);

  const handleAddToCart = () => {
    dispatch(addToBasket({ ...selectedProduct, quantity }));
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  if (!selectedProduct) {
    return <div className="product-not-found">Product not found</div>;
  }
  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={selectedProduct.image} alt={selectedProduct.title} />
      </div>
      <div className="product-info">
        <h1>{selectedProduct.title}</h1>
        <div className="category-badge">{selectedProduct.category}</div>
        <p className="description">{selectedProduct.description}</p>
        <p className="price">{selectedProduct.price} ₺</p>
        <div className="add-to-cart-container">
          <div className="counter-wrapper">
            <button
              className="count-button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <FaMinus />
            </button>
            <span className="count-display">{quantity}</span>
            <button
              className="count-button"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <FaPlus />
            </button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to basket
          </button>
          {showAlert && (
            <Alert variant="success" className="w-50 mx-auto">
              Product added to basket!
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
