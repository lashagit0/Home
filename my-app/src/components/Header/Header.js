import React from "react";
import "./header.css";
import logo from "./file.png";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <img src={logo} alt="" />
          </ul>
          <ul>
            <li>Home</li>
            <li>Houses</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <button>Sign Up</button>
            <button>Cart</button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
