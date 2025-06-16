import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import "../css/header.css";

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
  );
}

export default Header;
