import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/productsSlice";
import "../css/Basket.css";

function Basket() {
  const { addToBasket } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const totalPrice = addToBasket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="basket-container">
      <div className="basket-card">
        {!addToBasket || addToBasket.length == 0 ? (
          <div className="empty-basket">
            <p>Empty basket</p>
          </div>
        ) : (
          <>
            {addToBasket.map((item) => (
              <div key={item.id} className="basket-item">
                <div className="basket-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="basket-item-details">
                  <h3>{item.title}</h3>
                  <p className="basket-item-price">
                    {(item.price * item.quantity).toFixed(2)} ₺
                  </p>
                  <div className="basket-item-count">
                    <span>Quantity: {item.quantity}</span>
                    <button
                      className="remove-button"
                      onClick={() => dispatch(removeFromBasket(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <h3 className="total-price">Total: {totalPrice.toFixed(2)} ₺</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Basket;
