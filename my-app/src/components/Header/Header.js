import React from "react";
import "./header.css";
import logo from "./Screenshot 2024-07-19 213501.png";

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
            <li>Contact</li>
          </a>
        </ul>
        <ul>
          <a href="/">
            <button>Sign Up</button>
          </a>
          <a href="/">
            <button>Cart</button>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
