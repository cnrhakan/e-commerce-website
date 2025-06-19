import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import "../css/header.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../redux/productsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  let [isLightMode, setIsLightMode] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToBasket = useSelector((store) => store.products.addToBasket);

  useEffect(() => {
    document.querySelector("#root").className = isLightMode
      ? "light-mode"
      : "dark-mode";
  }, [isLightMode]);

  return (
    <>
      <nav className="header">
        <div className="header-container">
          <Link to="/" className="header-logo-div">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
          <div className="header-search">
            <input
              className="search-input"
              type="text"
              onChange={(e) => dispatch(setInputValue(e.target.value))}
            />
            <FaMagnifyingGlass className="magnifying" />
            {isLightMode ? (
              <MdOutlineWbSunny onClick={() => setIsLightMode(false)} />
            ) : (
              <IoMdSunny onClick={() => setIsLightMode(true)} />
            )}
            <div style={{ position: "relative", display: "inline-block" }}>
              <LuShoppingBasket onClick={() => navigate("/mybasket")} />
              {addToBasket.length > 0 && (
                <span className="basket-badge">
                  {addToBasket.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
