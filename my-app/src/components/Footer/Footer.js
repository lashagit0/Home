import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer>
      <div className="links-wrap">
        <div className="links">
          <p>Home</p>
          <p>About</p>
          <p>Houses</p>
          <p>Contact</p>
        </div>
        <div className="links">
          <p>Instagram</p>
          <p>Gmail</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="links">
          <p>Terms and Service</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
