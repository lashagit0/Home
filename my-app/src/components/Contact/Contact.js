import React from "react";
import "./contact.css";

import svg1 from "./instagram-brands-solid.svg";
import svg2 from "./envelope-regular.svg";
import svg3 from "./facebook-brands-solid.svg";
import svg4 from "./twitter-brands-solid.svg";

const Contact = () => {
  return (
    <div className="contact-sec">
      <h2 className="contact-txt">Contact Us</h2>
      <div className="contact-icons">
        <img src={svg1} alt="icon" />
        <img src={svg2} alt="icon" />
        <img src={svg3} alt="icon" />
        <img src={svg4} alt="icon" />
      </div>
    </div>
  );
};
export default Contact;
