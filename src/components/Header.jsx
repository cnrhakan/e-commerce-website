<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import "../css/header.css";
<<<<<<< HEAD
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInputValue } from "../redux/productsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  let [isLightMode, setIsLightMode] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <LuShoppingBasket onClick={() => navigate("/mybasket")} />
          </div>
        </div>
      </nav>

      <Outlet />
    </>
=======

function Header() {
  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-logo-div">
          <img src="/images/biradam.jpeg" alt="Logo" />
        </div>
        <div className="header-search">
          <input type="text" />
          <FaMagnifyingGlass className="magnifying" />
          <MdOutlineWbSunny />
          <LuShoppingBasket />
          {/* <IoMdSunny />  */}
        </div>
      </div>
    </nav>
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808
  );
}

export default Header;
