import React from "react";
import "./header.css";
import logo from "./Screenshot 2024-07-19 213501.png";
import cart from "./cart-shopping-solid.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </ul>
        <ul>
          <a className="nav-links" href="/">
            <li>Home</li>
          </a>
          <a className="nav-links" href="/">
            <li>About Us</li>
          </a>
          <a className="nav-links" href="/">
            <li>Houses</li>
          </a>
          <a className="nav-links" href="/">
            <li>Contact Us</li>
          </a>
        </ul>
        <ul className="nav-btn">
          <a href="/">
            <img className="cart" src={cart} alt="" />
          </a>
          <a href="/">
            <button>Sign Up</button>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
